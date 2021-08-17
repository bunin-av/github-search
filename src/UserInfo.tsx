import React, {useEffect, useState} from "react";
import axios from "axios";
import {TUser} from "./App";
import Timer from "./Timer";

type TUserInfo = {
    activeUser: TUser | null,
    setShowUserInfo: (v: boolean) => void,
    setLoading: (v: boolean) => void
}
const UserInfo = ({
                      activeUser,
                      setShowUserInfo,
                      setLoading
                  }: TUserInfo) => {
    const [userDetails, setUserDetails] = useState<TUser | null>(null)

    const {login, avatar_url, followers} = userDetails || {}

    useEffect(() => {
        setLoading(true)
        if (activeUser) axios.get<TUser>(`https://api.github.com/users/${activeUser.login}`)
            .then(r => {
                setUserDetails(r.data)
                setLoading(false)
            })
    }, [activeUser])

    return (
        <div style={{marginLeft: '50px'}}>
            {userDetails && <div>
                <Timer activeUser={activeUser} setShowUserInfo={setShowUserInfo}/>
                <h2>{login}</h2>
                <img src={avatar_url} alt="ava"/>
                <br/>
                {login}, followers: {followers}
            </div>}
        </div>
    );
};

export default UserInfo;