import React,{useContext,useEffect, useState} from "react"
import {toast} from "react-toastify"
import {logincontext} from "../../Contextapi"
import {useHistory} from "react-router-dom"
import {createcontext} from "../../containers/homepage/homepage" 
import "./card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faHeart,faBan } from '@fortawesome/free-solid-svg-icons'
function Card(props){
  const history = useHistory()
  const routename = props.pathname
  const main = useContext(logincontext)
  const [item,setitem] = useContext(createcontext)
  const [login,setlogin] = main.login
  let favbutton = true
  let cartbutton = true
  const [cart,setcart] =main.cart
  const [fav,setfav] = main.fav
  const [addcart,setaddcart] = useState({
    title:props.title,
    price:props.price,
    rating:props.rating,
    img:props.src,
    favback:props.favback,
    cartback:props.cartback
  })
  function cartonclick(e){
    let itemindex = 0 
    cart.map((res,index)=>{
      if(res.title===addcart.title){
         itemindex = index
      }
    })
     
    if(itemindex===0){
      // const change = !(addcart.cartback)
      // setaddcart({...addcart,cartback:change})
      item.map(res=>{
        if(res.title===addcart.title){
          res.cartback=true
        }
      })
      cart.map(res=>{
        if(res.title===addcart.title){
          res.cartback=true
        }
      })
      fav.map(res=>{
        if(res.title===addcart.title){
          res.cartback=true
        }
      })
      setcart(prev=>[...prev,addcart])
          toast.success("Item Added to cart")
          history.push(routename)
    }
    else{
      // const change = !(addcart.cartback)
      // setaddcart({...addcart,cartback:change})
      item.map(res=>{
        if(res.title===addcart.title){
          res.cartback=false
        }
      })
      cart.map(res=>{
        if(res.title===addcart.title){
          res.cartback=false
        }
      })
      fav.map(res=>{
        if(res.title===addcart.title){
          res.cartback=false
        }
      })
      setcart(prev=>[...prev,addcart])
      const toupdate = cart
      toupdate.splice(itemindex,1)
      setcart(toupdate)
      toast.success("Item removed from cart")
      history.push(routename)
    }
   
  }
  


  function favonclick(e){
    let itemindex = 0 
    fav.map((res,index)=>{
      if(res.title===addcart.title){
         itemindex = index
      }
    })
     
    if(itemindex===0){
      const change = !(addcart.favback)
      setaddcart({...addcart,favback:change})
      item.map(res=>{
        if(res.title===addcart.title){
          res.favback=true
        }
      })
      cart.map(res=>{
        if(res.title===addcart.title){
          res.favback=true
        }
      })
      fav.map(res=>{
        if(res.title===addcart.title){
          res.favback=true
        }
      })
      setfav(prev=>[...prev,addcart])
          toast.success("Item Added to Favourites")
          history.push(routename)
    }
    else{
      const change = !(addcart.favback)
      setaddcart({...addcart,favback:change})
      item.map(res=>{
        if(res.title===addcart.title){
          res.favback=false
        }
      })
      cart.map(res=>{
        if(res.title===addcart.title){
          res.favback=false
        }
      })
      fav.map(res=>{
        if(res.title===addcart.title){
          res.favback=false
        }
      })
      setfav(prev=>[...prev,addcart])
      const toupdate = fav
      toupdate.splice(itemindex,1)
      setfav(toupdate)
      toast.success("Item removed from favourites")
      history.push(routename)
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
  {login?
  <div className="d-flex mb-2 justify-content-between">
  {routename==="/cart"?null:<FontAwesomeIcon icon={faCartPlus} onClick={e=>cartonclick(e)} className={props.cartback?"text-warning":"cart"} />}
  {routename==="/fav"?null:<FontAwesomeIcon icon={faHeart} onClick={(e)=>favonclick(e)} className={props.favback?"text-warning":"cart"} />}
  {routename==="/showitems"?null:<FontAwesomeIcon icon={faBan} onClick={e=>delonclick(e)} className="cart"/>}
  </div>:null}
 
 
  <button className="btn btn-sm btn-primary mb-2">More...</button>
</div>
)
}

export default Card