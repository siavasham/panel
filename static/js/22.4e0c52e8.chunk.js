(window["webpackJsonpuser-panel"]=window["webpackJsonpuser-panel"]||[]).push([[22],{104:function(e,a,t){e.exports=t.p+"static/media/circle.953c9ca0.svg"},165:function(e,a,t){"use strict";t.r(a);var r=t(9),c=t(0),n=t.n(c),l=t(79),s=t(14),i=t(78),d=t(15),m=t(89),o=t(96),u=t.n(o),b=t(6),v=t(37),g={open:"badge-gradient-success",progress:"badge-gradient-warning","on-hold":"badge-gradient-info",done:"badge-gradient-dark",rejected:"badge-gradient-danger"};a.default=function(){var e=Object(c.useState)([]),a=Object(r.a)(e,2),o=a[0],f=a[1],p=Object(c.useState)([]),E=Object(r.a)(p,2),h=E[0],N=E[1],j=Object(c.useState)(!1),w=Object(r.a)(j,2),O=w[0],x=w[1],y=Object(d.a)().setting.token;Object(c.useEffect)((function(){x(!0),Object(i.b)("tickets",{token:y},{cache:!0}).then((function(e){(null===e||void 0===e?void 0:e.success)&&f(e.success)})),Object(i.b)("statistics",{token:y},{cache:!0}).then((function(e){if(x(!1),null===e||void 0===e?void 0:e.success){var a={};for(var t in e.success)a[t]=u.a.round(e.success[t],1);N(a)}}))}),[]);var k=(null===h||void 0===h?void 0:h.deposit)+(null===h||void 0===h?void 0:h.profit)+(null===h||void 0===h?void 0:h.referral);return O?n.a.createElement(v.a,{forDiv:!0}):n.a.createElement("div",null,n.a.createElement(l.a,{title:"dashboard",icon:"mdi-home"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},n.a.createElement("div",{className:"card bg-gradient-primary card-img-holder text-white overflow-hidden"},n.a.createElement("div",{className:"card-body"},n.a.createElement("img",{src:t(104),className:"card-img-absolute",alt:"circle"}),n.a.createElement("h4",{className:"font-weight-normal mb-3"},Object(s.a)("totalInvest")," ",n.a.createElement("i",{className:"mdi  mdi-import mdi-24px float-left"})),n.a.createElement("h2",{className:"mb-5"},"$ ",Object(m.c)(null===h||void 0===h?void 0:h.deposit)),n.a.createElement(b.b,{to:"/wallet"},n.a.createElement("h6",{className:"card-text text-black"},Object(s.a)("incAmount")))))),n.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},n.a.createElement("div",{className:"card  bg-gradient-success card-img-holder text-white  overflow-hidden"},n.a.createElement("div",{className:"card-body"},n.a.createElement("img",{src:t(104),className:"card-img-absolute",alt:"circle"}),n.a.createElement("h4",{className:"font-weight-normal mb-3"},Object(s.a)("totalProfit")," ",n.a.createElement("i",{className:"mdi mdi-diamond-outline mdi-24px float-left"})),n.a.createElement("h2",{className:"mb-5"},"$ ",Object(m.c)(null===h||void 0===h?void 0:h.profit)),n.a.createElement(b.b,{to:"/plans"},n.a.createElement("h6",{className:"card-text text-black"},Object(s.a)("startInvesting")))))),n.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},n.a.createElement("div",{className:"card bg-gradient-danger card-img-holder text-white  overflow-hidden"},n.a.createElement("div",{className:"card-body"},n.a.createElement("img",{src:t(104),className:"card-img-absolute",alt:"circle"}),n.a.createElement("h4",{className:"font-weight-normal mb-3"},Object(s.a)("totalReferrals")," ",n.a.createElement("i",{className:"mdi mdi-reply mdi-24px float-left"})),n.a.createElement("h2",{className:"mb-5"},"$ ",Object(m.c)(null===h||void 0===h?void 0:h.referral)),n.a.createElement(b.b,{to:"/referral"},n.a.createElement("h6",{className:"card-text text-black"},Object(s.a)("inviteFirends"))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 grid-margin stretch-card"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},Object(s.a)("atGlance")),n.a.createElement("div",{className:"multi-graph mx-auto"},n.a.createElement("div",{className:"graph",data:Object(s.a)("totalInvest"),style:{"--percentage":Math.round((null===h||void 0===h?void 0:h.deposit)/k*100),"--fill":"#b66dff"}}),n.a.createElement("div",{className:"graph",data:Object(s.a)("totalProfit"),style:{"--percentage":Math.round((null===h||void 0===h?void 0:h.profit)/k*100),"--fill":"#00b050"}}),n.a.createElement("div",{className:"graph",data:Object(s.a)("totalReferrals"),style:{"--percentage":Math.round((null===h||void 0===h?void 0:h.referral)/k*100),"--fill":"#fe7c96"}})),n.a.createElement("div",{className:"rounded-legend legend-vertical legend-bottom-left pt-4 "},n.a.createElement("ul",{className:"row "},n.a.createElement("li",{className:"col-4 text-center"},n.a.createElement("span",{className:"legend-dots bg-info"}),Object(s.a)("invest")),n.a.createElement("li",{className:"col-4 text-center"},n.a.createElement("span",{className:"legend-dots bg-success"}),Object(s.a)("profit")),n.a.createElement("li",{className:"col-4 text-center"},n.a.createElement("span",{className:"legend-dots bg-danger "}),Object(s.a)("referrals"))))))),n.a.createElement("div",{className:"col-6 grid-margin stretch-card"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},Object(s.a)("recentTicket")),n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null," ",Object(s.a)("subject")," "),n.a.createElement("th",null," ",Object(s.a)("status")," "))),n.a.createElement("tbody",null,null===o||void 0===o?void 0:o.map((function(e,a){return n.a.createElement("tr",{key:a},n.a.createElement("td",null,n.a.createElement(b.b,{to:"ticket/view/"+e.id},e.title," ")),n.a.createElement("td",null,n.a.createElement(b.b,{to:"ticket/view/"+e.id},n.a.createElement("label",{className:"badge "+g[e.status]},Object(s.a)(e.status)))))}))))))))))}},78:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return o}));var r=t(83),c=t.n(r),n=t(85),l=t(84),s=t.n(l),i=t(86),d=Object(i.setup)({axios:s.a,baseURL:"https://stronghold.live/api/",timeout:5e3,validateStatus:function(){return!0},cache:{maxAge:1e3}}),m=function(){var e=Object(n.a)(c.a.mark((function e(a,t){var r,n,l,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},e.prev=1,(null===t||void 0===t?void 0:t.cache)&&(r.cache={maxAge:6e5}),e.next=5,d.get(a,r);case 5:return n=e.sent,e.next=8,n;case 8:return l=e.sent,s=l.data,e.abrupt("return",s);case 13:return e.prev=13,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=18,0;case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(a,t){return e.apply(this,arguments)}}(),o=function(){var e=Object(n.a)(c.a.mark((function e(a,t,r){var n,l,s,i,m,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in n={},e.prev=1,(null===r||void 0===r?void 0:r.cache)&&(n.cache={maxAge:6e5}),l=new FormData,t)l.append(s,t[s]);return i=d.post(a,l,n),e.next=8,i;case 8:return m=e.sent,(null===(o=m.data)||void 0===o?void 0:o.login)&&window.postMessage({login:!0},"*"),e.abrupt("return",o);case 14:return e.prev=14,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=19,0;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(a,t,r){return e.apply(this,arguments)}}()},79:function(e,a,t){"use strict";var r=t(0),c=t.n(r),n=t(14);a.a=function(e){var a=e.title,t=e.icon;return c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"},c.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-black mr-2"},c.a.createElement("i",{className:"mdi "+t}))," ",Object(n.a)(a)," "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ul",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},c.a.createElement("span",null)," ",c.a.createElement("i",{className:"mdi mdi-alert-circle-outline icon-sm text-primary align-middle"})))))}},89:function(e,a,t){"use strict";function r(e){if(void 0!=e){var a="",t={"\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u06f0":"0"};e=e.toString();for(var r=0;r<e.length;r++)t[e[r]]?a+=t[e[r]]:a+=e[r];return a}}t.d(a,"a",(function(){return r})),t.d(a,"d",(function(){return c})),t.d(a,"c",(function(){return n})),t.d(a,"b",(function(){return l}));var c=function(e){return/\S+@\S+\.\S+/.test(e)};function n(e){return"undefined"==typeof e||"null"==e?"":e.length<2?e+"":(""+e).replace(/,/g,"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}function l(e){for(var a=window.location.search.substring(1).split("&"),t=0;t<a.length;t++){var r=a[t].split("=");if(r[0]==e)return r[1]}return!1}}}]);
//# sourceMappingURL=22.4e0c52e8.chunk.js.map