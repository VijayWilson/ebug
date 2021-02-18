(this["webpackJsonpe-bug"]=this["webpackJsonpe-bug"]||[]).push([[0],{105:function(e,t,a){e.exports=a(138)},110:function(e,t,a){},111:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),c=(a(110),a(111),a(66)),o=a(18),u=a(17),s=a(14),d=a.n(s),p=a(41),m=a(42),g=a(46),b=a(45),f=a(19),E=a.n(f),h=a(32),v=a(61),y=a(7),O=a(39),S=function(){return function(){var e=Object(h.a)(E.a.mark((function e(t,a){var n,r,i,l,c,o,u,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().bugReducer,r=n.pageSize,i=n.pageNumber,l={paging:{pageSize:r,pageNumber:i+1}},e.next=4,d.a.post("bugs/all",l);case 4:c=e.sent,o=c.data.data,u=o.item1,s=o.item2,t({type:"SET_BUGS",payload:u}),t({type:"SET_BUGS_COUNT",payload:s});case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(h.a)(E.a.mark((function t(a,n){var r,i,l,c,o,u,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().bugReducer,i=r.bug,l=r.existingBugFiles,c=w(i,e,l),t.next=4,d.a.put("/bugs/".concat(i.bugId),c);case 4:o=t.sent,u=o.data,s=u.data,u.message,s&&(a(S()),a({type:"RESET_BUG"}));case 9:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()};function w(e,t,a){var n=new FormData;for(var r in e)n.append("bug[".concat(r,"]"),e[r]?e[r]:"");if(t)for(var i=0;i<t.length;i++)n.append("formFiles",t[i]);if(a)for(var l=0;l<a.length;l++)for(var c in a[l])n.append("bugFiles[".concat(l,"].").concat(c),a[l][c]);return n}var C=a(184),T=a(187),k=a(209),B=a(188),I=a(211),_=a(203),F=a(212),x=a(190),P=a(191),U=a(185),R=a(192),N=a(63),A=a.n(N),G=a(208),z=a(206);function W(e){return r.a.createElement(z.a,Object.assign({elevation:6,variant:"filled"},e))}var L=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={vertical:n.props.vertical,horizontal:n.props.horizontal,open:!1,message:"",duration:6e3,severity:null},n}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.notificationOptions.open!=e.notificationOptions.open&&this.setState((function(e,t){return{open:t.notificationOptions.open,message:t.notificationOptions.message}}))}},{key:"render",value:function(){return r.a.createElement(G.a,{anchorOrigin:{vertical:this.state.vertical,horizontal:this.state.horizontal},open:this.state.open,autoHideDuration:this.state.duration,onClose:this.props.closeNotification},r.a.createElement(W,{severity:this.state.type},this.state.message))}}]),a}(r.a.Component);var D=Object(u.b)((function(e){return{notificationOptions:e.bugReducer.notification}}),(function(e){return{closeNotification:function(){return e({type:"SET_NOTIFICATION",payload:{open:!1,message:"",type:null}})}}}))(L),q=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={bug:n.props.bug,formFiles:[]},n.handleInputChange=n.handleInputChange.bind(Object(O.a)(n)),n.handleFileChange=n.handleFileChange.bind(Object(O.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n.handleCancelEdit=n.handleCancelEdit.bind(Object(O.a)(n)),n}return Object(m.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target.name,a=e.target.value,n=this.state.bug;n=Object(y.a)(Object(y.a)({},n),{},Object(v.a)({},t,a)),this.setState({bug:n})}},{key:"handleFileChange",value:function(e){var t=e.target.files;this.setState({formFiles:t})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.bug;this.props.setBug(t),this.props.isEdit?this.props.updateBug(this.state.formFiles):this.props.createBug(this.state.formFiles)}},{key:"handleCancelEdit",value:function(){this.props.resetBug(),this.props.cancelEdit()}},{key:"componentDidUpdate",value:function(e){this.props.bug.title!==e.bug.title&&this.setState((function(e,t){return{bug:Object(y.a)(Object(y.a)({},t.bug),{},{title:t.bug.title})}})),this.props.bug.bugSoftwareTypeId!==e.bug.bugSoftwareTypeId&&this.setState((function(e,t){return{bug:Object(y.a)(Object(y.a)({},t.bug),{},{bugSoftwareTypeId:t.bug.bugSoftwareTypeId})}})),this.props.bug.recreationSteps!==e.bug.recreationSteps&&this.setState((function(e,t){return{bug:Object(y.a)(Object(y.a)({},t.bug),{},{recreationSteps:t.bug.recreationSteps})}})),this.props.bug.aboutSoftware!==e.bug.aboutSoftware&&this.setState((function(e,t){return{bug:Object(y.a)(Object(y.a)({},t.bug),{},{aboutSoftware:t.bug.aboutSoftware})}})),this.props.bug.comment!==e.bug.comment&&this.setState((function(e,t){return{bug:Object(y.a)(Object(y.a)({},t.bug),{},{comment:t.bug.comment?t.bug.comment:""})}}))}},{key:"render",value:function(){var e;return e=this.props.isEdit?r.a.createElement("div",null,r.a.createElement(C.a,{onClick:this.handleCancelEdit,varaint:"contained"},"Cancel"),r.a.createElement(C.a,{onClick:this.handleSubmit,type:"submit",variant:"contained",color:"primary"},"Update")):r.a.createElement("div",null,r.a.createElement(C.a,{onClick:this.handleSubmit,variant:"contained",color:"primary"},"Create")),r.a.createElement("div",null,r.a.createElement("form",{autoComplete:"off",noValidate:!0},r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(k.a,{label:"Title",required:!0,variant:"outlined",size:"small",type:"text",name:"title",value:this.state.bug.title,onChange:this.handleInputChange})),r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(k.a,{label:"Recreation Steps",required:!0,variant:"outlined",multiline:!0,rows:3,name:"recreationSteps",value:this.state.bug.recreationSteps,onChange:this.handleInputChange})),r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(B.a,{inputProps:{multiple:!0,accept:"image/*"},type:"file",name:"bugFiles",key:this.state.fileInputKey,onChange:this.handleFileChange}),r.a.createElement(M,{existingBugFiles:this.props.existingBugFiles,removeExistingBugFile:this.props.removeExistingBugFile})),r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(k.a,{label:"About Software",required:!0,variant:"outlined",multiline:!0,rows:3,name:"aboutSoftware",value:this.state.bug.aboutSoftware,onChange:this.handleInputChange})),r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(I.a,{htmlFor:"bug-software-type-id"},"Software Type"),r.a.createElement(_.a,{label:"Software Type",required:!0,labelId:"bug-software-type-id",name:"bugSoftwareTypeId",value:this.state.bug.bugSoftwareTypeId,onChange:this.handleInputChange},this.props.bugSoftwareTypes.map((function(e){return r.a.createElement(F.a,{key:e.id,value:e.id},e.label)})))),r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(k.a,{label:"Comment",variant:"outlined",multiline:!0,rows:3,name:"comment",value:this.state.bug.comment,onChange:this.handleInputChange})),r.a.createElement(T.a,{fullWidth:!0,margin:"dense",style:{textAlign:"right"}},e)),r.a.createElement(D,{vertical:"bottom",horizontal:"left"}))}}]),a}(r.a.Component);function M(e){var t=[];return e.existingBugFiles&&e.existingBugFiles.length>0&&(t=e.existingBugFiles.filter((function(e){return e.filePath})).map((function(t){return r.a.createElement(x.a,{key:t.bugFileId},r.a.createElement("img",{src:t.filePath,alt:"[Resource Not Found]"}),r.a.createElement(P.a,{actionIcon:r.a.createElement(U.a,{color:"secondary"},r.a.createElement(A.a,{onClick:function(){return e.removeExistingBugFile(t.bugFileId)}}))}))}))),r.a.createElement(R.a,null,t)}var V=Object(u.b)((function(e){return{bug:e.bugReducer.bug,existingBugFiles:e.bugReducer.existingBugFiles,bugSoftwareTypes:e.bugReducer.BugSoftwareTypes,notificationOptions:e.bugReducer.notification}}),(function(e){return{setBug:function(t){return e({type:"SET_BUG",payload:t})},resetBug:function(){return e({type:"RESET_BUG"})},createBug:function(t){return e(function(e){return function(){var t=Object(h.a)(E.a.mark((function t(a,n){var r,i,l,c,o,u,s;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().bugReducer.bug,i=w(r,e),t.next=4,d.a.post("/bugs",i);case 4:l=t.sent,c=l.data,o=c.data,u=c.message,s=c.messages,o?(a({type:"SET_NOTIFICATION",payload:{open:!0,message:u,type:"success"}}),a(S()),a({type:"RESET_BUG"})):a({type:"SET_ALERT_POPUP",payload:{open:!0,title:"Errors",content:u||s}});case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(t))},updateBug:function(){var t=Object(h.a)(E.a.mark((function t(a){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(j(a));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),removeExistingBugFile:function(t){return e({type:"REMOVE_EXISTING_BUG_FILE",payload:t})}}}))(q),X=a(193),H=a(177),J=a(194),K=a(195),Y=a(196),$=a(197),Q=a(198),Z=a(199),ee=a(205),te=a(89),ae=a.n(te);function ne(e){var t=Object(u.c)(),a=Object(c.b)(),i=Object(u.d)((function(e){return e.bugReducer})),l=i.bugList,s=i.pageSize,p=i.pageNumber,m=i.totalCount,g=i.BugStatus,b=Object(n.useState)([]),f=Object(o.a)(b,2),v=f[0],y=f[1];Object(n.useEffect)((function(){y(["#","Title","Status","Severity","Created On","Actions"]),t(S())}),[]);var O=function(a){var n=a.currentTarget.value;e.editBug(!0),t(function(e){return function(){var t=Object(h.a)(E.a.mark((function t(a){var n,r,i,l;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("bugs/".concat(e));case 2:n=t.sent,r=n.data.data,i=r.item1,l=r.item2,a({type:"SET_BUG",payload:i}),a({type:"SET_BUG_FILES",payload:l});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))},j=function(n){var r=n.currentTarget.value;a().then((function(){t(function(e){return function(){var t=Object(h.a)(E.a.mark((function t(a){var n,r,i;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.delete("/bugs/".concat(e));case 2:n=t.sent,r=n.data,i=r.data,r.message,i&&a(S());case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r))})),e.editBug(!1),t({type:"RESET_BUG"})};return r.a.createElement("div",null,r.a.createElement(X.a,{component:H.a},r.a.createElement(J.a,{stickyHeader:!0},r.a.createElement(K.a,null,r.a.createElement(Y.a,null,v.map((function(e){return r.a.createElement($.a,{key:e},e)})))),r.a.createElement(Q.a,null,l.map((function(e,t){return r.a.createElement(Y.a,{key:e.bugId},r.a.createElement($.a,null,r.a.createElement(re,{index:t,pageSize:s,pageNumber:p})),r.a.createElement($.a,null,r.a.createElement("div",{class:"text-block",title:e.title},e.title)),r.a.createElement($.a,null,r.a.createElement(ie,{bugStatusList:g,bugStatusId:e.bugStatusId})),r.a.createElement($.a,null,e.bugSeverityId),r.a.createElement($.a,null,r.a.createElement(le,null,e.createdOn)),r.a.createElement($.a,null,r.a.createElement("div",null,r.a.createElement(U.a,{onClick:O,value:e.bugId,size:"small",color:"primary"},r.a.createElement(ae.a,null,"Edit")),r.a.createElement(U.a,{onClick:j,value:e.bugId,size:"small",color:"secondary"},r.a.createElement(A.a,null,"Delete")))))}))),r.a.createElement(Z.a,null,r.a.createElement(Y.a,null,r.a.createElement(ee.a,{rowsPerPageOptions:[],rowsPerPage:s,page:p,count:m,onChangePage:function(e,a){t({type:"SET_BUGS_PAGE_NUMBER",payload:a}),t(S())}}))))))}function re(e){var t=e.index+1,a=e.pageSize,n=a*(e.pageNumber+1)-a+t;return r.a.createElement("span",null,n)}function ie(e){var t=e.bugStatusList.find((function(t){return t.id===e.bugStatusId}));return t?t.label:null}function le(e){var t=new Date(e.children);return r.a.createElement("span",null,t.getDate(),"-",t.getMonth(),"-",t.getFullYear())}var ce=a(200),oe=a(201),ue=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={isEditBug:!1},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(ce.a,null,r.a.createElement(oe.a,{container:!0,spacing:2},r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(V,{isEdit:this.state.isEditBug,cancelEdit:function(){return e.setState({isEditBug:!1})}})),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(ne,{editBug:function(t){return e.setState({isEditBug:t})}}))))}}]),a}(r.a.Component),se=a(207),de=a(181),pe=a(182),me=a(183),ge=a(90),be=a.n(ge),fe=1,Ee=3;function he(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],l=a[1],c=Object(u.d)((function(e){return e.globalReducers})).alertPopup,s=Object(u.c)();Object(n.useEffect)((function(){l(c.open)}),[c]);var d=function(){s({type:"SET_ALERT_POPUP",payload:{open:!1}}),e.closeCallback&&e.closeCallback()},p=e.showCancel?r.a.createElement(C.a,{onClick:d,color:"primary"}," Cancel "):"",m=Array.isArray(c.content)?r.a.createElement("ul",null,c.content.map((function(e,t){return r.a.createElement("li",{key:t},e)}))):r.a.createElement("p",null,c.content);return r.a.createElement(se.a,{open:i,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(de.a,{id:"alert-dialog-title"},r.a.createElement(oe.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement(be.a,{style:{fill:c.type===fe?"green":c.type===Ee?"orange":"red"}})," \xa0",c.title)),r.a.createElement(pe.a,null,m),r.a.createElement(me.a,null,p,r.a.createElement(C.a,{onClick:function(){s({type:"SET_ALERT_POPUP",payload:{open:!1}}),e.okCallback&&e.okCallback()},color:"primary",autoFocus:!0},"Ok")))}a(137);var ve=a(202),ye=a(91),Oe=a.n(ye);function Se(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(!1),c=Object(o.a)(l,2),u=c[0],s=c[1];Object(n.useEffect)((function(){d.a.get("/authentication").then((function(e){var t=e.status;i(200===t)}))}));var p=r.a.createElement("div",{class:"member-login-container"},r.a.createElement("div",{class:"top"},r.a.createElement("img",{src:"logo.png"})),r.a.createElement("div",{class:"bottom"},u?r.a.createElement(we,{isForgetPassword:function(e){return s(e)}}):r.a.createElement(je,{isSignedIn:function(e){return i(e)},isForgetPassword:function(e){return s(e)}}))),m=r.a.createElement("div",{class:"member-layout-container"},r.a.createElement("div",{class:"header-bar"},r.a.createElement("div",{class:"top-left"},r.a.createElement("img",{src:"logo-title.png",height:"50"})),r.a.createElement("div",{class:"top-right"},r.a.createElement(U.a,{onClick:function(){d.a.get("/authentication/logout").then((function(){i(!1)}))},style:{color:"white"},title:"Logout"},r.a.createElement(Oe.a,null)))),r.a.createElement("div",{class:"content"},r.a.createElement(ue,null)),r.a.createElement("div",{class:"footer-bar",style:{padding:"3px",color:"white",textAlign:"right"}},"Developed by Vijay Wilson J"));return r.a.createElement(r.a.Fragment,null,a?m:p,r.a.createElement(he,null))}function je(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),i=a[0],l=a[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),s=u[0],p=u[1],m=ke(),g=Object(o.a)(m,1)[0];return r.a.createElement("div",null,r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(k.a,{type:"text",name:"username",onChange:function(e){return l(e.target.value)},label:"UserName",required:!0,variant:"outlined",size:"small"})),r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(k.a,{type:"password",name:"password",onChange:function(e){return p(e.target.value)},label:"Password",required:!0,variant:"outlined",size:"small"})),r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(ve.a,{style:{textAlign:"left"},component:"button",variant:"body2",onClick:function(){e.isForgetPassword(!0)}}," Forget Password ")),r.a.createElement(T.a,null,r.a.createElement(oe.a,{container:!0},r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(C.a,{onClick:function(){d.a.post("/authentication/login",{Username:i,Password:s}).then((function(t){var a=t.data;a.data?e.isSignedIn(!0):g(a)}))},variant:"contained",color:"primary"},"Login")),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(C.a,{onClick:function(){d.a.post("/authentication/signup",{username:i,password:s}).then((function(e){var t=e.data;g(t)}))},variant:"contained",color:"primary"},"SignUp")))))}function we(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),i=a[0],l=a[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),s=u[0],p=u[1],m=Object(n.useState)(null),g=Object(o.a)(m,2),b=g[0],f=g[1],E=ke(),h=Object(o.a)(E,1)[0],v=function(){l(null),p(null),f(null),e.isForgetPassword(!1)};return r.a.createElement("div",null,r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(oe.a,{container:!0,spacing:2},r.a.createElement(oe.a,{item:!0,xs:!0},r.a.createElement(k.a,{type:"text",name:"email",onChange:function(e){return l(e.target.value)},fullWidth:!0,label:"Email",required:!0,variant:"outlined",size:"small"})),r.a.createElement(oe.a,{item:!0},r.a.createElement(C.a,{variant:"contained",color:"secondary",onClick:function(){var e=new FormData;e.append("email",i),d.a.post("/authentication/sendverificationcode",e).then((function(e){var t=e.data;h(t)}))}},"Send")))),r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(k.a,{type:"password",name:"verificationCode",onChange:function(e){return p(e.target.value)},label:"Verification Code",required:!0,variant:"outlined",size:"small"})),r.a.createElement(T.a,{fullWidth:!0,margin:"dense"},r.a.createElement(k.a,{type:"password",name:"newPassword",onChange:function(e){return f(e.target.value)},label:"New Password",required:!0,variant:"outlined",size:"small"})),r.a.createElement(T.a,null,r.a.createElement(oe.a,{container:!0,spacing:2},r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(C.a,{variant:"contained",color:"primary",onClick:function(){var e={email:i,newPassword:b,verificationCode:s};d.a.post("/authentication/updatepassword",e).then((function(e){var t=e.data;h(t),t.data&&v()}))}},"Update")),r.a.createElement(oe.a,{item:!0,xs:6},r.a.createElement(C.a,{onClick:v,variant:"contained",color:"primary"},"Cancel")))))}var Ce=1,Te=2;function ke(){var e=Object(u.c)();return[function(t){if(t){var a=t.resultType,n=t.message,r=t.messages;e({type:"SET_ALERT_POPUP",payload:{open:!0,type:a,title:a===Ce?"Success":a===Te?"Error":"Warning",content:n||r}})}}]}var Be=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(Se,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=a(38),_e={googleClientId:"738814746760-gs1hst1dds900ohd7su159bpa1orqa9c.apps.googleusercontent.com",authenticationToken:null,alertPopup:{open:!1}},Fe=[{id:1,label:"Desktop Application"},{id:2,label:"Web Application"},{id:3,label:"Mobile Application"},{id:4,label:"System Software"},{id:5,label:"Operating System"},{id:6,label:"ThirdParty Plugin"},{id:7,label:"IOT Device"},{id:8,label:"Web API"}],xe={bugList:[],pageSize:5,pageNumber:0,totalCount:0,BugSoftwareTypes:Fe,BugStatus:[{id:1,label:"Reported"},{id:2,label:"Reviewed"},{id:3,label:"Confirmed"},{id:4,label:"Rejected"},{id:5,label:"Resolved"},{id:6,label:"Reopened"}],bug:{bugId:0,title:"",bugSoftwareTypeId:Fe[0].id,recreationSteps:"",aboutSoftware:"",comment:""},existingBugFiles:[],notification:{open:!1,message:"",type:null}},Pe=a(92),Ue=Object(Ie.c)({globalReducers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHENTICATION_TOKEN":e=Object(y.a)(Object(y.a)({},e),{},{authenticationToken:t.payload});break;case"SET_ALERT_POPUP":e=Object(y.a)(Object(y.a)({},e),{},{alertPopup:t.payload});break;default:e=e}return e},bugReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BUGS":e=Object(y.a)(Object(y.a)({},e),{},{bugList:t.payload});break;case"SET_BUGS_PAGE_NUMBER":e=Object(y.a)(Object(y.a)({},e),{},{pageNumber:t.payload});break;case"SET_BUGS_COUNT":e=Object(y.a)(Object(y.a)({},e),{},{totalCount:t.payload});break;case"SET_BUG":e=Object(y.a)(Object(y.a)({},e),{},{bug:t.payload});break;case"SET_BUG_FILES":e=Object(y.a)(Object(y.a)({},e),{},{existingBugFiles:t.payload});break;case"RESET_BUG":e=Object(y.a)(Object(y.a)({},e),{},{bug:xe.bug,existingBugFiles:[]});break;case"REMOVE_EXISTING_BUG_FILE":e=Object(y.a)(Object(y.a)({},e),{},{existingBugFiles:e.existingBugFiles.filter((function(e){return e.bugFileId!==t.payload}))});break;case"SET_NOTIFICATION":e=Object(y.a)(Object(y.a)({},e),{},{notification:t.payload});break;default:e=Object(y.a)({},e)}return e}}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ie.d,Ne=Object(Ie.e)(Ue,Re(Object(Ie.a)(Pe.a)));d.a.defaults.baseURL="https://ebug.azurewebsites.net",d.a.defaults.withCredentials=!0,l.a.render(r.a.createElement(u.a,{store:Ne},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[105,1,2]]]);
//# sourceMappingURL=main.a5d0a6f5.chunk.js.map