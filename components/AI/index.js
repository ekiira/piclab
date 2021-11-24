import Image from "next/image";
import { RichText } from "prismic-reactjs";

import styles from "../../styles/ai.module.css";

function AISection({ card }) {
  return (
    <div className={`${styles.bg} py-24 md:py-32 relative h-full bg-gray-200`}>
      <Image
        src="/images/Gradient.png"
        layout="fill"
        alt="bg"
        objectFit="cover"
        objectPosition="top"
      />
      <div className="container h-full w-full mx-auto">
        <div className="z-20 grid md:grid-cols-2 lg:grid-cols-3 h-full px-10 lg:px-0">
          <div className="hidden md:grid lg:col-span-2">
            <div className="relative h-full w-full">
              <div className={`absolute top-2/4 ${styles._left_5}`}>
                <div className="border border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                  <span className="text-white text-base">
                    <span className="opacity-30">#</span> Pencils
                  </span>
                </div>
              </div>

              <div className={`absolute ${styles.top_40} right-2/4`}>
                <div className="border border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                  <span className="text-white text-base">
                    <span className="opacity-30">#</span> Person
                  </span>
                </div>
              </div>

              <div className={`absolute top-2/3 ${styles.left_10}`}>
                <div className="border border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                  <span className="text-white text-base">
                    <span className="opacity-30">#</span> Person
                  </span>
                </div>
              </div>

              <div className={`absolute left-1/4 ${styles.top_60}`}>
                <div className="border border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                  <span className="text-white text-base">
                    <span className="opacity-30">#</span> Desk
                  </span>
                </div>
              </div>

              <div className={`absolute right-1/4 ${styles.top_55}`}>
                <div className="border border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                  <span className="text-white text-base">
                    <span className="opacity-30">#</span> Pencils
                  </span>
                </div>
              </div>

              <div className={`absolute ${styles.right_10}  ${styles.top_65}`}>
                <div className="border border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                  <span className="text-white text-base">
                    <span className="opacity-30">#</span> Scenery
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pr-20 h-full items-center flex w-full">
            <div className="z-20 bg-white h-full w-full rounded-lg shadow-new flex flex-col justify-between p-8 md:p-10">
              <div>
                <div className={`text-gray-100 text-xs `}>
                  <RichText render={card[0].name} />
                </div>
                <div
                  className={`pt-6 text-dark text-xl-1 font-medium ${styles.red}`}
                >
                  <RichText render={card[0].cardtitle} />
                </div>
              </div>
              <div className="relative h-28 w-28 mx-auto my-10">
                <Image
                  src={card[0].image.url}
                  alt={card[0].image.alt}
                  layout="fill"
                />
              </div>
              <div>
                <div className="text-dark opacity-70 text-xs-1 ">
                  <RichText render={card[0].carddescription} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AISection;
