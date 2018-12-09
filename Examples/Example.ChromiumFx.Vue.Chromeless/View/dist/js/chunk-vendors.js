/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var C="undefined"!==typeof window&&"undefined"!==typeof document,i=["Edge","Trident","Firefox"],r=0,a=0;a<i.length;a+=1)if(C&&navigator.userAgent.indexOf(i[a])>=0){r=1;break}function s(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}function n(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},r))}}var h=C&&window.Promise,o=h?s:n;function d(t){var e={};return t&&"[object Function]"===e.toString.call(t)}function l(t,e){if(1!==t.nodeType)return[];var C=t.ownerDocument.defaultView,i=C.getComputedStyle(t,null);return e?i[e]:i}function H(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function V(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=l(t),C=e.overflow,i=e.overflowX,r=e.overflowY;return/(auto|scroll|overlay)/.test(C+r+i)?t:V(H(t))}var u=C&&!(!window.MSInputMethodContext||!document.documentMode),c=C&&/MSIE 10/.test(navigator.userAgent);function L(t){return 11===t?u:10===t?c:u||c}function p(t){if(!t)return document.documentElement;var e=L(10)?document.body:null,C=t.offsetParent||null;while(C===e&&t.nextElementSibling)C=(t=t.nextElementSibling).offsetParent;var i=C&&C.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(C.nodeName)&&"static"===l(C,"position")?p(C):C:t?t.ownerDocument.documentElement:document.documentElement}function M(t){var e=t.nodeName;return"BODY"!==e&&("HTML"===e||p(t.firstElementChild)===t)}function g(t){return null!==t.parentNode?g(t.parentNode):t}function z(t,e){if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;var C=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=C?t:e,r=C?e:t,a=document.createRange();a.setStart(i,0),a.setEnd(r,0);var s=a.commonAncestorContainer;if(t!==s&&e!==s||i.contains(r))return M(s)?s:p(s);var n=g(t);return n.host?z(n.host,e):z(t,g(e).host)}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",C="top"===e?"scrollTop":"scrollLeft",i=t.nodeName;if("BODY"===i||"HTML"===i){var r=t.ownerDocument.documentElement,a=t.ownerDocument.scrollingElement||r;return a[C]}return t[C]}function b(t,e){var C=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=f(e,"top"),r=f(e,"left"),a=C?-1:1;return t.top+=i*a,t.bottom+=i*a,t.left+=r*a,t.right+=r*a,t}function S(t,e){var C="x"===e?"Left":"Top",i="Left"===C?"Right":"Bottom";return parseFloat(t["border"+C+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function m(t,e,C,i){return Math.max(e["offset"+t],e["scroll"+t],C["client"+t],C["offset"+t],C["scroll"+t],L(10)?parseInt(C["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function v(t){var e=t.body,C=t.documentElement,i=L(10)&&getComputedStyle(C);return{height:m("Height",e,C,i),width:m("Width",e,C,i)}}var w=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},y=function(){function t(t,e){for(var C=0;C<e.length;C++){var i=e[C];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,C,i){return C&&t(e.prototype,C),i&&t(e,i),e}}(),A=function(t,e,C){return e in t?Object.defineProperty(t,e,{value:C,enumerable:!0,configurable:!0,writable:!0}):t[e]=C,t},k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var C=arguments[e];for(var i in C)Object.prototype.hasOwnProperty.call(C,i)&&(t[i]=C[i])}return t};function _(t){return k({},t,{right:t.left+t.width,bottom:t.top+t.height})}function x(t){var e={};try{if(L(10)){e=t.getBoundingClientRect();var C=f(t,"top"),i=f(t,"left");e.top+=C,e.left+=i,e.bottom+=C,e.right+=i}else e=t.getBoundingClientRect()}catch(H){}var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},a="HTML"===t.nodeName?v(t.ownerDocument):{},s=a.width||t.clientWidth||r.right-r.left,n=a.height||t.clientHeight||r.bottom-r.top,h=t.offsetWidth-s,o=t.offsetHeight-n;if(h||o){var d=l(t);h-=S(d,"x"),o-=S(d,"y"),r.width-=h,r.height-=o}return _(r)}function T(t,e){var C=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=L(10),r="HTML"===e.nodeName,a=x(t),s=x(e),n=V(t),h=l(e),o=parseFloat(h.borderTopWidth,10),d=parseFloat(h.borderLeftWidth,10);C&&r&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var H=_({top:a.top-s.top-o,left:a.left-s.left-d,width:a.width,height:a.height});if(H.marginTop=0,H.marginLeft=0,!i&&r){var u=parseFloat(h.marginTop,10),c=parseFloat(h.marginLeft,10);H.top-=o-u,H.bottom-=o-u,H.left-=d-c,H.right-=d-c,H.marginTop=u,H.marginLeft=c}return(i&&!C?e.contains(n):e===n&&"BODY"!==n.nodeName)&&(H=b(H,e)),H}function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],C=t.ownerDocument.documentElement,i=T(t,C),r=Math.max(C.clientWidth,window.innerWidth||0),a=Math.max(C.clientHeight,window.innerHeight||0),s=e?0:f(C),n=e?0:f(C,"left"),h={top:s-i.top+i.marginTop,left:n-i.left+i.marginLeft,width:r,height:a};return _(h)}function B(t){var e=t.nodeName;return"BODY"!==e&&"HTML"!==e&&("fixed"===l(t,"position")||B(H(t)))}function E(t){if(!t||!t.parentElement||L())return document.documentElement;var e=t.parentElement;while(e&&"none"===l(e,"transform"))e=e.parentElement;return e||document.documentElement}function O(t,e,C,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a={top:0,left:0},s=r?E(t):z(t,e);if("viewport"===i)a=$(s,r);else{var n=void 0;"scrollParent"===i?(n=V(H(e)),"BODY"===n.nodeName&&(n=t.ownerDocument.documentElement)):n="window"===i?t.ownerDocument.documentElement:i;var h=T(n,s,r);if("HTML"!==n.nodeName||B(s))a=h;else{var o=v(t.ownerDocument),d=o.height,l=o.width;a.top+=h.top-h.marginTop,a.bottom=d+h.top,a.left+=h.left-h.marginLeft,a.right=l+h.left}}C=C||0;var u="number"===typeof C;return a.left+=u?C:C.left||0,a.top+=u?C:C.top||0,a.right-=u?C:C.right||0,a.bottom-=u?C:C.bottom||0,a}function P(t){var e=t.width,C=t.height;return e*C}function I(t,e,C,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=O(C,i,a,r),n={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},h=Object.keys(n).map(function(t){return k({key:t},n[t],{area:P(n[t])})}).sort(function(t,e){return e.area-t.area}),o=h.filter(function(t){var e=t.width,i=t.height;return e>=C.clientWidth&&i>=C.clientHeight}),d=o.length>0?o[0].key:h[0].key,l=t.split("-")[1];return d+(l?"-"+l:"")}function F(t,e,C){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=i?E(e):z(e,C);return T(C,r,i)}function N(t){var e=t.ownerDocument.defaultView,C=e.getComputedStyle(t),i=parseFloat(C.marginTop||0)+parseFloat(C.marginBottom||0),r=parseFloat(C.marginLeft||0)+parseFloat(C.marginRight||0),a={width:t.offsetWidth+r,height:t.offsetHeight+i};return a}function j(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function D(t,e,C){C=C.split("-")[0];var i=N(t),r={width:i.width,height:i.height},a=-1!==["right","left"].indexOf(C),s=a?"top":"left",n=a?"left":"top",h=a?"height":"width",o=a?"width":"height";return r[s]=e[s]+e[h]/2-i[h]/2,r[n]=C===n?e[n]-i[o]:e[j(n)],r}function R(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function q(t,e,C){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===C});var i=R(t,function(t){return t[e]===C});return t.indexOf(i)}function W(t,e,C){var i=void 0===C?t:t.slice(0,q(t,"name",C));return i.forEach(function(t){t["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var C=t["function"]||t.fn;t.enabled&&d(C)&&(e.offsets.popper=_(e.offsets.popper),e.offsets.reference=_(e.offsets.reference),e=C(e,t))}),e}function G(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=F(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=I(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=D(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=W(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function U(t,e){return t.some(function(t){var C=t.name,i=t.enabled;return i&&C===e})}function K(t){for(var e=[!1,"ms","Webkit","Moz","O"],C=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var r=e[i],a=r?""+r+C:t;if("undefined"!==typeof document.body.style[a])return a}return null}function Y(){return this.state.isDestroyed=!0,U(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[K("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function X(t){var e=t.ownerDocument;return e?e.defaultView:window}function Z(t,e,C,i){var r="BODY"===t.nodeName,a=r?t.ownerDocument.defaultView:t;a.addEventListener(e,C,{passive:!0}),r||Z(V(a.parentNode),e,C,i),i.push(a)}function J(t,e,C,i){C.updateBound=i,X(t).addEventListener("resize",C.updateBound,{passive:!0});var r=V(t);return Z(r,"scroll",C.updateBound,C.scrollParents),C.scrollElement=r,C.eventsEnabled=!0,C}function Q(){this.state.eventsEnabled||(this.state=J(this.reference,this.options,this.state,this.scheduleUpdate))}function tt(t,e){return X(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function et(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=tt(this.reference,this.state))}function Ct(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function it(t,e){Object.keys(e).forEach(function(C){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(C)&&Ct(e[C])&&(i="px"),t.style[C]=e[C]+i})}function rt(t,e){Object.keys(e).forEach(function(C){var i=e[C];!1!==i?t.setAttribute(C,e[C]):t.removeAttribute(C)})}function at(t){return it(t.instance.popper,t.styles),rt(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&it(t.arrowElement,t.arrowStyles),t}function st(t,e,C,i,r){var a=F(r,e,t,C.positionFixed),s=I(C.placement,a,e,t,C.modifiers.flip.boundariesElement,C.modifiers.flip.padding);return e.setAttribute("x-placement",s),it(e,{position:C.positionFixed?"fixed":"absolute"}),C}function nt(t,e){var C=t.offsets,i=C.popper,r=C.reference,a=-1!==["left","right"].indexOf(t.placement),s=-1!==t.placement.indexOf("-"),n=r.width%2===i.width%2,h=r.width%2===1&&i.width%2===1,o=function(t){return t},d=e?a||s||n?Math.round:Math.floor:o,l=e?Math.round:o;return{left:d(h&&!s&&e?i.left-1:i.left),top:l(i.top),bottom:l(i.bottom),right:d(i.right)}}var ht=C&&/Firefox/i.test(navigator.userAgent);function ot(t,e){var C=e.x,i=e.y,r=t.offsets.popper,a=R(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==a&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==a?a:e.gpuAcceleration,n=p(t.instance.popper),h=x(n),o={position:r.position},d=nt(t,window.devicePixelRatio<2||!ht),l="bottom"===C?"top":"bottom",H="right"===i?"left":"right",V=K("transform"),u=void 0,c=void 0;if(c="bottom"===l?"HTML"===n.nodeName?-n.clientHeight+d.bottom:-h.height+d.bottom:d.top,u="right"===H?"HTML"===n.nodeName?-n.clientWidth+d.right:-h.width+d.right:d.left,s&&V)o[V]="translate3d("+u+"px, "+c+"px, 0)",o[l]=0,o[H]=0,o.willChange="transform";else{var L="bottom"===l?-1:1,M="right"===H?-1:1;o[l]=c*L,o[H]=u*M,o.willChange=l+", "+H}var g={"x-placement":t.placement};return t.attributes=k({},g,t.attributes),t.styles=k({},o,t.styles),t.arrowStyles=k({},t.offsets.arrow,t.arrowStyles),t}function dt(t,e,C){var i=R(t,function(t){var C=t.name;return C===e}),r=!!i&&t.some(function(t){return t.name===C&&t.enabled&&t.order<i.order});if(!r){var a="`"+e+"`",s="`"+C+"`";console.warn(s+" modifier is required by "+a+" modifier in order to work, be sure to include it before "+a+"!")}return r}function lt(t,e){var C;if(!dt(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"===typeof i){if(i=t.instance.popper.querySelector(i),!i)return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var r=t.placement.split("-")[0],a=t.offsets,s=a.popper,n=a.reference,h=-1!==["left","right"].indexOf(r),o=h?"height":"width",d=h?"Top":"Left",H=d.toLowerCase(),V=h?"left":"top",u=h?"bottom":"right",c=N(i)[o];n[u]-c<s[H]&&(t.offsets.popper[H]-=s[H]-(n[u]-c)),n[H]+c>s[u]&&(t.offsets.popper[H]+=n[H]+c-s[u]),t.offsets.popper=_(t.offsets.popper);var L=n[H]+n[o]/2-c/2,p=l(t.instance.popper),M=parseFloat(p["margin"+d],10),g=parseFloat(p["border"+d+"Width"],10),z=L-t.offsets.popper[H]-M-g;return z=Math.max(Math.min(s[o]-c,z),0),t.arrowElement=i,t.offsets.arrow=(C={},A(C,H,Math.round(z)),A(C,V,""),C),t}function Ht(t){return"end"===t?"start":"start"===t?"end":t}var Vt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],ut=Vt.slice(3);function ct(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],C=ut.indexOf(t),i=ut.slice(C+1).concat(ut.slice(0,C));return e?i.reverse():i}var Lt={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function pt(t,e){if(U(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var C=O(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],r=j(i),a=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case Lt.FLIP:s=[i,r];break;case Lt.CLOCKWISE:s=ct(i);break;case Lt.COUNTERCLOCKWISE:s=ct(i,!0);break;default:s=e.behavior}return s.forEach(function(n,h){if(i!==n||s.length===h+1)return t;i=t.placement.split("-")[0],r=j(i);var o=t.offsets.popper,d=t.offsets.reference,l=Math.floor,H="left"===i&&l(o.right)>l(d.left)||"right"===i&&l(o.left)<l(d.right)||"top"===i&&l(o.bottom)>l(d.top)||"bottom"===i&&l(o.top)<l(d.bottom),V=l(o.left)<l(C.left),u=l(o.right)>l(C.right),c=l(o.top)<l(C.top),L=l(o.bottom)>l(C.bottom),p="left"===i&&V||"right"===i&&u||"top"===i&&c||"bottom"===i&&L,M=-1!==["top","bottom"].indexOf(i),g=!!e.flipVariations&&(M&&"start"===a&&V||M&&"end"===a&&u||!M&&"start"===a&&c||!M&&"end"===a&&L);(H||p||g)&&(t.flipped=!0,(H||p)&&(i=s[h+1]),g&&(a=Ht(a)),t.placement=i+(a?"-"+a:""),t.offsets.popper=k({},t.offsets.popper,D(t.instance.popper,t.offsets.reference,t.placement)),t=W(t.instance.modifiers,t,"flip"))}),t}function Mt(t){var e=t.offsets,C=e.popper,i=e.reference,r=t.placement.split("-")[0],a=Math.floor,s=-1!==["top","bottom"].indexOf(r),n=s?"right":"bottom",h=s?"left":"top",o=s?"width":"height";return C[n]<a(i[h])&&(t.offsets.popper[h]=a(i[h])-C[o]),C[h]>a(i[n])&&(t.offsets.popper[h]=a(i[n])),t}function gt(t,e,C,i){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),a=+r[1],s=r[2];if(!a)return t;if(0===s.indexOf("%")){var n=void 0;switch(s){case"%p":n=C;break;case"%":case"%r":default:n=i}var h=_(n);return h[e]/100*a}if("vh"===s||"vw"===s){var o=void 0;return o="vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0),o/100*a}return a}function zt(t,e,C,i){var r=[0,0],a=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map(function(t){return t.trim()}),n=s.indexOf(R(s,function(t){return-1!==t.search(/,|\s/)}));s[n]&&-1===s[n].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var h=/\s*,\s*|\s+/,o=-1!==n?[s.slice(0,n).concat([s[n].split(h)[0]]),[s[n].split(h)[1]].concat(s.slice(n+1))]:[s];return o=o.map(function(t,i){var r=(1===i?!a:a)?"height":"width",s=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)},[]).map(function(t){return gt(t,r,e,C)})}),o.forEach(function(t,e){t.forEach(function(C,i){Ct(C)&&(r[e]+=C*("-"===t[i-1]?-1:1))})}),r}function ft(t,e){var C=e.offset,i=t.placement,r=t.offsets,a=r.popper,s=r.reference,n=i.split("-")[0],h=void 0;return h=Ct(+C)?[+C,0]:zt(C,a,s,n),"left"===n?(a.top+=h[0],a.left-=h[1]):"right"===n?(a.top+=h[0],a.left+=h[1]):"top"===n?(a.left+=h[0],a.top-=h[1]):"bottom"===n&&(a.left+=h[0],a.top+=h[1]),t.popper=a,t}function bt(t,e){var C=e.boundariesElement||p(t.instance.popper);t.instance.reference===C&&(C=p(C));var i=K("transform"),r=t.instance.popper.style,a=r.top,s=r.left,n=r[i];r.top="",r.left="",r[i]="";var h=O(t.instance.popper,t.instance.reference,e.padding,C,t.positionFixed);r.top=a,r.left=s,r[i]=n,e.boundaries=h;var o=e.priority,d=t.offsets.popper,l={primary:function(t){var C=d[t];return d[t]<h[t]&&!e.escapeWithReference&&(C=Math.max(d[t],h[t])),A({},t,C)},secondary:function(t){var C="right"===t?"left":"top",i=d[C];return d[t]>h[t]&&!e.escapeWithReference&&(i=Math.min(d[C],h[t]-("right"===t?d.width:d.height))),A({},C,i)}};return o.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";d=k({},d,l[e](t))}),t.offsets.popper=d,t}function St(t){var e=t.placement,C=e.split("-")[0],i=e.split("-")[1];if(i){var r=t.offsets,a=r.reference,s=r.popper,n=-1!==["bottom","top"].indexOf(C),h=n?"left":"top",o=n?"width":"height",d={start:A({},h,a[h]),end:A({},h,a[h]+a[o]-s[o])};t.offsets.popper=k({},s,d[i])}return t}function mt(t){if(!dt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,C=R(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<C.top||e.left>C.right||e.top>C.bottom||e.right<C.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}function vt(t){var e=t.placement,C=e.split("-")[0],i=t.offsets,r=i.popper,a=i.reference,s=-1!==["left","right"].indexOf(C),n=-1===["top","left"].indexOf(C);return r[s?"left":"top"]=a[C]-(n?r[s?"width":"height"]:0),t.placement=j(e),t.offsets.popper=_(r),t}var wt={shift:{order:100,enabled:!0,fn:St},offset:{order:200,enabled:!0,fn:ft,offset:0},preventOverflow:{order:300,enabled:!0,fn:bt,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:Mt},arrow:{order:500,enabled:!0,fn:lt,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:pt,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:vt},hide:{order:800,enabled:!0,fn:mt},computeStyle:{order:850,enabled:!0,fn:ot,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:at,onLoad:st,gpuAcceleration:void 0}},yt={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:wt},At=function(){function t(e,C){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};w(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=o(this.update.bind(this)),this.options=k({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=C&&C.jquery?C[0]:C,this.options.modifiers={},Object.keys(k({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=k({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return k({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&d(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a}return y(t,[{key:"update",value:function(){return G.call(this)}},{key:"destroy",value:function(){return Y.call(this)}},{key:"enableEventListeners",value:function(){return Q.call(this)}},{key:"disableEventListeners",value:function(){return et.call(this)}}]),t}();At.Utils=("undefined"!==typeof window?window:t).PopperUtils,At.placements=Vt,At.Defaults=yt,e["a"]=At}).call(this,C("c8ba"))},f605:function(t,e){t.exports=function(t,e,C,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(C+": incorrect invocation!");return t}},f9e3:function(t,e,C){},fab2:function(t,e,C){var i=C("7726").document;t.exports=i&&i.documentElement},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-vendors.js.map