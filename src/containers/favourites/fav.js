import React,{Fragment,useContext} from "react"
import "./fav.css"
import {logincontext} from "../../Contextapi"
import Card from "../../components/card/card"
function Fav(props){
    const main= useContext(logincontext)
    const [login,setlogin] = main.login
    const [fav,setfav] = main.fav
    return(
        <Fragment>
        {login?
            <div>
            <div>
            <h4 className="container display-4">Your Favourites</h4>
            </div>
            <div className="container">
            {fav.map((res,index)=>(
                <Card pathname={props.location.pathname} key={index} title={res.title} price={res.price} rating={res.rating} src={res.img}/>
            ))}
            </div>
          </div>
            :
            <p className="text-center font-weight-normal display-4 mt-5">Login to explore favoutites</p>}
        </Fragment>       
    )
}

export default Fav