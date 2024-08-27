import React from 'react'
import {Spotlight} from './ui/spotlight'
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaRegEnvelope,} from "react-icons/fa6";
import {FaFacebook,FaLinkedinIn,FaGoogle} from "react-icons/fa";
import {MdLockOutline} from "react-icons/md"

const Hero = () => {
  return (
    <div className="pb-40 pt-40 w-screen h-screen">
    <div>
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
      <Spotlight className="-top-2 left-full h-[70vh] w-[100vw]" fill="purple"/>
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
    </div>

    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       */}

{/* ----------------------------------- */}
<div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl">
          {/* Sign Section */}
          <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-blue-950">Company</span>Name
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-blue-950 mb-2">Sign in to Account</h2>
            <div className="border-2 w-10 border-pink-900 inline-block mb-2">
          </div>
          {/* Social Login  */}
          <div className="flex justify-center my-2">
          <a href="#" className="border-2 border-gray-950 rounded-xl rounded-br-xl p-3 mx-1">
          <FaFacebook className="text-2xl text-black-100"/>
          </a>
          {/* LinkdeIn */}
          <a href="#" className="border-2 border-gray-950 rounded-xl rounded-br-xl p-3 mx-1">
          <FaLinkedinIn className="text-2xl text-black-100"/>
          </a>
          {/* google */}
          <a href="#" className="border-2 border-black-200 rounded-br-xl rounded-xl p-3 mx-1">
          <FaGoogle className="text-2xl text-black-100"/>
          </a>
          </div>
          {/* text */}
        <p className="text-gray-950 text-xl text-center mb-3">or use your email account</p>
        <div className="relative rounded-lg max-w-lg m-auto">
           {/*  user input */}
          <div className="bg-black-100 w-100 p-2 flex items-center mb-3 rounded-lg">
  <FaRegEnvelope className="text-gray-100 mr-2" />
  <input
    type="email"
    name="email"
    placeholder="Enter Your Email"
    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
  />
</div>

          {/*  user Ppassword */}

          <div className="bg-black-100 w-100 p-2 flex items-center rounded-lg mb-5"><MdLockOutline className="text-gray-100 mr-2"/>
         
          <input type="password" name="password" placeholder="Enter Your Password" className="bg-black-100 outline-none text-lg flex-1 rounded-lg"></input>
          </div>
          {/* ---------- */}

     {/* remember and Forgot PAssword */}
      <div className="flex justify-between w-100 mb-5">
        <label className="flex items-center text-base"><input type="checkbox" name="remember" className="mr-1"/> Remeber me </label>
      <a href="#" className="text-base">Forgot Password?</a>
      </div>

      {/* signin  button */}
       
       {/* Sign-in Button */}

       <div className="flex justify-center items-center">
       <button className="bg-orange-500 text-white font-semibold text-xs py-2 px-11 rounded-lg shadow-md mt-4 ">
                  Sign In
                </button>
                
       </div>
       
         

        </div>
          </div>
          </div>
          {/* SignUp Section */}
          <div className="w-3/5 rounded-tl-[10rem] rounded-bl-[10rem] bg-violet-600 text-white   rounded-tr-2xl  rounded-br-2xl py-36 px-12">
          <h1 className="text-center text-3xl font-bold mb-2"> Hello, Friend!</h1>
          <div className="border-2 w-10 border-pink-900 inline-block mb-2">
          </div>
          <p className="mb-5 text-center">Fill up Personal information and start jounrney with us</p>
          {/* button */}
          <div className="flex justify-center items-center">
  <a href="#">
    <MagicButton
      title="Sign In"
      icon={<FaLocationArrow />}
      position="left"
    />
  </a>
</div>
          </div>
          </div>


    </div>

    <div className="flex justify-center relative my-20 z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]flex flex-col items-center justify-center'>
           
       
       
        </div>
        
         

     
    </div>

    </div>
  )
}

export default Hero


// import React from 'react';
// import { Spotlight } from './ui/spotlight';
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import MagicButton from "./ui/MagicButton";
// import { FaLocationArrow, FaRegEnvelope } from "react-icons/fa6";
// import { FaFacebook, FaLinkedinIn, FaGoogle } from "react-icons/fa";
// import { MdLockOutline } from "react-icons/md";

// const Hero = () => {
//   return (
//     <div className="pb -40 pt-40 relative w-full h-screen overflow-hidden">
//       {/* Background spotlights */}
//       <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
//       <Spotlight className="top-28 left-full h-[80vh] w-[100vw]" fill="purple" />
//       <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

//       {/* Main container */}
//       <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black-100">
//         {/* Radial gradient overlay */}
//         <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-gradient-radial from-transparent via-black to-black opacity-50" />
        
//         {/* Content container */}
//         <div className="relative bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl">
//           {/* Sign Section */}
//           <div className="w-3/5 p-5">
//             <div className="text-left font-bold">
//               <span className="text-blue-950">Company</span>Name
//             </div>
//             <div className="py-10">
//               <h2 className="text-3xl font-bold text-blue-950 mb-2">Sign in to Account</h2>
//               <div className="border-2 w-10 border-pink-900 inline-block mb-2" />
//               {/* Social Login */}
//               <div className="flex justify-center my-2">
//                 <a href="#" className="border-2 border-gray-950 rounded-xl rounded-br-xl p-3 mx-1">
//                   <FaFacebook className="text-lg" />
//                 </a>
//                 <a href="#" className="border-2 border-gray-950 rounded-xl rounded-br-xl p-3 mx-1">
//                   <FaLinkedinIn className="text-lg" />
//                 </a>
//                 <a href="#" className="border-2 border-black-200 rounded-br-xl rounded-xl p-3 mx-1">
//                   <FaGoogle className="text-lg" />
//                 </a>
//               </div>
//               {/* Text */}
//               <p className="text-gray-950 text-xl text-center mb-3">or use your email account</p>
//               <div className="relative rounded-lg max-w-lg m-auto">
//                 {/* User input */}
//                 <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-lg">
//                   <FaRegEnvelope className="text-gray-100 mr-2" />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Your Email"
//                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
//                   />
//                 </div>
//                 {/* User password */}
//                 <div className="bg-black-100 w-full p-2 flex items-center rounded-lg mb-5">
//                   <MdLockOutline className="text-gray-100 mr-2" />
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Enter Your Password"
//                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
//                   />
//                 </div>
//                 {/* Remember and Forgot Password */}
//                 <div className="flex justify-between w-full mb-5">
//                   <label className="flex items-center text-base">
//                     <input type="checkbox" name="remember" className="mr-1" /> Remember me
//                   </label>
//                   <a href="#" className="text-base">Forgot Password?</a>
//                 </div>
//                 {/* Sign-in Button */}
//                 <div className="flex justify-center items-center">
//                   <button className="bg-orange-500 text-white font-semibold text-xs py-2 px-11 rounded-lg shadow-md mt-4">
//                     Sign In
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* SignUp Section */}
//           <div className="w-3/5 rounded-tl-[10rem] rounded-bl-[10rem] bg-violet-600 text-white py-36 px-12">
//             <h1 className="text-center text-3xl font-bold mb-2">Hello, Friend!</h1>
//             <div className="border-2 w-10 border-pink-900 inline-block mb-2" />
//             <p className="mb-5 text-center">Fill up Personal information and start journey with us</p>
//             {/* Button */}
//             <div className="flex justify-center items-center">
//               <a href="#">
//                 <MagicButton
//                   title="Sign In"
//                   icon={<FaLocationArrow />}
//                   position="left"
//                 />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
