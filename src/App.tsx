import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddButton from "./components/AddProduct/AddButton";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Create from "./components/Product/Create";
import "./App.css";

function App() {
  return (
    <div className="mx-20">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
      <AddButton />
    </div>
  );
}

export default App;
