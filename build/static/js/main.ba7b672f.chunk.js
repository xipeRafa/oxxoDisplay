(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(23),r=n(14),i=n(10),o=n(157),s=n(75),l=(n(88),n(145),n(146),s.a.initializeApp({apiKey:"AIzaSyDxFuYvYPsm53Q_5uvq5GZmy9qefOi7t_U",authDomain:"trip-advisor-2759d.firebaseapp.com",projectId:"trip-advisor-2759d",storageBucket:"trip-advisor-2759d.appspot.com",messagingSenderId:"756306939148",appId:"1:756306939148:web:362df3149468ebde6f8d29",measurementId:"G-5SLMPW8877"})),j=s.a.firestore.FieldValue.serverTimestamp,u=l.firestore(),d=l.storage(),b=l.auth(),O=n(2),x=Object(a.createContext)(),v=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(!0),l=Object(i.a)(s,2),j=l[0],d=l[1],v=Object(a.useState)(""),h=Object(i.a)(v,2),p=h[0],m=h[1];return Object(a.useEffect)((function(){return b.onAuthStateChanged((function(e){o(e),d(!1)}))}),[]),Object(a.useEffect)((function(){var e=setTimeout((function(){return m("")}),5e3);return function(){return clearTimeout(e)}}),[p]),Object(O.jsx)(x.Provider,{value:{currentUser:r,register:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},bidAuction:function(e){return u.collection("oxxoLider").doc(e).update({acuerdo:!0})},noteContext:function(e,t){return u.collection("oxxoLider").doc(e).update({note:t})},endAuction:function(e){return u.collection("oxxoLider").doc(e).delete()},globalMsg:p},children:!j&&t})},h=function(e){var t=e.item,n=t.duration,a=new Date(n).toLocaleTimeString("es-CL"),c=new Date(n).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(O.jsx)("div",{className:"col mb-1 p-1",children:Object(O.jsx)("div",{className:"card shadow-sm mb-2",children:Object(O.jsxs)("div",{className:"card-body px-4 pb-2 ",children:[Object(O.jsxs)("div",{className:"border row border-secondary",children:[Object(O.jsx)("span",{className:"bg-secondary p-1 col-md-3",children:Object(O.jsxs)("div",{className:"text-white px-2",children:[t.distrito,", ",t.tienda," "]})}),Object(O.jsxs)("span",{className:"p-1 col-md-2",children:[Object(O.jsx)("span",{className:"text-secondary px-2",children:"Horario "})," ",t.hora]}),Object(O.jsxs)("span",{className:"p-1 col-md-2",children:[Object(O.jsx)("span",{className:"text-secondary px-2",children:"Origen "})," ",t.origen]}),Object(O.jsxs)("span",{className:"p-1 col-md-2",children:[Object(O.jsx)("span",{className:"text-secondary px-2",children:"Destino "})," ",t.destino]}),Object(O.jsx)("span",{className:"p-1 col-md-3",children:Object(O.jsxs)("span",{className:"px-2",children:[c,", ",a.slice(0,-3)]})})]}),Object(O.jsxs)("div",{className:"mt-1",children:[Object(O.jsx)("span",{className:"text-secondary",children:"Pasajeros: "})," ",t.pasajeros]}),Object(O.jsxs)("div",{className:"mt-1",children:[Object(O.jsx)("span",{className:"text-secondary",children:"Comentarios: "})," ",null===t||void 0===t?void 0:t.description]})]})},t.id)})},p=n(154),m=n(31),f=n.n(m),g=n(43),N=n(36),C=function(e){var t=Object(a.useState)(0),n=Object(i.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(null),s=Object(i.a)(o,2),l=s[0],b=s[1];return Object(a.useState)((function(){var t=d.ref(e.itemImage.name),n=u.collection("oxxoLider");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){console.log(e)}),Object(N.a)(f.a.mark((function a(){var c,r;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.getDownloadURL();case 2:return c=a.sent,r=j(),delete e.itemImage,a.next=7,n.add(Object(g.a)(Object(g.a)({},e),{},{createdAt:r,imgUrl:c}));case 7:b(!0);case 8:case"end":return a.stop()}}),a)}))))}),[e]),{progress:c,isCompleted:l}},S=function(e){var t=e.auction,n=e.setAuction,c=C(t),r=c.progress,i=c.isCompleted;return Object(a.useEffect)((function(){i&&n(null)}),[i,n]),Object(O.jsx)(p.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(r,"%")}})},y=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){var t=u.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(g.a)(Object(g.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{docs:c}},w=Object(a.createContext)(),D=function(e){var t=e.children,n=y("oxxoLider").docs,c=Object(r.a)(n),o=Object(a.useState)(c),s=Object(i.a)(o,2),l=s[0],j=s[1];return Object(O.jsx)(w.Provider,{value:{handleDB:function(e){j(e)},DB:l},children:t})},E=n(76),L=n.n(E),I=(n(93),function(){var e=y("oxxoLider").docs,t=Object(r.a)(e),n=Object(a.useContext)(w).handleDB,c=Object(a.useState)([]),o=Object(i.a)(c,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){if("DateMaxToMin"!==s[0])if("Date"!==s[0]);else{var e=t.sort((function(e,t){return e.createdAt-t.createdAt}));n(e)}else{var a=t.sort((function(e,t){return t.createdAt-e.createdAt}));n(a)}}),[s]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"w-75",children:[Object(O.jsx)("h2",{children:"Filtros"}),Object(O.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:s,children:[Object(O.jsx)("option",{children:"Filtrar por"}),Object(O.jsx)("option",{value:"Date",children:"Fecha MIN to MAX"}),Object(O.jsx)("option",{value:"DateMaxToMin",children:"Fecha Max to Min"})]})]})})}),M=function(){var e=y("oxxoLider").docs,t=Object(r.a)(e),n=Object(a.useContext)(w).handleDB,c=Object(a.useState)([]),o=Object(i.a)(c,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){if("all"!==s[0])if("done"!==s[0])if("fallen"!==s[0]);else{var e=t.filter((function(e){return!1===e.completed}));n(e)}else{var a=t.filter((function(e){return!0===e.completed}));n(a)}else{var c=t.filter((function(e){return e}));n(c)}}),[s]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"w-75 mt-5",children:[Object(O.jsx)("h2",{children:"Resultados"}),Object(O.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:s,children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),Object(O.jsx)("option",{value:"done",children:"Completados"}),Object(O.jsx)("option",{value:"fallen",children:"Sin Completar"})]})]})})},A=function(){var e=Object(a.useContext)(w).handleDB,t=y("oxxoLider").docs,n=Object(r.a)(t),c=Object(a.useState)(!0),o=Object(i.a)(c,2),s=o[0],l=o[1],j=Object(a.useState)(!0),u=Object(i.a)(j,2),d=u[0],b=u[1],x=Object(a.useState)(!0),v=Object(i.a)(x,2),h=v[0],p=v[1],m=Object(a.useState)([]),f=Object(i.a)(m,2),g=f[0],N=f[1];function C(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}return Object(a.useEffect)((function(){for(var t=function(e){var t=n.filter((function(t){return t.categorie!==g[e]}));n=t},a=0;a<g.length;a++)t(a);e(n)}),[g,s,d,h]),Object(a.useEffect)((function(){setTimeout((function(){l(!s),l(!0)}),200)}),[t]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"w-75 mt-5",children:[Object(O.jsx)("h2",{children:"Clientes"}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){l(!s),s?N([].concat(Object(r.a)(g),[e.target.value])):C(g,e.target.value)}(e)},checked:s}),"oxxo"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"otro",onChange:function(e){return function(e){b(!d),d?N([].concat(Object(r.a)(g),[e.target.value])):C(g,e.target.value)}(e)},checked:d}),"otro"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"pago en efectivo",onChange:function(e){return function(e){p(!h),h?N([].concat(Object(r.a)(g),[e.target.value])):C(g,e.target.value)}(e)},checked:h}),"Pago en Efectivo"]})]})})},H=function(){return Object(O.jsxs)("div",{style:{paddingLeft:"16px"},className:"d-flex justify-content-between flex-column pb-5  ",children:[Object(O.jsx)(I,{}),Object(O.jsx)(M,{}),Object(O.jsx)(A,{})]})},B=(n(94),n(81));Object(E.registerLocale)("es",B.a);var R=function(){var e,t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],l=Object(a.useContext)(x),j=l.currentUser,u=l.globalMsg,d=Object(a.useContext)(w).DB,b=!!j&&j.email;e="superadmin@gmail.com"===b||"superadmin2@gmail.com"===b||"superadmin3@gmail.com"===b?d.sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})):[];var v=Object(a.useState)(),p=Object(i.a)(v,2),m=p[0],f=p[1],g=Object(a.useState)(),N=Object(i.a)(g,2),C=N[0],y=N[1],D=Object(a.useState)([]),E=Object(i.a)(D,2),I=E[0],M=E[1],A=I.filter((function(e){return e})).length,B=Object(a.useState)(),R=Object(i.a)(B,2),P=R[0],F=R[1];console.log(P);var U=Object(a.useState)([]),T=Object(i.a)(U,2),k=(T[0],T[1]),V=Object(a.useState)(),Y=Object(i.a)(V,2),Q=Y[0],z=Y[1];console.log("n:",Q),Object(a.useEffect)((function(){k(P);var e=I.filter((function(e){return void 0!==e})).map((function(e){return e.tienda===P&&e}));z(e)}),[P]);var G=Object(a.useState)(),W=Object(i.a)(G,2),K=(W[0],W[1],Object(a.useState)([])),J=Object(i.a)(K,2),q=(J[0],J[1]),X=null===Q||void 0===Q?void 0:Q.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})),Z=Object(a.useState)(!0),_=Object(i.a)(Z,2),$=_[0],ee=(_[1],Object(a.useState)(!0)),te=Object(i.a)(ee,2),ne=te[0],ae=(te[1],Object(a.useState)(!0)),ce=Object(i.a)(ae,2),re=ce[0],ie=(ce[1],Object(a.useState)([])),oe=Object(i.a)(ie,2),se=oe[0];oe[1];Object(a.useEffect)((function(){for(var e=function(e){var t=X.filter((function(t){return t.categorie!==se[e]}));X=t},t=0;t<se.length;t++)e(t);q(X)}),[se,$,ne,re]);var le=Date.now()-864e5,je=Date.now()-36e5,ue=Date.now()-6e4,de=Object(a.useState)(),be=Object(i.a)(de,2),Oe=be[0],xe=be[1],ve=Object(a.useState)(1),he=Object(i.a)(ve,2),pe=he[0],me=he[1],fe=6e4*pe,ge=e.filter((function(e){return void 0!==e})).filter((function(e){return!1===e.completed}));Object(a.useEffect)((function(){var e=ge.filter((function(e){return e.duration>ue-fe})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());xe(n)}),[pe]);var Ne=Object(a.useState)(),Ce=Object(i.a)(Ne,2),Se=Ce[0],ye=Ce[1],we=Object(a.useState)(),De=Object(i.a)(we,2),Ee=De[0],Le=De[1],Ie=Object(a.useState)(1),Me=Object(i.a)(Ie,2),Ae=Me[0],He=Me[1],Be=36e5*Ae;Object(a.useEffect)((function(){var e=ge.filter((function(e){return e.duration>je-Be})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Le(n)}),[Ae]);var Re=I;Q?Re=Q.filter((function(e){return!1!==e})):I&&(Re=I.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})));var Pe=[];return I.length>0&&(Pe=Re),Object(O.jsxs)("div",{className:"container-fluid",children:[c&&Object(O.jsx)(S,{auction:c,setAuction:s}),Object(O.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:u&&Object(O.jsx)(o.a,{variant:"danger",children:u})}),b&&Object(O.jsxs)("div",{className:"row bg-secondary pb-3",children:[Object(O.jsxs)("div",{className:"text-white bg-primary mb-3 p-1 blue",children:[Object(O.jsxs)("span",{style:{marginLeft:"20px"},children:[Object(O.jsx)("span",{className:"p-1",children:A})," Viajes el Dia: ",m]}),Object(O.jsxs)("span",{className:(null===Q||void 0===Q?void 0:Q.length)>0?"mx-5":"d-none",children:[" ","Viajes Para ",P]})]}),Object(O.jsx)("div",{className:"col-1"}),Object(O.jsx)("div",{className:(null===Q||void 0===Q?void 0:Q.length)>0?"d-none":"col-md-3 text-center mb-4 me-5",children:Object(O.jsx)(L.a,{selected:C,onChange:function(e){y(e);var t=null===e||void 0===e?void 0:e.getTime(),n=t+864e5,a=new Date(t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});f(a);var c=d.map((function(e,a){if(e.duration>t&&e.duration<n)return e}));M(c)},locale:"es",className:"pickers mb-3 form-control mt-2 w-100 bg-secondary",dateFormat:"dd 'de' MMMM 'de' yyyy"})}),Object(O.jsx)("div",{className:(null===I||void 0===I?void 0:I.length)>0?"col-md-1 fs-2 row-back":"d-none",onClick:function(){return location.reload()},children:"\ud83d\udd19"}),Object(O.jsx)("div",{className:"col-md-3 text-center",children:Object(O.jsxs)("select",{className:I.length>0?"w-100 form-control mt-2":"d-none",onChange:function(e){F(e.target.value)},children:[Object(O.jsx)("option",{children:"Selecciona Una Tienda Distrito 1"}),Object(O.jsx)("option",{value:"Altares II-50AUF",children:"Altares II-50AUF"}),Object(O.jsx)("option",{value:"Apolo-50OAP",children:"Apolo-50OAP"}),Object(O.jsx)("option",{value:"Bachoco-50BCC",children:"Bachoco-50BCC"}),Object(O.jsx)("option",{value:"Balderrama-50OBD",children:"Balderrama-50OBD"}),Object(O.jsx)("option",{value:"Banus-509Q1",children:"Banus-509Q1"}),Object(O.jsx)("option",{value:"Basalto-50YFF",children:"Basalto-50YFF"}),Object(O.jsx)("option",{value:"Bosco-50U8C",children:"Bosco-50U8C"}),Object(O.jsx)("option",{value:"Bugambilias-50BUB",children:"Bugambilias-50BUB"}),Object(O.jsx)("option",{value:"BugambiliasII-50BWU",children:"BugambiliasII-50BWU"}),Object(O.jsx)("option",{value:"Canarios-50OTE",children:"Canarios-50OTE"}),Object(O.jsx)("option",{value:"Castanas-50LYW",children:"Castanas-50LYW"}),Object(O.jsx)("option",{value:"Choyal-50GBE",children:"Choyal-50GBE"}),Object(O.jsx)("option",{value:"Colinas-50KLN",children:"Colinas-50KLN"}),Object(O.jsx)("option",{value:"Cordobes-50CDK",children:"Cordobes-50CDK"}),Object(O.jsx)("option",{value:"Cumbres-50HCB",children:"Cumbres-50HCB"}),Object(O.jsx)("option",{value:"Del Cedro-50EIE",children:"Del Cedro-50EIE"}),Object(O.jsx)("option",{value:"Del Sol-50DPU",children:"Del Sol-50DPU"}),Object(O.jsx)("option",{value:"Diego Rivera-50NFC",children:"Diego Rivera-50NFC"}),Object(O.jsx)("option",{value:"DIF-50XIF",children:"DIF-50XIF"}),Object(O.jsx)("option",{value:"Dunas-50DUN",children:"Dunas-50DUN"}),Object(O.jsx)("option",{value:"El Esplendor-50XR6",children:"El Esplendor-50XR6"}),Object(O.jsx)("option",{value:"El Tijerito-500M3",children:"El Tijerito-500M3"}),Object(O.jsx)("option",{value:"El Tronconal-50TWN",children:"El Tronconal-50TWN"}),Object(O.jsx)("option",{value:"El Mezquite-501RM",children:"El Mezquite-501RM"}),Object(O.jsx)("option",{value:"Expo-50EMR",children:"Expo-50EMR"}),Object(O.jsx)("option",{value:"Flamingo-50FEN",children:"Flamingo-50FEN"}),Object(O.jsx)("option",{value:"Gomez Morin-50MSH",children:"Gomez Morin-50MSH"}),Object(O.jsx)("option",{value:"Hacienda-50HOH",children:"Hacienda-50HOH"}),Object(O.jsx)("option",{value:"Himes-50ARS",children:"Himes-50ARS"}),Object(O.jsx)("option",{value:"Isabeles-50ILS",children:"Isabeles-50ILS"}),Object(O.jsx)("option",{value:"Jardines-50JIN",children:"Jardines-50JIN"}),Object(O.jsx)("option",{value:"Jesus Garcia-50IVF",children:"Jesus Garcia-50IVF"}),Object(O.jsx)("option",{value:"Kino II-50YUQ",children:"Kino II-50YUQ"}),Object(O.jsx)("option",{value:"La Coyotita-50CYY",children:"La Coyotita-50CYY"}),Object(O.jsx)("option",{value:"La Floresta-50OWO",children:"La Floresta-50OWO"}),Object(O.jsx)("option",{value:"La Salida-50Q07",children:"La Salida-50Q07"}),Object(O.jsx)("option",{value:"Las Huertas-50EVQ",children:"Las Huertas-50EVQ"}),Object(O.jsx)("option",{value:"Lazaro-501QF",children:"Lazaro-501QF"}),Object(O.jsx)("option",{value:"Libertad-50HLI",children:"Libertad-50HLI"}),Object(O.jsx)("option",{value:"Maxxi-50QAE",children:"Maxxi-50QAE"}),Object(O.jsx)("option",{value:"Mendoza-50MDZ",children:"Mendoza-50MDZ"}),Object(O.jsx)("option",{value:"Montecarlo-50JMC",children:"Montecarlo-50JMC"}),Object(O.jsx)("option",{value:"Morelos-50IHD",children:"Morelos-50IHD"}),Object(O.jsx)("option",{value:"Narvaez-50VEV",children:"Narvaez-50VEV"}),Object(O.jsx)("option",{value:"Novena-50DKV",children:"Novena-50DKV"}),Object(O.jsx)("option",{value:"Nueva Palmira-50S2X",children:"Nueva Palmira-50S2X"}),Object(O.jsx)("option",{value:"Nuevo Hermosillo-50ONH",children:"Nuevo Hermosillo-50ONH"}),Object(O.jsx)("option",{value:"oceguera-507tq",children:"oceguera-507tq"}),Object(O.jsx)("option",{value:"Olivares-50IVA",children:"Olivares-50IVA"}),Object(O.jsx)("option",{value:"Oriente-50OTY",children:"Oriente-50OTY"}),Object(O.jsx)("option",{value:"Papagos-50AL3",children:"Papagos-50AL3"}),Object(O.jsx)("option",{value:"Paseo Real-50N05",children:"Paseo Real-50N05"}),Object(O.jsx)("option",{value:"Perinorte-50QPI",children:"Perinorte-50QPI"}),Object(O.jsx)("option",{value:"Prados del Sol-50HPS",children:"Prados del Sol-50HPS"}),Object(O.jsx)("option",{value:"Progreso-50PGG",children:"Progreso-50PGG"}),Object(O.jsx)("option",{value:"Pueblitos-50EBL",children:"Pueblitos-50EBL"}),Object(O.jsx)("option",{value:"Real del Arco-50RAD",children:"Real del Arco-50RAD"}),Object(O.jsx)("option",{value:"Real del Carmen-50KOW",children:"Real del Carmen-50KOW"}),Object(O.jsx)("option",{value:"Republica-50UMR",children:"Republica-50UMR"}),Object(O.jsx)("option",{value:"Reyes-50HRY",children:"Reyes-50HRY"}),Object(O.jsx)("option",{value:"Rio-50YHZ",children:"Rio-50YHZ"}),Object(O.jsx)("option",{value:"Romanza-50QAJ",children:"Romanza-50QAJ"}),Object(O.jsx)("option",{value:"Sahuaro-50SAH",children:"Sahuaro-50SAH"}),Object(O.jsx)("option",{value:"San Francisco-50SOH",children:"San Francisco-50SOH"}),Object(O.jsx)("option",{value:"Santa Clara-50SKA",children:"Santa Clara-50SKA"}),Object(O.jsx)("option",{value:"Supremo-50XDH",children:"Supremo-50XDH"}),Object(O.jsx)("option",{value:"Topografos-50UWS",children:"Topografos-50UWS"}),Object(O.jsx)("option",{value:"Tops-50WOT",children:"Tops-50WOT"}),Object(O.jsx)("option",{value:"Valencia-50VLY",children:"Valencia-50VLY"}),Object(O.jsx)("option",{value:"Villa Verde-50VNU",children:"Villa Verde-50VNU"}),Object(O.jsx)("option",{value:"Vinedos-50QZZ",children:"Vinedos-50QZZ"}),Object(O.jsx)("option",{value:"Yunke-50hzy",children:"Yunke-50hzy"})]})})]}),j&&Object(O.jsxs)("div",{className:"d-none",children:[Object(O.jsxs)("div",{className:"d-flex flex-row justify-content-evenly p-4",children:[Object(O.jsx)("input",{type:"button",className:(null===I||void 0===I?void 0:I.length)>0?"d-none":"btn btn-primary",value:"Ultimo Minuto",onClick:function(){var e=ge.filter((function(e){return e.duration>ue-fe})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());xe(n),ye([]),Le([])}}),Object(O.jsx)("input",{type:"button",className:(null===I||void 0===I?void 0:I.length)>0?"d-none":"btn btn-primary mx-1",value:"Ultima Hora",onClick:function(){var e=ge.filter((function(e){return e.duration>je})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Le(n),xe([]),ye([])}}),Object(O.jsx)("input",{type:"button",className:(null===I||void 0===I?void 0:I.length)>0?"d-none":"btn btn-primary",value:"Ultimas 24 Hrs",onClick:function(){var e=ge.filter((function(e){return e.duration>le})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());ye(n),xe([]),Le([])}})]}),Object(O.jsxs)("div",{className:(null===I||void 0===I?void 0:I.length)>0?"d-none":(null===Oe||void 0===Oe?void 0:Oe.length)>0?"p-1 mb-3":"d-none",children:[Object(O.jsxs)("h4",{className:"p-1 bg-secondary text-white",children:["Taxistas con Viajes sin Completar desde el Ultimo Minuto +",Object(O.jsx)("input",{type:"number",className:"mx-5",onChange:function(e){me(e.target.value)},value:pe})]}),Object(O.jsx)("div",{className:"p-3 text-center mb-3",children:null===Oe||void 0===Oe?void 0:Oe.map((function(e){return Object(O.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]}),Object(O.jsxs)("div",{className:(null===I||void 0===I?void 0:I.length)>0?"d-none":(null===Ee||void 0===Ee?void 0:Ee.length)>0?"p-1 mb-3":"d-none",children:[Object(O.jsxs)("h4",{className:"p-1 bg-secondary text-white",children:["Taxistas con Viajes sin Completar de la Ultima Hora +",Object(O.jsx)("input",{type:"number",className:"mx-5",onChange:function(e){He(e.target.value)},value:Ae})]}),Object(O.jsx)("div",{className:"p-3 text-center mb-3",children:null===Ee||void 0===Ee?void 0:Ee.map((function(e){return Object(O.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]}),Object(O.jsxs)("div",{className:(null===I||void 0===I?void 0:I.length)>0?"d-none":(null===Se||void 0===Se?void 0:Se.length)>0?"p-1 mb-3":"d-none",children:[Object(O.jsx)("h4",{className:"p-2 bg-secondary text-white",children:"Taxistas con viajes sin Completar de las Ultimas 24 Horas"}),Object(O.jsx)("div",{className:"p-3 text-center mb-3",children:null===Se||void 0===Se?void 0:Se.map((function(e){return Object(O.jsx)("span",{className:"border border-danger mx-2 p-2 bg-white",children:e.email.slice(0,-10)})}))})]})]}),d&&Object(O.jsxs)("div",{className:"pt-3",children:[j&&Object(O.jsx)("div",{className:(I.length,"d-none"),children:Object(O.jsx)(H,{})}),Pe.filter((function(e){return void 0!==e})).map((function(e){return Object(O.jsx)(h,{item:e},e.id)}))]})]})},P=(n.p,n(155)),F=n(156),U=n(153),T=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),l=s[0],j=s[1],u=Object(a.useRef)(),d=Object(a.useRef)(),b=Object(a.useContext)(x).login,v=function(){return c(!1)},h=function(){var e=Object(N.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(""),e.prev=2,e.next=5,b(u.current.value,d.current.value);case 5:v(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),j("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{onClick:function(){return c(!0)},className:"btn text-white mx-2",children:"Entrar"}),Object(O.jsx)(P.a,{centered:!0,show:n,onHide:v,children:Object(O.jsxs)("form",{onSubmit:h,children:[Object(O.jsx)(P.a.Header,{children:Object(O.jsx)(P.a.Title,{children:"Entrar"})}),Object(O.jsxs)(P.a.Body,{children:[l&&Object(O.jsx)(o.a,{variant:"danger",children:l}),Object(O.jsxs)(F.a.Group,{children:[Object(O.jsx)(F.a.Label,{children:"Email "}),Object(O.jsx)(F.a.Control,{type:"email",required:!0,ref:u})]}),Object(O.jsxs)(F.a.Group,{children:[Object(O.jsx)(F.a.Label,{children:"Password"}),Object(O.jsx)(F.a.Control,{type:"password",required:!0,ref:d})]})]}),Object(O.jsxs)(P.a.Footer,{children:[Object(O.jsx)(U.a,{variant:"secondary",onClick:v,children:"Cancelar"}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},k=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),l=s[0],j=s[1],u=Object(a.useRef)(),d=Object(a.useRef)(),b=Object(a.useRef)(),v=Object(a.useContext)(x).register,h=function(){return c(!1)},p=function(){var e=Object(N.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),j(""),d.current.value===b.current.value){e.next=4;break}return e.abrupt("return",j("Passwords does not match"));case 4:return e.prev=4,e.next=7,v(u.current.value,d.current.value);case 7:h(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),j(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(P.a,{centered:!0,show:n,onHide:h,children:Object(O.jsxs)("form",{onSubmit:p,children:[Object(O.jsx)(P.a.Header,{children:Object(O.jsx)(P.a.Title,{children:"Registro"})}),Object(O.jsxs)(P.a.Body,{children:[l&&Object(O.jsx)(o.a,{variant:"danger",children:l}),Object(O.jsxs)(F.a.Group,{children:[Object(O.jsx)(F.a.Label,{children:"Email"}),Object(O.jsx)(F.a.Control,{type:"email",required:!0,ref:u})]}),Object(O.jsxs)(F.a.Group,{children:[Object(O.jsx)(F.a.Label,{children:"Password"}),Object(O.jsx)(F.a.Control,{type:"password",required:!0,ref:d})]}),Object(O.jsxs)(F.a.Group,{children:[Object(O.jsx)(F.a.Label,{children:"Confirmar Password"}),Object(O.jsx)(F.a.Control,{type:"password",required:!0,ref:b})]})]}),Object(O.jsxs)(P.a.Footer,{children:[Object(O.jsx)(U.a,{variant:"secondary",onClick:h,children:"Cancelar"}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})})},V=function(){var e=Object(a.useContext)(x),t=e.currentUser,n=e.logout;return Object(O.jsx)("nav",{className:"container-fluid navbar navbar-light bg-secondary",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)("div",{className:"navbar-brand",children:"OXXO DISPLAY TC-10"}),Object(O.jsx)("div",{className:"d-flex",children:Object(O.jsx)("div",{className:"col",children:t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"btn mx-2 disabled",children:t.email}),Object(O.jsx)("div",{onClick:function(){return n()},className:"text-white btn mx-2",children:"Salir"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{}),Object(O.jsx)(k,{})]})})})]})})},Y=function(){return Object(O.jsx)(v,{children:Object(O.jsxs)(D,{children:[Object(O.jsx)(V,{}),Object(O.jsx)(R,{})]})})};n(139);Object(c.render)(Object(O.jsx)(Y,{}),document.getElementById("root"))},94:function(e,t,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.ba7b672f.chunk.js.map