import { type NextPage } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>musings</title>
        <meta name="description" content="musings of stella and adam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        content
      </Layout>
    </>
  );
};

export default Home;
