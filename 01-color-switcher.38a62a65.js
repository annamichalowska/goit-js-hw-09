!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;e.disabled=!0,t.addEventListener("click",(function(){n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(n),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.38a62a65.js.map