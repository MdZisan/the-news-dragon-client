import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext =createContext(null);


const auth= getAuth(app);
 
const emailSignUp =(email,password)=>{
    createUserWithEmailAndPassword(auth,email,password);
}

const AuthProvider = ({children}) => {

    const authInfo= {
        emailSignUp
    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;