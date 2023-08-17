import Profile from "../components/Profile/Profile";
import React from 'react';

function ProfileUsername({ onChange }) {
    return (
        <div>
            <Profile name={"username"} onChange={onChange}>사용자명 {Profile.username}</Profile>
        </div>
    );
}

export default ProfileUsername;