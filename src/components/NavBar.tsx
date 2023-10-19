import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()

  return (
    <div className="py-4 text-center bg-blue-500">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className={`text-white ${location.pathname === '/' ? 'font-semibold' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/apparel"
            className={`text-white ${
              location.pathname.startsWith('/apparel') ? 'font-semibold' : ''
            }`}
          >
            Apparel
          </Link>
        </li>
        <li>
          <Link
            to="/apparel/other"
            className={`text-white ${
              location.pathname === '/apparel/other' ? 'font-semibold' : ''
            }`}
          >
            Other
          </Link>
        </li>
      </ul>
    </div>
  )
}
