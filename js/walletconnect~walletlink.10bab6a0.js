(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["walletconnect~walletlink"],{"0b16":function(t,e,n){"use strict";var r=n("1985"),o=n("35e8");function s(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=k,e.resolve=C,e.resolveObject=w,e.format=x,e.Url=s;var i=/^([a-z0-9.+-]+:)/i,u=/:[0-9]*$/,a=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["<",">",'"',"`"," ","\r","\n","\t"],h=["{","}","|","\\","^","`"].concat(l),_=["'"].concat(h),c=["%","/","?",";","#"].concat(_),f=["/","?","#"],p=255,d=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,v={javascript:!0,"javascript:":!0},y={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},b=n("b383");function k(t,e,n){if(t&&o.isObject(t)&&t instanceof s)return t;var r=new s;return r.parse(t,e,n),r}function x(t){return o.isString(t)&&(t=k(t)),t instanceof s?t.format():s.prototype.format.call(t)}function C(t,e){return k(t,!1,!0).resolve(e)}function w(t,e){return t?k(t,!1,!0).resolveObject(e):e}s.prototype.parse=function(t,e,n){if(!o.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var s=t.indexOf("?"),u=-1!==s&&s<t.indexOf("#")?"?":"#",l=t.split(u),h=/\\/g;l[0]=l[0].replace(h,"/"),t=l.join(u);var k=t;if(k=k.trim(),!n&&1===t.split("#").length){var x=a.exec(k);if(x)return this.path=k,this.href=k,this.pathname=x[1],x[2]?(this.search=x[2],this.query=e?b.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var C=i.exec(k);if(C){C=C[0];var w=C.toLowerCase();this.protocol=w,k=k.substr(C.length)}if(n||C||k.match(/^\/\/[^@\/]+@[^@\/]+/)){var O="//"===k.substr(0,2);!O||C&&y[C]||(k=k.substr(2),this.slashes=!0)}if(!y[C]&&(O||C&&!g[C])){for(var j,A,S=-1,U=0;U<f.length;U++){var H=k.indexOf(f[U]);-1!==H&&(-1===S||H<S)&&(S=H)}A=-1===S?k.lastIndexOf("@"):k.lastIndexOf("@",S),-1!==A&&(j=k.slice(0,A),k=k.slice(A+1),this.auth=decodeURIComponent(j)),S=-1;for(U=0;U<c.length;U++){H=k.indexOf(c[U]);-1!==H&&(-1===S||H<S)&&(S=H)}-1===S&&(S=k.length),this.host=k.slice(0,S),k=k.slice(S),this.parseHost(),this.hostname=this.hostname||"";var E="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!E)for(var q=this.hostname.split(/\./),P=(U=0,q.length);U<P;U++){var N=q[U];if(N&&!N.match(d)){for(var I="",R=0,D=N.length;R<D;R++)N.charCodeAt(R)>127?I+="x":I+=N[R];if(!I.match(d)){var T=q.slice(0,U),F=q.slice(U+1),L=N.match(m);L&&(T.push(L[1]),F.unshift(L[2])),F.length&&(k="/"+F.join(".")+k),this.hostname=T.join(".");break}}}this.hostname.length>p?this.hostname="":this.hostname=this.hostname.toLowerCase(),E||(this.hostname=r.toASCII(this.hostname));var W=this.port?":"+this.port:"",M=this.hostname||"";this.host=M+W,this.href+=this.host,E&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==k[0]&&(k="/"+k))}if(!v[w])for(U=0,P=_.length;U<P;U++){var V=_[U];if(-1!==k.indexOf(V)){var $=encodeURIComponent(V);$===V&&($=escape(V)),k=k.split(V).join($)}}var z=k.indexOf("#");-1!==z&&(this.hash=k.substr(z),k=k.slice(0,z));var B=k.indexOf("?");if(-1!==B?(this.search=k.substr(B),this.query=k.substr(B+1),e&&(this.query=b.parse(this.query)),k=k.slice(0,B)):e&&(this.search="",this.query={}),k&&(this.pathname=k),g[w]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){W=this.pathname||"";var G=this.search||"";this.path=W+G}return this.href=this.format(),this},s.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",s=!1,i="";this.host?s=t+this.host:this.hostname&&(s=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(i=b.stringify(this.query));var u=this.search||i&&"?"+i||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||g[e])&&!1!==s?(s="//"+(s||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):s||(s=""),r&&"#"!==r.charAt(0)&&(r="#"+r),u&&"?"!==u.charAt(0)&&(u="?"+u),n=n.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})),u=u.replace("#","%23"),e+s+n+u+r},s.prototype.resolve=function(t){return this.resolveObject(k(t,!1,!0)).format()},s.prototype.resolveObject=function(t){if(o.isString(t)){var e=new s;e.parse(t,!1,!0),t=e}for(var n=new s,r=Object.keys(this),i=0;i<r.length;i++){var u=r[i];n[u]=this[u]}if(n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol){for(var a=Object.keys(t),l=0;l<a.length;l++){var h=a[l];"protocol"!==h&&(n[h]=t[h])}return g[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(t.protocol&&t.protocol!==n.protocol){if(!g[t.protocol]){for(var _=Object.keys(t),c=0;c<_.length;c++){var f=_[c];n[f]=t[f]}return n.href=n.format(),n}if(n.protocol=t.protocol,t.host||y[t.protocol])n.pathname=t.pathname;else{var p=(t.pathname||"").split("/");while(p.length&&!(t.host=p.shift()));t.host||(t.host=""),t.hostname||(t.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),n.pathname=p.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var d=n.pathname||"",m=n.search||"";n.path=d+m}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var v=n.pathname&&"/"===n.pathname.charAt(0),b=t.host||t.pathname&&"/"===t.pathname.charAt(0),k=b||v||n.host&&t.pathname,x=k,C=n.pathname&&n.pathname.split("/")||[],w=(p=t.pathname&&t.pathname.split("/")||[],n.protocol&&!g[n.protocol]);if(w&&(n.hostname="",n.port=null,n.host&&(""===C[0]?C[0]=n.host:C.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===p[0]?p[0]=t.host:p.unshift(t.host)),t.host=null),k=k&&(""===p[0]||""===C[0])),b)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,C=p;else if(p.length)C||(C=[]),C.pop(),C=C.concat(p),n.search=t.search,n.query=t.query;else if(!o.isNullOrUndefined(t.search)){if(w){n.hostname=n.host=C.shift();var O=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@");O&&(n.auth=O.shift(),n.host=n.hostname=O.shift())}return n.search=t.search,n.query=t.query,o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!C.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var j=C.slice(-1)[0],A=(n.host||t.host||C.length>1)&&("."===j||".."===j)||""===j,S=0,U=C.length;U>=0;U--)j=C[U],"."===j?C.splice(U,1):".."===j?(C.splice(U,1),S++):S&&(C.splice(U,1),S--);if(!k&&!x)for(;S--;S)C.unshift("..");!k||""===C[0]||C[0]&&"/"===C[0].charAt(0)||C.unshift(""),A&&"/"!==C.join("/").substr(-1)&&C.push("");var H=""===C[0]||C[0]&&"/"===C[0].charAt(0);if(w){n.hostname=n.host=H?"":C.length?C.shift():"";O=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@");O&&(n.auth=O.shift(),n.host=n.hostname=O.shift())}return k=k||n.host&&C.length,k&&!H&&C.unshift(""),C.length?n.pathname=C.join("/"):(n.pathname=null,n.path=null),o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},s.prototype.parseHost=function(){var t=this.host,e=u.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},"30ec":function(t,e,n){"use strict";n.r(e),n.d(e,"useState",(function(){return p})),n.d(e,"useReducer",(function(){return d})),n.d(e,"useEffect",(function(){return m})),n.d(e,"useLayoutEffect",(function(){return v})),n.d(e,"useRef",(function(){return y})),n.d(e,"useImperativeHandle",(function(){return g})),n.d(e,"useMemo",(function(){return b})),n.d(e,"useCallback",(function(){return k})),n.d(e,"useContext",(function(){return x})),n.d(e,"useDebugValue",(function(){return C})),n.d(e,"useErrorBoundary",(function(){return w}));var r,o,s,i=n("da65"),u=0,a=[],l=i["options"].__r,h=i["options"].diffed,_=i["options"].__c,c=i["options"].unmount;function f(t,e){i["options"].__h&&i["options"].__h(o,t,u||e),u=0;var n=o.__H||(o.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function p(t){return u=1,d(U,t)}function d(t,e,n){var s=f(r++,2);return s.__c||(s.__c=o,s.__=[n?n(e):U(void 0,e),function(e){var n=t(s.__[0],e);s.__[0]!==n&&(s.__[0]=n,s.__c.setState({}))}]),s.__}function m(t,e){var n=f(r++,3);!i["options"].__s&&S(n.__H,e)&&(n.__=t,n.__H=e,o.__H.__h.push(n))}function v(t,e){var n=f(r++,4);!i["options"].__s&&S(n.__H,e)&&(n.__=t,n.__H=e,o.__h.push(n))}function y(t){return u=5,b((function(){return{current:t}}),[])}function g(t,e,n){u=6,v((function(){"function"==typeof t?t(e()):t&&(t.current=e())}),null==n?n:n.concat(t))}function b(t,e){var n=f(r++,7);return S(n.__H,e)?(n.__H=e,n.__h=t,n.__=t()):n.__}function k(t,e){return u=8,b((function(){return t}),e)}function x(t){var e=o.context[t.__c],n=f(r++,9);return n.__c=t,e?(null==n.__&&(n.__=!0,e.sub(o)),e.props.value):t.__}function C(t,e){i["options"].useDebugValue&&i["options"].useDebugValue(e?e(t):t)}function w(t){var e=f(r++,10),n=p();return e.__=t,o.componentDidCatch||(o.componentDidCatch=function(t){e.__&&e.__(t),n[1](t)}),[n[0],function(){n[1](void 0)}]}function O(){a.some((function(t){if(t.__P)try{t.__H.__h.forEach(j),t.__H.__h.forEach(A),t.__H.__h=[]}catch(o){return t.__H.__h=[],i["options"].__e(o,t.__v),!0}})),a=[]}function j(t){t.t&&t.t()}function A(t){var e=t.__();"function"==typeof e&&(t.t=e)}function S(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function U(t,e){return"function"==typeof e?e(t):e}i["options"].__r=function(t){l&&l(t),r=0,(o=t.__c).__H&&(o.__H.__h.forEach(j),o.__H.__h.forEach(A),o.__H.__h=[])},i["options"].diffed=function(t){h&&h(t);var e=t.__c;if(e){var n=e.__H;n&&n.__h.length&&(1!==a.push(e)&&s===i["options"].requestAnimationFrame||((s=i["options"].requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(O))}},i["options"].__c=function(t,e){e.some((function(t){try{t.__h.forEach(j),t.__h=t.__h.filter((function(t){return!t.__||A(t)}))}catch(s){e.some((function(t){t.__h&&(t.__h=[])})),e=[],i["options"].__e(s,t.__v)}})),_&&_(t,e)},i["options"].unmount=function(t){c&&c(t);var e=t.__c;if(e){var n=e.__H;if(n)try{n.__.forEach((function(t){return t.t&&t.t()}))}catch(t){i["options"].__e(t,e.__v)}}}},"35e8":function(t,e,n){"use strict";t.exports={isString:function(t){return"string"===typeof t},isObject:function(t){return"object"===typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},"91dd":function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,s){e=e||"&",n=n||"=";var i={};if("string"!==typeof t||0===t.length)return i;var u=/\+/g;t=t.split(e);var a=1e3;s&&"number"===typeof s.maxKeys&&(a=s.maxKeys);var l=t.length;a>0&&l>a&&(l=a);for(var h=0;h<l;++h){var _,c,f,p,d=t[h].replace(u,"%20"),m=d.indexOf(n);m>=0?(_=d.substr(0,m),c=d.substr(m+1)):(_=d,c=""),f=decodeURIComponent(_),p=decodeURIComponent(c),r(i,f)?o(i[f])?i[f].push(p):i[f]=[i[f],p]:i[f]=p}return i};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},b383:function(t,e,n){"use strict";e.decode=e.parse=n("91dd"),e.encode=e.stringify=n("e099")},da65:function(t,e,n){"use strict";n.r(e),n.d(e,"render",(function(){return D})),n.d(e,"hydrate",(function(){return T})),n.d(e,"createElement",(function(){return m})),n.d(e,"h",(function(){return m})),n.d(e,"Fragment",(function(){return g})),n.d(e,"createRef",(function(){return y})),n.d(e,"isValidElement",(function(){return o})),n.d(e,"Component",(function(){return b})),n.d(e,"cloneElement",(function(){return F})),n.d(e,"createContext",(function(){return L})),n.d(e,"toChildArray",(function(){return j})),n.d(e,"_unmount",(function(){return I})),n.d(e,"options",(function(){return r}));var r,o,s,i,u,a,l,h,_={},c=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function p(t,e){for(var n in e)t[n]=e[n];return t}function d(t){var e=t.parentNode;e&&e.removeChild(t)}function m(t,e,n){var r,o=arguments,s={};for(r in e)"key"!==r&&"ref"!==r&&(s[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(s.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===s[r]&&(s[r]=t.defaultProps[r]);return v(t,s,e&&e.key,e&&e.ref,null)}function v(t,e,n,o,s){var i={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s};return null==s&&(i.__v=i),r.vnode&&r.vnode(i),i}function y(){return{}}function g(t){return t.children}function b(t,e){this.props=t,this.context=e}function k(t,e){if(null==e)return t.__?k(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?k(t):null}function x(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return x(t)}}function C(t){(!t.__d&&(t.__d=!0)&&s.push(t)&&!i++||a!==r.debounceRendering)&&((a=r.debounceRendering)||u)(w)}function w(){for(var t;i=s.length;)t=s.sort((function(t,e){return t.__v.__b-e.__v.__b})),s=[],t.some((function(t){var e,n,r,o,s,i,u;t.__d&&(i=(s=(e=t).__v).__e,(u=e.__P)&&(n=[],(r=p({},s)).__v=r,o=E(u,s,r,e.__n,void 0!==u.ownerSVGElement,null,n,null==i?k(s):i),q(n,s),o!=i&&x(s)))}))}function O(t,e,n,r,o,s,i,u,a){var l,h,f,p,m,v,y,g=n&&n.__k||c,b=g.length;if(u==_&&(u=null!=s?s[0]:b?k(n,0):null),l=0,e.__k=j(e.__k,(function(n){if(null!=n){if(n.__=e,n.__b=e.__b+1,null===(f=g[l])||f&&n.key==f.key&&n.type===f.type)g[l]=void 0;else for(h=0;h<b;h++){if((f=g[h])&&n.key==f.key&&n.type===f.type){g[h]=void 0;break}f=null}if(p=E(t,n,f=f||_,r,o,s,i,u,a),(h=n.ref)&&f.ref!=h&&(y||(y=[]),f.ref&&y.push(f.ref,null,n),y.push(h,n.__c||p,n)),null!=p){var c;if(null==v&&(v=p),void 0!==n.__d)c=n.__d,n.__d=void 0;else if(s==f||p!=u||null==p.parentNode){t:if(null==u||u.parentNode!==t)t.appendChild(p),c=null;else{for(m=u,h=0;(m=m.nextSibling)&&h<b;h+=2)if(m==p)break t;t.insertBefore(p,u),c=u}"option"==e.type&&(t.value="")}u=void 0!==c?c:p.nextSibling,"function"==typeof e.type&&(e.__d=u)}else u&&f.__e==u&&u.parentNode!=t&&(u=k(f))}return l++,n})),e.__e=v,null!=s&&"function"!=typeof e.type)for(l=s.length;l--;)null!=s[l]&&d(s[l]);for(l=b;l--;)null!=g[l]&&I(g[l],g[l]);if(y)for(l=0;l<y.length;l++)N(y[l],y[++l],y[++l])}function j(t,e,n){if(null==n&&(n=[]),null==t||"boolean"==typeof t)e&&n.push(e(null));else if(Array.isArray(t))for(var r=0;r<t.length;r++)j(t[r],e,n);else n.push(e?e("string"==typeof t||"number"==typeof t?v(null,t,null,null,t):null!=t.__e||null!=t.__c?v(t.type,t.props,t.key,null,t.__v):t):t);return n}function A(t,e,n,r,o){var s;for(s in n)"children"===s||"key"===s||s in e||U(t,s,null,n[s],r);for(s in e)o&&"function"!=typeof e[s]||"children"===s||"key"===s||"value"===s||"checked"===s||n[s]===e[s]||U(t,s,e[s],n[s],r)}function S(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===f.test(e)?n+"px":null==n?"":n}function U(t,e,n,r,o){var s,i,u,a,l;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(s=t.style,"string"==typeof n)s.cssText=n;else{if("string"==typeof r&&(s.cssText="",r=null),r)for(a in r)n&&a in n||S(s,a,"");if(n)for(l in n)r&&n[l]===r[l]||S(s,l,n[l])}else"o"===e[0]&&"n"===e[1]?(i=e!==(e=e.replace(/Capture$/,"")),u=e.toLowerCase(),e=(u in t?u:e).slice(2),n?(r||t.addEventListener(e,H,i),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,H,i)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function H(t){this.l[t.type](r.event?r.event(t):t)}function E(t,e,n,o,s,i,u,a,l){var h,_,c,f,d,m,v,y,k,x,C=e.type;if(void 0!==e.constructor)return null;(h=r.__b)&&h(e);try{t:if("function"==typeof C){if(y=e.props,k=(h=C.contextType)&&o[h.__c],x=h?k?k.props.value:h.__:o,n.__c?v=(_=e.__c=n.__c).__=_.__E:("prototype"in C&&C.prototype.render?e.__c=_=new C(y,x):(e.__c=_=new b(y,x),_.constructor=C,_.render=R),k&&k.sub(_),_.props=y,_.state||(_.state={}),_.context=x,_.__n=o,c=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=C.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=p({},_.__s)),p(_.__s,C.getDerivedStateFromProps(y,_.__s))),f=_.props,d=_.state,c)null==C.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==C.getDerivedStateFromProps&&y!==f&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(y,x),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(y,_.__s,x)||e.__v===n.__v&&!_.__){for(_.props=y,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,_.__h.length&&u.push(_),h=0;h<e.__k.length;h++)e.__k[h]&&(e.__k[h].__=e);break t}null!=_.componentWillUpdate&&_.componentWillUpdate(y,_.__s,x),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(f,d,m)}))}_.context=x,_.props=y,_.state=_.__s,(h=r.__r)&&h(e),_.__d=!1,_.__v=e,_.__P=t,h=_.render(_.props,_.state,_.context),e.__k=null!=h&&h.type==g&&null==h.key?h.props.children:Array.isArray(h)?h:[h],null!=_.getChildContext&&(o=p(p({},o),_.getChildContext())),c||null==_.getSnapshotBeforeUpdate||(m=_.getSnapshotBeforeUpdate(f,d)),O(t,e,n,o,s,i,u,a,l),_.base=e.__e,_.__h.length&&u.push(_),v&&(_.__E=_.__=null),_.__e=!1}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=P(n.__e,e,n,o,s,i,u,l);(h=r.diffed)&&h(e)}catch(t){e.__v=null,r.__e(t,e,n)}return e.__e}function q(t,e){r.__c&&r.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){r.__e(t,e.__v)}}))}function P(t,e,n,r,o,s,i,u){var a,l,h,f,p,d=n.props,m=e.props;if(o="svg"===e.type||o,null!=s)for(a=0;a<s.length;a++)if(null!=(l=s[a])&&((null===e.type?3===l.nodeType:l.localName===e.type)||t==l)){t=l,s[a]=null;break}if(null==t){if(null===e.type)return document.createTextNode(m);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,m.is&&{is:m.is}),s=null,u=!1}if(null===e.type)d!==m&&t.data!=m&&(t.data=m);else{if(null!=s&&(s=c.slice.call(t.childNodes)),h=(d=n.props||_).dangerouslySetInnerHTML,f=m.dangerouslySetInnerHTML,!u){if(d===_)for(d={},p=0;p<t.attributes.length;p++)d[t.attributes[p].name]=t.attributes[p].value;(f||h)&&(f&&h&&f.__html==h.__html||(t.innerHTML=f&&f.__html||""))}A(t,m,d,o,u),f?e.__k=[]:(e.__k=e.props.children,O(t,e,n,r,"foreignObject"!==e.type&&o,s,i,_,u)),u||("value"in m&&void 0!==(a=m.value)&&a!==t.value&&U(t,"value",a,d.value,!1),"checked"in m&&void 0!==(a=m.checked)&&a!==t.checked&&U(t,"checked",a,d.checked,!1))}return t}function N(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){r.__e(t,n)}}function I(t,e,n){var o,s,i;if(r.unmount&&r.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||N(o,null,e)),n||"function"==typeof t.type||(n=null!=(s=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){r.__e(t,e)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&I(o[i],e,n);null!=s&&d(s)}function R(t,e,n){return this.constructor(t,n)}function D(t,e,n){var o,s,i;r.__&&r.__(t,e),s=(o=n===l)?null:n&&n.__k||e.__k,t=m(g,null,[t]),i=[],E(e,(o?e:n||e).__k=t,s||_,_,void 0!==e.ownerSVGElement,n&&!o?[n]:s?null:c.slice.call(e.childNodes),i,n||_,o),q(i,t)}function T(t,e){D(t,e,l)}function F(t,e){var n,r;for(r in e=p(p({},t.props),e),arguments.length>2&&(e.children=c.slice.call(arguments,2)),n={},e)"key"!==r&&"ref"!==r&&(n[r]=e[r]);return v(t.type,n,e.key||t.key,e.ref||t.ref,null)}function L(t){var e={},n={__c:"__cC"+h++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return e[n.__c]=o,e},this.shouldComponentUpdate=function(t){o.props.value!==t.value&&r.some((function(e){e.context=t.value,C(e)}))},this.sub=function(t){r.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){r.splice(r.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}r={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return C(n.__E=n)}catch(e){t=e}throw t}},o=function(t){return null!=t&&void 0===t.constructor},b.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&p(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),C(this))},b.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),C(this))},b.prototype.render=g,s=[],i=0,u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=_,h=0},e099:function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,u){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===typeof t?s(i(t),(function(i){var u=encodeURIComponent(r(i))+n;return o(t[i])?s(t[i],(function(t){return u+encodeURIComponent(r(t))})).join(e):u+encodeURIComponent(r(t[i]))})).join(e):u?encodeURIComponent(r(u))+n+encodeURIComponent(r(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function s(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var i=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}}}]);
//# sourceMappingURL=walletconnect~walletlink.10bab6a0.js.map