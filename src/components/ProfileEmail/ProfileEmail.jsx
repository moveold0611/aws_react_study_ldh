import React from 'react';
import Profile from '../Profile/Profile';

function ProfileEmail({ onChange }) {
    return (
        <div>
            <Profile name={"email"} onChange={onChange}>이메일 {Profile.email}</Profile>
        </div>
    );
}

export default ProfileEmail; 