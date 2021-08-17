import React, {useState} from 'react';
import './index.css';
import Input from "./Input";
import UserInfo from "./UserInfo";
import UsersList from "./UsersList";
import Loader from "./Loader";


export type TUser = {
    id: string
    avatar_url: string
    login: string
    followers: number
}

function App() {
    const [searchValue, setSearchValue] = useState<string>('bunin')
    const [activeUser, setActiveUser] = useState<TUser | null>(null)
    const [showUserInfo, setShowUserInfo] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <div className="App">
            <div>
                <Input setSearchValue={setSearchValue} searchValue={searchValue} />
                <UsersList searchValue={searchValue} activeUser={activeUser} setActiveUser={setActiveUser}
                           showUserInfo={showUserInfo} setShowUserInfo={setShowUserInfo} setLoading={setLoading}/>
            </div>
            {showUserInfo && <UserInfo {...{activeUser}} setShowUserInfo={setShowUserInfo} setLoading={setLoading}/>}
            {loading && <Loader/>}
        </div>
    );
}

export default App;
