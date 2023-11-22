"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import General from "../components/Profile/General/General";
import ContactInformation from "../components/Profile/ContactInformation/ContactInformation";
import ChangePassword from "../components/Profile/ChangePassword/ChangePassword";
import Portfolio from "../components/Profile/Portfolio/Portfolio";

const Profile = () => {
  const [navigation, setNavigation] = useState("General");
  const handleMenuClick = (menu) => {
    setNavigation(menu);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Maneth Weerasinghe / {navigation}</h2>
        <p>Edit and setup your account as prefered</p>
      </div>
      <div className={styles.body}>
        <ul className={styles.menu}>
          <li onClick={() => handleMenuClick("General")}>General</li>
          <li onClick={() => handleMenuClick("Contact Information")}>
            Contact Information
          </li>
          <li onClick={() => handleMenuClick("Portfolio")}>Portfolio</li>
          <li onClick={() => handleMenuClick("Change Password")}>
            Change Password
          </li>
          <li onClick={() => handleMenuClick("Social Profiles")}>
            Social Profiles
          </li>
        </ul>
        <div className={styles.divider}></div>
        <div className={styles.bodycontent}>
          {navigation === "General" && (
            <div>
              <General />
            </div>
          )}
          {navigation === "Contact Information" && <ContactInformation />}
          {navigation === "Portfolio" && (
            <div>
              <Portfolio />
            </div>
          )}
          {navigation === "Change Password" && <ChangePassword />}
          {navigation === "Social Profiles" && (
            <div>Social Profiles Content</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
