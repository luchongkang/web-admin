(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23caf00e"],{"2f96":function(e,t,r){"use strict";var a=r("bb6e"),n=r.n(a);n.a},6324:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("开关设置")])]),e._v(" "),r("div",{staticClass:"filter-container"},[r("el-col",{attrs:{span:4}},[r("span",{staticClass:"tip"},[e._v("胜率开关:")]),e._v(" "),r("el-switch",{attrs:{"active-text":"开","inactive-text":"关","active-color":"#13ce66","inactive-color":"#ff4949","active-value":e.on,"inactive-value":e.off},on:{change:function(t){return e.change()}},model:{value:e.Switch,callback:function(t){e.Switch=t},expression:"Switch"}})],1)],1)]),e._v(" "),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("机器人发包")])]),e._v(" "),r("div",{staticClass:"filter-container"},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"机器人中雷概率："}},[r("el-input",{model:{value:e.RobotSendHB.RobotUserStepLei,callback:function(t){e.$set(e.RobotSendHB,"RobotUserStepLei",t)},expression:"RobotSendHB.RobotUserStepLei"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"%，"}}),e._v(" "),r("el-form-item",{attrs:{label:"有："}},[r("el-input",{model:{value:e.RobotSendHB.MaxRobotStepLeiCount,callback:function(t){e.$set(e.RobotSendHB,"MaxRobotStepLeiCount",t)},expression:"RobotSendHB.MaxRobotStepLeiCount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"个机器人中雷"}})],1),e._v(" "),r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"真实玩家："}},[r("el-input",{model:{value:e.RobotSendHB.RealUserStepLei,callback:function(t){e.$set(e.RobotSendHB,"RealUserStepLei",t)},expression:"RobotSendHB.RealUserStepLei"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"% 中雷"}})],1),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.SubmitRobotSendHB}},[e._v("保存配置")])],1)],1)],1)]),e._v(" "),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("真实玩家发包")])]),e._v(" "),r("div",{staticClass:"filter-container"},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"机器人中雷概率："}},[r("el-input",{model:{value:e.RealUserSendHB.RobotUserStepLei,callback:function(t){e.$set(e.RealUserSendHB,"RobotUserStepLei",t)},expression:"RealUserSendHB.RobotUserStepLei"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"%，"}}),e._v(" "),r("el-form-item",{attrs:{label:"有："}},[r("el-input",{model:{value:e.RealUserSendHB.MaxRobotStepLeiCount,callback:function(t){e.$set(e.RealUserSendHB,"MaxRobotStepLeiCount",t)},expression:"RealUserSendHB.MaxRobotStepLeiCount"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"个机器人中雷"}})],1),e._v(" "),r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"真实玩家："}},[r("el-input",{model:{value:e.RealUserSendHB.RealUserStepLei,callback:function(t){e.$set(e.RealUserSendHB,"RealUserStepLei",t)},expression:"RealUserSendHB.RealUserStepLei"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"% 中雷"}})],1),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.SubmitRealUserSendHB}},[e._v("保存配置")])],1)],1)],1)]),e._v(" "),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("恢复全部默认值")])]),e._v(" "),r("div",{staticClass:"filter-container"},[r("el-button",{attrs:{type:"danger",plain:""},on:{click:e.SumitDefault}},[e._v("初始化全部数值")])],1)])],1)},n=[],s=(r("96cf"),r("3b8d")),i=r("9b62"),o=r("ed08"),u={data:null},c={data:function(){return{on:1,off:0,Switch:0,RobotSendHB:{},RealUserSendHB:{},TabTitle:[{title:"时间"},{title:"概率"}],submitData:Object.assign({},u)}},created:function(){this.fetchData()},methods:{SubmitRealUserSendHB:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(/^\d+$/.test(this.RealUserSendHB.RealUserStepLei)&&/^\d+$/.test(this.RealUserSendHB.MaxRobotStepLeiCount)&&/^\d+$/.test(this.RealUserSendHB.RobotUserStepLei)){e.next=2;break}return e.abrupt("return",this.$message.error("真实玩家发包参数只能输入数字"));case 2:if(this.RealUserSendHB.RealUserStepLei=parseInt(this.RealUserSendHB.RealUserStepLei),this.RealUserSendHB.MaxRobotStepLeiCount=parseInt(this.RealUserSendHB.MaxRobotStepLeiCount),this.RealUserSendHB.RobotUserStepLei=parseInt(this.RealUserSendHB.RobotUserStepLei),!(this.RealUserSendHB.MaxRobotStepLeiCount>7)){e.next=7;break}return e.abrupt("return",this.$message.error("机器人中雷个数只能是不能大于7"));case 7:if(!(this.RealUserSendHB.RealUserStepLei>100||this.RealUserSendHB.RobotUserStepLei>100)){e.next=9;break}return e.abrupt("return",this.$message.error("概率不能大于100%"));case 9:t=JSON.parse(JSON.stringify(this.RealUserSendHB)),t.RealUserStepLei=Object(o["g"])(t.RealUserStepLei),t.RobotUserStepLei=Object(o["g"])(t.RobotUserStepLei),this.Submit({RealUserSendHB:t});case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),SubmitRobotSendHB:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(/^\d+$/.test(this.RobotSendHB.RealUserStepLei)&&/^\d+$/.test(this.RobotSendHB.MaxRobotStepLeiCount)&&/^\d+$/.test(this.RobotSendHB.RobotUserStepLei)){e.next=2;break}return e.abrupt("return",this.$message.error("机器人发包参数只能输入数字"));case 2:if(this.RobotSendHB.RealUserStepLei=parseInt(this.RobotSendHB.RealUserStepLei),this.RobotSendHB.MaxRobotStepLeiCount=parseInt(this.RobotSendHB.MaxRobotStepLeiCount),!(this.RobotSendHB.MaxRobotStepLeiCount>7)){e.next=6;break}return e.abrupt("return",this.$message.error("机器人中雷个数只能是不能大于7"));case 6:if(this.RobotSendHB.RobotUserStepLei=parseInt(this.RobotSendHB.RobotUserStepLei),!(this.RobotSendHB.RealUserStepLei>100||this.RobotSendHB.RobotUserStepLei>100)){e.next=9;break}return e.abrupt("return",this.$message.error("概率不能大于100%"));case 9:t=JSON.parse(JSON.stringify(this.RobotSendHB)),t.RealUserStepLei=Object(o["g"])(t.RealUserStepLei),t.RobotUserStepLei=Object(o["g"])(t.RobotUserStepLei),this.Submit({RobotSendHB:t});case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),SumitDefault:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$confirm("是否要重置全部参数?","Warning",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["f"])();case 2:if(r=e.sent,a=r.status,n=r.data,s=r.msg,0===a){e.next=8;break}return e.abrupt("return",t.$message.error(s));case 8:t.$message.success(s),t.Switch=parseInt(n.Switch),t.RobotSendHB=n.RobotSendHB,t.RobotSendHB.RealUserStepLei=Object(o["f"])(t.RobotSendHB.RealUserStepLei),t.RobotSendHB.RobotUserStepLei=Object(o["f"])(t.RobotSendHB.RobotUserStepLei),t.RealUserSendHB=n.RealUserSendHB,t.RealUserSendHB.RealUserStepLei=Object(o["f"])(t.RealUserSendHB.RealUserStepLei),t.RealUserSendHB.RobotUserStepLei=Object(o["f"])(t.RealUserSendHB.RobotUserStepLei);case 16:case"end":return e.stop()}}),e)})))).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),change:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.Submit({Switch:this.Switch});case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),Submit:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.submitData.data=t,e.next=3,Object(i["k"])(this.submitData);case 3:if(r=e.sent,a=r.status,n=r.msg,0===a){e.next=8;break}return e.abrupt("return",this.$message.error(n));case 8:this.$message.success(n);case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),fetchData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])();case 2:if(t=e.sent,r=t.status,a=t.data,n=t.msg,0===r){e.next=8;break}return e.abrupt("return",this.$message.error(n));case 8:this.Switch=parseInt(a.Switch),this.RobotSendHB=JSON.parse(a.RobotSendHB),this.RobotSendHB.RealUserStepLei=Object(o["f"])(this.RobotSendHB.RealUserStepLei),this.RobotSendHB.RobotUserStepLei=Object(o["f"])(this.RobotSendHB.RobotUserStepLei),this.RealUserSendHB=JSON.parse(a.RealUserSendHB),this.RealUserSendHB.RealUserStepLei=Object(o["f"])(this.RealUserSendHB.RealUserStepLei),this.RealUserSendHB.RobotUserStepLei=Object(o["f"])(this.RealUserSendHB.RobotUserStepLei);case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},l=c,b=(r("2f96"),r("2877")),d=Object(b["a"])(l,a,n,!1,null,"d6ba678c",null);t["default"]=d.exports},"9b62":function(e,t,r){"use strict";r.d(t,"m",(function(){return n})),r.d(t,"h",(function(){return s})),r.d(t,"c",(function(){return i})),r.d(t,"o",(function(){return o})),r.d(t,"j",(function(){return u})),r.d(t,"e",(function(){return c})),r.d(t,"k",(function(){return l})),r.d(t,"f",(function(){return b})),r.d(t,"a",(function(){return d})),r.d(t,"i",(function(){return p})),r.d(t,"g",(function(){return S})),r.d(t,"d",(function(){return R})),r.d(t,"n",(function(){return f})),r.d(t,"b",(function(){return h})),r.d(t,"l",(function(){return m}));var a=r("b775");function n(e){return Object(a["a"])({url:"/v1/api/risk/updateDataNiu",method:"post",data:e})}function s(){return Object(a["a"])({url:"/v1/api/risk/setDefaultNiu",method:"get"})}function i(){return Object(a["a"])({url:"/v1/api/risk/getDataNiu",method:"get"})}function o(e){return Object(a["a"])({url:"/v1/api/risk/updateDataSan",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/v1/api/risk/setDefaultSan",method:"get",data:e})}function c(e){return Object(a["a"])({url:"/v1/api/risk/getDataSan",method:"get",data:e})}function l(e){return Object(a["a"])({url:"/v1/api/risk/updateDataHongBao",method:"post",data:e})}function b(){return Object(a["a"])({url:"/v1/api/risk/setDefaultHongBao",method:"get"})}function d(){return Object(a["a"])({url:"/v1/api/risk/getDataHongBao",method:"get"})}function p(e){return Object(a["a"])({url:"/v1/api/risk/defaultQiang",method:"get",data:e})}function S(e){return Object(a["a"])({url:"/v1/api/risk/defaultHuQiang",method:"get",data:e})}function R(e){return Object(a["a"])({url:"/v1/api/risk/getDataQiang",method:"get",data:e})}function f(e){return Object(a["a"])({url:"/v1/api/risk/updateDataQiang",method:"post",data:e})}function h(e){return Object(a["a"])({url:"/v1/api/risk/getDataHuQiang",method:"get",data:e})}function m(e){return Object(a["a"])({url:"/v1/api/risk/updateDataHuQiang",method:"post",data:e})}},bb6e:function(e,t,r){}}]);