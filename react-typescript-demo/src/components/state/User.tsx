import { useState } from "react"

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null)

  const handleLogin = () => {
    setUser({
      name: 'JIYEONGYANGdev',
      email: 'sootulliyang.dev@gmail.com'
    })
  }  
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>The user name is {user?.email}</div>
      <div>The user email is {user?.name}</div>
    </div>
  )
} 