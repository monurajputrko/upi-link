import "./Home.css";
import { Link } from "react-router-dom";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaUser, FaCalendarAlt, FaFilePdf } from "react-icons/fa";
import { FaChartLine, FaSquareGithub } from "react-icons/fa6";
import { RiLinkedinBoxLine } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className="grid max-w-screen-xl px-4 pt-0 mt2 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          {/* https://ik.imagekit.io/pngserver/hero.png */}
          <img
            style={{ borderRadius: "3%", marginBottom: "3%" }}
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
            Generate your unique UPI Link and start accepting payments/donations
            from any platform. Our tool enhances the UPI Payment experience by
            providing a QR Code + Pay Now Button for your customers/clients.
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div className="flex">
              <Link
                to="/form"
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
      <div className="flex items-center justify-center">
        <h1 className="display-block text-align-center max-w-2xl text-2xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Why use UPI Payment Links?
        </h1>
      </div>
      <div className="flex items-center justify-center ">
        <br />
        <br />
        <p className="font-extrabold mt4 text-4xl">
          Get Paid Instantly Without Sharing Your Bank Details.
        </p>
      </div>
      <div className="flex items-center justify-center lg:gap-8 wrap-wrap">
        <div className="sbox ml mt4 ">
          <FaRegCreditCard />

          <h3 className="display-block mm text-8xl font-extrabold ">
            Accept Payments
          </h3>
        </div>
        <div className="sbox ml mt4">
          <FaUser />

          <h3 className="display-block mm text-8xl font-extrabold ">
            No App Needed
          </h3>
        </div>
        <div className="sbox ml mt4">
          <FaCalendarAlt />

          <h3 className="display-block mm text-8xl font-extrabold ">
            Get Paid Instantly
          </h3>
        </div>
        <div className="sbox ml mt4">
          <FaChartLine />

          <h3 className="display-block mm text-8xl font-extrabold ">
            Track Your Money
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center lg:gap-8 wrap-wrap">
        <div className="sbox ml mt4 mbox ">
          <h4 className="transp">5 Billion</h4>

          <h3 className="display-block mm text-8xl font-extrabold ">
            Processed Volume
          </h3>
        </div>
        <div className="sbox ml mt4 mbox ">
          <h4 className="transp">100 Million</h4>

          <h3 className="display-block mm text-8xl font-extrabold ">
            Transactions
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center mt-3 lg:gap-8 wrap-wrap">
        <div className="sbox ml mt4 mbox ">
          <h4 className="transp">1.5 Million</h4>

          <h3 className="display-block mm text-8xl font-extrabold width ">
            Users
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center lg:gap-8 wrap-wrap">
        <div className="sbox ml mt4">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmIvBJZnTOOGK_0d4k6G6GYnAYu9s501wswBto2bKzMOyevOWRWVySgsE_5UaiUwPPP7f0t7lrSbg6IXu15dUcV2q-bOFeciPetkBT_9_4XrMxernzFnI0q1Sc8-bA6s7TgOJEwLH7po8DlO21NhGq14skXnSTpWSa4JRtjWtS7cNYNKIf4_AQjmwugX6P/s1600/testi.png"
            alt=""
          />

          <h3 className="display-block mm text-8xl font-extrabold ">Alisha</h3>
          <p>
            I love the simplicity of <br /> the Product.
          </p>
        </div>
        <div className="sbox ml mt4">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsjJ4aez3FAgck8X26aINDy5endPII76uDA7z03UbaX_q76-XzsRo0he0e8x8IrhVy0Q4hKbUmeNn4NKfDEP8qMpe8p0J-ippdfK44OliCzg07o1QVyGNY4nYEzcSbysx6DZE38FIJFzZlyEcudn_v-yZkphxb75f6SoBsAVT3FCxW-1agXBrOyviNlGQx/s1600/testi1.png"
            alt=""
          />

          <h3 className="display-block mm text-8xl font-extrabold ">
            Sam Watson
          </h3>
          <p>
            I love the simplicity of <br /> the Product.
          </p>
        </div>
        <div className="sbox ml mt4">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmIvBJZnTOOGK_0d4k6G6GYnAYu9s501wswBto2bKzMOyevOWRWVySgsE_5UaiUwPPP7f0t7lrSbg6IXu15dUcV2q-bOFeciPetkBT_9_4XrMxernzFnI0q1Sc8-bA6s7TgOJEwLH7po8DlO21NhGq14skXnSTpWSa4JRtjWtS7cNYNKIf4_AQjmwugX6P/s1600/testi.png"
            alt=""
          />

          <h3 className="display-block mm text-8xl font-extrabold ">Alisha</h3>
          <p>
            I love the simplicity of <br /> the Product.
          </p>
        </div>
        <div className="sbox ml mt4">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsjJ4aez3FAgck8X26aINDy5endPII76uDA7z03UbaX_q76-XzsRo0he0e8x8IrhVy0Q4hKbUmeNn4NKfDEP8qMpe8p0J-ippdfK44OliCzg07o1QVyGNY4nYEzcSbysx6DZE38FIJFzZlyEcudn_v-yZkphxb75f6SoBsAVT3FCxW-1agXBrOyviNlGQx/s1600/testi1.png"
            alt=""
          />

          <h3 className="display-block mm text-8xl font-extrabold ">
            Sam Watson
          </h3>
          <p>
            I love the simplicity of <br /> the Product.
          </p>
        </div>
      </div>
      <p className="font-extrabold mt4 text-4xl">
        Create And Share Your First Payment Link Now.
      </p>
      <br />
      <br />
      <Link
        to="/form"
        className="inline-flex border-2 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        <img
          src="https://ik.imagekit.io/pngserver/upi-p-logo.png"
          alt="UPI Icon"
          className="w-4 h-4 mr-2"
        />
        {/* <!-- Replace the CDN link and alt text with your icon URL and description --> */}
        Generate UPI Link
      </Link>
      <br />
      <br />
      <div className="mt3">
        <div className="flex items-center space-evenly">
          <a href="#" className="font-extrabold">
            About us
          </a>
          <a href="#" className="font-extrabold">
            Contact us
          </a>
        </div>
        <br />
        <br />
        <div className="flex items-center space-evenly">
          <a href="#" className="font-extrabold">
            Terms
          </a>
          <a href="#" className="font-extrabold">
            Privacy
          </a>
        </div>
      </div>
      <br />
      <br />
      <div className="mt3 flex items-center space-evenly social">
        <a href="https://www.linkedin.com/in/monurajputrko/">
          <RiLinkedinBoxLine className="text-4xl" />
        </a>
        <a href="https://github.com/monurajputrko">
          <FaSquareGithub className="text-4xl" />
        </a>
        <a href="https://monurajputrko.github.io/">
          <FaFilePdf className="text-4xl" />
        </a>
      </div>
      {/* <hr /> */}
      <div className="mt3 flex items-center space-evenly social">
        <a href="https://upilinky.vercel.app/">
          <p>2024 upilinky</p>
        </a>
      </div>
    </>
  );
};

export default Home;
