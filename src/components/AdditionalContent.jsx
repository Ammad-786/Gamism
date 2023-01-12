import React from 'react';
import userProfile from "../assets/2.jpg"

const AdditionalContent = () => {
  return (
    <div className="card-container-user">
      <div className="card-user">
        <div className="card-face">
            <ul className='user-nav'>
              <div className='flex flex-row items-center gap-8'>
              <li><img className='h-16 w-16 rounded-full' src={userProfile} alt="User Profile" /></li>
              <li><p className='card-p'>John Doe</p></li>
              </div>
              <li>Home</li>
              <li>Settings</li>
              <li>Logout</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditionalContent;