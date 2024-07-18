import React from "react";
import Image from "next/image";
import src from "../public/assets/images/star.png";

// const src = "/public/assets/images/stasr.png";
const Pictures = () => {
  return <Image src={src} alt="Profile picture" width={300} height={300} />;
};

export default Pictures;
