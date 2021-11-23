import styles from "../../styles/cta.module.css";
function Cta() {
  return (
    <div
      className={`${styles.bg} max-h-screen py-32 flex items-center justify-center w-full`}
    >
      <div className="w-2/6 mx-auto container py-20">
        <p className="text-3xl text-white text-center">
          Let’s get started lorem <br /> ipsum with{" "}
          <span className="font-bold">PicLab</span>
        </p>

        <div className="pt-10 ">
          <form className="px-8 py-4 bg-white rounded-lg w-full flex justify-between h-full" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-center h-full">
              <i className="far fa-envelope mr-5 opacity-50 flex items-baseline"></i>
              <input
                placeholder="Enter email"
                className={`opacity-70 text-gray-200 ${styles.input} focus:outline-none placeholder-gray-200`}
              />
            </div>
            <button className="text-red font-semibold text-xs-1 border-l border-gray pl-5">
              Request Beta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cta;
