function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function e(e){return function(t){if(Array.isArray(t))return t}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=document.querySelector("thead"),r=document.querySelector("tbody"),o=n.querySelectorAll("th"),i=o[0],c=o[1],l=o[2],a=o[3],u=r.querySelectorAll("tr");i.addEventListener("click",function(){var t,n;(t=e(u).slice(0)).sort(function(t,e){var n=t.firstElementChild.textContent,r=e.firstElementChild.textContent;return n.localeCompare(r)}),n=t[0].parentNode,t.forEach(function(t){n.appendChild(t)})}),c.addEventListener("click",function(){var t,n;(t=e(u).slice(0)).sort(function(t,e){var n=t.children[1].textContent,r=e.children[1].textContent;return n.localeCompare(r)}),n=t[0].parentNode,t.forEach(function(t){n.appendChild(t)})}),l.addEventListener("click",function(){var t,n;(t=e(u).slice(0)).sort(function(t,e){return Number(t.children[2].textContent)-Number(e.children[2].textContent)}),n=t[0].parentNode,t.forEach(function(t){n.appendChild(t)})}),a.addEventListener("click",function(){var t,n;(t=e(u).slice(0)).sort(function(t,e){return Number(t.lastElementChild.textContent.replace(/[^0-9.-]+/g,""))-Number(e.lastElementChild.textContent.replace(/[^0-9.-]+/g,""))}),n=t[0].parentNode,t.forEach(function(t){n.appendChild(t)})});
//# sourceMappingURL=index.c24a3d05.js.map
