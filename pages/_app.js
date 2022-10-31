import '../styles/globals.css'
import {AuthContext} from '../contexts/AuthContext'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState("");
  return <AuthContext.Provider value={{user,setUser}}><Component {...pageProps} /></AuthContext.Provider>
}

export default MyApp
