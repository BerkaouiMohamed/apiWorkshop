import React, { useState } from "react";

function AddProduct(props) {
    const [product,setProduct]=useState({
        title:"",
        image:'',
        description:"",
        price:0,
    })
  return (
    <form className="addprod"  onSubmit={(e)=>{
        e.preventDefault()
      props.addProd(product)
    }}>
      <div>
        <input type="text"  onChange={(e)=>setProduct({...product,title:e.target.value})}/>
        title
      </div>
      <div>

        <input type="text"  onChange={(e)=>setProduct({...product,image:e.target.value})} /> image
      </div>
      <div>

        <input type="text"   onChange={(e)=>setProduct({...product,description:e.target.value})}/>
        description
      </div>
      <div>

        <input type="number"   onChange={(e)=>setProduct({...product,price:e.target.value})} />
        price
      </div>
      <input type="submit" />
    </form>
  );
}

export default AddProduct;
