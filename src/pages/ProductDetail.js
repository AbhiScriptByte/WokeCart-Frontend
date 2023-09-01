import NavBar from "../components/navbar";
import ProductDetail from "../features/product/elements/ProductDetail";
import Footer from "../components/footer";

function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default ProductDetailPage;