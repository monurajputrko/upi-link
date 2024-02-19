import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import React, { useState } from "react";

export const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    upi: "",
    amount: "",
    note: "", 
  });

  return (
    <div>
      <div>
        <p className="font-extrabold mt4 text-4xl">
          Create shareable UPI Payment links!
        </p>
      </div>
      <br />
      <br />
      <section class="flex items-center justify-center">
        <form>
          <div className="input">
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Your Name (Optional)"
              maxlength="50"
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, name: e.target.value });
              }}
              required=""
            />
            <input
              type="text"
              class="form-control"
              name="upiId"
              placeholder="UPI ID"
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, upi: e.target.value });
              }}
              required=""
            />
            <input
              type="number"
              class="form-control"
              name="amount"
              placeholder="Amount"
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, amount: e.target.value });
              }}
              min="0"
            />
            <input
              type="text"
              class="form-control"
              name="note"
              placeholder="Note  (Optional)"
              onChange={(e) => {
                e.preventDefault();
                setFormData({ ...formData, note: e.target.value });
              }}
              maxlength="150"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `https://upilinky.vercel.app/pay?pa=${formData.upi}&am=${formData.amount}`;
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
          <p class="h6 font-normal">
            Note: If you enter an invalid UPI ID, a dummy link will be
            generated, please make sure to enter a valid UPI ID.
          </p>
        </form>
      </section>
    </div>
  );
};

// export default Form;
