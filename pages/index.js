import Head from "next/head";
import AISection from "../components/AI";
import FeatureSection from "../components/Features";
import HeroSection from "../components/Hero";
import NewsSection from "../components/News";

export default function Home() {
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
      <div className='main-wrapper'>
        <HeroSection />
        <AISection/>
        <FeatureSection/>
        <NewsSection/>
      </div>
    </div>
  );
}
