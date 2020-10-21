import utilStyles from "../../styles/utils.module.css";

import Head from "next/head";

import Date from "../../components/date";
import Layout from "../../components/layout";

interface IPostProps {
    postData: IPostData;
}

export default function Post({postData}: IPostProps) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            </article>
        </Layout>
    );
}

import {GetStaticPaths, GetStaticProps} from "next";

import {getAllPostIds, getPostData, IPostData} from "../../lib/posts";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = params ? await getPostData(params.id as string) : {};

    return {
        props: {
            postData,
        },
    };
};
