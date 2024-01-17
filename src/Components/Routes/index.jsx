import { Route, Routes } from "react-router-dom";

import Home from "../../Pages/Home";
import NewMedicine from "../../Pages/New-Medicine";
import Shop from "../../Pages/Shope";
import DetailsMedicine from "../../Pages/Shope/Details-Medicine/Details-Medicine";
import NotFound from "../../Pages/Not-Found/Not-Found";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addmedicine" element={<NewMedicine />} />
      <Route path="/shop" element={<Shop />} />
      <Route path={`/shop/medicine/:id`} element={<DetailsMedicine />} />
      <Route path={`*`} element={<NotFound />} />
    </Routes>
  );
};

export default RootRoutes;
