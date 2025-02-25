import { Route, Routes } from "react-router";
import MainPage from "../pages/main-page";
import MyProfile from "../pages/my-profile";
import Delivery from "../pages/delivery";
import Orders from "../pages/orders";
import Settings from "../pages/settings";
import Login from "../pages/login";
import NoMatchPage from "../pages/no-match-page";
import PrivateRoute from "./private.route";

const AppRoutes = () => {
  const navigationRoutes = [
    { path: "/", element: <MainPage /> },
    { path: "/my-profile/:userId", element: <MyProfile /> },
    { path: "/delivery", element: <Delivery /> },
    { path: "/orders", element: <Orders /> },
    {
      path: "/settings",
      element: (
        <PrivateRoute>
          <Settings />
        </PrivateRoute>
      )
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NoMatchPage /> }
  ];

  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
