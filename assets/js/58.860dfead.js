(window.webpackJsonp=window.webpackJsonp||[]).push([[58,308],{735:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return d})),n.d(e,"c",(function(){return p})),n.d(e,"g",(function(){return f}));n(414);const r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function l(t){return decodeURI(t).replace(r,"").replace(i,"")}function o(t){return a.test(t)}function u(t){if(o(t))return t;const e=t.match(r),n=e?e[0]:"",i=l(t);return s.test(i)?t:i+".html"+n}function c(t,e){const n=t.hash,i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return l(t.path)===l(e)}function h(t,e,n){if(o(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=l(e);for(let e=0;e<t.length;e++)if(l(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:u(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,r){const{pages:i,themeConfig:s}=n,a=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=p(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const l=a.sidebar||s.sidebar;if(l){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,l);return n?n.map(e=>function t(e,n,r,i=1){if("string"==typeof e)return h(n,e,r);if(Array.isArray(e))return Object.assign(h(n,e[0],r),{title:e[1]});{i>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(h(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(e,i,t)):[]}return[]}function p(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function f(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},736:function(t,e,n){},738:function(t,e,n){},744:function(t,e,n){"use strict";n(736)},747:function(t,e,n){"use strict";n.r(e);var r={name:"ThemeSwitch",data:()=>({isDarkMode:!1}),methods:{getSchemeStorage(t){if("undefined"==typeof localStorage)return;let e=localStorage.getItem(t);return"light"===e||"dark"!==e},setSchemeStorage:t=>!0===t?"dark":"light",switchScheme(){var t;if(this.isDarkMode=!this.isDarkMode,"undefined"==typeof localStorage)return;localStorage.setItem("antdocs-color-scheme",this.setSchemeStorage(this.isDarkMode));const e=null===(t=window)||void 0===t?void 0:t.document.querySelector("html");null==e||e.classList.toggle("dark",this.isDarkMode)}},mounted(){var t;this.isDarkMode=!this.getSchemeStorage("antdocs-color-scheme");const e=null===(t=window)||void 0===t?void 0:t.document.querySelector("html");null==e||e.classList.toggle("dark",this.isDarkMode)}},i=(n(744),n(65)),s=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-switch",on:{click:function(e){return t.switchScheme()}}},[e("a-tooltip",{attrs:{placement:"bottom"}},[e("template",{slot:"title"},[e("span",[t._v(t._s(t.isDarkMode?"切换亮色模式":"切换暗黑模式"))])]),t._v(" "),t.isDarkMode?e("a",{staticStyle:{"margin-top":"2px"}},[e("i",{staticClass:"anticon"},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),t._v(" "),e("path",{attrs:{d:"M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-linejoin":"round"}})])])]):e("a",{staticStyle:{"margin-top":"2px"}},[e("i",{staticClass:"anticon"},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"48",height:"48",fill:"white","fill-opacity":"0.01"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 3V6.15V3Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M24 3V6.15",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.8492 9.15076L36.6219 11.3781L38.8492 9.15076Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M38.8492 9.15076L36.6219 11.3781",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M45 24H41.85H45Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M45 24H41.85",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.8492 38.8492L36.6219 36.6219L38.8492 38.8492Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M38.8492 38.8492L36.6219 36.6219",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 45V41.85V45Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M24 45V41.85",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.15076 38.8492L11.3781 36.6219L9.15076 38.8492Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M9.15076 38.8492L11.3781 36.6219",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 24H6.15H3Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M3 24H6.15",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M9.15076 9.15076L11.3781 11.3781L9.15076 9.15076Z",fill:"#333"}}),t._v(" "),e("path",{attrs:{d:"M9.15076 9.15076L11.3781 11.3781",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z",fill:"none",stroke:"#333","stroke-width":"4","stroke-linejoin":"round"}})])])])],2)],1)}),[],!1,null,null,null);e.default=s.exports},750:function(t,e,n){"use strict";n(738)},762:function(t,e,n){"use strict";n.r(e);var r=n(735),i={name:"NavLinks",components:{ThemeSwitch:n(747).default},data(){return{currentStyle:this.$store.state.global.navStyle,routesPath:""}},created(){this.routesPath=JSON.stringify(this.$themeConfig.locales?this.$themeConfig.locales[this.$localePath].nav:this.$themeConfig.nav)},methods:{isBlankTarget:t=>"_blank"===t,isExternal:t=>/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(t),isInternal(t,e){return!this.isExternal(t)&&!this.isBlankTarget(e)},target(t,e){return t||(this.isExternal(e)?"_blank":"")},link(t){t=void 0===t?"":t;let e=Object(r.b)(t);return e=5===e.length&&".html"===e?this.geneKey():e,e},geneKey:()=>Math.random().toString(36).substr(2,10)+(new Date).getTime(),currentPath(t){const e=this.routesPath;if(-1!=e.indexOf(t))return t;if(".html"===t.slice(-5)){let n=t.replace(".html","");if(-1!=e.indexOf(n))return t;return t.replace(/[^\/]+$/,"")}return t.replace(/[^\/]+$/,"")},activePage(t){if(-1==this.routesPath.indexOf("activeMatch"))return this.currentPath(t);for(let e=0;e<this.userLinks.length;e++)if(void 0!==this.userLinks[e].activeMatch)return new RegExp(this.userLinks[e].activeMatch).test(t)?this.userLinks[e].link:this.currentPath(t)}},computed:{currentPage(){return[this.activePage(this.$page.path)]},userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,r=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const s=t[i],a=r[i]&&r[i].label||s.lang;let l;return s.lang===this.$lang?l=e:(l=e.replace(this.$localeConfig.path,i),n.some(t=>t.path===l)||(l=i)),{text:a,link:l}})};return[...this.userNav,i]}return this.userNav},userLinks(){const t=(this.nav||[]).map(t=>Object.assign(Object(r.g)(t),{items:(t.items||[]).map(r.g)}));return this.routesPath=JSON.stringify(t),t},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["github","gitlab"];for(let n=0;n<e.length;n++){const r=e[n];if(new RegExp(r,"i").test(t))return r}return"global"},isDarkMode(){return this.$themeConfig.isDarkMode||!1}}},s=(n(750),n(65)),a=Object(s.a)(i,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[e("a-menu",{attrs:{mode:t.currentStyle,id:"nav",selectable:!1,forceSubMenuRender:!0},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}},[t._l(t.userLinks,(function(n){return["links"===n.type?e("a-sub-menu",{key:t.link(n.link)},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("\n          "+t._s(n.text)+"\n        ")]),t._v(" "),t._l(n.items,(function(n,r){return["links"===n.type?e("a-menu-item-group",{key:t.link(n.link)||r,attrs:{title:n.text}},t._l(n.items,(function(n){return e("a-menu-item",{key:t.link(n.link)},[t.isInternal(n.link,n.target)?e("RouterLink",{attrs:{to:t.link(n.link)}},[t._v("\n                "+t._s(n.text)+"\n              ")]):e("a",{attrs:{href:n.link,target:t.target(n.target,n.link),rel:"noopener noreferrer"}},[t._v("\n                "+t._s(n.text)+"\n                "),t.isInternal(n.link,n.target)?t._e():e("a-icon",{attrs:{type:"link"}})],1)],1)})),1):e("a-menu-item",{key:t.link(n.link)},[t.isInternal(n.link,n.target)?e("RouterLink",{attrs:{to:t.link(n.link)}},[t._v("\n              "+t._s(n.text)+"\n            ")]):e("a",{attrs:{href:n.link,target:t.target(n.target,n.link),rel:"noopener noreferrer"}},[t._v("\n              "+t._s(n.text)+"\n              "),t.isInternal(n.link,n.target)?t._e():e("a-icon",{attrs:{type:"link"}})],1)],1)]}))],2):e("a-menu-item",{key:t.link(n.link)},[t.isInternal(n.link,n.target)?e("RouterLink",{attrs:{to:t.link(n.link)}},[t._v("\n          "+t._s(n.text)+"\n        ")]):e("a",{attrs:{href:t.link(n.link),target:t.target(n.target,n.link)}},[t._v("\n          "+t._s(n.text)+"\n          "),t.isInternal(n.link,n.target)?t._e():e("a-icon",{attrs:{type:"link"}})],1)],1)]}))],2),t._v(" "),e("ul",{staticClass:"extra-group"},[t.repoLink?e("li",[e("a-tooltip",{attrs:{placement:"bottom"}},[e("template",{slot:"title"},[e("span",{staticStyle:{"text-transform":"capitalize"}},[t._v(t._s(t.repoLabel))])]),t._v(" "),e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e("a-icon",{attrs:{type:t.repoLabel}})],1)],2)],1):t._e(),t._v(" "),t.isDarkMode?e("li",[e("ThemeSwitch")],1):t._e()])],1):t._e()}),[],!1,null,null,null);e.default=a.exports}}]);