import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';


function App() {
  return <Routes>
    <Route path="/" element={ <HomePage />} />
    <Route path="/eblue" element={ <HomePage />} />
    <Route path="/eblue/about" element={<About />} />
    <Route path="/eblue/contact" element={<Contact />} />
    <Route path="/eblue/products" element={<Products />} />
  </Routes> 

    
  
}

export default App;
