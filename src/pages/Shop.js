import NavBar from "../components/navbar";
import ProductList from "../features/product/elements/ProductList";
import Footer from "../components/footer";

function ShopPage() {
    return ( 
        <div>
            <NavBar>
                <ProductList />
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default ShopPage;