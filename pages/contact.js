import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
      <div className={styles.container}>
        <h1>Contact</h1><p>Lorem ipsum</p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </div>);
}
