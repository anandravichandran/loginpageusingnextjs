// // "use client";

// // import React, { useState, ChangeEvent } from 'react';
// // import { Spotlight } from './ui/spotlight';
// // import MagicButton from './ui/MagicButton';
// // import { FaLocationArrow, FaRegEnvelope } from 'react-icons/fa6';
// // import { FaFacebook, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
// // import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';

// // import { useRouter } from 'next/router';  // Import useRouter

// // interface User {
// //   email: string;
// //   password: string;
// //   confirmPassword: string;
// // }

// // const Hero: React.FC = () => {
// //   const router = useRouter();
// //   const [user, setUser] = useState<User>({
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //   });
// //   const [passwordStrength, setPasswordStrength] = useState<string>('');
// //   const [showPassword, setShowPassword] = useState<boolean>(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
// //   const [errors, setErrors] = useState<{ email: string; password: string; confirmPassword: string }>({
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //   });

// //   const onSignup = async () => {
// //     // Clear errors
// //     setErrors({ email: '', password: '', confirmPassword: '' });

// //     // Basic validation
// //     if (!user.email.includes('@')) {
// //       setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
// //       return;
// //     }

// //     if (user.password.length < 8) {
// //       setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters long.' }));
// //       return;
// //     }

// //     if (user.password !== user.confirmPassword) {
// //       setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match.' }));
// //       return;
// //     }

// //     try {
// //       console.log('Signing up with:', user);
// //       // Your signup logic here
// //     } catch (error) {
// //       console.error('Signup error:', error);
// //     }
// //   };
// //   const onLoginHero = () => {
// //     // Perform any necessary logic before navigation, such as form validation
// //     router.push('/LoginHero'); // Navigate to the sign-in page
// //   };
// //   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setUser({ ...user, [name]: value });

// //     // Check password strength
// //     if (name === 'password') {
// //       setPasswordStrength(getPasswordStrength(value));
// //     }
// //   };

// //   const getPasswordStrength = (password: string): string => {
// //     let strength = '';
// //     if (password.length >= 8) {
// //       if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
// //         strength = 'Strong';
// //       } else if (/[A-Z]/.test(password) || /[0-9]/.test(password)) {
// //         strength = 'Medium';
// //       } else {
// //         strength = 'Weak';
// //       }
// //     } else {
// //       strength = 'Too Short';
// //     }
// //     return strength;
// //   };

// //   const togglePasswordVisibility = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   const toggleConfirmPasswordVisibility = () => {
// //     setShowConfirmPassword(!showConfirmPassword);
// //   };

// //   const getStrengthColor = () => {
// //     switch (passwordStrength) {
// //       case 'Strong': return 'text-green-900';
// //       case 'Medium': return 'text-blue-800';
// //       case 'Weak': return 'text-red-800';
// //       default: return 'text-gray-700';
// //     }
// //   };

// //   return (
// //     <div className="pb-40 pt-40 w-screen h-screen">
// //       <div>
// //         <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
// //         <Spotlight className="-top-2 left-full h-[80vh] w-[50vw]" fill="purple" />
// //         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
// //       </div>

// //       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
// //         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

// //         <div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl ml-4 sm:ml-6 md:ml-6 lg:ml-10">
// //           <div className="w-3/5 rounded-tr-[10rem] rounded-br-[10rem] rounded-2xl dark:bg-violet-950 text-white py-36 px-12 flex flex-col justify-center">
// //             <h1 className="text-center text-3xl font-bold mb-2">Hello, Friend!</h1>
// //             <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
// //             <p className="mb-5 text-center">Fill up your personal information and start your journey with us</p>
// //             <div className="flex justify-center items-center">
// //               <a href="#">
// //                 <MagicButton title="Sign Up" icon={<FaLocationArrow />} position="left" />
// //               </a>
// //             </div>
// //           </div>

