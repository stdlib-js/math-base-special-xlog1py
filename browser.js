// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";function n(n){return n!=n}var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,e=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"",u=r&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,i,u,a;if(null==n)return o.call(n);r=n[f],a=f,t=null!=(u=n)&&e.call(u,a);try{n[f]=void 0}catch(t){return o.call(n)}return i=o.call(n),t?n[f]=r:delete n[f],i}:function(n){return o.call(n)},a="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var n,t,r;if("function"!=typeof y)return!1;try{t=new y(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(a&&r instanceof Uint32Array||"[object Uint32Array]"===u(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?c:function(){throw new Error("not implemented")};var l,p=t,A="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;l=function(){var n,t,r;if("function"!=typeof b)return!1;try{t=new b([1,3.14,-3.14,NaN]),r=t,n=(A&&r instanceof Float64Array||"[object Float64Array]"===u(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?d:function(){throw new Error("not implemented")};var v,U=l,m="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,s="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var n,t,r;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),r=t,n=(m&&r instanceof Uint8Array||"[object Uint8Array]"===u(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?s:function(){throw new Error("not implemented")};var h,N=v,F="function"==typeof Uint16Array,I="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var n,t,r;if("function"!=typeof I)return!1;try{t=new I(t=[1,3.14,-3.14,65536,65537]),r=t,n=(F&&r instanceof Uint16Array||"[object Uint16Array]"===u(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?S:function(){throw new Error("not implemented")};var g,T={uint16:h,uint8:N};(g=new T.uint16(1))[0]=4660;var j=52===new T.uint8(g.buffer)[0],E=!0===j?1:0,O=new U(1),x=new p(O.buffer);function P(n){return O[0]=n,x[E]}var V=!0===j?1:0,Y=new U(1),_=new p(Y.buffer);function G(n,t){return Y[0]=n,_[V]=t>>>0,Y[0]}var k=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY,z=1023,B=.6931471803691238,C=1.9082149292705877e-10,D=.41421356237309503,H=-.2928932188134525,J=1.862645149230957e-9,K=5551115123125783e-32,L=9007199254740992,M=.6666666666666666;return function(t,r){return 0!==t||n(r)?t*function(t){var r,o,e,i,f,u,a,y,c,l;if(t<-1||n(t))return NaN;if(-1===t)return q;if(t===k)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<D){if(e<J)return e<K?t:t-t*t*.5;t>H&&(l=0,i=t,o=1)}return 0!==l&&(e<L?(f=(l=((o=P(c=1+t))>>20)-z)>0?1-(c-t):t-(c-1),f/=c):(l=((o=P(c=t))>>20)-z,f=0),(o&=1048575)<434334?c=G(c,1072693248|o):(l+=1,c=G(c,1071644672|o),o=1048576-o>>2),i=c-1),r=.5*i*i,0===o?0===i?l*B+(f+=l*C):l*B-((y=r*(1-M*i))-(l*C+f)-i):(y=(a=(u=i/(2+i))*u)*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))}(a),0===l?i-(r-u*(r+y)):l*B-(r-(u*(r+y)+(l*C+f))-i))}(r):0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).xlog1py=t();
//# sourceMappingURL=browser.js.map
