import React from "react"
import Link from "next/link"
import Head from 'next/head'
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Contract from '../artifacts/contracts/RpcpRaton.sol/RpcpRaton.json';
import styles from '../styles/Mint.module.css'

const address = "0xE8627f780224F64358b3aa2DaD3E4C38C6D119F1";

export default function Dashboard(){

  const [accounts, setAccounts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    getAccounts();
    if (accounts.length > 0 && loader) {

      setLoader(false);
      fetchData()
    }
  }, [accounts])

  async function getAccounts() {
    if(typeof window.ethereum !== 'undefined') {
      let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccounts(accounts);
    }
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

  async function fetchData() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(address, Contract.abi, provider);
      try {
        const balance = await contract.balanceOf(accounts[0]);
        const object = {"balance": balance};
        setData(object);
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
          <Link href="/Mint" > 
          <a className={styles.card}>
            <h2>Mint &rarr;</h2>
            <p>Mint page</p>
            </a>
          </Link>
          <Link href="/About" > 
          <a className={styles.card}>
            <h2>About &rarr;</h2>
            <p>About page</p>
            </a>
          </Link></div>
            <h2 className={styles.title}>Dashboard</h2>
            <div className={styles.background}>
            <main className={styles.main}>
              <button className={styles.card} onClick={withdrawCommission}>WITHDRAW INCOME</button>
              <p className={styles.description}>
                You have {data.balance} NFT on yout wallet,
                You can withdraw 25 USDC/NFT in your wallet/30 days 
            </p></main></div>
        </div>
    )
}