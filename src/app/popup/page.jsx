"use client";
import React, { useState } from "react";

function PopupBox() {
  const [isOpen, setIsOpen] = useState(false); // State to control popup visibility

  //   const handleClickOpen = () => setIsOpen(true);
  const handleClickClose = () => setIsOpen(!isOpen);
  return (
    <div
      className="relative"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className=" relative flex  items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed  bg-rose-500 text-white p-2 rounded-md z-10 cursor-pointer"
          onClick={handleClickClose}
          aria-hidden="true"
        >
          click to open popup
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } align-bottom absolute top-10 left-10 bg-white p-1 rounded-xxl shadow-xl transform transition-all sm:my-8 sm:align-middle w-[15rem]`}
        >
          <div className="flex flex-col items-center justify-between p-2 rounded-top">
            <div className="flex items-center mb-2 gap-1 justify-center">
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="exclamation-circle"
                width="1em"
                height="1em"
                fill="gold"
                aria-hidden="true"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
              </svg>
              <strong
                className="text-[12px] block font-medium text-gray-900"
                id="modal-title"
              >
                Are you sure to delete this task?
              </strong>
            </div>
            <small className="text-[11px]">Delete the task</small>
          </div>
          <div className="p-1 flex justify-center align-items-center gap-3">
            <button
              type="button"
              onClick={handleClickClose}
              className="inline-flex text-xs items-center px-6 py-1 border border-zinc-600  text-black rounded-2 hover:bg-zinc-200 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {" "}
              No
            </button>
            <button
              type="button"
              onClick={handleClickClose}
              className="inline-flex text-xs items-center px-6 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {" "}
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupBox;
