import React, {useEffect, useState} from 'react';
import './App.css';
import {logInTC} from "./state/reducers/authReducer";
import {useAppDispatch, useAppSelector} from "./state/store";
import {getProducts} from "./state/reducers/productsReducer";


function App() {
    const [boolean, setBoolean] = useState(true)
    const dispatch = useAppDispatch()
    const users = useAppSelector((state) => state.auth.users)
    console.log(users)
    useEffect(() => {
        dispatch(logInTC())
        dispatch(getProducts())
    }, [boolean])
    return (
        <div className="App">
            <ul>
                {users.map((user) => <li key={user.email}>{user.name}</li>)}
            </ul>
            <button onClick={() => {
                setBoolean(!boolean)
            }}>+++
            </button>
        </div>
    );
}

export default App;
