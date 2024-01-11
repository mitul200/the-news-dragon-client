import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user , setUser]= useState(null)
  const [loding, setLoding] = useState(true)

  const creatUser = (email , password)=>{
    setLoding(true)
    return createUserWithEmailAndPassword(auth , email , password)
  }

  const singIn =(email , password)=>{
     setLoding(true)
     return signInWithEmailAndPassword(auth , email , password)
  }

  const logOut =()=>{
   return signOut(auth)
  }

  useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth , currentUser =>{
      console.log(currentUser)
      setUser(currentUser)
      setLoding(false)
    })
    return ()=>{
      return unsubcribe ()
    }
  },[])

  const authInfo = {
    singIn,
    creatUser,
    user,
    logOut,
    loding
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
