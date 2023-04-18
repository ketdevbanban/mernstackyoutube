import React from "react";

export default function Login() {
  return (
    <div className=" h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-[url('/login.jpeg')]">
      <div className="text-center">
        <div className="font-noto text-5xl text-green-600 font-bold pb-2 pt-20">
          Boimedical Engineering
        </div>
        <form>
          <div className="pb-3">
            <input
              type="username"
              placeholder="Username"
              className="p-1.5 rounded-xl border-none font-noto text-center operity-50 font-semibold text-xl w-[90%] focus:outline-none"
            />
          </div>
          <div className="pb-3">
            <input
              type="username"
              placeholder="Password"
              className="p-1.5 rounded-xl border-none font-noto text-center operity-50 font-semibold text-xl w-[90%] focus:outline-none"
            />
          </div>
          <button
            className="border-none p-2 font-Noto font-semibold text-lg rounded-xl bg-green-500 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
            type="submit"
          >
            ເຂົ້າສູ່ລະບົບ
          </button>
        </form>
      </div>
    </div>
  );
}
