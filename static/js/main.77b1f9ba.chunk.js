(this["webpackJsonpmi-reto"]=this["webpackJsonpmi-reto"]||[]).push([[0],{33:function(e,t,a){e.exports=a(44)},38:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=(a(38),a(31)),m=a(6),s=(a(23),a(12)),i=a(13),u=a(46);var d=function(e){var t=function(t){var a=t.target,n=a.name,r=a.value,c=a.checked,l=a.type;e.setCurrentHomeWork(Object(i.a)(Object(i.a)({},e.currentHomeWork),{},Object(s.a)({},n,"checkbox"===l?c:r)))};return r.a.createElement("div",null,r.a.createElement(u.a,{show:e.show},r.a.createElement(u.a.Header,null,r.a.createElement(u.a.Title,null,"Register the table fields")),r.a.createElement(u.a.Body,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleShow()}},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:" Name",name:"name",value:e.currentHomeWork&&e.currentHomeWork.name,required:!0,onChange:t})),r.a.createElement("div",{className:"col-6"},r.a.createElement("label",null,"Description"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:" Description",name:"description",value:e.currentHomeWork&&e.currentHomeWork.description,required:!0,onChange:t})),r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{name:"checked",type:"checkbox",class:"custom-control-input",id:"customCheck1",onChange:t}),r.a.createElement("label",{class:"custom-control-label",for:"customCheck1"},"Confirm changes"))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"btn btn-secondary",onClick:e.handleClose},"Close"),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.EditUser()}},"Save Changes"))))))},E=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(null),s=Object(m.a)(o,2),i=s[0],u=s[1],E=function(){l(!c)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-bordered thead-light mt-5"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col-4"},"Name"),r.a.createElement("th",{scope:"col-4"},"Description"),r.a.createElement("th",{scope:"col-4"},"Actions"))),r.a.createElement("tbody",null,e.homeWorks.length>0?e.homeWorks.map((function(t){return r.a.createElement("tr",{key:t.id,className:t.checked?"homeWork-checked":""},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.description),r.a.createElement("button",{className:"btn btn-warning btn-md",onClick:function(){u(t),E()}},"Edit User"),r.a.createElement("button",{className:"btn btn-danger btn-md",onClick:function(){e.deleteUser(t.id)}},"Delete"))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No task logs")))),r.a.createElement(d,{show:c,setShow:l,handleShow:E,currentHomeWork:i,setCurrentHomeWork:u,EditUser:function(){var t=e.homeWorks.map((function(e){return e.id===i.id?i:e}));e.setHomeWorks(t)}}))},b=a(30),h=a(47),f=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1],o=function(){return l(!1)},d=Object(n.useState)({name:"",description:""}),E=Object(m.a)(d,2),b=E[0],f=E[1],v=function(e){var t=e.target,a=t.name,n=t.value;f(Object(i.a)(Object(i.a)({},b),{},Object(s.a)({},a,n)))};return r.a.createElement("div",null,r.a.createElement(h.a,{className:"btn btn-secondary btn-lg",onClick:function(){return l(!0)}},"Create task"),r.a.createElement(u.a,{show:c},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.addHomeWork(b),o(),t.target.reset()}},r.a.createElement(u.a.Header,null,r.a.createElement(u.a.Title,null,"Register the table fields")),r.a.createElement(u.a.Body,null,r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:" Name",name:"name",required:"required",onChange:v})),r.a.createElement("div",{className:"col-6"},r.a.createElement("label",null,"Description"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:" Description",name:"description",required:"required",onChange:v})))),r.a.createElement(u.a.Footer,null,r.a.createElement(h.a,{variant:"secondary",onClick:o},"Close"),r.a.createElement(h.a,{variant:"primary",type:"submit"},"Save Changes")))))};var v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),s=Object(m.a)(l,2),i=s[0],u=s[1];return Object(n.useEffect)((function(){document.title="you have ".concat(i," taks")}),[i]),r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"col-6 mt-3"},"List of tasks"),r.a.createElement("div",{className:"col-6 mt-3"},r.a.createElement("div",null,r.a.createElement(f,{addHomeWork:function(e){e.id=Object(b.v4)(),c([].concat(Object(o.a)(a),[e])),u(i+1)}})))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(E,{homeWorks:a,setHomeWorks:c,deleteUser:function(e){c(a.filter((function(t){return t.id!==e}))),u(i-1)},setCount:u,count:i}))))};var p=function(){return r.a.createElement("div",null,r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.77b1f9ba.chunk.js.map