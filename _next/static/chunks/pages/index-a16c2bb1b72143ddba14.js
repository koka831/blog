(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2239:function(e,n,r){"use strict";r.d(n,{$_:function(){return c},h4:function(){return x},JO:function(){return u},Ar:function(){return f},TH:function(){return v}});var i=r(5893),t=r(7294),s=r(6042),o=r.n(s),c=function(){return(0,i.jsx)("footer",{className:o().footer,children:(0,i.jsx)("small",{children:"Code snippets licensed under MIT, unless otherwise noted."})})},a=r(1664),l=r(7039),h=r.n(l),x=function(){return(0,i.jsxs)("nav",{className:h().navigation__container,children:[(0,i.jsx)("div",{className:h().navigation,children:(0,i.jsx)(a.default,{href:"/",children:"/var/log/koka"})}),(0,i.jsx)("div",{children:(0,i.jsx)(a.default,{href:"/archives",children:"archive"})})]})},d=r(7983),_=r.n(d),u=function(){return(0,i.jsxs)("div",{className:_().icon__container,children:[(0,i.jsxs)("ul",{className:_().icon,children:[(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{}),(0,i.jsx)("li",{}),(0,i.jsx)("li",{}),(0,i.jsx)("li",{className:_().green})]}),(0,i.jsxs)("ul",{className:_().icon,children:[(0,i.jsx)("li",{}),(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{})]}),(0,i.jsxs)("ul",{className:_().icon,children:[(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{}),(0,i.jsx)("li",{}),(0,i.jsx)("li",{}),(0,i.jsx)("li",{className:_().green})]}),(0,i.jsxs)("ul",{className:_().icon,children:[(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{className:_().green})]}),(0,i.jsxs)("ul",{className:_().icon,children:[(0,i.jsx)("li",{}),(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{className:_().green}),(0,i.jsx)("li",{})]})]})},j=r(1387),m=r.n(j),f=function(e){var n=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)("main",{className:m().container,children:n}),(0,i.jsx)(c,{})]})},p=r(1385),g=function(e){var n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,i=function(){n||(n=!0,e.apply(void 0,arguments),setTimeout((function(){n=!1}),r))};return i},b=r(1299),k=r.n(b),N=function(e){var n=e.title,r=e.depth,t=e.active,s=e.onClick,o="toc__h".concat(r);return(0,i.jsx)("li",{onClick:s,className:"\n        ".concat(t?k().toc__active:"","\n        ").concat(k()[o],"\n        "),children:n})},v=function(){var e=(0,t.useState)({titles:[],nodes:[],minDepth:0}),n=e[0],r=e[1],s=(0,t.useState)(),o=s[0],c=s[1];return(0,t.useEffect)((function(){var e=["h1","h2","h3","h4"].join(","),n=Array.from(document.querySelectorAll(e)),i=n.map((function(e){return{title:e.innerText,depth:Number(e.nodeName[1])}})),t=Math.min.apply(Math,(0,p.Z)(i.map((function(e){return e.depth}))));r({titles:i,nodes:n,minDepth:t})}),[]),(0,t.useEffect)((function(){var e=g((function(){var e=n.titles,r=n.nodes.map((function(e){return function(e){for(var n=0;e instanceof HTMLElement;)n+=e.offsetTop-e.scrollTop+e.clientTop,e=e.offsetParent;return n}(e)})).findIndex((function(e){return e>window.scrollY}));c(-1===r?e.length-1:r-1)}));return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[n]),(0,i.jsx)("nav",{className:k().toc__nav,role:"navigation",children:(0,i.jsx)("ul",{className:k().toc,children:n.titles.map((function(e,r){var t=e.title,s=e.depth;return(0,i.jsx)(N,{title:t,depth:s,active:o===r,onClick:function(e){return function(e,r){e.preventDefault(),n.nodes[r].scrollIntoView({behavior:"smooth"})}(e,r)}},null===t||void 0===t?void 0:t.replace(/ /g,"_"))}))})})}},491:function(e,n,r){"use strict";r.r(n),r.d(n,{Links:function(){return d}});var i=r(5893),t=(r(7294),r(1417)),s=r(7625),o=r(2239),c=r(2781),a=r.n(c),l=function(){return(0,i.jsxs)("section",{itemScope:!0,itemType:"http://microformats.org/profile/hcard",className:a().profile_container,"aria-label":"Profile",children:[(0,i.jsx)("div",{className:a().left,children:(0,i.jsx)(o.JO,{})}),(0,i.jsxs)("div",{itemProp:"fn",className:a().profile__main,children:[(0,i.jsx)("h2",{itemProp:"n",children:"Koka"}),(0,i.jsx)("p",{itemProp:"role",children:"Software Engineer"}),(0,i.jsxs)("p",{children:["Bachelor of Engineering @",(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.ynu.ac.jp/",children:"YNU"})]})]})]})},h=function(){return(0,i.jsxs)("section",{className:a().skills_container,children:[(0,i.jsx)("h1",{children:"Skills"}),(0,i.jsxs)("ul",{className:a().skills,"aria-label":"Skills",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Rust"}),"some personal experiences in Low-Layer Programming like ",(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/koka831/runix",children:"Hobby Kernel"}),",",(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/koka831/marmoset",children:"Interpreter"}),", interested in boot loading sequence and Linux kernel especially memory mapping.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"practices ",(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/koka831/algorithm",children:"algorithms"})," (AtCoder Highest: 1201).",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Ruby"}),"have some experiences with Ruby on Rails, devise token auth and capistrano.",(0,i.jsx)("br",{}),"I usually use Rails for APIs and provide them with token authentication by devise."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"TypeScript"}),"- React",(0,i.jsx)("br",{}),"- Next.js",(0,i.jsx)("br",{}),"- redux-toolkit",(0,i.jsx)("br",{}),"- (",(0,i.jsx)("a",{href:"https://www.prisma.io/",children:"Prisma"}),")"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Python"}),"- NLP, Self-Attention model + Encoder-Decoder",(0,i.jsx)("br",{}),"- time-series data analysis",(0,i.jsx)("br",{}),"- wrote some contents for ",(0,i.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://tracks.run/",children:"track"}),(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Tools"}),"- Arch Linux + i3wm + tmux + zsh + Neovim",(0,i.jsx)("br",{}),"- AWS: ALB + EC2, S3, ECS + ECR, SES, SNS, CloudWatch",(0,i.jsx)("br",{}),"- Swagger",(0,i.jsx)("br",{}),"- Terraform",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Interests"}),"- Oil Painting",(0,i.jsx)("br",{}),"- Tea",(0,i.jsx)("br",{})]})]})]})},x=function(){return(0,i.jsxs)("section",{className:a().projects_container,children:[(0,i.jsx)("h2",{children:"Side Projects"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Automatic-control system for UAV(Unmanned Aerial Vehicle, a.k.a Drone)"}),"- written in C(+ inline asm)",(0,i.jsx)("br",{}),"- in-time object recognition in movies from UAVs",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Air Conditioner Controller using Infrared Sensor with Raspberry Pi Zero"}),"- repaired a broken controller with SIR-34ST3F IR device",(0,i.jsx)("br",{}),"- written in MicroPython",(0,i.jsx)("br",{})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Runix, a Hobby Kernel in Rust"}),"- boots on qemu",(0,i.jsx)("br",{}),"- accepts keyboard input",(0,i.jsx)("br",{}),"- supports 64bits mode and multi-boot",(0,i.jsx)("br",{}),"- recovers from at most double fault",(0,i.jsx)("br",{}),"- ",(0,i.jsx)("a",{href:"https://github.com/koka831/runix",children:"GitHub"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Marmoset, a Toy Interpreter in Rust"}),"- write a tiny interpreter referring ",(0,i.jsx)("a",{href:"https://interpreterbook.com/",children:"Writing An Interpreter In Go"})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("h3",{children:"Blog using Static Props with Next.js"}),"- build a static blog system with Next.js",(0,i.jsx)("br",{}),"- generate edit histories for each posts from ",(0,i.jsx)("code",{className:"language-unknown",children:"git log --follow"}),(0,i.jsx)("br",{})]})]})]})},d=function(){return(0,i.jsxs)("nav",{className:a().links_container,children:[(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/koka831",className:"github",children:(0,i.jsx)(s.G,{icon:t.pUg,size:"2x",color:"#504945"})}),(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/k_0ka",children:(0,i.jsx)(s.G,{icon:t.sd1,size:"2x",color:"#458588"})})]})},_=function(){return(0,i.jsxs)("section",{itemScope:!0,className:a().contact_container,children:[(0,i.jsx)("h2",{children:"Contact"}),(0,i.jsxs)("ul",{className:a().contact,"aria-label":"Contact",children:[(0,i.jsx)("li",{itemProp:"email",children:"mail: koka.code+github.io[at]gmail.com"}),(0,i.jsx)("li",{children:"GPG: FBCA 28DB 3AAD 69A9 C3D2  DB16 2614 F77B B077 D125"}),(0,i.jsxs)("li",{children:["Twitter: ",(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/k_0ka",children:"k_0ka"})]}),(0,i.jsxs)("li",{children:["GitHub: ",(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/koka831",children:"koka831"})]}),(0,i.jsxs)("li",{children:["Qiita: ",(0,i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://qiita.com/koka",className:"qiita",children:"koka"})]})]})]})};n.default=function(){return(0,i.jsx)(o.Ar,{children:(0,i.jsxs)("div",{className:a().container,children:[(0,i.jsx)(l,{}),(0,i.jsx)(h,{}),(0,i.jsx)(x,{}),(0,i.jsx)(_,{})]})})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(491)}])},6042:function(e){e.exports={footer:"Footer_footer__cAlbN"}},7039:function(e){e.exports={navigation__container:"Header_navigation__container__3D5xg",navigation:"Header_navigation__16lxy",cursor:"Header_cursor__2dspt"}},7983:function(e){e.exports={icon__container:"Icon_icon__container__zXY7M",icon:"Icon_icon__2P9f5",green:"Icon_green__DJdcM"}},1387:function(e){e.exports={container:"Layout_container__QVNsN"}},1299:function(e){e.exports={toc__nav:"Toc_toc__nav__2o5GC",toc:"Toc_toc__3i1gg",toc__active:"Toc_toc__active__3Lha6",toc__h1:"Toc_toc__h1__x9SsE",toc__h2:"Toc_toc__h2__1gntT",toc__h3:"Toc_toc__h3__3-rtF"}},2781:function(e){e.exports={container:"index_container__3kY3K",flex:"index_flex__2XB_6",links_container:"index_links_container__2NgyM",profile_container:"index_profile_container__1aFKL",skills_container:"index_skills_container__J9yt7",projects_container:"index_projects_container__240HP",contact_container:"index_contact_container__30wjr",profile__main:"index_profile__main__3RMRM",contact:"index_contact__9gE-t",skills:"index_skills__3mi-1"}}},function(e){e.O(0,[774,112,351,167],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);