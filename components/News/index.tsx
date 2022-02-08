import Image from "next/image";
import { RichText, Date } from "prismic-reactjs";

import styles from "../../styles/news.module.css";

function News({ news }) {
  return (
    <div className={`h-full pt-32 mx-auto ${styles.bg}`}>
      <div className="grid md:grid-cols-2 h-full container mx-auto">
        <div className="h-full w-full flex justify-center items-center pl-10 md:pl-16 pr-10 md:pr-0">
          <div>
            <div className="py-14 md:py-20">
              <p className="text-xl md:text-3xl text-white">
                <span className="font-bold">News</span> lorem at PicLab
              </p>
            </div>
            <div className="lg:w-4/5 pb-14 md:pb-16">
              {news?.map((el, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 py-10 border-b border-white last:border-b-0 border-opacity-10 gap-0"
                >
                  <div>
                    <div className="text-white opacity-40 text-xs">
                      {Date(el.newsdate).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-medium text-base underline">
                      <RichText render={el.newstopic} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`hidden h-full w-full pt-20 md:flex justify-center items-center`}
        >
          <div className="relative h-full w-80">
            <Image src="/images/big-logo.png" alt="big-logo" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
