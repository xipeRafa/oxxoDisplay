(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(23),r=n(14),s=n(10),i=n(157),o=n(75),l=(n(88),n(145),n(146),o.a.initializeApp({apiKey:"AIzaSyB3s6QjYWR6EL45XSK7ANP-D_1I-DZ9eYg",authDomain:"taxis-e44d6.firebaseapp.com",projectId:"taxis-e44d6",storageBucket:"taxis-e44d6.appspot.com",messagingSenderId:"603667662446",appId:"1:603667662446:web:0014b763a2a4acca92487f"})),u=o.a.firestore.FieldValue.serverTimestamp,d=l.firestore(),j=l.storage(),b=l.auth(),O=n(2),m=Object(c.createContext)(),x=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(s.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(!0),l=Object(s.a)(o,2),u=l[0],j=l[1],x=Object(c.useState)(""),f=Object(s.a)(x,2),h=f[0],v=f[1];return Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){i(e),j(!1)}))}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){return v("")}),5e3);return function(){return clearTimeout(e)}}),[h]),Object(O.jsx)(m.Provider,{value:{currentUser:r,register:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},bidAuction:function(e){return d.collection("oxxoLider").doc(e).update({acuerdo:!0})},noteContext:function(e,t){return d.collection("oxxoLider").doc(e).update({note:t})},endAuction:function(e){return d.collection("oxxoLider").doc(e).delete()},globalMsg:h},children:!u&&t})},f=n(43),h=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var t=d.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(f.a)(Object(f.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{docs:a}},v=function(e){var t=e.item;console.log(t);var n=new Date(t.duration).toLocaleTimeString("es-CL"),c=new Date(t.duration).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(O.jsx)("div",{className:"col border mb-5 p-3",style:{height:"700px",overflow:"hidden",overflowY:"scroll"},children:Object(O.jsx)("div",{className:"card shadow-sm mb-2",children:Object(O.jsxs)("div",{className:"card-body px-4 pb-2 ",children:[Object(O.jsxs)("div",{className:"border row border-secondary",children:[Object(O.jsx)("span",{className:"bg-secondary p-1 col-md-3",children:Object(O.jsxs)("div",{className:"text-white px-2",children:[" Tienda ",t.tienda," "]})}),Object(O.jsxs)("span",{className:"p-1 col-md-3",children:[Object(O.jsx)("span",{className:"text-secondary px-2",children:"Horario "})," ",t.hora]}),Object(O.jsxs)("span",{className:"p-1 col-md-3",children:[Object(O.jsx)("span",{className:"text-secondary px-2",children:"Destino "})," ",t.destino]}),Object(O.jsx)("span",{className:"p-1 col-md-3 ",children:Object(O.jsxs)("span",{className:"px-2",children:[c,", ",n.slice(0,-3)]})})]}),Object(O.jsxs)("div",{className:"mt-1",children:[Object(O.jsx)("span",{className:"text-secondary",children:"Pasajeros: "})," ",t.pasajeros]}),Object(O.jsxs)("div",{className:"mt-1",children:[Object(O.jsx)("span",{className:"text-secondary",children:"Comentarios: "})," ",null===t||void 0===t?void 0:t.description]})]})},t.id)})},p=n(154),g=n(31),N=n.n(g),y=n(36),w=function(e){var t=Object(c.useState)(0),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(null),o=Object(s.a)(i,2),l=o[0],b=o[1];return Object(c.useState)((function(){var t=j.ref(e.itemImage.name),n=d.collection("oxxoLider");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){console.log(e)}),Object(y.a)(N.a.mark((function c(){var a,r;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getDownloadURL();case 2:return a=c.sent,r=u(),delete e.itemImage,c.next=7,n.add(Object(f.a)(Object(f.a)({},e),{},{createdAt:r,imgUrl:a}));case 7:b(!0);case 8:case"end":return c.stop()}}),c)}))))}),[e]),{progress:a,isCompleted:l}},C=function(e){var t=e.auction,n=e.setAuction,a=w(t),r=a.progress,s=a.isCompleted;return Object(c.useEffect)((function(){s&&n(null)}),[s,n]),Object(O.jsx)(p.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(r,"%")}})},S=Object(c.createContext)(),k=function(e){var t=e.children,n=h("oxxoLider").docs,a=Object(r.a)(n),i=Object(c.useState)(a),o=Object(s.a)(i,2),l=o[0],u=o[1];return Object(O.jsx)(S.Provider,{value:{handleDB:function(e){u(e)},DB:l},children:t})},D=n(76),L=n.n(D),E=(n(93),function(){var e=h("oxxoLider").docs,t=Object(r.a)(e),n=Object(c.useContext)(S).handleDB,a=Object(c.useState)([]),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){if("DateMaxToMin"!==o[0])if("Date"!==o[0]);else{var e=t.sort((function(e,t){return e.createdAt-t.createdAt}));n(e)}else{var c=t.sort((function(e,t){return t.createdAt-e.createdAt}));n(c)}}),[o]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"w-75",children:[Object(O.jsx)("h2",{children:"Filtros"}),Object(O.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:o,children:[Object(O.jsx)("option",{children:"Filtrar por"}),Object(O.jsx)("option",{value:"Date",children:"Fecha MIN to MAX"}),Object(O.jsx)("option",{value:"DateMaxToMin",children:"Fecha Max to Min"})]})]})})}),M=function(){var e=h("oxxoLider").docs,t=Object(r.a)(e),n=Object(c.useContext)(S).handleDB,a=Object(c.useState)([]),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){if("all"!==o[0])if("done"!==o[0])if("fallen"!==o[0]);else{var e=t.filter((function(e){return!1===e.completed}));n(e)}else{var c=t.filter((function(e){return!0===e.completed}));n(c)}else{var a=t.filter((function(e){return e}));n(a)}}),[o]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"w-75 mt-5",children:[Object(O.jsx)("h2",{children:"Resultados"}),Object(O.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:o,children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),Object(O.jsx)("option",{value:"done",children:"Completados"}),Object(O.jsx)("option",{value:"fallen",children:"Sin Completar"})]})]})})},A=function(){var e=Object(c.useContext)(S).handleDB,t=h("oxxoLider").docs,n=Object(r.a)(t),a=Object(c.useState)(!0),i=Object(s.a)(a,2),o=i[0],l=i[1],u=Object(c.useState)(!0),d=Object(s.a)(u,2),j=d[0],b=d[1],m=Object(c.useState)(!0),x=Object(s.a)(m,2),f=x[0],v=x[1],p=Object(c.useState)([]),g=Object(s.a)(p,2),N=g[0],y=g[1];function w(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}return Object(c.useEffect)((function(){for(var t=function(e){var t=n.filter((function(t){return t.categorie!==N[e]}));n=t},c=0;c<N.length;c++)t(c);e(n)}),[N,o,j,f]),Object(c.useEffect)((function(){setTimeout((function(){l(!o),l(!0)}),200)}),[t]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"w-75 mt-5",children:[Object(O.jsx)("h2",{children:"Clientes"}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){l(!o),o?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:o}),"oxxo"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"otro",onChange:function(e){return function(e){b(!j),j?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:j}),"otro"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"pago en efectivo",onChange:function(e){return function(e){v(!f),f?y([].concat(Object(r.a)(N),[e.target.value])):w(N,e.target.value)}(e)},checked:f}),"Pago en Efectivo"]})]})})},T=function(){return Object(O.jsxs)("div",{style:{paddingLeft:"16px"},className:"d-flex justify-content-between flex-column pb-5  ",children:[Object(O.jsx)(E,{}),Object(O.jsx)(M,{}),Object(O.jsx)(A,{})]})},I=(n(94),n(81));Object(D.registerLocale)("es",I.a);var P=function(){var e,t=Object(c.useState)(null),n=Object(s.a)(t,2),a=n[0],o=n[1],l=Object(c.useContext)(m),u=l.currentUser,d=l.globalMsg,j=Object(c.useContext)(S).DB,b=Object(c.useState)(),x=Object(s.a)(b,2),f=(x[0],x[1]),h=function(e){f(e)},p=!!u&&u.email;e="superadmin@gmail.com"===p||"superadmin2@gmail.com"===p||"superadmin3@gmail.com"===p?j.sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})):[];var g=Object(c.useState)(),N=Object(s.a)(g,2),y=N[0],w=N[1],k=Object(c.useState)(),D=Object(s.a)(k,2),E=D[0],M=D[1],A=Object(c.useState)([]),I=Object(s.a)(A,2),P=I[0],B=I[1],F=P.filter((function(e){return e})).length,U=Object(c.useState)(),R=Object(s.a)(U,2),H=R[0],X=R[1],q=Object(c.useState)([]),G=Object(s.a)(q,2),V=(G[0],G[1]),Y=Object(c.useState)(),z=Object(s.a)(Y,2),K=z[0],W=z[1],J=Object(c.useState)(),_=Object(s.a)(J,2),Q=_[0],Z=_[1],$=Object(c.useState)([]),ee=Object(s.a)($,2),te=ee[0],ne=ee[1],ce=null===K||void 0===K?void 0:K.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})),ae=Object(c.useState)(!0),re=Object(s.a)(ae,2),se=re[0],ie=re[1],oe=Object(c.useState)(!0),le=Object(s.a)(oe,2),ue=le[0],de=le[1],je=Object(c.useState)(!0),be=Object(s.a)(je,2),Oe=be[0],me=be[1],xe=Object(c.useState)([]),fe=Object(s.a)(xe,2),he=fe[0],ve=fe[1];function pe(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}Object(c.useEffect)((function(){for(var e=function(e){var t=ce.filter((function(t){return t.categorie!==he[e]}));ce=t},t=0;t<he.length;t++)e(t);ne(ce)}),[he,se,ue,Oe]);var ge=Date.now()-864e5,Ne=Date.now()-36e5,ye=Date.now()-6e4,we=Object(c.useState)(),Ce=Object(s.a)(we,2),Se=Ce[0],ke=Ce[1],De=Object(c.useState)(1),Le=Object(s.a)(De,2),Ee=Le[0],Me=Le[1],Ae=6e4*Ee,Te=e.filter((function(e){return void 0!==e})).filter((function(e){return!1===e.completed}));Object(c.useEffect)((function(){var e=Te.filter((function(e){return e.duration>ye-Ae})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());ke(n)}),[Ee]);var Ie=Object(c.useState)(),Pe=Object(s.a)(Ie,2),Be=Pe[0],Fe=Pe[1],Ue=Object(c.useState)(),Re=Object(s.a)(Ue,2),He=Re[0],Xe=Re[1],qe=Object(c.useState)(1),Ge=Object(s.a)(qe,2),Ve=Ge[0],Ye=Ge[1],ze=36e5*Ve;Object(c.useEffect)((function(){var e=Te.filter((function(e){return e.duration>Ne-ze})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Xe(n)}),[Ve]);var Ke=P;K?(Ke=K.filter((function(e){return!1!==e})),te.length>0&&(Ke=te.filter((function(e){return!1!==e})))):P&&(Ke=P.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})));var We=[];return P.length>0&&(We=Ke),Object(O.jsxs)("div",{className:"container-fluid",children:[a&&Object(O.jsx)(C,{auction:a,setAuction:o}),Object(O.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:d&&Object(O.jsx)(i.a,{variant:"danger",children:d})}),p&&Object(O.jsxs)("div",{className:"row bg-secondary pb-3",children:[Object(O.jsxs)("div",{className:"text-white bg-primary mb-3 p-1 blue",children:[Object(O.jsxs)("span",{style:{marginLeft:"20px"},children:[Object(O.jsx)("span",{className:"p-1",children:F})," Viajes el Dia: ",y]}),Object(O.jsxs)("span",{className:(null===K||void 0===K?void 0:K.length)>0?"mx-5":"d-none",children:[Object(O.jsx)("span",{className:"bg-danger p-1",children:null===K||void 0===K?void 0:K.filter((function(e){return!1===e.completed})).length})," ","Viajes Sin Completar de KL ",H]})]}),Object(O.jsx)("div",{className:"col-1"}),Object(O.jsx)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"d-none":"col-md-3 text-center mb-4 me-5",children:Object(O.jsx)(L.a,{selected:E,onChange:function(e){M(e);var t=null===e||void 0===e?void 0:e.getTime(),n=t+864e5,c=new Date(t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});w(c);var a=j.map((function(e,c){if(e.duration>t&&e.duration<n)return e}));B(a)},onFocus:function(){B([])},locale:"es",className:"pickers mb-3 form-control mt-2 w-100 bg-secondary",dateFormat:"dd 'de' MMMM 'de' yyyy"})}),Object(O.jsx)("div",{className:(null===P||void 0===P?void 0:P.length)>0?"col-md-1 fs-2 row-back":"d-none",onClick:function(){return location.reload()},children:"\ud83d\udd19"}),Object(O.jsx)("div",{className:"col-md-3 text-center",children:Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),V(H);var t=P.filter((function(e){return void 0!==e})).map((function(e){return e.email===H+"@gmail.com"&&e}));W(t)},children:Object(O.jsx)("input",{type:"text",onChange:function(e){X(e.target.value),ne([])},value:H,className:P.length>0?"w-100 form-control mt-2":"d-none",style:{width:"0"},placeholder:"Buscar por Tienda"})})}),Object(O.jsx)("div",{className:"col-1"}),Object(O.jsx)("div",{className:(null===P||void 0===P?void 0:P.length)>0?"col-md-3 mt-2":"d-none",children:Object(O.jsxs)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"w-75 fr":"d-none",onChange:function(e){return function(e){Z(e),ne([]);var t=null===K||void 0===K?void 0:K.filter((function(e){return!1!==e})),n=t;"completados"===Q?(n=t.filter((function(e){return!0!==e.completed})),ne(n)):(n=t.filter((function(e){return!1!==e.completed})),ne(n))}(e.target.value)},children:[Object(O.jsx)("input",{type:"button",className:"btn text-white btn-outline-dark",name:"drone",value:"Todos",onClick:function(){return ne([])}}),Object(O.jsxs)("label",{className:"btn text-white btn-outline-dark my-2",children:[Object(O.jsx)("input",{type:"radio",value:"completados",name:"drone",className:"d-none"}),"Completados"]}),Object(O.jsxs)("label",{className:"btn text-white btn-outline-dark",children:[Object(O.jsx)("input",{type:"radio",value:"nocompletados",name:"drone",className:"d-none"}),"Incompletos"]})]})}),Object(O.jsx)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"col-md-3 mt-2":"d-none",children:Object(O.jsxs)("div",{className:"w-75 mt-0 ",style:{marginLeft:"12.5%"},children:[Object(O.jsxs)("label",{className:"text-white mb-4 mt-1",children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){ie(!se),se?ve([].concat(Object(r.a)(he),[e.target.value])):pe(he,e.target.value)}(e)},checked:se}),"OXXO"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"text-white mb-4",children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"otro",onChange:function(e){return function(e){de(!ue),ue?ve([].concat(Object(r.a)(he),[e.target.value])):pe(he,e.target.value)}(e)},checked:ue}),"Otro"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"text-white",children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1 mb-4",value:"pago en efectivo",onChange:function(e){return function(e){me(!Oe),Oe?ve([].concat(Object(r.a)(he),[e.target.value])):pe(he,e.target.value)}(e)},checked:Oe}),"Pagos en Efectivo"]})]})})]}),u&&Object(O.jsxs)("div",{className:"d-none",children:[Object(O.jsxs)("div",{className:"d-flex flex-row justify-content-evenly p-4",children:[Object(O.jsx)("input",{type:"button",className:(null===P||void 0===P?void 0:P.length)>0?"d-none":"btn btn-primary",value:"Ultimo Minuto",onClick:function(){var e=Te.filter((function(e){return e.duration>ye-Ae})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());ke(n),Fe([]),Xe([])}}),Object(O.jsx)("input",{type:"button",className:(null===P||void 0===P?void 0:P.length)>0?"d-none":"btn btn-primary mx-1",value:"Ultima Hora",onClick:function(){var e=Te.filter((function(e){return e.duration>Ne})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Xe(n),ke([]),Fe([])}}),Object(O.jsx)("input",{type:"button",className:(null===P||void 0===P?void 0:P.length)>0?"d-none":"btn btn-primary",value:"Ultimas 24 Hrs",onClick:function(){var e=Te.filter((function(e){return e.duration>ge})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Fe(n),ke([]),Xe([])}})]}),Object(O.jsxs)("div",{className:(null===P||void 0===P?void 0:P.length)>0?"d-none":(null===Se||void 0===Se?void 0:Se.length)>0?"p-1 mb-3":"d-none",children:[Object(O.jsxs)("h4",{className:"p-1 bg-secondary text-white",children:["Taxistas con Viajes sin Completar desde el Ultimo Minuto +",Object(O.jsx)("input",{type:"number",className:"mx-5",onChange:function(e){Me(e.target.value)},value:Ee})]}),Object(O.jsx)("div",{className:"p-3 text-center mb-3",children:null===Se||void 0===Se?void 0:Se.map((function(e){return Object(O.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]}),Object(O.jsxs)("div",{className:(null===P||void 0===P?void 0:P.length)>0?"d-none":(null===He||void 0===He?void 0:He.length)>0?"p-1 mb-3":"d-none",children:[Object(O.jsxs)("h4",{className:"p-1 bg-secondary text-white",children:["Taxistas con Viajes sin Completar de la Ultima Hora +",Object(O.jsx)("input",{type:"number",className:"mx-5",onChange:function(e){Ye(e.target.value)},value:Ve})]}),Object(O.jsx)("div",{className:"p-3 text-center mb-3",children:null===He||void 0===He?void 0:He.map((function(e){return Object(O.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]}),Object(O.jsxs)("div",{className:(null===P||void 0===P?void 0:P.length)>0?"d-none":(null===Be||void 0===Be?void 0:Be.length)>0?"p-1 mb-3":"d-none",children:[Object(O.jsx)("h4",{className:"p-2 bg-secondary text-white",children:"Taxistas con viajes sin Completar de las Ultimas 24 Horas"}),Object(O.jsx)("div",{className:"p-3 text-center mb-3",children:null===Be||void 0===Be?void 0:Be.map((function(e){return Object(O.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]})]}),j&&Object(O.jsxs)("div",{className:" ",children:[u&&Object(O.jsx)("div",{className:(P.length,"d-none"),children:Object(O.jsx)(T,{})}),We.filter((function(e){return void 0!==e})).map((function(e){return Object(O.jsx)(v,{item:e,handleState:h},e.id)}))]}),Object(O.jsx)("h2",{className:"mt-2 px-3 mx-1",children:"Pedidos de oxxo"})]})},B=(n.p,n(155)),F=n(156),U=n(153),R=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),l=o[0],u=o[1],d=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useContext)(m).login,x=function(){return a(!1)},f=function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),u(""),e.prev=2,e.next=5,b(d.current.value,j.current.value);case 5:x(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),u("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{onClick:function(){return a(!0)},className:"btn text-white mx-2",children:"Entrar"}),Object(O.jsx)(B.a,{centered:!0,show:n,onHide:x,children:Object(O.jsxs)("form",{onSubmit:f,children:[Object(O.jsx)(B.a.Header,{children:Object(O.jsx)(B.a.Title,{children:"Entrar"})}),Object(O.jsxs)(B.a.Body,{children:[l&&Object(O.jsx)(i.a,{variant:"danger",children:l}),Object(O.jsxs)(F.a.Group,{children:[Object(O.jsx)(F.a.Label,{children:"Email "}),Object(O.jsx)(F.a.Control,{type:"email",required:!0,ref:d})]}),Object(O.jsxs)(F.a.Group,{children:[Object(O.jsx)(F.a.Label,{children:"Password"}),Object(O.jsx)(F.a.Control,{type:"password",required:!0,ref:j})]})]}),Object(O.jsxs)(B.a.Footer,{children:[Object(O.jsx)(U.a,{variant:"secondary",onClick:x,children:"Cancelar"}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},H=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),l=o[0],u=o[1],d=Object(c.useRef)(),j=Object(c.useRef)(),b=Object(c.useRef)(),x=Object(c.useContext)(m).register,f=function(){return a(!1)},h=function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u(""),j.current.value===b.current.value){e.next=4;break}return e.abrupt("return",u("Passwords does not match"));case 4:return e.prev=4,e.next=7,x(d.current.value,j.current.value);case 7:f(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),u(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(B.a,{centered:!0,show:n,onHide:f,children:Object(O.jsxs)("form",{onSubmit:h,children:[Object(O.jsx)(B.a.Header,{children:Object(O.jsx)(B.a.Title,{children:"Registro"})}),Object(O.jsxs)(B.a.Body,{children:[l&&Object(O.jsx)(i.a,{variant:"danger",children:l}),Object(O.jsxs)(F.a.Group,{children:[Object(O.jsx)(F.a.Label,{children:"Email"}),Object(O.jsx)(F.a.Control,{type:"email",required:!0,ref:d})]}),Object(O.jsxs)(F.a.Group,{children:[Object(O.jsx)(F.a.Label,{children:"Password"}),Object(O.jsx)(F.a.Control,{type:"password",required:!0,ref:j})]}),Object(O.jsxs)(F.a.Group,{children:[Object(O.jsx)(F.a.Label,{children:"Confirmar Password"}),Object(O.jsx)(F.a.Control,{type:"password",required:!0,ref:b})]})]}),Object(O.jsxs)(B.a.Footer,{children:[Object(O.jsx)(U.a,{variant:"secondary",onClick:f,children:"Cancelar"}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})})},X=function(){var e=Object(c.useContext)(m),t=e.currentUser,n=e.logout;return Object(O.jsx)("nav",{className:"container-fluid navbar navbar-light bg-secondary",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)("div",{className:"navbar-brand",children:"OXXO DISPLAY"}),Object(O.jsx)("div",{className:"d-flex",children:Object(O.jsx)("div",{className:"col",children:t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"btn mx-2 disabled",children:t.email}),Object(O.jsx)("div",{onClick:function(){return n()},className:"text-white btn mx-2",children:"SALIR"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(R,{}),Object(O.jsx)(H,{})]})})})]})})},q=function(){return Object(O.jsx)(x,{children:Object(O.jsxs)(k,{children:[Object(O.jsx)(X,{}),Object(O.jsx)(P,{})]})})};n(139);Object(a.render)(Object(O.jsx)(q,{}),document.getElementById("root"))},94:function(e,t,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.caa680ac.chunk.js.map