(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58373ed4"],{"0541":function(t,e,r){},"36d9":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("游戏场次选择")])]),t._v(" "),r("div",{staticClass:"filter-container"},[r("el-col",{attrs:{span:4}},[r("el-radio",{attrs:{label:"104"},on:{change:function(e){return t.ChangeAppId(104)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("体验场")])],1),t._v(" "),r("el-col",{attrs:{span:4}},[r("el-radio",{attrs:{label:"214"},on:{change:function(e){return t.ChangeAppId(214)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("初级场")])],1),t._v(" "),r("el-col",{attrs:{span:4}},[r("el-radio",{attrs:{label:"224"},on:{change:function(e){return t.ChangeAppId(224)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("中级场")])],1),t._v(" "),r("el-col",{attrs:{span:4}},[r("el-radio",{attrs:{label:"234"},on:{change:function(e){return t.ChangeAppId(234)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("高级场")])],1)],1)]),t._v(" "),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("开关设置")])]),t._v(" "),r("div",{staticClass:"filter-container"},[r("el-col",{attrs:{span:4}},[r("span",{staticClass:"tip"},[t._v("机器人开关:")]),t._v(" "),r("el-switch",{attrs:{"active-text":"开","inactive-text":"关","active-color":"#13ce66","inactive-color":"#ff4949","active-value":t.on,"inactive-value":t.off},on:{change:function(e){return t.change()}},model:{value:t.Switch,callback:function(e){t.Switch=e},expression:"Switch"}})],1)],1)]),t._v(" "),r("up-banker",{attrs:{data:t.getUpBanker},on:{submit:t.ChildSubmit}}),t._v(" "),r("robot-time",{attrs:{data:t.getRobotTime},on:{submit:t.ChildSubmit}}),t._v(" "),r("work-time",{attrs:{data:t.getWorkTime},on:{submit:t.ChildSubmit}}),t._v(" "),r("robot-gold",{attrs:{data:t.getRobotGold},on:{submit:t.ChildSubmit}}),t._v(" "),r("robot-bet",{attrs:{data:t.getRobotBet},on:{submit:t.ChildSubmit}}),t._v(" "),r("seat",{attrs:{data:t.getSeat},on:{submit:t.ChildSubmit}}),t._v(" "),r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("恢复全部默认值")])]),t._v(" "),r("div",{staticClass:"filter-container"},[r("el-button",{attrs:{type:"danger",plain:""},on:{click:t.SumitDefault}},[t._v("初始化全部数值")])],1)])],1)},n=[],o=(r("96cf"),r("3b8d")),i=r("f914"),s=r("9526"),c=r("485b"),u=r("9fc5"),l=r("79fc"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[t._v("押注配置")])]),t._v(" "),r("div",{staticClass:"filter-container"},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"押注人数比例："}},[r("el-input",{attrs:{clearable:""},model:{value:t.RobotBet.BetProbability,callback:function(e){t.$set(t.RobotBet,"BetProbability",e)},expression:"RobotBet.BetProbability"}})],1)],1),t._v(" "),r("div",{staticStyle:{"margin-bottom":"10px",color:"red"}},[t._v(" 注意：押所有板块的几率和为100%")]),t._v(" "),r("el-form",{attrs:{inline:!0}},t._l(t.RobotBet.BetRegions,(function(e,a){return r("el-form-item",{key:a,attrs:{label:t.Title[a]}},[r("el-input",{staticClass:"input",model:{value:e.Proportion,callback:function(r){t.$set(e,"Proportion",r)},expression:"item.Proportion"}})],1)})),1),t._v(" "),r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"普通牌型赔率："}}),t._v(" "),r("el-form-item",{attrs:{label:"下注金额：  机器人当前金额的 "}},[r("el-input",{staticClass:"input",attrs:{clearable:""},model:{value:t.RobotBet.BetGold,callback:function(e){t.$set(t.RobotBet,"BetGold",e)},expression:"RobotBet.BetGold"}})],1),t._v(" "),r("el-form-item",{attrs:{label:" % "}})],1),t._v(" "),r("el-table",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{data:t.TabTitle,border:"","show-header":!1}},[r("el-table-column",{attrs:{prop:"title",width:"180"}}),t._v(" "),t._l(t.PerSecondBet,(function(e,a){return r("el-table-column",{key:a,attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.row;return["倒计时"!==o.title?[r("el-input",{staticClass:"rate-input",attrs:{size:"small"},model:{value:e.val,callback:function(r){t.$set(e,"val",r)},expression:"item.val"}})]:[r("span",[t._v(t._s(a+1))])]]}}],null,!0)})}))],2),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:t.Submit}},[t._v("保存配置")])],1)],1)],1)])},p=[],d=(r("ac4d"),r("8a81"),r("ac6a"),r("ed08")),f={props:{data:{type:Object,default:function(){return[]}}},data:function(){return{RobotBet:{},PerSecondBet:[],Title:["出","入","龙","虎","粘出1","粘出2","出同","粘入1","粘入2","入同","粘龙1","粘龙2","龙同","粘虎1","粘虎2","虎同","龙串","虎串","入串","出串","龙出角","出虎角","入龙角","虎入角"],TabTitle:[{title:"倒计时"},{title:"押注行为概率"}]}},watch:{data:function(t){var e=[];for(var r in t.BetRegions)e.push({Proportion:Object(d["e"])(t.BetRegions[r])});t.BetRegions=e;var a=[];for(var n in t.PerSecondBet)a.push({val:Object(d["e"])(t.PerSecondBet[n])});this.PerSecondBet=a,t.BetProbability=Object(d["e"])(t.BetProbability),t.BetGold=Object(d["e"])(t.BetGold),this.RobotBet=t}},methods:{Submit:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r,a,n,o,i,s,c,u,l,b,p,f,h,m,v,g;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(/^\d+$/.test(this.RobotBet.BetProbability)){t.next=2;break}return t.abrupt("return",this.$message.error("押注人数比例必须为数字"));case 2:if(!(this.RobotBet.BetProbability>100)){t.next=4;break}return t.abrupt("return",this.$message.error("押注人数比例不能大于100"));case 4:e=0,r=0,a=[],n=!0,o=!1,i=void 0,t.prev=10,s=this.RobotBet.BetRegions[Symbol.iterator]();case 12:if(n=(c=s.next()).done){t.next=22;break}if(u=c.value,/^\d+$/.test(u.Proportion)){t.next=17;break}return e=1,t.abrupt("break",22);case 17:r+=parseInt(u.Proportion),a.push(Object(d["f"])(u.Proportion));case 19:n=!0,t.next=12;break;case 22:t.next=28;break;case 24:t.prev=24,t.t0=t["catch"](10),o=!0,i=t.t0;case 28:t.prev=28,t.prev=29,n||null==s.return||s.return();case 31:if(t.prev=31,!o){t.next=34;break}throw i;case 34:return t.finish(31);case 35:return t.finish(28);case 36:if(1!==e){t.next=38;break}return t.abrupt("return",this.$message.error("押注板块参数必须为数字"));case 38:if(100===r){t.next=40;break}return t.abrupt("return",this.$message.error("押注板块的总和必须100"));case 40:if(/^\d+$/.test(this.RobotBet.BetGold)){t.next=42;break}return t.abrupt("return",this.$message.error("机器人当前金额比例必须为数字"));case 42:if(!(this.RobotBet.BetGold>100)){t.next=44;break}return t.abrupt("return",this.$message.error("机器人当前金额比例不能大于100"));case 44:e=0,l=[],b=!0,p=!1,f=void 0,t.prev=49,h=this.PerSecondBet[Symbol.iterator]();case 51:if(b=(m=h.next()).done){t.next=63;break}if(v=m.value,/^\d+$/.test(v.val)){t.next=56;break}return e=1,t.abrupt("break",63);case 56:if(!(v.val>100)){t.next=59;break}return e=2,t.abrupt("break",63);case 59:l.push(Object(d["f"])(v.val));case 60:b=!0,t.next=51;break;case 63:t.next=69;break;case 65:t.prev=65,t.t1=t["catch"](49),p=!0,f=t.t1;case 69:t.prev=69,t.prev=70,b||null==h.return||h.return();case 72:if(t.prev=72,!p){t.next=75;break}throw f;case 75:return t.finish(72);case 76:return t.finish(69);case 77:if(1!==e){t.next=79;break}return t.abrupt("return",this.$message.error("押注行为概率必须为数字"));case 79:if(2!==e){t.next=81;break}return t.abrupt("return",this.$message.error("押注行为概率不能超过100"));case 81:this.RobotBet.PerSecondBet=l,this.RobotBet=Object(d["a"])(this.RobotBet),g=JSON.parse(JSON.stringify(this.RobotBet)),g.BetRegions=a,g.BetProbability=Object(d["f"])(g.BetProbability),g.BetGold=Object(d["f"])(g.BetGold),this.$emit("submit",{RobotBet:JSON.stringify(g)});case 88:case"end":return t.stop()}}),t,this,[[10,24,28,36],[29,,31,35],[49,65,69,77],[70,,72,76]])})));function e(){return t.apply(this,arguments)}return e}()}},h=f,m=(r("f16b"),r("2877")),v=Object(m["a"])(h,b,p,!1,null,"79245d93",null),g=v.exports,B=r("2d5f"),k=r("2e13"),R={data:null},x={components:{WorkTime:s["a"],RobotTime:c["a"],UpBanker:u["a"],RobotGold:l["a"],RobotBet:g,Seat:B["a"]},data:function(){return{AppId:"104",on:1,off:0,Switch:0,RobotBet:{},RobotCount:[],WorkTime:{},RobotGold:{},Seat:{},UpBanker:{},submitData:Object.assign({},R)}},computed:{getUpBanker:function(){return this.UpBanker},getRobotTime:function(){return this.RobotCount},getWorkTime:function(){return this.WorkTime},getRobotGold:function(){return this.RobotGold},getRobotBet:function(){return this.RobotBet},getSeat:function(){return this.Seat}},created:function(){var t=k["a"].getAnBaoR();t&&(this.AppId=t),this.fetchData(this.AppId)},methods:{ChangeAppId:function(t){k["a"].setAnBaoR(t),window.location.reload()},SumitDefault:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$confirm("是否要重置全部参数?","Warning",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["g"])({AppId:e.AppId});case 2:if(r=t.sent,a=r.status,n=r.data,o=r.msg,0===a){t.next=8;break}return t.abrupt("return",e.$message.error(o));case 8:e.$message.success(o),e.Switch=parseInt(n.Switch),e.RobotBet=n.RobotBet,e.UpBanker=n.UpBanker,e.RobotCount=n.RobotCount,e.WorkTime=n.WorkTime,e.RobotGold=n.RobotGold,e.Seat=n.Seat;case 16:case"end":return t.stop()}}),t)})))).catch((function(t){console.error(t)}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),change:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.ChildSubmit({Switch:this.Switch});case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),ChildSubmit:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.submitData.data=Object.assign({},e),this.submitData.AppId=this.AppId,t.next=4,Object(i["k"])(this.submitData);case 4:if(r=t.sent,a=r.status,n=r.msg,0===a){t.next=9;break}return t.abrupt("return",this.$message.error(n));case 9:this.$message.success(n);case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),fetchData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var r,a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["c"])({AppId:e});case 2:if(r=t.sent,a=r.status,n=r.data,o=r.msg,0===a){t.next=8;break}return t.abrupt("return",this.$message.error(o));case 8:this.Switch=parseInt(n.Switch),this.RobotBet=JSON.parse(n.RobotBet),this.UpBanker=JSON.parse(n.UpBanker),this.RobotCount=JSON.parse(n.RobotCount),this.WorkTime=JSON.parse(n.WorkTime),this.RobotGold=JSON.parse(n.RobotGold),this.Seat=JSON.parse(n.Seat);case 15:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},S=x,w=(r("6836"),Object(m["a"])(S,a,n,!1,null,"720a24a8",null));e["default"]=w.exports},6836:function(t,e,r){"use strict";var a=r("0541"),n=r.n(a);n.a},9008:function(t,e,r){},f16b:function(t,e,r){"use strict";var a=r("9008"),n=r.n(a);n.a},f914:function(t,e,r){"use strict";r.d(e,"l",(function(){return n})),r.d(e,"h",(function(){return o})),r.d(e,"d",(function(){return i})),r.d(e,"i",(function(){return s})),r.d(e,"e",(function(){return c})),r.d(e,"a",(function(){return u})),r.d(e,"f",(function(){return l})),r.d(e,"g",(function(){return b})),r.d(e,"c",(function(){return p})),r.d(e,"k",(function(){return d})),r.d(e,"b",(function(){return f})),r.d(e,"j",(function(){return h}));var a=r("b775");function n(t){return Object(a["a"])({url:"/v1/api/robot/updateDataSan",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/v1/api/robot/setDefaultSan",method:"get",data:t})}function i(t){return Object(a["a"])({url:"/v1/api/robot/getDataSan",method:"get",data:t})}function s(t){return Object(a["a"])({url:"/v1/api/robot/updateDataHongBao",method:"post",data:t})}function c(){return Object(a["a"])({url:"/v1/api/robot/setDefaultHongBao",method:"get"})}function u(){return Object(a["a"])({url:"/v1/api/robot/getDataHongBao",method:"get"})}function l(t){return Object(a["a"])({url:"/v1/api/robot/setDefaultHuQiang",method:"get",data:t})}function b(t){return Object(a["a"])({url:"/v1/api/robot/setDefaultQiang",method:"get",data:t})}function p(t){return Object(a["a"])({url:"/v1/api/robot/getDataQiang",method:"get",data:t})}function d(t){return Object(a["a"])({url:"/v1/api/robot/updateDataQiang",method:"post",data:t})}function f(t){return Object(a["a"])({url:"/v1/api/robot/getDataHuQiang",method:"get",data:t})}function h(t){return Object(a["a"])({url:"/v1/api/robot/updateDataHuQiang",method:"post",data:t})}}}]);