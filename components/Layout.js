import React from "react";
import Link from "next/link";

export default ({ children, title }) => (
  <div>
    <header>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/about">
        <a>ABOUT ME</a>
      </Link>
      <Link href="/works">
        <a>WORKS</a>
      </Link>
    </header>

    <h1>{title}</h1>
    {children}

    <footer>
      <p>copyright {new Date().getFullYear()} kafu All right reserved. </p>
    </footer>

    <style jsx>{`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        background: indigo;
      }
      header a {
        color: darkgray;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lightgray;
      }
      footer {
        padding: 1em;
      }
    `}</style>

    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>
  </div>
);
