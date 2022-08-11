import React from "react"
import Link from "next/link"
import Head from 'next/head'
import styles from '../styles/Mint.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

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
          </Link>
          <div className={styles.socials}>
          <ul>
            <li>
          <a href="https://www.facebook.com/TheRPCP" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          </li >
          <li>
          <a href="https://www.instagram.com/theredpawsclubproject/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          </li>
          <li>
          <a href="https://twitter.com/TheRedPawsClub1" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          </li>
          <li>
          <a href="https://youtu.be/Epj0BA4cMh8" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          </li>
          <li>
          <a href="https://discord.gg/jVaAgY5CNT" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          </li>
          </ul>
          </div>
          </div>
            <h2 className={styles.title}>About Page</h2>
            <div className={styles.background}>
            <main className={styles.main}>
            <h1 className={styles.description}>
            COMING SOON
            </h1></main></div>
        </div>
    )
}