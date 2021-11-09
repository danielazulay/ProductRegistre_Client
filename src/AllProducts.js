import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function AllProducts() {
  const api = axios.create({ baseURL: "http://localhost:4000" });
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get("http://localhost:5000/product/all");
        setState([...response.data]);

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProduct();
  });

  async function hanDelete(id) {
    try {
      const response = await api.delete(
        `http://localhost:5000/product/delete/${id}`
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Products list</h1>
      <ul className="list-group">
        {state.map((a) => {
          return (
            <li className="list-group-item">
              {a.name} |  quantidade : {a.qnt} price : {a.price}{" "}
            <Link to={`/product/${a._id}`}>  <i class="fas fa-edit"></i></Link>
                
              
               <span onClick={() => hanDelete(a._id)}><i class="fas fa-minus-circle"></i></span>
         
           
            </li>
          );
        })}
      </ul>

      <Link to="/">cadastrar</Link>
    </div>
  );
}

export default AllProducts;
