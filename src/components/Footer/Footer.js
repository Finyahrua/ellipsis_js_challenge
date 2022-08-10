import React from "react";
import "./Footer.css";

function Footer() {
  const SocialIconsData = [
    {
      name: "facebook",
      image:
        "https://raw.githubusercontent.com/amawalla/js-coding-challenge/457e3a4b591ce409bc5b218c7329953874012662/assets/social/facebook-white.svg",
    },
    {
      name: "twitter",
      image:
        "https://raw.githubusercontent.com/amawalla/js-coding-challenge/457e3a4b591ce409bc5b218c7329953874012662/assets/social/twitter-white.svg",
    },
    {
      name: "instagram",
      image:
        "https://raw.githubusercontent.com/amawalla/js-coding-challenge/457e3a4b591ce409bc5b218c7329953874012662/assets/social/instagram-white.svg",
    },
  ];
  const StorelIconsData = [
    {
      name: "playstore",
      image:
        "https://raw.githubusercontent.com/amawalla/js-coding-challenge/457e3a4b591ce409bc5b218c7329953874012662/assets/store/play-store.svg",
    },
    {
      name: "appleStore",
      image:
        "https://raw.githubusercontent.com/amawalla/js-coding-challenge/457e3a4b591ce409bc5b218c7329953874012662/assets/store/app-store.svg",
    },
    {
      name: "microsoftStore",
      image:
        "https://raw.githubusercontent.com/amawalla/js-coding-challenge/457e3a4b591ce409bc5b218c7329953874012662/assets/store/windows-store.svg",
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-content">
        <ul className="footer-list">
          <li className="footer-list-item">Home </li> |
          <li className="footer-list-item">Terms and Conditions </li>|
          <li className="footer-list-item">Privacy Policy </li>|
          <li className="footer-list-item">Collection Statement </li>|
          <li className="footer-list-item">Help </li>|
          <li className="footer-list-item">Manage Account</li>
        </ul>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2016 DEMO Streaming All Rights Reserved</p>
      </div>
      <div className="footer-icons">
        <div className="footer-social">
          {SocialIconsData.map((icon) => {
            return (
              <img
                src={icon.image}
                alt={icon.name}
                style={{ height: 30, marginRight: "1rem" }}
              />
            );
          })}
        </div>
        <div className="footer-store">
          {StorelIconsData.map((icon) => {
            return (
              <img
                src={icon.image}
                alt={icon.name}
                style={{ height: 30, marginRight: "1rem"}}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
