(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{105:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return a}));var n=r(22),i=r(107);function o(){var t=Object(n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,u=void 0!==a&&a,c=o.absolute,l=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(u)return e+r;var f=r.startsWith(e)?r:e+r.replace(/^\//,"");return l?t+f:f}(o,r,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},106:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=i.a.createContext({}),f=function(t){var e=i.a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},p=function(t){var e=f(t.components);return i.a.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},d=i.a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,a=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),p=f(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||s[d]||o;return r?i.a.createElement(b,u(u({ref:e},l),{},{components:r})):i.a.createElement(b,u({ref:e},l))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:n,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},107:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!n(t)}r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return i}))},81:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return a})),r.d(e,"metadata",(function(){return u})),r.d(e,"toc",(function(){return c})),r.d(e,"default",(function(){return f}));var n=r(3),i=r(7),o=(r(0),r(106)),a=(r(105),{slug:"git",title:"Git\u547d\u4ee4\u8bb0\u5f55",author:"\u5c0f\u732a\u61a8\u61a8",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08",tags:["\u5de5\u5177","utils"]}),u={permalink:"/git",source:"@site/blog\\2021-01-05-git.md",description:"git\u547d\u4ee4\u8bb0\u5f55",date:"2021-01-05T00:00:00.000Z",tags:[{label:"\u5de5\u5177",permalink:"/tags/\u5de5\u5177"},{label:"utils",permalink:"/tags/utils"}],title:"Git\u547d\u4ee4\u8bb0\u5f55",readingTime:6.395,truncated:!0,prevItem:{title:"\u642d\u5efa\u524d\u7aef\u811a\u624b\u67b6\u5de5\u5177\u5e76\u53d1\u5e03npm\u5305",permalink:"/npm Plugin"},nextItem:{title:"\u524d\u7aef\u9762\u8bd5\u8bd5\u98981",permalink:"/mianshi"}},c=[{value:"git\u547d\u4ee4\u8bb0\u5f55",id:"git\u547d\u4ee4\u8bb0\u5f55",children:[]}],l={toc:c};function f(t){var e=t.components,r=Object(i.a)(t,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"git\u547d\u4ee4\u8bb0\u5f55"},"git\u547d\u4ee4\u8bb0\u5f55"),Object(o.b)("p",null,"\u2003","\u2003","Git \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u7528\u4e8e\u654f\u6377\u9ad8\u6548\u5730\u5904\u7406\u4efb\u4f55\u6216\u5c0f\u6216\u5927\u7684\u9879\u76ee\u3002\u5728\u65e5\u5e38\u7684\u5de5\u4f5c\u4e2dgit\u4f7f\u7528\u60c5\u51b5\u662f\u975e\u5e38\u591a\u7684,\u5728\u6b64\u5904\u8bb0\u5f55\u4e00\u4e0bgit\u7684\u547d\u4ee4,\u65b9\u4fbf\u4eca\u540e\u67e5\u627e"))}f.isMDXComponent=!0}}]);