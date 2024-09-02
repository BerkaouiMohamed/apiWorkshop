import React from 'react'

function useFetchProducts() {
    const [products,setProducts]=React.useState([])
    React.useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then((res)=>res.json())
      .then((json)=>setProducts(json))
    },[])
    function deleteProd(id){
        setProducts(products.filter((p)=>p.id!==id))
  
      }
  return (
    [products,deleteProd]
    
  )
}

export default useFetchProducts