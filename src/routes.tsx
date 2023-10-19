import { RouteObject, createBrowserRouter } from 'react-router-dom'

import PageTemplate from './components/PageTemplate'
import ApparelPage from './pages/ApparelPage'
import LandingPage from './pages/LandingPage'

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
        path: '/apparel/:id?',
        element: <ApparelPage />,
      },
    ],
  },
]

const browserRoutes = createBrowserRouter(routes)
export default browserRoutes
