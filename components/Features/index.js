import Image from "next/image";
import { RichText } from "prismic-reactjs";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";

function Feature({ features }) {
  return (
    <div className="h-full pt-20 container mx-auto">
      <div className="text-center py-8">
        <p className="text-white text-3xl">
          Why <span className="font-bold">PicLab</span> is the perfect <br />{" "}
          lorem ipsum for you.
        </p>
      </div>
      <div>
        <div className="pt-10 pl-10 md:pl-16 -mb-20">
          <Splide
            options={{
              perPage: 2,
              perMove: 1,
              drag: "free",
              gap: "0.6rem",
              pagination: false,
              fixedWidth: "34rem",
              arrows: false,
              breakpoints: {
                767: {
                  perPage: 1,
                  fixedWidth: "18rem",
                },
                1023: {
                  perPage: 1,
                  fixedWidth: "28rem",
                },
              },
            }}
          >
            {features?.map((el, index) => (
              <SplideSlide key={index} className="w-full">
                <div
                  key={index}
                  className="bg-white h-full rounded-xl pt-10 pb-2 w-full"
                >
                  <div className="px-5 md:px-10 lg:w-4/5">
                    <div className="pb-6">
                      <div className="text-gray-100 text-xs">
                        {" "}
                        <RichText render={el.featurename} />
                      </div>
                    </div>
                    <div>
                      <div className={`font-medium text-xl-1 text-dark red`}>
                        <RichText render={el.featuretitle} />
                      </div>
                    </div>
                    <div className="pt-5 md:pt-8">
                      <div className="text-dark opacity-70 text-xs-1">
                        <RichText render={el.featuredescription} />
                      </div>
                    </div>
                  </div>
                  <div className="px-2 pt-10 md:pt-14">
                    <div className="relative h-56 lg:h-80">
                      <Image
                        src={el.featureimage.url}
                        alt={el.featureimage.alt}
                        placeholder="blur"
                        blurDataURL={el.featureimage.url}
                        layout="fill"
                        className="rounded-xl h-full"
                      />
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Feature;
