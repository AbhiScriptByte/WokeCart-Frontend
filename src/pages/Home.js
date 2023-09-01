// import { Link } from "react-router-dom";
import Navbar from '../components/navbar';
import Carousel from "../components/carousel";
import ProductList from "../features/product/elements/ProductList";
import Footer from "../components/footer";

function Home() {
    return ( 
        <div>
            <Navbar />
                <Carousel />
                <ProductList />
            <Footer />
        </div>
     );
}

export default Home;