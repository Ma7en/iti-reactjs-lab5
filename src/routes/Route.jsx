import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// lazy loading
const HomepageLayout = lazy(() =>
    import("./../components/layouts/Homepagelayout")
);
const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const Register = lazy(() => import("../pages/Register/Register"));
const Login = lazy(() => import("../pages/Login/Login"));
const ShoppingCard = lazy(() => import("../pages/ShopingCard/ShopingCard"));
const ProductDetails = lazy(() =>
    import("../pages/Products/ProductDetails/ProductDetails")
);
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function AppRoute() {
    return (
        <>
            <Suspense fallback={<h3>Loading...</h3>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomepageLayout />}>
                            <Route path="/" element={<Homepage />} />
                            <Route path="/home" element={<Homepage />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/shoppingcard"
                                element={<ShoppingCard />}
                            />
                            <Route
                                path="/products/:id"
                                element={<ProductDetails />}
                            />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
}
export default AppRoute;
