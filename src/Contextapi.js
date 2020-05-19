import React,{useState,createContext} from "react"

export const createcontext = createContext()

export const Variables = (props)=>{
    const [item,setitem] = useState([

        {
            title:"Mi note 8",
            img:"https://download.appmifile.com/5_updatepdf_in/28/02/2019/b7c1a94f-78d8-47ca-a3aa-d6c417b62d6e.png",
            price:"12000",
            rating:"5.6"
        },
        {
            title:"iPhone 8",
            img:"https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg",
            price:"12000",
            rating:"5.6"
        },
        {
            title:"Mi note 8",
            img:"https://images-na.ssl-images-amazon.com/images/I/71YC1181G3L._SX679_.jpg",
            price:"12000",
            rating:"5.6"
        }
    ]);
    return(
         <createcontext.Provider value={[item,setitem]}>
         {props.children}
         </createcontext.Provider>
    )
}