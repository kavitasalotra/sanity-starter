import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';
import Hero from '../components/home/Hero';

function Index({ heros }) {
  return (
    <Layout>
      <NextSeo
        title="Super Hero"
        description="Super heros in the world"
      />
      <Hero data={heros} />
    </Layout>
  );
}

export default Index;
