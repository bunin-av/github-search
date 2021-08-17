import './index.css'
import {TUser} from "./App";
import {useEffect, useState} from "react";
import axios from "axios";

type TUserList = {
    searchValue: string,
    activeUser: TUser | null,
    setActiveUser: (user: TUser | null) => void,
    showUserInfo: boolean
    setShowUserInfo: (v: boolean) => void
    setLoading: (v: boolean) => void
}
const UsersList = ({searchValue, activeUser, setActiveUser, showUserInfo, setShowUserInfo, setLoading}: TUserList) => {
    const [users, setUsers] = useState<TUser[] | null>([])

    useEffect(() => {
        setLoading(true)
        axios.get<{ items: TUser[] }>(`https://api.github.com/search/users?q=${searchValue}`)
            .then(r => {
                setUsers(r.data.items)
                setLoading(false)
            })
    }, [searchValue])

    useEffect(() => {
        if (activeUser) document.title = activeUser.login
    }, [activeUser])

    return (
        <ul>
            {users?.map((el) => (
                <li
                    key={el.id}
                    onClick={() => {
                        setShowUserInfo(true)
                        setActiveUser(el)
                    }}
                    className={activeUser?.login === el.login && showUserInfo ? 'active' : ''}
                >
                    {el.login}
                </li>
            ))}
        </ul>
    );
};

export default UsersList;