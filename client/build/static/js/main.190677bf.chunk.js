(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{144:function(e,t,n){},215:function(e,t,n){},219:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(23),c=n.n(a),o=(n(144),n(225)),i=n(22),s=n(26),u=n.n(s),l=n(39),j=n(83),b=n(28),d=n(30),O=n(134),p=n(228),h=n(223),x=n(224),f=n(227),m=n(49);function v(){}var g=Object(r.createContext)({token:null,userId:null,login:v,logout:v,isAuthenticated:!1}),k=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),o=Object(d.a)(c,2),i=o[0],s=o[1];return{loading:n,request:Object(r.useCallback)(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r,c,o,i,l=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{},a(!0),e.prev=4,r&&(r=JSON.stringify(r),c["Content-Type"]="application/json"),e.next=8,fetch(t,{method:n,body:r,headers:c});case 8:return o=e.sent,e.next=11,o.json();case 11:if(i=e.sent,o.ok){e.next=14;break}throw new Error(i.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return a(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),a(!1),s(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:i,clearError:function(){s(null)}}},C=n(6),w={labelCol:{span:8},wrapperCol:{span:16}},y={wrapperCol:{offset:8,span:16}};function T(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}var S=function(){var e=Object(r.useContext)(g),t=k(),n=t.loading,a=t.error,c=t.request,o=t.clearError,i=Object(r.useState)({email:T("user"),password:"",remember:!0}),s=Object(d.a)(i,2),v=s[0],S=s[1],I=function(e){S(Object(b.a)(Object(b.a)({},v),{},Object(j.a)({},e.target.name,e.target.value)))},E=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("/api/auth/register/","POST",Object(b.a)({},v));case 3:t=e.sent,O.b.success(t.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c("/api/auth/login/","POST",Object(b.a)({},v));case 3:n=t.sent,e.login(n.token,n.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){a&&(O.b.error(a),o())}),[a,o]),Object(C.jsx)(p.b,{children:Object(C.jsxs)(h.a,Object(b.a)(Object(b.a)({},w),{},{name:"basic",initialValues:{remember:!0},children:[Object(C.jsx)(h.a.Item,{initialValue:v.email,label:"Email",name:"email",rules:[{required:!0}],children:Object(C.jsx)(x.a,{onChange:I,name:"email"})}),Object(C.jsx)(h.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0}],children:Object(C.jsx)(x.a.Password,{onChange:I,name:"password"})}),Object(C.jsx)(h.a.Item,Object(b.a)(Object(b.a)({},y),{},{name:"remember",onChange:function(){return S(Object(b.a)(Object(b.a)({},v),{},{remember:!v.remember}))},valuePropName:"checked",children:Object(C.jsx)(f.a,{name:"remember",children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})})),Object(C.jsxs)(h.a.Item,Object(b.a)(Object(b.a)({},y),{},{children:[Object(C.jsx)(m.a,{type:"primary",onClick:A,disabled:n,children:"\u0412\u043e\u0439\u0442\u0438"}),Object(C.jsx)(m.a,{onClick:E,disabled:n,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}))]}))})},I=n(54),E=Object(r.createContext)();function A(){return Object(C.jsx)("div",{className:"loader-wrapper",children:Object(C.jsxs)("div",{className:"lds-ripple",children:[Object(C.jsx)("div",{}),Object(C.jsx)("div",{})]})})}var N=x.a.TextArea,P=function(e){var t=Object(r.useState)(e),n=Object(d.a)(t,2),a=n[0],c=n[1];return{bind:{value:a,onChange:function(e){return c(e.target.value)}},clear:function(){return c("")},value:function(){return a}}};var D=function(e){var t=e.onCreate,n=e.onChange,r=e.title,a=void 0===r?"":r,c=e.id,o=e.onToggle,i=e.description,s=void 0===i?"":i,u=P(a),l=P(s),j=function(e){e.preventDefault(),u.value().trim()&&(c?n(c,u.value(),l.value()):(t(u.value(),l.value()),u.clear(),l.clear()))};return Object(C.jsxs)("form",{id:"form",onSubmit:j,children:[Object(C.jsx)("label",{htmlFor:"task",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(C.jsx)(x.a,Object(b.a)({placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",id:"task"},u.bind)),Object(C.jsx)("label",{htmlFor:"description",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(C.jsx)(N,Object(b.a)({placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438",id:"description",showCount:!0,maxLength:200},l.bind)),c?Object(C.jsx)(m.a,{style:{marginTop:"2rem"},form:"form",htmlType:"submit",type:"primary",onClick:function(e){j(e),o(!1)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f"},"submit"):null]})},B=(n(215),n(226));var q=function(e){var t=e.onCreate,n=Object(r.useState)(!1),a=Object(d.a)(n,2),c=a[0],o=a[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(m.a,{type:"primary",onClick:function(){return o(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"}),c?Object(C.jsx)(B.a,{visible:c,title:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430",onCancel:function(){return o(!1)},footer:[Object(C.jsx)(m.a,{onClick:function(){return o(!1)},children:"\u041d\u0430\u0437\u0430\u0434"},"back"),Object(C.jsx)(m.a,{form:"form",htmlType:"submit",type:"primary",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"},"submit")],children:Object(C.jsx)(D,{onCreate:t})}):null]})},z=n(222),F=n(229),J=n(230);var R=function(e){var t=e.todo,n=e.index,a=e.onChange,c=Object(r.useContext)(E),o=c.removeTodo,i=c.changeTodo,s=Object(r.useState)(!1),u=Object(d.a)(s,2),l=u[0],j=u[1],b=function(e){j(e)};return Object(C.jsx)("li",{style:t.completed?{textDecoration:"line-through"}:null,children:Object(C.jsx)("div",{className:"site-card-border-less-wrapper",children:Object(C.jsx)(z.a,{title:t.title,bordered:!1,extra:Object(C.jsx)(F.a,{onClick:function(){return b(!l)}}),children:l?Object(C.jsx)(D,{title:t.title,id:t.id,description:t.description,onChange:i,onToggle:b}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(f.a,{onChange:function(){return a(t.id)},checked:t.completed}),Object(C.jsxs)("strong",{children:[" ",n+1]}),"\xa0",t.description||""]}),Object(C.jsx)("div",{children:Object(C.jsx)(J.a,{onClick:function(){return o(t.id)}})})]})})})})};var H=function(e){return Object(C.jsx)("ul",{children:e.todos.map((function(t,n){return Object(C.jsx)(R,{todo:t,index:n,onChange:e.onToggle},n+"_"+t.id)}))})},L=n(68);var G=function(){var e=Object(r.useContext)(g),t=k(),n=t.loading,a=t.request,c=t.error,o=Object(r.useCallback)(Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/main/","GET",null,{Authorization:"Bearer ".concat(e.token)});case 3:n=t.sent,h(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[a,e.token]);Object(r.useEffect)((function(){o()}),[o]);var i=Object(r.useState)([]),s=Object(d.a)(i,2),j=s[0],h=s[1],x=Object(r.useCallback)(function(){var t=Object(l.a)(u.a.mark((function t(n){var r,c,o,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=j.find((function(e){return e.id===n})),c=!r.completed,t.next=5,a("/api/main/completed/","PATCH",{id:n,completed:c},{Authorization:"Bearer ".concat(e.token)});case 5:o=t.sent,i=Object(I.a)(j),o.status&&(i=i.map((function(e){return e.id===n&&(e.completed=c),e}))),h(Object(I.a)(i)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),O.b.error(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),[j,a,e.token]),f=Object(r.useCallback)(function(){var t=Object(l.a)(u.a.mark((function t(n){var r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/main/","DELETE",{id:n},{Authorization:"Bearer ".concat(e.token)});case 3:r=t.sent,c=Object(I.a)(j),r.status&&(c=c.filter((function(e){return e.id!==n}))),h(c),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),O.b.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}(),[a,e.token,j]),m=function(){var t=Object(l.a)(u.a.mark((function t(n,r,c){var o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/main/description/","PATCH",{id:n,title:r,description:c},{Authorization:"Bearer ".concat(e.token)});case 3:t.sent.status&&((o=j.find((function(e){return e.id===n}))).title=r,o.description=c),h(Object(I.a)(j)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),O.b.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n,r){return t.apply(this,arguments)}}(),v=Object(r.useCallback)(function(){var t=Object(l.a)(u.a.mark((function t(n,r){var o,i,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o={completed:!1,title:n,description:r,id:Date.now().toLocaleString()},t.next=4,a("/api/main/","POST",Object(b.a)({},o),{Authorization:"Bearer ".concat(e.token)});case 4:i=t.sent,s=Object(I.a)(j),i.status&&s.push(o),h(Object(I.a)(s)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),O.b.error(c);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}(),[j,e.token,a,c]);return Object(C.jsxs)(E.Provider,{value:{removeTodo:f,changeTodo:m},children:[Object(C.jsx)(p.b,{}),n&&Object(C.jsx)(A,{}),j.length?Object(C.jsx)(H,{todos:j,onToggle:x}):n?null:Object(C.jsx)(L.a,{description:Object(C.jsx)("span",{children:"\u0417\u0430\u0434\u0430\u0447 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435\u0442"})}),Object(C.jsx)(q,{onCreate:v})]})},V=n(112),$=o.a.Header,U=o.a.Content,_=o.a.Footer;var K=function(){var e=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),o=Object(d.a)(c,2),i=o[0],s=o[1],u=Object(r.useCallback)((function(e,t){a(e),s(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),l=Object(r.useCallback)((function(){a(null),s(null),localStorage.removeItem("userData")}),[]);return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&u(e.token,e.userId)}),[u]),{login:u,logout:l,token:n,userId:i}}(),t=e.token,n=e.login,a=e.logout,c=e.userId,s=!!t,u=function(e){return e?Object(C.jsxs)(i.d,{children:[Object(C.jsx)(i.b,{path:"/main",children:Object(C.jsx)(G,{})}),Object(C.jsx)(i.a,{to:"/main"})]}):Object(C.jsxs)(i.d,{children:[Object(C.jsx)(i.b,{exact:!0,path:"/",children:Object(C.jsx)(S,{})}),Object(C.jsx)(i.a,{to:"/"})]})}(s);return Object(C.jsx)(g.Provider,{value:{token:t,login:n,logout:a,userId:c,isAuthenticated:s},children:Object(C.jsx)(V.a,{children:Object(C.jsxs)(o.a,{className:"layout",children:[Object(C.jsx)($,{children:Object(C.jsxs)("div",{className:"logo",children:[Object(C.jsx)("h1",{children:"ToDo React"}),s?Object(C.jsx)("a",{href:"true",onClick:a,children:"\u0412\u044b\u0439\u0442\u0438"}):null]})}),Object(C.jsx)(U,{style:{padding:"0 50px"},children:Object(C.jsx)("div",{className:"site-layout-content",children:Object(C.jsx)("div",{className:"wrapper",children:u})})}),Object(C.jsx)(_,{style:{textAlign:"center"},children:"Todo list React@"})]})})})};c.a.render(Object(C.jsx)(K,{}),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.190677bf.chunk.js.map