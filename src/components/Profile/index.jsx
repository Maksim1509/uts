import React from 'react';
import './style.scss';
import userPhoto from '../../assets/images/avatar.png';

const Profile = () => (
  <div className="profile">
    <img className="profile-photo" src={userPhoto} alt="userPhoto" />
    <span className="profile-name">Salman Shah</span>
    <span className="profile-email">shah.salman4@gmaiil.com</span>
  </div>
);

export default Profile;
