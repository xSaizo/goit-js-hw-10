let t=null,e=!1;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}const a=document.querySelector("[data-start]");a.addEventListener("click",(function(){e||(e=!0,a.disabled=!0,t=setInterval(n,1e3))}));document.querySelector("[data-stop]").addEventListener("click",(function(){e&&(e=!1,a.disabled=!1,clearInterval(t),t=null)}));
//# sourceMappingURL=01-color-switcher.c9b8cedb.js.map