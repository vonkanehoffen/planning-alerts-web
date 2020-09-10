import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planning Alerts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/planning-alerts-logo.svg" alt="Planning Alerts Logo" />
        <h1 className={styles.title}>
          Welcome to Planning Alerts
        </h1>

        <p className={styles.description}>
          Know your neighbourhood
        </p>

        <div className={styles.grid}>
          <a href="https://play.google.com/store/apps/details?id=com.kanec.planningalerts" className={styles.storeBadge}>
            <img src="/google-play-badge.png" alt="Get it on Google Play"/>
          </a>

          <a href="https://apps.apple.com/gb/app/planning-alerts/id1499203549" className={styles.storeBadge}>
            <img src="/app-store-badge.svg" alt="Download on the App Store" className={styles.appleBadge}/>
          </a>

          <a
            href="https://github.com/vonkanehoffen/planning-alerts/issues"
            className={styles.card}
          >
            <h3>Support &rarr;</h3>
            <p>Get help with any app issues.</p>
          </a>

          <a
            href="https://kanec.uk/"
            className={styles.card}
          >
            <h3>Contact &rarr;</h3>
            <p>
              Get in touch with the developer.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
