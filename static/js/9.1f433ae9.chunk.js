(window["webpackJsonpuser-panel"]=window["webpackJsonpuser-panel"]||[]).push([[9],{101:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.title,n=e.text;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mb-3"},r.a.createElement("div",{className:"card card-warning"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"container text-center"},t&&r.a.createElement("h3",{className:"mb-3"},t),n&&r.a.createElement("span",{className:"mx-auto"},n))))))}},105:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(41);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw i}}}}},177:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(8),i=n(105),o=n(9),c=n(0),l=n.n(c),s=n(84),u=n(11),d=n(83),m=n(39),f=n(101),p=n(15),v=n(96),b=n(86),E=n(88),h=n(107),O=n.n(h);t.default=function(e){var t,n,h,x,g,j=e.match,N=null!==(t=j.params.coin)&&void 0!==t?t:null,y=null!==(n=j.params.plan)&&void 0!==n?n:null,w=Object(c.useState)({}),C=Object(o.a)(w,2),k=C[0],S=C[1],T=Object(c.useState)([]),D=Object(o.a)(T,2),L=D[0],R=D[1],M=Object(c.useState)({}),P=Object(o.a)(M,2),I=P[0],A=P[1],F=Object(c.useState)([]),U=Object(o.a)(F,2),H=U[0],X=U[1],V=Object(c.useState)(!1),G=Object(o.a)(V,2),J=G[0],Y=G[1],Z=Object(c.useState)(!1),$=Object(o.a)(Z,2),q=$[0],z=$[1],B=Object(c.useState)({plan:y,coin:N}),W=Object(o.a)(B,2),K=W[0],Q=W[1],_=Object(c.useState)(!1),ee=Object(o.a)(_,2),te=ee[0],ne=ee[1],ae=Object(c.useState)(null),re=Object(o.a)(ae,2),ie=re[0],oe=re[1],ce=Object(p.a)().setting.token;Object(c.useEffect)((function(){Y(!0),Object(d.a)("plans",{cache:!0}).then((function(e){if(null===e||void 0===e?void 0:e.success){var t,n=[],a={},r=Object(i.a)(e.success);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.push({key:o.id,val:Object(u.a)(o.type)}),a[o.id]=o}}catch(c){r.e(c)}finally{r.f()}S(a),R(n)}else z(!0)})),Object(d.b)("wallet",{token:ce}).then((function(e){if(null===e||void 0===e?void 0:e.success){var t,n=[],a={},r=Object(i.a)(e.success.wallet);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.push({key:o.coin,val:o.coin}),a[o.coin]=o}}catch(c){r.e(c)}finally{r.f()}le("amount",a[null===K||void 0===K?void 0:K.coin].balance),A(a),X(n)}else z(!0);Y(!1)}))}),[]);var le=function(e,t){var n,i;(Q(Object(r.a)(Object(r.a)({},K),{},Object(a.a)({},e,t))),"amount"==e)&&((t>(null===(n=I[null===K||void 0===K?void 0:K.coin])||void 0===n?void 0:n.balance)||t<=0)&&Q(Object(r.a)(Object(r.a)({},K),{},Object(a.a)({},e,null===(i=I[null===K||void 0===K?void 0:K.coin])||void 0===i?void 0:i.balance))))};return l.a.createElement("div",null,l.a.createElement(s.a,{title:N,icon:"mdi-calculator"}),J&&l.a.createElement(m.a,{forDiv:!0}),q&&l.a.createElement(f.a,{title:Object(u.a)("noData")}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 grid-margin stretch-card"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"pt-3",autoComplete:"off",onSubmit:function(e){e.preventDefault(),0!=(null===K||void 0===K?void 0:K.amount)&&(ne(!0),Object(d.b)("investing",Object(r.a)(Object(r.a)({},K),{},{token:ce})).then((function(e){ne(null),oe((null===e||void 0===e?void 0:e.success)?"success":"error")})))}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement(v.a,{name:"planType",data:L,value:null===K||void 0===K?void 0:K.plan,onChange:function(e){return le("plan",e)}})),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement(v.a,{name:"coinType",data:H,value:null===K||void 0===K?void 0:K.coin,onChange:function(e){return le("coin",e)}})),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement(v.a,{name:"amount",value:null===K||void 0===K?void 0:K.amount,onChange:function(e){return le("amount",e)},info:l.a.createElement("div",{className:"d-flex justify-content-between cursor-pointer",onClick:function(){var e;return le("amount",null===(e=I[null===K||void 0===K?void 0:K.coin])||void 0===e?void 0:e.balance)}},l.a.createElement("span",null,Object(u.a)("investable")),l.a.createElement("span",null,null===(h=I[null===K||void 0===K?void 0:K.coin])||void 0===h?void 0:h.balance))})),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement(v.a,{name:"profit",value:(null===K||void 0===K?void 0:K.amount)?O.a.round(O.a.div(O.a.mul(null!==(x=null===k||void 0===k||null===(g=k[null===K||void 0===K?void 0:K.plan])||void 0===g?void 0:g.profit)&&void 0!==x?x:1,null===K||void 0===K?void 0:K.amount),100),-6):0,disabled:!0}))),l.a.createElement(E.a,{variant:"success",show:"success"==ie},Object(u.a)("successInvest")),l.a.createElement(E.a,{variant:"danger",show:"error"==ie},Object(u.a)("errorInvest")),l.a.createElement("div",{className:"mt-3"},l.a.createElement(b.a,{loading:te,className:"btn btn-info btn-lg font-weight-medium"},Object(u.a)("startInvest")))))))))}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(85),r=n.n(a),i=n(94),o=n(93),c=n.n(o),l=n(95),s="localhost"===window.location.hostname?"http://localhost:8000/api/":"https://stronghold.live/api/",u=Object(l.setup)({axios:c.a,baseURL:s,timeout:5e3,validateStatus:function(){return!0},cache:{maxAge:1e3}}),d=function(){var e=Object(i.a)(r.a.mark((function e(t,n){var a,i,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.prev=1,(null===n||void 0===n?void 0:n.cache)&&(a.cache={maxAge:6e5}),e.next=5,u.get(t,a);case 5:return i=e.sent,e.next=8,i;case 8:return o=e.sent,c=o.data,e.abrupt("return",c);case 13:return e.prev=13,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=18,0;case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a){var i,o,c,l,s,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in i={},e.prev=1,(null===a||void 0===a?void 0:a.cache)&&(i.cache={maxAge:6e5}),o=new FormData,n)o.append(c,n[c]);return l=u.post(t,o,i),e.next=8,l;case 8:return s=e.sent,(null===(d=s.data)||void 0===d?void 0:d.login)&&window.postMessage({login:!0},"*"),e.abrupt("return",d);case 14:return e.prev=14,e.t0=e.catch(1),window.postMessage({notify:["error","try-later"]},"*"),e.next=19,0;case 19:return e.abrupt("return",e.sent);case 20:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t,n,a){return e.apply(this,arguments)}}()},84:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(11);t.a=function(e){var t=e.title,n=e.icon;return r.a.createElement("div",{className:"page-header"},r.a.createElement("h3",{className:"page-title"},r.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-black mr-2"},r.a.createElement("i",{className:"mdi "+n}))," ",Object(i.a)(t)," "),r.a.createElement("nav",{"aria-label":"breadcrumb"},r.a.createElement("ul",{className:"breadcrumb"},r.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},r.a.createElement("span",null)," ",r.a.createElement("i",{className:"mdi mdi-alert-circle-outline icon-sm text-primary align-middle"})))))}},86:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(99);t.a=function(e){return r.a.createElement("button",{className:e.className,onClick:null===e||void 0===e?void 0:e.onClick},e.loading?r.a.createElement(i.a,{as:"span",animation:"border",size:"sm"}):e.children)}},87:function(e,t,n){"use strict";var a=n(1),r=n(3),i=n(10),o=n.n(i),c=n(0),l=n.n(c),s=n(7),u=(n(2),n(24)),d=n.n(u),m=!1,f=l.a.createContext(null),p=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r="exited",a.appearStatus="entering"):r="entered":r=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:r},a.nextCallback=null,a}Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,r=this.props.nodeRef?[a]:[d.a.findDOMNode(this),a],i=r[0],o=r[1],c=this.getTimeouts(),l=a?c.appear:c.enter;!e&&!n||m?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(l,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:d.a.findDOMNode(this);t&&!m?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:d.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],o=r[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,a=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(r.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return l.a.createElement(f.Provider,{value:null},"function"===typeof n?n(e,a):l.a.cloneElement(l.a.Children.only(n),a))},t}(l.a.Component);function v(){}p.contextType=f,p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},p.UNMOUNTED="unmounted",p.EXITED="exited",p.ENTERING="entering",p.ENTERED="entered",p.EXITING="exiting";var b,E=p,h=n(92);function O(e,t){var n=Object(h.a)(e,(function(a){a.target===e&&(n(),t(a))}))}var x=((b={}).entering="show",b.entered="show",b),g=l.a.forwardRef((function(e,t){var n=e.className,i=e.children,s=Object(r.a)(e,["className","children"]),u=Object(c.useCallback)((function(e){!function(e){e.offsetHeight}(e),s.onEnter&&s.onEnter(e)}),[s]);return l.a.createElement(E,Object(a.a)({ref:t,addEndListener:O},s,{onEnter:u}),(function(e,t){return l.a.cloneElement(i,Object(a.a)({},t,{className:o()("fade",n,i.props.className,x[e])}))}))}));g.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},g.displayName="Fade";t.a=g},88:function(e,t,n){"use strict";var a=n(1),r=n(3),i=n(10),o=n.n(i),c=n(0),l=n.n(c),s=n(22),u=n(14),d=n(6),m=n(87),f=n(90),p=n(89),v=n(25),b=n(23),E=Object(p.a)("h4");E.displayName="DivStyledAsH4";var h=Object(v.a)("alert-heading",{Component:E}),O=Object(v.a)("alert-link",{Component:b.a}),x={show:!0,transition:m.a,closeLabel:"Close alert"},g=l.a.forwardRef((function(e,t){var n=Object(s.a)(e,{show:"onClose"}),i=n.bsPrefix,c=n.show,p=n.closeLabel,v=n.className,b=n.children,E=n.variant,h=n.onClose,O=n.dismissible,x=n.transition,g=Object(r.a)(n,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),j=Object(d.a)(i,"alert"),N=Object(u.a)((function(e){h&&h(!1,e)})),y=!0===x?m.a:x,w=l.a.createElement("div",Object(a.a)({role:"alert"},y?void 0:g,{ref:t,className:o()(v,j,E&&j+"-"+E,O&&j+"-dismissible")}),O&&l.a.createElement(f.a,{onClick:N,label:p}),b);return y?l.a.createElement(y,Object(a.a)({unmountOnExit:!0},g,{ref:void 0,in:c}),w):c?w:null}));g.displayName="Alert",g.defaultProps=x,g.Link=O,g.Heading=h,t.a=g},89:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n.n(r),o=n(10),c=n.n(o);t.a=function(e){return i.a.forwardRef((function(t,n){return i.a.createElement("div",Object(a.a)({},t,{ref:n,className:c()(t.className,e)}))}))}},90:function(e,t,n){"use strict";var a=n(1),r=n(3),i=n(2),o=n.n(i),c=n(0),l=n.n(c),s=n(10),u=n.n(s),d={label:o.a.string.isRequired,onClick:o.a.func},m=l.a.forwardRef((function(e,t){var n=e.label,i=e.onClick,o=e.className,c=Object(r.a)(e,["label","onClick","className"]);return l.a.createElement("button",Object(a.a)({ref:t,type:"button",className:u()("close",o),onClick:i},c),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},n))}));m.displayName="CloseButton",m.propTypes=d,m.defaultProps={label:"Close"},t.a=m},91:function(e,t,n){"use strict";var a=n(38);function r(e,t){return function(e){var t=Object(a.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var l=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",a="";if("string"===typeof t)return e.style.getPropertyValue(c(t))||r(e).getPropertyValue(c(t));Object.keys(t).forEach((function(r){var i=t[r];i||0===i?!function(e){return!(!e||!l.test(e))}(r)?n+=c(r)+": "+i+";":a+=r+"("+i+") ":e.style.removeProperty(c(r))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(91),r=n(20);function i(e,t,n){void 0===n&&(n=5);var a=!1,i=setTimeout((function(){a||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(r.a)(e,"transitionend",(function(){a=!0}),{once:!0});return function(){clearTimeout(i),o()}}function o(e,t,n,o){null==n&&(n=function(e){var t=Object(a.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var c=i(e,n,o),l=Object(r.a)(e,"transitionend",t);return function(){c(),l()}}},96:function(e,t,n){"use strict";var a=n(103),r=n(0),i=n.n(r),o=n(11),c=n(97),l=n.n(c);t.a=function(e){var t=e.type,n=void 0===t?"text":t,r=e.name,c=e.multiLine,s=void 0!==c&&c,u=e.data,d=void 0===u?null:u,m=e.value,f=e.onChange,p=e.error,v=Object(a.a)(e,["type","name","multiLine","data","value","onChange","error"]);return i.a.createElement("div",{className:"form-group "+(p?"has-danger":"")},i.a.createElement("label",{htmlFor:r},Object(o.a)(r)),d?i.a.createElement("select",Object.assign({id:r,name:r,value:m,onChange:function(e){return f(e.target.value)},className:"form-control form-control-lg "+(p?"form-control-danger":"")},v),d.map((function(e,t){return i.a.createElement("option",{value:l.a.isObject(e)?e.key:e,key:t}," ",l.a.isObject(e)?e.val:Object(o.a)(e))}))):s?i.a.createElement("textarea",Object.assign({id:r,name:r,dir:"auto",value:m,onChange:function(e){return f(e.target.value)},className:"form-control form-control-lg "+(p?"form-control-danger":""),rows:5},v)):i.a.createElement("input",Object.assign({id:r,name:r,type:n,value:null!==m&&void 0!==m?m:"",onChange:function(e){return f(e.target.value)},autoComplete:"off",dir:"auto",className:"form-control form-control-lg "+(p?"form-control-danger":"")},v)),i.a.createElement("label",{className:"error mt-2 text-danger"},"object"==typeof p?p.map((function(e){return Object(o.a)(e)+" "})):Object(o.a)(p)),"info"in v&&i.a.createElement("label",{className:"info mt-2 text-info w-100"},v.info))}}}]);
//# sourceMappingURL=9.1f433ae9.chunk.js.map