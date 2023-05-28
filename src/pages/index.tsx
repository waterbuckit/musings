import { type NextPage } from "next";
import Head from "next/head";
import Layout from "~/components/Layout";
import MusingItem from "~/components/MusingItem";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isSuccess } = api.musings.getAll.useQuery(undefined, {
    refetchOnWindowFocus: false,
    staleTime: Infinity
  });

  return (
    <>
      <Head>
        <title>musings</title>
        <meta name="description" content="musings of stella and adam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {isSuccess && (
          <ul className="text-white flex flex-col gap-6">
            {data.map((musing) => (
              <MusingItem key={musing.id} musing={musing} />
            ))}
          </ul>
        )}
      </Layout>
    </>
  );
};

export default Home;
