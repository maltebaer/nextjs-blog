import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

import Head from "next/head";
import Link from "next/link";

const NAME = "Malte";
export const SITE_TITLE = "Next.js Sample Website";

export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        SITE_TITLE,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={SITE_TITLE} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                {home ? (
                    <React.Fragment>
                        <img
                            src="/images/profile.png"
                            className={styles.headerHomeImage}
                            alt={NAME}
                        />
                        <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/profile.png"
                                    className={styles.headerImage}
                                    alt={NAME}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>
                                    {NAME}
                                </a>
                            </Link>
                        </h2>
                    </React.Fragment>
                )}
            </header>

            <main>{children}</main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}
