(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),m=a(2),s=(a(33),a(14)),o=a(15),i=a(3),u=a(6),d=(a(39),a(17)),p=a(5),f=Object(n.createContext)(),g=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(),o=Object(m.a)(s,2),i=o[0],u=o[1],d=Object(n.useState)([]),p=Object(m.a)(d,2),g=p[0],b=p[1],E=Object(n.useState)([]),v=Object(m.a)(E,2),h=v[0],N=v[1];return c.a.createElement(f.Provider,{value:{login:[r,l],currentuser:[i,u],cart:[h,N],fav:[g,b]}},e.children)};a(40);var b=function(e){var t=Object(i.f)(),a=e.pathname,r=Object(n.useContext)(f),l=Object(m.a)(r.login,2),u=l[0],g=(l[1],Object(m.a)(r.cart,2)),b=g[0],E=g[1],v=Object(m.a)(r.fav,2),h=v[0],N=v[1],x=Object(n.useState)({title:e.title,price:e.price,rating:e.rating,img:e.src}),j=Object(m.a)(x,2),y=j[0];return j[1],c.a.createElement("div",{className:"card col-md-3 float-left m-5",style:{width:"18rem"}},c.a.createElement("img",{className:"card-img-top",src:e.src}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title text-center"},e.title),c.a.createElement("div",{className:"d-flex justify-content-around"},c.a.createElement("p",{className:"card-text"},"Rs.",e.price,"-/-"),c.a.createElement("a",{className:"text-right"},"Ratings: ",e.rating))),u?c.a.createElement("div",{className:"d-flex mb-2 justify-content-between"},"/cart"===a?null:c.a.createElement(s.a,{icon:o.b,onClick:function(e){return function(e){var t=!1;b.map((function(e){e.title===y.title&&(t=!0)})),t?p.a.error("Item is already in cart"):(E((function(e){return[].concat(Object(d.a)(e),[y])})),p.a.success("Item added to cart",{className:"text-center mt-4"}))}()},className:"cart"}),"/fav"===a?null:c.a.createElement(s.a,{icon:o.c,onClick:function(e){return function(e){var t=!1;h.map((function(e){e.title===y.title&&(t=!0)})),t?p.a.error("Item is already in favourites",{className:"text-center mt-4"}):(N((function(e){return[].concat(Object(d.a)(e),[y])})),p.a.success("Item added to favourites",{className:"text-center mt-4"}))}()},className:"cart"}),"/showitems"===a?null:c.a.createElement(s.a,{icon:o.a,onClick:function(e){return function(e){if("/cart"===a){var n=0;b.map((function(e,t){e.title===y.title&&(n=t)}));var c=b;c.splice(n,1),E(c),p.a.success("Item deleted from cart",{className:"text-center mt-4"}),t.push("/cart")}else if("/fav"===a){var r=0;h.map((function(e,t){e.title===y.title&&(r=t)}));var l=h;l.splice(r,1),N(l),p.a.success("Item deleted from favourites",{className:"text-center mt-4"}),t.push("/fav")}}()},className:"cart"})):null,c.a.createElement("button",{className:"btn btn-sm btn-primary mb-2"},"More..."))},E=(a(43),Object(n.createContext)()),v=function(e){var t=Object(n.useState)([{title:"Mi note 8",img:"https://download.appmifile.com/5_updatepdf_in/28/02/2019/b7c1a94f-78d8-47ca-a3aa-d6c417b62d6e.png",price:"10000",rating:"4.4"},{title:"iPhone 8",img:"https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg",price:"52000",rating:"4.6"},{title:"Realme 5",img:"https://images-na.ssl-images-amazon.com/images/I/71YC1181G3L._SX679_.jpg",price:"13000",rating:"3.4"}]),a=Object(m.a)(t,2),r=a[0],l=a[1];return c.a.createElement(E.Provider,{value:[r,l]},e.children)};var h=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"body"},c.a.createElement("div",{className:"justify-content-center body"},c.a.createElement("p",{className:"text-center font-weight-normal head display-2 my-5"},"Welcome to E-Kart"),c.a.createElement("h4",{className:"text-center font-italic text-warning"},"We are for the Customers",c.a.createElement("br",null),"of the customers",c.a.createElement("br",null),"by the customers"),c.a.createElement("div",{className:"d-flex justify-content-around mt-5"}))))};var N=function(e){var t=Object(n.useContext)(E),a=Object(m.a)(t,2),r=a[0],l=(a[1],e.location.pathname);return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"text-center mt-5 font-weight-normal display-3",style:{color:"#015298"}},"Our Products"),c.a.createElement("h5",{className:"text-center"},"Total No.of.Products: ",r.length),c.a.createElement("div",{className:"ml-3 row m-0 justify-content-start"},r.map((function(e,t){return c.a.createElement(b,{pathname:l,key:t,title:e.title,rating:e.rating,src:e.img,price:e.price})}))))},x=a(12),j=a(11);var y=function(e){var t=Object(i.f)(),a=Object(n.useContext)(E),r=Object(m.a)(a,2),l=(r[0],r[1]),s=Object(n.useContext)(f),o=Object(m.a)(s.login,2),u=o[0],g=(o[1],Object(n.useState)({title:"",rating:"",img:"",price:""})),b=Object(m.a)(g,2),v=b[0],h=b[1];function N(e){h(Object(j.a)(Object(j.a)({},v),{},Object(x.a)({},e.target.name,e.target.value)))}return c.a.createElement(n.Fragment,null,u?c.a.createElement("div",{className:"container my-5 "},c.a.createElement("p",{className:"text-center font-weight-normal display-4",style:{color:"#015298"}},"ADD PRODUCTS"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("form",{style:{width:"50%"},onSubmit:function(e){p.a.success("Product added",{className:"text-center mt-4"}),e.preventDefault(),l((function(e){return[].concat(Object(d.a)(e),[Object(j.a)({},v)])})),t.push("/showitems")}},c.a.createElement("input",{type:"text",name:"title",placeholder:"Product Name",onChange:function(e){return N(e)},value:v.title,className:"form-control my-3",required:!0}),c.a.createElement("input",{type:"text",name:"img",placeholder:"Image Url",value:v.img,onChange:function(e){return N(e)},className:"form-control my-3",required:!0}),c.a.createElement("input",{type:"text",name:"price",placeholder:"Product Price in Rs.",onChange:function(e){return N(e)},value:v.price,className:"form-control my-3",required:!0}),c.a.createElement("input",{type:"text",name:"rating",placeholder:"Rating",onChange:function(e){return N(e)},value:v.rating,className:"form-control my-3",required:!0}),c.a.createElement("button",{className:"btn btn-success btn-block"},"Add the Item")))):c.a.createElement("h1",{className:"text-center display-4 mt-5"},"Login to Add items "))};a(44),a(45);var O=function(){var e=Object(i.f)(),t=Object(n.useContext)(f),a=Object(m.a)(t.currentuser,2),r=(a[0],a[1]),l=Object(m.a)(t.login,2),s=(l[0],l[1]),o=Object(n.useState)({name:"",email:"",password:"",mobile:""}),d=Object(m.a)(o,2),g=d[0],b=d[1];function E(e){b(Object(j.a)(Object(j.a)({},g),{},Object(x.a)({},e.target.name,e.target.value)))}return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container my-5 "},c.a.createElement("p",{className:"text-center font-weight-normal display-4",style:{color:"#015298"}},"Sign Up"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("form",{style:{width:"50%"},onSubmit:function(t){p.a.success("Registered Successsfully",{className:"text-center mt-4 rounded"}),t.preventDefault(),r(g),s(!0),e.push("/showitems")}},c.a.createElement("input",{type:"text",name:"name",placeholder:"Name",onChange:function(e){return E(e)},value:g.name,className:"form-control my-3",required:!0}),c.a.createElement("input",{type:"email",name:"email",placeholder:"Email",value:g.email,onChange:function(e){return E(e)},className:"form-control my-3",required:!0}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:function(e){return E(e)},value:g.password,className:"form-control my-3",required:!0}),c.a.createElement("input",{type:"text",name:"mobile",placeholder:"Mobile no",onChange:function(e){return E(e)},value:g.mobile,className:"form-control my-3",required:!0}),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("button",{className:"btn btn-success px-5"},"Sign Up")),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(u.b,{to:"/login",className:"text-center"},"Already a User?Login"))))))};var w=function(){var e=Object(i.f)(),t=Object(n.useContext)(f),a=Object(m.a)(t.currentuser,2),r=a[0],l=(a[1],Object(m.a)(t.login,2)),s=(l[0],l[1]),o=Object(n.useState)({email:"",password:""}),d=Object(m.a)(o,2),g=d[0],b=d[1];function E(e){b(Object(j.a)(Object(j.a)({},g),{},Object(x.a)({},e.target.name,e.target.value)))}return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container my-5 "},c.a.createElement("p",{className:"text-center font-weight-normal display-4",style:{color:"#015298"}},"Login"),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("form",{style:{width:"50%"},onSubmit:function(t){console.log(r,g),t.preventDefault(),r?r.email===g.email?r.password===g.password?(p.a.success("Logged In successfully",{className:"text-center mt-4"}),s(!0),e.push("/showitems")):(p.a.error("Password incorrect",{className:"text-center mt-4"}),b("")):(p.a.error("User doesn't exist",{className:"text-center mt-4"}),b("")):p.a.info("Please Sign Up to Login",{className:"text-center mt-4"})}},c.a.createElement("input",{type:"email",name:"email",placeholder:"Email",onChange:function(e){return E(e)},value:g.email,className:"form-control my-3",required:!0}),c.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:g.password,onChange:function(e){return E(e)},className:"form-control my-3",required:!0}),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("button",{className:"btn px-5 btn-success"},"Login")),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(u.b,{to:"/register",className:"text-center mt-2"},"New User?Sign Up"))))))};a(46);var C=function(e){var t=Object(n.useContext)(f),a=Object(m.a)(t.cart,2),r=a[0],l=(a[1],Object(m.a)(t.login,2)),s=l[0],o=(l[1],0);return c.a.createElement(n.Fragment,null,s?c.a.createElement("div",null,c.a.createElement("h1",{className:"font-weight-normal mt-2 text-center"},"Your Cart:"),c.a.createElement("div",{className:"container"},c.a.createElement("h5",null,"Total.No.of.Products:",r.length)),c.a.createElement("div",{className:"ml-3 row m-0 justify-content-start"},r.map((function(t,a){return o=parseInt(t.price)+o,c.a.createElement(b,{pathname:e.location.pathname,key:a,title:t.title,price:t.price,rating:t.rating,src:t.img})}))),c.a.createElement("div",{className:"mr-5"},c.a.createElement("h2",{className:"container my-4 font-weight-normal"},"Total Price:",o))):c.a.createElement("p",{className:"text-center font-weight-normal display-4 mt-5"},"Login to Add products to carts"))};a(47);var S=function(e){var t=Object(n.useContext)(f),a=Object(m.a)(t.login,2),r=a[0],l=(a[1],Object(m.a)(t.fav,2)),s=l[0];return l[1],c.a.createElement(n.Fragment,null,r?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h4",{className:"container display-4"},"Your Favourites")),c.a.createElement("div",{className:"container"},s.map((function(t,a){return c.a.createElement(b,{pathname:e.location.pathname,key:a,title:t.title,price:t.price,rating:t.rating,src:t.img})})))):c.a.createElement("p",{className:"text-center font-weight-normal display-4 mt-5"},"Login to explore favoutites"))};p.a.configure({autoClose:2e3});var P=function(){Object(i.f)();var e=Object(n.useContext)(f),t=Object(m.a)(e.login,2),a=t[0],r=t[1],l=Object(m.a)(e.currentuser,2),d=l[0],g=(l[1],!1);return!0===a&&(g=!0),c.a.createElement(v,null,c.a.createElement(n.Fragment,null,c.a.createElement(u.a,null,c.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light",style:{height:"55px"}},c.a.createElement("div",{className:"container ml-3"},c.a.createElement(u.b,{to:"/shoppingpage"},c.a.createElement("h5",{className:"navbar-brand text-white font-weight-bold"},"E-Kart")),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav",style:{marginBottom:"8px"}},c.a.createElement("li",{className:"nav-item"},c.a.createElement(u.b,{to:"/showitems",className:"nav-link font-weight-bold text-warning"},"View Items")),c.a.createElement("li",{className:"nav-item"},g?c.a.createElement(u.b,{to:"/admin",className:"nav-link font-weight-bold text-warning"},"Add items"):null))),c.a.createElement("div",{className:"d-flex justify-content-end mt-2"},g?c.a.createElement("p",{className:"text-warning mr-2 font-weight-bold"},d.name.slice(0,8),"..."):c.a.createElement("div",{className:"float-right d-flex"},c.a.createElement(u.b,{to:"/login"},c.a.createElement("p",{className:"text-warning font-weight-bold mr-4"},"Login")),c.a.createElement(u.b,{to:"/register"},c.a.createElement("p",{className:"text-warning font-weight-bold "},"Sign Up"))))),g?c.a.createElement(u.b,{to:"/shoppingpage",style:{marginTop:"-9px"}},c.a.createElement("button",{className:"float-right btn btn-sm btn-white px-3 my-2",onClick:function(){r(!a),p.a.success("Logged Out Successfully",{className:"text-center mt-4"})}},"Log Out")):null),g?c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement(u.b,{to:"/cart"},c.a.createElement("button",{className:"btn font-weight-bold btn-sm btn-outline-warning border rounded px-4 m-2"},":",c.a.createElement(s.a,{icon:o.b,className:"mr-2"}),"My Cart")),c.a.createElement(u.b,{to:"/fav"},c.a.createElement("button",{className:"btn font-weight-bold btn-sm btn-outline-warning border rounded px-4 m-2"},c.a.createElement(s.a,{icon:o.c,className:"mr-2"}),"Favourites"))):null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/showitems",exact:!0,component:N}),c.a.createElement(i.a,{path:"/admin",exact:!0,component:y}),c.a.createElement(i.a,{path:"/login",exact:!0,component:w}),c.a.createElement(i.a,{path:"/register",exact:!0,component:O}),c.a.createElement(i.a,{path:"/shoppingpage",exact:!0,component:h}),c.a.createElement(i.a,{path:"/fav",exact:!0,component:S}),c.a.createElement(i.a,{path:"/cart",exact:!0,component:C})))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null,c.a.createElement(P,null))),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.6347df71.chunk.js.map