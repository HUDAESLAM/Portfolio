import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import Notfound from "./Components/NotFound/Notfound.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Certificates from "./Components/Certificates/Certificates.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Skills from "./Components/Skills/Skills.jsx"

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "certificates", element: <Certificates /> },
      { path: "contact", element: <Contact /> },
      { path: "skills", element: <Skills /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
