import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t py-8 text-center text-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto ">
        <p>
          &copy; {new Date().getFullYear()} Image Cropper. All rights reserved.
        </p>
        <p>
          Built by{" "}
          <Link href="https://github.com/goodwin-omollo" className="underline">
            Goodwin Omollo
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
