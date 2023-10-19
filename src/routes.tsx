import { RouteObject, createBrowserRouter } from 'react-router-dom'

import PageTemplate from './components/PageTemplate'
import ApparelPage from './pages/ApparelPage'
import LandingPage from './pages/LandingPage'
import OtherPage from './pages/OtherPage'
import ShoesPage from './pages/ShoesPage'
import TopsPage from './pages/TopsPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PageTemplate />,
    children: [
      {
        path: '/', // yes, again
        element: <LandingPage />,
      },
      {
        path: '/apparel',
        element: <ApparelPage />,
      },
      {
        path: '/apparel/tops',
        element: <TopsPage />,
      },
      {
        path: '/apparel/shoes',
        element: <ShoesPage />,
      },
      {
        path: '/apparel/:type',
        element: <OtherPage />,
      },
    ],
  },
]

const browserRoutes = createBrowserRouter(routes)
export default browserRoutes
