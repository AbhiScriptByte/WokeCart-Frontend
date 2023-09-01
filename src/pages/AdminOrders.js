import AdminOrders from "../features/admin/elements/AdminOrders";
import NavBar from "../components/navbar";

function AdminOrdersPage() {
    return ( 
        <div>
            <NavBar>
                <AdminOrders></AdminOrders>
            </NavBar>
        </div>
     );
}

export default AdminOrdersPage;