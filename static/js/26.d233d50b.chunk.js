(window["webpackJsonpuser-panel"]=window["webpackJsonpuser-panel"]||[]).push([[26],{167:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(0),c=a.n(r),s=a(79),i=(a(12),a(153)),l=a.n(i),u=a(78);t.default=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],m=t[1],o=Object(r.useState)("BTC"),d=Object(n.a)(o,2),p=d[0],v=d[1];return Object(r.useEffect)((function(){Object(u.a)("coins",{cache:!0}).then((function(e){(null===e||void 0===e?void 0:e.success)&&m(e.success)}))}),[]),c.a.createElement("div",null,c.a.createElement(s.a,{title:"candle",icon:"mdi-chart-line"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body",style:{minHeight:450}},c.a.createElement("div",{className:"d-sm-flex pb-4 mb-4"},c.a.createElement("ul",{className:"nav nav-pills nav-pills-custom w-100"},null===a||void 0===a?void 0:a.map((function(e,t){return"USDT"==e.name?null:c.a.createElement("li",{className:"nav-item",key:t},c.a.createElement("button",{type:"button",onClick:function(){return v(e.name)},className:"mb-2 btn "+(p==e.name?"btn-outline-danger":"btn-outline-light")},e.name))})))),c.a.createElement("div",{className:"d-flex",style:{minHeight:300}},c.a.createElement(l.a,{symbol:p+"USDT",theme:i.Themes.DARK})))))))}},78:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return o}));var n=a(83),r=a.n(n),c=a(87),s=a(84),i=a.n(s),l=a(88),u=Object(l.setup)({axios:i.a,baseURL:"http://localhost:8000/api/",timeout:5e3,validateStatus:function(){return!0},cache:{maxAge:1e3}}),m=function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c,s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,(null===a||void 0===a?void 0:a.cache)&&(n.cache={maxAge:6e5}),e.next=5,u.get(t,n);case 5:return c=e.sent,e.next=8,c;case 8:return s=e.sent,i=s.data,e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=18,0;case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,s,i,l,m,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i in c={},e.prev=1,(null===n||void 0===n?void 0:n.cache)&&(c.cache={maxAge:6e5}),s=new FormData,a)s.append(i,a[i]);return l=u.post(t,s,c),e.next=8,l;case 8:return m=e.sent,(null===(o=m.data)||void 0===o?void 0:o.login)&&window.postMessage({login:!0},"*"),e.abrupt("return",o);case 14:return e.prev=14,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=19,0;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,a,n){return e.apply(this,arguments)}}()},79:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(12);t.a=function(e){var t=e.title,a=e.icon;return r.a.createElement("div",{className:"page-header"},r.a.createElement("h3",{className:"page-title"},r.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-black mr-2"},r.a.createElement("i",{className:"mdi "+a}))," ",Object(c.a)(t)," "),r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ul",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},r.a.createElement("span",null)," ",r.a.createElement("i",{className:"mdi mdi-alert-circle-outline icon-sm text-primary align-middle"})))))}}}]);
//# sourceMappingURL=26.d233d50b.chunk.js.map