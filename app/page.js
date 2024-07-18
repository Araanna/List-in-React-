"use client";

import { useState } from "react";

const Home = () => {
  const [myList, setMyList] = useState([]);
  const [name, setName] = useState("");

  const fillList = () => {
    setMyList(["Makyus", "Razzie", "LaNay"]);
  };

  const addToList = () => {
    setMyList([...myList, name]);
  };

  return (
    <>
      <h1>Working with Lists and useEffect () Hook</h1>
      <button
        className="px-[5vh] border-2 border-solid border-black rounded-2xl transform hover:border-blue-300"
        onClick={fillList}
      >
        Fill List
      </button>
      <br />
      <br />
      <br />
      <input
        className="px-[2vh] border-2 border-solid border-black rounded-xl text-sm"
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button
        className="px-[2px] py-[2px] border-2 border-solid border-black rounded-md text-sm m-10  "
        onClick={addToList}
      >
        Add To List
      </button>
      <br />
      <br />
      <br />
      {/* This one here is the List */}

      <b>List</b>
      <ul>
        {myList.map((student) => {
          // eslint-disable-next-line react/jsx-key
          return <li>{student}</li>;
        })}
      </ul>
      <br />
      <br />
      <br />
      {/* This one here is for the table */}
      <b>Table</b>
      <table>
        {myList.map((student) => {
          // eslint-disable-next-line react/jsx-key
          return (
            // eslint-disable-next-line react/jsx-key
            <tr>
              <td>{student}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Home;
