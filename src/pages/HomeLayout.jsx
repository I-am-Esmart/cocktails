import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <div>
        <Navbar />
        <h2>website in progress...!</h2>
        <section className="page">
          {isPageLoading ? <div className="loading"></div> : <Outlet />}
        </section>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default HomeLayout;
