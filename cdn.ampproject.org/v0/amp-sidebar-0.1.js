;
(self.AMP=self.AMP||[]).push({m:0,v:"2208242209000",n:"amp-sidebar",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t,i){return(n=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function r(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function a(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(i){var e=s(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return o(this,n)}}function h(t){return t?Array.prototype.slice.call(t):[]}var u=Array.isArray;function f(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function c(t,i){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,i){if(t){if("string"==typeof t)return f(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,v,d=Object.prototype;function m(t){return 1==(null==t?void 0:t.nodeType)}function p(t,i,n,r,s,e,o,a,h,u,f){return t}function b(t){return(t.ownerDocument||t).defaultView}function y(t,i){return t.replace(/^|,/g,"$&".concat(i," "))}function w(t,i){return t.closest?t.closest(i):function(t,i,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(i(r))return r;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,i)}(t,i)}))}function g(t){return function(t,i){for(var n=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,o=void 0,"string"==typeof(e=s=r)?o=e:m(e)&&(o=e.tagName),!(o&&o.toLowerCase().startsWith("i-")||s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("placeholder")||s.hasAttribute("fallback")||s.hasAttribute("overflow")))&&n.push(r);var s,e,o;return n}(t)}function k(t){var i=t.isConnected;if(void 0!==i)return i;for(var n=t;(n=x(n)).host;)n=n.host;return n.nodeType===Node.DOCUMENT_NODE}function x(t){if(Node.prototype.getRootNode)return t.getRootNode();var i,n;for(i=t;i.parentNode&&(!(n=i)||"I-AMPHTML-SHADOW-ROOT"!=n.tagName&&(11!=n.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(n)));i=i.parentNode);return i}function M(t){try{t.focus()}catch(t){}}function A(t){var i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;var n=t.message,r=t.stack,s=new Error(n);for(var e in t)s[e]=t[e];return s.stack=r,s}function O(t){for(var i,n=null,r="",s=c(arguments,!0);!(i=s()).done;){var e=i.value;e instanceof Error&&!n?n=A(e):(r&&(r+=" "),r+=e)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function S(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function E(t){var i=O.apply(null,arguments);setTimeout((function(){throw S(i),i}))}function j(t){try{for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){E(t)}}d.hasOwnProperty,d.toString;var D=["Webkit","webkit","Moz","moz","ms","O","o"],X={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function z(t,i,n,r,s){var e=function(t,i,n){if(i.startsWith("--"))return i;var r;v||(r=Object.create(null),v=r);var s=v[i];if(!s||n){if(s=i,void 0===t[i]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),o=function(t,i){for(var n=0;n<D.length;n++){var r=D[n]+i;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(s=o)}n||(v[i]=s)}return s}(t.style,i,s);if(e){var o,a=r?n+r:n;t.style.setProperty((o=e.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),D.some((function(t){return o.startsWith(t+"-")}))?"-".concat(o):o),a)}}function R(t,i){for(var n in i)z(t,n,i[n])}function P(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}function _(t,i){return t.getComputedStyle(i)||X}var I=/vertical/,T=new WeakMap,C=new WeakMap,W=new WeakMap;function B(t){var i=T.get(t);return i||(i=new t.ResizeObserver(L),T.set(t,i)),i}function L(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],s=r.target;if(!i.has(s)){i.add(s);var e=C.get(s);if(e){W.set(s,r);for(var o=0;o<e.length;o++){var a=e[o],h=a.callback;N(a.type,h,r)}}}}}function N(t,i,n){if(0==t){var r=n.contentRect,s=r.height;j(i,{width:r.width,height:s})}else if(1==t){var e,o=n.borderBoxSize;if(o)e=o.length>0?o[0]:{inlineSize:0,blockSize:0};else{var a,h,u=n.target,f=b(u),c=I.test(_(f,u).writingMode),l=u,v=l.offsetHeight,d=l.offsetWidth;c?(h=d,a=v):(a=d,h=v),e={inlineSize:a,blockSize:h}}j(i,e)}}var Y=[],V="__AMP_MODAL_SAVED_TAB_INDEX";function q(t){for(var i=[],n=t;n;n=n.parentNode||n.host)i.push(n);return i}function F(t,i,n){null===n||null==n?t.removeAttribute(i):t.setAttribute(i,n)}var H="i-amphtml-element",U=function(t){return t.unmount()};function $(t,i,n,r){for(var s,e=u(s=t)?s:[s],o=0;o<e.length;o++)G(e[o],i,n,r)}function G(t,i,n,r){if(i&&t.classList.contains(H)){var s=t;if(j(r,s),!n){var e=s.getPlaceholder();return void(e&&G(e,!0,!1,r))}}for(var o=t.getElementsByClassName(H),a=null,h=0;h<o.length;h++){var u=o[h];if(n)j(r,u);else{a=a||[];for(var f=!1,c=0;c<a.length;c++)if(a[c].contains(u)){f=!0;break}f||(a.push(u),j(r,u))}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Z,J=self.__AMP_LOG;function K(t){return J.user||(J.user=Q()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(J.user.win,t)?J.userForEmbed||(J.userForEmbed=Q()):J.user}function Q(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function tt(t,i,n,r,s,e,o,a,h,u,f){return t}function it(t,i){return ot(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function nt(t,i){return ot(et(st(t)),i)}function rt(t,i){var n=et(st(t));return at(n,i)?ot(n,i):null}function st(t){return t.nodeType?(i=b(t),it(i,"ampdoc")).getAmpDoc(t):t;var i}function et(t){var i=st(t);return i.isSingleDoc()?i.win:i}function ot(t,i){tt(at(t,i));var n=function(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return n.obj||(tt(n.ctor),tt(n.context),n.obj=new n.ctor(n.context),tt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function at(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var ht,ut=function(t){return nt(t,"owners")},ft=function(t){return ot(t,"timer")};function ct(t){if(void 0!==ht)return ht;ht=!1;try{var i={get passive(){return ht=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return ht}function lt(t,i){var n,r=function(t,i){if(void 0!==l?l:l=function(t){try{var i=t.ownerDocument,n=i.createElement("div"),r=i.createElement("div");return n.appendChild(r),n.querySelector(":scope div")===r}catch(t){return!1}}(t))return t.querySelector(y(i,":scope"));var n=function(t,i){var n=t.classList,r="i-amphtml-scoped";n.add(r);var s=y(":not([toolbar]) [autoscroll]",".".concat(r)),e=t.querySelectorAll(s);return n.remove(r),e}(t)[0];return void 0===n?null:n}(i,":not([toolbar]) [autoscroll]");if(r){var s=_(t.win,i)["overflow-y"];"scroll"==s||"auto"==s?(n=t,nt(n,"viewport")).animateScrollWithinParent(r,i,"center",0):K().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.")}}function vt(t,i){var n=ft(t);return n.promise(1).then((function(){return n.promise(i)}))}var dt=function(){function t(){this.Et=null}var i=t.prototype;return i.add=function(t){var i=this;return this.Et||(this.Et=[]),this.Et.push(t),function(){i.remove(t)}},i.remove=function(t){var i,n,r;this.Et&&(n=t,-1!=(r=(i=this.Et).indexOf(n))&&i.splice(r,1))},i.removeAll=function(){this.Et&&(this.Et.length=0)},i.fire=function(t){if(this.Et)for(var i,n=c(this.Et.slice(),!0);!(i=n()).done;)(0,i.value)(t)},i.getHandlerCount=function(){var t,i;return null!==(t=null===(i=this.Et)||void 0===i?void 0:i.length)&&void 0!==t?t:0},t}(),mt=function(){function t(t,i,n){var r=this;this.Ys=ft(t),this.Js=i,this.Xs=n||0,this.Qs=-1,this.Zs=0,this.Vn=!1,this.io=function(){r.no()}}var i=t.prototype;return i.isPending=function(){return-1!=this.Qs},i.schedule=function(t){var i=t||this.Xs;this.Vn&&i<10&&(i=10);var n=Date.now()+i;return(!this.isPending()||n-this.Zs<-10)&&(this.cancel(),this.Zs=n,this.Qs=this.Ys.delay(this.io,i),!0)},i.no=function(){this.Qs=-1,this.Zs=0,this.Vn=!0,this.Js(),this.Vn=!1},i.cancel=function(){this.isPending()&&(this.Ys.cancel(this.Qs),this.Qs=-1)},t}(),pt="__AMP_Gestures",bt=function(t,i,n,r){this.type=t,this.data=i,this.time=n,this.event=r},yt=function(){function t(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.Gn=t,this.mM=[],this.Eg=[],this.Fi=[],this.pM=[],this.fM=null;var r=t.ownerDocument.defaultView,s=ct(r);this.dM=i||s,this.vM=n,this.yM=!1,this.no=new mt(b(t),this.ad.bind(this)),this.gM=new dt,this.bM=Object.create(null),this.xM=this.Bp.bind(this),this.wM=this.Kp.bind(this),this.kM=this.Wp.bind(this),this.AM=this._g.bind(this),this.Gn.addEventListener("touchstart",this.xM,!!s&&{passive:!0}),this.Gn.addEventListener("touchend",this.wM),this.Gn.addEventListener("touchmove",this.kM,!!s&&{passive:!0}),this.Gn.addEventListener("touchcancel",this.AM),this.TM=!1}t.get=function(i){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=i[pt];return s||(s=new t(i,n,r),i[pt]=s),s};var i=t.prototype;return i.cleanup=function(){this.Gn.removeEventListener("touchstart",this.xM),this.Gn.removeEventListener("touchend",this.wM),this.Gn.removeEventListener("touchmove",this.kM),this.Gn.removeEventListener("touchcancel",this.AM),delete this.Gn[pt],this.no.cancel()},i.onGesture=function(t,i){var n=new t(this),r=n.getType(),s=this.bM[r];return s||(this.mM.push(n),s=new dt,this.bM[r]=s),s.add(i)},i.removeGesture=function(t){var i=new t(this).getType(),n=this.bM[i];if(n){n.removeAll();var r=function(t,n){for(var r=0;r<t.length;r++)if(t[r].getType()==i)return r;return-1}(this.mM);return!(r<0||(this.mM.splice(r,1),this.Fi.splice(r,1),this.pM.splice(r,1),this.Eg.splice(r,1),delete this.bM[i],0))}return!1},i.onPointerDown=function(t){return this.gM.add(t)},i.Bp=function(t){var i=Date.now();this.yM=!1,this.gM.fire(t);for(var n=0;n<this.mM.length;n++)this.Fi[n]||(this.pM[n]&&this.pM[n]<i&&this.Cg(n),this.mM[n].onTouchStart(t)&&this.Ng(n));this.SM(t)},i.Wp=function(t){for(var i=Date.now(),n=0;n<this.mM.length;n++)this.Eg[n]&&(this.pM[n]&&this.pM[n]<i?this.Cg(n):this.mM[n].onTouchMove(t)||this.Cg(n));this.SM(t)},i.Kp=function(t){for(var i=Date.now(),n=0;n<this.mM.length;n++)if(this.Eg[n])if(this.pM[n]&&this.pM[n]<i)this.Cg(n);else{this.mM[n].onTouchEnd(t);var r=!this.pM[n],s=this.pM[n]<i;this.fM==this.mM[n]||!r&&!s||this.Cg(n)}this.SM(t)},i._g=function(t){for(var i=0;i<this.mM.length;i++)this.EM(i);this.SM(t)},i.Xp=function(t,i){if(this.fM)t.acceptCancel();else{for(var n=Date.now(),r=0;r<this.mM.length;r++)this.mM[r]==t&&(this.Fi[r]=n+i,this.pM[r]=0);this.TM=!0}},i.PM=function(t,i){if(this.fM)t.acceptCancel();else for(var n=Date.now(),r=0;r<this.mM.length;r++)this.mM[r]==t&&(this.pM[r]=n+i)},i.OM=function(t){this.fM==t&&(this.fM=null,this.yM=!0)},i._M=function(t,i,n){p(this.fM==t);var r=this.bM[t.getType()];r&&r.fire(new bt(t.getType(),i,Date.now(),n))},i.SM=function(t){var i=!!this.fM||this.yM;if(this.yM=!1,!i)for(var n=Date.now(),r=0;r<this.mM.length;r++)if(this.Fi[r]||this.pM[r]&&this.pM[r]>=n){i=!0;break}i?(t.stopPropagation(),this.dM||t.preventDefault()):this.vM&&t.stopPropagation(),this.TM&&(this.TM=!1,this.ad())},i.ad=function(){for(var t=Date.now(),i=-1,n=0;n<this.mM.length;n++)this.Fi[n]?(-1==i||this.Fi[n]>this.Fi[i])&&(i=n):this.pM[n]&&this.pM[n]<t&&this.Cg(n);if(-1!=i){for(var r=0,s=0;s<this.mM.length;s++)!this.Fi[s]&&this.Eg[s]&&(r=Math.max(r,this.pM[s]-t));r<2?this.MM(i):this.no.schedule(r)}},i.MM=function(t){for(var i=this.mM[t],n=0;n<this.mM.length;n++)n!=t&&this.EM(n);this.Fi[t]=0,this.pM[t]=0,this.fM=i,i.acceptStart()},i.Ng=function(t){this.Eg[t]=!0,this.pM[t]=0},i.Cg=function(t){this.Eg[t]=!1,this.pM[t]=0,this.Fi[t]||this.mM[t].acceptCancel()},i.EM=function(t){this.Fi[t]=0,this.Cg(t)},t}(),wt=function(){function t(t,i){this.IM=t,this.py=i}var i=t.prototype;return i.getType=function(){return this.IM},i.signalReady=function(t){this.py.Xp(this,t)},i.signalPending=function(t){this.py.PM(this,t)},i.signalEnd=function(){this.py.OM(this)},i.signalEmit=function(t,i){this.py._M(this,t,i)},i.acceptStart=function(){},i.acceptCancel=function(){},i.onTouchStart=function(t){return!1},i.onTouchMove=function(t){return!1},i.onTouchEnd=function(t){},t}();function gt(t,i,n){i<1&&(i=1);var r=t/i,s=.5+Math.min(i/33.34,.5);return r*s+n*(1-s)}Math.round(-16.67/Math.log(.95));var kt=function(t){r(n,t);var i=a(n);function n(t){return i.call(this,"swipe-x",t,!0,!1)}return n}(function(t){r(n,t);var i=a(n);function n(t,n,r,s){var e;return(e=i.call(this,t,n)).zM=r,e.NM=s,e.fM=!1,e.RM=0,e.jM=0,e.CM=0,e.DM=0,e.LM=0,e.UM=0,e.Ac=0,e.YM=0,e.HM=0,e.VM=0,e.GM=0,e}var s=n.prototype;return s.onTouchStart=function(t){var i=t.touches;return!!(this.fM&&i&&i.length>1)||!(!i||1!=i.length)&&(this.Ac=Date.now(),this.RM=i[0].clientX,this.jM=i[0].clientY,!0)},s.onTouchMove=function(t){var i=t.touches;if(i&&i.length>=1){var n=i[0],r=n.clientX,s=n.clientY;if(this.CM=r,this.DM=s,this.fM)this.BM(!1,!1,t);else{var e=Math.abs(r-this.RM),o=Math.abs(s-this.jM);if(this.zM&&this.NM)(e>=8||o>=8)&&this.signalReady(-10);else if(this.zM){if(e>=8&&e>o)this.signalReady(-10);else if(o>=8)return!1}else{if(!this.NM)return!1;if(o>=8&&o>e)this.signalReady(-10);else if(e>=8)return!1}}return!0}return!1},s.onTouchEnd=function(t){var i=t.touches;i&&0==i.length&&this.FM(t)},s.acceptStart=function(){this.fM=!0,this.LM=this.RM,this.UM=this.jM,this.HM=this.Ac,this.RM=this.CM,this.jM=this.DM,this.BM(!0,!1,null)},s.acceptCancel=function(){this.fM=!1},s.BM=function(t,i,n){this.YM=Date.now();var r=this.YM-this.HM;if(!i&&r>4||i&&r>16){var s=gt(this.CM-this.LM,r,this.VM),e=gt(this.DM-this.UM,r,this.GM);(!i||r>32||0!=s||0!=e)&&(this.VM=Math.abs(s)>1e-4?s:0,this.GM=Math.abs(e)>1e-4?e:0),this.LM=this.CM,this.UM=this.DM,this.HM=this.YM}this.signalEmit({first:t,last:i,time:this.YM,deltaX:this.CM-this.RM,deltaY:this.DM-this.jM,startX:this.RM,startY:this.jM,lastX:this.CM,lastY:this.DM,velocityX:this.VM,velocityY:this.GM},n)},s.FM=function(t){this.fM&&(this.fM=!1,this.BM(!1,!0,t),this.signalEnd())},n}(wt)),xt="backward",Mt="horizontal",At=function(){function t(t,i,n){this.t=t,this.Ox=i,this.XZ=n,this._Z=xt,this.RZ=Mt,this.PZ=null,this.TZ=null}var i=t.prototype;return i.IZ=function(){return this.RZ==Mt?this.PZ.offsetWidth:this.PZ.offsetHeight},i.CZ=function(t,i){var n=this.RZ==Mt?t:i;return this._Z==xt?-Math.min(n,0):Math.max(n,0)},i.NZ=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this._Z==xt?-t:t,r=this.RZ==Mt?"".concat(n).concat(i):0,s=this.RZ==Mt?0:"".concat(n).concat(i);return"translate(".concat(r,", ").concat(s,")")},i.startSwipe=function(t){var i=t.direction,n=t.mask,r=t.orientation,s=t.swipeElement;this.PZ=s,this.TZ=n,this._Z=i,this.RZ=r},i.swipeMove=function(t){this.LZ(t,!1)},i.endSwipe=function(t){this.LZ(t,!0)},i.WZ=function(t,i){var n=.75*i;return R(this.PZ,{transform:this.NZ(t,"px"),transition:"".concat(n,"ms transform ").concat("cubic-bezier(0.15, .55, .3, 0.95)")}),vt(this.t,n)},i.BZ=function(t){var i=this,n=.8*t;return this.Ox((function(){R(i.PZ,{transform:i.NZ(0),transition:"".concat(n,"ms transform ease-in")}),R(i.TZ,{opacity:"",transition:"".concat(n,"ms opacity ease-in")})})).then((function(){return vt(i.t,n)}))},i.YZ=function(t){var i=this,n=.75*(this.IZ()-t);return this.Ox((function(){R(i.PZ,{transform:i.NZ(100,"%"),transition:"".concat(n,"ms transform ease-out")}),R(i.TZ,{opacity:0,transition:"".concat(n,"ms opacity ease-out")})})).then((function(){return vt(i.t,n)})).then((function(){return i.XZ()}))},i.FZ=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";R(this.PZ,{transform:t,transition:""}),R(this.TZ,{opacity:i,transition:""})},i.GZ=function(t,i,n,r){var s=this,e=22.5*t+n,o=22.5*i+r,a=this.CZ(e,o),h=this.CZ(t,i),u=.5*this.IZ();return a<u&&h<.65?this.WZ(a,h).then((function(){return s.BZ(a)})):this.YZ(a)},i.LZ=function(t,i){var n=this,r=t.deltaX,s=t.deltaY,e=t.velocityX,o=t.velocityY;this.Ox((function(){if(i)n.GZ(e,o,r,s).then((function(){n.FZ()}));else{var t=n.CZ(r,s),a=t/n.IZ(),h=Math.max(0,1-a);n.FZ(n.NZ(t,"px"),h)}}))},t}(),Ot=function(){function t(t,i){this.Qn=i,this.UZ=t,this.de=i.getAmpDoc(),this.VZ=this.UZ.getAttribute("toolbar"),this.HZ=null,this.$Z=void 0,this.qZ=!1,this.UZ.classList.add("amp-sidebar-toolbar-target-hidden"),this.JZ()}var i=t.prototype;return i.onLayoutChange=function(){this.de.win.matchMedia(this.VZ).matches?this.ZZ():this.KZ()},i.JZ=function(){this.HZ=this.UZ.cloneNode(!0);var t,i,n=(t=this.UZ.getAttribute("toolbar-target"),'"toolbar-target" is required',i=this.UZ,K().assert(t,'"toolbar-target" is required',i,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),r=this.de.getElementById(n);if(!r)throw K().createError("Could not find the toolbar-target element with an id: ".concat(n));this.$Z=r,this.HZ.classList.add("i-amphtml-toolbar"),P(this.$Z,!1)},i.QZ=function(){return this.qZ},i.ZZ=function(){var t=this;return this.QZ()?Z||(Z=Promise.resolve(void 0)):this.Qn.mutateElement((function(){t.$Z&&(P(t.$Z,!0),t.$Z.contains(t.HZ)||t.$Z.appendChild(t.HZ),t.UZ.classList.add("amp-sidebar-toolbar-target-shown"),t.UZ.classList.remove("amp-sidebar-toolbar-target-hidden"),t.qZ=!0,lt(t.de,t.HZ))}))},i.KZ=function(){var t=this;this.QZ()&&this.Qn.mutateElement((function(){t.$Z&&(P(t.$Z,!1),t.UZ.classList.add("amp-sidebar-toolbar-target-hidden"),t.UZ.classList.remove("amp-sidebar-toolbar-target-shown"),t.qZ=!1)}))},t}();function St(t){var i=t.indexOf("#");return-1==i?t:t.substring(0,i)}new Set(["c","v","a","ad"]);var Et="amp-sidebar toolbar",jt="left",Dt="right",Xt=function(t){r(s,t);var n=a(s);function s(t){var r;(r=n.call(this,t)).Lu=null,r.ao=null,r.sK=null,r.qV=null,r.hv=r.win.document,r.z$=r.hv.documentElement,r.hK=null,r.fK=[];var s=it(r.win,"platform");return r.uY=s.isIos(),r.nW=s.isSafari(),r.qD=-1,r.cK=!1,r.hY=null,r.Qz=null,r.lK=0,r.vK=!1,r.dK=null,r.mK=new At(r.win,(function(t){return r.mutateElement(t)}),(function(){return r.pK(!0,3)})),r.hst=!1,r.vst=!1,r.ob=r.ob.bind(i(r)),r.bK=null,r}var e=s.prototype;return e.buildCallback=function(){var t,i=this,n=this.element;n.classList.add("i-amphtml-overlay"),n.classList.add("i-amphtml-scrollable"),this.hK=n.getAttribute("side"),this.vst=n.hasAttribute("data-disable-swipe-close"),this.Lu=this.getViewport(),this.ao=function(t){return rt(t,"action")}(n),this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn(Et,"".concat(Et," is recommended to be a direct child of the <body> element to preserve a logical DOM order.")),this.hK!=jt&&this.hK!=Dt&&(this.hK=this.yK("rtl"==((t=this.hv).body.getAttribute("dir")||t.documentElement.getAttribute("dir")||"ltr")?Dt:jt),n.setAttribute("side",this.hK)),this.wK(),n.addEventListener("amp:dom-update",(function(){i.wK()})),this.getAmpDoc().whenReady().then((function(){h(n.querySelectorAll("nav[toolbar]")).forEach((function(t){try{i.fK.push(new Ot(t,i))}catch(t){i.user().error(Et,"Failed to instantiate toolbar",t)}})),i.ob()})),this.uY&&this.gK(),n.hasAttribute("role")||n.setAttribute("role","menu"),n.tabIndex=-1,this.z$.addEventListener("keydown",(function(t){"Escape"==t.key&&i._A(3)&&t.preventDefault()})),this.hY=this.CY(),this.hY||(this.hY=this.createScreenReaderCloseButton(),n.insertBefore(this.hY,this.element.firstChild)),n.appendChild(this.createScreenReaderCloseButton()),this.registerDefaultAction((function(t){var n=t.caller,r=t.trust;i.cY(r,n)}),"open"),this.registerAction("close",(function(t){i._A(t.trust)})),this.registerAction("toggle",(function(t){var n=t.caller,r=t.trust;i.vK?i._A(r):i.cY(r,n)})),this.ao.addToAllowlist("amp-sidebar",["open","close","toggle"],["email"]),n.addEventListener("click",(function(t){var r=w(t.target,"A");if(r&&r.href){var s=function(t){return rt(t,"url")}(n).parse(r.href),e=i.getAmpDoc().getUrl();if(St(r.href)!=St(e))return;s.hash&&i._A(3)}}),!0),this.qX(this.element)},e.attachedCallback=function(){this.bK=this.Lu.onResize(function(t,i,n){var r=0,s=0,e=null;function o(){r=0;var n,a=100-(t.Date.now()-s);a>0?r=t.setTimeout(o,a):(n=e,e=null,i.apply(null,n))}return function(){s=t.Date.now();for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];e=n,r||(r=t.setTimeout(o,100))}}(this.win,this.ob)),this.ob()},e.detachedCallback=function(){this.bK&&(this.bK(),this.bK=null)},e.wK=function(){if(!this.dK){var t=this.element.querySelector("amp-nested-menu");t&&((i=this.win,it(i,"extensions")).installExtensionForDoc(this.getAmpDoc(),"amp-nested-menu"),this.dK=t)}var i},e.CY=function(){for(var t=this.element.querySelectorAll("[on]"),i=0;i<t.length;i++){var n=t[i],r=this.ao.hasResolvableActionForTarget(n,"tap",this.element,tt(n.parentElement)),s=w(n,"[toolbar]");if(r&&!s)return n}return null},e.createScreenReaderCloseButton=function(){var t=this,i=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",n=this.hv.createElement("button");return n.textContent=i,n.classList.add("i-amphtml-screen-reader"),n.tabIndex=-1,n.addEventListener("click",(function(){t._A(3)})),n},e.ob=function(){var t=this;this.getAmpDoc().whenReady().then((function(){t.fK.forEach((function(t){t.onLayoutChange()}))}))},e.kK=function(t,i){var n=this;this.sK=t;var r=function(){n.sK===t&&n.mutateElement(t)};i?ft(this.win).delay(r,i):r()},e.xK=function(t){var i=this;P(this.element,!0),P(this.jK(),!0),this.Lu.addToFixedLayer(this.element,!0),this.mutateElement((function(){!function(t){p(Y.every((function(i){return i.element!==t}))),p(k(t));var i=function(t){for(var i=[],n=q(t),r=function(t){var r=n[t];if(!r.parentNode)return"continue";h(r.parentNode.children).filter((function(t){return t!=r})).forEach((function(t){return i.push(t)}))},s=0;s<n.length;s++)r(s);return i}(t),n=q(t).filter(m),r=function(t){for(var i=[],n=t;n;){var r=x(n),s=r.querySelectorAll(["a[href]","area[href]","button","details summary","iframe","input","select","textarea","[contenteditable]","[draggable]","[tabindex]"].join(","));Array.prototype.push.apply(i,s),n=r.host}return i}(t),s=r.filter((function(i){return t.contains(i)&&void 0!==i[V]})),e=r.filter((function(i){return!t.contains(i)&&void 0===i[V]})),o=i.concat(n).map((function(t){return{element:t,prevValue:t.getAttribute("aria-hidden")}}));n.forEach((function(t){return t.removeAttribute("aria-hidden")})),i.forEach((function(t){return t.setAttribute("aria-hidden","true")})),e.forEach((function(t){t[V]=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")})),s.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V])})),Y.push({element:t,hiddenElementInfos:o,focusableExternalElements:e,focusableInternalElements:s})}(i.element)})),this.uY&&this.nW&&this.MK(),this.element.scrollTop=1,this.element.setAttribute("open",""),this.jK().setAttribute("open",""),this.kK((function(){return i.EK(t)}),350),lt(this.getAmpDoc(),this.element)},e.EK=function(t){var i=g(this.element),n=ut(this.element);n.scheduleLayout(this.element,i),n.scheduleResume(this.element,i),this.SK()||M(tt(this.hY)),this.fD("sidebarOpen",t),this.element.setAttribute("i-amphtml-sidebar-opened",""),this.jK().setAttribute("i-amphtml-sidebar-opened",""),this.setAsContainer()},e.AK=function(t,i){var n=this;this.jK().removeAttribute("open"),this.jK().removeAttribute("i-amphtml-sidebar-opened"),this.mutateElement((function(){!function(t){var i=Y.pop();p(i);var n=i.element,r=i.focusableExternalElements,s=i.focusableInternalElements,e=i.hiddenElementInfos;p(k(t)),p(n===t),e.forEach((function(t){return F(t.element,"aria-hidden",t.prevValue)})),s.forEach((function(t){return t.setAttribute("tabindex","-1")})),r.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V]),t[V]=void 0}))}(n.element)})),this.element.removeAttribute("open"),this.element.removeAttribute("i-amphtml-sidebar-opened"),this.kK((function(){return n.DK(i)}),t?0:350)},e.DK=function(t){P(this.element,!1),P(this.jK(),!1),ut(this.element).schedulePause(this.element,g(this.element)),this.fD("sidebarClose",t),this.removeAsContainer(),function(t){$(t,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],!0,U)}(this.element,!1)},e.cY=function(t,i){var n=this;this.vK||(this.vK=!0,this.Lu.enterOverlayMode(),this.kK((function(){return n.xK(t)})),this.zZ().push((function(){n.uY?n.pK(!0,t):n._A(t)})).then((function(t){n.qD=t})),i&&(this.Qz=i,this.lK=this.Lu.getScrollTop()),function(t,i,n){var r=t.ownerDocument.defaultView;if(r){var s=C.get(t);if(s||(s=[],C.set(t,s),B(r).observe(t)),!s.some((function(t){return t.callback===n&&0===t.type}))){s.push({type:0,callback:n});var e=W.get(t);e&&setTimeout((function(){return N(0,n,e)}))}}}(this.element,0,this.ob))},e._A=function(t){return this.pK(!1,t)},e.pK=function(t,i){var n=this;if(!this.vK)return!1;this.vK=!1,this.Lu.leaveOverlayMode();var r=this.lK==this.Lu.getScrollTop(),s=this.element.contains(this.hv.activeElement);return this.kK((function(){return n.AK(t,i)})),t&&(P(this.element,!1),P(this.jK(),!1)),-1!=this.qD&&(this.zZ().pop(this.qD),this.qD=-1),this.Qz&&s&&r&&(this.SK()||M(this.Qz)),function(t,i,n){var r=C.get(t);if(r&&(function(t,i){for(var r=[],s=0,e=0;e<t.length;e++){var o=t[e];(a=o).callback===n&&0===a.type?r.push(o):(s<e&&(t[s]=o),s++)}var a;s<t.length&&(t.length=s)}(r),0==r.length)){C.delete(t),W.delete(t);var s=t.ownerDocument.defaultView;s&&B(s).unobserve(t)}}(this.element,0,this.ob),!0},e.qX=function(t){var i=this;this.vst||yt.get(t,!0,!0).onGesture(kt,(function(t){var n=t.data,r=t.event;i.XK(n,r)}))},e.XK=function(t,i){var n;if(!t.first)return t.last?(this.hst&&this.mK.endSwipe(t),void(this.hst=!1)):void(i&&i.target&&(n=i.target,"input"!==n.nodeName.toLowerCase()||"range"!==n.getAttribute("type"))&&(this.hst=!0,this.mK.swipeMove(t)));this.mK.startSwipe({swipeElement:this.element,mask:this.qV,direction:this.hK==jt?xt:"forward",orientation:Mt})},e.yK=function(t){return w(this.element,"amp-story")?t==jt?Dt:jt:t},e.jK=function(){var t=this;if(!this.qV){var i=this.hv.createElement("div");i.classList.add("amp-sidebar-mask","i-amphtml-sidebar-mask"),i.addEventListener("click",(function(){t._A(3)})),this.getAmpDoc().getBody().appendChild(i),i.addEventListener("touchmove",(function(t){t.preventDefault()})),this.qX(i),this.qV=i}return this.qV},e.gK=function(){var t=this;this.element.addEventListener("scroll",(function(i){t.vK&&(t.element.scrollTop<1?(t.element.scrollTop=1,i.preventDefault()):t.element.scrollHeight==t.element.scrollTop+t.element.offsetHeight&&(t.element.scrollTop=t.element.scrollTop-1,i.preventDefault()))}))},e.MK=function(){if(!this.cK){var t=this.hv.createElement("div");R(t,{"height":"54px","width":"100%","background-color":"transparent"}),this.element.appendChild(t),this.cK=!0}},e.zZ=function(){return nt(this.getAmpDoc(),"history")},e.fD=function(t,i){var n=function(t,i,n,r){var s={detail:n};if(Object.assign(s,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var e=t.document.createEvent("CustomEvent");return e.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),e}(this.win,"".concat(Et,".").concat(t),{});this.ao.trigger(this.element,t,n,i)},e.SK=function(){return this.uY&&(t=this.element,nt(t,"viewer")).isEmbedded();var t},s}(t.BaseElement);t.registerElement("amp-sidebar",Xt,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,0.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-sidebar-0.1.js.map