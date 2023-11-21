import React, { useState } from "react";
import styles from "../Profile.module.css";

const ContactInformation = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [phoneNumberValidationMessage, setPhoneNumberValidationMessage] =
    useState("Should be a valid phone number");
  const [isPhoneNumberTouched, setIsPhoneNumberTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailValidationMessage, setEmailValidationMessage] = useState(
    "Should be a valid email address"
  );
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  function isPhoneNumberValidFunction(phoneNumber) {
    const phoneNumberRegex = /^[0-9]{10}$/;
    return phoneNumberRegex.test(phoneNumber);
  }

  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
    setIsPhoneNumberTouched(true);
    if (isPhoneNumberValidFunction(newPhoneNumber)) {
      setIsPhoneNumberValid(true);
      setPhoneNumberValidationMessage("Phone number is valid");
    } else {
      setIsPhoneNumberValid(false);
      setPhoneNumberValidationMessage("Phone number is invalid");
    }
  };

  const handlePhoneNumberSave = () => {
    if (isPhoneNumberValid) {
      console.log("Phone number saved");
    } else {
      console.log("Phone number not saved");
    }
  };

  function isEmailValidFunction(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailTouched(true);
    if (isEmailValidFunction(newEmail)) {
      setIsEmailValid(true);
      setEmailValidationMessage("Email is valid");
    } else {
      setIsEmailValid(false);
      setEmailValidationMessage("Email is invalid");
    }
  };

  const handleEmailSave = () => {
    if (isEmailValid) {
      console.log("Email saved");
    } else {
      console.log("Email not saved");
    }
  };

  return (
    <div className={styles.bodycontent}>
      <div className={styles.content}>
        <div className={styles.bodycontentsection}>
          <div>
            <h2>Phone Number</h2>
            <p>Your phone number will be used for account verification.</p>
          </div>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>
        <div className={styles.footer}>
          <p
            className={
              isPhoneNumberTouched
                ? isPhoneNumberValid
                  ? styles.valid
                  : styles.invalid
                : styles.initial
            }
          >
            {phoneNumberValidationMessage}
          </p>
          <div className={styles.buttons}>
            <button
              className={`${styles.save} ${styles.button}`}
              onClick={handlePhoneNumberSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.bodycontentsection}>
          <div>
            <h2>Email</h2>
            <p>Your email will be used for account verification.</p>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.footer}>
          <p
            className={
              isEmailTouched
                ? isEmailValid
                  ? styles.valid
                  : styles.invalid
                : styles.initial
            }
          >
            {emailValidationMessage}
          </p>
          <div className={styles.buttons}>
            <button
              className={`${styles.save} ${styles.button}`}
              onClick={handleEmailSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
