"use strict";(self["webpackChunkwpm_station_vue"]=self["webpackChunkwpm_station_vue"]||[]).push([[479],{5479:function(t,o,s){s.r(o),s.d(o,{default:function(){return c}});var e=s(3396);const i=t=>((0,e.dD)("data-v-dccb907a"),t=t(),(0,e.Cn)(),t),n=i((()=>(0,e._)("h1",{class:"title"},"WPM:初始化设置",-1))),r={class:"options"};function d(t,o,s,i,d,a){return(0,e.wg)(),(0,e.iD)("div",null,[n,(0,e._)("div",r,[(0,e._)("div",{class:"option",onClick:o[0]||(o[0]=(...t)=>a.doImportPreset&&a.doImportPreset(...t))},"导入预置设置 (默认)"),(0,e._)("div",{class:"option",onClick:o[1]||(o[1]=(...t)=>a.doImportSaved&&a.doImportSaved(...t))},"导入之前导出的设置"),(0,e._)("div",{class:"option",onClick:o[2]||(o[2]=(...t)=>a.doNothing&&a.doNothing(...t))},"不导入任何设置，直接使用")])])}s(7658);var a={name:"init-setup-or-import",data(){return{}},methods:{doImportSaved(){this.$router.push("/settings/backups")},doImportPreset(){this.$router.push("/setup")},doNothing(){this.$store.dispatch("setup/skipall",{}).then((()=>{this.$router.push("/")}))}},mounted(){}},p=s(89);const u=(0,p.Z)(a,[["render",d],["__scopeId","data-v-dccb907a"]]);var c=u}}]);
//# sourceMappingURL=479.b612764d.js.map