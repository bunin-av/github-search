import {useEffect} from "react";
import axios from "axios";


const UserInfo = ({activeUser, setActiveUser}: any) => {

    const {login, avatar_url, followers, id} = activeUser || {}

    useEffect(() => {
        if (id) axios.get(`https://api.github.com/users/${login}`)
            .then(r => {
                setActiveUser(r.data)
            })
    },[id, login])

    return (
        <div style={{marginLeft: '50px'}}>
            <h2>Username</h2>
            {login && <div>
                <img src={avatar_url} alt="ava"/>
                <br/>
                {login}, followers: {followers}
            </div>}
        </div>
    );
};

export default UserInfo;