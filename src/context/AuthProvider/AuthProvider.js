import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    const userProfileUpdate = (profile) => {
        return updateProfile(auth.currentUser,profile)
           
    }

    const emailVerify=()=>{
        return sendEmailVerification(auth.currentUser)
    }


    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            if(currentUser===null || currentUser.emailVerified){
                setUser(currentUser) 
            }
           
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { 
        loading,
        user,
        setLoading,
        emailVerify,
        userLogin,
        setUser,
        userProfileUpdate,
        logOut,
        createUser,
        googleLogin 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;