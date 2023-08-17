import React from 'react';
import Profile from '../Profile/Profile';

function ProfileName({ onChange }) {
    return (
        <div>
            <Profile name={"name"} onChange={onChange}>이름 {Profile.name}</Profile>
        </div>
    );
}

export default ProfileName;