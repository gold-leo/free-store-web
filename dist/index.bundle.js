(()=>{"use strict";var n,e,t,r={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'html {\n  --bright-brown: rgb(240, 234, 210);\n  --light-green: rgb(221, 229, 182);\n  --dark-green: rgb(77, 87, 54);\n  --light-brown: rgb(169, 132, 103);\n  --dark-brown: rgb(108, 88, 76);\n  --outline-brown: rgb(61, 48, 48);\n}\nbody {\n  margin: 0;\n  background: var(--light-brown);\n  background-size: 100px;\n}\n.banner {\n  padding-left: 20px;\n  height: 1.5em;\n  margin: .75em 1em;\n  background: var(--dark-brown);\n  border-radius: 1em;\n  color: var(--bright-brown);\n  align-content: center;\n  border: 1.5px solid var(--outline-brown);\n}\nspan.banner {\n  padding: 0;\n  font-size: 13px;\n  font-family: "Lucida Console", "Courier New", monospace;\n  font-style: italic;\n  vertical-align: bottom;\n  display: table-cell;\n  border: none;\n}\n.row{\n  display: table;\n}\nul {\n  margin: 0 auto 20px auto;\n  font-size: 0;\n  padding: 5px 0px;\n  background-color: var(--dark-brown);\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 10px;\n}\nli {\n  display: inline-block;\n  box-sizing: border-box;\n  vertical-align: top;\n  margin: 5px 0px 5px 10px;\n  width: 130px;\n  height: 150px;\n  border-radius: 5px;\n  background-color: var(--light-brown);\n  border: 1.5px solid var(--outline-brown);\n  box-shadow: 1px 1px 3px var(--outline-brown);\n}\n.item-title {\n  width: 100%;\n  margin: 2px 5px 0px 5px;\n  padding: 4px 10px 2px 10px;\n  font-size: 11px;\n  font-family: \'Courier New\', Courier, monospace;\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 7px;\n  /* box-shadow: .1px .1px 2px var(--outline-brown); */\n  color: var(--bright-brown);\n  background-color: var(--outline-brown);\n}\n.item-image {\n  background-image: none;\n  cursor: pointer;\n  background-size: cover;\n  box-sizing: border-box;\n  margin: 0px 10px 0px 10px;\n  width: 107px;\n  height: 80px;\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 10px;\n  /* box-shadow: .1px .1px 2px var(--outline-brown); */\n  background-color: var(--dark-brown);\n  font-family: "Lucida Console", "Courier New", monospace;\n  font-style: italic;\n  color: var(--bright-brown);\n  font-size: 8px;\n  padding: 12px 24px;\n  box-shadow: inset 1px 1px 3px var(--outline-brown);\n}\n.item-div {\n  display: flex;\n  margin: 4px 5px;\n  justify-content: space-evenly;\n  align-items: center;\n  gap: 4px;\n}\n.item-button {\n  cursor: pointer;\n  background-size: cover;\n  box-sizing: border-box;\n  width: 100%;\n  height: 23px;\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 20px;\n  box-shadow: .75px .75px 1px var(--outline-brown);\n  background-color: var(--light-brown);\n}\n.popup {\n  display: none;\n  position: fixed;\n  left: 50%;\n  width: 300px;\n  height: 375px;\n  transform: translate(-50%, 20%);\n  margin-inline: auto;\n  z-index: 9;\n  border: 5px solid var(--outline-brown);\n  border-radius: 10px;\n  box-shadow: .1px .1px 2px var(--outline-brown);\n  background-color: rgb(86, 67, 67);\n  font-size: 12px; /* reset the text size */\n}\n.popup-title {\n  width: 100%;\n  margin: 2px 5px 0px 5px;\n  padding: 4px 10px 2px 10px;\n  font-size: 20px;\n  font-family: \'Courier New\', Courier, monospace;\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 7px;\n  /* box-shadow: .1px .1px 2px var(--outline-brown); */\n  color: var(--bright-brown);\n  background-color: var(--outline-brown);\n}\n.popup-exit {\n  cursor: pointer;\n  margin-top: 2px;\n  margin-right: 5px;\n  padding: 2px 15px 3px 13px;\n  font-size: 20px;\n  font-family: \'Courier New\', Courier, monospace;\n  border: 1.5px solid var(--outline-brown);\n  border-radius: 7px;\n  /* box-shadow: .1px .1px 2px var(--outline-brown); */\n  color: var(--bright-brown);\n  background-color: var(--outline-brown);\n}\n\n@media screen and (max-width: 289px) { ul { width: 150px; } }\n@media screen and (min-width: 290px) and (max-width: 429px) { ul { width: 290px; } }\n@media screen and (min-width: 430px) and (max-width: 590px) { ul { width: 430px; } }\n@media screen and (min-width: 590px) and (max-width: 730px) { ul { width: 570px; } }\n@media screen and (min-width: 730px) and (max-width: 870px) { ul { width: 710px; } }\n@media screen and (min-width: 870px) and (max-width: 1010px) { ul { width: 850px; } }\n@media screen and (min-width: 1010px) and (max-width: 1150px) { ul { width: 990px; } }\n@media screen and (min-width: 1150px) { ul { width: 1130px; } }',""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],u=r.base?d[0]+r.base:d[0],p=i[u]||0,l="".concat(u," ").concat(p);i[u]=p+1;var c=t(l),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==c)e[c].references++,e[c].updater(h);else{var x=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:x,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=r(n,o),u=0;u<i.length;u++){var p=t(i[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},o={};function i(n){var e=o[n];if(void 0!==e)return e.exports;var t=o[n]={id:n,exports:{}};return r[n](t,t.exports,i),t.exports}i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),i.nc=void 0,function(n){n.String="string",n.Text="text",n.RichText="richText",n.Number="number",n.Link="link",n.Money="money",n.Date="date",n.Timestamp="timestamp",n.Email="email",n.Boolean="boolean",n.Password="password",n.Choice="choice",n.Location="location",n.File="file",n.Image="image"}(n||(n={})),function(n){n.Equal="_eq",n.NotEqual="_neq",n.GreaterThan="_gt",n.GreaterThanOrEqual="_gte",n.LessThan="_lt",n.LessThanOrEqual="_lte",n.Like="_like",n.In="_in"}(e||(e={})),function(n){n.Equal="=",n.NotEqual="!=",n.GreaterThan=">",n.GreaterThanOrEqual=">=",n.LessThan="<",n.LessThanOrEqual="<=",n.Like="like",n.In="in"}(t||(t={}));const a={[t.Equal]:e.Equal,[t.NotEqual]:e.NotEqual,[t.GreaterThan]:e.GreaterThan,[t.GreaterThanOrEqual]:e.GreaterThanOrEqual,[t.LessThan]:e.LessThan,[t.LessThanOrEqual]:e.LessThanOrEqual,[t.Like]:e.Like,[t.In]:e.In};var s=function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function a(n){try{d(r.next(n))}catch(n){i(n)}}function s(n){try{d(r.throw(n))}catch(n){i(n)}}function d(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,s)}d((r=r.apply(n,e||[])).next())}))};var d=i(72),u=i.n(d),p=i(825),l=i.n(p),c=i(659),h=i.n(c),x=i(56),b=i.n(x),m=i(540),f=i.n(m),g=i(113),v=i.n(g),w=i(208),y={};y.styleTagTransform=v(),y.setAttributes=b(),y.insert=h().bind(null,"head"),y.domAPI=l(),y.insertStyleElement=f(),u()(w.A,y),w.A&&w.A.locals&&w.A.locals,window.showPopup=()=>{document.getElementById("popup").style.display="block"},window.hidePopup=()=>{document.getElementById("popup").style.display="none"},document.getElementById("item-list"),new class{constructor(n="http://localhost:1111"){this.isSingleEntity=!1,this.headers={"Content-Type":"application/json"},this.queryParams={},this.baseUrl=n+"/api",this.slug=""}from(n){return this.slug=n,this.isSingleEntity=!1,this.queryParams={},this}single(n){return this.slug=n,this.isSingleEntity=!0,this.queryParams={},{get:()=>s(this,void 0,void 0,(function*(){return this.fetch({path:`/singles/${this.slug}`})})),update:n=>s(this,void 0,void 0,(function*(){return this.fetch({path:`/singles/${this.slug}`,method:"PUT",body:n})}))}}find(n){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}`,queryParams:Object.assign(Object.assign({},this.queryParams),n)})}))}findOneById(n){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}/${n}`})}))}create(n){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}`,method:"POST",body:n})}))}update(n,e){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}/${n}`,method:"PUT",body:e})}))}patch(n,e){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}/${n}`,method:"PATCH",body:e})}))}delete(n){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/collections/${this.slug}/${n}`,method:"DELETE"}).then((()=>n))}))}where(n){const e=Object.values(t).reverse().find((e=>n.includes(` ${e} `)));if(!e)throw new Error(`Invalid where clause. Where clause must include one of the following operators: ${Object.values(t).join(", ")}.`);const[r,o]=n.split(e).map((n=>n.trim())),i=a[e];return this.queryParams[r+i]=o,this}andWhere(n){return this.where(n)}orderBy(n,e){return this.queryParams.orderBy=n,this.queryParams.order=(null==e?void 0:e.desc)?"DESC":"ASC",this}with(n){return this.queryParams.relations=n.join(","),this}login(n,e,t){return s(this,void 0,void 0,(function*(){const r=yield this.fetch({path:`/auth/${n}/login`,method:"POST",body:{email:e,password:t}});return this.headers.Authorization=`Bearer ${r.token}`,!0}))}logout(){delete this.headers.Authorization}signup(n,e,t){return s(this,void 0,void 0,(function*(){const r=yield this.fetch({path:`/auth/${n}/signup`,method:"POST",body:{email:e,password:t}});return this.headers.Authorization=`Bearer ${r.token}`,!0}))}me(){return s(this,void 0,void 0,(function*(){return this.fetch({path:`/auth/${this.slug}/me`})}))}fetch(n){return s(this,arguments,void 0,(function*({path:n,method:e,body:t,queryParams:r}){const o=new URL(this.baseUrl+n);return Object.entries(r||[]).forEach((([n,e])=>{null!=e&&o.searchParams.append(n,e.toString())})),fetch(o.toString(),{headers:this.headers,method:e||"GET",body:t?JSON.stringify(t):void 0}).then((n=>n.json()))}))}upload(n,e){return s(this,void 0,void 0,(function*(){const t=new FormData;return t.append("file",e),t.append("entity",this.slug),t.append("property",n),yield fetch(`${this.baseUrl}/upload/file`,{method:"POST",body:t,headers:{Authorization:this.headers.Authorization}}).catch((n=>(console.error(n),{}))),!0}))}uploadImage(n,e){return s(this,void 0,void 0,(function*(){const t=new FormData;return t.append("image",e),t.append("entity",this.slug),t.append("property",n),fetch(`${this.baseUrl}/upload/image`,{method:"POST",body:t,headers:{Authorization:this.headers.Authorization}}).then((n=>n.json())).catch((n=>(console.error(n),{})))}))}imageUrl(n,e){return`${this.baseUrl.replace(/\/api$/,"")}/storage/${n[e]}`}}})();