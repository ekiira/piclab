import Head from "next/head";
import dynamic from "next/dynamic";

import Prismic from "@prismicio/client";

import CtaSection from "../components/CTA";
import FeatureSection from "../components/Features";
import Navbar from "../components/Navbar";
import NewsSection from "../components/News";
import Preloader from "../components/Preloader";

import { Client } from "../utils/prismicHelpers";

const HeroSection = dynamic(() => import("../components/Hero"), {
  ssr: false,
  loading: () => <Preloader />,
});

const AISection = dynamic(() => import("../components/AI"), {
  ssr: false,
  loading: () => <Preloader />,
});

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>PicLab</title>
        <meta
          name="description"
          content="Powerful image asset management for everyone."
        />
        <meta
          property="og:image"
          content="/images/piclab-h.png
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
