import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Mint.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>The red paws club project</title>
        <meta property="og:image:url" content="/favicon.jpg"></meta>
        <meta name="description" content="The red paws club project, A true passive income NFT, The easy way of earning money" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <div className={styles.grid}>
          

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
        <div className={styles.background}>

      <main className={styles.main}>
        <h1 className={styles.titre}>
          Welcome to <a href="https://discord.gg/jVaAgY5CNT" target="_blank" rel="noreferrer">The Red Paws Club Project</a>
        </h1>

        <p className={styles.description}>
        A true passive income NFT, The easy way of earning money
        </p>

        
      </main></div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            
          </span>
        </a>
      </footer>
    </div>
  )
}
