(window["webpackJsonpuser-panel"]=window["webpackJsonpuser-panel"]||[]).push([[23],{172:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(9),o=n(0),c=n.n(o),l=n(4),i=n(6),u=n(12),s=n(80),m=n(87),d=n(78),f=n(89),v=(n(93),n(15));t.default=function(){var e=Object(v.a)(),t=e.session,p=e.setSession,g=Object(l.g)(),b=Object(o.useState)(!1),h=Object(r.a)(b,2),w=h[0],E=h[1],x=Object(o.useState)({}),j=Object(r.a)(x,2),O=j[0],N=j[1],C=Object(f.b)("ref");Object(o.useEffect)((function(){C&&p({referral:C})}),[]);var y=function(e,t){p(Object(a.a)({},e,t))};return c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex align-items-center auth px-0"},c.a.createElement("div",{className:"row w-100 mx-0"},c.a.createElement("div",{className:"col-md-7 col-lg-6  mx-auto box-max"},c.a.createElement("div",{className:"auth-form-light  py-4 px-4 px-sm-5"},c.a.createElement("div",{className:"brand-logo text-center"},c.a.createElement("img",{src:n(51),alt:"logo"})),c.a.createElement("form",{className:"pt-3",autoComplete:"off",onSubmit:function(e){e.preventDefault(),E(!0);var n=t.name,a=t.email,r=t.password,o=t.referral,c=void 0===o?"":o;Object(d.b)("register",{name:n,email:a,password:r,referral:c}).then((function(e){if(E(!1),e.success)g.push("/activate");else if(e.error){var t={};for(var n in e.error)t[n]=[n,e.error[n][0]];N(t)}else g.push("/activate")}))}},c.a.createElement(m.a,{name:"name",value:null===t||void 0===t?void 0:t.name,onChange:function(e){return y("name",e)},error:null===O||void 0===O?void 0:O.name}),c.a.createElement(m.a,{name:"email",value:null===t||void 0===t?void 0:t.email,onChange:function(e){return y("email",e)},error:null===O||void 0===O?void 0:O.email}),c.a.createElement(m.a,{type:"password",name:"password",value:null===t||void 0===t?void 0:t.password,onChange:function(e){return y("password",e)},error:null===O||void 0===O?void 0:O.password}),!C&&c.a.createElement(m.a,{name:"referralCode",value:null===t||void 0===t?void 0:t.referral,onChange:function(e){return y("referral",e)}}),c.a.createElement("div",{className:"mt-3"},c.a.createElement(s.a,{loading:w,className:"btn btn-block btn-info btn-lg font-weight-medium auth-form-btn"},Object(u.a)("signUp"))),c.a.createElement("div",{className:"text-center mt-4 font-weight-light"},Object(u.a)("haveAccount")," ",c.a.createElement(i.b,{to:"/login",className:"text-info"},Object(u.a)("login")))))))))}},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(83),r=n.n(a),o=n(85),c=n(84),l=n.n(c),i=n(86),u=Object(i.setup)({axios:l.a,baseURL:"https://stronghold.live/api/",timeout:5e3,validateStatus:function(){return!0},cache:{maxAge:1e3}}),s=function(){var e=Object(o.a)(r.a.mark((function e(t,n){var a,o,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.prev=1,(null===n||void 0===n?void 0:n.cache)&&(a.cache={maxAge:6e5}),e.next=5,u.get(t,a);case 5:return o=e.sent,e.next=8,o;case 8:return c=e.sent,l=c.data,e.abrupt("return",l);case 13:return e.prev=13,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=18,0;case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a){var o,c,l,i,s,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(l in o={},e.prev=1,(null===a||void 0===a?void 0:a.cache)&&(o.cache={maxAge:6e5}),c=new FormData,n)c.append(l,n[l]);return i=u.post(t,c,o),e.next=8,i;case 8:return s=e.sent,(null===(m=s.data)||void 0===m?void 0:m.login)&&window.postMessage({login:!0},"*"),e.abrupt("return",m);case 14:return e.prev=14,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=19,0;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n,a){return e.apply(this,arguments)}}()},80:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(90);t.a=function(e){return r.a.createElement("button",{className:e.className,onClick:null===e||void 0===e?void 0:e.onClick},e.loading?r.a.createElement(o.a,{as:"span",animation:"border",size:"sm"}):e.children)}},87:function(e,t,n){"use strict";var a=n(94),r=n(0),o=n.n(r),c=n(12);t.a=function(e){var t=e.type,n=void 0===t?"text":t,r=e.name,l=e.multiLine,i=void 0!==l&&l,u=e.data,s=void 0===u?null:u,m=e.value,d=e.onChange,f=e.error,v=Object(a.a)(e,["type","name","multiLine","data","value","onChange","error"]);return o.a.createElement("div",{className:"form-group "+(f?"has-danger":"")},o.a.createElement("label",{htmlFor:r},Object(c.a)(r)),s?o.a.createElement("select",Object.assign({id:r,name:r,value:m,onChange:function(e){return d(e.target.value)},className:"form-control form-control-lg "+(f?"form-control-danger":"")},v),s.map((function(e,t){return o.a.createElement("option",{value:e}," ",Object(c.a)(e))}))):i?o.a.createElement("textarea",Object.assign({id:r,name:r,dir:"auto",value:m,onChange:function(e){return d(e.target.value)},className:"form-control form-control-lg "+(f?"form-control-danger":""),rows:5},v)):o.a.createElement("input",Object.assign({id:r,name:r,type:n,value:null!==m&&void 0!==m?m:"",onChange:function(e){return d(e.target.value)},autoComplete:"off",dir:"auto",className:"form-control form-control-lg "+(f?"form-control-danger":"")},v)),o.a.createElement("label",{className:"error mt-2 text-danger"},"object"==typeof f?f.map((function(e){return Object(c.a)(e)+" "})):Object(c.a)(f)),"info"in v&&o.a.createElement("label",{className:"info mt-2 text-info w-100"},v.info))}},89:function(e,t,n){"use strict";function a(e){if(void 0!=e){var t="",n={"\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u06f0":"0"};e=e.toString();for(var a=0;a<e.length;a++)n[e[a]]?t+=n[e[a]]:t+=e[a];return t}}n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c}));var r=function(e){return/\S+@\S+\.\S+/.test(e)};function o(e){return"undefined"==typeof e||"null"==e?"":e.length<2?e+"":(""+e).replace(/,/g,"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,")}function c(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var a=t[n].split("=");if(a[0]==e)return a[1]}return!1}}}]);
//# sourceMappingURL=23.560c9699.chunk.js.map