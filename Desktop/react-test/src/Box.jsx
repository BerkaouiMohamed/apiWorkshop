import React from 'react'

function Box({product,deleteProd}) {
  return (
    <div className='box-container'>
        <img src={product.image} alt="" />
        <h2>{product.title.slice(0,50)}...</h2>
        <p>{product.price}</p>
        <button onClick={()=>deleteProd(product.id)}>delete</button>
    </div>
  )
}

export default Box