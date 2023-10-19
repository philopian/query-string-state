import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <ul>
      <Link to="/">Home</Link>
      <Link to="/apparel">Apparel</Link>
    </ul>
  )
}
