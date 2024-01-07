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
        <section className="page">
          {isPageLoading ? (
            <div className="loading_container">
              <div className="loading"></div>
            </div>
          ) : (
            <Outlet />
          )}
        </section>
      </div>
    </>
  );
};

export default HomeLayout;
