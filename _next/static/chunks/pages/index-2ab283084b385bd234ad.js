(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,r){"use strict";var t=r(3038);n.default=void 0;var i,o=(i=r(7294))&&i.__esModule?i:{default:i},s=r(1063),a=r(4651),c=r(7426);var l={};function u(e,n,r,t){if(e&&s.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(i?"%"+i:"")]=!0}}var h=function(e){var n,r=!1!==e.prefetch,i=a.useRouter(),h=o.default.useMemo((function(){var n=s.resolveHref(i,e.href,!0),r=t(n,2),o=r[0],a=r[1];return{href:o,as:e.as?s.resolveHref(i,e.as):a||o}}),[i,e.href,e.as]),d=h.href,f=h.as,x=e.children,j=e.replace,p=e.shallow,_=e.scroll,m=e.locale;"string"===typeof x&&(x=o.default.createElement("a",null,x));var b=(n=o.default.Children.only(x))&&"object"===typeof n&&n.ref,v=c.useIntersection({rootMargin:"200px"}),g=t(v,2),k=g[0],y=g[1],N=o.default.useCallback((function(e){k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);o.default.useEffect((function(){var e=y&&r&&s.isLocalURL(d),n="undefined"!==typeof m?m:i&&i.locale,t=l[d+"%"+f+(n?"%"+n:"")];e&&!t&&u(i,d,f,{locale:n})}),[f,d,y,m,r,i]);var w={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,i,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==a&&t.indexOf("#")>=0&&(a=!1),n[i?"replace":"push"](r,t,{shallow:o,locale:c,scroll:a}))}(e,i,d,f,j,p,_,m)},onMouseEnter:function(e){s.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(i,d,f,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var I="undefined"!==typeof m?m:i&&i.locale,S=i&&i.isLocaleDomain&&s.getDomainLocale(f,I,i&&i.locales,i&&i.domainLocales);w.href=S||s.addBasePath(s.addLocale(f,I,i&&i.defaultLocale))}return o.default.cloneElement(n,w)};n.default=h},7426:function(e,n,r){"use strict";var t=r(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!s,c=i.useRef(),l=i.useState(!1),u=t(l,2),h=u[0],d=u[1],f=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||h||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=a.get(n);if(r)return r;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return a.set(n,r={id:n,observer:i,elements:t}),r}(r),i=t.id,o=t.observer,s=t.elements;return s.set(e,n),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),a.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,h]);return i.useEffect((function(){if(!s&&!h){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[h]),[f,h]};var i=r(7294),o=r(3447),s="undefined"!==typeof IntersectionObserver;var a=new Map},3037:function(e,n,r){"use strict";r.d(n,{$_:function(){return a},h4:function(){return h},JO:function(){return x},Ar:function(){return _},TH:function(){return y}});var t=r(7294),i=r(2381),o=r.n(i),s=r(5893),a=function(){return(0,s.jsx)("footer",{className:o().footer,children:(0,s.jsx)("small",{children:"Code snippets licensed under MIT, unless otherwise noted."})})},c=r(1664),l=r(4329),u=r.n(l),h=function(){return(0,s.jsxs)("nav",{className:u().navigation__container,children:[(0,s.jsx)("div",{className:u().navigation,children:(0,s.jsx)(c.default,{href:"/",children:"/var/log/koka"})}),(0,s.jsx)("div",{children:(0,s.jsx)(c.default,{href:"/archives",children:"archive"})})]})},d=r(7950),f=r.n(d),x=function(){return(0,s.jsxs)("div",{className:f().icon__container,children:[(0,s.jsxs)("ul",{className:f().icon,children:[(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{}),(0,s.jsx)("li",{}),(0,s.jsx)("li",{}),(0,s.jsx)("li",{className:f().green})]}),(0,s.jsxs)("ul",{className:f().icon,children:[(0,s.jsx)("li",{}),(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{})]}),(0,s.jsxs)("ul",{className:f().icon,children:[(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{}),(0,s.jsx)("li",{}),(0,s.jsx)("li",{}),(0,s.jsx)("li",{className:f().green})]}),(0,s.jsxs)("ul",{className:f().icon,children:[(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{className:f().green})]}),(0,s.jsxs)("ul",{className:f().icon,children:[(0,s.jsx)("li",{}),(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{className:f().green}),(0,s.jsx)("li",{})]})]})},j=r(3508),p=r.n(j),_=function(e){var n=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h,{}),(0,s.jsx)("main",{className:p().container,children:n}),(0,s.jsx)(a,{})]})},m=r(5785),b=function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,t=function(){n||(n=!0,e.apply(void 0,arguments),setTimeout((function(){n=!1}),r))};return t},v=r(6381),g=r.n(v),k=function(e){var n=e.title,r=e.depth,t=e.active,i=e.onClick,o="toc__h".concat(r);return(0,s.jsx)("li",{onClick:i,className:"\n        ".concat(t?g().toc__active:"","\n        ").concat(g()[o],"\n        "),children:n})},y=function(){var e=(0,t.useState)({titles:[],nodes:[],minDepth:0}),n=e[0],r=e[1],i=(0,t.useState)(),o=i[0],a=i[1];return(0,t.useEffect)((function(){var e=["h1","h2","h3","h4"].join(","),n=Array.from(document.querySelectorAll(e)),t=n.map((function(e){return{title:e.innerText,depth:Number(e.nodeName[1])}})),i=Math.min.apply(Math,(0,m.Z)(t.map((function(e){return e.depth}))));r({titles:t,nodes:n,minDepth:i})}),[]),(0,t.useEffect)((function(){var e=b((function(){var e=n.titles,r=n.nodes.map((function(e){return function(e){for(var n=0;e instanceof HTMLElement;)n+=e.offsetTop-e.scrollTop+e.clientTop,e=e.offsetParent;return n}(e)})).findIndex((function(e){return e>window.scrollY}));a(-1===r?e.length-1:r-1)}));return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[n]),(0,s.jsx)("nav",{className:g().toc__nav,role:"navigation",children:(0,s.jsx)("ul",{className:g().toc,children:n.titles.map((function(e,r){var t=e.title,i=e.depth;return(0,s.jsx)(k,{title:t,depth:i,active:o===r,onClick:function(e){return function(e,r){e.preventDefault(),n.nodes[r].scrollIntoView({behavior:"smooth"})}(e,r)}},"".concat(null===t||void 0===t?void 0:t.replace(/ /g,"_"),"_").concat(i))}))})})}},6839:function(e,n,r){"use strict";r.r(n);r(7294);var t=r(3037),i=r(6025),o=r.n(i),s=r(5893),a=function(){return(0,s.jsxs)("section",{itemScope:!0,itemType:"http://microformats.org/profile/hcard",className:o().profile_container,"aria-label":"Profile",children:[(0,s.jsx)("div",{className:o().left,children:(0,s.jsx)(t.JO,{})}),(0,s.jsxs)("div",{itemProp:"fn",className:o().profile__main,children:[(0,s.jsx)("h2",{itemProp:"n",children:"Koka"}),(0,s.jsx)("p",{children:"I solve problems."}),(0,s.jsx)("p",{itemProp:"role",children:"Software Engineer"}),(0,s.jsxs)("p",{children:["Bachelor of Engineering @",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.ynu.ac.jp/",children:"YNU"})]})]})]})},c=function(){return(0,s.jsxs)("section",{className:o().skills_container,children:[(0,s.jsx)("h1",{children:"Skills"}),(0,s.jsxs)("ul",{className:o().skills,"aria-label":"Skills",children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"Rust"}),"some personal experiences in Low-Layer Programming like ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/koka831/runix",children:"Hobby Kernel"}),",",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/koka831/marmoset",children:"Interpreter"}),", interested in boot loading sequence and Linux kernel especially memory mapping.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"practices ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/koka831/algorithm",children:"algorithms"})," (AtCoder Highest: 1201).",(0,s.jsx)("br",{})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"Ruby"}),"have some experiences with Ruby on Rails(RoR), devise token auth.",(0,s.jsx)("br",{}),"deploy it with capistrano and ECS/ECR.",(0,s.jsx)("br",{}),"I usually develop an API with RoR and serve it with token authentication with ",(0,s.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://github.com/lynndylanhurley/devise_token_auth",children:"devise_token_auth"}),".",(0,s.jsx)("br",{})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"JavaScript/TypeScript"}),"previously I used to develop web-apps in Vue.js/Nuxt.js (and had contribution to Nuxt.js docs)",(0,s.jsx)("br",{}),"switched to React/Next.js for some reason;",(0,s.jsx)("br",{}),"- Hooks API",(0,s.jsx)("br",{}),"- has high affinity to TypeScript especially its data store like redux with it",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"I usually develop an web-app with Next.js even if it does not require SSR/SSG because;",(0,s.jsx)("br",{}),"- directory structure convention",(0,s.jsx)("br",{}),"- easy to switch using SSR/SSG; productions change continuously",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("a",{href:"https://koka831.github.io",children:"This Blog"})," is built with Next.js."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"Python"}),"I was researching text summarization methods using machine learning at university.",(0,s.jsx)("br",{}),"- NLP, Self-Attention model + Encoder-Decoder",(0,s.jsx)("br",{}),"- time-series data analysis",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"wrote some contents for ",(0,s.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://tracks.run/",children:"track"})," and ",(0,s.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://codeprep.jp/",children:"CODEPREP"}),".",(0,s.jsx)("br",{})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"Environment"}),"- Arch Linux + i3wm + tmux + zsh + Neovim",(0,s.jsx)("br",{})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"Interests"}),"- Oil Painting",(0,s.jsx)("br",{}),"- Tea",(0,s.jsx)("br",{})]})]})]})},l=function(){return(0,s.jsxs)("section",{className:o().projects_container,children:[(0,s.jsx)("h2",{children:"Side Projects"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"Automatic-control system for UAV(Unmanned Aerial Vehicle, a.k.a Drone)/archived"}),"- written in C(+ inline asm)",(0,s.jsx)("br",{}),"- in-time object recognition in movies from UAVs",(0,s.jsx)("br",{})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"Air Conditioner Controller using Infrared Sensor with Raspberry Pi Zero"}),"- repaired a broken controller with SIR-34ST3F IR device",(0,s.jsx)("br",{}),"- written in MicroPython",(0,s.jsx)("br",{})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"Runix, a Hobby Kernel in Rust"}),"- boots on qemu",(0,s.jsx)("br",{}),"- accepts keyboard input",(0,s.jsx)("br",{}),"- supports 64bits mode and multi-boot",(0,s.jsx)("br",{}),"- recovers from at most double fault",(0,s.jsx)("br",{}),"- ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/koka831/runix",children:"GitHub"}),(0,s.jsx)("br",{})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"Marmoset, a Toy Interpreter in Rust"}),"- write a tiny interpreter referring ",(0,s.jsx)("a",{href:"https://interpreterbook.com/",children:"Writing An Interpreter In Go"}),(0,s.jsx)("br",{}),"- ",(0,s.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://github.com/koka831/marmoset",children:"GitHub"}),(0,s.jsx)("br",{})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h3",{children:"Blog with Next.js"}),"- build a blog system with Next.js",(0,s.jsx)("br",{}),"- without UI library; just for fun",(0,s.jsx)("br",{}),"- retrieve edit histories for each posts from ",(0,s.jsx)("code",{className:"language-unknown",children:"git log --follow"}),(0,s.jsx)("br",{}),"- comment using github issue with ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/utterance/utterances",children:"utterances"}),(0,s.jsx)("br",{})]})]})]})},u=function(){return(0,s.jsxs)("section",{itemScope:!0,className:o().contact_container,children:[(0,s.jsx)("h2",{children:"Contact"}),(0,s.jsxs)("ul",{className:o().contact,"aria-label":"Contact",children:[(0,s.jsx)("li",{itemProp:"email",children:"mail: koka.code+github.io[at]gmail.com"}),(0,s.jsx)("li",{children:"GPG: FBCA 28DB 3AAD 69A9 C3D2  DB16 2614 F77B B077 D125"}),(0,s.jsxs)("li",{children:["Twitter: ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/k_0ka",children:"k_0ka"})]}),(0,s.jsxs)("li",{children:["GitHub: ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/koka831",children:"koka831"})]}),(0,s.jsxs)("li",{children:["Qiita: ",(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://qiita.com/koka",className:"qiita",children:"koka"})]})]})]})};n.default=function(){return(0,s.jsx)(t.Ar,{children:(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsx)(a,{}),(0,s.jsx)(c,{}),(0,s.jsx)(l,{}),(0,s.jsx)(u,{})]})})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6839)}])},2381:function(e){e.exports={footer:"Footer_footer__cAlbN"}},4329:function(e){e.exports={navigation__container:"Header_navigation__container__3D5xg",navigation:"Header_navigation__16lxy",cursor:"Header_cursor__2dspt"}},7950:function(e){e.exports={icon__container:"Icon_icon__container__zXY7M",icon:"Icon_icon__2P9f5",green:"Icon_green__DJdcM"}},3508:function(e){e.exports={container:"Layout_container__QVNsN"}},6381:function(e){e.exports={toc__nav:"Toc_toc__nav__2o5GC",toc:"Toc_toc__3i1gg",toc__active:"Toc_toc__active__3Lha6",toc__h1:"Toc_toc__h1__x9SsE",toc__h2:"Toc_toc__h2__1gntT",toc__h3:"Toc_toc__h3__3-rtF"}},6025:function(e){e.exports={container:"index_container__3kY3K",flex:"index_flex__2XB_6",links_container:"index_links_container__2NgyM",profile_container:"index_profile_container__1aFKL",skills_container:"index_skills_container__J9yt7",projects_container:"index_projects_container__240HP",contact_container:"index_contact_container__30wjr",profile__main:"index_profile__main__3RMRM",contact:"index_contact__9gE-t",skills:"index_skills__3mi-1"}},1664:function(e,n,r){e.exports=r(2167)},5785:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function i(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(n,{Z:function(){return i}})}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);