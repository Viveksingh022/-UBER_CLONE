import React from 'react'
import { useState } from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = React.createContext()


const UserContextProvider = ({children}) => {

const [user, setUser] = useState({
email: '',
  fullName:{
    firstName: '',
    lastName: ''    
  }

});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
