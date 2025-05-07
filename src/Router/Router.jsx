import Home from "../Pages/Home";
import About from "../Pages/About";
import AllComponents from "../Pages/AllComponents";
import Services from "../Pages/Services";
import Layout from "../Layout";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "allComponents",
        element: <AllComponents />,
      },
      {
        path: "Services",
        element: <Services />,
      },
    ],
  },
]);
