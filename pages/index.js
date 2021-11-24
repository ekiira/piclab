import Head from "next/head";
import AISection from "../components/AI";
import CtaSection from "../components/CTA";
import FeatureSection from "../components/Features";
import HeroSection from "../components/Hero";
import Navbar from "../components/Navbar";
import NewsSection from "../components/News";
import { Client } from "../utils/prismicHelpers";
import Prismic from "@prismicio/client";

export default function Home(props) {
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
        <HeroSection />
        <AISection />
        <FeatureSection />
        <NewsSection />
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
