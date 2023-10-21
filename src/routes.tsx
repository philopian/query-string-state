import { RouteObject, createBrowserRouter } from 'react-router-dom'

import PageTemplate from '@/components/PageTemplate'
import ApparelPage from '@/pages/ApparelPage'
import LandingPage from '@/pages/LandingPage'
import OtherPage from '@/pages/OtherPage'
import ShoesPage from '@/pages/ShoesPage'
import TopsPage from '@/pages/TopsPage'

const routePaths = {
  '/': <LandingPage />,
  '/apparel': <ApparelPage />,
  '/apparel/tops': <TopsPage />,
  '/apparel/shoes': <ShoesPage />,
  '/apparel/:type': <OtherPage />,
}

const children = Object.entries(routePaths).map(([path, element]) => ({ path, element }))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PageTemplate />,
    children,
  },
]

const browserRoutes = createBrowserRouter(routes)
export default browserRoutes
