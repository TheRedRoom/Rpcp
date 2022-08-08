import React from "react"
import Link from "next/link"
import Head from 'next/head'
import styles from '../styles/Mint.module.css'

export default function About(){
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
          <Link href="/Dashboard" > 
          <a className={styles.card}>
            <h2>Dashboard &rarr;</h2>
            <p>Claim income and more</p>
            </a>
          </Link></div>
            <h2 className={styles.title}>About Page</h2>
            <div className={styles.background}>
            <main className={styles.main}>
            <h1 className={styles.description}>
            COMING SOON
            </h1></main></div>
        </div>
    )
}