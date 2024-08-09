import { createBrowserRouter } from "react-router-dom";

import { lazy,Suspense } from "react";
const Home = lazy(() => import('@/pages/Home'));
const Detail = lazy(() => import('@/pages/Detail'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<div>Loading...</div>}><Home/></Suspense>
  },
  {
    path: "/detail",
    element: <Suspense fallback={<div>Loading...</div>}><Detail/></Suspense>
  },
 
])

export {router}