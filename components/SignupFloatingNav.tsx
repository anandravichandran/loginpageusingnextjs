"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/MovingBorder";

export const SignupFloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div>
      {/* Logo in the left corner */}
      <img
        src={"/Webfoxshield.png"} // Use an absolute path if the image is in the public directory
        alt="Logo"
        className="fixed top-0 left-3 h-40 z-[900]" // Adjust size and margin as needed
      />
      {/* Login and Register Buttons */}
      <div className="fixed top-10 right-10 flex space-x-4 z-[5000]"> {/* Ensure high Z-index */}
        {/* <Link href="/login">
          <Button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
            Login
          </Button>
        </Link> */}
        <Link href="/LoginHero">
          <Button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-3 rounded-full">
            SignIn
          </Button>
        </Link>
      </div>
    </div>
  );
};
