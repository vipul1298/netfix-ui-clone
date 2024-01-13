import { useState } from "react";
import { Link } from "react-router-dom";

export function SignIn (){
    const [isExpanded,setIsExpanded]= useState(false)
    return  <div className=" bg-opacity-40 flex flex-col h-screen" style={{backgroundImage:`url("https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg")`}}>
      <div className="w-auto">
        
      <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="h-28 w-58 px-8"/>

      </div>  
      
      <div className="flex items-center justify-center h-screen">
      <div className="bg-black opacity-85 p-12 rounded-l shadow-md w-[420px]">
        <h1 className="text-white text-3xl font-semibold mb-6">Sign In</h1>
        <form>
          <div className="mb-4">
         
            <input
              type="email"
              id="email"
              name="email"
              className="text-white w-full px-3 py-2 solid bg-gray-600 rounded focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="mb-6">
           
            <input
              type="password"
              id="password"
              name="password"
              className="w-full text-white px-3 py-2 solid bg-gray-600 rounded focus:outline-none focus:shadow-outline "
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600"
          >
            Sign In
          </button>
          <div className="w-full flex flex-row justify-between">
          
            <div className="flex flex-row">
                <input className="mx-1 focus:bg-white bg-gray-600" type="checkbox" name="" id="" />
                <h5 className="text-gray-400 text-[12px] ">Remember me</h5>
            </div>
            <div>

            <h5 className="text-gray-400 text-[12px] hover:underline hover:cursor-pointer">Need help?</h5>
            </div>
            <div>

            </div>
          </div>

          <div className="pt-10 flex flex-row text-white">
            <h3 className="text-gray-400 px-2">New to Netflix?</h3>
            <Link to={"/signup"} className="hover:underline">Sign up now.</Link>
          </div>
          <div className="py-2  text-white">
            <h3 className="text-gray-400 text-[12px] px-2">This page is protected by Google reCAPTCHA to ensure you're not a bot. {!isExpanded&&(<span onClick={()=>setIsExpanded(true)} className="text-blue-600 hover:underline hover:cursor-pointer">Learn more.</span>)}</h3>
            {
                isExpanded &&  <h3 className="text-gray-400 text-[12px] px-2">
                    The information collected by Google reCAPTCHA is subject to the Google <span className="text-blue-600 hover:underline hover:cursor-pointer">Privacy Policy</span> and <span className="text-blue-600 hover:underline hover:cursor-pointer">Terms of Service</span>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
                </h3>
            }
          </div>
        </form>
      </div>
      </div>
      
      
     

  </div>
}