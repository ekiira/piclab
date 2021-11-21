import Head from "next/head";
import AISection from "../components/AI";
import HeroSection from "../components/Hero";

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
      </div>
    </div>
  );
}
