(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b7c722c"],{"26b0":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-row",[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"filter-container"},[i("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("新增页面")])],1)])],1),t._v(" "),i("el-tree",{ref:"tree",attrs:{data:t.renderList,"default-expanded-keys":t.renderIDs,"node-key":"id","expand-on-click-node":!1,"render-content":t.renderContent}}),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible,title:t.dialogTitle},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-form",{attrs:{model:t.api,"label-width":"80px","label-position":"left"}},[i("el-form-item",{attrs:{label:"名称"}},[i("el-input",{attrs:{placeholder:"名称"},model:{value:t.api.title,callback:function(e){t.$set(t.api,"title",e)},expression:"api.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"路径"}},[i("el-input",{attrs:{placeholder:"路径"},model:{value:t.api.path,callback:function(e){t.$set(t.api,"path",e)},expression:"api.path"}})],1)],1),t._v(" "),i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.confirmApi}},[t._v("确定")])],1)],1)],1)},a=[],r=(i("ac4d"),i("8a81"),i("ac6a"),i("96cf"),i("3b8d")),s=i("b775");function l(){return Object(s["a"])({url:"/v1/api/system/index",method:"get"})}function p(t){return Object(s["a"])({url:"/v1/api/system/editApi",method:"post",data:t})}var c={id:"0",title:"",path:"",pid:"0",isMenu:"1"},o={data:function(){return{api:Object.assign({},c),list:[],dialogVisible:!1,dialogTitle:"新建页面",dialogType:0}},computed:{renderList:function(){return this.list},renderIDs:function(){return this.list.map((function(t){if(0===t.pid)return t.id}))}},created:function(){this.getApi()},methods:{getApi:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:e=t.sent,this.list=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleAdd:function(){this.dialogTitle="新建页面",this.dialogType=0,this.api=Object.assign({},c),this.dialogVisible=!0},handleAppend:function(t,e){switch(this.dialogVisible=!0,this.dialogType=e,this.api=Object.assign({},c),e){case 0:this.dialogTitle="新建 “"+t.title+"” 的子页面";break;case 1:this.api.isMenu="0",this.api.path="/v1/api"+t.path,this.dialogTitle="新建 “"+t.title+"” 页面的新接口";break;case 2:this.dialogTitle="修改 “"+t.title+"”",this.api.id=t.id+"",this.api.title=t.title,this.api.path=t.path;break}this.api.pid=""+t.id},updateTree:function(t,e){var i=!0,n=!1,a=void 0;try{for(var r,s=t[Symbol.iterator]();!(i=(r=s.next()).done);i=!0){var l=r.value;l.children&&(l.children=this.updateTree(l.children,e)),"0"===this.api.id?this.api.pid===l.id+""&&(l.children||this.$set(l,"children",[]),e.isMenu+""==="0"&&(e.label=this.api.title+"  API路径:"+this.api.path),l.children.push(e)):this.api.id===l.id+""&&(l.isMenu+""==="0"?l.label=this.api.title+"  API路径:"+this.api.path:l.label=this.api.title,l.title=this.api.title,l.path=this.api.path)}}catch(p){n=!0,a=p}finally{try{i||null==s.return||s.return()}finally{if(n)throw a}}return t},confirmApi:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p(this.api);case 2:if(e=t.sent,i=e.data,n=e.status,a=e.msg,0===n){t.next=8;break}return t.abrupt("return",this.$message.error(a));case 8:if(this.dialogVisible=!1,"0"===this.api.pid){t.next=12;break}return this.list=this.updateTree(this.list,i),t.abrupt("return");case 12:if("0"!==this.api.pid){t.next=15;break}return this.list=this.list.concat(i),t.abrupt("return");case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),renderContent:function(t,e){var i=this,n=e.node,a=e.data;e.store;return 0===a.pid?a.children?0===a.children[0]["isMenu"]?t("span",{class:"custom-tree-node"},[t("span",[n.label]),t("span",[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return i.handleAppend(a,1)}}},["添加接口"]),t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return i.handleAppend(a,2)}}},["修改"])])]):t("span",{class:"custom-tree-node"},[t("span",[n.label]),t("span",[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return i.handleAppend(a,0)}}},["添加子页面"]),t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return i.handleAppend(a,2)}}},["修改"])])]):t("span",{class:"custom-tree-node"},[t("span",[n.label]),t("span",[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return i.handleAppend(a,0)}}},["添加子页面"]),t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return i.handleAppend(a,1)}}},["添加接口"]),t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return i.handleAppend(a,2)}}},["修改"])])]):0===a.isMenu?t("span",{class:"custom-tree-node"},[t("span",[n.label]),t("span",[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return i.handleAppend(a,2)}}},["修改"])])]):t("span",{class:"custom-tree-node"},[t("span",[n.label]),t("span",[t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return i.handleAppend(a,1)}}},["添加接口"]),t("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return i.handleAppend(a,2)}}},["修改"])])])}}},u=o,d=(i("6304"),i("2877")),h=Object(d["a"])(u,n,a,!1,null,null,null);e["default"]=h.exports},6304:function(t,e,i){"use strict";var n=i("af4c"),a=i.n(n);a.a},af4c:function(t,e,i){}}]);