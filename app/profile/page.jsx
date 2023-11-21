"use client"
import React, { useState } from "react";
import styles from "./page.module.css";

const Profile = () => {
  const [navigation, setNavigation] = useState("General");
  const [username, setUsername] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [usernameValidationMessage, setUserNameValidationMessage] = useState(
    "Should be 3 or more characters long"
  );
  const [isUsernameTouched, setIsUsernameTouched] = useState(false);

  const [fullname, setFullname] = useState("");
  const [isFullnameValid, setIsFullnameValid] = useState(true);
  const [fullnameValidationMessage, setFullnameValidationMessage] = useState(
    "Should contain atleast 2 names"
  );
  const [isFullnameTouched, setIsFullnameTouched] = useState(false);

  const [address, setAddress] = useState("");
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [addressValidationMessage, setAddressValidationMessage] = useState(
    "Address is optional but recommended"
  );
  const [isAddressTouched, setIsAddressTouched] = useState(false);

  const [city, setCity] = useState("");
  const [provinceOrState, setProvinceOrState] = useState("");
  const [country, setCountry] = useState("");

  function isUserNameValidFunction(username) {
    if (username.length >= 3 >= 3) {
      return true;
    } else {
      return false;
    }
  }

  function isFullNameValidFunction(fullname) {
    const fullnameRegex = /^[a-zA-Z ]+$/;
    if (
      fullname.trim().split(" ").length >= 2 &&
      fullnameRegex.test(fullname)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function isAddressValidFunction(addresspart) {
    const addressRegex = /^[a-zA-Z ]+$/;
    if (addresspart === "") {
      return true;
    } else if (addressRegex.test(addresspart)) {
      return true;
    } else {
      return false;
    }
  } 

  const handleCityChange = (event) => {
    const newCity = event.target.value;
    setCity(newCity);
    setIsAddressTouched(true);
    const cityRegex = /^[a-zA-Z ]+$/;
    if (newCity === "") {
      setIsAddressValid(true);
      setAddressValidationMessage("Address is optional but recommended");
    } else if (cityRegex.test(newCity)) {
      setIsAddressValid(true);
      setAddressValidationMessage("Valid");
    } else {
      setIsAddressValid(false);
      setAddressValidationMessage("Should only contain letters");
    }
  };

  const handleProvinceOrStateChange = (event) => {
    const newProvinceOrState = event.target.value;
    setProvinceOrState(newProvinceOrState);
    setIsAddressTouched(true);
    const provinceOrStateRegex = /^[a-zA-Z ]+$/;
    if (newProvinceOrState === "") {
      setIsAddressValid(true);
      setAddressValidationMessage("Address is optional but recommended");
    } else if (provinceOrStateRegex.test(newProvinceOrState)) {
      setIsAddressValid(true);
      setAddressValidationMessage("Valid");
    } else {
      setIsAddressValid(false);
      setAddressValidationMessage("Should only contain letters");
    }
  };

  const handleCountryChange = (event) => {
    const newCountry = event.target.value;
    setCountry(newCountry);
    setIsAddressTouched(true);
    const countryRegex = /^[a-zA-Z ]+$/;
    if (newCountry === "") {
      setIsAddressValid(true);
      setAddressValidationMessage("Address is optional but recommended");
    } else if (countryRegex.test(newCountry)) {
      setIsAddressValid(true);
      setAddressValidationMessage("Valid");
    } else {
      setIsAddressValid(false);
      setAddressValidationMessage("Should only contain letters");
    }
  };

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    setIsUsernameTouched(true);
    if (newUsername.length >= 3) {
      setIsUsernameValid(true);
      setUserNameValidationMessage("Username is valid");
    } else {
      setIsUsernameValid(false);
      setUserNameValidationMessage("Username is less than 3 characters");
    }
  };

  const handleFullnameChange = (event) => {
    const newFullname = event.target.value;
    setFullname(newFullname);
    setIsFullnameTouched(true);
    // Perform Fullname validation
    const fullnameRegex = /^[a-zA-Z ]+$/;
    if (
      newFullname.trim().split(" ").length >= 2 &&
      fullnameRegex.test(newFullname)
    ) {
      setIsFullnameValid(true);
      setFullnameValidationMessage("Fullname is valid");
    } else {
      setIsFullnameValid(false);
      setFullnameValidationMessage(
        "Should contain at least 2 names and only letters"
      );
    }
  };

  const handleUsernameSave = () => {
    if (isUsernameValid) {
      // Save the username
      console.log("Username saved:", username);
    } else {
      console.log("Invalid username");
    }
  };

  const handleFullnameSave = () => {
    if (isFullnameValid) {
      // Save the fullname
      console.log("Fullname saved:", fullname);
    } else {
      console.log("Invalid fullname");
    }
  };

  const handleAddressSave = () => {
    if (isAddressValid) {
      // Save the address
      console.log("Address saved:", address);
    } else {
      console.log("Invalid address");
    }
  };

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
            <div className={styles.bodycontent}>
              <div className={styles.content}>
                <div
                  className={` ${styles.avatarsection} ${styles.bodycontentsection}`}
                >
                  <div>
                    <h2>Avatar</h2>
                    <p>
                      This is your avatar.
                      <br></br> Click on the avatar to upload a custom one from
                      your files.
                    </p>
                  </div>
                  <div className={styles.avatar}></div>
                </div>
                <div className={styles.footer}>
                  <p>Avatar is strongly recommended</p>
                  <div className={styles.buttons}>
                    <button
                      className={`${styles.delete} ${styles.button}`}
                      onClick={""}
                    >
                      Delete
                    </button>
                    <button
                      className={`${styles.save} ${styles.button}`}
                      onClick={""}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={`${styles.bodycontentsection}`}>
                  <div>
                    <h2>Username</h2>
                    <p>
                      Your username will be used to identify you on the
                      platform.
                    </p>
                  </div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className={styles.footer}>
                  <p
                    className={
                      isUsernameTouched
                        ? isUsernameValid
                          ? styles.valid
                          : styles.invalid
                        : styles.initial
                    }
                  >
                    {usernameValidationMessage}
                  </p>
                  <div className={styles.buttons}>
                    <button
                      className={`${styles.save} ${styles.button}`}
                      onClick={handleUsernameSave}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.bodycontentsection}>
                  <div>
                    <h2>Full Name</h2>
                    <p>
                      Your full name will be used to identify you in the
                      application.
                    </p>
                  </div>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={fullname}
                    onChange={handleFullnameChange}
                  />
                </div>
                <div className={styles.footer}>
                  <p
                    className={
                      isFullnameTouched
                        ? isFullnameValid
                          ? styles.valid
                          : styles.invalid
                        : styles.initial
                    }
                  >
                    {fullnameValidationMessage}
                  </p>
                  <div className={styles.buttons}>
                    <button
                      className={`${styles.save} ${styles.button}`}
                      onClick={handleFullnameSave}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.bodycontentsection}>
                  <div>
                    <h2>Address</h2>
                    <p>This will help clients identify where you come from</p>
                  </div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={city}
                    onChange={handleCityChange}
                  />
                  <input
                    type="text"
                    name="provinceorstate"
                    placeholder="Province/State"
                    value={provinceOrState}
                    onChange={handleProvinceOrStateChange}
                  />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={country}
                    onChange={handleCountryChange}
                  />
                </div>
                <div className={styles.footer}>
                  <p
                    className={
                      isAddressTouched
                        ? isAddressValid
                          ? styles.valid
                          : styles.invalid
                        : styles.initial
                    }
                  >
                    {addressValidationMessage}
                  </p>
                  <div className={styles.buttons}>
                    <button
                      className={`${styles.save} ${styles.button}`}
                      onClick={handleAddressSave}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {navigation === "Contact Information" && (
            <div className={styles.bodycontent}></div>
          )}
          {navigation === "Portfolio" && <div>Portfolio Content</div>}
          {navigation === "Change Password" && (
            <div className={styles.bodycontent}></div>
          )}
          {navigation === "Social Profiles" && (
            <div>Social Profiles Content</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
