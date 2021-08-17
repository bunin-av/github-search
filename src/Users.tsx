import './index.css'
import {TUser} from "./App";
import {useEffect, useState} from "react";
import axios from "axios";


const Users = ({searchValue, activeUser, setActiveUser}: {searchValue: string, activeUser: TUser | null, setActiveUser: (user: TUser)=> void}) => {
    const [users, setUsers] = useState<TUser[] | null>([])

    useEffect(() => {
        axios.get(`https://api.github.com/search/users?q=${searchValue}`)
            .then(r => setUsers(r.data.items))
    }, [searchValue])

    useEffect(() => {
        if (activeUser) document.title = activeUser.login
    }, [activeUser])

    return (
        <ul>
            {users?.map((el) => (
                <li
                    key={el.id}
                    onClick={() => setActiveUser(el)}
                    className={activeUser?.login === el.login ? 'active' : ''}
                >
                    {el.login}
                </li>
            ))}
        </ul>
    );
};

export default Users;