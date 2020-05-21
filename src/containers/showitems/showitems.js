import React,{ useState,useContext} from "react"
import "./showitems.css"
import Card from "../../components/card/card"
import {createcontext} from "../../containers/homepage/homepage"
function Showitems(props){
const [item,setitem ] = useContext(createcontext)
const routename = props.location.pathname
return(
    <React.Fragment>
    
    <p className="text-center mt-5 font-weight-normal display-3" style={{ color:"#015298"}}>Our Products</p>
    <h5 className="text-center">Total No.of.Products: {item.length}</h5>
<div className="ml-3 row m-0 justify-content-start">
{item.map((res,index)=>(
    <Card pathname={routename} favback={res.favback} cartback={res.cartback} key={index} fav={res.fav} cart={res.cart} title={res.title} rating={res.rating} src={res.img} price={res.price}/>
))}
</div>
</React.Fragment>
)
}

export default Showitems