"use client";

import { GitHubIcon, GoogleIcon } from "components/icons";
import { signIn, signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button
      className='text-xs text-neutral-700 dark:text-neutral-300 mt-2 mb-6'
      onClick={() => signOut()}
    >
      → Sign out
    </button>
  );
}

export function SignInGithub() {
  return (
    <button
      className='flex bg-black text-neutral-200 px-4 py-3 rounded-md font-semibold text-sm mb-4 hover:text-white transition-all border border-gray-800'
      onClick={() => signIn("github")}
    >
      <GitHubIcon />
      <div className='ml-3'>Sign in with GitHub</div>
    </button>
  );
}

export function SignInGoogle() {
  return (
    <button
      className='flex items-center bg-white text-neutral-600 px-4 py-3 rounded-md font-semibold text-sm mb-4 hover:text-gray-800 transition-all border  border-gray-800'
      onClick={() => signIn("google")}
    >
      <GoogleIcon />
      <div className='ml-3'>
        Sign in with Google
        {/* <span className="text-base">
          <span className="text-[#4086f4]">G</span>
          <span className='text-[#eb4132]'>o</span>
          <span className='text-[#fbbd01]'>o</span>
          <span className='text-[#4086f4]'>g</span>
          <span className='text-[#30a952]'>l</span>
          <span className='text-[#eb4132]'>e</span>
        </span> */}
      </div>
    </button>
  );
}
