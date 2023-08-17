import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from '../Mypage/Style.js'
// import ProfileEmail from '../../components/ProfileEmail/ProfileEmail.jsx';
// import ProfileName from '../../components/ProfileName/ProfileName.jsx';
// import ProfileUsername from '../../ProfileUsername/ProfileUsername.jsx';


function Mypage(props) {
    const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfos3N8omryPTTqGm07emv6QlbFPuhdjiH1A&usqp=CAU";
    const profileImgSrc = JSON.parse(localStorage.getItem("profile"))
    const [ profileImg, setProfileImg ] = useState(profileImgSrc ? profileImgSrc.Img : defaultImg);

    // const [ profile, setProfile ] = useState({
    //     Img : "",
    //     username: "",
    //     name : "",
    //     email: ""
    // });

    const localStorageUser = JSON.parse(localStorage.getItem("profile"))

    let profile = {
        Img: "",
        username : localStorageUser?.username && localStorageUser.username,
        name: localStorageUser?.name && localStorageUser.name,
        email: localStorageUser?.email && localStorageUser.email
    }


    const saveProfileToLocalStorage = () => {
        profile = {
            ...profile,
            Img: profileImg
        }

        localStorage.setItem("profile", JSON.stringify(profile));
    }

    const handleProfileInfoChange = (e) => {
        const { name, value } = e.target;
        
        profile = {
            ...profile,
            [name]: value
        }

        // const profileObj = {
        //     ...profile,
        //     [name] : value
        // }
    }



    const profileFileInput = useRef();
    const handleProfileImgChangeClick = () => {
        profileFileInput.current.click();
    }

    const handleProfileImgSelect = (e) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            setProfileImg(e.target.result);
            // setProfile({
            //     ...profile,
            //     Img: e.target.result
            // })
            setTimeout(()=>console.log(profileImg), 100)
        }
        reader.readAsDataURL(e.target.files[0]);
    }


    // useEffect(()=> console.log("이미지 변경"), (profileImg))

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileImgBox} onClick={handleProfileImgChangeClick}>
                    <img css={S.SProfileImg} 
                     src={profileImg}/>
                    <input type="file" css={S.SFileHidden} ref={profileFileInput} onChange={handleProfileImgSelect} />
                </div>
            </div>
            <div css={S.SContainer}>
                <div>
                    <label htmlFor="username" >사용자명 </label>
                    {/* <ProfileUsername onChange={handleProfileInfoChange} /> */}
                    <input type="text" id='username' name="username" defaultValue={profile.username} onChange={handleProfileInfoChange}/>
                </div>
                <div>
                    <label htmlFor="name" name="name">이름</label>
                    {/* <ProfileName onChange={handleProfileInfoChange} /> */}
                    <input type="text" id='name' name="name" defaultValue={profile.name} onChange={handleProfileInfoChange}/>
                </div>
                <div>
                    <label htmlFor="email" name="email">이메일</label>
                    {/* <ProfileEmail onChange={handleProfileInfoChange} /> */}
                    <input type="text" id='email' name="email" defaultValue={profile.email} onChange={handleProfileInfoChange}/>
                </div>

                <div>
                    <button onClick={saveProfileToLocalStorage}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Mypage;