(this["webpackJsonpgs-snowclient-na"]=this["webpackJsonpgs-snowclient-na"]||[]).push([[0],{211:function(e,t,a){e.exports=a(325)},216:function(e,t,a){},218:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=(a(216),a(217),a(218),a(362)),i=a(365),s=a(149),u=a(135),m=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},content:{flexGrow:1,padding:e.spacing(3)}}}));function d(e){var t=m();return r.a.createElement("div",{className:t.root},r.a.createElement(i.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(u.a,{variant:"h6",className:t.title},"SNOW Client"))))}var p=a(10),g=a(43),f=a(69),b=a.n(f),h=a(92),w=a(39),v=a(185),y=a.n(v),E=a(121),O=a.n(E),x=a(182);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function S(){var e=Object(n.useState)({columns:[{title:"Number",field:"number"},{title:"Opened",field:"opened_at"},{title:"Short Description",field:"short_description"}],data:[]}),t=Object(w.a)(e,2),a=t[0],o=t[1],c=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://dev78916.service-now.com/api/now/table/incident?sysparm_limit=10",{auth:{username:"admin",password:"@Jc403904y"}});case 3:t=e.sent,o(Object.assign(t.data.result,{},{columns:a.columns,data:t.data.result})),console.log(t.status,t.data.result),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){c()}),[]);return r.a.createElement(y.a,{style:{margin:"16px"},title:"Incidents",columns:a.columns,data:a.data,detailPanel:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{label:e.number,clickable:!0,color:"primary"}),r.a.createElement(u.a,{style:{padding:"16px"},variant:"h5",component:"h5"},"".concat(e.number," was opened at ").concat(e.opened_at)),r.a.createElement(u.a,{style:{padding:"16px"},variant:"h6",component:"h6"},"".concat(e.description)))},onRowClick:function(e,t,a){return a()},editable:{onRowAdd:function(e){return new Promise((function(t){setTimeout((function(){t();var n=Object(g.a)(a.data);n.push(e),o(I({},a,{data:n}))}),600)}))},onRowUpdate:function(e,t){return new Promise((function(n){setTimeout((function(){n();var r=Object(g.a)(a.data);r[r.indexOf(t)]=e,o(I({},a,{data:r}))}),600)}))},onRowDelete:function(e){return new Promise((function(t){setTimeout((function(){t();var n=Object(g.a)(a.data);n.splice(n.indexOf(e),1),o(I({},a,{data:n}))}),600)}))}}})}function P(e){return e.globalState.isLoggedIn()||e.history.push("/"),console.log("Logged In = "+e.globalState.isLoggedIn),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(S,null))}var k=a(136),N=a(68),C=a(181),L=a(112),D=a(370),F=a(167),B=Object(l.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",margin:"16px"},input:{margin:e.spacing(1)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},button:{margin:e.spacing(1)}}}));function _(e){var t=B();function a(){return(a=Object(h.a)(b.a.mark((function t(a){var n,r,o,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),n=document.getElementById("username").value,r=document.getElementById("password").value,o=document.getElementById("instanceId").value;try{c={url:"https://".concat(o,".service-now.com/api/now/v2/table/sys_user?user_name=").concat(n),method:"get",auth:{username:"".concat(n),password:"".concat(r)}},O()(c).then((function(t){var a={raw:t,status:t.status};200===t.status&&(e.globalState.setLoggedIn(!0),e.history.push("/dashboard")),console.log("Authenticated",a)}),(function(e){console.log(e)}))}catch(a){console.log(a)}case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.globalState.isLoggedIn()&&e.history.push("/dashboard"),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("form",{className:t.container,style:{justifyContent:"center",alignItems:"center"},noValidate:!0,autoComplete:"off"},r.a.createElement(L.a,{className:t.paper,style:{width:"500px"}},r.a.createElement(D.a,{container:!0,spacing:1,direction:"column"},r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(C.a,{style:{width:"100%"},id:"username",label:"Username",className:t.textField,type:"text",name:"username",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(C.a,{style:{width:"100%"},id:"password",label:"Password",className:t.textField,type:"password",name:"pwd",margin:"normal",variant:"outlined"})),r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(C.a,{style:{width:"100%"},id:"instanceId",defaultValue:"dev78916",label:"Instance name",className:t.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(D.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(F.a,{style:{width:"100%",margin:"0"},variant:"contained",color:"primary",size:"large",className:t.button,onClick:function(e){return a.apply(this,arguments)}},"Login"))))))}var R=function(e){return console.log(e.globalState),r.a.createElement(k.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(_,Object.assign({},t,{globalState:e.globalState}))}}),r.a.createElement(N.a,{path:"/dashboard",render:function(t){return r.a.createElement(P,Object.assign({},t,{globalState:e.globalState}))}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(26),W=new function e(t){var a=this;Object(A.a)(this,e),this.setLoggedIn=function(e){a.loggedIn=e},this.isLoggedIn=function(){return a.loggedIn},this.loggedIn=t}(!1);c.a.render(r.a.createElement(R,{globalState:W}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[211,1,2]]]);
//# sourceMappingURL=main.e402145f.chunk.js.map