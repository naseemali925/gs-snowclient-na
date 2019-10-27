(this["webpackJsonpgs-snowclient-na"]=this["webpackJsonpgs-snowclient-na"]||[]).push([[0],{213:function(e,t,a){e.exports=a(327)},218:function(e,t,a){},220:function(e,t,a){},327:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),i=a.n(o),c=(a(218),a(219),a(220),a(363)),l=a(366),s=a(149),u=a(135),m=Object(c.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},content:{flexGrow:1,padding:e.spacing(3)}}}));function d(e){var t=m();return r.a.createElement("div",{className:t.root},r.a.createElement(l.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(u.a,{variant:"h6",className:t.title},"SNOW Client"))))}var p=a(10),g=a(43),f=a(84),b=a.n(f),h=a(112),w=a(32),y=a(187),v=a.n(y),E=a(121),x=a.n(E),O=a(184);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function I(e){var t=e.globalState,a=t.username,o=t.password,i=t.instance,c=Object(n.useState)({columns:[{title:"Number",field:"number"},{title:"Opened",field:"opened_at"},{title:"Short Description",field:"short_description"}],data:[]}),l=Object(w.a)(c,2),s=l[0],m=l[1],d=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://".concat(i,".service-now.com/api/now/table/incident?sysparm_limit=20&sysparm_query=active=true"),{auth:{username:a,password:o}});case 3:t=e.sent,m(Object.assign(t.data.result,{},{columns:s.columns,data:t.data.result})),console.log(t.status,t.data.result),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d()}),[]),r.a.createElement(v.a,{style:{margin:"16px"},title:"Incidents",columns:s.columns,data:s.data,detailPanel:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},label:e.number,clickable:!0,color:"primary"}),r.a.createElement(O.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},label:"System Id: "+e.sys_id,clickable:!0,color:"secondary"}),r.a.createElement(u.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},variant:"h6"},"".concat(e.made_sla?"Yes":"No"," SLA was made."),r.a.createElement("br",null)),r.a.createElement(u.a,{style:{margin:"16px"},variant:"h6"},"".concat(e.description)))},onRowClick:function(e,t,a){return a()},editable:{onRowAdd:function(e){return new Promise((function(t){setTimeout((function(){t();var a=Object(g.a)(s.data);a.push(e),m(S({},s,{data:a}))}),600)}))},onRowUpdate:function(e,t){return new Promise((function(a){setTimeout((function(){a();var n=Object(g.a)(s.data);n[n.indexOf(t)]=e,m(S({},s,{data:n}))}),600)}))},onRowDelete:function(e){return new Promise((function(t){setTimeout((function(){t();var a=Object(g.a)(s.data);a.splice(a.indexOf(e),1),m(S({},s,{data:a}))}),600)}))}}})}function P(e){return e.globalState.isLoggedIn()||e.history.push("/"),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(I,e))}var k=a(136),N=a(68),L=a(183),C=a(111),D=a(371),R=a(167),_=a(171),F=Object(c.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",margin:"16px"},input:{margin:e.spacing(1)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},button:{margin:e.spacing(1)}}}));function B(e){var t=F(),a=Object(n.useState)(!1),o=Object(w.a)(a,2),i=o[0],c=o[1];function l(){return(l=Object(h.a)(b.a.mark((function t(a){var n,r,o,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),c(!0),n=document.getElementById("username").value,r=document.getElementById("password").value,o=document.getElementById("instanceId").value;try{i={url:"https://".concat(o,".service-now.com/api/now/v2/table/sys_user?user_name=").concat(n),method:"get",auth:{username:"".concat(n),password:"".concat(r)}},x()(i).then((function(t){c(!1);var a={raw:t,status:t.status};200===t.status&&(e.globalState.setLoggedIn(!0),e.globalState.username=n,e.globalState.password=r,e.globalState.instance=o,e.history.push("/dashboard")),console.log("Authenticated",a)}),(function(e){c(!1),console.log(e)}))}catch(a){console.log(a)}case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.globalState.isLoggedIn()&&e.history.push("/dashboard"),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("form",{className:t.container,style:{justifyContent:"center",alignItems:"center"},noValidate:!0,autoComplete:"off"},r.a.createElement(C.a,{className:t.paper,style:{width:"500px"}},r.a.createElement(D.a,{container:!0,spacing:1,direction:"column"},r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(L.a,{style:{width:"100%"},id:"username",label:"Username",className:t.textField,type:"text",name:"username",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(L.a,{style:{width:"100%"},id:"password",label:"Password",className:t.textField,type:"password",name:"pwd",margin:"normal",variant:"outlined"})),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(L.a,{style:{width:"100%"},id:"instanceId",defaultValue:"dev78916",label:"Instance name",className:t.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(D.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement(R.a,{style:{width:"100%",margin:"0"},disabled:i?"disabled":"",variant:"contained",color:"primary",size:"large",className:t.button,onClick:function(e){return l.apply(this,arguments)}},"Login"),i?r.a.createElement(_.a,{variant:"query",style:{width:"100%",margin:"0"}}):"")))))}var T=function(e){return r.a.createElement(k.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(B,Object.assign({},t,{globalState:e.globalState}))}}),r.a.createElement(N.a,{path:"/dashboard",render:function(t){return r.a.createElement(P,Object.assign({},t,{globalState:e.globalState}))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(26),W=new function e(t){var a=this;Object(A.a)(this,e),this.setLoggedIn=function(e){a.loggedIn=e},this.isLoggedIn=function(){return a.loggedIn},this.loggedIn=t,this.username=void 0,this.password=void 0,this.instance=void 0}(!1);i.a.render(r.a.createElement(T,{globalState:W}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[213,1,2]]]);
//# sourceMappingURL=main.b3136035.chunk.js.map