import { useEffect, useState } from "react";
import initializeFiebase from "../pages/Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, updateProfile, signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

initializeFiebase()
const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  const [authError, setAuthError] = useState('');
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [admin, setAdmin] = useState(false)
  const auth = getAuth();

  //google signIn
  const googleSinIn = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError('')
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT')
        setUser(user)
        const destination = location?.state?.from || '/'
        history.replace(destination)


      }).catch((error) => {
        setAuthError(error.message);

        // ...
      })
      .finally(() => setIsLoading(false));
  }

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 


        setAuthError('')
        const newUser = { email, displayName: name }
        setUser(newUser)
        saveUser(email, name, 'POST')
        updateProfile(auth.currentUser, {
          displayName: { name },
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        history.replace('/')
        // ...
      })
      .catch((error) => {

        setAuthError(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  }




  // log in 

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/'
        history.replace(destination)

        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [])


  useEffect(() => {
    fetch(`https://frozen-earth-63601.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));

  }

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://frozen-earth-63601.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()

  }

  return {
    user,
    isLoading,
    admin,
    authError,
    registerUser,
    logOut,
    loginUser,
    googleSinIn
  }

}

export default useFirebase;