(window["webpackJsonpuser-panel"]=window["webpackJsonpuser-panel"]||[]).push([[18],{179:function(e,t,a){"use strict";a.r(t);var n=a(97),r=a(9),c=a(0),l=a.n(c),i=a(79),s=a(12),u=a(89),o=a(15),m=a(6),d=a(96),f=a.n(d),v=function(e){var t,a,n=e.coin,r=e.wallet;e.onData,Object(o.a)().setting.token;return Object(c.useEffect)((function(){}),[]),l.a.createElement("div",{className:"card card-statistics"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"d-flex  justify-content-between"},l.a.createElement("div",{className:""},l.a.createElement("div",{className:"coin "+n.name})),l.a.createElement("div",{className:""},l.a.createElement("p",{className:"mb-3 text-left "},n.fullname),l.a.createElement("div",{className:"d-flex align-items-center justify-content-between"},l.a.createElement("p",{className:"text-muted mb-0"},Object(u.c)(f.a.mul(null!==(t=r.balance)&&void 0!==t?t:0,n.price)),l.a.createElement("i",{className:"mdi mdi-currency-usd text-primary"})),l.a.createElement("h3",{className:"font-weight-medium text-left  mb-0  mr-3"},null!==(a=r.balance)&&void 0!==a?a:0)))),l.a.createElement("div",{className:"d-flex mt-5"},l.a.createElement(m.b,{to:"wallet/"+n.name,className:"btn btn-outline-primary btn-block"},Object(s.a)("deposit")," ",r.balance>0&&" / "+Object(s.a)("withdraw")))))},b=a(78),p=a(37),E=a(92);t.default=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],u=t[1],m=Object(c.useState)({}),d=Object(r.a)(m,2),f=d[0],w=d[1],g=Object(c.useState)(!1),h=Object(r.a)(g,2),y=h[0],N=h[1],j=Object(c.useState)(!1),x=Object(r.a)(j,2),O=x[0],S=x[1],k=Object(o.a)().setting,A=(k.name,k.token);return Object(c.useEffect)((function(){N(!0),Object(b.b)("wallet",{token:A}).then((function(e){if(null===e||void 0===e?void 0:e.success){var t,a={},r=Object(n.a)(e.success.wallet);try{for(r.s();!(t=r.n()).done;){var c=t.value;a[c.coin]=c}}catch(l){r.e(l)}finally{r.f()}w(a),u(e.success.coins)}else S(!0);N(!1)}))}),[]),l.a.createElement("div",null,l.a.createElement(i.a,{title:"wallet",icon:"mdi-wallet"}),y&&l.a.createElement(p.a,{forDiv:!0}),O&&l.a.createElement(E.a,{title:Object(s.a)("noData")}),l.a.createElement("div",{className:"row"},null===a||void 0===a?void 0:a.map((function(e,t){var a;return l.a.createElement("div",{key:t,className:"col-xl-4 col-lg-4 col-md-4 col-sm-6 grid-margin stretch-card"},l.a.createElement(v,{coin:e,wallet:null!==(a=null===f||void 0===f?void 0:f[e.name])&&void 0!==a?a:{}}))}))))}},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var n=a(83),r=a.n(n),c=a(85),l=a(84),i=a.n(l),s=a(86),u=Object(s.setup)({axios:i.a,baseURL:"https://stronghold.live/api/",timeout:5e3,validateStatus:function(){return!0},cache:{maxAge:1e3}}),o=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c,l,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,(null===a||void 0===a?void 0:a.cache)&&(n.cache={maxAge:6e5}),e.next=5,u.get(t,n);case 5:return c=e.sent,e.next=8,c;case 8:return l=e.sent,i=l.data,e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=18,0;case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,l,i,s,o,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i in c={},e.prev=1,(null===n||void 0===n?void 0:n.cache)&&(c.cache={maxAge:6e5}),l=new FormData,a)l.append(i,a[i]);return s=u.post(t,l,c),e.next=8,s;case 8:return o=e.sent,(null===(m=o.data)||void 0===m?void 0:m.login)&&window.postMessage({login:!0},"*"),e.abrupt("return",m);case 14:return e.prev=14,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=19,0;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,a,n){return e.apply(this,arguments)}}()},79:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(12);t.a=function(e){var t=e.title,a=e.icon;return r.a.createElement("div",{className:"page-header"},r.a.createElement("h3",{className:"page-title"},r.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-black mr-2"},r.a.createElement("i",{className:"mdi "+a}))," ",Object(c.a)(t)," "),r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ul",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},r.a.createElement("span",null)," ",r.a.createElement("i",{className:"mdi mdi-alert-circle-outline icon-sm text-primary align-middle"})))))}},89:function(e,t,a){"use strict";function n(e){if(void 0!=e){var t="",a={"\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u06f0":"0"};e=e.toString();for(var n=0;n<e.length;n++)a[e[n]]?t+=a[e[n]]:t+=e[n];return t}}a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return l}));var r=function(e){return/\S+@\S+\.\S+/.test(e)};function c(e){return"undefined"==typeof e||"null"==e?"":e.length<2?e+"":(""+e).replace(/,/g,"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}function l(e){for(var t=window.location.search.substring(1).split("&"),a=0;a<t.length;a++){var n=t[a].split("=");if(n[0]==e)return n[1]}return!1}},92:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.title,a=e.text;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mb-3"},r.a.createElement("div",{className:"card card-warning"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"container text-center"},t&&r.a.createElement("h3",{className:"mb-3"},t),a&&r.a.createElement("span",{className:"mx-auto"},a))))))}},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(40);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,c=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw c}}}}}}]);
//# sourceMappingURL=18.61cc7103.chunk.js.map