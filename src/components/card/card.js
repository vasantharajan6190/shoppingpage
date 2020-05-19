import React from "react"
import "./card.css"
function Card(props){
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
  <button className="btn btn-sm btn-primary mb-2">More...</button>
</div>
)
}

export default Card