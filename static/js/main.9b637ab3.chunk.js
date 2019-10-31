(this["webpackJsonpgs-snowclient-na"]=this["webpackJsonpgs-snowclient-na"]||[]).push([[0],{222:function(e,t,a){e.exports=a(338)},227:function(e,t,a){},229:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),i=(a(227),a(228),a(229),a(202)),o=a(73),s=a(23),u=a(19),d=a.n(u),m=a(43),p=a(22),f=a(190),E=a(117),g=a(380),h=a(167),b=a(168),y=a(376),v=a(46),w=a.n(v),x=a(379),I=a(155),O=a(100),k=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},content:{flexGrow:1,padding:e.spacing(3)}}}));function S(){var e=k();return r.a.createElement("div",{className:e.root},r.a.createElement(x.a,{position:"static"},r.a.createElement(I.a,null,r.a.createElement(O.a,{variant:"h6",className:e.title},"SNOW Client"))))}var C=a(21),N=a(90),j=a.n(N),A=new function e(t){var a=this;return Object(C.a)(this,e),this.setLoggedIn=function(e){a.loggedIn=e},this.isLoggedIn=function(){return a.loggedIn},e.instance||(this.loggedIn=t,this.username=void 0,this.password=void 0,this.instanceId=void 0,e.instance=this),e.instance},P=new function e(){var t=this;return Object(C.a)(this,e),this.login=function(){var e=Object(m.a)(d.a.mark((function e(a,n,r){var l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.BASE="https://".concat(r,".service-now.com/api/now"),l=t.BASE+t.PATHS.LOGIN(a),e.abrupt("return",new Promise((function(e,t){var r={url:l,method:"get",auth:{username:"".concat(a),password:"".concat(n)}};j()(r).then((function(t){e(t)}),(function(e){t(e)}))})));case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.getIncidents=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.BASE+t.PATHS.INCIDENTS(),e.abrupt("return",new Promise((function(e,t){var n={url:a,method:"get",auth:{username:"".concat(A.username),password:"".concat(A.password)}};j()(n).then((function(t){e(t)}),(function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)}))),this.updateIncident=function(){var e=Object(m.a)(d.a.mark((function e(a,n,r){var l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.BASE+t.PATHS.UPDATE_INCIDENT(r),e.abrupt("return",new Promise((function(e,t){var r={url:l,method:"put",auth:{username:"".concat(A.username),password:"".concat(A.password)},data:{short_description:a,description:n}};j()(r).then((function(t){e(t)}),(function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.addIncident=function(){var e=Object(m.a)(d.a.mark((function e(a,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.BASE+t.PATHS.ADD_INCIDENT(),e.abrupt("return",new Promise((function(e,t){var l={url:r,method:"post",auth:{username:"".concat(A.username),password:"".concat(A.password)},data:{short_description:a,description:n}};j()(l).then((function(t){e(t)}),(function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.deleteIncident=function(){var e=Object(m.a)(d.a.mark((function e(a){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.BASE+t.PATHS.DELETE_INCIDENT(a),e.abrupt("return",new Promise((function(e,t){var a={url:n,method:"delete",auth:{username:"".concat(A.username),password:"".concat(A.password)}};j()(a).then((function(t){e(t)}),(function(e){t(e)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.instance||(this.BASE=void 0,this.USER_NAME=void 0,this.PASSWORD=void 0,this.PATHS={LOGIN:function(e){return"/v2/table/sys_user?user_name=".concat(e)},INCIDENTS:function(){return"/table/incident?sysparm_limit=20&sysparm_query=active=true"},UPDATE_INCIDENT:function(e){return"/table/incident/".concat(e)},ADD_INCIDENT:function(){return"/table/incident"},DELETE_INCIDENT:function(e){return"/table/incident/".concat(e)}},e.instance=this),e.instance},T=new function e(){Object(C.a)(this,e),this.log=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t.forEach((function(){}))}},D=Object(y.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",margin:"16px"},input:{margin:e.spacing(1)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},button:{margin:e.spacing(1)}}}));function _(e){var t=D(),a=Object(n.useState)(!1),l=Object(p.a)(a,2),c=l[0],i=l[1];function o(){return(o=Object(m.a)(d.a.mark((function t(a){var n,l,c,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),i(!0),n=document.getElementById("username").value,l=document.getElementById("password").value,c=document.getElementById("instanceId").value,n&&l&&c){t.next=9;break}return s.b.error(r.a.createElement("span",null,r.a.createElement(w.a,null)," One or more field(s) are empty. Please try again.")),i(!1),t.abrupt("return");case 9:return t.prev=9,t.next=12,P.login(n,l,c);case 12:200===(o=t.sent).status&&(A.setLoggedIn(!0),A.username=n,A.password=l,A.instanceId=c,s.b.success(r.a.createElement("span",null,"Logged in!")),i(!1),e.history.push("/dashboard")),T.log("Authenticated",o),t.next=22;break;case 17:t.prev=17,t.t0=t.catch(9),s.b.error(r.a.createElement("span",null,r.a.createElement(w.a,null)," Login failed!!")),i(!1),T.log("Error",t.t0);case 22:case"end":return t.stop()}}),t,null,[[9,17]])})))).apply(this,arguments)}return A.isLoggedIn()&&e.history.push("/dashboard"),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement("form",{className:t.container,style:{justifyContent:"center",alignItems:"center"},noValidate:!0,autoComplete:"off"},r.a.createElement(E.a,{className:t.paper,style:{width:"500px"}},r.a.createElement(g.a,{container:!0,spacing:1,direction:"column"},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(f.a,{style:{width:"100%"},id:"username",label:"Username",className:t.textField,type:"text",name:"username",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(f.a,{style:{width:"100%"},id:"password",label:"Password",className:t.textField,type:"password",name:"pwd",margin:"normal",variant:"outlined"})),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(f.a,{style:{width:"100%"},id:"instanceId",defaultValue:"dev78916",label:"Instance name",className:t.textField,type:"email",name:"email",autoComplete:"email",margin:"normal",variant:"outlined"})),r.a.createElement(g.a,{item:!0,xs:12,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement(h.a,{style:{width:"100%",margin:"0"},disabled:c,variant:"contained",color:"primary",size:"large",className:t.button,onClick:function(e){return o.apply(this,arguments)}},"Login"),c?r.a.createElement(b.a,{variant:"query",style:{width:"100%",margin:"0"}}):"")))))}a(253);var B=a(144),L=a.n(B),F=a(191),W=a(389),R=a(386),H=a(385),G=a(388),U=a(387),V=a(170),q=a(201),J=a.n(q),M=a(132),Y=a.n(M);function z(){var e=r.a.useState({}),t=Object(p.a)(e,2),a=t[0],l=t[1],c=r.a.useState(!1),i=Object(p.a)(c,2),o=i[0],u=i[1],E=r.a.useState(!1),g=Object(p.a)(E,2),b=g[0],y=g[1],v=r.a.useState(!1),x=Object(p.a)(v,2),I=x[0],k=x[1],S=Object(n.useState)({columns:[{title:"Number",field:"number"},{title:"Opened",field:"opened_at"},{title:"Short Description",field:"short_description"}],data:[]}),C=Object(p.a)(S,2),N=C[0],j=C[1],A=function(){u(!0)},D=function(){u(!1)},_=function(){y(!1)},q=function(){k(!1)},M=function(){var e=Object(m.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.getIncidents();case 3:t=e.sent,j(Object.assign(t.data.result,{},{columns:N.columns,data:t.data.result})),T.log("Loaded",t.data.result),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),T.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){M()}),[]);var z=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=document.getElementById("sdesc").value,n=document.getElementById("desc").value,t&&n){e.next=6;break}return s.b.error(r.a.createElement("span",null,r.a.createElement(w.a,null)," One or more field(s) are empty. Please try again.")),e.abrupt("return");case 6:return e.next=8,P.updateIncident(t,n,a.sys_id);case 8:(l=e.sent)&&200===l.status?(c=N.data.map((function(e){return e.sys_id===a.sys_id?l.data.result:e})),T.log("Updated",l),j(Object.assign(N.data,{},{columns:N.columns,data:c})),_(),s.b.success(r.a.createElement("span",null,r.a.createElement(Y.a,null)," Successfully updated the incident."))):(_(),s.b.error(r.a.createElement("span",null,r.a.createElement(w.a,null)," Error updating the incident. Please try again later."))),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),s.b.error(r.a.createElement("span",null,r.a.createElement(w.a,null)," Error updating the record. Please try again later.")),T.log("Error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.deleteIncident(a.sys_id);case 3:(t=e.sent)&&204===t.status?(n=N.data.filter((function(e){return e.sys_id!==a.sys_id})),j(Object.assign(N.data,{},{columns:N.columns,data:n})),q(),s.b.success(r.a.createElement("span",null,r.a.createElement(Y.a,null)," Successfully deleted the incident.")),T.log("Deleted",t.data)):(q(),s.b.error(r.a.createElement("span",null,r.a.createElement(w.a,null)," Error deleting the incident. Please try again later."))),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),q(),s.b.error(r.a.createElement("span",null,r.a.createElement(w.a,null)," Error deleting the incident. Please try again later.")),T.log("Error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(m.a)(d.a.mark((function e(){var t,a,n,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=document.getElementById("asdesc").value,a=document.getElementById("adesc").value,t&&a){e.next=6;break}return s.b.error(r.a.createElement("span",null,r.a.createElement(w.a,null)," One or more field(s) are empty. Please try again.")),e.abrupt("return");case 6:return e.next=8,P.addIncident(t,a);case 8:(n=e.sent)&&201===n.status?((l=N.data).unshift(n.data.result),j(Object.assign(N.data,{},{columns:N.columns,data:l})),D(),s.b.success(r.a.createElement("span",null,r.a.createElement(Y.a,null)," Successfully updated the incident. width number ",n.data.result.number)),T.log("Added",n.data.result)):(D(),s.b.error(r.a.createElement("span",null,r.a.createElement(w.a,null)," Error adding the incident. Please try again later."))),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),D(),s.b.error(r.a.createElement("span",null,r.a.createElement(w.a,null)," Error adding the incident. Please try again later.")),T.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{style:{margin:"16px"},title:"Incidents",columns:N.columns,data:N.data,actions:[{icon:"edit",tooltip:"Edit incident",onClick:function(e,t){l(Object.assign(a,{},t)),y(!0)}},{icon:"delete",tooltip:"Delete incident",onClick:function(e,t){l(Object.assign(a,{},t)),k(!0)}}],detailPanel:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},label:e.number,clickable:!0,color:"primary"}),r.a.createElement(F.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},label:"System Id: ".concat(e.sys_id),clickable:!0,color:"secondary"}),r.a.createElement(O.a,{style:{marginLeft:"16px",marginRight:"16px",marginTop:"16px"},variant:"h6"},"".concat(e.made_sla?"Yes":"No"," SLA was made."),r.a.createElement("br",null)),r.a.createElement(O.a,{style:{margin:"16px"},variant:"h6"},"".concat(e.description)))},onRowClick:function(e,t,a){return a()},options:{actionsColumnIndex:-1},components:{Toolbar:function(e){return r.a.createElement("div",null,r.a.createElement(B.MTableToolbar,e),r.a.createElement(V.a,{"aria-label":"Add",onClick:A,style:{backgroundColor:"#1976d2",color:"white"},tooltip:"Add incident"},r.a.createElement(J.a,null)))}}}),r.a.createElement(W.a,{open:b,onClose:_,"aria-labelledby":"form-dialog-title"},r.a.createElement(U.a,{id:"form-dialog-title"},"Edit: ",a?a.number:""),r.a.createElement(H.a,null,r.a.createElement(G.a,null,"Please modify the following details."),r.a.createElement(f.a,{defaultValue:a?a.short_description:"",autoFocus:!0,margin:"dense",id:"sdesc",label:"Short Description",type:"text",fullWidth:!0,variant:"outlined"}),r.a.createElement(f.a,{defaultValue:a?a.description:"",style:{marginTop:"16px"},autoFocus:!0,margin:"dense",id:"desc",label:"Description",type:"text",fullWidth:!0,multiline:!0,variant:"outlined"})),r.a.createElement(R.a,null,r.a.createElement(h.a,{onClick:_,color:"primary"},"Cancel"),r.a.createElement(h.a,{onClick:z,color:"primary"},"Update"))),r.a.createElement(W.a,{open:I,onClose:q,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(U.a,{id:"alert-dialog-title"},"Delete Incident?"),r.a.createElement(H.a,null,r.a.createElement(G.a,{id:"alert-dialog-description"},"Are you sure you want to delete this incident?")),r.a.createElement(R.a,null,r.a.createElement(h.a,{onClick:q,color:"primary"},"No"),r.a.createElement(h.a,{onClick:$,color:"primary",autoFocus:!0},"Yes"))),r.a.createElement(W.a,{open:o,onClose:D,"aria-labelledby":"form-dialog-title"},r.a.createElement(U.a,{id:"form-dialog-title"},"Add incident"),r.a.createElement(H.a,null,r.a.createElement(G.a,null,"Please fill the following details."),r.a.createElement(f.a,{autoFocus:!0,margin:"dense",id:"asdesc",label:"Short Description",type:"text",fullWidth:!0,variant:"outlined"}),r.a.createElement(f.a,{style:{marginTop:"16px"},autoFocus:!0,margin:"dense",id:"adesc",label:"Description",type:"text",fullWidth:!0,multiline:!0,variant:"outlined"})),r.a.createElement(R.a,null,r.a.createElement(h.a,{onClick:D,color:"primary"},"Cancel"),r.a.createElement(h.a,{onClick:K,color:"primary"},"Add"))))}function $(e){return A.isLoggedIn()||e.history.push("/"),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(z,e))}var K=function(){return r.a.createElement(i.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(_,e)}}),r.a.createElement(o.a,{path:"/dashboard",render:function(e){return r.a.createElement($,e)}})),r.a.createElement(s.a,{position:s.b.POSITION.TOP_RIGHT,autoClose:5e3}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(K,{globalState:A}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[222,1,2]]]);
//# sourceMappingURL=main.9b637ab3.chunk.js.map