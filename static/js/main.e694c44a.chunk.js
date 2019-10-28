(this["webpackJsonpgs-snowclient-na"]=this["webpackJsonpgs-snowclient-na"]||[]).push([[0],{221:function(e,t,a){e.exports=a(337)},226:function(e,t,a){},228:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),i=a.n(l),c=(a(226),a(227),a(228),a(375)),o=a(378),s=a(153),u=a(99),d=Object(c.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},content:{flexGrow:1,padding:e.spacing(3)}}}));function m(e){var t=d();return r.a.createElement("div",{className:t.root},r.a.createElement(o.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(u.a,{variant:"h6",className:t.title},"SNOW Client"))))}var p=a(44),g=a.n(p),f=a(79),h=a(20),b=a(142),E=a.n(b),y=a(81),v=a.n(y),w=a(190),x=a(171),O=a(189),S=a(33),I=a(388),j=a(384),k=a(383),C=a(387),_=a(386),N=a(155),F=a(200),T=a.n(F);function L(e){var t=e.globalState,a=t.username,l=t.password,i=t.instance,c=r.a.useState({}),o=Object(h.a)(c,2),s=o[0],d=o[1],m=r.a.useState(!1),p=Object(h.a)(m,2),y=p[0],F=p[1],L=function(){F(!0)},B=function(){F(!1)},A=r.a.useState(!1),D=Object(h.a)(A,2),P=D[0],W=D[1],R=function(){W(!1)},G=r.a.useState(!1),V=Object(h.a)(G,2),U=V[0],q=V[1],J=function(){q(!1)},Y=Object(n.useState)({columns:[{title:"Number",field:"number"},{title:"Opened",field:"opened_at"},{title:"Short Description",field:"short_description"}],data:[]}),z=Object(h.a)(Y,2),H=z[0],M=z[1],$=function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://".concat(i,".service-now.com/api/now/table/incident?sysparm_limit=20&sysparm_query=active=true"),{auth:{username:a,password:l}});case 3:t=e.sent,M(Object.assign(t.data.result,{},{columns:H.columns,data:t.data.result})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){$()}),[]);var K=function(){var e=Object(f.a)(g.a.mark((function e(){var t,n,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=document.getElementById("sdesc").value,n=document.getElementById("desc").value,e.next=5,v.a.put("https://".concat(i,".service-now.com/api/now/table/incident/").concat(s.sys_id),{short_description:t,description:n},{auth:{username:a,password:l}});case 5:(r=e.sent)&&200===r.status?(c=H.data.map((function(e){return e.sys_id===s.sys_id?r.data.result:e})),M(Object.assign(H.data,{},{columns:H.columns,data:c})),R(),S.b.success("Incident successfuly updated.")):(R(),S.b.error("Some Error Occured While updated the incident")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),S.b.error("Error Updating The Record. Please try again later.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(f.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("https://".concat(i,".service-now.com/api/now/table/incident/").concat(s.sys_id),{auth:{username:a,password:l}},{});case 3:(t=e.sent)&&204===t.status?(n=H.data.filter((function(e){return e.sys_id!==s.sys_id})),M(Object.assign(H.data,{},{columns:H.columns,data:n})),J(),S.b.success("Successfully deleted the incident.")):(J(),S.b.error("Some error occured while deleting the incident!")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),J(),S.b.error("Error deleting the incident. Please try again later.");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(f.a)(g.a.mark((function e(){var t,n,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=document.getElementById("asdesc").value,n=document.getElementById("adesc").value,e.next=5,v.a.post("https://".concat(i,".service-now.com/api/now/table/incident"),{short_description:t,description:n},{auth:{username:a,password:l}});case 5:(r=e.sent)&&201===r.status?((c=H.data).unshift(r.data.result),M(Object.assign(H.data,{},{columns:H.columns,data:c})),B(),S.b.success("Successfully added the incident with number ".concat(r.data.result.number," and sys_id ").concat(r.data.result.sys_id))):(B(),S.b.error("Some error occured while adding the incident!")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),B(),S.b.error("Error adding the incident. Please try again later.");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{style:{margin:"16px"},title:"Incidents",columns:H.columns,data:H.data,actions:[{icon:"edit",tooltip:"Edit incident",onClick:function(e,t){d(Object.assign(s,{},t)),W(!0)}},{icon:"delete",tooltip:"Delete incident",onClick:function(e,t){d(Object.assign(s,{},t)),q(!0)}}],detailPanel:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},label:e.number,clickable:!0,color:"primary"}),r.a.createElement(w.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},label:"System Id: "+e.sys_id,clickable:!0,color:"secondary"}),r.a.createElement(u.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},variant:"h6"},"".concat(e.made_sla?"Yes":"No"," SLA was made."),r.a.createElement("br",null)),r.a.createElement(u.a,{style:{margin:"16px"},variant:"h6"},"".concat(e.description)))},onRowClick:function(e,t,a){return a()},options:{actionsColumnIndex:-1},components:{Toolbar:function(e){return r.a.createElement("div",null,r.a.createElement(b.MTableToolbar,e),r.a.createElement(N.a,{"aria-label":"Add",onClick:L,style:{backgroundColor:"#1976d2",color:"white"},tooltip:"Add incident"},r.a.createElement(T.a,null)))}}}),r.a.createElement(I.a,{open:P,onClose:R,"aria-labelledby":"form-dialog-title"},r.a.createElement(_.a,{id:"form-dialog-title"},"Edit: ",s?s.number:""),r.a.createElement(k.a,null,r.a.createElement(C.a,null,"Please modify the following details."),r.a.createElement(O.a,{defaultValue:s?s.short_description:"",autoFocus:!0,margin:"dense",id:"sdesc",label:"Short Description",type:"text",fullWidth:!0,variant:"outlined"}),r.a.createElement(O.a,{defaultValue:s?s.description:"",style:{marginTop:"16px"},autoFocus:!0,margin:"dense",id:"desc",label:"Description",type:"text",fullWidth:!0,multiline:!0,variant:"outlined"})),r.a.createElement(j.a,null,r.a.createElement(x.a,{onClick:R,color:"primary"},"Cancel"),r.a.createElement(x.a,{onClick:K,color:"primary"},"Update"))),r.a.createElement(I.a,{open:U,onClose:J,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(_.a,{id:"alert-dialog-title"},"Delete Incident?"),r.a.createElement(k.a,null,r.a.createElement(C.a,{id:"alert-dialog-description"},"Are you sure you want to delete this incident?")),r.a.createElement(j.a,null,r.a.createElement(x.a,{onClick:J,color:"primary"},"No"),r.a.createElement(x.a,{onClick:Q,color:"primary",autoFocus:!0},"Yes"))),r.a.createElement(I.a,{open:y,onClose:B,"aria-labelledby":"form-dialog-title"},r.a.createElement(_.a,{id:"form-dialog-title"},"Add incident"),r.a.createElement(k.a,null,r.a.createElement(C.a,null,"Please fill the following details."),r.a.createElement(O.a,{autoFocus:!0,margin:"dense",id:"asdesc",label:"Short Description",type:"text",fullWidth:!0,variant:"outlined"}),r.a.createElement(O.a,{style:{marginTop:"16px"},autoFocus:!0,margin:"dense",id:"adesc",label:"Description",type:"text",fullWidth:!0,multiline:!0,variant:"outlined"})),r.a.createElement(j.a,null,r.a.createElement(x.a,{onClick:B,color:"primary"},"Cancel"),r.a.createElement(x.a,{onClick:X,color:"primary"},"Add"))))}function B(e){return e.globalState.isLoggedIn()||e.history.push("/"),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(L,e))}var A=a(139),D=a(71),P=a(116),W=a(385),R=a(175),G=a(201),V=a.n(G),U=Object(c.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",margin:"16px"},input:{margin:e.spacing(1)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},button:{margin:e.spacing(1)}}}));function q(e){var t=U(),a=Object(n.useState)(!1),l=Object(h.a)(a,2),i=l[0],c=l[1];function o(){return(o=Object(f.a)(g.a.mark((function t(a){var n,l,i,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),c(!0),n=document.getElementById("username").value,l=document.getElementById("password").value,i=document.getElementById("instanceId").value;try{o={url:"https://".concat(i,".service-now.com/api/now/v2/table/sys_user?user_name=").concat(n),method:"get",auth:{username:"".concat(n),password:"".concat(l)}},v()(o).then((function(t){c(!1);var a={raw:t,status:t.status};200===t.status&&(e.globalState.setLoggedIn(!0),e.globalState.username=n,e.globalState.password=l,e.globalState.instance=i,e.history.push("/dashboard")),console.log("Authenticated",a)}),(function(e){S.b.error(r.a.createElement("div",null,r.a.createElement(V.a,null)," Login failed!!")),c(!1),console.log(e)}))}catch(a){console.log(a)}case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return e.globalState.isLoggedIn()&&e.history.push("/dashboard"),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("form",{className:t.container,style:{justifyContent:"center",alignItems:"center"},noValidate:!0,autoComplete:"off"},r.a.createElement(P.a,{className:t.paper,style:{width:"500px"}},r.a.createElement(W.a,{container:!0,spacing:1,direction:"column"},r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(O.a,{style:{width:"100%"},id:"username",label:"Username",className:t.textField,type:"text",name:"username",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(O.a,{style:{width:"100%"},id:"password",label:"Password",className:t.textField,type:"password",name:"pwd",margin:"normal",variant:"outlined"})),r.a.createElement(W.a,{item:!0,xs:12},r.a.createElement(O.a,{style:{width:"100%"},id:"instanceId",defaultValue:"dev78916",label:"Instance name",className:t.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(W.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement(x.a,{style:{width:"100%",margin:"0"},disabled:!!i,variant:"contained",color:"primary",size:"large",className:t.button,onClick:function(e){return o.apply(this,arguments)}},"Login"),i?r.a.createElement(R.a,{variant:"query",style:{width:"100%",margin:"0"}}):"")))))}a(335);var J=function(e){return r.a.createElement(A.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(q,Object.assign({},t,{globalState:e.globalState}))}}),r.a.createElement(D.a,{path:"/dashboard",render:function(t){return r.a.createElement(B,Object.assign({},t,{globalState:e.globalState}))}})),r.a.createElement(S.a,{position:S.b.POSITION.TOP_RIGHT,autoClose:5e3}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(28),z=new function e(t){var a=this;Object(Y.a)(this,e),this.setLoggedIn=function(e){a.loggedIn=e},this.isLoggedIn=function(){return a.loggedIn},this.loggedIn=t,this.username=void 0,this.password=void 0,this.instance=void 0}(!1);i.a.render(r.a.createElement(J,{globalState:z}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[221,1,2]]]);
//# sourceMappingURL=main.e694c44a.chunk.js.map