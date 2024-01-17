import React from "react";

import NavBar from "./Layout/NavBar";
import RootRoutes from "./Components/Routes";
import Footer from "./Layout/Footer";

const App = () => {
    return (
        <>
            <NavBar />
            <RootRoutes />
            <Footer/>
        </>
    );
};

export default App;
