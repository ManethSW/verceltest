"use client";
import React from "react";
import Image from "next/image";
import styles from "./RegisterGeneralDetails.module.css";
import Input from "../Input/Input";
import useInputValidation from "../../hooks/UserInputValidation";
import axios from "axios";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

const USERNAME_REGEX = /^[a-zA-Z0-9]{3,15}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_REGEX =
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const RegisterAdditionalDetails = ({ onNext }) => {
  const [username, usernameValid, validateUsername] = useInputValidation(
    "",
    (value) => USERNAME_REGEX.test(value)
  );
  const [email, emailValid, validateEmail] = useInputValidation("", (value) =>
    EMAIL_REGEX.test(value)
  );
  const [password, passwordValid, validatePassword] = useInputValidation(
    "",
    (value) => PASSWORD_REGEX.test(value)
  );8
  const [confirmPassword, confirmPasswordValid, validateConfirmPassword] =
    useInputValidation("", (value) => value === password);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      usernameValid === "valid" &&
      emailValid === "valid" &&
      passwordValid === "valid" &&
      confirmPasswordValid === "valid"
    ) {
      console.log("working");
      const registerUrl = `${process.env.API_BASE_URL}${process.env.API_AUTH_REGISTER}`;;
      const headers = {
        auth_token: "LASDLkoasnkdnawndkansjNKJFNKJANSKN",
      };
      const data = {
        username,
        email,
        password,
      };

      try {
        const response = await axios.post(registerUrl, data, { headers });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      };
    }
  };

  return (
    <GoogleOAuthProvider clientId="286854776272-tij0a772behg9qnd0v0667bga8rqj0p2.apps.googleusercontent.com">
      <div>
        <div className={styles.title}>Register</div>
        <div className={styles.subtitle}>Please select your user type</div>
        <div className={styles.registerform}>
          <form onSubmit={handleRegister}>
            <div className={styles.inputcontainer}>
              <Input
                id="username"
                type="text"
                placeholder="Enter a username"
                value={username}
                isValid={usernameValid}
                onChange={validateUsername}
              />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                isValid={emailValid}
                onChange={validateEmail}
              />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                isValid={passwordValid}
                onChange={validatePassword}
              />
              <Input
                id="verifypassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                isValid={confirmPasswordValid}
                onChange={validateConfirmPassword}
              />
            </div>
            {/* <div className={styles.agreeterms}>
            <input type="checkbox" id="agreeterms" name="agreeterms" />
            <label for="agreeterms">I agree to the terms and conditions</label>
          </div> */}
            <div className={styles.register}>
              <button type="submit" className={styles.actionButton}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default RegisterAdditionalDetails;
