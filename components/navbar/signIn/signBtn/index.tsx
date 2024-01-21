import { CustomLink } from "@/components/custom/link";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const SignInBtnComp = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-2 border-b border-gray-300">
      <Button
        asChild
        className="bg-[#FFD814]
            hover:bg-[#ffd814] hover:border-[#FCD200]
            border border-[#FCD200]
            text-black text-sm h-8 max-w-[200px] w-full"
      >
        <Link className="hover:underline" href="/sign-in">
          sign in
        </Link>
      </Button>
      <h6 className="text-xs capitalize mt-1 flex gap-1">
        <span className="text-black">new customer</span>
        <CustomLink isUnderlined text="start here" path="/sign-up" />
      </h6>
    </div>
  );
};
