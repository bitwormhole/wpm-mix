"use strict";(self["webpackChunkwpm_station_vue"]=self["webpackChunkwpm_station_vue"]||[]).push([[302],{3302:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(3396);function a(e,t,r,a,o,i){const s=(0,n.up)("MyClient");return(0,n.wg)(),(0,n.j4)(s)}const o={class:"box-outer"},i={class:"box-inner"};function s(e,t,r,a,s,c){const l=(0,n.up)("MyFilter"),u=(0,n.up)("MyPager"),p=(0,n.up)("MyTable"),d=(0,n.up)("MyStateLoader"),h=(0,n.up)("HomeFrame");return(0,n.wg)(),(0,n.j4)(h,{config:c.theFrameConfig,onAction:c.handleAction},{default:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n._)("div",i,[(0,n.Wm)(l,{class:"clientbox"}),(0,n.Wm)(u,{class:"clientbox"}),(0,n.Wm)(p,{class:"clientbox"}),(0,n.Wm)(d)])])])),_:1},8,["config","onAction"])}var c=r(7139);function l(e,t,r,a,o,i){const s=(0,n.up)("el-button"),l=(0,n.up)("el-table-column"),u=(0,n.up)("MyFileState"),p=(0,n.up)("el-table");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(p,{data:i.items},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{prop:"name",label:"名称",sortable:""},{default:(0,n.w5)((e=>[(0,n.Wm)(s,{type:"primary",link:"",title:e.row.full_path},{default:(0,n.w5)((()=>[(0,n.Uk)((0,c.zw)(e.row.name),1)])),_:2},1032,["title"])])),_:1}),(0,n.Wm)(l,{prop:"project_type_name",label:"类型",sortable:""}),(0,n.Wm)(l,{prop:"state",label:"状态"},{default:(0,n.w5)((e=>[(0,n.Wm)(u,{code:e.row.state},null,8,["code"])])),_:1}),(0,n.Wm)(l,{label:"操作",width:"170px"})])),_:1},8,["data"])])}var u=r(3312),p={name:"ProjectTable",components:{MyFileState:u.Z},data(){return{}},computed:{items(){return this.$store.getters["project/listCurrentPage"]}},methods:{fetch(){this.$store.dispatch("project/fetch")}},mounted(){this.fetch()}},d=r(89);const h=(0,d.Z)(p,[["render",l]]);var m=h;const g={class:"pager-box"};function f(e,t,r,a,o,i){const s=(0,n.up)("el-pagination");return(0,n.wg)(),(0,n.iD)("div",g,[(0,n.Wm)(s,{"current-page":i.currentPage,"page-size":i.pageSize,"page-sizes":[5,10,20,50,100,200,500],background:o.background,layout:"total, sizes, prev, pager, next",total:i.theCountItemsTotal,onSizeChange:i.handleSizeChange,onCurrentChange:i.handleCurrentChange},null,8,["current-page","page-size","background","total","onSizeChange","onCurrentChange"])])}var y={name:"home-project-pager",computed:{theCountItemsTotal(){return this.$store.getters["project/total"]},pageSize(){return this.$store.getters["project/pageSize"]},currentPage(){return this.$store.getters["project/currentPage"]}},data(){return{background:!0}},methods:{handleSizeChange(e){let t=e,r=0;this.$store.commit("project/update",{size:t,index:r})},handleCurrentChange(e){let t=e-1;this.$store.commit("project/update",{index:t})}}};const v=(0,d.Z)(y,[["render",f]]);var b=v;function C(e,t,r,a,o,i){const s=(0,n.up)("SearchBox");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(s,{ref:"theSearchBox",config:o.config,onAction:i.handleAction},null,8,["config","onAction"])])}var w=r(1195);function j(){}var _={name:"home-project-filter",components:{SearchBox:w.Z},data(){const e={searchCategory:"工程项目"};return{config:e}},methods:{handleAction(e){let t=e.name;"applyFilter"==t&&this.handleApplyFilter(e)},handleApplyFilter(e){let t=e.value;this.$store.commit("project/update",{filter:t})},init(e){j(e)}},mounted(){this.init("abc123")}};const x=(0,d.Z)(_,[["render",C]]);var S=x;function z(e,t,r,a,o,i){return(0,n.wg)(),(0,n.iD)("div")}var M={name:"home-project-state-loader",computed:{stringifyCurrentPageIds(){return this.$store.getters["project/stringifyCurrentPageIds"]}},watch:{stringifyCurrentPageIds(e){this.$store.dispatch("project/fetchByIds",{value:e})}}};const W=(0,d.Z)(M,[["render",z]]);var F=W,P={name:"home-projects-index",components:{MyTable:m,MyPager:b,MyFilter:S,MyStateLoader:F},computed:{theFrameConfig(){return{pager:!1,home:!0,nav:!0,search:!1,searchCategory:"工程项目"}}},data(){return{}},methods:{handleAction(e){let t=e.name;"refresh"==t?this.fetch():"add"==t?this.add():"applyFilter"==t?this.applyFilter(e.value):"open-item-more"==t?this.openItemMore(e):console.warn("unsupported action: "+t)},fetch(){this.$store.dispatch("local_repository/fetch")}},mounted(){this.fetch()}};const $=(0,d.Z)(P,[["render",s],["__scopeId","data-v-67ab3350"]]);var k=$,A={name:"HomeProjects",components:{MyClient:k}};const I=(0,d.Z)(A,[["render",a]]);var Z=I}}]);
//# sourceMappingURL=302.ec815bd2.js.map