if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>r(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue_2_router"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.f5a14c43.css",revision:null},{url:"/index.html",revision:"46b695061fbc8e87ac3fa14a0fbc2f5d"},{url:"/js/Page Not Found.9876e575.js",revision:null},{url:"/js/about.746a8aab.js",revision:null},{url:"/js/about1.9e9ad6e5.js",revision:null},{url:"/js/app.67603ea6.js",revision:null},{url:"/js/chunk-vendors.0f56ccd9.js",revision:null},{url:"/manifest.json",revision:"a4bce410442ada1202e2aa302541368a"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
