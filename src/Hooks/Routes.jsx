import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import DetailsProduct from "./DetailsProduct";
import NoPage from "./NoPage";
import Layout from "./Layout";
import Accueil from "./Accueil";


const RoutesProduct = () => {




    return (
        <>

            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Accueil />} />
                    <Route path="products" element={<Products />} />
                    <Route path="details/:id" element={<DetailsProduct />} />
                    <Route path="*" element={<NoPage  />} />
                </Route>
            </Routes>

        </>
    )
}
export default RoutesProduct;