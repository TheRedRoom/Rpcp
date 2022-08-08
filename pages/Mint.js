import React from "react";
import { useState, useEffect } from 'react';
import { BigNumber, ethers } from 'ethers';
import Link from "next/link";
import Head from 'next/head';
import InfosAccount from '../Components/InfosAccount';
import Contract from '../artifacts/contracts/RpcpRaton.sol/RpcpRaton.json';
import ERC20 from "../artifacts/contracts/ERC20.sol/ERC20.json";
import styles from '../styles/Mint.module.css';

const address = "0xE8627f780224F64358b3aa2DaD3E4C38C6D119F1";

export default function Mint(){

  const [loader, setLoader] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    getAccounts();
    if (accounts.length > 0 && loader) {

      setLoader(false); 
      fetchData()
    }
  }, [accounts])


  async function fetchData() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(address, Contract.abi, provider);
      try {
        const totalSupply = await contract.totalSupply();
        const priceRaton = await contract.priceRaton();
        const tokenAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
        console.log(tokenAddress, accounts);
        const usdc = new ethers.Contract(tokenAddress, ERC20.abi, provider);
        const allowance = await usdc.allowance(accounts[0], address);
        const approved = BigNumber.from("5000000000").lte(BigNumber.from(allowance));//change this to 2000000000 for usdc because it has less decimals then the test token
        console.log(`token contract ${usdc} ${BigNumber.from(allowance)}`);
        const object = {"approved": approved, "allowance": String(allowance), "tokenAddress": String(tokenAddress), "priceRaton": String(priceRaton), "totalSupply": String(totalSupply)}
        setData(object);
      }
      catch(err) {
        console.log(err);
      }
    }
  }
  
  const incrementQuantity = () => { 
          quantity + 1 <= 4 && setQuantity(quantity + 1);
  }

  const decrementQuantity = () => { 
          quantity - 1 >= 1 && setQuantity(quantity - 1)
  }

  async function withdrawCommission() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, Contract.abi, signer);

      try {
        let overrides = {
          from: accounts[0]
        }
        
        const transaction = await contract.withdrawCommission(overrides);
        await transaction.wait();
      }
      catch(err) {
        console.log(err);
      }
    }
  }

  

  async function saleRaton() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(address, Contract.abi, signer);

      try {
        let overrides = {
        from: accounts[0],
        //value: (data.priceRaton/10 ** 6 * quantity).toString(),
      
        }
        const transaction = await contract.saleRaton(quantity, overrides);
        await transaction.wait();
      
      }
      
      catch(err) {
        console.log(err);
      }
    }
  }

  async function getAccounts() {
    if(typeof window.ethereum !== 'undefined') {
      let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccounts(accounts);
    }
  }
  async function approveUSDC() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      //const contract = new ethers.Contract(address, Contract.abi, signer);
      const tokenAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
      const usdc = new ethers.Contract(tokenAddress, ERC20.abi, signer);
      //const usdcApproval = await usdc.totalSupply();//this is a unsafe practice and should be avoided by making a better implementation for approving a specific amount
      const usdcApproval = BigNumber.from("500000000")*quantity;//Amount to approve for is set here. 2000000000 == $2000 for usdc for another coin could get the .decimals() value from the contract loaded on the line above this
      try {
        let overrides = {
          from: accounts[0],
        }
        const transaction = await usdc.approve(address, usdcApproval, overrides);
        await transaction.wait();
      }
      catch(err) {
        console.log(err);
      }
    }
  }
    
    return(
        <div className={styles.container}>
            <Head>
        <title>The red paws club project</title>
        <meta property="og:image:url" content="/favicon.jpg"></meta>
        <meta name="description" content="The red paws club project, A true passive income NFT, The easy way of earning money" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
            <div className={styles.grid}>
          <Link href="/" > 
          <a className={styles.card}>
            <h2>Home &rarr;</h2>
            <p>Homepage</p>
            </a>
          </Link>
          <Link href="/About" > 
          <a className={styles.card}>
            <h2>About &rarr;</h2>
            <p>About page</p>
            </a>
          </Link>
          <Link href="/Dashboard" > 
          <a className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>Claim income and more</p>
            </a>
          </Link></div>
            <h2 className={styles.title}>Mint Page</h2>
            <section className={styles.hero}>
                        <div className={styles.heroG}>
                        <div>
                              <div className={styles.App}>
                                <InfosAccount accounts={accounts} allowance={data.allowance} loader={loader} />
                              </div>
                                <h1>Welcome on <span className={styles.red}>RED PAWS CLUB PROJECT</span></h1>
                                <h2>{data.totalSupply} Supply / 1 000 - <span className="red"> {data.priceRaton*quantity/10 ** 6} USDC </span></h2>
                                <p>
                                  <button className={styles.card} onClick={decrementQuantity}>REDUCE (MIN 1)</button>                               
                                  <button className={styles.card} onClick={incrementQuantity}>ADD (MAX 4)</button>         
                                  <button className={styles.card} onClick={saleRaton}>MINT {quantity} NFT</button>
                                  <button className={styles.card} onClick={approveUSDC}>APPROVE {data.priceRaton*quantity/10 ** 6} USDC</button>
                                  
                                                         
                                
                              </p></div>
                        </div>
                        <div className={styles.heroD}>
                          <button className={styles.card} onClick={getAccounts}>CONNECT WALLET</button>
                        </div>
                    </section>
        </div>
    )
}