if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>r(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue_2_router"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/REPO_NAME/css/app.f5a14c43.css",revision:null},{url:"/REPO_NAME/index.html",revision:"cb9e0117b2ae77fd9685838a449452d6"},{url:"/REPO_NAME/js/Page Not Found.9c337ba5.js",revision:null},{url:"/REPO_NAME/js/about.54d369fe.js",revision:null},{url:"/REPO_NAME/js/about1.e74666de.js",revision:null},{url:"/REPO_NAME/js/app.cdd23c9a.js",revision:null},{url:"/REPO_NAME/js/chunk-vendors.d75ecb4f.js",revision:null},{url:"/REPO_NAME/manifest.json",revision:"a4bce410442ada1202e2aa302541368a"},{url:"/REPO_NAME/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map