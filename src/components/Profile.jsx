import React from "react";
import InfoBar from "./profile-components/InfoBar";
import "./Profile.css";

function Profile() {
  return (
    <div className="container">
      <div className="profile-header">
        <div className="profile-img">
          <img
            className="circle-img"
            src="https://image.freepik.com/vecteurs-libre/profil-avatar-homme-icone-ronde_24640-14044.jpg"
            alt=""
            width="200"
          />
        </div>
        <div className="profile-nav-info">
          <h3 className="user-name">Tom Cruise</h3>
          <div className="address">
            <p className="state">Berlin</p>
            <span className="country">Germany</span>
          </div>
        </div>
        <div className="profile-option">
          <div className="notification">
            <i className="fa fa-bell"></i>
            <span className="alert-message">1</span>
          </div>
        </div>
      </div>
      <div className="main-bd">
        <div className="left-side">
          <div className="profile-side">
            <p className="mobile-no">
              <i className="fa fa-phone"></i>+49 123 456 7899
            </p>
            <p className="user-email">
              <i className="fa fa-envople"></i>usernamer@email.com
            </p>
            <div className="user-bio">
              <h3>Bio</h3>
              <p className="bio">
                this is my bio, im writing my bio. i am putting content in this
                page is a profile page and this is my bio.
              </p>
            </div>
            <div className="profile-btn">
              <button className="chatbtn">
                <i className="fa fa-btn"></i>message
              </button>
              <button className="createbtn">
                <i className="fa fa-plus"></i>create
              </button>
            </div>
          </div>
        </div>
        <InfoBar />
      </div>
    </div>
  );
}

export default Profile;
