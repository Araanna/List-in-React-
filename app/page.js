"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const login = () => {
    const queryString = `name = ${username}`;
    // router.push(`/about?${queryString}`);

    //Other way to do it :
    router.push(`/about?name=${username}&address={address}`);

    //Object -Oriented Prog Way of doing it
    const params = new URLSearchParams();
    params.append("name", username);
    params.append("address", address);
    router.push(`/about?${params}`);

    sessionStorage.setItem('name', username);
    sessionStorage.setItem('address', address);
    router.push ('./blogs')
  };
  return (
    <>
      <Link href="./about?name=Mela&address=Cagayan de Oro "> About</Link>
      <br />

      <input
        className="border-2 border-black  border-solid rounded-md"
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md m-5"
        onClick={login}
      >
        Login
      </button>
      <br />

      <input
        className="border-2 border-black  border-solid rounded-md"
        type="text"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />

      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md m-5"
        onClick={() => {
          router.push("./about");
        }}
      >
        Login
      </button> */}
    </>
  );
};

export default Home;
