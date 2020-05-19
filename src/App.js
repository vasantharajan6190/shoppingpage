import React,{Fragment,useContext}from "react";
import "./app.css"
import {BrowserRouter,Switch,Route,Link,useHistory} from 'react-router-dom'
import Showitems from "./containers/showitems/showitems"
import Admin from "./containers/Admin/admin"
import {createcontext} from "./containers/homepage/homepage"
import {logincontext} from "./Contextapi"
import 'react-toastify/dist/ReactToastify.css';
import Homepage from './containers/homepage/homepage';
import {Variables} from "./containers/homepage/homepage"
import Register from "./containers/register/register"
import Login from "./containers/login/login"
function App() {
  const history = useHistory()
  const main = useContext(logincontext)
  const [login,setlogin] = main.login
  const [currentuser,setcurrentuser] = main.currentuser
  let bool =false
  if(login===true){
       bool=true
  }
  function onclick(){
    setlogin(!login)
    alert("Logged Out Successfully")
  }
  return (
    <Variables>
       <Fragment>
       <BrowserRouter>
       <nav className="navbar navbar-expand navbar-light bg-light" style={{height:"55px"}}>
       <div className="container ml-3">
       <Link to="/"><h5 className="navbar-brand text-white font-weight-bold">E-Kart</h5></Link>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav" style={{marginBottom: "8px"}}>
         <li className="nav-item">
           <Link to="/showitems" className="nav-link font-weight-bold text-warning">View Items</Link>
         </li>
         <li className="nav-item">
         {bool? <Link to="/admin" className="nav-link font-weight-bold text-warning">Add items</Link>:null}
       </li>
       </ul>
     </div>
       </div>
       <div className="float-right d-flex mt-2">
       {bool?<p className="text-warning font-weight-bold">Logged in as {currentuser.name.slice(0,8)}...</p>:
       <div className="float-right d-flex">
       <Link to="/login"><p className="text-warning font-weight-bold mr-4">Login</p></Link>
       <Link to="/register"><p className="text-warning font-weight-bold ">Register</p></Link>
       </div>
      }
       </div>
      </nav>
      {bool?<Link to="/"><button className="float-right btn btn-sm btn-dark my-2" onClick={onclick}>Log Out</button></Link>:null}
      
       <Switch>
       <Route path="/showitems" exact component={Showitems}/>
       <Route path="/admin" exact component={Admin}/>
       <Route path="/login" exact component={Login}/>
       <Route path="/register" exact component={Register}/>
       <Route path="/" exact component={Homepage}/>
       </Switch>
       </BrowserRouter>
       </Fragment>
       </Variables>
  );
}

export default App;
