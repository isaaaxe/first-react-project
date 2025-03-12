import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import { MenuContextProvider } from "./store/menu-context";
import EducationPage from "./pages/Education";
import FitnessPage from "./pages/Fitness";
import GamesPage from "./pages/Games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/education", element: <EducationPage /> },
      { path: "/fitness", element: <FitnessPage /> },
      { path: "/games", element: <GamesPage /> },
    ],
  },

  // {
  //   path: "/home",
  //   element: <RootLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     { index: true, element: <HomePage /> },
  //     { path: "education", element: <EducationPage /> },
  //   ],
  // },
]);

function App() {
  return (
    <>
      <MenuContextProvider>
        <RouterProvider router={router} />
      </MenuContextProvider>
    </>
  );
}

export default App;
