(window["webpackJsonpuser-panel"]=window["webpackJsonpuser-panel"]||[]).push([[17],{179:function(e,a,t){"use strict";t.r(a);var n=t(95),c=t(9),r=t(0),l=t.n(r),s=t(79),i=t(11),o=t(78),u=t(37),m=t(91),d=t(15),b=t(97),p=t.n(b),v=t(81),f=t(80),E=t(4),g=["danger","info","success","light","primary"],h=function(e){var a=e.plan,t=e.amount,n=void 0===t?0:t,s=e.wallet,o=e.index,u=e.coin,m=Object(r.useState)(!1),d=Object(c.a)(m,2),b=d[0],h=d[1],j=Object(E.g)();Object(r.useEffect)((function(){h(!1)}),[u]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:" col-sm-6  col-md-4 grid-margin stretch-card pricing-card"},l.a.createElement("div",{className:"card border-"+g[o]+" border pricing-card-body"},l.a.createElement("div",{className:"text-center pricing-card-head"},l.a.createElement("h2",null,Object(i.a)(a.type))),l.a.createElement("ul",{className:"list-unstyled plan-features  p-3"},l.a.createElement("li",null,Object(i.a)("planProfit"),l.a.createElement("h4",{className:"float-left font-weight-bold"},"% ",Object(i.a)(a.profit))),l.a.createElement("li",null,Object(i.a)("planInvest"),l.a.createElement("h4",{className:"float-left font-weight-bold text-success"},l.a.createElement("i",{className:"mdi mdi-arrow-up"}),n?p.a.round(p.a.div(a.invest,n),-3):n)),l.a.createElement("li",{className:"d-flex justify-content-between  w-100"},Object(i.a)("planCancelable"),l.a.createElement("span",{className:"font-weight-bold"},l.a.createElement("label",{className:"badge "+(a.cancelable?"badge-success":"badge-danger")},Object(i.a)(a.cancelable?"yes":"no"))))),l.a.createElement("div",{className:"inline-absolute center text-center"},l.a.createElement(f.a,{variant:"warning",bsPrefix:"alert alert-fill",show:b},Object(i.a)("noBalanceDoDeposit"))),l.a.createElement("div",{className:"wrapper"},l.a.createElement(v.a,{onClick:function(){b?j.push("/wallet/"+u):(null===s||void 0===s?void 0:s.balance)>0?j.push("/plans/"+u+"/"+a.id):h(!0)},className:"btn btn-outline-"+g[o]+" btn-block"},Object(i.a)(b?"deposit":"start"))))))};a.default=function(){var e=Object(r.useState)([]),a=Object(c.a)(e,2),t=a[0],b=a[1],p=Object(r.useState)([]),v=Object(c.a)(p,2),f=v[0],E=v[1],g=Object(r.useState)({}),j=Object(c.a)(g,2),O=j[0],w=j[1],N=Object(r.useState)({}),x=Object(c.a)(N,2),y=x[0],k=x[1],S=Object(r.useState)(!1),C=Object(c.a)(S,2),D=C[0],A=C[1],F=Object(r.useState)(!1),M=Object(c.a)(F,2),P=M[0],B=M[1],J=Object(r.useState)("BTC"),z=Object(c.a)(J,2),I=z[0],L=z[1],R=Object(d.a)().setting.token;return Object(r.useEffect)((function(){A(!0),Object(o.a)("plans",{cache:!0}).then((function(e){(null===e||void 0===e?void 0:e.success)?b(e.success):B(!0)})),Object(o.b)("wallet",{token:R}).then((function(e){if(null===e||void 0===e?void 0:e.success){var a,t={},c=Object(n.a)(e.success.wallet);try{for(c.s();!(a=c.n()).done;){var r=a.value;t[r.coin]=r}}catch(u){c.e(u)}finally{c.f()}w(t),E(e.success.coins);var l,s={},i=Object(n.a)(e.success.coins);try{for(i.s();!(l=i.n()).done;){var o=l.value;s[o.name]=o.price}}catch(u){i.e(u)}finally{i.f()}k(s)}else B(!0);A(!1)}))}),[]),l.a.createElement("div",null,l.a.createElement(s.a,{title:"plans",icon:"mdi-calculator"}),D&&l.a.createElement(u.a,{forDiv:!0}),P&&l.a.createElement(m.a,{title:Object(i.a)("noData")}),t.length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:Object(i.a)("pickPlan"),text:Object(i.a)("pickDesc")}),l.a.createElement("ul",{className:"nav nav-pills nav-pills-custom"},null===f||void 0===f?void 0:f.map((function(e,a){return l.a.createElement("li",{className:"nav-item",key:a},l.a.createElement("button",{type:"button",onClick:function(){return L(e.name)},className:"mb-2 btn "+(I==e.name?"btn-outline-danger":"btn-outline-light")},e.name))}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"row pricing-table"},t.map((function(e,a){var t;return l.a.createElement(h,{plan:e,amount:null===y||void 0===y?void 0:y[I],wallet:null!==(t=null===O||void 0===O?void 0:O[I])&&void 0!==t?t:null,coin:I,index:a,key:a})})))))))}},78:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return d}));var n=t(83),c=t.n(n),r=t(85),l=t(84),s=t.n(l),i=t(86),o="localhost"===window.location.hostname?"http://localhost:8000/api/":"https://stronghold.live/api/",u=Object(i.setup)({axios:s.a,baseURL:o,timeout:5e3,validateStatus:function(){return!0},cache:{maxAge:1e3}}),m=function(){var e=Object(r.a)(c.a.mark((function e(a,t){var n,r,l,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,(null===t||void 0===t?void 0:t.cache)&&(n.cache={maxAge:6e5}),e.next=5,u.get(a,n);case 5:return r=e.sent,e.next=8,r;case 8:return l=e.sent,s=l.data,e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=18,0;case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a,t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(c.a.mark((function e(a,t,n){var r,l,s,i,o,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in r={},e.prev=1,(null===n||void 0===n?void 0:n.cache)&&(r.cache={maxAge:6e5}),l=new FormData,t)l.append(s,t[s]);return i=u.post(a,l,r),e.next=8,i;case 8:return o=e.sent,(null===(m=o.data)||void 0===m?void 0:m.login)&&window.postMessage({login:!0},"*"),e.abrupt("return",m);case 14:return e.prev=14,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=19,0;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(a,t,n){return e.apply(this,arguments)}}()},79:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(11);a.a=function(e){var a=e.title,t=e.icon;return c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"},c.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-black mr-2"},c.a.createElement("i",{className:"mdi "+t}))," ",Object(r.a)(a)," "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ul",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},c.a.createElement("span",null)," ",c.a.createElement("i",{className:"mdi mdi-alert-circle-outline icon-sm text-primary align-middle"})))))}},81:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(92);a.a=function(e){return c.a.createElement("button",{className:e.className,onClick:null===e||void 0===e?void 0:e.onClick},e.loading?c.a.createElement(r.a,{as:"span",animation:"border",size:"sm"}):e.children)}},91:function(e,a,t){"use strict";var n=t(0),c=t.n(n);a.a=function(e){var a=e.title,t=e.text;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 mb-3"},c.a.createElement("div",{className:"card card-warning"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container text-center"},a&&c.a.createElement("h3",{className:"mb-3"},a),t&&c.a.createElement("span",{className:"mx-auto"},t))))))}}}]);
//# sourceMappingURL=17.0689ab9b.chunk.js.map