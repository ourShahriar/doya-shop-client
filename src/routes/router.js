import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Root from "../layout/Root";
import About from "../pages/about/About";
import AddCategory from "../pages/dashboard/AddCategory";
import AddPhone from "../pages/dashboard/AddPhone";
import PurchasedProduct from "../pages/dashboard/PurchasedProduct";
import Home from "../pages/home/Home";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import Blog from "../pages/others/Blog";
import Catagories from "../pages/shared/Catagories";
import Contact from "../pages/shared/Contact";
import ErrorRoute from "../pages/shared/ErrorRoute";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/categories",
        element: <Catagories />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorRoute />,
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: <PurchasedProduct />,
      },
      {
        path: "/dashboard/add-phones",
        element: (
          <SellerRoute>
            <AddPhone />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/add-category",
        element: (
          <AdminRoute>
            <AddCategory />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
