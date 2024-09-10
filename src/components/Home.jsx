import React from "react";

export default function Home() {
  return (
    <div className=" h-screen w-full">
      <div className="flex flex-col items-center space-y-2 py-5">
        <h1 className="text-3xl font-bold ">Popular Destinations</h1>
        <p>Tours gives you the oppotunity to sea a lot, within a time frame</p>
      </div>
      <div className="md:flex">
        <div className="md:flex-1 p-6 md:p-10 space-y-2">
          <h1 className="text-xl font-semibold">sikkim</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit
            eaque tempora quo rerum provident, sit reiciendis cumque cupiditate
            et doloremque magnam. Corrupti repellat maxime magni in. Commodi,
            eum exercitationem! Soluta ratione quo error nulla tempore debitis
            architecto, quas maiores quam velit. Molestiae veritatis labore
            accusamus corporis error, quasi animi, tenetur repellat aperiam
            veniam deleniti nihil sunt ab distinctio maxime!
          </p>
        </div>
        <div className="md:flex-1   ">
          <div className="flex justify-evenly items-center h-[300px] ">
            <div className="w-[40%] h-[80%] object-cover">
              <img
                src="https://cdn.pixabay.com/photo/2019/06/24/16/43/mountain-4296464_1280.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[40%]">
              <img
                src="https://cdn.pixabay.com/photo/2019/06/24/16/43/mountain-4296464_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex my-10">
        <div className="md:flex-1   ">
          <div className="flex justify-evenly items-center h-[300px] ">
            <div className="w-[40%] h-[80%] object-cover">
              <img
                src="https://cdn.pixabay.com/photo/2019/06/24/16/43/mountain-4296464_1280.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="w-[40%]">
              <img
                src="https://cdn.pixabay.com/photo/2019/06/24/16/43/mountain-4296464_1280.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:flex-1 p-6 md:p-10 space-y-2">
          <h1 className="text-xl font-semibold">sikkim</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit
            eaque tempora quo rerum provident, sit reiciendis cumque cupiditate
            et doloremque magnam. Corrupti repellat maxime magni in. Commodi,
            eum exercitationem! Soluta ratione quo error nulla tempore debitis
            architecto, quas maiores quam velit. Molestiae veritatis labore
            accusamus corporis error, quasi animi, tenetur repellat aperiam
            veniam deleniti nihil sunt ab distinctio maxime!
          </p>
        </div>
      </div>
    </div>
  );
}