// //           <div className="w-3/5 p-5">
// //             <div className="text-left font-bold">
// //               <span className="text-3xl text-blue-950">WebFoxShield</span>
// //             </div>
// //             <div className="py-10">
// //               <h2 className="text-xl font-bold text-blue-950 mb-2">Signup to Account</h2>
// //               <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
// //               <div className="flex justify-center my-2">
// //                 <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
// //                   <FaFacebook className="text-2xl text-black-100" />
// //                 </a>
// //                 <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
// //                   <FaLinkedinIn className="text-2xl text-black-100" />
// //                 </a>
// //                 <a href="#" className="border-2 border-black-200 rounded-xl p-3 mx-1">
// //                   <FaGoogle className="text-2xl text-black-100" />
// //                 </a>
// //               </div>
// //               <p className="text-gray-950 text-xl text-center mb-3">or use your email account</p>
// //               <div className="relative rounded-lg max-w-lg m-auto">
// //                 <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-lg">
// //                   <FaRegEnvelope className="text-gray-100 mr-2" />
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     id="email"
// //                     value={user.email}
// //                     onChange={handleChange}
// //                     placeholder="Enter Your Email"
// //                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
// //                   />
// //                 </div>
// //                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

// //                 <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-3">
// //                   <MdLockOutline className="text-gray-100 mr-2" />
// //                   <input
// //                     type={showPassword ? 'text' : 'password'}
// //                     name="password"
// //                     id="password"
// //                     value={user.password}
// //                     onChange={handleChange}
// //                     placeholder="Enter Your Password"
// //                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={togglePasswordVisibility}
// //                     className="absolute right-2"
// //                   >
// //                     {showPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
// //                   </button>
// //                 </div>
// //                 {errors.password && <p className="text-red-500 text-base">{errors.password}</p>}
// //                 <p className={`text-base mb-3 ${getStrengthColor()}`}>Password Strength: {passwordStrength}</p>

// //                 <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-5">
// //                   <MdLockOutline className="text-gray-100 mr-2" />
// //                   <input
// //                     type={showConfirmPassword ? 'text' : 'password'}
// //                     name="confirmPassword"
// //                     placeholder="Confirm Password"
// //                     value={user.confirmPassword}
// //                     onChange={handleChange}
// //                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
// //                   />
// //                   <button
// //                     type="button"
// //                     onClick={toggleConfirmPasswordVisibility}
// //                     className="absolute right-2"
// //                   >
// //                     {showConfirmPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
// //                   </button>
// //                 </div>
// //                 {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

// //                 <div className="flex justify-between w-full mb-5">
// //                   <label className="flex items-center text-base">
// //                     <input type="checkbox" name="remember" className="mr-1" /> Terms and Conditions
// //                   </label>
// //                   <a href="#" className="text-base"></a>
// //                 </div>
// //                 <div className="flex justify-center items-center">
// //                   <button
// //                     onClick={() => router.push('/LoginHero')}
// //                     className="bg-orange-500 text-white font-semibold text-base py-3 px-11 rounded-lg shadow-md mt-4"
// //                   >
// //                     Signup
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="flex justify-center relative my-20 z-10">
// //         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"></div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// "use client";

// import React, { useState, ChangeEvent } from 'react';
// import { useRouter } from 'next/navigation';  // Import useRouter
// import { Spotlight } from './ui/spotlight';
// import MagicButton from './ui/MagicButton';
// import { FaLocationArrow, FaRegEnvelope } from 'react-icons/fa6';
// import { FaFacebook, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
// import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
// import Link from "next/link";

// interface User {
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const Hero: React.FC = () => {
//   const router = useRouter();  // Initialize useRouter
//   const [user, setUser] = useState<User>({
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [passwordStrength, setPasswordStrength] = useState<string>('');
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
//   const [errors, setErrors] = useState<{ email: string; password: string; confirmPassword: string }>({
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const onSignup = async () => {
//     // Clear errors
//     setErrors({ email: '', password: '', confirmPassword: '' });

//     // Basic validation
//     if (!user.email.includes('@')) {
//       setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
//       return;
//     }

//     if (user.password.length < 8) {
//       setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters long.' }));
//       return;
//     }

//     if (user.password !== user.confirmPassword) {
//       setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match.' }));
//       return;
//     }

//     try {
//       console.log('Signing up with:', user);
//       // Your signup logic here

//       // If signup is successful, navigate to the sign-in page
    
//     } catch (error) {
//       console.error('Signup error:', error);
//     }
//   };

//   const onLoginHero = () => {
//     //     // Perform any necessary logic before navigation, such as form validation
//         router.push('/LoginHero'); // Navigate to the sign-in page

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });

//     // Check password strength
//     if (name === 'password') {
//       setPasswordStrength(getPasswordStrength(value));
//     }
//   };

