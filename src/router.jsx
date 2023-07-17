import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from './pages/App';
import { Dashboard } from './pages/Dashboard';
import { Demo } from './pages/Demo';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Start } from './pages/Start';
import { DayOverview } from './pages/DayOverview';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/start',
    element: <Start />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/:id',
    element: <DayOverview />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
]);
