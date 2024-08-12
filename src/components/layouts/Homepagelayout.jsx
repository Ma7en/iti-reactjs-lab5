/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Header from "../../ui/Header/Header";

function HomepageLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default HomepageLayout;
