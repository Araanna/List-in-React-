import Image from "next/image";
import Link from "next/link";

const Body = (props) => {
  return (
    <>
      <h1>Hello World! {props.name}</h1>
      <h1>You are from {props.address}</h1>

      <Image
        src="/assets/images/star.png"
        alt="Profile picture"
        width={300}
        height={300}
      />
      <br />

      <Link href={"/about"}>About</Link>
      <br />
      <Link href={"/blogs"}>Blogs</Link>
      <br />
      <Link href={"/contactus"}>Contact Us</Link>
      <br />
      <Link href={"/news"}>News</Link>
      <br />
    </>
  );
};

export default Body;
