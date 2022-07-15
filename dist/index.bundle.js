(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: #f7f7f7;\n}\n\n.container {\n  width: 50%;\n  margin: auto;\n  margin-top: 10%;\n  background-color: #fff;\n  box-shadow: 1px 5px 18px -1px rgb(34 60 80 / 19%);\n}\n\n.header {\n  display: flex;\n  padding-top: 5%;\n}\n\n.fa {\n  margin-left: auto;\n  margin-right: 20px;\n  color: #787878;\n}\n\n.refresh {\n  font-size: 24px;\n}\n\nh1 {\n  text-align: center;\n  margin-left: 20px;\n  color: #787878;\n  font-family: monospace;\n  font-size: 1.7rem;\n  font-weight: 500;\n}\n\n.add {\n  margin-top: 30px;\n  padding: 10px 0 10px 20px;\n  border: none;\n  font-style: italic;\n  font-size: 1.2rem;\n  width: 70%;\n}\n\n.item {\n  display: flex;\n  gap: 30px;\n  border-bottom: 1px solid #787878;\n  padding: 15px;\n}\n\n.itemP {\n  font-size: 1.3em;\n}\n\n.material-icons {\n  font-size: 16px;\n  margin-left: auto;\n}\n\n.clear {\n  background: #ddd;\n  border: none;\n  text-align: center;\n  width: 100%;\n  padding: 20px;\n  color: #787878;\n  cursor: pointer;\n}\n\n.strike {\n  color: rgb(113, 109, 109);\n  text-decoration: line-through;\n}\n\n.clicked-on {\n  background-color: #dfdebc;\n}\n\n.inactive-dots {\n  display: none;\n}\n\n.dots {\n  cursor: pointer;\n}\n\n.trash {\n  display: none;\n  cursor: pointer;\n}\n\n.active-trash {\n  display: block;\n}\n\n.new-input {\n  background-color: #dfdebc;\n}\n",""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=function(e){const t=document.createElement("input");t.type="text",t.classList.add("new-input"),t.value=e.textContent,e.replaceWith(t);const n=localStorage.getItem("items"),o=JSON.parse(n);t.addEventListener("keypress",(e=>{const n=t.parentElement.id;if("Enter"===e.key){const e=document.createElement("div");e.textContent=t.value,t.replaceWith(e);const r=document.querySelectorAll(".new-item");for(let e=0;e<r.length;e+=1)r[e].id===n&&(o[e].description=t.value,localStorage.setItem("items",JSON.stringify(o)))}}))};var t=n(379),o=n.n(t),r=n(795),i=n.n(r),a=n(569),c=n.n(a),s=n(565),l=n.n(s),d=n(216),p=n.n(d),u=n(589),m=n.n(u),f=n(426),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;let h=[]||0;const v=document.querySelector(".mainList"),x=document.querySelector(".clear");function y(){const e=localStorage.getItem("items"),t=JSON.parse(e);document.querySelectorAll(".eachItem").forEach(((e,n)=>{e.classList.contains("strike")?t[n].completed=!0:t[n].completed=!1,n=1,localStorage.setItem("items",JSON.stringify(t))}))}function S(e){v.removeChild(e);let t=1;const n=localStorage.getItem("items");let o=JSON.parse(n);h=JSON.parse(localStorage.getItem("items")),h.splice(e.id-1,1),o=h,o.map((e=>(e.index=t,t+=1,null))),localStorage.setItem("items",JSON.stringify(o))}const b=document.querySelector(".form"),E=document.querySelector(".add");b.addEventListener("submit",(()=>{""!==E.value&&(function(t){const n=document.createElement("div");n.classList.add("item"),n.innerHTML+=`\n    <input class="checkBox" type="checkBox">\n    <p class="itemP">${t}</p>\n    <i class="material-icons dots">&#xe5d4;</i>\n    <i class="fa trash">&#xf1f8;</i>\n  `,v.appendChild(n);const o=document.querySelectorAll(".checkBox");o.forEach((e=>{e.addEventListener("click",(()=>{e.nextElementSibling.classList.toggle("strike"),e.parentNode.classList.toggle("clicked-on"),e.parentNode.childNodes[5].classList.toggle("inactive-dots"),e.parentNode.childNodes[7].classList.toggle("active-trash"),y()}))}));const r=new class{constructor(e,t,n){this.description=e,this.completed=t,this.index=n}}(t,!1,o.length);h.push(r);const i=JSON.stringify(h);localStorage.setItem("items",i),document.querySelectorAll(".dots").forEach((t=>{t.addEventListener("click",(()=>{t.parentNode.classList.add("clicked-on"),e(t.previousElementSibling)}))})),document.querySelectorAll(".trash").forEach((e=>{e.addEventListener("click",(()=>{S(e.parentNode)}))}))}(E.value),E.value=null)})),window.addEventListener("load",(function(){const t=localStorage.getItem("items");JSON.parse(t).map((t=>{h.push(t);const n=document.createElement("div");n.classList.add("item");const o=t.index;return n.setAttribute("id",o),n.innerHTML=`\n  <input type="checkbox" class="checkBox" id="${t.index}">\n  <p class="eachItem" class="itemP" id="span-${t.index}">${t.description}</p>\n  <i id="dots-${t.index}" class="dots material-icons">&#xe5d4;</i>\n  <i id="trash-${t.index}" class="fa trash">&#xf1f8;</i>\n  `,v.appendChild(n),document.querySelectorAll(".dots").forEach((t=>{t.addEventListener("click",(()=>{t.parentNode.classList.add("clicked-on"),e(t.previousElementSibling)}))})),null})),document.querySelectorAll(".checkBox").forEach((e=>{e.addEventListener("click",(()=>{e.nextElementSibling.classList.toggle("strike"),e.parentNode.classList.toggle("clicked-on"),e.parentNode.childNodes[5].classList.toggle("inactive-dots"),e.parentNode.childNodes[7].classList.toggle("active-trash"),y()}))})),document.querySelectorAll(".trash").forEach((e=>{e.addEventListener("click",(()=>{S(e.parentNode)}))})),x.addEventListener("click",(()=>{console.log("clicked");const e=localStorage.getItem("items"),t=JSON.parse(e).filter((e=>!1===e.completed));t.forEach(((e,t)=>{e.index=t+1})),localStorage.setItem("items",JSON.stringify(t)),window.location.reload()})),localStorage.setItem("items",JSON.stringify(h))}))})()})();