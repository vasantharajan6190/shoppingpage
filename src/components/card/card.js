import React,{useContext, useState} from "react"
import {toast} from "react-toastify"
import {logincontext} from "../../Contextapi"
import {useHistory} from "react-router-dom"
import "./card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faHeart,faBan } from '@fortawesome/free-solid-svg-icons'
function Card(props){
  const history = useHistory()
  const routename = props.pathname
  const main = useContext(logincontext)
  const [login,setlogin] = main.login
  const [cart,setcart] =main.cart
  const Cart = cart
  const [fav,setfav] = main.fav
  const [addcart,setaddcart] = useState({
    title:props.title,
    price:props.price,
    rating:props.rating,
    img:props.src
  })

  function cartonclick(e){
    let delindex=false
    cart.map(res=>{
      if(res.title===addcart.title){
      delindex=true
      }
    })
    if(delindex){
      toast.error("Item is already in cart")
    }
    else{
       setcart(prev=>[...prev,addcart])
       toast.success("Item added to cart",{className:"text-center mt-4"})
    }
      }
  function favonclick(e){
    let delindex=false
    fav.map(res=>{
      if(res.title===addcart.title){
      delindex=true
      }
    })
    if(delindex){
      toast.error("Item is already in favourites",{className:"text-center mt-4"})
    }
    else{
    setfav(prev=>[...prev,addcart])
    toast.success("Item added to favourites",{className:"text-center mt-4"})
    }
  }
  function delonclick(e){
    if(routename==="/cart"){
         let delindex=0
         cart.map((res,index)=>{
           if(res.title===addcart.title){
                delindex = index
           }
         })
         const toupdate = cart
          toupdate.splice(delindex,1)
          setcart(toupdate)
          toast.success("Item deleted from cart",{className:"text-center mt-4"})
          history.push("/cart")
    }
    else{
      if(routename==="/fav"){
        let delindex=0
        fav.map((res,index)=>{
          if(res.title===addcart.title){
               delindex = index
          }
        })
        const toupdate = fav
         toupdate.splice(delindex,1)
         setfav(toupdate)
         toast.success("Item deleted from favourites",{className:"text-center mt-4"})
         history.push("/fav")
      }
    }
  }
return(
    <div className="card col-md-3 float-left m-5" style={{width: "18rem"}}>
  <img className="card-img-top" src={props.src}/>
  <div className="card-body">
    <h5 className="card-title text-center">{props.title}</h5>
    <div className="d-flex justify-content-around">
    <p className="card-text">Rs.{props.price}-/-</p>
    <a className="text-right">Ratings: {props.rating}</a>
    </div>
  </div>
  {login? <div className="d-flex mb-2 justify-content-between">
  {routename==="/cart"?null:<FontAwesomeIcon icon={faCartPlus} onClick={e=>cartonclick(e)} className="cart"/>}
  {routename==="/fav"?null:<FontAwesomeIcon icon={faHeart} onClick={e=>favonclick(e)} className="cart"/>}
  {routename==="/showitems"?null:<FontAwesomeIcon icon={faBan} onClick={e=>delonclick(e)} className="cart"/>}
  </div>:null}
 
 
  <button className="btn btn-sm btn-primary mb-2">More...</button>
</div>
)
}

export default Card