import React,{Fragment,useState,useContext} from "react"
import "./register.css"
import {toast} from "react-toastify"
import {useHistory,Link} from "react-router-dom"
import {logincontext} from "../../Contextapi"
function Register(){
    const history = useHistory()
    const main = useContext(logincontext)
    const [currentuser,setcurrentuser] = main.currentuser
    const [login,setlogin] = main.login
    const [newuser,setnewuser] = useState({
        name:"",
        email:"",
        password:"",
        mobile:""
    })
    function onchange(e){
          setnewuser({...newuser,[e.target.name]:e.target.value})
    }
    function onsubmit(e){
        toast.success("Registered Successsfully",{className:"text-center mt-4 rounded"})
           e.preventDefault()
           setcurrentuser(newuser)
           setlogin(true)
        history.push("/showitems")
    }
    return(
        <Fragment>
        <div className="container my-5 ">
    <p className="text-center font-weight-normal display-4" style={{ color:"#015298"}}>Sign Up</p>
    <div className="d-flex justify-content-center">
    <form style={{width:"50%"}} onSubmit={onsubmit}>
    <input type="text" name="name" placeholder="Name" onChange={e=>onchange(e)} value={newuser.name} className="form-control my-3" required/>
    <input type="email" name="email" placeholder="Email" value={newuser.email} onChange={e=>onchange(e)} className="form-control my-3" required/>
    <input type="password" name="password" placeholder="Password" onChange={e=>onchange(e)} value={newuser.password} className="form-control my-3" required/>
    <input type="text" name="mobile" placeholder="Mobile no" onChange={e=>onchange(e)} value={newuser.mobile} className="form-control my-3" required/>
    <div className="d-flex justify-content-center">
    <button className="btn btn-success px-5">Sign Up</button>
    </div>
    <div className="d-flex justify-content-center">
    <Link to="/login" className="text-center">Already a User?Login</Link>
    </div>
  </form>
    </div>
    </div>
        </Fragment>
    )
}

export default Register