import Navbar from './components/Navbar/Navbar';
import Womens from './pages/womens';
import Mens from './pages/mens';
import Footer from './components/footer/Footer';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from './context/Wishlistcontext';
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import { ProtectedRoute } from "./components/ProtectedRoute";


function App() {
  return (
    <>
      <div>
        <WishlistProvider>
          <CartProvider>
            <BrowserRouter basename='React-Js-project-Stylehaven'>
              <Navbar />
              <Routes>
                <Route path="/" element={<Womens />} />
                <Route path="/mens" element={<Mens />} />
                <Route path="/mens/:category" element={<Mens />} />
                <Route path="/mens/:category/:productId" element={<Mens />} />
                <Route path="/signup" element={<LoginSignup />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                } />
                <Route path="/wishlist" element={
                  <ProtectedRoute>
                    <Wishlist />
                  </ProtectedRoute>
                } />
                
                
              </Routes>

              <Footer />
            </BrowserRouter>
          </CartProvider>
        </WishlistProvider>
      </div>
    </>
  );
}

export default App;