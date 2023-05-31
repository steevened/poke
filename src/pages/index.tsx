import { NextPage } from 'next';
import { NextPageWithLayout } from './_app';
import Layout from '@/components/Layout';

const Home: NextPageWithLayout = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 "></main>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
