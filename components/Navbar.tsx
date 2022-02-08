import Image from "next/image";

function Navbar() {
  return (
    <div className="fixed bottom-5 inset-x-0 z-30">
      <div className=" bg-white py-2 bottom-5 rounded-xl mx-3">
        <div className="px-2 flex justify-between items-center">
          <div>
            <form
              className="px-3 md:px-8 py-4 bg-white rounded-lg w-full flex items-center justify-between h-full border border-gray"
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
          <div className="hidden md:flex">
            <div className="flex h-100 items-center">
              <div className="relative w-48 h-10">
                <Image src="/images/Logo-P.svg" layout="fill" alt="Logo" />
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:pr-5">
            <i
              className="far fa-sign-in text-red font-semibold md:mr-3 text-base"
              aria-hidden
            ></i>
            <span className="text-red font-semibold text-sm">
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
