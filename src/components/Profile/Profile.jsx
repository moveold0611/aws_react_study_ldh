import React from 'react';

function Profile({ Img, username, name, email }) {
    return (
        <div>
            <input Img={Img}
            username={username}
            name={name}
            email={email} />
        </div>
    );
}

Profile.defaultProps = {
    Img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfos3N8omryPTTqGm07emv6QlbFPuhdjiH1A&usqp=CAU",
    username : "",
    name : "",
    email : ""
}

export default Profile;