import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/products" element={<ProductsList/>}/>
      </Routes>
    </>
  );
}

export default App;
