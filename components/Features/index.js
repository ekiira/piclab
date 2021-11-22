import Image from "next/image";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";

import { features } from "../../pages/api/feature";
function Feature() {
  return (
    <div className="max-h-screen py-20 container mx-auto">
      <div className="text-center py-10">
        <p className="text-white text-3xl">
          Why <span className="font-bold">PicLab</span> is the perfect <br />{" "}
          lorem ipsum for you.
        </p>
      </div>
      <div>
        <div className="pt-10 pl-16">
          <Splide
            options={{
              perPage: 2,
              perMove: 1,
              drag: "free",
              gap: "0.6rem",
              pagination: false,
              fixedWidth: "34rem",
              arrows: false,
            }}
          >
            {features?.map((el, index) => (
              <SplideSlide key={index} className="w-full">
                <div
                  key={index}
                  className="bg-white h-full rounded-xl pt-10 pb-2 w-full"
                >
                  <div className="px-10 w-4/5">
                    <div className="pb-6">
                      <p className="text-gray-100 text-xs">{el.title}</p>
                    </div>
                    <div>
                      <p className="font-medium text-xl-1 text-dark">
                        {el.subtitle}
                      </p>
                    </div>
                    <div className="pt-8">
                      <p className="text-dark opacity-70 text-xs-1">
                        {el.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-2 pt-14">
                    <div className="relative h-80">
                      <Image
                        src={el.image}
                        alt="feature"
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
