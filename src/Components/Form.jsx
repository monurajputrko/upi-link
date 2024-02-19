import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
import "./Home.css";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/CreateContext";

export const Form = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(AuthContext);
  // const [link, setLink] = useState(
  //   ``
  //   );

  const pay = () => {
    if (
      formData.upi !== "" ||
      formData.upi !== null ||
      formData.amount !== null ||
      formData.amount !== ""
    ) {
      window.location.href = `https://upilinky.vercel.app/pay?pa=${formData.upi}&am=${formData.amount}`;
    } else {
      navigate("/pay");
    }
  };

  return (
    <div>
      <section class="hero-section hero pt-5 md-pt-8 pb-5 mb-0">
        <div class="container">
          <div class="row justify-content-center mt-4">
            <div class="col-12 mb-4">
              <p className="font-extrabold mt4 text-4xl">
                Create shareable UPI Payment links!
              </p>
            </div>
            <div class="col-lg-7 mb-4 mb-lg-0">
              <form>
                <input type="hidden" name="_token" />{" "}
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    placeholder="Your Name"
                    maxlength="50"
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    required={true}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="upiId"
                    placeholder="UPI ID"
                    onChange={(e) => {
                      setFormData({ ...formData, upi: e.target.value });
                    }}
                    required=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="number"
                    class="form-control"
                    name="amount"
                    placeholder="Amount"
                    onChange={(e) => {
                      setFormData({ ...formData, amount: e.target.value });
                    }}
                    min="0"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="note"
                    placeholder="Note"
                    onChange={(e) => {
                      setFormData({ ...formData, note: e.target.value });
                    }}
                    maxlength="150"
                  />
                </div>
                <div class="form-group">
                  <button
                    onClick={() => {
                      pay();
                    }}
                    className="inline-flex border-2 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <img
                      src="https://ik.imagekit.io/pngserver/upi-p-logo.png"
                      alt="UPI Icon"
                      className="w-4 h-4 mr-2"
                    />
                    Generate UPI Link
                  </button>
                </div>
                <div class="fom-group">
                  <p class="h6 font-normal">
                    Note: If you enter invalid UPI ID, A dummy link will be
                    generated, please make sure to enter valid UPI ID.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
