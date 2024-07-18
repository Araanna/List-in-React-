"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import React from "react";

const About = () => {
  const params = useSearchParams();

  //This one here the params are define or initialize first
  const name = params.get("name");
  const address = params.get("address");

  // We return the component with the search parameters as props.
  // The Link component will automatically append these parameters to the URL when clicked.
  // This is useful for creating dynamic routes. For example, if we want to link to a page with a specific name and address, we can do so like this:
  // <Link href={`/about?name=John&address=123 Main St.`}>About John</Link>

  // When the user clicks on this link, they will be redirected to the "/about" page with the provided search parameters.

  // We also include a Link to the home page, which will always have the same URL, so it's easy to navigate back to the main page.

  // Note: This component is only rendered on the client-side. When
  return (
    <>
      <h1>About</h1>

      <h1>
        The name sent to this page {params.get("name")} and the address is{" "}
        {params.get("address")}
      </h1>
      <br />
      <h1>
        The name sent to this page {name} and the address is {address}
      </h1>
      <br />
      <Link href={"/"}>Home</Link>
    </>
  );
};

export default About;