//   const getPasswordStrength = (password: string): string => {
//     let strength = '';
//     if (password.length >= 8) {
//       if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
//         strength = 'Strong';
//       } else if (/[A-Z]/.test(password) || /[0-9]/.test(password)) {
//         strength = 'Medium';
//       } else {
//         strength = 'Weak';
//       }
//     } else {
//       strength = 'Too Short';
//     }
//     return strength;
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const getStrengthColor = () => {
//     switch (passwordStrength) {
//       case 'Strong': return 'text-green-900';
//       case 'Medium': return 'text-blue-800';
//       case 'Weak': return 'text-red-800';
//       default: return 'text-gray-700';
//     }
//   };

//   return (
//     <div className="pb-40 pt-40 w-screen h-screen">
//       <div>
//         <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
//         <Spotlight className="-top-2 left-full h-[80vh] w-[50vw]" fill="purple" />
//         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
//       </div>

//       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

//         <div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl ml-4 sm:ml-6 md:ml-6 lg:ml-10">
//           <div className="w-3/5 rounded-tr-[10rem] rounded-br-[10rem] rounded-2xl dark:bg-violet-950 text-white py-36 px-12 flex flex-col justify-center">
//             <h1 className="text-center text-3xl font-bold mb-2">Hello, Friend!</h1>
//             <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
//             <p className="mb-5 text-center">Fill up your personal information and start your journey with us</p>
//             <div className="flex justify-center items-center">
//               <a href="#">
//                 <MagicButton title="Sign Up" icon={<FaLocationArrow />} position="left" />
//               </a>
//             </div>
//           </div>

//           <div className="w-3/5 p-5">
//             <div className="text-left font-bold">
//               <span className="text-3xl text-blue-950">WebFoxShield</span>
//             </div>
//             <div className="py-10">
//               <h2 className="text-xl font-bold text-blue-950 mb-2">Signup to Account</h2>
//               <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
//               <div className="flex justify-center my-2">
//                 <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
//                   <FaFacebook className="text-2xl text-black-100" />
//                 </a>
//                 <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
//                   <FaLinkedinIn className="text-2xl text-black-100" />
//                 </a>
//                 <a href="#" className="border-2 border-black-200 rounded-xl p-3 mx-1">
//                   <FaGoogle className="text-2xl text-black-100" />
//                 </a>
//               </div>
//               <p className="text-gray-950 text-xl text-center mb-3">or use your email account</p>
//               <div className="relative rounded-lg max-w-lg m-auto">
//                 <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-lg">
//                   <FaRegEnvelope className="text-gray-100 mr-2" />
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={user.email}
//                     onChange={handleChange}
//                     placeholder="Enter Your Email"
//                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
//                   />
//                 </div>
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//                 <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-3">
//                   <MdLockOutline className="text-gray-100 mr-2" />
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     name="password"
//                     id="password"
//                     value={user.password}
//                     onChange={handleChange}
//                     placeholder="Enter Your Password"
//                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute right-2"
//                   >
//                     {showPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
//                   </button>
//                 </div>
//                 {errors.password && <p className="text-red-500 text-base">{errors.password}</p>}
//                 <p className={`text-base mb-3 ${getStrengthColor()}`}>Password Strength: {passwordStrength}</p>

//                 <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-5">
//                   <MdLockOutline className="text-gray-100 mr-2" />
//                   <input
//                     type={showConfirmPassword ? 'text' : 'password'}
//                     name="confirmPassword"
//                     placeholder="Confirm Password"
//                     value={user.confirmPassword}
//                     onChange={handleChange}
//                     className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
//                   />
//                   <button
//                     type="button"
//                     onClick={toggleConfirmPasswordVisibility}
//                     className="absolute right-2"
//                   >
//                     {showConfirmPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
//                   </button>
//                 </div>
//                 {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

//                 <div className="flex justify-between w-full mb-5">
//                   <label className="flex items-center text-base">
//                     <input type="checkbox" name="remember" className="mr-1" /> Terms and Conditions
//                   </label>
//                   <a href="#" className="text-base"></a>
//                 </div>
//                 <div className="flex justify-center items-center">
//                   <button
//                     onClick={() => router.push("/LoginHero")}
//                     className="bg-orange-500 text-white font-semibold text-base py-3 px-11 rounded-lg shadow-md mt-4"
//                   >
//                     Signup
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"></div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";

import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter
import { Spotlight } from './ui/spotlight';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow, FaRegEnvelope } from 'react-icons/fa6';
import { FaFacebook, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Link from "next/link";

interface User {
  email: string;
  password: string;
  confirmPassword: string;
}

const Hero: React.FC = () => {
  const router = useRouter();  // Initialize useRouter
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordStrength, setPasswordStrength] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email: string; password: string; confirmPassword: string }>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onSignup = async () => {
    // Clear errors
    setErrors({ email: '', password: '', confirmPassword: '' });

    // Basic validation
    if (!user.email.includes('@')) {
      setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
      return;
    }

    if (user.password.length < 8) {
      setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters long.' }));
      return;
    }

    if (user.password !== user.confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match.' }));
      return;
    }

    try {
      console.log('Signing up with:', user);
      // Your signup logic here

      // If signup is successful, navigate to the sign-in page
    
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // Check password strength
    if (name === 'password') {
      setPasswordStrength(getPasswordStrength(value));
    }
  };

  const getPasswordStrength = (password: string): string => {
    let strength = '';
    if (password.length >= 8) {
      if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
        strength = 'Strong';
      } else if (/[A-Z]/.test(password) || /[0-9]/.test(password)) {
        strength = 'Medium';
      } else {
        strength = 'Weak';
      }
    } else {
      strength = 'Too Short';
    }
    return strength;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const getStrengthColor = () => {
    switch (passwordStrength) {
      case 'Strong': return 'text-green-900';
      case 'Medium': return 'text-blue-800';
      case 'Weak': return 'text-red-800';
      default: return 'text-gray-700';
    }
  };

  return (
    <div className="pb-40 pt-40 w-screen h-screen">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-2 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="bg-white-100 rounded-2xl shadow-black-100 shadow-2xl flex w-2/3 max-w-4xl ml-4 sm:ml-6 md:ml-6 lg:ml-10">
          <div className="w-3/5 rounded-tr-[10rem] rounded-br-[10rem] rounded-2xl dark:bg-violet-950 text-white py-36 px-12 flex flex-col justify-center">
            <h1 className="text-center text-3xl font-bold mb-2">Hello, Friend!</h1>
            <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
            <p className="mb-5 text-center">Fill up your personal information and start your journey with us</p>
            <div className="flex justify-center items-center">
              <a href="#">
                <MagicButton title="Sign Up" icon={<FaLocationArrow />} position="left" />
              </a>
            </div>
          </div>

          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-3xl text-blue-950">WebFoxShield</span>
            </div>
            <div className="py-10">
              <h2 className="text-xl font-bold text-blue-950 mb-2">Signup to Account</h2>
              <div className="border-2 w-10 border-pink-900 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
                  <FaFacebook className="text-2xl text-black-100" />
                </a>
                <a href="#" className="border-2 border-gray-950 rounded-xl p-3 mx-1">
                  <FaLinkedinIn className="text-2xl text-black-100" />
                </a>
                <a href="#" className="border-2 border-black-200 rounded-xl p-3 mx-1">
                  <FaGoogle className="text-2xl text-black-100" />
                </a>
              </div>
              <p className="text-gray-950 text-xl text-center mb-3">or use your email account</p>
              <div className="relative rounded-lg max-w-lg m-auto">
                <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-lg">
                  <FaRegEnvelope className="text-gray-100 mr-2" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-3">
                  <MdLockOutline className="text-gray-100 mr-2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-2"
                  >
                    {showPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-base">{errors.password}</p>}
                <p className={`text-base mb-3 ${getStrengthColor()}`}>Password Strength: {passwordStrength}</p>

                <div className="relative bg-black-100 w-full p-2 flex items-center rounded-lg mb-5">
                  <MdLockOutline className="text-gray-100 mr-2" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    className="bg-black-100 outline-none text-lg flex-1 rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-2"
                  >
                    {showConfirmPassword ? <MdVisibilityOff className="text-gray-100" /> : <MdVisibility className="text-gray-100" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                <Link href="/LoginHero">
                  <button
                    onClick={onSignup}
                    className="border-2 justify-center border-gray-950 rounded-xl p-3 w-64 text-lg text-white bg-gray-900 mx-auto block hover:bg-orange-500 transition-all duration-300"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

