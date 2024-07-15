import React from 'react'

const Home = React.lazy(() => import('./views/base/home'));
const Nav = React.lazy(() => import('./views/base/nav'));
const Table = React.lazy(() => import('./views/base/table'));
const routes = [
    { path: '/', exact: true, name: '' },
    { path: '/base/home', name: 'Home', element: Home },
    { path: '/base/nav', name: 'Nav', element: Nav },
    { path: '/base/table', name: 'Table', element: Table },
]

export default routes
