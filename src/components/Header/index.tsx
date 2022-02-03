import Link from "next/link";

import { SignInButton } from "../SignInButton";
import styles from "./style.module.scss";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <Link href="/home">
            <a className={styles.active}>Home</a>
          </Link>

          <Link href="/post">
            <a>Post</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
