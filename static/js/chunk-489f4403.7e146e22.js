(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-489f4403"],{"2e13":function(t,e,a){"use strict";var n=a("a78e"),i=a.n(n),r="AnBaoAppId",s="AnBaoAppIdR",c="HuAppId",o="HuAppIdR",u="SanAppId",l="SanAppIdR",p="Niu",h={getNiu:function(){return i.a.get(p)},setNiu:function(t){return i.a.set(p,t)},getAnBao:function(){return i.a.get(r)},setAnBao:function(t){return i.a.set(r,t)},getAnBaoR:function(){return i.a.get(s)},setAnBaoR:function(t){return i.a.set(s,t)},getHuR:function(){return i.a.get(o)},setHuR:function(t){return i.a.set(o,t)},getHu:function(){return i.a.get(c)},setHu:function(t){return i.a.set(c,t)},getSan:function(){return i.a.get(u)},setSan:function(t){return i.a.set(u,t)},getSanR:function(){return i.a.get(l)},setSanR:function(t){return i.a.set(l,t)}};e["a"]=h},5365:function(t,e,a){"use strict";var n=a("6a30"),i=a.n(n);i.a},"6a30":function(t,e,a){},7031:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:20}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("游戏场次选择")])]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"107"},on:{change:function(e){return t.ChangeAppId(107)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("体验场")])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"217"},on:{change:function(e){return t.ChangeAppId(217)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("初级场")])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"227"},on:{change:function(e){return t.ChangeAppId(227)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("中级场")])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"237"},on:{change:function(e){return t.ChangeAppId(237)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("高级场")])],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("游戏开关设置")])]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-col",{attrs:{span:4}},[a("span",{staticClass:"tip"},[t._v("投注盈利比:")]),t._v(" "),a("el-switch",{attrs:{"active-text":"开","inactive-text":"关","active-color":"#13ce66","inactive-color":"#ff4949","active-value":t.on,"inactive-value":t.off},on:{change:function(e){return t.change(0)}},model:{value:t.Switch.BetWinRate,callback:function(e){t.$set(t.Switch,"BetWinRate",e)},expression:"Switch.BetWinRate"}})],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("span",{staticClass:"tip"},[t._v("游戏库存:")]),t._v(" "),a("el-switch",{attrs:{"active-text":"开","inactive-text":"关","active-color":"#13ce66","inactive-color":"#ff4949","active-value":t.on,"inactive-value":t.off},on:{change:function(e){return t.change(1)}},model:{value:t.Switch.GameStock,callback:function(e){t.$set(t.Switch,"GameStock",e)},expression:"Switch.GameStock"}})],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("span",{staticClass:"tip"},[t._v("胜率控制:")]),t._v(" "),a("el-switch",{attrs:{"active-text":"开","inactive-text":"关","active-color":"#13ce66","inactive-color":"#ff4949","active-value":t.on,"inactive-value":t.off},on:{change:function(e){return t.change(2)}},model:{value:t.Switch.WinRate,callback:function(e){t.$set(t.Switch,"WinRate",e)},expression:"Switch.WinRate"}})],1)],1)])],1),t._v(" "),a("bet-win-rate",{attrs:{data:t.getBetWinRate},on:{submit:t.submit}}),t._v(" "),a("win-rate",{attrs:{data:t.getWinRate},on:{submit:t.submit}}),t._v(" "),a("stock",{staticClass:"filter-container",attrs:{stock:t.getStock,"stock-pool":t.StockPool,"time-ctl":t.TimeCtl,"stock-ctl":t.StockCtl,"limit-ctl":t.LimitCtl},on:{submitData:t.submit}}),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("恢复全部默认值")])]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-button",{attrs:{type:"danger",plain:""},on:{click:t.SumitDefault}},[t._v("初始化全部数值")])],1)])],1)},i=[],r=(a("96cf"),a("3b8d")),s=a("9b62"),c=a("d0b0"),o=a("5f61"),u=a("bb3b"),l=a("2e13"),p={components:{BetWinRate:c["a"],WinRate:o["a"],Stock:u["a"]},filters:{getStatusName:function(t,e){var a=["正常","关闭"];return 1===e&&(a=["关闭","正常"]),a[t]},statusFilter:function(t){var e=["success","danger"];return e[t]},status:function(t){var e=["danger","success"];return e[t]}},data:function(){return{AppId:"107",on:1,off:0,Switch:{},WinRate:{},BetWinRate:{},StockPool:{},TimeCtl:{},LimitCtl:{},Rate:[],StockCtl:{},GameStock:{}}},computed:{getStock:function(){return this.GameStock},getBetWinRate:function(){return this.BetWinRate},getWinRate:function(){return this.WinRate}},created:function(){var t=l["a"].getSan();t&&(this.AppId=t),this.fetchData(this.AppId)},methods:{ChangeAppId:function(t){l["a"].setSan(t),window.location.reload()},SumitDefault:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$confirm("是否要重置全部参数?","Warning",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark((function t(){var a,n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["j"])({AppId:e.AppId});case 2:if(a=t.sent,n=a.status,i=a.data,r=a.msg,0===n){t.next=8;break}return t.abrupt("return",e.$message.error(r));case 8:e.$message.success(r),e.IntData(i);case 10:case"end":return t.stop()}}),t)})))).catch((function(t){console.error(t)}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),change:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.submit({Switch:this.Switch});case 2:if(a=t.sent,n=a.status,0===n){t.next=15;break}t.t0=e,t.next=0===t.t0?8:1===t.t0?10:2===t.t0?12:14;break;case 8:return this.Switch.BetWinRate=1===this.Switch.BetWinRate?0:1,t.abrupt("break",15);case 10:return this.Switch.GameStock=1===this.Switch.GameStock?0:1,t.abrupt("break",15);case 12:return this.Switch.WinRate=1===this.Switch.WinRate?0:1,t.abrupt("break",15);case 14:return t.abrupt("break",15);case 15:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),submit:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,a=JSON.parse(JSON.stringify(e)),t.next=4,Object(s["o"])({data:a,AppId:this.AppId});case 4:return n=t.sent,this.listLoading=!1,1===n.status?this.$message.error(n.msg):this.$message.success(n.msg),t.abrupt("return",n);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),fetchData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,Object(s["e"])({AppId:e});case 3:if(a=t.sent,n=a.status,i=a.data,r=a.msg,this.listLoading=!1,0===n){t.next=10;break}return t.abrupt("return",this.$message.error(r));case 10:""!==i.LimitCtl&&(this.LimitCtl=JSON.parse(i.LimitCtl)),""!==i.TimeCtl&&(this.TimeCtl=JSON.parse(i.TimeCtl)),this.IntData(i);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),IntData:function(t){this.Switch=t.Switch,this.GameStock=t.GameStock,this.StockPool=t.GameStockPool,this.BetWinRate=t.BetWinRate,this.WinRate=t.WinRate,this.StockCtl=t.StockCtl}}},h=p,f=(a("5365"),a("2877")),d=Object(f["a"])(h,n,i,!1,null,"3186e551",null);e["default"]=d.exports}}]);