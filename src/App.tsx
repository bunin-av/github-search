import React, {useEffect, useState} from 'react';
import './App.css';
import Input from "./Input";
import UserInfo from "./UserInfo";
import Users from "./Users";

export type TUser = {
    id: string
    avatar_url: string
    login: string
    followers: number
}

function App() {
    const [searchValue, setSearchValue] = useState<string>('dymych')
    const [activeUser, setActiveUser] = useState<TUser | null>(null)

    return (
        <div className="App">
            <div>
                <Input setSearchValue={setSearchValue} searchValue={searchValue}/>
                <Users searchValue={searchValue}  activeUser={activeUser} setActiveUser={setActiveUser}/>
            </div>
            <UserInfo {...{activeUser}} setActiveUser={setActiveUser}/>
        </div>
    );
}

export default App;
