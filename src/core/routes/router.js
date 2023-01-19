import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../Home";
import { Login } from "../../Login";
import { homeRoute, loginRoute } from "./routerPath";

const router = createBrowserRouter(
  [
    { path: loginRoute, element: < Login /> },
    { path: homeRoute, element: < Home /> },
  ],
)

export default router

