(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{740:function(t,a,e){},753:function(t,a,e){"use strict";e(740)},764:function(t,a,e){"use strict";e.r(a);var s={name:"Promo",methods:{gotoLink(){window.open(this.data.link)},popupInfo(){this.$info({title:this.data.msgTitle||"Message Title",content:this.data.msgText||"Put your text here.",okText:this.data.msgOkText||"Ok",maskClosable:!0})}},computed:{data(){return this.$themeConfig.ads}}},o=(e(753),e(65)),i=Object(o.a)(s,(function(){var t=this,a=t._self._c;return t.data?a("div",[a("div",{staticClass:"promo"},[1===t.data.style?a("div",{attrs:{id:"promo_1"},on:{click:t.gotoLink}},[a("img",{attrs:{src:t.data.image}}),t._v(" "),a("span",{attrs:{title:t.data.text}},[t._v(t._s(t.data.text||"No text"))])]):2===t.data.style?a("div",{attrs:{id:"promo_2"}},[a("a-carousel",{attrs:{autoplay:"",autoplaySpeed:t.data.speed||3e3}},t._l(t.data.items,(function(t,e){return a("div",{key:e},[a("a",{attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:t.image,title:t.text}})])])})),0)],1):a("div",{attrs:{id:"promo_3"}},[a("div",{staticClass:"promo_title"},[t._v(t._s(t.data.title||"Sponsor"))]),t._v(" "),a("a-button",{attrs:{type:"primary",ghost:""},on:{click:t.popupInfo}},[t._v(t._s(t.data.btnText||"Become a Sponsor"))])],1)]),t._v(" "),a("a-divider",{attrs:{dashed:"",id:"reset-margin"}})],1):t._e()}),[],!1,null,null,null);a.default=i.exports}}]);