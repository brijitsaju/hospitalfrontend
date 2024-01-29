import React, { createContext, useState } from 'react'

export const isAuthTokenContext = createContext()
export const editresrespcon=createContext()
function ContextShare({ children }) {
const [isAuthToken, setIsAuthToken] = useState(false)
const [editresppcon,seteditrespcon]=useState({})
  return (
    <>
     <editresrespcon.Provider value={{editresppcon,seteditrespcon}}> <isAuthTokenContext.Provider value={{ isAuthToken, setIsAuthToken }}>{children}</isAuthTokenContext.Provider></editresrespcon.Provider>
    </>
  )
}

export default ContextShare
