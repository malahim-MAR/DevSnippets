import Home from "../Pages/Home";
import About from "../Pages/About";
import AllComponents from "../Pages/AllComponents";
import Services from "../Pages/Services";
import Layout from "../Layout";
import { createBrowserRouter } from "react-router-dom";
import Prompts from "../Pages/Prompts";

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
        path: "Services",
        element: <AllComponents />,
      },
      {
        path: "ready-to-use-prompts",
        element: <Prompts />,
      },
      {
        path: "Services",
        element: <Services />,
      },
    ],
  },
]);
