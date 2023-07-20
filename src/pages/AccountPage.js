import React from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";

const AccountPage = () => {
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div>
      <nav className="  w-full flex justify-center text-center  mt-8 gap-4">
        <NavLink
          to="/account"
          className={splitLocation[1] === "account" ? "active" : ""}
          id="profile"
        >
          My Account
        </NavLink>
        <NavLink
          to="/account/bookings"
          className={splitLocation[1] === "/bookings" ? "active" : ""}
          id="bookings"
        >
          My Bookings
        </NavLink>
      </nav>
      {"profile" && <div className=" text-center" Logged in as></div>}
    </div>
  );
};

export default AccountPage;
