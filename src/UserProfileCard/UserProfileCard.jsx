import React from 'react';
import PropTypes from 'prop-types';

const UserProfileCard = ({ name, email, avatarUrl }) => {
  return (
    <div className="user-profile-card">
      <img src={avatarUrl} alt="User Avatar" className="avatar" />
      <div className="user-info">
        <h2>{name}</h2>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

UserProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default UserProfileCard;
