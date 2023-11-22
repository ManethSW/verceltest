import React, { useState, useEffect } from "react";
import styles from "../Profile.module.css";

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const ChangePassword = () => {
  const [passowrd, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordValidationMessage, setPasswordValidationMessage] = useState(
    "Should enter all fields for the passwords"
  );
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const [countdown, setCountdown] = useState(0);
  const [otpSent, setOtpSent] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const displayToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 5000);
  };

  function isPasswordValidFunction(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }

  const handleOldPasswordChange = (event) => {
    const oldPassword = event.target.value;
    setOldPassword(oldPassword);
    setIsPasswordTouched(true);
    validatePassword(oldPassword, newPassword, newPasswordConfirm);
  };

  const handleNewPasswordChange = (event) => {
    const newPassword = event.target.value;
    setNewPassword(newPassword);
    setIsPasswordTouched(true);
    validatePassword(oldPassword, newPassword, newPasswordConfirm);
  };

  const handleNewPasswordConfirmChange = (event) => {
    const newPasswordConfirm = event.target.value;
    setNewPasswordConfirm(newPasswordConfirm);
    setIsPasswordTouched(true);
    validatePassword(oldPassword, newPassword, newPasswordConfirm);
  };

  const validatePassword = (oldPassword, newPassword, newPasswordConfirm) => {
    const isOldPasswordValid = isPasswordValidFunction(oldPassword);
    const isNewPasswordValid = isPasswordValidFunction(newPassword);
    const isNewPasswordConfirmValid =
      isPasswordValidFunction(newPasswordConfirm);

    if (isOldPasswordValid && isNewPasswordValid && isNewPasswordConfirmValid) {
      if (oldPassword === newPassword) {
        setIsPasswordValid(false);
        setPasswordValidationMessage(
          "New password should be different from the old password"
        );
      } else if (newPassword !== newPasswordConfirm) {
        setIsPasswordValid(false);
        setPasswordValidationMessage(
          "New password and confirm password should be the same"
        );
      } else {
        setIsPasswordValid(true);
        setPasswordValidationMessage("Valid Password");
      }
    } else {
      setIsPasswordValid(false);
      setPasswordValidationMessage(
        "Should contain 8 characters or more, Capital letter and numbers"
      );
    }
  };

  const Countdown = ({ initialCountdown, onEnd }) => {
    const [countdown, setCountdown] = useState(initialCountdown);

    useEffect(() => {
      if (countdown > 0) {
        const intervalId = setInterval(() => {
          setCountdown((prevCountdown) => {
            if (prevCountdown <= 1) {
              clearInterval(intervalId);
              onEnd();
              return 0;
            } else {
              return prevCountdown - 1;
            }
          });
        }, 1000);
        return () => clearInterval(intervalId);
      }
    }, [countdown, onEnd]);

    return <span style={{ "--value": countdown }}></span>;
  };

  const handleSendOTP = async (type) => {
    if (countdown > 0) {
      displayToast("Please wait before sending another OTP", "warning");
    } else {
      displayToast(`OTP code sent to your email`, "success");
      setCountdown(60);
      setOtpSent(true);
    }
    // const response = await mockApiCall("/send-otp", { [type]: value });
    // if (response.status === 200) {
    //   displayToast("OTP code sent");
    // } else {
    //   displayToast("Failed to send OTP");
    // }
  };

  const handleSubmitOTP = async (otp) => {
    displayToast(`Password changed successfully`, "success");
    // const response = await mockApiCall("/submit-otp", { otp });
    // if (response.status === 200) {
    //   displayToast(`${type} changed successfully`, "success");
    // } else {
    //   displayToast("Failed to submit OTP. Please retry.", "warning");
    // }
  };

  const OTPInputField = ({ value, onChange, onKeyUp }) => {
    const inputRef = React.useRef();

    useEffect(() => {
      if (value.length === 1) {
        inputRef.current.focus();
      }
    }, [value]);

    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        maxLength="1"
        ref={inputRef}
      />
    );
  };

  const OTPInput = ({ onSubmit, countdown }) => {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const otpInputRefs = Array.from({ length: 6 }, () => React.createRef());

    const handleChange = (elementIndex, event) => {
      const newOtp = [...otp];
      newOtp[elementIndex] = event.target.value;

      setOtp(newOtp);

      // If all 6 characters are entered, automatically submit and save
      if (newOtp.join("").length === 6) {
        onSubmit(newOtp.join(""));
      } else if (event.target.value.length === 1) {
        // Focus on the next input field
        if (elementIndex < 5) {
          otpInputRefs[elementIndex + 1].current.focus();
        }
      }
    };

    const handleKeyUp = (elementIndex, event) => {
      // If backspace is pressed and the current input field is empty, focus on the previous input field
      if (event.keyCode === 8 && !otp[elementIndex]) {
        if (elementIndex > 0) {
          otpInputRefs[elementIndex - 1].current.focus();
        }
      }
    };

    return (
      <div className={styles.otpcontainer}>
        <div className={styles.otpheader}>
          <h3>Enter OTP Code</h3>
          <span className="countdown">
            <Countdown
              initialCountdown={countdown}
              onEnd={() => !otpSent && setCountdown(0)}
            />
          </span>
        </div>
        <div className={styles.otpinputs}>
          {otp.map((value, index) => (
            <OTPInputField
              value={value}
              onChange={(event) => handleChange(index, event)}
              onKeyUp={(event) => handleKeyUp(index, event)}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.bodyContent}>
      {toastVisible && (
        <div className={`toast toast-end`}>
          <div className={`${styles.toast}`}>
            {toastType === "success" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
      <div className={styles.content}>
        <div className={`${styles.bodycontentsection}`}>
          <div>
            <h2>Change Your Password</h2>
            <p>
              You can change your password here. Please enter your current
              password and then enter your new password twice.{" "}
            </p>
          </div>
          <input
            type="password"
            name="oldpassword"
            className={styles.input}
            value={oldPassword}
            onChange={handleOldPasswordChange}
            placeholder="Current Password"
          />
          <input
            type="password"
            name="newpassword"
            className={styles.input}
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder="New Password"
          />
          <input
            type="password"
            name="confirmpassword"
            className={styles.input}
            value={newPasswordConfirm}
            onChange={handleNewPasswordConfirmChange}
            placeholder="Confirm New Password"
          />
          <OTPInput
            onSubmit={(otp) => handleSubmitOTP("phone", otp)}
            countdown={countdown}
          />
        </div>
        <div className={styles.footer}>
          <p
            className={
              isPasswordTouched
                ? isPasswordValid
                  ? styles.valid
                  : styles.invalid
                : styles.initial
            }
          >
            {passwordValidationMessage}
          </p>
          <div className={styles.buttons}>
            <button
              className={`${styles.save} ${styles.button}`}
              onClick={handleSendOTP}
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
