import { Outlet } from 'react-router-dom'

import NavBar from './NavBar'

export default function PageTemplate() {
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
    </>
  )
}
