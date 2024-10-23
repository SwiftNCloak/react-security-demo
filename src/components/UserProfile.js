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

/*
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../store/actions';
import DOMPurify from 'dompurify'; // Add this package for sanitization

const UserProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    website: ''
  });

  const handleChange = (e) => {
    const sanitizedValue = DOMPurify.sanitize(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: sanitizedValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate website URL
    if (formData.website && !isValidUrl(formData.website)) {
      alert('Please enter a valid URL');
      return;
    }
    dispatch(updateProfile(formData));
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
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
            maxLength={50}
          />
        </div>
        <div>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            maxLength={500}
          />
        </div>
        <div>
          <label>Website:</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>

      <div className="profile-display">
        <h3>Profile Preview:</h3>
        // <div>{profile.name}</div>
        // <div>{profile.bio}</div>
//         {profile.website && (
//           <a href={profile.website}
//              rel="noopener noreferrer"
//              target="_blank">
//             {profile.website}
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
*/