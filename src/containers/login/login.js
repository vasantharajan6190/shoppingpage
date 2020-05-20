import React,{Fragment,useState,useContext} from "react"
import {Link,useHistory} from "react-router-dom"
import {logincontext} from "../../Contextapi"
import {toast} from "react-toastify"
function Login(){
    const history = useHistory()
    const main = useContext(logincontext)
    const [currentuser,setcurrentuser] = main.currentuser
    const [login,setlogin] = main.login
    const [loginuser,setloginuser] = useState({
        email:"",
        password:""
    })
    function onchange(e){
        setloginuser({...loginuser,[e.target.name]:e.target.value})
    }
    function onsubmit(e){
        console.log(currentuser,loginuser)
        e.preventDefault()
        if(!currentuser){
            toast.info("Please Sign Up to Login",{className:"text-center mt-4"})
        }
else{

        if(currentuser.email===loginuser.email){
             if(currentuser.password===loginuser.password){
                 toast.success("Logged In successfully",{className:"text-center mt-4"})
                 setlogin(true)
                 history.push("/showitems")
             }
             else{
                 toast.error("Password incorrect",{className:"text-center mt-4"})
                 setloginuser("")
             }
        }
        else{
            toast.error("User doesn't exist",{className:"text-center mt-4"})
            setloginuser("")
        }
    }
}
    return(
       <Fragment>
       <div className="container my-5 ">
       <p className="text-center font-weight-normal display-4" style={{ color:"#015298"}}>Login</p>
       <div className="d-flex justify-content-center">
       <form style={{width:"50%"}} onSubmit={onsubmit}>
       <input type="email" name="email" placeholder="Email" onChange={e=>onchange(e)} value={loginuser.email} className="form-control my-3" required/>
       <input type="password" name="password" placeholder="Password" value={loginuser.password} onChange={e=>onchange(e)} className="form-control my-3" required/>
       <div className="d-flex justify-content-center">
       <button className="btn px-5 btn-success">Login</button>
       </div>
       <div className="d-flex justify-content-center">
       <Link to="/register" className="text-center mt-2">New User?Sign Up</Link>
       </div>
     </form>
       </div>
       </div>
       </Fragment>
    )
}

export default Login