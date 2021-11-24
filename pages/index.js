import Head from "next/head";

import Prismic from "@prismicio/client";

import AISection from "../components/AI";
import HeroSection from '../components/Hero'
import CtaSection from "../components/CTA";
import FeatureSection from "../components/Features";
import Navbar from "../components/Navbar";
import NewsSection from "../components/News";

import { Client } from "../utils/prismicHelpers";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>PicLab</title>
        <meta
          name="description"
          content="Powerful image asset management for everyone."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-wrapper relative">
        <HeroSection title={data.title} description={data.description} />
        <AISection card={data.card} />
        <FeatureSection features={data.features} />
        <NewsSection news={data.news} />
        <CtaSection />
        <Navbar />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const document = await Client().query(
    Prismic.Predicates.at("document.type", "homepage")
  );

  return {
    props: { ...document.results[0] },
  };
}
