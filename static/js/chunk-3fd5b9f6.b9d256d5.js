(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fd5b9f6"],{"0305":function(t,e,a){"use strict";var r=a("d035"),i=a.n(r);i.a},"2de8":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("游戏场次选择")])]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"103"},on:{change:function(e){return t.ChangeAppId(103)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("体验场")])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"213"},on:{change:function(e){return t.ChangeAppId(213)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("初级场")])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"223"},on:{change:function(e){return t.ChangeAppId(223)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("中级场")])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-radio",{attrs:{label:"233"},on:{change:function(e){return t.ChangeAppId(233)}},model:{value:t.AppId,callback:function(e){t.AppId=e},expression:"AppId"}},[t._v("高级场")])],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("游戏开关设置")])]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-col",{attrs:{span:4}},[a("span",{staticClass:"tip"},[t._v("投注盈利比:")]),t._v(" "),a("el-switch",{attrs:{"active-text":"开","inactive-text":"关","active-color":"#13ce66","inactive-color":"#ff4949","active-value":t.on,"inactive-value":t.off},on:{change:function(e){return t.change(0)}},model:{value:t.Switch.BetWinRate,callback:function(e){t.$set(t.Switch,"BetWinRate",e)},expression:"Switch.BetWinRate"}})],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("span",{staticClass:"tip"},[t._v("游戏库存:")]),t._v(" "),a("el-switch",{attrs:{"active-text":"开","inactive-text":"关","active-color":"#13ce66","inactive-color":"#ff4949","active-value":t.on,"inactive-value":t.off},on:{change:function(e){return t.change(1)}},model:{value:t.Switch.GameStock,callback:function(e){t.$set(t.Switch,"GameStock",e)},expression:"Switch.GameStock"}})],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("span",{staticClass:"tip"},[t._v("胜率控制:")]),t._v(" "),a("el-switch",{attrs:{"active-text":"开","inactive-text":"关","active-color":"#13ce66","inactive-color":"#ff4949","active-value":t.on,"inactive-value":t.off},on:{change:function(e){return t.change(2)}},model:{value:t.Switch.WinRate,callback:function(e){t.$set(t.Switch,"WinRate",e)},expression:"Switch.WinRate"}})],1)],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("投注盈利比")])]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"大周期最小值："}},[a("el-input",{staticClass:"input",attrs:{clearable:""},model:{value:t.BetWinRate.MinBigCycle,callback:function(e){t.$set(t.BetWinRate,"MinBigCycle",e)},expression:"BetWinRate.MinBigCycle"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"最大值："}},[a("el-input",{staticClass:"input",attrs:{clearable:""},model:{value:t.BetWinRate.MaxBigCycle,callback:function(e){t.$set(t.BetWinRate,"MaxBigCycle",e)},expression:"BetWinRate.MaxBigCycle"}})],1)],1),t._v(" "),a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"小周期最小值："}},[a("el-input",{staticClass:"input",attrs:{clearable:""},model:{value:t.BetWinRate.MinSmallCycle,callback:function(e){t.$set(t.BetWinRate,"MinSmallCycle",e)},expression:"BetWinRate.MinSmallCycle"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"最大值："}},[a("el-input",{staticClass:"input",attrs:{clearable:""},model:{value:t.BetWinRate.MaxSmallCycle,callback:function(e){t.$set(t.BetWinRate,"MaxSmallCycle",e)},expression:"BetWinRate.MaxSmallCycle"}})],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{data:t.BetRateTitle,border:"","show-header":!1}},[a("el-table-column",{attrs:{prop:"title",width:"180"}}),t._v(" "),t._l(t.BetRate,(function(e,r){return a("el-table-column",{key:r,attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(r){var i=r.row;return["系统胜率"===i.title?[a("el-input",{staticClass:"rate-input",attrs:{size:"small"},model:{value:e.val,callback:function(a){t.$set(e,"val",a)},expression:"item.val"}})]:[a("el-input",{staticClass:"rate-input",attrs:{size:"small"},model:{value:e.key,callback:function(a){t.$set(e,"key",a)},expression:"item.key"}})]]}}],null,!0)})}))],2)],1)],1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.SumitBetWinRate}},[t._v("保存配置")])],1)]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("胜率控制")])]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-row",t._l(t.Rate,(function(e,r){return a("el-col",{key:r,attrs:{span:12}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"真实总额预计达"}},[a("el-input",{attrs:{label:"",clearable:""},model:{value:e.key,callback:function(a){t.$set(e,"key",a)},expression:"item.key"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"启动必杀率"}},[a("el-input",{attrs:{label:"",clearable:""},model:{value:e.val,callback:function(a){t.$set(e,"val",a)},expression:"item.val"}})],1)],1)],1)})),1),t._v(" "),a("div",{staticClass:"tips"},[t._v("* 金额等级递增，每个级别胜率单独为0-100，胜率配置可以只设置前几级")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.SumitRate}},[t._v("保存配置")])],1)]),t._v(" "),a("hulu-pane",{staticClass:"filter-container",attrs:{stock:t.getStock,"stock-pool":t.StockPool,"time-ctl":t.TimeCtl,"stock-ctl":t.StockCtl,"limit-ctl":t.LimitCtl},on:{submitData:t.SubmitStock}}),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("恢复全部默认值")])]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-button",{attrs:{type:"danger",plain:""},on:{click:t.SumitDefault}},[t._v("初始化全部数值")])],1)])],1)},i=[],n=(a("6b54"),a("ac4d"),a("8a81"),a("ac6a"),a("456d"),a("96cf"),a("3b8d")),s=a("9b62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("游戏库存控制")])]),t._v(" "),a("div",{staticClass:"filter-container"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"库存管理："}}),t._v(" "),a("el-form-item",{attrs:{label:"标准库存"}},[a("el-input",{on:{change:function(e){return t.UpdateStandardStock(t.stock.StandardStock)}},model:{value:t.stock.StandardStock,callback:function(e){t.$set(t.stock,"StandardStock",e)},expression:"stock.StandardStock"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"当前库存"}},[a("el-input",{attrs:{disabled:""},model:{value:t.stockPool.CurrStock,callback:function(e){t.$set(t.stockPool,"CurrStock",e)},expression:"stockPool.CurrStock"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"当前胜率"}},[a("el-input",{staticClass:"input-small",attrs:{disabled:""},model:{value:t.CurrRate,callback:function(e){t.CurrRate=e},expression:"CurrRate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"库存保护"}},[a("el-input",{attrs:{clearable:""},model:{value:t.stock.MinStock,callback:function(e){t.$set(t.stock,"MinStock",e)},expression:"stock.MinStock"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"保护持续轮数"}},[a("el-input",{staticClass:"input-small",attrs:{clearable:""},model:{value:t.stock.KeepRound,callback:function(e){t.$set(t.stock,"KeepRound",e)},expression:"stock.KeepRound"}})],1)],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"手动调整："}}),t._v(" "),a("el-form-item",{attrs:{label:"手动调整当前库存"}},[a("el-input",{attrs:{clearable:""},model:{value:t.UpdateCurrStock,callback:function(e){t.UpdateCurrStock=e},expression:"UpdateCurrStock"}})],1)],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"按输赢流水："}}),t._v(" "),a("el-form-item",{attrs:{label:"累计调整量"}},[a("el-input",{attrs:{disabled:""},model:{value:t.stockPool.TotalPumpAmount,callback:function(e){t.$set(t.stockPool,"TotalPumpAmount",e)},expression:"stockPool.TotalPumpAmount"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.ClearStockPool()}}},[t._v("清零累计")])],1),t._v(" "),a("el-form-item",{attrs:{label:"累计调整量"}},[a("span",{staticClass:"tip"},[t._v("每轮按照系统输赢绝对值总和的百分比:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.stock.PumpPercent,expression:"stock.PumpPercent"}],staticClass:"text",attrs:{type:"text"},domProps:{value:t.stock.PumpPercent},on:{input:function(e){e.target.composing||t.$set(t.stock,"PumpPercent",e.target.value)}}}),t._v(" "),a("span",{staticClass:"tip"},[t._v("扣除当前库存")])])],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"按时间控制："}}),t._v(" "),a("el-form-item",{attrs:{label:"累计调整量"}},[a("el-input",{attrs:{disabled:""},model:{value:t.stockCtl.TimeCtl,callback:function(e){t.$set(t.stockCtl,"TimeCtl",e)},expression:"stockCtl.TimeCtl"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.ClearStock("TimeCtl")}}},[t._v("清零累计")])],1),t._v(" "),a("el-form-item",{attrs:{label:"按照"}},[a("el-time-picker",{attrs:{disabled:!0,"picker-options":{selectableRange:"18:30:00 - 20:30:00"},placeholder:"任意时间点"},model:{value:t.timeCtl.time,callback:function(e){t.$set(t.timeCtl,"time",e)},expression:"timeCtl.time"}}),t._v(" "),a("span",{staticClass:"tip"},[t._v("时间点，每间隔")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.timeCtl.interval,expression:"timeCtl.interval"}],staticClass:"text",attrs:{disabled:!0,type:"text"},domProps:{value:t.timeCtl.interval},on:{input:function(e){e.target.composing||t.$set(t.timeCtl,"interval",e.target.value)}}}),t._v(" "),a("span",{staticClass:"tip"},[t._v("分钟检查一次当前库存，并自动从当前库存扣除")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.timeCtl.gold,expression:"timeCtl.gold"}],staticClass:"text input-small",attrs:{type:"text",disabled:!0},domProps:{value:t.timeCtl.gold},on:{input:function(e){e.target.composing||t.$set(t.timeCtl,"gold",e.target.value)}}}),t._v(" "),a("span",{staticClass:"tip"},[t._v("金币")])],1)],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"按上限控制："}}),t._v(" "),a("el-form-item",{attrs:{label:"累计调整量"}},[a("el-input",{attrs:{disabled:""},model:{value:t.stockCtl.LimitCtl,callback:function(e){t.$set(t.stockCtl,"LimitCtl",e)},expression:"stockCtl.LimitCtl"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.ClearStock("LimitCtl")}}},[t._v("清零累计")])],1),t._v(" "),a("el-form-item",{attrs:{label:"按照"}},[a("el-time-picker",{attrs:{disabled:"","picker-options":{selectableRange:"00:00:00 - 23:59:59"},placeholder:"任意时间点"},model:{value:t.limitCtl.time,callback:function(e){t.$set(t.limitCtl,"time",e)},expression:"limitCtl.time"}}),t._v(" "),a("span",{staticClass:"tip"},[t._v("时间点，每间隔")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.limitCtl.interval,expression:"limitCtl.interval"}],staticClass:"text",attrs:{disabled:"",type:"text"},domProps:{value:t.limitCtl.interval},on:{input:function(e){e.target.composing||t.$set(t.limitCtl,"interval",e.target.value)}}}),t._v(" "),a("span",{staticClass:"tip"},[t._v("分钟检查一次当前库存，如果超过")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.limitCtl.gold,expression:"limitCtl.gold"}],staticClass:"text input-small",attrs:{type:"text",disabled:""},domProps:{value:t.limitCtl.gold},on:{input:function(e){e.target.composing||t.$set(t.limitCtl,"gold",e.target.value)}}}),t._v(" "),a("span",{staticClass:"tip"},[t._v("金币则扣除超出的金币")])],1)],1)],1)],1),t._v(" "),a("el-row",{staticClass:"box-card"},[a("el-col",{attrs:{span:24}},[a("el-table",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{data:t.region,border:"","show-header":!1}},[a("el-table-column",{attrs:{prop:"title",width:"180"}}),t._v(" "),t._l(t.regionRate,(function(e,r){return a("el-table-column",{key:r,attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){var n=i.row;return["库存调节区间"===n.title?[a("el-input",{staticClass:"edit-input input-region",attrs:{size:"small"},on:{change:function(a){return t.UpdateRegion(r,e.rate)}},model:{value:e.rate,callback:function(a){t.$set(e,"rate",a)},expression:"item.rate"}})]:a("span",[t._v(t._s(e.reg))])]}}],null,!0)})}))],2),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-bottom":"10px"},attrs:{data:t.regionData,border:"","show-header":!1}},[a("el-table-column",{attrs:{prop:"title"}}),t._v(" "),t._l(t.rateData,(function(e,r){return a("el-table-column",{key:r,attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){var n=i.row;return["最小轮数"===n.title?[a("el-input",{staticClass:"edit-input input-region",attrs:{size:"small"},model:{value:e.MinKeepRound,callback:function(a){t.$set(e,"MinKeepRound",a)},expression:"item.MinKeepRound"}})]:"最大轮数"===n.title?[a("el-input",{staticClass:"edit-input input-region",attrs:{size:"small"},model:{value:e.MaxKeepRound,callback:function(a){t.$set(e,"MaxKeepRound",a)},expression:"item.MaxKeepRound"}})]:"调节胜率"===n.title?[a("el-input",{staticClass:"edit-input input-region",attrs:{size:"small"},model:{value:e.KillRate,callback:function(a){t.$set(e,"KillRate",a)},expression:"item.KillRate"}})]:a("span",[t._v(t._s(t.getRegion(r)))])]}}],null,!0)})}))],2)],1)],1),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitStock}},[t._v("保存配置")])],1)])],1)},l=[],c=(a("55dd"),a("5df3"),a("4f7f"),a("75fc")),u=a("ed08"),p={type:"",data:null},f={filters:{getRegion1:function(t){return t}},props:{type:{type:String,default:"0"},stock:{type:Object,default:function(){return[]}},stockPool:{type:Object,default:function(){return[]}},stockCtl:{type:Object,default:function(){return[]}},timeCtl:{type:Object,default:function(){return[]}},limitCtl:{type:Object,default:function(){return[]}}},data:function(){return{submitData:Object.assign({},p),value1:new Date(2016,9,10,18,40),value2:new Date(2016,9,10,18,40),UpdateCurrStock:0,regionRate:[],rateData:[],region:[{title:"库存调节区间"},{title:"对应库存"}],regionData:[{title:"区间范围"},{title:"最小轮数"},{title:"最大轮数"},{title:"调节胜率"}],CurrRate:0,list:null}},watch:{stock:function(t){var e=this;this.rateData=t.Rate,this.stock.MinStock=Object(u["f"])(t.MinStock),this.regionRate=[];var a=Object(u["f"])(this.stock.StandardStock);this.stock.StandardStock=a,this.stock.StockLevel=t.StockLevel.map((function(t){t=Object(u["f"])(parseInt(t));var r=(a-t)/a;return r<1&&(r=-r),t<=0&&(r=-r),e.regionRate.push({rate:Object(u["g"])(r),reg:t}),t}))},stockPool:function(t){this.stockPool.CurrStock=Object(u["f"])(t.CurrStock),this.stockPool.TotalPumpAmount=Object(u["f"])(t.TotalPumpAmount)},stockCtl:function(t){this.stockCtl.LimitCtl=Object(u["f"])(t.LimitCtl),this.stockCtl.TimeCtl=Object(u["f"])(t.TimeCtl)},timeCtl:function(t){this.timeCtl.gold=Object(u["f"])(t.gold)},limitCtl:function(t){this.limitCtl.gold=Object(u["f"])(t.gold)}},methods:{ClearStock:function(t){this.stockCtl.LimitCtl=Object(u["g"])(this.stockCtl.LimitCtl),this.stockCtl.TimeCtl=Object(u["g"])(this.stockCtl.TimeCtl),this.stockCtl[t]=0,this.$emit("submitData","stockCtl",this.stockCtl),this.stockCtl.LimitCtl=Object(u["f"])(this.stockCtl.LimitCtl),this.stockCtl.TimeCtl=Object(u["f"])(this.stockCtl.TimeCtl)},ClearStockPool:function(){this.stockPool.TotalPumpAmount=0,this.$emit("submitData","stockPool",this.stockPool)},UpdateStandardStock:function(t){if(!/^\d+$/.test(t))return this.$message.error("输入数值有误"),!1;this.regionRate=this.regionRate.map((function(e,a){return e.reg=parseInt(t)+t*(e.rate/100),e}))},submitStock:function(){var t=this;if(!/^\d+$/.test(this.stock.StandardStock))return this.$message.error("标准库存的数值有误"),!1;if(!/^\d+$/.test(this.stock.MinStock))return this.$message.error("库存保护的数值有误"),!1;if(!/^\d+$/.test(this.stock.KeepRound))return this.$message.error("保护持续轮数的数值有误"),!1;if(!/^\d+$/.test(this.stock.PumpPercent))return this.$message.error("输赢绝对值总和百分比的数值有误"),!1;var e=[];if(this.stock.StockLevel=this.stock.StockLevel.map((function(a,r){return a=t.regionRate[r].reg,e.push(parseInt(t.regionRate[r].rate)),Object(u["g"])(a)})),10!==Object(c["a"])(new Set(e)).length)return this.$message.error("库存调节区间，不允许填写重复的数值"),!1;if(""!==this.UpdateCurrStock){if(!/^(^-?\d+$)$/.test(this.UpdateCurrStock))return this.$message.error("调整当前库存的数值有误"),!1;var a=parseInt(this.UpdateCurrStock);0!==a&&(this.stockPool.CurrStock=Object(u["g"])(this.stockPool.CurrStock+a),this.stockPool.TotalPumpAmount=Object(u["g"])(this.stockPool.TotalPumpAmount),this.UpdateCurrStock=0,this.submitData.type="stockPool",this.submitData.data=Object.assign({},this.stockPool),Object(s["l"])(this.submitData),this.stockPool.CurrStock=Object(u["f"])(this.stockPool.CurrStock))}var r=0;for(var i in this.rateData){var n=this.rateData[i].KillRate,o=this.rateData[i].MaxKeepRound,l=this.rateData[i].MinKeepRound;if(!/^\d+$/.test(o)||!/^\d+$/.test(l)){r=1;break}if(parseInt(o)<parseInt(l)){r=2;break}if(!/^(^-?\d+$)$/.test(n)){r=3;break}var p=parseInt(n);if(p>100||p<-100){r=3;break}}switch(r){case 1:this.$message.error("调节轮数数值有误");break;case 2:this.$message.error("调节轮数最小轮数不能大于最大轮数");break;case 3:this.$message.error("调整胜率的数值不能大于100，小于-100");break}if(0!==r)return!1;this.stock.MinStock=Object(u["g"])(this.stock.MinStock),this.stock.StandardStock=Object(u["g"])(this.stock.StandardStock),this.$emit("submitData","stock",this.stock),this.stock.MinStock=Object(u["f"])(this.stock.MinStock),this.stock.StandardStock=Object(u["f"])(this.stock.StandardStock)},getRegion:function(t){if(0===t){var e=this.regionRate[t].reg;return this.stockPool.CurrStock<e&&(this.CurrRate=this.rateData[t].KillRate),"库存 < "+e}if(10===t)return this.stockPool.CurrStock>this.regionRate[9].reg&&(this.CurrRate=this.rateData[t].KillRate),this.regionRate[9].reg+" <= 库存";var a=this.regionRate[t-1].reg;return a<=this.stockPool.CurrStock&&this.stockPool.CurrStock<this.regionRate[t].reg&&(this.CurrRate=this.rateData[t].KillRate),a+"<= 库存 <"+this.regionRate[t].reg},UpdateRegion:function(t,e){if(!/^(^-?\d+$)$/.test(e))return this.$message.error("输入数值有误"),!1;var a=parseInt(this.stock.StandardStock),r=a+a*(e/100);this.regionRate=this.regionRate.map((function(e,a){return a===t&&(e.reg=r),e})).sort((function(t,e){return t.rate-e.rate}))}}},m=f,d=(a("e4e7"),a("0305"),a("2877")),h=Object(d["a"])(m,o,l,!1,null,"b76f9864",null),v=h.exports,k=a("2e13"),b={type:"",data:null},g={components:{HuluPane:v},filters:{getStatusName:function(t,e){var a=["正常","关闭"];return 1===e&&(a=["关闭","正常"]),a[t]},statusFilter:function(t){var e=["success","danger"];return e[t]},status:function(t){var e=["danger","success"];return e[t]}},data:function(){return{AppId:"103",on:1,off:0,BetRateTitle:[{title:"盈利比"},{title:"系统胜率"}],Switch:{BetWinRate:1,GameStock:1,WinRate:1},BetRate:[],BetWinRate:{},StockPool:{},TimeCtl:{},LimitCtl:{},Rate:[],StockCtl:{},GameStock:{},submitData:Object.assign({},b)}},computed:{getStock:function(){return this.GameStock}},created:function(){var t=k["a"].getHu();t&&(this.AppId=t),this.fetchData(this.AppId)},methods:{ChangeAppId:function(t){k["a"].setHu(t),window.location.reload()},SumitDefault:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$confirm("是否要重置全部参数?","Warning",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["g"])({AppId:e.AppId});case 2:if(a=t.sent,r=a.status,i=a.data,n=a.msg,0===r){t.next=8;break}return t.abrupt("return",e.$message.error(n));case 8:e.$message.success(n),e.IntData(i);case 10:case"end":return t.stop()}}),t)})))).catch((function(t){console.error(t)}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),SumitBetWinRate:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i,n,s,o,l,c,u,p,f,m;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(/^\d+$/.test(this.BetWinRate.MaxBigCycle)){t.next=2;break}return t.abrupt("return",this.$message.error("大周期最大值只能输入数字"));case 2:if(this.BetWinRate.MaxBigCycle=parseInt(this.BetWinRate.MaxBigCycle),!(this.BetWinRate.MaxBigCycle>100)){t.next=5;break}return t.abrupt("return",this.$message.error("大周期最大值不能大于100"));case 5:if(/^\d+$/.test(this.BetWinRate.MaxSmallCycle)){t.next=7;break}return t.abrupt("return",this.$message.error("大周期最小值只能输入数字"));case 7:if(this.BetWinRate.MaxSmallCycle=parseInt(this.BetWinRate.MaxSmallCycle),/^\d+$/.test(this.BetWinRate.MinBigCycle)){t.next=10;break}return t.abrupt("return",this.$message.error("小周期最大值只能输入数字"));case 10:if(this.BetWinRate.MinBigCycle=parseInt(this.BetWinRate.MinBigCycle),!(this.BetWinRate.MinBigCycle>100)){t.next=13;break}return t.abrupt("return",this.$message.error("小周期最大值不能大于100"));case 13:if(/^\d+$/.test(this.BetWinRate.MinSmallCycle)){t.next=15;break}return t.abrupt("return",this.$message.error("小周期最小值只能输入数字"));case 15:if(this.BetWinRate.MinSmallCycle=parseInt(this.BetWinRate.MinSmallCycle),!(this.BetWinRate.MinSmallCycle<2)){t.next=18;break}return t.abrupt("return",this.$message.error("小周期最小值为2"));case 18:if(!(this.BetWinRate.MinBigCycle>=this.BetWinRate.MaxBigCycle)){t.next=22;break}return console.log("MinBigCycle",this.BetWinRate.MinBigCycle),console.log("MaxBigCycle",this.BetWinRate.MaxBigCycle),t.abrupt("return",this.$message.error("大周期的最小值不能大于等于最大值"));case 22:if(!(this.BetWinRate.MinSmallCycle>=this.BetWinRate.BigSmallCycle)){t.next=24;break}return t.abrupt("return",this.$message.error("小周期的最小值不能大于等于最大值"));case 24:if(!(this.BetWinRate.MinBigCycle<=this.BetWinRate.MaxSmallCycle)){t.next=28;break}return console.log("MinBigCycle",this.BetWinRate.MinBigCycle),console.log("MaxSmallCycle",this.BetWinRate.MaxSmallCycle),t.abrupt("return",this.$message.error("大周期最大值不能小于或等于大周期最小值"));case 28:e=0,a={},r=!0,i=!1,n=void 0,t.prev=33,s=this.BetRate[Symbol.iterator]();case 35:if(r=(o=s.next()).done){t.next=50;break}if(l=o.value,/^\d+$/.test(l.key)&&/^(^-?\d+$)$/.test(l.val)){t.next=40;break}return e=1,t.abrupt("break",50);case 40:if(c=parseInt(l.key),(c>100||c<0)&&(e=3),u=parseInt(l.val),!(u>100||u<-100)){t.next=46;break}return e=2,t.abrupt("break",50);case 46:a[l.key.toString()]=l.val;case 47:r=!0,t.next=35;break;case 50:t.next=56;break;case 52:t.prev=52,t.t0=t["catch"](33),i=!0,n=t.t0;case 56:t.prev=56,t.prev=57,r||null==s.return||s.return();case 59:if(t.prev=59,!i){t.next=62;break}throw n;case 62:return t.finish(59);case 63:return t.finish(56);case 64:if(1!==e){t.next=68;break}return t.abrupt("return",this.$message.error("投注盈利比配置只能输入数字"));case 68:if(2!==e){t.next=72;break}return t.abrupt("return",this.$message.error("系统胜率率范围必须是-100-100"));case 72:if(3!==e){t.next=74;break}return t.abrupt("return",this.$message.error("系统胜率盈利比范围必须是0~100"));case 74:if(10===Object.keys(a).length){t.next=76;break}return t.abrupt("return",this.$message.error("盈利比不能存在重复数值"));case 76:return this.BetWinRate.Rate=a,t.next=79,this.submit("betWinRate",this.BetWinRate);case 79:if(p=t.sent,f=p.status,m=p.msg,0===f){t.next=84;break}return t.abrupt("return",this.$message.error(m));case 84:this.$message.success(m);case 85:case"end":return t.stop()}}),t,this,[[33,52,56,64],[57,,59,63]])})));function e(){return t.apply(this,arguments)}return e}(),SubmitStock:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){var r,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.submit(e,a);case 2:if(r=t.sent,i=r.status,n=r.msg,0===i){t.next=7;break}return t.abrupt("return",this.$message.error(n));case 7:this.$message.success(n);case 8:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),SumitRate:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,r,i,n,s,o,l,c,p,f,m,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0,a={},r=!0,i=!1,n=void 0,t.prev=5,s=this.Rate[Symbol.iterator]();case 7:if(r=(o=s.next()).done){t.next=21;break}if(l=o.value,/^\d+$/.test(l.key)&&/^\d+$/.test(l.val)){t.next=12;break}return e=1,t.abrupt("break",21);case 12:if(c=parseInt(l.val),!(c>100||c<0)){t.next=16;break}return e=2,t.abrupt("break",21);case 16:p=Object(u["g"])(l.key),a[p.toString()]=l.val;case 18:r=!0,t.next=7;break;case 21:t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](5),i=!0,n=t.t0;case 27:t.prev=27,t.prev=28,r||null==s.return||s.return();case 30:if(t.prev=30,!i){t.next=33;break}throw n;case 33:return t.finish(30);case 34:return t.finish(27);case 35:if(1!==e){t.next=39;break}return t.abrupt("return",this.$message.error("胜率配置只能输入数字"));case 39:if(2!==e){t.next=41;break}return t.abrupt("return",this.$message.error("必杀率范围必须是0-100"));case 41:if(5===Object.keys(a).length){t.next=43;break}return t.abrupt("return",this.$message.error("真实总额不能存在重复数值"));case 43:return t.next=45,this.submit("rate",{Rate:a});case 45:if(f=t.sent,m=f.status,d=f.msg,0===m){t.next=50;break}return t.abrupt("return",this.$message.error(d));case 50:this.$message.success(d);case 51:case"end":return t.stop()}}),t,this,[[5,23,27,35],[28,,30,34]])})));function e(){return t.apply(this,arguments)}return e}(),change:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.submit("switch",this.Switch);case 2:if(a=t.sent,r=a.status,i=a.msg,0===r){t.next=17;break}t.t0=e,t.next=0===t.t0?9:1===t.t0?11:2===t.t0?13:15;break;case 9:return this.Switch.BetWinRate=1===this.Switch.BetWinRate?0:1,t.abrupt("break",16);case 11:return this.Switch.GameStock=1===this.Switch.GameStock?0:1,t.abrupt("break",16);case 13:return this.Switch.WinRate=1===this.Switch.WinRate?0:1,t.abrupt("break",16);case 15:return t.abrupt("break",16);case 16:return t.abrupt("return",this.$message.error(i));case 17:this.$message.success("更改成功");case 18:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),submit:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,this.submitData.type=e,this.submitData.data=Object.assign({},a),this.submitData.AppId=this.AppId,t.next=6,Object(s["l"])(this.submitData);case 6:return r=t.sent,this.listLoading=!1,t.abrupt("return",r);case 9:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),fetchData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,r,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,Object(s["b"])({AppId:e});case 3:if(a=t.sent,r=a.status,i=a.data,n=a.msg,this.listLoading=!1,0===r){t.next=10;break}return t.abrupt("return",this.$message.error(n));case 10:""!==i.LimitCtl&&(this.LimitCtl=JSON.parse(i.LimitCtl)),""!==i.TimeCtl&&(this.TimeCtl=JSON.parse(i.TimeCtl)),this.IntData(i);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),IntData:function(t){this.Switch=t.Switch;var e=[];for(var a in t.WinRate.Rate)e.push({key:Object(u["f"])(a),val:t.WinRate.Rate[a]});for(var r in this.Rate=e,e=[],t.BetWinRate.Rate)e.push({key:r,val:t.BetWinRate.Rate[r]});this.BetRate=e,this.GameStock=t.GameStock,this.StockPool=t.GameStockPool,this.BetWinRate=t.BetWinRate,this.StockCtl=t.StockCtl}}},C=g,S=(a("6119"),Object(d["a"])(C,r,i,!1,null,"de187ada",null));e["default"]=S.exports},"2e13":function(t,e,a){"use strict";var r=a("a78e"),i=a.n(r),n="AnBaoAppId",s="AnBaoAppIdR",o="HuAppId",l="HuAppIdR",c="SanAppId",u="SanAppIdR",p="Niu",f={getNiu:function(){return i.a.get(p)},setNiu:function(t){return i.a.set(p,t)},getAnBao:function(){return i.a.get(n)},setAnBao:function(t){return i.a.set(n,t)},getAnBaoR:function(){return i.a.get(s)},setAnBaoR:function(t){return i.a.set(s,t)},getHuR:function(){return i.a.get(l)},setHuR:function(t){return i.a.set(l,t)},getHu:function(){return i.a.get(o)},setHu:function(t){return i.a.set(o,t)},getSan:function(){return i.a.get(c)},setSan:function(t){return i.a.set(c,t)},getSanR:function(){return i.a.get(u)},setSanR:function(t){return i.a.set(u,t)}};e["a"]=f},"2f21":function(t,e,a){"use strict";var r=a("79e5");t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"4f7f":function(t,e,a){"use strict";var r=a("c26b"),i=a("b39a"),n="Set";t.exports=a("e0b8")(n,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,n),t=0===t?0:t,t)}},r)},"55dd":function(t,e,a){"use strict";var r=a("5ca1"),i=a("d8e8"),n=a("4bf8"),s=a("79e5"),o=[].sort,l=[1,2,3];r(r.P+r.F*(s((function(){l.sort(void 0)}))||!s((function(){l.sort(null)}))||!a("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(n(this)):o.call(n(this),i(t))}})},"5df3":function(t,e,a){"use strict";var r=a("02f4")(!0);a("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,a=this._i;return a>=e.length?{value:void 0,done:!0}:(t=r(e,a),this._i+=t.length,{value:t,done:!1})}))},6119:function(t,e,a){"use strict";var r=a("e9ad"),i=a.n(r);i.a},"9b62":function(t,e,a){"use strict";a.d(e,"m",(function(){return i})),a.d(e,"h",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"o",(function(){return o})),a.d(e,"j",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"k",(function(){return u})),a.d(e,"f",(function(){return p})),a.d(e,"a",(function(){return f})),a.d(e,"i",(function(){return m})),a.d(e,"g",(function(){return d})),a.d(e,"d",(function(){return h})),a.d(e,"n",(function(){return v})),a.d(e,"b",(function(){return k})),a.d(e,"l",(function(){return b}));var r=a("b775");function i(t){return Object(r["a"])({url:"/v1/api/risk/updateDataNiu",method:"post",data:t})}function n(){return Object(r["a"])({url:"/v1/api/risk/setDefaultNiu",method:"get"})}function s(){return Object(r["a"])({url:"/v1/api/risk/getDataNiu",method:"get"})}function o(t){return Object(r["a"])({url:"/v1/api/risk/updateDataSan",method:"post",data:t})}function l(t){return Object(r["a"])({url:"/v1/api/risk/setDefaultSan",method:"get",data:t})}function c(t){return Object(r["a"])({url:"/v1/api/risk/getDataSan",method:"get",data:t})}function u(t){return Object(r["a"])({url:"/v1/api/risk/updateDataHongBao",method:"post",data:t})}function p(){return Object(r["a"])({url:"/v1/api/risk/setDefaultHongBao",method:"get"})}function f(){return Object(r["a"])({url:"/v1/api/risk/getDataHongBao",method:"get"})}function m(t){return Object(r["a"])({url:"/v1/api/risk/defaultQiang",method:"get",data:t})}function d(t){return Object(r["a"])({url:"/v1/api/risk/defaultHuQiang",method:"get",data:t})}function h(t){return Object(r["a"])({url:"/v1/api/risk/getDataQiang",method:"get",data:t})}function v(t){return Object(r["a"])({url:"/v1/api/risk/updateDataQiang",method:"post",data:t})}function k(t){return Object(r["a"])({url:"/v1/api/risk/getDataHuQiang",method:"get",data:t})}function b(t){return Object(r["a"])({url:"/v1/api/risk/updateDataHuQiang",method:"post",data:t})}},b39a:function(t,e,a){var r=a("d3f4");t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},c26b:function(t,e,a){"use strict";var r=a("86cc").f,i=a("2aeb"),n=a("dcbc"),s=a("9b43"),o=a("f605"),l=a("4a59"),c=a("01f9"),u=a("d53b"),p=a("7a56"),f=a("9e1e"),m=a("67ab").fastKey,d=a("b39a"),h=f?"_s":"size",v=function(t,e){var a,r=m(e);if("F"!==r)return t._i[r];for(a=t._f;a;a=a.n)if(a.k==e)return a};t.exports={getConstructor:function(t,e,a,c){var u=t((function(t,r){o(t,u,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&l(r,a,t[c],t)}));return n(u.prototype,{clear:function(){for(var t=d(this,e),a=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete a[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var a=d(this,e),r=v(a,t);if(r){var i=r.n,n=r.p;delete a._i[r.i],r.r=!0,n&&(n.n=i),i&&(i.p=n),a._f==r&&(a._f=i),a._l==r&&(a._l=n),a[h]--}return!!r},forEach:function(t){d(this,e);var a,r=s(t,arguments.length>1?arguments[1]:void 0,3);while(a=a?a.n:this._f){r(a.v,a.k,this);while(a&&a.r)a=a.p}},has:function(t){return!!v(d(this,e),t)}}),f&&r(u.prototype,"size",{get:function(){return d(this,e)[h]}}),u},def:function(t,e,a){var r,i,n=v(t,e);return n?n.v=a:(t._l=n={i:i=m(e,!0),k:e,v:a,p:r=t._l,n:void 0,r:!1},t._f||(t._f=n),r&&(r.n=n),t[h]++,"F"!==i&&(t._i[i]=n)),t},getEntry:v,setStrong:function(t,e,a){c(t,e,(function(t,a){this._t=d(t,e),this._k=a,this._l=void 0}),(function(){var t=this,e=t._k,a=t._l;while(a&&a.r)a=a.p;return t._t&&(t._l=a=a?a.n:t._t._f)?u(0,"keys"==e?a.k:"values"==e?a.v:[a.k,a.v]):(t._t=void 0,u(1))}),a?"entries":"values",!a,!0),p(e)}}},c990:function(t,e,a){},d035:function(t,e,a){},e0b8:function(t,e,a){"use strict";var r=a("7726"),i=a("5ca1"),n=a("2aba"),s=a("dcbc"),o=a("67ab"),l=a("4a59"),c=a("f605"),u=a("d3f4"),p=a("79e5"),f=a("5cc5"),m=a("7f20"),d=a("5dbc");t.exports=function(t,e,a,h,v,k){var b=r[t],g=b,C=v?"set":"add",S=g&&g.prototype,R={},x=function(t){var e=S[t];n(S,t,"delete"==t?function(t){return!(k&&!u(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(k&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return k&&!u(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,a){return e.call(this,0===t?0:t,a),this})};if("function"==typeof g&&(k||S.forEach&&!p((function(){(new g).entries().next()})))){var _=new g,y=_[C](k?{}:-0,1)!=_,w=p((function(){_.has(1)})),$=f((function(t){new g(t)})),B=!k&&p((function(){var t=new g,e=5;while(e--)t[C](e,e);return!t.has(-0)}));$||(g=e((function(e,a){c(e,g,t);var r=d(new b,e,g);return void 0!=a&&l(a,v,r[C],r),r})),g.prototype=S,S.constructor=g),(w||B)&&(x("delete"),x("has"),v&&x("get")),(B||y)&&x(C),k&&S.clear&&delete S.clear}else g=h.getConstructor(e,t,v,C),s(g.prototype,a),o.NEED=!0;return m(g,t),R[t]=g,i(i.G+i.W+i.F*(g!=b),R),k||h.setStrong(g,t,v),g}},e4e7:function(t,e,a){"use strict";var r=a("c990"),i=a.n(r);i.a},e9ad:function(t,e,a){}}]);