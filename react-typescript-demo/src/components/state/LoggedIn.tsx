import { useState } from "react"

export const LoggedIn = () => {
  const [isIfLoggedin, setIsIfLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsIfLoggedIn(true)
  }
  const handleLogout = () => {
    setIsIfLoggedIn(false)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is now {isIfLoggedin? 'logged in' : 'logged out '}</div>
    </div>
  )
} 