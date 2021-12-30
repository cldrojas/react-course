(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[0],{33:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(25),r=n.n(a),i=(n(33),n(8)),o=n(2),l=n(0),j=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Welcome stranger"}),Object(l.jsx)("p",{children:"This is my first react app"})]})},b=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:"Saludo desde algun lugar"})})},u=n(27),d=n(4),m=n(11),h=n.n(m),O=n(28),p=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(d.a)(a,2),i=r[0],o=r[1],j=Object(c.useState)(!1),b=Object(d.a)(j,2),m=b[0],p=b[1],x=Object(c.useState)(""),f=Object(d.a)(x,2),v=f[0],N=f[1];return Object(l.jsxs)("div",{className:"container mt-4",children:[Object(l.jsx)("h1",{className:"text-center",children:"CRUD Simple"}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-8",children:[Object(l.jsx)("h4",{className:"text-center",children:"Lista de todos"}),Object(l.jsx)("ul",{className:"list-group",children:n.length>0?n.map((function(e){return Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("span",{className:"lead",children:e.content}),Object(l.jsx)("button",{className:"btn btn-danger btn-sm float-end mx-2",onClick:function(){return function(e){var t=n.filter((function(t){return t.id!==e}));s(t)}(e.id)},children:"Eliminar"}),Object(l.jsx)("button",{className:"btn btn-warning btn-sm float-end",onClick:function(){return function(e){p(!0),o(e.content),N(e.id),document.getElementById("todo").focus()}(e)},children:"Editar"})]},e.id)})):Object(l.jsx)("h3",{children:"No hay tareas"})})]}),Object(l.jsxs)("div",{className:"col-4",children:[Object(l.jsx)("h4",{className:"text-center",children:m?"Edit todo":"Add todo"}),Object(l.jsxs)("form",{onSubmit:m?function(e){e.preventDefault();var t=n.map((function(e){return e.id===v?{id:v,content:i}:e}));s(t),p(!1),o(""),N("")}:function(e){if(e.preventDefault(),!i.trim())return h.a.fire("Alert!","No se puede agregar una tarea sin nombre","alert");s([].concat(Object(u.a)(n),[{id:Object(O.a)(),content:i}])),o("")},children:[Object(l.jsx)("input",{type:"text",id:"todo",name:"todo",placeholder:"todo",className:"form-control mb-3",onChange:function(e){o(e.target.value)},value:i}),m?Object(l.jsx)("button",{className:"btn btn-warning form-control",type:"submit",children:"Edit"}):Object(l.jsx)("button",{className:"btn btn-success form-control",type:"submit",children:"Save"})]})]})]})]})},x=n(16),f=n(20),v=function(e){var t=e.setNombre,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(d.a)(t,2),s=n[0],a=n[1];return[s,function(e){var t=e.target,n=t.name,c=t.value,s=t.checked,r=t.type;a((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(x.a)({},n,"checkbox"===r?s:c))}))},function(){a(e)}]}({nombre:""}),s=Object(d.a)(n,3),a=s[0],r=s[1],i=s[2],o=a.nombre;return Object(l.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!o.trim())return h.a.fire("Alert!","No se puede buscar un personaje sin nombre","warning");t(o.trim().toLowerCase()),i()},children:[Object(l.jsx)("input",{type:"text",name:"nombre",placeholder:"Ingrese personaje",className:"form-control mb-2",value:o,onChange:r}),Object(l.jsx)("button",{className:"btn btn-dark btn-block",children:"Buscar"})]})},N=n(9),g=n.n(N),k=n(12),y=function(e){var t=e.data;return Object(l.jsx)("div",{className:"col-md-4 mb-4 mt-3",children:Object(l.jsxs)("div",{className:"card p-3",children:[Object(l.jsxs)("div",{className:"card-title d-flex justify-content-between align-items-center",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsxs)("span",{children:["Origin: ",t.origin.name]})]}),Object(l.jsx)("img",{src:t.image,className:"rounded",alt:t.name}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsxs)("h6",{children:["Species: ",t.species]}),Object(l.jsxs)("h6",{children:["Gender: ",t.gender]}),Object(l.jsxs)("h6",{children:["Last location: ",t.location.name]}),Object(l.jsxs)("h6",{children:["Status: ",t.status]})]})]})})},S=function(e){var t=e.personaje;Object(c.useEffect)((function(){u(t)}),[t]);var n=Object(c.useState)([]),s=Object(d.a)(n,2),a=s[0],r=s[1],i=Object(c.useState)(!1),o=Object(d.a)(i,2),j=o[0],b=o[1],u=function(){var e=Object(k.a)(g.a.mark((function e(t){var n,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://rickandmortyapi.com/api/character/?name=".concat(t),e.prev=1,b(!0),e.next=5,fetch(n);case 5:if((c=e.sent).ok){e.next=8;break}return e.abrupt("return",h.a.fire("Error","No se encontr\xf3 el personaje","error"));case 8:return e.next=10,c.json();case 10:s=e.sent,r(s.results),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:return e.prev=17,b(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,14,17,20]])})));return function(t){return e.apply(this,arguments)}}();return j?Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)("div",{className:"spinner-border",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(l.jsx)("div",{className:"row",children:a.map((function(e){return Object(l.jsx)(y,{data:e},e.id)}))})};var w=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Rick and Morty"}),Object(l.jsx)(v,{setNombre:s}),Object(l.jsx)("button",{className:"btn btn-success btn-block mt-2",onClick:function(){return s("")},children:"Reset"}),Object(l.jsx)(S,{personaje:n})]})},C=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(k.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations",e.prev=1,e.next=4,fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,s(n.civilizations),console.log(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("ul",{children:n.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsxs)(i.b,{to:"/civilizaciones/".concat(e.id),children:[e.name," - ",e.expansion]})},e.id)}))})},E=function(){var e=Object(o.f)().id,t=Object(c.useState)([]),n=Object(d.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(k.a)(g.a.mark((function t(){var n,c,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/".concat(e),t.prev=1,t.next=4,fetch(n);case 4:return c=t.sent,t.next=7,c.json();case 7:s=t.sent,a(s),console.log(s),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:s.name}),Object(l.jsxs)("h3",{children:[s.army_type," - ",s.expansion]}),Object(l.jsx)("p",{children:s.civilization_bonus})]})};var z=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsxs)("div",{className:"btn-group d-flex",children:[Object(l.jsx)(i.c,{to:"/",className:"btn btn-info",children:"Inicio"}),Object(l.jsx)(i.c,{to:"/saludo",className:"btn",activeClassName:"btn-success",children:"Saludo"}),Object(l.jsx)(i.c,{to:"/todo",className:"btn",activeClassName:"btn-success",children:"Todo"}),Object(l.jsx)(i.c,{to:"/rick",className:"btn",activeClassName:"btn-success",children:"Rick & Morty"}),Object(l.jsx)(i.c,{to:"/civilizaciones",className:"btn",activeClassName:"btn-success",children:"Civilizaciones Age of Empires"})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/civilizaciones/:id",component:E}),Object(l.jsx)(o.a,{path:"/civilizaciones",component:C}),Object(l.jsx)(o.a,{path:"/todo",component:p}),Object(l.jsx)(o.a,{path:"/saludo",component:b}),Object(l.jsx)(o.a,{path:"/rick",component:w}),Object(l.jsx)(o.a,{path:"/",component:j})]})]})})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(z,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.b4093884.chunk.js.map