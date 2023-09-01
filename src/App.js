import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/Cart";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import AdminBlogEditor from "./pages/AdminBlogEditor";
import ProductDetailPage from "./pages/ProductDetail";
import Protected from "./features/auth/elements/Protected";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import PageNotFound from "./pages/404";
import Error500 from "./pages/500";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import OrderSuccessPage from "./pages/OrderSuccess";
import UserOrdersPage from "./pages/UserOrders";
import UserProfilePage from "./pages/UserProfile";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/auth/elements/Logout";
import ForgotPasswordPage from "./pages/ForgotPassword";
import ShopPage from "./pages/Shop";
import ProtectedAdmin from "./features/auth/elements/ProtectedAdmin";
import AdminHome from "./pages/AdminHome";
import AdminProductDetailPage from "./pages/AdminProductDetail";
import AdminProductFormPage from "./pages/AdminProductForm";
import AdminOrdersPage from "./pages/AdminOrders";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import StripeCheckout from "./pages/StripeCheckout";
import Checkout from "./pages/checkout";
import ResetPasswordPage from "./pages/ResetPassword";
import TrackOrderPage from "./pages/TrackYourOrder";
import HelpPage from "./pages/Help";
import {
  checkAuthAsync,
  selectLoggedInUser,
  selectUserChecked,
} from "./features/auth/authSlice";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: "/shop",
    element: (
        <ShopPage></ShopPage>
    ),
  },
  {
    path: "/about",
    element: (
        <About></About>
    ),
  },
  {
    path: "/contact",
    element: (
        <ContactPage></ContactPage>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <Protected>
        <PrivacyPolicyPage></PrivacyPolicyPage>
      </Protected>
    ),
  },
  {
    path: "/Track-your-order",
    element: (
      <Protected>
        <TrackOrderPage></TrackOrderPage>
      </Protected>
    ),
  },
  {
    path: "/help",
    element: (
        <HelpPage></HelpPage>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
  {
    path: "/admin/product-detail/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <Protected>
        <OrderSuccessPage></OrderSuccessPage>{" "}
      </Protected>
    ),
  },
  {
    path: "/my-orders",
    element: (
      <Protected>
        <UserOrdersPage></UserOrdersPage>{" "}
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <UserProfilePage></UserProfilePage>{" "}
      </Protected>
    ),
  },
  {
    path: '/checkout',
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/stripe-checkout/",
    element: (
      <Protected>
        <StripeCheckout></StripeCheckout>
      </Protected>
    ),
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage></ResetPasswordPage>,
  },
  {
    path: "/error-500",
    element: <Error500></Error500>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
  {
    path: "/blog", 
    element: (
      <Protected> 
        <BlogPage /> 
      </Protected>
    ),
  },
  {
    path: "/admin/write-blog", 
    element: (
      <ProtectedAdmin> 
        <AdminBlogEditor /> 
      </ProtectedAdmin>
    ),
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const userChecked = useSelector(selectUserChecked);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync());
      // we can get req.user by token on backend so no need to give in front-end
      dispatch(fetchLoggedInUserAsync());
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="App">
        {userChecked && (
          <Provider template={AlertTemplate} {...options}>
            <RouterProvider router={router} />
          </Provider>
        )}
        {/* Link must be inside the Provider */}
      </div>
    </>
  );
}

export default App;
