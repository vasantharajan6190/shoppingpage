import React,{ useState,useContext} from "react"
import "./showitems.css"
import Card from "../../components/card/card"
import {createcontext} from "../../Contextapi"
function Showitems(props){
const [item,setitem ] = useContext(createcontext)
return(
    <React.Fragment>
    <p className="text-center text-primary font-italic display-3">Our Products</p>
    <h5 className="ml-5">Total No.of.Products: {item.length}</h5>
<div className="row m-0 justify-content-start">
{item.map((res,index)=>(
    <Card key={index} title={res.title} rating={res.rating} src={res.img} price={res.price}/>
))}
</div>
</React.Fragment>
)
}

export default Showitems