import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Image
      className={styles.background}
      src= "/forest.png"
      alt='Picture'
      layout='fill'
      objectFit='cover'
      objectPosition='center'/>
      <Head>
        <title>The red paws club project</title>
        <meta property="og:image:url" content="/favicon.jpg"></meta>
        <meta name="description" content="The red paws club project, A true passive income NFT, The easy way of earning money" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://discord.gg/jVaAgY5CNT">The Red Paws Clup Project</a>
        </h1>

        <p className={styles.description}>
        A true passive income NFT, The easy way of earning money
        </p>

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
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
