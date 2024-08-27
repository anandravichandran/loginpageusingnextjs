import Link from "next/link";
import SignupHero from "@/components/SignupHero";
import {SignupFloatingNav} from "@/components/SignupFloatingNav";
import LoginHero from "@/components/LoginHero";
import { FloatingNav } from "@/components/FloatingNav";
export default function Home() {
  return (
   <main className="relative dark:bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <SignupHero/>
    <SignupFloatingNav/>
    {/* <LogupHero/> */}
    </div>
   </main>
  );
}
