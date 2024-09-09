import { useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-full w-full">
      <div className="bg-bg-img bg-cover w-full h-screen ">
        <Navbar />
        <div className="flex justify-center items-center text-white space-y-5 font-semibold flex-col h-screen">
          <h1 className="text-3xl font-bold">Your Journey Your Story </h1>
          <p>Choose Your Favourite Destination.</p>
          <button className="bg-slate-100 text-black px-3 py-2 rounded-lg">
            Travel Plan
          </button>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
