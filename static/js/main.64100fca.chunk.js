(this["webpackJsonpgs-snowclient-na"]=this["webpackJsonpgs-snowclient-na"]||[]).push([[0],{222:function(e,t,a){e.exports=a(338)},227:function(e,t,a){},229:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),i=(a(227),a(228),a(229),a(376)),o=a(379),s=a(156),u=a(100),d=Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},content:{flexGrow:1,padding:e.spacing(3)}}}));function m(e){var t=d();return r.a.createElement("div",{className:t.root},r.a.createElement(o.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(u.a,{variant:"h6",className:t.title},"SNOW Client"))))}var p=a(19),f=a.n(p),g=a(43),E=a(22),h=a(145),b=a.n(h),v=a(192),y=a(174),w=a(191),x=a(31),I=a(389),S=a(385),O=a(384),j=a(388),k=a(387),C=a(158),N=a(202),A=a.n(N),T=a(21),D=new function e(){Object(T.a)(this,e),this.log=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t.forEach((function(e){console.log(e)}))}},P=a(90),_=a.n(P),B=new function e(t){var a=this;return Object(T.a)(this,e),this.setLoggedIn=function(e){a.loggedIn=e},this.isLoggedIn=function(){return a.loggedIn},e.instance||(this.loggedIn=t,this.username=void 0,this.password=void 0,this.instanceId=void 0,e.instance=this),e.instance},L=new function e(){var t=this;return Object(T.a)(this,e),this.login=function(){var e=Object(g.a)(f.a.mark((function e(a,n,r){var l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.BASE="https://".concat(r,".service-now.com/api/now"),l=t.BASE+t.PATHS.LOGIN(a),e.abrupt("return",new Promise((function(e,t){var r={url:l,method:"get",auth:{username:"".concat(a),password:"".concat(n)}};_()(r).then((function(t){e(t)}),(function(e){t(e)}))})));case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.getIncidents=Object(g.a)(f.a.mark((function e(){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.BASE+t.PATHS.INCIDENTS(),e.abrupt("return",new Promise((function(e,t){var n={url:a,method:"get",auth:{username:"".concat(B.username),password:"".concat(B.password)}};_()(n).then((function(t){e(t)}),(function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)}))),this.updateIncident=function(){var e=Object(g.a)(f.a.mark((function e(a,n,r){var l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.BASE+t.PATHS.UPDATE_INCIDENT(r),e.abrupt("return",new Promise((function(e,t){var r={url:l,method:"put",auth:{username:"".concat(B.username),password:"".concat(B.password)},data:{short_description:a,description:n}};_()(r).then((function(t){e(t)}),(function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.addIncident=function(){var e=Object(g.a)(f.a.mark((function e(a,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.BASE+t.PATHS.ADD_INCIDENT(),e.abrupt("return",new Promise((function(e,t){var l={url:r,method:"post",auth:{username:"".concat(B.username),password:"".concat(B.password)},data:{short_description:a,description:n}};_()(l).then((function(t){e(t)}),(function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.deleteIncident=function(){var e=Object(g.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.BASE+t.PATHS.DELETE_INCIDENT(a),e.abrupt("return",new Promise((function(e,t){var a={url:n,method:"delete",auth:{username:"".concat(B.username),password:"".concat(B.password)}};_()(a).then((function(t){e(t)}),(function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.instance||(this.BASE=void 0,this.USER_NAME=void 0,this.PASSWORD=void 0,this.PATHS={LOGIN:function(e){return"/v2/table/sys_user?user_name=".concat(e)},INCIDENTS:function(){return"/table/incident?sysparm_limit=20&sysparm_query=active=true"},UPDATE_INCIDENT:function(e){return"/table/incident/".concat(e)},ADD_INCIDENT:function(){return"/table/incident"},DELETE_INCIDENT:function(e){return"/table/incident/".concat(e)}},e.instance=this),e.instance},F=a(63),W=a.n(F),R=a(132),H=a.n(R);function G(){var e=r.a.useState({}),t=Object(E.a)(e,2),a=t[0],l=t[1],c=r.a.useState(!1),i=Object(E.a)(c,2),o=i[0],s=i[1],d=r.a.useState(!1),m=Object(E.a)(d,2),p=m[0],N=m[1],T=r.a.useState(!1),P=Object(E.a)(T,2),_=P[0],B=P[1],F=Object(n.useState)({columns:[{title:"Number",field:"number"},{title:"Opened",field:"opened_at"},{title:"Short Description",field:"short_description"}],data:[]}),R=Object(E.a)(F,2),G=R[0],U=R[1],V=function(){s(!0)},q=function(){s(!1)},J=function(){N(!1)},M=function(){B(!1)},Y=function(){var e=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.getIncidents();case 3:t=e.sent,U(Object.assign(t.data.result,{},{columns:G.columns,data:t.data.result})),D.log("Loaded",t.data.result),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),D.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Y()}),[]);var z=function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,l,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=document.getElementById("sdesc").value,n=document.getElementById("desc").value,e.next=5,L.updateIncident(t,n,a.sys_id);case 5:(l=e.sent)&&200===l.status?(c=G.data.map((function(e){return e.sys_id===a.sys_id?l.data.result:e})),D.log("Updated",l),U(Object.assign(G.data,{},{columns:G.columns,data:c})),J(),x.b.error(r.a.createElement("span",null,r.a.createElement(H.a,null)," Successfully updated the incident."))):(J(),x.b.error(r.a.createElement("span",null,r.a.createElement(W.a,null)," Error updating the incident. Please try again later."))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),x.b.error(r.a.createElement("span",null,r.a.createElement(W.a,null)," Error updating the record. Please try again later.")),D.log("Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(g.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.deleteIncident(a.sys_id);case 3:(t=e.sent)&&204===t.status?(n=G.data.filter((function(e){return e.sys_id!==a.sys_id})),U(Object.assign(G.data,{},{columns:G.columns,data:n})),M(),x.b.error(r.a.createElement("span",null,r.a.createElement(H.a,null)," Successfully deleted the incident.")),D.log("Deleted",t.data)):(M(),x.b.error(r.a.createElement("span",null,r.a.createElement(W.a,null)," Error deleting the incident. Please try again later."))),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),M(),x.b.error(r.a.createElement("span",null,r.a.createElement(W.a,null)," Error deleting the incident. Please try again later.")),D.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(g.a)(f.a.mark((function e(){var t,a,n,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=document.getElementById("asdesc").value,a=document.getElementById("adesc").value,e.next=5,L.addIncident(t,a);case 5:(n=e.sent)&&201===n.status?((l=G.data).unshift(n.data.result),U(Object.assign(G.data,{},{columns:G.columns,data:l})),q(),x.b.error(r.a.createElement("span",null,r.a.createElement(H.a,null)," Successfully updated the incident. width number ",n.data.result.number)),D.log("Added",n.data.result)):(q(),x.b.error(r.a.createElement("span",null,r.a.createElement(W.a,null)," Error adding the incident. Please try again later."))),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),q(),x.b.error(r.a.createElement("span",null,r.a.createElement(W.a,null)," Error adding the incident. Please try again later.")),D.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{style:{margin:"16px"},title:"Incidents",columns:G.columns,data:G.data,actions:[{icon:"edit",tooltip:"Edit incident",onClick:function(e,t){l(Object.assign(a,{},t)),N(!0)}},{icon:"delete",tooltip:"Delete incident",onClick:function(e,t){l(Object.assign(a,{},t)),B(!0)}}],detailPanel:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},label:e.number,clickable:!0,color:"primary"}),r.a.createElement(v.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},label:"System Id: "+e.sys_id,clickable:!0,color:"secondary"}),r.a.createElement(u.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},variant:"h6"},"".concat(e.made_sla?"Yes":"No"," SLA was made."),r.a.createElement("br",null)),r.a.createElement(u.a,{style:{margin:"16px"},variant:"h6"},"".concat(e.description)))},onRowClick:function(e,t,a){return a()},options:{actionsColumnIndex:-1},components:{Toolbar:function(e){return r.a.createElement("div",null,r.a.createElement(h.MTableToolbar,e),r.a.createElement(C.a,{"aria-label":"Add",onClick:V,style:{backgroundColor:"#1976d2",color:"white"},tooltip:"Add incident"},r.a.createElement(A.a,null)))}}}),r.a.createElement(I.a,{open:p,onClose:J,"aria-labelledby":"form-dialog-title"},r.a.createElement(k.a,{id:"form-dialog-title"},"Edit: ",a?a.number:""),r.a.createElement(O.a,null,r.a.createElement(j.a,null,"Please modify the following details."),r.a.createElement(w.a,{defaultValue:a?a.short_description:"",autoFocus:!0,margin:"dense",id:"sdesc",label:"Short Description",type:"text",fullWidth:!0,variant:"outlined"}),r.a.createElement(w.a,{defaultValue:a?a.description:"",style:{marginTop:"16px"},autoFocus:!0,margin:"dense",id:"desc",label:"Description",type:"text",fullWidth:!0,multiline:!0,variant:"outlined"})),r.a.createElement(S.a,null,r.a.createElement(y.a,{onClick:J,color:"primary"},"Cancel"),r.a.createElement(y.a,{onClick:z,color:"primary"},"Update"))),r.a.createElement(I.a,{open:_,onClose:M,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(k.a,{id:"alert-dialog-title"},"Delete Incident?"),r.a.createElement(O.a,null,r.a.createElement(j.a,{id:"alert-dialog-description"},"Are you sure you want to delete this incident?")),r.a.createElement(S.a,null,r.a.createElement(y.a,{onClick:M,color:"primary"},"No"),r.a.createElement(y.a,{onClick:$,color:"primary",autoFocus:!0},"Yes"))),r.a.createElement(I.a,{open:o,onClose:q,"aria-labelledby":"form-dialog-title"},r.a.createElement(k.a,{id:"form-dialog-title"},"Add incident"),r.a.createElement(O.a,null,r.a.createElement(j.a,null,"Please fill the following details."),r.a.createElement(w.a,{autoFocus:!0,margin:"dense",id:"asdesc",label:"Short Description",type:"text",fullWidth:!0,variant:"outlined"}),r.a.createElement(w.a,{style:{marginTop:"16px"},autoFocus:!0,margin:"dense",id:"adesc",label:"Description",type:"text",fullWidth:!0,multiline:!0,variant:"outlined"})),r.a.createElement(S.a,null,r.a.createElement(y.a,{onClick:q,color:"primary"},"Cancel"),r.a.createElement(y.a,{onClick:K,color:"primary"},"Add"))))}function U(e){return e.globalState.isLoggedIn()||e.history.push("/"),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(G,e))}var V=a(142),q=a(73),J=a(117),M=a(386),Y=a(178),z=Object(i.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",margin:"16px"},input:{margin:e.spacing(1)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},button:{margin:e.spacing(1)}}}));function $(e){var t=z(),a=Object(n.useState)(!1),l=Object(E.a)(a,2),c=l[0],i=l[1];function o(){return(o=Object(g.a)(f.a.mark((function t(a){var n,l,c,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),i(!0),n=document.getElementById("username").value,l=document.getElementById("password").value,c=document.getElementById("instanceId").value,t.prev=5,t.next=8,L.login(n,l,c);case 8:200===(o=t.sent).status&&(e.globalState.setLoggedIn(!0),e.globalState.username=n,e.globalState.password=l,e.globalState.instanceId=c,x.b.success(r.a.createElement("div",null,"Logged in!")),i(!1),e.history.push("/dashboard")),D.log("Authenticated",o),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(5),x.b.error(r.a.createElement("span",null,r.a.createElement(W.a,null)," Login failed!!")),i(!1),D.log("Error",t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,13]])})))).apply(this,arguments)}return e.globalState.isLoggedIn()&&e.history.push("/dashboard"),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("form",{className:t.container,style:{justifyContent:"center",alignItems:"center"},noValidate:!0,autoComplete:"off"},r.a.createElement(J.a,{className:t.paper,style:{width:"500px"}},r.a.createElement(M.a,{container:!0,spacing:1,direction:"column"},r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(w.a,{style:{width:"100%"},id:"username",label:"Username",className:t.textField,type:"text",name:"username",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(w.a,{style:{width:"100%"},id:"password",label:"Password",className:t.textField,type:"password",name:"pwd",margin:"normal",variant:"outlined"})),r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(w.a,{style:{width:"100%"},id:"instanceId",defaultValue:"dev78916",label:"Instance name",className:t.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(M.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement(y.a,{style:{width:"100%",margin:"0"},disabled:!!c,variant:"contained",color:"primary",size:"large",className:t.button,onClick:function(e){return o.apply(this,arguments)}},"Login"),c?r.a.createElement(Y.a,{variant:"query",style:{width:"100%",margin:"0"}}):"")))))}a(336);var K=function(e){return r.a.createElement(V.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(q.c,null,r.a.createElement(q.a,{path:"/",exact:!0,render:function(t){return r.a.createElement($,Object.assign({},t,{globalState:e.globalState}))}}),r.a.createElement(q.a,{path:"/dashboard",render:function(t){return r.a.createElement(U,Object.assign({},t,{globalState:e.globalState}))}})),r.a.createElement(x.a,{position:x.b.POSITION.TOP_RIGHT,autoClose:5e3}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(K,{globalState:B}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[222,1,2]]]);
//# sourceMappingURL=main.64100fca.chunk.js.map