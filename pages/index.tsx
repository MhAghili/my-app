import React from "react";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="h-100 w-100 d-flex justify-content-center align-items-center text-bg-dark fs-1">
        <div className="text-center">
          <div className="row">
            <div className="col">Welcome To Our App</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
