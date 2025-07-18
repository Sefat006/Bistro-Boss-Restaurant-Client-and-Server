import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { app } from './../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ( {children} ) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const authInfo = {
        user,
        loader,

    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;