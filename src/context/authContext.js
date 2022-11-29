import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebase-config'

export const authcontext = createContext()

export const useAuth = () => {

    const context = useContext(authcontext)
    return context

}

export function AuthProvider ({children}) {

    const user = {
        login: true,
    };


    const singUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password ) => signInWithEmailAndPassword(auth, email, password);

    return (
        <authcontext.Provider value={{singUp, login}}>  
            {children}
        </authcontext.Provider>
    )
}