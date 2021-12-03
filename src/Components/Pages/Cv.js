import * as React from "react";
import { Link } from "react-router-dom";

export const Cv = () => {
  return (
    <>
      <main>
        <h2>My cv</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};
