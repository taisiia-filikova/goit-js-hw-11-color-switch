(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,n,o){},QfWi:function(t,n,o){"use strict";o.r(n);o("L1EO");var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],a=null,r=!1,d={body:document.querySelector("body"),startBtn:document.querySelector('button[data-action="start"]'),stopBtn:document.querySelector('button[data-action="stop"]')};d.startBtn.addEventListener("click",(function(){if(r)return;a=setInterval(s,1e3),r=!0,d.startBtn.disabled=!0,d.stopBtn.disabled=!1})),d.stopBtn.addEventListener("click",(function(){clearTimeout(a),r=!1,d.startBtn.disabled=!1,d.stopBtn.disabled=!0}));function s(){var t,n;d.body.style.backgroundColor=e[(t=0,n=e.length-1,Math.floor(Math.random()*(n-t+1)+t))]}}},[["QfWi",1]]]);
//# sourceMappingURL=main.19a874e5568f31dd6d5c.js.map