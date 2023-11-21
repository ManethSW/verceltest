import React, { useState } from "react";
import styles from "./page.module.css";

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
                    <button className={`${styles.delete} ${styles.button}`}>
                      Delete
                    </button>
                    <button className={`${styles.save} ${styles.button}`}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div
                  className={`${styles.bodycontentsection}`}
                >
                  <div>
                    <h2>Username</h2>
                    <p>
                      Your username will be used to identify you on the
                      platform.
                    </p>
                  </div>
                  <input type="text" name="username" placeholder="Username" />
                </div>
                <div className={styles.footer}>
                  <p>Username should be 3 or more characters long</p>
                  <div className={styles.buttons}>
                    <button className={`${styles.save} ${styles.button}`}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.bodycontentsection}>
                  <div>
                    <h2>Username</h2>
                    <p>
                      Your username will be used to identify you on the
                      platform.
                    </p>
                  </div>
                  <input type="text" name="username" placeholder="Username" />
                </div>
                <div>
                  <button className={styles.savebutton}>Save</button>
                </div>
              </div>
              {/* <div className={styles.content}>
                <div className={styles.bodycontentsection}>
                  <div>
                    <h2>Full Name</h2>
                    <p>
                      Your full name will be used to identify you in the
                      application.
                    </p>
                  </div>
                  <div className={styles.name}>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div>
                  <button className={styles.savebutton}>Save</button>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.bodycontentsection}>
                  <div>
                    <h2>Address</h2>
                    <p>
                      Your address will be used to identify you in the
                      application.
                    </p>
                  </div>
                  <input type="text" name="address" placeholder="Address" />
                </div>
                <div>
                  <button className={styles.savebutton}>Save</button>
                </div>
              </div> */}
            </div>
          )}
          {navigation === "Contact Information" && (
            <div className={styles.bodycontent}>
              <div className={styles.content}>
                <div className={styles.bodycontentsection}>
                  <div>
                    <h2>Email</h2>
                    <p>
                      Your email will be used to identify you in the
                      application.
                    </p>
                  </div>
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div>
                  <button className={styles.savebutton}>Save</button>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.bodycontentsection}>
                  <div>
                    <h2>Phone</h2>
                    <p>
                      Your phone will be used to identify you in the
                      application.
                    </p>
                  </div>
                  <input type="text" name="phone" placeholder="Phone" />
                </div>
                <div>
                  <button className={styles.savebutton}>Save</button>
                </div>
              </div>
            </div>
          )}
          {navigation === "Portfolio" && <div>Portfolio Content</div>}
          {navigation === "Change Password" && (
            <div className={styles.bodycontent}>
              <div className={styles.content}>
                <div className={styles.bodycontentsection}>
                  <div>
                    <div>
                      <h2>Old Password</h2>
                    </div>
                    <input
                      type="password"
                      name="oldpassword"
                      placeholder="********"
                    />
                  </div>
                  <div>
                    <div>
                      <h2>New Password</h2>
                    </div>
                    <input
                      type="password"
                      name="oldpassword"
                      placeholder="********"
                    />
                  </div>
                </div>
                <div>
                  <button className={styles.savebutton}>Save</button>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.bodycontentsection}>
                  <div>
                    <h2>New Password</h2>
                    <p>
                      Your phone will be used to identify you in the
                      application.
                    </p>
                  </div>
                  <input type="text" name="phone" placeholder="Phone" />
                </div>
                <div>
                  <button className={styles.savebutton}>Save</button>
                </div>
              </div>
            </div>
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
