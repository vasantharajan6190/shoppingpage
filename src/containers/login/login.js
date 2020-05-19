import React,{Fragment,useState,useContext} from "react"
import {Link,useHistory} from "react-router-dom"
import {logincontext} from "../../Contextapi"
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
        e.preventDefault()
        if(currentuser.email===loginuser.email){
             if(currentuser.password===loginuser.password){
                 setlogin(true)
                 history.push("/showitems")
             }
             else{
                 alert("Password incorrect")
                 setloginuser("")
             }
        }
        else{
            alert("User doesn't exist")
            setloginuser("")
        }
    }
    return(
       <Fragment>
       <div className="container my-5 ">
       <p className="text-center display-4">LOGIN</p>
       <div className="d-flex justify-content-center">
       <form style={{width:"50%"}} onSubmit={onsubmit}>
       <input type="email" name="email" placeholder="Email" onChange={e=>onchange(e)} value={loginuser.email} className="form-control my-3" required/>
       <input type="password" name="password" placeholder="Password" value={loginuser.password} onChange={e=>onchange(e)} className="form-control my-3" required/>
       <button className="btn btn-success btn-block">Login</button>
       <Link to="/register" className="mt-2">New User:Register Here</Link>
     </form>
       </div>
       </div>
       </Fragment>
    )
}

export default Login