import Image from "next/image";
import { news } from "../../pages/api/news";

import styles from "../../styles/news.module.css";

function News() {
  return (
    <div className={`h-full pt-32 mx-auto ${styles.bg}`}>
      <div className="grid grid-cols-2 h-full container mx-auto">
        <div className="h-full w-full flex justify-center items-center pl-16">
          <div>
            <div className="py-20">
              <p className="text-3xl text-white">
                <span className="font-bold">News</span> lorem at PicLab
              </p>
            </div>
            <div className="w-4/5 pb-16">
              {news?.map((el, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 py-10 border-b border-white last:border-b-0 border-opacity-10 gap-0"
                >
                  <div>
                    <p className="text-white opacity-40 text-xs">{el.date}</p>
                  </div>
                  <div>
                    <p className="text-white font-medium text-lg-1 underline">
                      {el.topic}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`h-full w-full pt-20 flex justify-center items-center`}>
          <div className="relative h-full w-80">
            <Image src="/images/big-logo.png" alt="big-logo" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
