(this["webpackJsonptiffblot.github.io"]=this["webpackJsonptiffblot.github.io"]||[]).push([[0],{29:function(e,t,a){e.exports=a(85)},30:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);a(30);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),i=(a(35),a(10)),c=a(2),s=a(9),m=(a(36),a(87)),u=a(88),f=a(89),d=a(5),p=a.n(d),E=function(e){var t=e.href,a=void 0===t?"":t,n=e.to,l=void 0===n?"":n,o=e.children;return a?r.a.createElement("li",{className:"Header-link"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},o)):r.a.createElement("li",{className:"Header-link"},r.a.createElement(i.b,{to:l},o))},h=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];return r.a.createElement(p.a,{className:"App-page Header-container"},r.a.createElement(i.b,{className:"Header-logo",to:"/"},r.a.createElement(p.a,{is:"img",alt:"Tiff",src:"tiff_logo_2022.png"})),r.a.createElement(m.a,{className:"Header-hamburger",onClick:function(){return l(!a)}}),r.a.createElement(p.a,{className:"Header-linkContainer ".concat(a&&"show"),is:"ul",onClick:function(){return l(!1)}},r.a.createElement("li",{className:"Header-link Header-close"},r.a.createElement(u.a,null)),r.a.createElement(E,{to:"/"},"portfolio"),r.a.createElement(E,{to:"/clientWork"},"client work"),r.a.createElement(E,{to:"/events"},"events"),r.a.createElement(E,{to:"/about"},"about"),r.a.createElement(E,{href:"https://tiffblot.bigcartel.com/"},"shop"),r.a.createElement(E,{href:"https://www.instagram.com/tiffblot/"},r.a.createElement(f.a,null))))},g=function(){return r.a.createElement(p.a,{className:"App-page"},r.a.createElement(p.a,{is:"h2",fontWeight:500,marginBottom:"0"},"hello!"),r.a.createElement(p.a,{is:"p",maxWidth:500},"I'm"," ",r.a.createElement(p.a,{is:"b",color:"var(--text-secondary)"},"Tiff"),", an Asian-American watercolor artist based in Georgia, USA. I tell stories about life with nostalgic illustrations, from food to people to Pokemon fanart. Look out for new artwork, sales, and in-person vending announcement on Instagram"," ",r.a.createElement("a",{href:"https://www.instagram.com/tiffblot/",target:"_blank",rel:"noopener noreferrer"},"@tiffblot"),"!"),r.a.createElement("p",null,"You can find my art in stores at:"),r.a.createElement("p",null,"Homegrown Decatur",r.a.createElement("br",null),"412 Church St, Decatur, GA 30030"),r.a.createElement("p",null,"July Moon Bakery & Cafe",r.a.createElement("br",null),"230 S Main St Suite Z, Alpharetta, GA 30009"),r.a.createElement("p",null,"Mischief Oakland",r.a.createElement("br",null),"3908 MacArthur Blvd, Oakland, CA 94619"),r.a.createElement("p",null,"Email:"," ",r.a.createElement("a",{href:"mailto:teashopbytiff@gmail.com"},"teashopbytiff@gmail.com")))},v=(a(83),function(e){var t=e.filter,a=e.download,l=void 0!==a&&a,o=function(){var e=Object(n.useState)(window.innerWidth),t=Object(s.a)(e,2),a=t[0],r=t[1];function l(){r(window.innerWidth)}return Object(n.useEffect)((function(){return window.addEventListener("resize",l),window.removeEventListener("resize",l)}),[]),a}(),i=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://api.imgur.com/3/album/Y4cGbYY",{mode:"cors",headers:{Authorization:"Client-ID fad804cc7c9498e"}}).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(n.useMemo)((function(){var e,t;return a?null===a||void 0===a||null===(e=a.data)||void 0===e||null===(t=e.images)||void 0===t?void 0:t.map((function(e){var t,a;return{src:e.link,description:e.description&&e.description.replace(/(?:^|\W)#(\w+)(?!\w)/g,""),tags:(null===(t=e.description)||void 0===t||null===(a=t.match(/(?:^|\W)#(\w+)(?!\w)/g))||void 0===a?void 0:a.map((function(e){return e.slice(e.indexOf("#")+1)})))||[]}})):[]}),[a])}(),c=(null===i||void 0===i?void 0:i.filter((function(e){return e.tags.indexOf(t||"")>-1})))||[],m=Object(n.useMemo)((function(){for(var e=o<600?1:o<900?2:3,t=[],a=0;a<e;a++){for(var n=[],r=a;r<c.length;r+=e)n.push(c[r]);t.push(n)}return t}),[c,o]);return r.a.createElement(p.a,{className:"App-page Gallery-container"},m.map((function(e,t){return r.a.createElement("div",{key:t},e.map((function(e,t){return r.a.createElement("div",{key:t,className:"Gallery-single"},r.a.createElement("img",{className:"Gallery-image",src:e.src,alt:e.description}),r.a.createElement("div",{className:"Gallery-description"},e.description,l&&r.a.createElement(p.a,{is:"a",marginLeft:".4em",href:e.src,download:e.description?e.description.split(" ")[0]+".png":"tiffblot.png",title:e.description},"[download]")))})))})))});var b=function(){return r.a.createElement(v,{filter:"clientwork"})},w=function(){return r.a.createElement(v,{filter:"events"})},k=function(){return r.a.createElement(v,{filter:"watercolor"})};var y=function(){return r.a.createElement(i.a,null,r.a.createElement(h,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/about"},r.a.createElement(g,null)),r.a.createElement(c.a,{path:"/clientWork"},r.a.createElement(b,null)),r.a.createElement(c.a,{path:"/events"},r.a.createElement(w,null)),r.a.createElement(c.a,{path:"/"},r.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.c0b08747.chunk.js.map