import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {
    
    return (
      <>
        <div className="grid max-w-screen-xl px-4 pt-0 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              style={{ borderRadius: "3%" , marginBottom:"3%" }}
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivcNqCrMXX1-EEd8Jh0P7pjExzrwgVyljPefLTeJmPmgQpn-U6HidyejAzL4lRNRZHaFFkMGZUd_MmUO9mOi00ibLcxQZn_Zz5DVFw_kNdYwMqWm5uppHBPUDp_SpGBz808fQTWjnI1sGhUdC5-lIRPHhp_3aRGy4Ybp20LaQaSvieNoAUq2odVSKmpeAh/s16000/upi%20image.png"
              alt="upi link demo"
            />
          </div>

          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Free UPI Payment <br />
              Link Generator
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Generate your unique UPI Link and start accepting
              payments/donations from any platform. Our tool enhances the UPI
              Payment experience by providing a QR Code + Pay Now Button for
              your customers/clients.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <div className="flex">
                <Link
                  to="/pay"
                  className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <img
                    src="https://ik.imagekit.io/pngserver/upi-p-logo.png"
                    alt="UPI Icon"
                    className="w-4 h-4 mr-2"
                  />
                  {/* <!-- Replace the CDN link and alt text with your icon URL and description --> */}
                  Generate UPI Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;