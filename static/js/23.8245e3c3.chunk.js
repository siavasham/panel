(window["webpackJsonpuser-panel"]=window["webpackJsonpuser-panel"]||[]).push([[23],{101:function(e,a,t){"use strict";var r=t(0),c=t.n(r);a.a=function(e){var a=e.title,t=e.text;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 mb-3"},c.a.createElement("div",{className:"card card-warning"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"container text-center"},a&&c.a.createElement("h3",{className:"mb-3"},a),t&&c.a.createElement("span",{className:"mx-auto"},t))))))}},106:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(186),c=t(112),n=t(113),l=t(114),s=t(115),m=t(15);function i(){var e=Object(m.a)().setting.lang,a=void 0===e?"fa":e;return r.a.addLocale(c),r.a.addLocale(n),r.a.addLocale(l),r.a.addLocale(s),new r.a(a)}},179:function(e,a,t){"use strict";t.r(a);var r=t(9),c=t(0),n=t.n(c),l=t(84),s=t(11),m=t(83),i=t(101),o=t(131),d=t.n(o),u=t(88),p=t(106),b=t(15);a.default=function(){var e=Object(c.useState)([]),a=Object(r.a)(e,2),t=a[0],o=a[1],v=Object(c.useState)(!1),f=Object(r.a)(v,2),E=f[0],N=f[1],g=Object(b.a)().setting,w=g.name,h=g.token,x=Object(p.a)(),j=window.location.origin+"/register?ref="+w,O=function(){N(!0),setTimeout((function(){N(!1)}),5e3)};return Object(c.useEffect)((function(){Object(m.b)("referrals",{token:h},{cache:!0}).then((function(e){(null===e||void 0===e?void 0:e.success)&&o(e.success)}))}),[]),n.a.createElement("div",null,n.a.createElement(l.a,{title:"referrals",icon:"mdi-reply"}),n.a.createElement(i.a,{text:Object(s.a)("referralDesc")}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 grid-margin stretch-card"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title pb-3"},Object(s.a)("yourReferral")),n.a.createElement("p",{className:"card-description"},Object(s.a)("referralHelp")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 col-md-6"},n.a.createElement("label",null,Object(s.a)("refLink")),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend cursor-pointer"},n.a.createElement(d.a,{component:"span","data-clipboard-text":j,onSuccess:O,className:"input-group-text text-primary mdi mdi-content-copy"})),n.a.createElement("input",{defaultValue:j,dir:"auto",type:"text",className:"form-control form-control"}))),n.a.createElement("div",{className:"col-12 col-md-6"},n.a.createElement("label",null,Object(s.a)("refCode")),n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend cursor-pointer"},n.a.createElement(d.a,{component:"span","data-clipboard-text":w,onSuccess:O,className:"input-group-text text-primary mdi mdi-content-copy"})),n.a.createElement("input",{defaultValue:w,dir:"auto",type:"text",className:"form-control form-control"})))),n.a.createElement("div",{className:"inline-absolute center text-center"},n.a.createElement(u.a,{variant:"primary",bsPrefix:"alert alert-fill",show:E},Object(s.a)("addressCopid"))))))),t&&n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 grid-margin stretch-card"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title pb-3"},Object(s.a)("yourRefers")),t.map((function(e,a){return n.a.createElement("div",{className:"row tickets-card",key:a},n.a.createElement("div",{className:"col d-flex mt-2 mb-2"},n.a.createElement("div",{className:"nowrap pl-3"},n.a.createElement("p",{className:"mb-2 font-weight-medium text-muted"},Object(s.a)("userName")),n.a.createElement("h4",{className:"font-weight-semibold mb-0 text-primary"},e.referral))),n.a.createElement("div",{className:"col d-flex mt-2 mb-2"},n.a.createElement("div",{className:"nowrap pl-3"},n.a.createElement("p",{className:"mb-2 font-weight-medium text-muted"},Object(s.a)("invested")),n.a.createElement("label",{className:"badge "+(e.invested?"badge-success":"badge-danger")},Object(s.a)(e.invested?"yes":"no")))),n.a.createElement("div",{className:"col d-flex mt-2 mb-2"},n.a.createElement("div",{className:"nowrap pl-3"},n.a.createElement("p",{className:"mb-2 font-weight-medium text-muted"},Object(s.a)("profit")),n.a.createElement("h4",{className:"font-weight-semibold mb-0"},Object(s.a)(e.profit)))),n.a.createElement("div",{className:"col d-flex mt-2 mb-2"},n.a.createElement("div",{className:"nowrap pl-3"},n.a.createElement("p",{className:"mb-2 font-weight-medium text-muted"},Object(s.a)("joinDate")),n.a.createElement("span",{className:"font-weight-semibold mb-0"},x.format(new Date(e.created_at).getTime())))))})))))))}},83:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var r=t(85),c=t.n(r),n=t(94),l=t(93),s=t.n(l),m=t(95),i="localhost"===window.location.hostname?"http://localhost:8000/api/":"https://stronghold.live/api/",o=Object(m.setup)({axios:s.a,baseURL:i,timeout:5e3,validateStatus:function(){return!0},cache:{maxAge:1e3}}),d=function(){var e=Object(n.a)(c.a.mark((function e(a,t){var r,n,l,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},e.prev=1,(null===t||void 0===t?void 0:t.cache)&&(r.cache={maxAge:6e5}),e.next=5,o.get(a,r);case 5:return n=e.sent,e.next=8,n;case 8:return l=e.sent,s=l.data,e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=18,0;case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a,t){return e.apply(this,arguments)}}(),u=function(){var e=Object(n.a)(c.a.mark((function e(a,t,r){var n,l,s,m,i,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in n={},e.prev=1,(null===r||void 0===r?void 0:r.cache)&&(n.cache={maxAge:6e5}),l=new FormData,t)l.append(s,t[s]);return m=o.post(a,l,n),e.next=8,m;case 8:return i=e.sent,(null===(d=i.data)||void 0===d?void 0:d.login)&&window.postMessage({login:!0},"*"),e.abrupt("return",d);case 14:return e.prev=14,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=19,0;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(a,t,r){return e.apply(this,arguments)}}()},84:function(e,a,t){"use strict";var r=t(0),c=t.n(r),n=t(11);a.a=function(e){var a=e.title,t=e.icon;return c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"},c.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-black mr-2"},c.a.createElement("i",{className:"mdi "+t}))," ",Object(n.a)(a)," "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ul",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},c.a.createElement("span",null)," ",c.a.createElement("i",{className:"mdi mdi-alert-circle-outline icon-sm text-primary align-middle"})))))}}}]);
//# sourceMappingURL=23.8245e3c3.chunk.js.map