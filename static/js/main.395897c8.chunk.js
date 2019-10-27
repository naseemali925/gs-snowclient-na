(this["webpackJsonpgs-snowclient-na"]=this["webpackJsonpgs-snowclient-na"]||[]).push([[0],{219:function(e,t,a){e.exports=a(336)},224:function(e,t,a){},226:function(e,t,a){},336:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),i=a.n(l),o=(a(224),a(225),a(226),a(374)),c=a(377),s=a(152),u=a(97),m=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},content:{flexGrow:1,padding:e.spacing(3)}}}));function d(e){var t=m();return r.a.createElement("div",{className:t.root},r.a.createElement(c.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(u.a,{variant:"h6",className:t.title},"SNOW Client"))))}var p=a(71),g=a.n(p),f=a(98),h=a(21),b=a(191),E=a.n(b),v=a(101),y=a.n(v),w=a(188),x=a(170),O=a(187),I=a(69),S=a(387),j=a(383),k=a(382),C=a(386),N=a(385);function _(e){var t=e.globalState,a=t.username,l=t.password,i=t.instance,o=r.a.useState({}),c=Object(h.a)(o,2),s=c[0],m=c[1],d=r.a.useState(!1),p=Object(h.a)(d,2),b=p[0],v=p[1],_=function(){v(!1)},L=r.a.useState(!1),F=Object(h.a)(L,2),B=(F[0],F[1]),T=Object(n.useState)({columns:[{title:"Number",field:"number"},{title:"Opened",field:"opened_at"},{title:"Short Description",field:"short_description"}],data:[]}),R=Object(h.a)(T,2),W=R[0],D=R[1],P=function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("https://".concat(i,".service-now.com/api/now/table/incident?sysparm_limit=20&sysparm_query=active=true"),{auth:{username:a,password:l}});case 3:t=e.sent,D(Object.assign(t.data.result,{},{columns:W.columns,data:t.data.result})),console.log(t.status,t.data.result),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){P()}),[]);var A=function(){var e=Object(f.a)(g.a.mark((function e(){var t,a,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=document.getElementById("sdesc").value,a=document.getElementById("desc").value,e.next=5,y.a.put("https://".concat(i,".service-now.com/api/now/table/incident/").concat(s.sys_id),{short_description:t,description:a});case 5:(n=e.sent)&&200===n.status?(r=W.data.map((function(e){return e.sys_id===s.sys_id?n.data.result:e})),D(Object.assign(W.data,{},{columns:W.columns,data:r}))):I.b.error("Some Error Occured While updated the incident"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),I.b.error("Error Updating The Record. Please try again later.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{style:{margin:"16px"},title:"Incidents",columns:W.columns,data:W.data,actions:[{icon:"edit",tooltip:"Edit incident",onClick:function(e,t){m(Object.assign(s,{},t)),v(!0),console.log("ToEdit",s)}},{icon:"delete",tooltip:"Delete incident",onClick:function(e,t){m(Object.assign(s,{},t)),B(!0)}}],detailPanel:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},label:e.number,clickable:!0,color:"primary"}),r.a.createElement(w.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},label:"System Id: "+e.sys_id,clickable:!0,color:"secondary"}),r.a.createElement(u.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},variant:"h6"},"".concat(e.made_sla?"Yes":"No"," SLA was made."),r.a.createElement("br",null)),r.a.createElement(u.a,{style:{margin:"16px"},variant:"h6"},"".concat(e.description)))},onRowClick:function(e,t,a){return a()},options:{actionsColumnIndex:-1}}),r.a.createElement(S.a,{open:b,onClose:_,"aria-labelledby":"form-dialog-title"},r.a.createElement(N.a,{id:"form-dialog-title"},"Edit: ",s?s.number:""),r.a.createElement(k.a,null,r.a.createElement(C.a,null,"Please modify the following details."),r.a.createElement(O.a,{autoFocus:!0,margin:"dense",id:"sdesc",label:"Short Description",type:"text",fullWidth:!0,variant:"outlined"}),r.a.createElement(O.a,{autoFocus:!0,margin:"dense",id:"desc",label:"Description",type:"text",fullWidth:!0,variant:"outlined"})),r.a.createElement(j.a,null,r.a.createElement(x.a,{onClick:_,color:"primary"},"Cancel"),r.a.createElement(x.a,{onClick:A,color:"primary"},"Update"))))}function L(e){e.globalState.isLoggedIn();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(_,e))}var F=a(139),B=a(70),T=a(116),R=a(384),W=a(174),D=a(199),P=a.n(D),A=Object(o.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",margin:"16px"},input:{margin:e.spacing(1)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},button:{margin:e.spacing(1)}}}));function G(e){var t=A(),a=Object(n.useState)(!1),l=Object(h.a)(a,2),i=l[0],o=l[1];function c(){return(c=Object(f.a)(g.a.mark((function t(a){var n,l,i,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),o(!0),n=document.getElementById("username").value,l=document.getElementById("password").value,i=document.getElementById("instanceId").value;try{c={url:"https://".concat(i,".service-now.com/api/now/v2/table/sys_user?user_name=").concat(n),method:"get",auth:{username:"".concat(n),password:"".concat(l)}},y()(c).then((function(t){o(!1);var a={raw:t,status:t.status};200===t.status&&(e.globalState.setLoggedIn(!0),e.globalState.username=n,e.globalState.password=l,e.globalState.instance=i,e.history.push("/dashboard")),console.log("Authenticated",a)}),(function(e){I.b.error(r.a.createElement("div",null,r.a.createElement(P.a,null)," Login failed!!")),o(!1),console.log(e)}))}catch(a){console.log(a)}case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.globalState.isLoggedIn()&&e.history.push("/dashboard"),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement("form",{className:t.container,style:{justifyContent:"center",alignItems:"center"},noValidate:!0,autoComplete:"off"},r.a.createElement(T.a,{className:t.paper,style:{width:"500px"}},r.a.createElement(R.a,{container:!0,spacing:1,direction:"column"},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(O.a,{style:{width:"100%"},id:"username",label:"Username",className:t.textField,type:"text",name:"username",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(O.a,{style:{width:"100%"},id:"password",label:"Password",className:t.textField,type:"password",name:"pwd",margin:"normal",variant:"outlined"})),r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(O.a,{style:{width:"100%"},id:"instanceId",defaultValue:"dev78916",label:"Instance name",className:t.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(R.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement(x.a,{style:{width:"100%",margin:"0"},disabled:!!i,variant:"contained",color:"primary",size:"large",className:t.button,onClick:function(e){return c.apply(this,arguments)}},"Login"),i?r.a.createElement(W.a,{variant:"query",style:{width:"100%",margin:"0"}}):"")))))}a(334);var U=function(e){return r.a.createElement(F.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(B.c,null,r.a.createElement(B.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(G,Object.assign({},t,{globalState:e.globalState}))}}),r.a.createElement(B.a,{path:"/dashboard",render:function(t){return r.a.createElement(L,Object.assign({},t,{globalState:e.globalState}))}})),r.a.createElement(I.a,{position:I.b.POSITION.TOP_RIGHT,autoClose:5e3}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(27),J=new function e(t){var a=this;Object(q.a)(this,e),this.setLoggedIn=function(e){a.loggedIn=e},this.isLoggedIn=function(){return a.loggedIn},this.loggedIn=t,this.username=void 0,this.password=void 0,this.instance=void 0}(!1);i.a.render(r.a.createElement(U,{globalState:J}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[219,1,2]]]);
//# sourceMappingURL=main.395897c8.chunk.js.map