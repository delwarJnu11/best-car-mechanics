import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    //Google Sign in Function
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    };
    //GitHub sign In Function
    const signInUsingGithub = () => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    //Sign Out Function
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => {
                setIsLoading(false)
            })
    };
    //Observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false);
        })
        return unsubscribe;
    }, [auth]);
    return { user, isLoading, setIsLoading, signInUsingGoogle, signInUsingGithub, logOut }
}

export default useFirebase;