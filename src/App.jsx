import { useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-full w-full">
      <div className="bg-bg-img bg-cover w-full h-screen ">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
