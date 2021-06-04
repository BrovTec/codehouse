import { Button } from "@material-ui/core";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full px-4 py-3 glassmorphism flex justify-between items-center">
      <Link href="/">
        <a className="text-3xl font-extrabold text-[#ECF2F5]">Code House</a>
      </Link>
      <div className="flex h-full items-center">
        <a href="#" className="text-sm font-medium continuous-line">
          How it works
        </a>
        <a href="#" className="text-sm font-medium ml-6 continuous-line">
          Upcoming Features
        </a>
        <a href="#" className="text-sm font-medium ml-6 continuous-line">
          Contributors
        </a>
        <a href="#" className="text-sm font-medium ml-6 continuous-line">
          On Review
        </a>
        <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-6">
          <div className="border-2 border-[#ffcf5e] text-[#ffcf5e] px-2 py-[4px] text-md capitalize rounded-md font-semibold flex items-center justify-center">
            New CheetSheet
          </div>
        </Button>
        <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-2">
          <div className="bg-[#F5BA31] px-4 py-[6px] text-md capitalize rounded-md font-semibold flex items-center justify-center">
            Sign In
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Header;