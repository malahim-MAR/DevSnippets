import Home from "../Pages/Home";
import About from "../Pages/About";
import AllComponents from "../Pages/AllComponents";
import Services from "../Pages/Services";
import Layout from "../Layout";
import { createBrowserRouter } from "react-router-dom";
import Prompts from "../Pages/Prompts";
import Contact from "../Pages/Contact";

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
        path: "contact",
        element: <Contact />,
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
