import React from "react";

export default function Navbar() {
  return (
    <div className="p-10 fixed  w-full">
      <div className="flex justify-between px-6 py-6 rounded-xl bg-slate-100 ">
        <div className="font-bold text-xl">Trip</div>
        <div>
          <ul className="flex space-x-5 font-semibold ">
            <li className="border-b-2 border-transparent hover:border-black cursor-pointer">
              HOME
            </li>
            <li className="border-b-2 border-transparent hover:border-black cursor-pointer">
              ABOUT
            </li>
            <li className="border-b-2 border-transparent hover:border-black cursor-pointer">
              SERVICE
            </li>
            <li className="border-b-2 border-transparent hover:border-black cursor-pointer">
              CONTACT
            </li>
            <li className="bg-green-200 px-2 hover:bg-green-400 cursor-pointer">
              SIGN UP
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
