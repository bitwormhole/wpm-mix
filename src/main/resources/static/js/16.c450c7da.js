"use strict";(self["webpackChunkwpm_station_vue"]=self["webpackChunkwpm_station_vue"]||[]).push([[16],{5016:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(3396);function s(e,t,n,s,i,l){const o=(0,a.up)("MyChild");return(0,a.wg)(),(0,a.j4)(o)}function i(e,t,n,s,i,l){const o=(0,a.up)("MyApps"),r=(0,a.up)("HomeFrame");return(0,a.wg)(),(0,a.j4)(r,{config:l.theFrameConfig,onAction:l.handleAction},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{value:l.theItems},null,8,["value"])])),_:1},8,["config","onAction"])}n(7658);const l={class:"list"};function o(e,t,n,s,i,o){const r=(0,a.up)("MyItem");return(0,a.wg)(),(0,a.iD)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.value,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"list-item",key:e.id},[(0,a.Wm)(r,{value:e},null,8,["value"])])))),128))])}var r=n(7139);const c={class:"item"},u=["src"],d={class:"title-and-description"},h=["title"],p={class:"description"};function m(e,t,n,s,i,l){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",{class:"icon-box",title:"运行",onClick:t[0]||(t[0]=(...e)=>l.handleRun&&l.handleRun(...e))},[(0,a._)("img",{class:"icon-image",src:n.value.icon},null,8,u)]),(0,a._)("div",d,[(0,a._)("div",{class:"title",title:n.value.path},(0,r.zw)(n.value.title),9,h),(0,a._)("div",p,(0,r.zw)(n.value.description),1)])])}var v={name:"home-exe-item",methods:{handlePopoverShow(){},handleRun(){let e=this.value,t={executable:e},n={intents:[t]};this.$store.dispatch("intent/run",n)}},props:{value:Object}},f=n(89);const g=(0,f.Z)(v,[["render",m],["__scopeId","data-v-3a74d446"]]);var w=g,_={name:"home-exe-list",components:{MyItem:w},props:{value:Array}};const y=(0,f.Z)(_,[["render",o],["__scopeId","data-v-5dd0845e"]]);var b=y,x={name:"home-executable-index",components:{MyApps:b},computed:{theFrameConfig(){return{pager:!1,home:!0,nav:!0,search:!0,searchCategory:"应用"}},theItems(){return this.$store.getters["executable/afterFilter"]}},data(){return{}},methods:{handleAction(e){let t=e.name;"refresh"==t?this.fetch():"add"==t?this.add():"applyFilter"==t?this.applyFilter(e.value):console.warn("unsupported action: "+t)},applyFilter(e){let t=e;this.$store.commit("executable/update",{filter:t})},fetch(){this.$store.dispatch("executable/fetch")},add(){this.$router.push("/settings/executables")}},mounted(){this.fetch()}};const C=(0,f.Z)(x,[["render",i]]);var A=C,F={name:"HomeExecutables",components:{MyChild:A}};const k=(0,f.Z)(F,[["render",s]]);var I=k}}]);
//# sourceMappingURL=16.c450c7da.js.map