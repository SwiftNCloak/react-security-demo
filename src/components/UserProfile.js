// Fix this code.

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../store/actions';

const UserProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    website: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  return (
    <div className="container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Website:</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>

      <div className="profile-display">
        <h3>Profile Preview:</h3>
        {/* VULNERABLE: Using dangerouslySetInnerHTML */}
        <div dangerouslySetInnerHTML={{ __html: profile.name }} />
        <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
        <a href={profile.website} dangerouslySetInnerHTML={{ __html: profile.website }} />
      </div>
    </div>
  );
};

export default UserProfile;