import React,{useState,createContext} from "react"


export const logincontext = createContext()

export const Login =(props)=>{
     const [login,setlogin] = useState(false)
     const [currentuser,setcurrentuser] = useState()
     return(
         <logincontext.Provider value={{login:[login,setlogin],currentuser:[currentuser,setcurrentuser]}}>
            {props.children}
         </logincontext.Provider>
     )
}
