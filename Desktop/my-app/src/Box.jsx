import React, { useState } from 'react'
import UpdateProduct from './UpdateProduct'

function Box(props) {
    const [show,setShow]=useState(false)
  return (
    <div>
        <h1 onClick={()=>setShow(!show)}>{props.product.title}</h1>
        {show?<UpdateProduct deleteProdFromState={props.deleteProdFromState} updateProdToState={props.updateProdToState} prod={props.product}/>:null}

    </div>
  )
}

export default Box