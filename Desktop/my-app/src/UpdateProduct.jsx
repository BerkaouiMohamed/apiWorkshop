import React, { useState } from "react";
import appAxios from "./axiosConfig";

function UpdateProduct({prod,updateProdToState,deleteProdFromState}) {
  const [product, setProduct] = useState(prod);

function putProduct(){
    appAxios.put("/products/"+product.id,product).then((res)=>updateProdToState(res.data))
    .catch((e)=>console.log(e))
}

function deleteProduct(){
    appAxios.delete("/products/"+product.id).then((res)=>deleteProdFromState(res.data))
    .catch((e)=>console.log(e))
}
  return (
    <section >
      <div>
        <label htmlFor="">title</label>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          value={product.title}
        />
      </div>
      <div>
        <label htmlFor="">price</label>
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          value={product.price}
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

      <button onClick={putProduct} >submit </button>
      <button onClick={deleteProduct} >delete </button>

    </section>
  );
}

export default UpdateProduct;
