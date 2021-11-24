import styles from "../../styles/cta.module.css";
function Cta() {
  return (
    <div
      className={`${styles.bg} py-20 md:py-32 flex items-center justify-center w-full`}
    >
      <div className="w-11/12 md:1/4 lg:w-2/5 mx-auto container py-20">
        <p className="text-2xl md:text-3xl text-white text-center">
          Let’s get started lorem <br /> ipsum with{" "}
          <span className="font-bold">PicLab</span>
        </p>

        <div className="pt-10">
          <form
            className="px-3 md:px-8 py-4 bg-white rounded-lg w-full flex items-center justify-between h-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center h-full">
              <i
                className="far fa-envelope mr-3 md:mr-5 opacity-50 flex items-baseline"
                aria-hidden
              ></i>
              <input
                placeholder="Enter email"
                className={`opacity-70 text-sm md:text-base text-gray-200 w-1/2 focus:outline-none placeholder-gray-200`}
              />
            </div>
            <button className="text-red font-semibold text-xs md:text-base border-l border-gray pl-3 md:pl-5">
              Request Beta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cta;
