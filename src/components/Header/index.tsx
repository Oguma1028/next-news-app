import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import headerIcon from "/img/headerIcon/menu.svg";

function Header() {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__icon}>
          <Image
            src={headerIcon}
            alt="menu icon"
            loading="eager"
            width={35}
            height={35}
            priority
          />
        </div>
        <h1 style={{ letterSpacing: "1px", textAlign: "left" }}>
          <Link href="/" passHref legacyBehavior>
            <a>
              <span style={{ fontWeight: 250 }}>Simple</span>
              <span style={{ fontWeight: 100 }}>News</span>
            </a>
          </Link>
        </h1>
      </header>
    </section>
  );
}

export default Header;
