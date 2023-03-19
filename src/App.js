import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import ItemCount from "./components/ItemListContainer/ItemCount/ItemCount";
import ItemDetailContainer from "./components/CartWidget/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} elementos`);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/card" element={<ProductCard />} />
        <Route
          path="/count"
          element={<ItemCount stock={5} initial={1} onAdd={onAdd} />}
        />
        <Route path="*" element={<h1> Error 404: Not Found </h1>} />
        <Route path="/itemDetail" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
