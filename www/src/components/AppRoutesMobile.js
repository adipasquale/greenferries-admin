import React, { lazy, Suspense } from 'react'
import { Box, Link, Divider } from '@chakra-ui/core'
import { Link as ReactLink, Route, Redirect, Switch } from 'react-router-dom'

import RouteSelectDropdowns from './RouteSelectDropdowns'
import RouteShipsCards from './RouteShipsCards'
import RouteTitle from './RouteTitle'
import Faq from './Faq'
import RouteSetterFromParams from './RouteSetterFromParams'
import Header from './Header'
import Footer from './Footer'
import ShipSearch from './ShipSearch'
import ShipPage from './ShipPage'
import HomeNavigationOptions from './HomeNavigationOptions'
import CompanySearch from './CompanySearch'
import CompanyPage from './CompanyPage'
import FaqEcoScore from './FaqEcoScore'
import SitemapPage from './SitemapPage'
import ComputedStatsPage from './ComputedStatsPage'

const RouteSelectMap = lazy(() => import('./RouteSelectMap'))

const Layout = ({ resetRoute, children }) => (
  <>
    <Header resetRoute={resetRoute} />
    <Box paddingBottom={10}>
      {children}
    </Box>
    <Footer />
  </>
)

const AppRoutesMobile = (allProps) => {
  const { resetRoute, isLoading, ships, companies, routes, selectedRoute, setSelectedRoute, selectedShipRoute, setSelectedShipRoute } = allProps
  return (
    <Layout resetRoute={resetRoute}>
      <Switch>
        <Route exact path='/select-route'>
          <RouteSelectDropdowns {...allProps} />
          {!isLoading &&
            <Box p={3}>
              or{' '}
              <Link
                as={ReactLink}
                to='/select-route-map'
                textDecoration='underline'
              >
                select on map 🗺
              </Link>
            </Box>}
          <Divider marginY={5} />
          <Box paddingX={3}>
            <HomeNavigationOptions ships={ships} companies={companies} />
          </Box>
        </Route>
        <Route exact path='/select-route-map'>
          <Box width='100%' flex={1}>
            <Box p={3}>
              or{' '}
              <Link
                as={ReactLink}
                to='/select-route'
                textDecoration='underline'
              >
                select from dropdowns 🔠
              </Link>
            </Box>
            <Suspense fallback={<div>Loading...</div>}>
              <RouteSelectMap {...allProps} />
            </Suspense>
          </Box>
        </Route>
        <Route path='/routes/:routeSlug'>
          <RouteSetterFromParams {...allProps} />
          <RouteTitle selectedRoute={selectedRoute} setSelectedRoute={setSelectedRoute} setSelectedShipRoute={setSelectedShipRoute} />
          <RouteShipsCards {...allProps} />
        </Route>
        <Route exact path='/ships'>
          <ShipSearch ships={ships} companies={companies} />
        </Route>
        <Route path='/ships/:shipSlug'>
          <RouteTitle selectedRoute={selectedRoute} setSelectedRoute={setSelectedRoute} setSelectedShipRoute={setSelectedShipRoute} />
          <ShipPage ships={ships} selectedRoute={selectedRoute} setSelectedRoute={setSelectedRoute} setSelectedShipRoute={setSelectedShipRoute} selectedShipRoute={selectedShipRoute} />
        </Route>
        <Route exact path='/companies'>
          <CompanySearch companies={companies} />
        </Route>
        <Route path='/companies/:companySlug'>
          <CompanyPage companies={companies} />
        </Route>
        <Route exact path='/faq'>
          <Faq />
        </Route>
        <Route exact path='/ecoscore'>
          <FaqEcoScore />
        </Route>
        <Route exact path='/computed-statistics'>
          <ComputedStatsPage />
        </Route>
        <Route exact path='/sitemap'>
          <SitemapPage ships={ships} companies={companies} routes={routes} />
        </Route>

        <Redirect from='/' to='/select-route' />
      </Switch>
    </Layout>
  )
}

export default AppRoutesMobile