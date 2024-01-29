import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Adminc from '../components/Adminc'
import Patc from '../components/Patc'
import { isAuthTokenContext } from '../contents/ContextShare'


function Home() {
  const { isAuthToken, setIsAuthToken } = useContext(isAuthTokenContext)
  const [log, setlog] = useState(false)
  const [admin, setadmin] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setlog(true)
      setIsAuthToken(true)
    }
  }, [])

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("existingUser")).email == "neel@gmail.com" && JSON.parse(sessionStorage.getItem("existingUser")).password == "neel123") {
      setadmin(true)
    }
  }, [])

  return (
    <div>
      <Header />
      {log ? admin ? <Adminc /> : <Patc /> : <p>sorry</p>
      }
    </div>
  )
}

export default Home
