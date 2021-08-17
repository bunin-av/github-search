import React, {useEffect, useState} from "react";
import {TUser} from "./App";

const Timer = ({activeUser, setShowUserInfo}: { activeUser: TUser | null, setShowUserInfo: (v: boolean) => void }) => {
    const [timer, setTimer] = useState(10)
    const [timerId, setTimerId] = useState<any>()
    console.log('tick')

    useEffect(() => {
        if (activeUser) {
            if (timerId) {
                clearInterval(timerId)
                setTimer(10)
            }
            const timerID = setInterval(() => {
                setTimer(timer => --timer);
            }, 1000)
            setTimerId(timerID)
        }
        return () => clearInterval(timerId)
    }, [activeUser])

    useEffect(() => {
        if (timer < 1) {
            clearInterval(timerId)
            setShowUserInfo(false)
        }
    }, [timer])

    return (
        <div>Time to quite: {timer}</div>
    );
};

export default Timer;