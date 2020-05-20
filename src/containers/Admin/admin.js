import React ,{ useState ,Fragment,useContext} from "react"
import {Link,useHistory} from "react-router-dom"
import { toast } from 'react-toastify';
import {createcontext} from "../../containers/homepage/homepage"
import {logincontext} from "../../Contextapi"
function Admin(props){
    const history = useHistory()
    const [item,setitem] = useContext(createcontext)
    const main = useContext(logincontext)
    const [login,setlogin] = main.login
    const [items,setitems] = useState({
        title:"",
        rating:"",
        img:"",
        price:""
    })
    function onchange(e){
        setitems({...items,[e.target.name]:e.target.value})
    }
    function onsubmit(e){
        toast.success("Product added",{className:"text-center mt-4"})
        e.preventDefault()
        setitem(prev=>[...prev,{...items}])
        history.push("/showitems")
       
    }
return(
    <Fragment>
    {login?
        <div className="container my-5 ">
        <p className="text-center display-4">ADD PRODUCTS</p>
        <div className="d-flex justify-content-center">
        <form style={{width:"50%"}} onSubmit={onsubmit}>
        <input type="text" name="title" placeholder="Product Name" onChange={e=>onchange(e)} value={items.title} className="form-control my-3" required/>
        <input type="text" name="img" placeholder="Image Url" value={items.img} onChange={e=>onchange(e)} className="form-control my-3" required/>
        <input type="text" name="price" placeholder="Product Price in Rs." onChange={e=>onchange(e)} value={items.price} className="form-control my-3" required/>
        <input type="text" name="rating" placeholder="Rating" onChange={e=>onchange(e)} value={items.rating} className="form-control my-3" required/>
        <button className="btn btn-success btn-block">Add the Item</button>
      </form>
        </div>
        </div>
        :<h1 className="text-center display-4 mt-5">Login to Add items </h1>}
   
    </Fragment>
)
}

export default Admin