import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import Box from "./Box";
import useFetchProducts from "./useFetchProducts";
import AddProduct from "./AddProduct";
import SearchBar from "./SearchBar";

function App() {
// const [products,deleteProd]=useFetchProducts()
const [fetchedProducts,setFetchedProducts]=React.useState([])
const [products,setProducts]=React.useState([])

React.useEffect(()=>{
  fetch("https://fakestoreapi.com/products")
  .then((res)=>res.json())
  .then((json)=>{setFetchedProducts(json);setProducts(json)})
},[])
function deleteProd(id){
    setFetchedProducts(fetchedProducts.filter((p)=>p.id!==id))
setProducts(products.filter((p)=>p.id!==id))
  }

  function addProd(product){
    setProducts([...products,product])
    setFetchedProducts([...products,product])
  }
  const [search,setSearch]=useState()
  function handleSearch(){
    if(search.length>0){


        setProducts(fetchedProducts.filter((p)=>p.title.toLowerCase().includes(search.toLowerCase())))

    }
    else{
      setProducts(fetchedProducts)
    }
  }
  console.log(products,search)
  return (
    <div className="App">
      <Navbar />
    <SearchBar setSearch={setSearch}  handleSearch={handleSearch}/>
      <div className="boxs" style={{display:"flex",flexWrap:"wrap",gap:30}}>
        {products.map((prod)=><Box key={prod.id} product={prod} deleteProd={deleteProd}/>)}
      </div>
    <AddProduct addProd={addProd}/>

    </div>
  );
}

export default App;
