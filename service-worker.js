if(!self.define){let e,r={};const s=(s,o)=>(s=new URL(s+".js",o).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(o,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(r[i])return;let n={};const c=e=>s(e,i),d={module:{uri:i},exports:n,require:c};r[i]=Promise.all(o.map((e=>d[e]||c(e)))).then((e=>(t(...e),n)))}}define(["./workbox-dbf1b8dc"],(function(e){"use strict";e.setCacheNameDetails({prefix:"budget_tracker"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Project-PSM/404.html",revision:"a4e2271d19eb1f6f93a15e1b7a4e74dd"},{url:"/Project-PSM/css/app.0576e837.css",revision:null},{url:"/Project-PSM/firebase-messaging-sw.js",revision:"83999310eb6580d027407e2ef0264bf7"},{url:"/Project-PSM/index.html",revision:"e9c02bfa68092d72d169e2d5d2a1edba"},{url:"/Project-PSM/js/app.65cabacf.js",revision:null},{url:"/Project-PSM/js/chunk-vendors.9286a5a5.js",revision:null},{url:"/Project-PSM/manifest.json",revision:"6d116db9d870636711cd3ea49443f9ba"},{url:"/Project-PSM/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
