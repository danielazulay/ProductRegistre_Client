import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductForm from './ProductForm'
import AllProducts from './AllProducts';
import EditProduct from './EditProduct';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
 <BrowserRouter>
<Routes>

  <Route exact path="/" element={<ProductForm/>}/>
  <Route path="/all" element={<AllProducts/>}/>
  <Route path="/product/:id" element={<EditProduct/>}/>
  
</Routes>

 </BrowserRouter>

  );
}

export default App;
