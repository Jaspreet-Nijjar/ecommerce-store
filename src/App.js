import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
