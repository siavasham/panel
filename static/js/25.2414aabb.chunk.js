(window["webpackJsonpuser-panel"]=window["webpackJsonpuser-panel"]||[]).push([[25],{100:function(e,t,a){"use strict";function n(e){if(void 0!=e){var t="",a={"\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u06f0":"0"};e=e.toString();for(var n=0;n<e.length;n++)a[e[n]]?t+=a[e[n]]:t+=e[n];return t}}a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return c}));var r=function(e){return/\S+@\S+\.\S+/.test(e)};function o(e){return"undefined"==typeof e||"null"==e?"":e.length<2?e+"":(""+e).replace(/,/g,"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}function c(e){for(var t=window.location.search.substring(1).split("&"),a=0;a<t.length;a++){var n=t[a].split("=");if(n[0]==e)return n[1]}return!1}},183:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(9),o=a(0),c=a.n(o),l=a(4),i=a(5),u=a(11),s=a(86),m=a(96),d=a(83),f=a(100),v=(a(97),a(15));t.default=function(){var e=Object(v.a)(),t=e.session,p=e.setSession,g=Object(l.g)(),b=Object(o.useState)(!1),h=Object(r.a)(b,2),w=h[0],j=h[1],E=Object(o.useState)({}),x=Object(r.a)(E,2),O=x[0],N=x[1],y=Object(f.b)("ref");Object(o.useEffect)((function(){y&&p({referral:y})}),[]);var C=function(e,t){p(Object(n.a)({},e,t))};return c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex align-items-center auth px-0"},c.a.createElement("div",{className:"row w-100 mx-0"},c.a.createElement("div",{className:"col-md-7 col-lg-6  mx-auto box-max"},c.a.createElement("div",{className:"auth-form-light  py-4 px-4 px-sm-5"},c.a.createElement("div",{className:"brand-logo text-center"},c.a.createElement("img",{src:a(56),alt:"logo"})),c.a.createElement("form",{className:"pt-3",autoComplete:"off",onSubmit:function(e){e.preventDefault(),j(!0);var a=t.name,n=t.email,r=t.password,o=t.referral,c=void 0===o?"":o;Object(d.b)("register",{name:a,email:n,password:r,referral:c}).then((function(e){if(j(!1),e.success)g.push("/activate");else if(e.error){var t={};for(var a in e.error)t[a]=[a,e.error[a][0]];N(t)}else g.push("/activate")}))}},c.a.createElement(m.a,{name:"name",value:null===t||void 0===t?void 0:t.name,onChange:function(e){return C("name",e)},error:null===O||void 0===O?void 0:O.name}),c.a.createElement(m.a,{name:"email",value:null===t||void 0===t?void 0:t.email,onChange:function(e){return C("email",e)},error:null===O||void 0===O?void 0:O.email}),c.a.createElement(m.a,{type:"password",name:"password",value:null===t||void 0===t?void 0:t.password,onChange:function(e){return C("password",e)},error:null===O||void 0===O?void 0:O.password}),!y&&c.a.createElement(m.a,{name:"referralCode",value:null===t||void 0===t?void 0:t.referral,onChange:function(e){return C("referral",e)}}),c.a.createElement("div",{className:"mt-3"},c.a.createElement(s.a,{loading:w,className:"btn btn-block btn-info btn-lg font-weight-medium auth-form-btn"},Object(u.a)("signUp"))),c.a.createElement("div",{className:"text-center mt-4 font-weight-light"},Object(u.a)("haveAccount")," ",c.a.createElement(i.b,{to:"/login",className:"text-info"},Object(u.a)("login")))))))))}},83:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(85),r=a.n(n),o=a(94),c=a(93),l=a.n(c),i=a(95),u="localhost"===window.location.hostname?"http://localhost:8000/api/":"https://stronghold.live/api/",s=Object(i.setup)({axios:l.a,baseURL:u,timeout:5e3,validateStatus:function(){return!0},cache:{maxAge:1e3}}),m=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,o,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,(null===a||void 0===a?void 0:a.cache)&&(n.cache={maxAge:6e5}),e.next=5,s.get(t,n);case 5:return o=e.sent,e.next=8,o;case 8:return c=e.sent,l=c.data,e.abrupt("return",l);case 13:return e.prev=13,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=18,0;case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n){var o,c,l,i,u,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(l in o={},e.prev=1,(null===n||void 0===n?void 0:n.cache)&&(o.cache={maxAge:6e5}),c=new FormData,a)c.append(l,a[l]);return i=s.post(t,c,o),e.next=8,i;case 8:return u=e.sent,(null===(m=u.data)||void 0===m?void 0:m.login)&&window.postMessage({login:!0},"*"),e.abrupt("return",m);case 14:return e.prev=14,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=19,0;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,a,n){return e.apply(this,arguments)}}()},86:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(99);t.a=function(e){return r.a.createElement("button",{className:e.className,onClick:null===e||void 0===e?void 0:e.onClick},e.loading?r.a.createElement(o.a,{as:"span",animation:"border",size:"sm"}):e.children)}},96:function(e,t,a){"use strict";var n=a(103),r=a(0),o=a.n(r),c=a(11),l=a(97),i=a.n(l);t.a=function(e){var t=e.type,a=void 0===t?"text":t,r=e.name,l=e.multiLine,u=void 0!==l&&l,s=e.data,m=void 0===s?null:s,d=e.value,f=e.onChange,v=e.error,p=Object(n.a)(e,["type","name","multiLine","data","value","onChange","error"]);return o.a.createElement("div",{className:"form-group "+(v?"has-danger":"")},o.a.createElement("label",{htmlFor:r},Object(c.a)(r)),m?o.a.createElement("select",Object.assign({id:r,name:r,value:d,onChange:function(e){return f(e.target.value)},className:"form-control form-control-lg "+(v?"form-control-danger":"")},p),m.map((function(e,t){return o.a.createElement("option",{value:i.a.isObject(e)?e.key:e,key:t}," ",i.a.isObject(e)?e.val:Object(c.a)(e))}))):u?o.a.createElement("textarea",Object.assign({id:r,name:r,dir:"auto",value:d,onChange:function(e){return f(e.target.value)},className:"form-control form-control-lg "+(v?"form-control-danger":""),rows:5},p)):o.a.createElement("input",Object.assign({id:r,name:r,type:a,value:null!==d&&void 0!==d?d:"",onChange:function(e){return f(e.target.value)},autoComplete:"off",dir:"auto",className:"form-control form-control-lg "+(v?"form-control-danger":"")},p)),o.a.createElement("label",{className:"error mt-2 text-danger"},"object"==typeof v?v.map((function(e){return Object(c.a)(e)+" "})):Object(c.a)(v)),"info"in p&&o.a.createElement("label",{className:"info mt-2 text-info w-100"},p.info))}}}]);
//# sourceMappingURL=25.2414aabb.chunk.js.map