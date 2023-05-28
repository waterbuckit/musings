import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";

const MusingPage = () => {
  const router = useRouter();
  const { data, isSuccess } = api.musings.get.useQuery({
    id: router.query.id as string,
  });

  return (
    <>
      <Head>
        <title>musings</title>
        <meta name="description" content="musings of stella and adam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {isSuccess && data && (
          <>
          <article className="scroll-mt-16">
            <div>
              <header className="relative mb-10 xl:mb-0">
                <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
                  <time
                    dateTime={data.writtenAt.toISOString()}
                    className="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
                  >
                    {data.writtenAt.toLocaleDateString()}
                  </time>
                  <div className="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                  <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                    <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                      <div className="flex">
                        <time
                          dateTime={data.writtenAt.toLocaleDateString()}
                          className="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden"
                        >
                          {data.writtenAt.toLocaleDateString()}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                  <div className="typography mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto text-white flex flex-col gap-4">
                    <Link href="/" className="text-sky-400">&larr; Back</Link>
                    <div>
                      <h2 className="text-lg font-bold">{data.title}</h2>
                      <p className="text-sky-300">{data.author}</p>
                    </div>
                    <p className="whitespace-pre-wrap">
                      {data.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          </>
        )}
      </Layout>
    </>
  );
};

export default MusingPage;
