import Image from "next/image";
import styles from "../../styles/hero.module.css";
function Hero() {
  return (
    <div className={`${styles.bg}`}>
      <div className="h-full container mx-auto">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="pl-20 h-full pt-16 pb-20">
            <div className="flex h-100 items-center">
              <div className="relative w-28 h-28">
                <Image src="/images/Logo.svg" layout="fill" alt="Logo" />
              </div>
            </div>

            <div className="pt-20">
              <div>
                <div className="text-mint font-medium text-tiny font-idlewild border border-mint rounded-lg px-2 uppercase inline-flex">
                  Coming Summer 2021
                </div>
              </div>

              <div className="pt-6">
                <h1 className="text-white text-3xl">
                  Powerful image <br />{" "}
                  <span className="font-semibold">asset management</span> <br />{" "}
                  for everyone.
                </h1>
              </div>
            </div>

            <div className="pt-28">
              <p className="font-medium text-white border-white border-l-2 pl-10 text-sm">
                <span className="font-bold"> Organize, transform, & serve</span>
                <br />
                your entire photo library. The perfect image management app for
                freelancers, organizations, & web developers.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative h-full w-full overflow-hidden">
              <div className="absolute h-full w-full -bottom-1/4">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/Laptop.png"
                    alt="laptop"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL="/images/Laptop.png"
                  />

                  <div className={`absolute ${styles._right_5} top-1/4`}>
                    <div className="order border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                      <span className="text-white text-base">
                        <span className="opacity-30">#</span> Scenery
                      </span>
                    </div>
                  </div>
                  <div className={`absolute top-2/4 ${styles.right_60}`}>
                    <div className="border border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                      <span className="text-white text-base">
                        <span className="opacity-30">#</span> Water
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/4 left-1/3">
                <div className="relative h-80 w-96">
                  <Image
                    src="/images/screenshot1.png"
                    alt="a face screenshot"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL="/images/screenshot1.png"
                  />
                </div>
                <div className="absolute top-1/3">
                  <div className="border border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                    <span className="text-white text-base	">
                      <span className="opacity-30">#</span> Person
                    </span>
                  </div>
                </div>
                <div className={`absolute left-2/4 ${styles.top_40}`}>
                  <div className="relative h-56 w-72">
                    <Image
                      src="/images/screenshot2.png"
                      alt="pencils screenshot"
                      layout="fill"
                      objectFit="contain"
                      placeholder="blur"
                      blurDataURL="/images/screenshot2.png"
                    />
                    <div className={`absolute ${styles.right_10} -top-1/4`}>
                      <div className="border border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                        <span className="text-white text-base">
                          <span className="opacity-30">#</span> Pencils
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`absolute top-2/3 ${styles.left_10}`}>
                <div className="relative h-52 w-60">
                  <Image
                    src="/images/screenshot3.png"
                    alt="a furniture screenshot"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL="/images/screenshot3.png"
                  />
                  <div className={`absolute right-0 ${styles.top_5}`}>
                    <div className="border border-white rounded-3xl inline-flex py-1 px-3 backdrop">
                      <span className="text-white text-base">
                        <span className="opacity-30">#</span> Desk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
