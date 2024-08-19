import { Link, Outlet } from "react-router-dom"

const Layout = () => {


    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/products">Produits</Link>
                </li>
                
            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
        </>
    )
}
export default Layout;