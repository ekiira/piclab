import Image from "next/image";
import styles from "../../styles/ai.module.css";

function AISection() {
  return (
    <div className={`${styles.bg} py-32`}>
      <div className="container h-full w-full mx-auto">
        <div className="grid grid-cols-3 h-full">
          <div className="col-span-2">
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
          <div className="pr-20 h-full items-center flex w-full">
            <div className="bg-white h-full w-full rounded-lg shadow-new flex flex-col justify-between p-10">
              <div>
                <p className="text-gray-100 text-xs">Artificial Intelligence</p>
                <p className="pt-6 text-dark text-xl-1 font-medium">
                  Let <span className="text-red">A.I.</span> handle lorem ipsum
                  dolor sit.
                </p>
              </div>
              <div className="relative h-28 w-28 mx-auto my-10">
                <Image src="/images/AI-box.png" alt="AI text" layout="fill" />
              </div>
              <div>
                <p className="text-dark opacity-70 text-xs-1 ">
                  <span className="font-bold">No more need</span> to lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AISection;
