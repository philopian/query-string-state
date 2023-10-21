import { Outlet } from 'react-router-dom'

import NavBar from '@/components/NavBar'

export default function PageTemplate() {
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
    </>
  )
}
