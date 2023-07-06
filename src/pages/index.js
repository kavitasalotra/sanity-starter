import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Hero from '../components/home/Hero';
import Categories from '../components/category/Categories';
import Products from '../components/product/Products';

function Index({ heros }) {
  return (
    <Layout>
      <NextSeo title="Super Hero" description="Super heros in the world" />
      <Hero data={heros} />
      <Categories />
    <Products/>
    </Layout>
  );
}

export default Index;
