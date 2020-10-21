import utilStyles from "../styles/utils.module.css";

import Head from "next/head";
import Link from "next/link";

import Date from "../components/date";
import Layout, {SITE_TITLE} from "../components/layout";

interface IHomeProps {
    allPostsData: {
        date: string;
        title: string;
        id: string;
    }[];
}

export default function Home({allPostsData}: IHomeProps) {
    return (
        <Layout home>
            <Head>
                <title>{SITE_TITLE}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Hello, I'm <strong>Malte</strong>. A father, a husband and
                    currently in hospital.
                </p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

import {GetStaticProps} from "next";

import {getSortedPostsData} from "../lib/posts";

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};
