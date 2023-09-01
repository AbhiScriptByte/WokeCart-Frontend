import ProductForm from "../features/admin/elements/ProductForm";
import NavBar from "../components/navbar";
function AdminProductForm() {
    return ( 
        <div>
            <NavBar>
                <ProductForm></ProductForm>
            </NavBar>
        </div>
     );
}

export default AdminProductForm;