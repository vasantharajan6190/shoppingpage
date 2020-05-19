import React,{Fragment}from "react";
import "./app.css"
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import Showitems from "./containers/showitems/showitems"
import Admin from "./containers/Admin/admin"
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './containers/homepage/homepage';
import {Variables} from "./containers/homepage/homepage"
function App() {
  return (
    <Variables>
       <Fragment>
       <BrowserRouter>
       <nav className="navbar navbar-light bg-light" style={{height:"60px"}}>
       <div className="container">
       <Link to="/"><h5 className="navbar-brand text-white font-weight-bold">E-Kart</h5></Link>
       <div className="float-right m-0">
       <Link to="/showitems"><p className="btn btn-warning mr-2 rounded">View Items</p></Link>
       <Link to="/admin"><p className="btn btn-warning ml-2 rounded">Add Items</p></Link>
       </div>
       </div>
       
      </nav>
       <Switch>
       
       <Route path="/showitems" exact component={Showitems}/>
       <Route path="/admin" exact component={Admin}/>
       <Route path="/" exact component={Homepage}/>
       </Switch>
       </BrowserRouter>
       </Fragment>
       </Variables>
  );
}

export default App;
