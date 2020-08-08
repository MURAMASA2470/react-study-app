import React from 'react';

const Dashbord = React.lazy(() => import('./pages/dashbord'));
const Login = React.lazy(() => import('./pages/login'));

const routes = [
  { path: '/', exact: true, name: 'Dashbord', component: Dashbord },
  { path: '/login', exact: true, name: 'Login', component: Login },
]

export default routes;