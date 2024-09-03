import React, { useState } from "react";
import appAxios from "./axiosConfig";

function AddProd(props) {
  const [product, setProduct] = useState({});

  function postProduct() {
    appAxios
      .post("/products", product)
      .then(function (response) {
        console.log(response);
       if(response.status===201){
        props.setProducts([...props.products,response.data])
       }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    < >
      <div>
        <label htmlFor="">title</label>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="">price</label>
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="">description</label>
        <input
          type="text"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
      </div>

      <button onClick={postProduct}>submit </button>
    </>
  );
}

export default AddProd;
