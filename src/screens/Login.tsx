import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Login(){

    return <div className=" bg-opacity-40 flex flex-col h-screen" style={{backgroundImage:`url("https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg")`}}>
     
      <div className="w-full flex lg:gap-20 gap-10 justify-between">
      <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="w-42 h-24 px-40"/>
      <div className="w-auto pt-10 pr-60 ">
        <select className="w-50 bg-slate-900 text-white" name="language" id="">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        <Link className="text-white px-3 bg-red-600 mx-4 rounded-sm" to={"/signin"}>Sign In</Link>
      </div>
      </div>

      <div className="flex flex-col items-center place-content-center h-full">
       <h1 className="text-white text-5xl font-bold">
Unlimited movies, TV shows and more</h1>
        <p className="text-white text-3xl py-4">Watch anywhere. Cancel anytime.</p>
        <p className="text-white text-xl py-1">Ready to watch? Enter your email to create or restart your membership.</p>

        <div className="justify-center">
          <input className=" bg-black bg-opacity-50 border px-2 mx-2 py-2 w-80 text-slate-300"  type="text" value="Email address" />
          <button className="text-white text-2xl font-semibold  bg-red-600 rounded-md w-48 py-2 px-2">Get Started</button>
        </div>
      </div>

    </div>
}