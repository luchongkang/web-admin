(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07142fb1"],{"0e5a":function(e,t,a){},2430:function(e,t,a){},"2c7c":function(e,t,a){"use strict";var n=a("0e5a"),i=a.n(n);i.a},"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,a){var n=s(),i=e-n,o=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=o;var s=Math.easeInOutQuad(c,n,i,t);l(s),c<t?r(e):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&o(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&o(0,800)}}},u=c,d=(a("aad2"),a("2877")),h=Object(d["a"])(u,n,i,!1,null,"2ec91a81",null);t["a"]=h.exports},aad2:function(e,t,a){"use strict";var n=a("2430"),i=a.n(n);i.a},e382:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingData,expression:"loadingData"}],staticClass:"app-container"},[a("el-row",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("组合搜索")])]),e._v(" "),a("div",{staticClass:"filter-container"},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"UID"},model:{value:e.query.uid,callback:function(t){e.$set(e.query,"uid",t)},expression:"query.uid"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"用户昵称"},model:{value:e.query.nickname,callback:function(t){e.$set(e.query,"nickname",t)},expression:"query.nickname"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"手机号码"},model:{value:e.QueryPhone,callback:function(t){e.QueryPhone=t},expression:"QueryPhone"}}),e._v(" "),a("el-select",{staticStyle:{width:"110px"},attrs:{placeholder:"选择状态"},model:{value:e.query.status,callback:function(t){e.$set(e.query,"status",t)},expression:"query.status"}},e._l(e.status,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-date-picker",{attrs:{type:"datetimerange","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.query.time,callback:function(t){e.$set(e.query,"time",t)},expression:"query.time"}})],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.serachUser}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"warning",icon:"el-icon-delete"},on:{click:e.clearData}},[e._v("清空搜索条件")]),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-printer"},on:{click:e.exportClick}},[e._v("导出")])],1)],1)],1)])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"UID",order:"descending"}},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{align:"center",label:"UID",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.uid)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"110",label:"手机号码"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("getPhone")(t.row.phone))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"昵称",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.nickname))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"金币",width:"110",prop:"game_gold",align:"center",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.gold/100)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"房卡",width:"100",align:"center",prop:"room_card",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.card)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"上级ID",width:"70",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.pid?t.row.pid:"无")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status)}},[e._v(e._s(e._f("getStatusName")(t.row.status,0)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"注册时间",width:"150",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.time))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"registerIp",label:"注册IP",width:"125"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.registerIp))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"loginIp",label:"登录IP",width:"125"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(""===t.row.loginIp?"-":t.row.loginIp))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"phoneModel",label:"设备类型",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(""===t.row.phoneModel?"-":t.row.phoneModel))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"真人信息",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"bottom",title:"",size:"mini",trigger:"click",content:e.balanceInfo},on:{show:function(a){return e.readClick(t.row)},hide:function(t){e.balanceInfo="正在加载中..."}}},[a("el-button",{attrs:{slot:"reference",type:"primary",size:"mini"},slot:"reference"},[e._v("查看")])],1),e._v(" "),a("el-button",{attrs:{slot:"reference",type:"primary",size:"mini"},on:{click:function(a){return e.deductClick(t.row)}},slot:"reference"},[e._v("扣除")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",width:"310"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[e.accessFileter("/v1/api/user/getGoldChangePage")?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleGoldChangeHistory(n.id)}}},[e._v("金币明细")]):e._e(),e._v(" "),e.accessFileter("/v1/api/user/getRecord")?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleHistory(n.id)}}},[e._v("历史战绩")]):e._e(),e._v(" "),a("el-select",{staticStyle:{width:"110px"},attrs:{size:"small",placeholder:"选择操作"},on:{change:e.handleSelUpdate},model:{value:e.values[n.id],callback:function(t){e.$set(e.values,n.id,t)},expression:"values[row.id]"}},e._l(e.optionsFilter(e.options,n.status),(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.page,limit:e.size},on:{"update:page":function(t){e.page=t},"update:limit":function(t){e.size=t},pagination:e.fetchData}}),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogHistory,title:"历史战绩",width:"60%",center:""},on:{"update:visible":function(t){e.dialogHistory=t}}},[a("el-tabs",{staticStyle:{"margin-top":"15px"},attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.tabMapOptions,(function(t){return a("el-tab-pane",{key:t.key,attrs:{label:t.label,name:t.key}},["2"==t.key?[a("keep-alive",[e.activeName==t.key?a("tabPaneHongBao",{attrs:{type:t.key,"user-id":e.userId},on:{create:e.showCreatedTimes}}):e._e()],1)]:[a("keep-alive",[e.activeName==t.key?a("tab-pane",{attrs:{type:t.key,"user-id":e.userId},on:{create:e.showCreatedTimes}}):e._e()],1)]],2)})),1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogGoldChangeHistory,title:"金币明细",width:"60%",center:""},on:{"update:visible":function(t){e.dialogGoldChangeHistory=t}}},[a("gold-change-pane",{attrs:{"user-id":e.userId},on:{create:e.showCreatedTimes}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogChange,title:"充值",width:"30%",center:""},on:{"update:visible":function(t){e.dialogChange=t}}},[a("el-form",{attrs:{model:e.recharge,"label-width":"120px","label-position":"right"}},[a("el-form-item",{attrs:{label:"当前余额："}},[e._v("\n        金币:"+e._s(e.gold)+"\n        房卡:"+e._s(e.card)+"\n      ")]),e._v(" "),a("el-form-item",{attrs:{label:"充值类型"}},[a("el-radio",{attrs:{label:"1",border:""},on:{change:e.rechargeType},model:{value:e.recharge.type,callback:function(t){e.$set(e.recharge,"type",t)},expression:"recharge.type"}},[e._v("充值金币")]),e._v(" "),a("el-radio",{attrs:{label:"3",border:""},on:{change:e.rechargeType},model:{value:e.recharge.type,callback:function(t){e.$set(e.recharge,"type",t)},expression:"recharge.type"}},[e._v("扣除金币")]),e._v(" "),a("el-radio",{attrs:{label:"2",border:""},on:{change:e.rechargeType},model:{value:e.recharge.type,callback:function(t){e.$set(e.recharge,"type",t)},expression:"recharge.type"}},[e._v("房卡")])],1),e._v(" "),a("el-form-item",{attrs:{label:"充值/扣除数量"}},[a("el-input",{attrs:{placeholder:"请输入数量",maxlength:"10","show-word-limit":""},model:{value:e.recharge.number,callback:function(t){e.$set(e.recharge,"number",t)},expression:"recharge.number"}})],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogChange=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingConfirm,expression:"loadingConfirm"}],attrs:{type:"primary",disabled:e.disabledConfirm},on:{click:e.confirmRecharge}},[e._v("确定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPhone,title:"换绑手机",width:"30%",center:""},on:{"update:visible":function(t){e.dialogPhone=t}}},[a("el-form",{attrs:{model:e.recharge,"label-width":"120px","label-position":"right"}},[a("el-form-item",{attrs:{label:"当前手机号码"}},[e._v("\n        "+e._s(e._f("getPhone")(e.currPhone))+"\n      ")]),e._v(" "),a("el-form-item",{attrs:{label:"新号码"}},[a("el-input",{attrs:{placeholder:"请输入新的手机号码"},model:{value:e.changePhone.phone,callback:function(t){e.$set(e.changePhone,"phone",t)},expression:"changePhone.phone"}})],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogPhone=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmChangePhone}},[e._v("确定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPwd,title:"更改用户密码",width:"30%",center:""},on:{"update:visible":function(t){e.dialogPwd=t}}},[a("el-form",{attrs:{model:e.recharge,"label-width":"120px","label-position":"right"}},[a("el-form-item",{attrs:{label:"当前手机号码"}},[e._v("\n        "+e._s(e._f("getPhone")(e.currPhone))+"\n      ")]),e._v(" "),a("el-form-item",{attrs:{label:"新密码"}},[a("el-input",{attrs:{placeholder:"请输入新的密码"},model:{value:e.changePwd.password,callback:function(t){e.$set(e.changePwd,"password",t)},expression:"changePwd.password"}})],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogPwd=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmChangePwd}},[e._v("确定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPid,title:"更改上级ID",width:"30%",center:""},on:{"update:visible":function(t){e.dialogPid=t}}},[a("el-form",{attrs:{model:e.recharge,"label-width":"120px","label-position":"right"}},[a("el-form-item",{attrs:{label:"当前代理ID"}},[e._v("\n        "+e._s(e.currPid?e.currPid:"无")+"\n      ")]),e._v(" "),a("el-form-item",{attrs:{label:"代理ID"}},[a("el-input",{attrs:{placeholder:"请输入代理ID"},model:{value:e.changePid.pid,callback:function(t){e.$set(e.changePid,"pid",t)},expression:"changePid.pid"}})],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogPid=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmChangePid}},[e._v("确定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogRealityBalance,title:"扣除真人金币",width:"15%",center:""},on:{"update:visible":function(t){e.dialogRealityBalance=t},close:e.dialogRealityClose}},[a("el-form",{attrs:{"label-width":"80px","label-position":"right"}},[a("el-form-item",{attrs:{label:"扣除数量"}},[a("el-input",{attrs:{placeholder:"请输入数量",maxlength:"10","show-word-limit":""},model:{value:e.realityBalance.number,callback:function(t){e.$set(e.realityBalance,"number",t)},expression:"realityBalance.number"}})],1)],1),e._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogRealityBalance=!1,e.realityBalance.number=""}}},[e._v("取消")]),e._v(" "),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingDeductReality,expression:"loadingDeductReality"}],attrs:{type:"primary"},on:{click:e.realityBalanceClick}},[e._v("确定")])],1)],1)],1)},i=[],r=(a("ac6a"),a("6b54"),a("96cf"),a("3b8d")),l=a("c24f"),s=a("e285"),o=a("5c96"),c=a("333d"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{align:"center",label:"ID",width:"65","element-loading-text":"请给我点时间！"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"150px",align:"center",label:"游戏时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("parseTime")(t.row.time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"80px",align:"center",label:"场次"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("getRoom")(t.row.roomId)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"80px",align:"center",label:"输赢情况"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.changeNum/100))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"80px",align:"center",label:"游戏轮数"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.hand))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"下注详情"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.betInfo))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"50px",align:"center",label:"庄家"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(0===t.row.isBanker?"否":"是"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"开奖结果",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("getDict")(t.row.dict)))])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.page,limit:e.size},on:{"update:page":function(t){e.page=t},"update:limit":function(t){e.size=t},pagination:e.getList}})],1)},d=[],h=(a("c5f6"),a("28a5"),{components:{Pagination:c["a"]},filters:{getRoom:function(e){return-1!==e.indexOf("1")?"初级场":-1!==e.indexOf("2")?"中级场":-1!==e.indexOf("3")?"高级场":"体验场"},getDict:function(e){if(100===e)return"龙";if(200===e)return"出";if(300===e)return"虎";if(400===e)return"入";var t=["未知","虎","葫芦","鸡","蟹","鱼","虾"],a=e.toString().split("");return t[a[0]]+"/"+t[a[1]]}},props:{type:{type:String,default:"0"},userId:{type:Number,default:0}},data:function(){return{list:null,listQuery:{page:1,size:5,type:this.type,userId:0},page:1,size:10,total:0,loading:!1}},watch:{userId:function(){this.getList()}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,this.listQuery.userId=this.userId,this.listQuery.page=this.page,this.listQuery.size=this.size,this.$emit("create"),Object(l["k"])(this.listQuery).then((function(t){e.list=t.data.user,e.page=parseInt(t.data.page),e.total=t.data.total,e.loading=!1}))},handleClick:function(){}}}),g=h,p=a("2877"),f=Object(p["a"])(g,u,d,!1,null,null,null),m=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{align:"center",label:"ID",width:"65","element-loading-text":"请给我点时间！"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"180px",align:"center",label:"抢包时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("parseTime")(t.row.time,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"红包总金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.totalGold/100))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"抢到红包金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.changeNum/100))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"服务费",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.tax/100))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"是否踩雷"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(!1===t.row.isCl?"否":"是"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"踩雷返还金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.backGold/100))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"发包玩家类型",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(0==t.row.playerType?"真人玩家":"机器人"))])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.page,limit:e.size},on:{"update:page":function(t){e.page=t},"update:limit":function(t){e.size=t},pagination:e.getList}})],1)},v=[],y={components:{Pagination:c["a"]},props:{type:{type:String,default:"0"},userId:{type:Number,default:0}},data:function(){return{list:null,listQuery:{page:1,size:5,type:this.type,userId:0},page:1,size:10,total:0,loading:!1}},watch:{userId:function(){this.getList()}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,this.listQuery.userId=this.userId,this.listQuery.page=this.page,this.listQuery.size=this.size,this.$emit("create"),Object(l["k"])(this.listQuery).then((function(t){e.list=t.data.user,e.page=parseInt(t.data.page),e.total=t.data.total,e.loading=!1}))},handleClick:function(){}}},_=y,w=Object(p["a"])(_,b,v,!1,null,null,null),k=w.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createdAt))])]}}])}),e._v(" "),a("el-table-column",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{align:"center",label:"类型名称",width:"140","element-loading-text":"请给我点时间！"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.changeName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"130",align:"center",label:"变更前"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.beforeGold/100))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"数量",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.changeAmount>0?a("span",{staticStyle:{color:"#ff0000"}},[e._v(e._s(t.row.changeAmount/100))]):t.row.changeAmount<0?a("span",{staticStyle:{color:"#008000"}},[e._v(e._s(t.row.changeAmount/100))]):a("span",[e._v(e._s(t.row.changeAmount/100))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"变更后",width:"130"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.afterGold/100))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"抽水",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.taxation/100))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"游戏名称",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.gameName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"房间Id"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(""===t.row.roomId?"-":t.row.roomId))])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.page,limit:e.size},on:{"update:page":function(t){e.page=t},"update:limit":function(t){e.size=t},pagination:e.getList}})],1)},x=[],S={components:{Pagination:c["a"]},props:{userId:{type:Number,default:0}},data:function(){return{list:null,listQuery:{page:1,size:5,userId:0},page:1,size:10,total:0,loading:!1}},watch:{userId:function(){this.getList()}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,this.listQuery.userId=this.userId,this.listQuery.page=this.page,this.listQuery.size=this.size,this.$emit("create"),Object(l["j"])(this.listQuery).then((function(t){e.list=t.data.record,e.page=parseInt(t.data.page),e.total=t.data.total,e.loading=!1}))}}},C=S,I=Object(p["a"])(C,P,x,!1,null,null,null),$=I.exports,z=a("31c2"),N={page:1,size:10,uid:"",nickname:"",phone:"",status:"",time:""},O={id:"0",type:"1",number:"0"},D={id:"0",phone:""},j={id:"0",password:""},R={id:"0",pid:"",uid:"0"},B={phoneNo:"",nickName:"",number:""},q={components:{Pagination:c["a"],tabPane:m,tabPaneHongBao:k,goldChangePane:$},filters:{getStatusName:function(e,t){var a=["正常","关闭"];return 1===t&&(a=["关闭","正常"]),a[e]},getPhone:function(e){return e.substring(3,e.length)},statusFilter:function(e){var t=["success","danger"];return t[e]}},data:function(){return{options:[{value:"1",label:"充值",path:"/v1/api/user/recharge"},{value:"2",label:"换绑手机",path:"/v1/api/user/changePhone"},{value:"3",label:"修改密码",path:"/v1/api/user/changePwd"},{value:"4",label:"解封账户",path:"/v1/api/user/changeStatus"},{value:"5",label:"冻结账户",path:"/v1/api/user/changeStatus"},{value:"6",label:"修改上级ID",path:"/v1/api/user/changePid"}],status:[{value:"0",label:"正常"},{value:"1",label:"关闭"}],tabMapOptions:[{label:"葫芦鱼",key:"0"},{label:"暗宝",key:"1"},{label:"红包",key:"2"},{label:"三粒嚼",key:"3"}],QueryPhone:"",recharge:Object.assign({},O),changePhone:Object.assign({},D),changePwd:Object.assign({},j),changePid:Object.assign({},R),realityBalance:Object.assign({},B),userId:"0",values:[],query:Object.assign({},N),page:1,size:10,total:0,list:null,gold:0,card:0,currPhone:"",currPid:"",listLoading:!0,loadingData:!1,dialogHistory:!1,dialogGoldChangeHistory:!1,dialogChange:!1,dialogPid:!1,dialogPhone:!1,dialogPwd:!1,createdTimes:0,activeName:"0",hrefLink:"",loadingReadGold:!1,loadingDeductReality:!1,loadingConfirm:!1,balanceInfo:"正在加载中...",dialogRealityBalance:!1,disabledConfirm:!1}},watch:{activeName:function(e){this.$router.push("".concat(this.$route.path,"?tab=").concat(e))}},created:function(){this.fetchData()},methods:{accessFileter:function(e){return Object(z["b"])({path:e})},optionsFilter:function(e,t){return t?e.filter((function(e){return Object(z["b"])(e)&&"5"!==e.value})):e.filter((function(e){return Object(z["b"])(e)&&"4"!==e.value}))},confirmRecharge:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a,n,i,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.loadingConfirm=!0,this.disabledConfirm=!0,!(parseFloat(this.recharge.number)<=0)){e.next=6;break}return this.loadingConfirm=!1,this.disabledConfirm=!1,e.abrupt("return",this.$message.error("充值数量有误"));case 6:return t={id:this.recharge.id,type:this.recharge.type,number:this.recharge.number},"1"!==this.recharge.type&&"3"!==this.recharge.type||(t.number=100*t.number),e.next=10,Object(l["r"])(t);case 10:if(a=e.sent,n=a.status,i=a.msg,0===n){e.next=17;break}return this.loadingConfirm=!1,this.disabledConfirm=!1,e.abrupt("return",this.$message.error(i));case 17:this.fetchData(),this.dialogChange=!1,this.$message.success(i),this.list=this.list.map((function(e){return e.id.toString()===r.recharge.id&&"2"===r.recharge.type&&(e.card+=parseInt(t.number)),e})),this.loadingConfirm=!1,this.disabledConfirm=!1;case 23:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirmChangePhone:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a,n,i,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("mo:",this.changePhone),""!==this.changePhone.phone){e.next=3;break}return e.abrupt("return",this.$message.error("请输入手机号码"));case 3:return t={phone:"86E"+this.changePhone.phone,id:this.changePhone.id},e.next=6,Object(l["a"])(t);case 6:if(a=e.sent,n=a.status,i=a.msg,0===n){e.next=11;break}return e.abrupt("return",this.$message.error(i));case 11:this.$message.success("更改成功"),this.list=this.list.map((function(e){return e.id.toString()===r.changePhone.id&&(e.phone="86E"+r.changePhone.phone),e})),this.dialogPhone=!1;case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirmChangePwd:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.changePwd.password){e.next=2;break}return e.abrupt("return",this.$message.error("请输入新密码"));case 2:return e.next=4,Object(l["c"])(this.changePwd);case 4:if(t=e.sent,a=t.status,n=t.msg,0===a){e.next=9;break}return e.abrupt("return",this.$message.error(n));case 9:this.$message.success("更改成功"),this.dialogPwd=!1;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirmChangePid:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,a,n,i,r,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!==this.changePid.pid){e.next=2;break}return e.abrupt("return",this.$message.error("请输入上级ID"));case 2:t=!1,e.t0=regeneratorRuntime.keys(this.list);case 4:if((e.t1=e.t0()).done){e.next=11;break}if(a=e.t1.value,this.list[a].id.toString()!==this.changePid.id||this.list[a].uid.toString()!==this.changePid.pid){e.next=9;break}return t=!0,e.abrupt("break",11);case 9:e.next=4;break;case 11:if(!t){e.next=13;break}return e.abrupt("return",this.$message.error("不能把上级ID设置给本用户"));case 13:if(this.changePid.pid!==this.currPid){e.next=15;break}return e.abrupt("return",this.$message.error("你已经设置该代理ID"));case 15:return e.next=17,Object(l["b"])(this.changePid);case 17:if(n=e.sent,i=n.status,r=n.msg,0===i){e.next=22;break}return e.abrupt("return",this.$message.error(r));case 22:this.list=this.list.map((function(e){return e.id.toString()===s.changePid.id&&(e.pid=s.changePid.pid),e})),this.$message.success("更改成功"),this.dialogPid=!1;case 25:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),clearData:function(){this.query=Object.assign({},N),this.QueryPhone=""},handleHistory:function(e){this.userId=e,this.recharge.type=0,this.dialogHistory=!0},handleGoldChangeHistory:function(e){this.userId=e,this.dialogGoldChangeHistory=!0},rechargeType:function(){this.recharge.number=0},handleSelUpdate:function(){var e=this,t=function(t){switch(e.values[t]){case"1":Object(s["g"])().then((function(t){e.gold=t.data.gold/100,e.card=t.data.card})),e.recharge.id=t,e.dialogChange=!0;break;case"2":e.list.map((function(a){a.id.toString()===t&&(e.currPhone=a.phone)})),e.changePhone.id=t,e.changePhone.phone="",e.dialogPhone=!0;break;case"3":e.dialogPwd=!0,e.list.map((function(a){a.id.toString()===t&&(e.currPhone=a.phone)})),e.changePwd.id=t,e.changePwd.password="";break;case"4":o["MessageBox"].confirm("请问要解锁当前账户吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["d"])({status:0,id:t}).then((function(a){if(0!==a.status)return e.$message.error(a.data.msg);e.list.map((function(e){e.id.toString()===t&&(e.status=0)}))}))})).catch((function(){console.log("取消")}));break;case"5":o["MessageBox"].confirm("请问要关闭当前账户吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["d"])({status:1,id:t}).then((function(a){if(0!==a.status)return e.$message.error(a.data.msg);e.list.map((function(e){e.id.toString()===t&&(e.status=1)}))}))})).catch((function(){console.log("取消")}));break;case"6":e.dialogPid=!0,e.list.map((function(a){a.id.toString()===t&&(e.currPid=a.pid,e.changePid.uid=a.uid)})),e.changePid.id=t,e.changePid.pid="";break}};for(var a in this.values)t(a);this.values=[]},showCreatedTimes:function(){this.createdTimes=this.createdTimes+1},serachUser:function(){this.page=1,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.query.page=this.page,this.query.size=this.size,this.query.phone="",this.QueryPhone&&(this.query.phone="86E"+this.QueryPhone),Object(l["l"])(this.query).then((function(t){e.list=t.data.user,e.total=t.data.total,e.listLoading=!1})).catch((function(){e.listLoading=!1}))},sortChange:function(e){this.query.columnName=e.prop,this.query.orderName=e.order,this.fetchData()},exportClick:function(){var e=this;this.loadingData=!0,Object(l["g"])(this.query).then((function(t){0===t.status?(window.location.href=t.data.url,e.loadingData=!1):(e.$message.error("导出失败!"),e.loadingData=!1)})).catch((function(){}))},readClick:function(e){var t=this;this.loadingReadGold=!0,Object(l["m"])({uid:e.uid,nickName:e.nickname}).then((function(e){t.loadingReadGold=!1,0===e.status?t.balanceInfo="该用户真人金币:"+e.data/100:t.balanceInfo=e.msg})).catch((function(){}))},deductClick:function(e){this.dialogRealityBalance=!0,this.realityBalance=e},realityBalanceClick:function(e){var t=this,a=this.realityBalance.number;""!==a?isNaN(a)?this.$message({showClose:!0,message:"请输入有效的金币数量",type:"error"}):(this.loadingDeductReality=!0,Object(l["f"])({uid:this.realityBalance.uid,nickName:this.realityBalance.nickname,number:100*parseFloat(a)}).then((function(e){t.loadingDeductReality=!1,0===e.status?0===e.data.code?(t.$message({showClose:!0,message:"操作成功",type:"success"}),t.dialogRealityBalance=!1,t.realityBalance.number=""):t.$message({showClose:!0,message:e.data.msg,type:"error"}):t.$message({showClose:!0,message:e.msg,type:"error"})})).catch((function(){}))):this.$message({showClose:!0,message:"请输入数量",type:"error"})},dialogRealityClose:function(){this.loadingDeductReality=!1,this.realityBalance.number=""}}},T=q,Q=(a("2c7c"),Object(p["a"])(T,n,i,!1,null,"186fde45",null));t["default"]=Q.exports}}]);