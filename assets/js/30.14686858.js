(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{2211:function(s,t,a){s.exports=a.p+"assets/img/1680944897657-800f832f-0834-4ac3-bf45-bd1f208326a4-20230415101718568.d3014637.png"},2212:function(s,t,a){s.exports=a.p+"assets/img/1680947487576-fe109286-5b54-4719-8a6c-97d0bab0195e.dc73b8d9.png"},2213:function(s,t,a){s.exports=a.p+"assets/img/1680947601766-4ef44fa9-6daf-429f-b744-b8c9816f705f.065396b5.png"},2214:function(s,t,a){s.exports=a.p+"assets/img/1680947698319-f074adce-1bb0-4d6c-892f-75a9e97499fc.fec9cfd8.png"},2215:function(s,t,a){s.exports=a.p+"assets/img/1680947727700-28338520-a44b-4dc0-aaea-d8472455cae9.68c4b321.png"},2216:function(s,t,a){s.exports=a.p+"assets/img/1680956299322-f59b1eb3-ec47-4c26-8e65-ea899bb4fce1.40a846f9.png"},2217:function(s,t,a){s.exports=a.p+"assets/img/1680956399670-9e08c9e2-187c-48ad-9cd9-2fafd245061d.df477808.png"},2218:function(s,t,a){s.exports=a.p+"assets/img/1680956485885-f8063692-42e2-4287-80fa-9513fcac3d99.0db36eb1.png"},2219:function(s,t,a){s.exports=a.p+"assets/img/1680956563169-0313e611-f10e-4104-9ce2-893ed316ebc9.80aa829e.png"},2220:function(s,t,a){s.exports=a.p+"assets/img/1680956654166-f02b3f8a-e474-4749-8290-7e6890d937dd.7c23bcd8.png"},3365:function(s,t,a){"use strict";a.r(t);var e=a(65),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"go-fastdfs-getclientip-未授权访问漏洞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go-fastdfs-getclientip-未授权访问漏洞"}},[s._v("#")]),s._v(" Go-fastdfs GetClientIp 未授权访问漏洞")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("Go-fastdfs GetClientIp方法存在XFF头绕过漏洞，攻击者通过漏洞可以未授权调用接口，获取配置文件等敏感信息")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Go-fastdfs  ")]),t("br"),s._v(" "),t("h2",{attrs:{id:"网络测绘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v('"go-fastdfs" ')]),t("br"),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("主页面")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2211),alt:"img"}})]),s._v(" "),t("p",[s._v("调用读取配置接口，返回 ip 不允许访问")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("/group1/reload?action=get\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:a(2212),alt:"img"}})]),s._v(" "),t("p",[s._v("追踪错误信息代码")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2213),alt:"img"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(2214),alt:"img"}})]),s._v(" "),t("p",[s._v("跟一下 GetClientIp方法，这里会从 X-Forwarded-For 等参数获取值")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2215),alt:"img"}})]),s._v(" "),t("p",[s._v("回到调用的起点，验证方法为调用 IsPeer 参数")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2216),alt:"img"}})]),s._v(" "),t("p",[t("img",{attrs:{src:a(2217),alt:"img"}})]),s._v(" "),t("p",[s._v("这里主要是验证获取到的值是否为配置中的 AdminIps")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2218),alt:"img"}})]),s._v(" "),t("p",[s._v("在配置文件 cfg.json 中 admin_ips 默认为 127.0.0.1 (可被爆破)")]),s._v(" "),t("p",[t("img",{attrs:{src:a(2219),alt:"img"}})]),s._v(" "),t("p",[s._v("所以通过设置 X-Forwarded-For 就可以绕过接口调用限制，执行修改配置文件等操作，验证POC")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("/group1/reload?action=get\n\nX-Forwarded-For: 127.0.0.1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:a(2220),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);