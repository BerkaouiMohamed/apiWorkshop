import React, { useEffect, useState } from "react";
import Box from "./Box";
import appAxios from "./axiosConfig";
import AddProd from "./AddProd";

function App() {
  const [products, setProducts] = useState([]);


  function updateProdToState(prod){
    setProducts(products.map((e)=>{
     return e.id===prod.id?prod:e
    }))
  }
  function deleteProdFromState(prod){
    setProducts(products.filter((e)=>{
     return e.id!==prod.id
    }))
  }
  useEffect(() => {
    // fetch("http://localhost:3000/products",{methde})
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //     setProducts(json);
    //   })
    //   .catch((e) => console.log(e));

    appAxios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }, []);   
 
  return (
    <div className="App">
      <div className="products">
        {products.map((prod) => (
          <Box key={prod.id} deleteProdFromState={deleteProdFromState} updateProdToState={updateProdToState} product={prod} />
        ))}
      </div>
      <AddProd products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
