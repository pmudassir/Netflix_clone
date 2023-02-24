import AuthReducer from "./AuthReducer";
import { createContext, useReducer } from "react"
import { useEffect } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))    //saving to localStorage the state.user as "user"
    }, [state.user])

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

//context api helps in managing state so that instead of passing data as props 
//through parent to child context helps in managing and accessing state in everywhere