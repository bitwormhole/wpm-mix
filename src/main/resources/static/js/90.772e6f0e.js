"use strict";(self["webpackChunkwpm_station_vue"]=self["webpackChunkwpm_station_vue"]||[]).push([[90],{6090:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var i=n(3396);function a(t,e,n,a,l,o){const s=(0,i.up)("IntentIndex"),d=(0,i.up)("AdminFrame");return(0,i.wg)(),(0,i.j4)(d,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s)])),_:1})}const l=t=>((0,i.dD)("data-v-1365f81f"),t=t(),(0,i.Cn)(),t),o={class:"client"},s=l((()=>(0,i._)("h1",null,"命令模板",-1)));function d(t,e,n,a,l,d){const r=(0,i.up)("MyToolbar"),m=(0,i.up)("MyTable"),u=(0,i.up)("MyEditor");return(0,i.wg)(),(0,i.iD)("div",o,[s,(0,i.Wm)(r,{onCommand:d.handleCommand},null,8,["onCommand"]),(0,i.Wm)(m),(0,i.Wm)(u,{intent:l.intentEditor},null,8,["intent"])])}function r(t,e,n,a,l,o){const s=(0,i.up)("el-table-column"),d=(0,i.up)("el-table");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(d,{data:o.items},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{prop:"id",label:"ID"}),(0,i.Wm)(s,{label:"aaa"}),(0,i.Wm)(s,{label:"bbb"}),(0,i.Wm)(s,{label:"ccc"})])),_:1},8,["data"])])}var m={name:"IntentTable",data(){return{}},computed:{items(){return this.$store.getters["intent/list"]}}},u=n(89);const c=(0,u.Z)(m,[["render",r]]);var h=c,p=n(4870),f=n(2748);const w={name:"IntentToolbar",mounted(){this.fetch()},methods:{fetch(){this.$store.dispatch("intent/fetch")},handleClickRefresh(){this.fetch()},handleClickInsert(){this.fireCommand("insert")},fireCommand(t){this.$emit("command",{name:t})}}};var I=Object.assign(w,{setup(t){return(t,e)=>{const n=(0,i.up)("el-icon"),a=(0,i.up)("el-button");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(a,{type:"default",onClick:t.handleClickRefresh},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[(0,i.Wm)((0,p.SU)(f.hYj))])),_:1}),(0,i.Uk)("刷新")])),_:1},8,["onClick"]),(0,i.Wm)(a,{type:"primary",onClick:t.handleClickInsert},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[(0,i.Wm)((0,p.SU)(f.v37))])),_:1}),(0,i.Uk)("添加")])),_:1},8,["onClick"])])}}});const b=I;var W=b;function v(t,e,n,a,l,o){const s=(0,i.up)("el-form-item"),d=(0,i.up)("el-form"),r=(0,i.up)("el-button"),m=(0,i.up)("el-dialog");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m,{modelValue:l.showDialog,"onUpdate:modelValue":e[1]||(e[1]=t=>l.showDialog=t),title:l.title},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{"label-width":"200px"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{label:"aaa"}),(0,i.Wm)(s)])),_:1}),(0,i._)("div",null,[(0,i.Wm)(r,{type:"success"},{default:(0,i.w5)((()=>[(0,i.Uk)("保存")])),_:1}),(0,i.Wm)(r,{type:"default",onClick:e[0]||(e[0]=t=>l.showDialog=!1)},{default:(0,i.w5)((()=>[(0,i.Uk)("取消")])),_:1})])])),_:1},8,["modelValue","title"])])}var C={name:"ProjectEditor",props:{intent:Object},data(){return{item:{},showDialog:!1,title:"[untitle]"}},watch:{intent(t){let e=t.action;"insert"==e?this.insertNewItem(t.data):"edit"==e&&this.editItem()}},methods:{insertNewItem(t){this.item=t,this.title="添加命令模板",this.showDialog=!0},editItem(t){this.item=t,this.title="编辑命令模板",this.showDialog=!0}}};const _=(0,u.Z)(C,[["render",v]]);var k=_;function g(t,e){this.context=t,this.date=new Date,null!=e&&(this.action=e.action,this.data=e.data,this.location=e.location,this.params=e.params,this.sender=e.sender)}g.prototype={};var D={name:"Intent",NewIntent(t,e){return new g(t,e)}},y={name:"IntentIndex",components:{MyEditor:k,MyTable:h,MyToolbar:W},data(){return{items:[],intentEditor:{}}},methods:{handleCommand(t){let e=t.name;"insert"==e?this.doInsertItem():"edit"==e?this.doEditItem():console.warn("bad command name:"+e)},doEditItem(){let t=D.NewIntent(this,{});this.intentEditor=t},doInsertItem(){let t="insert",e={},n=D.NewIntent(this,{action:t,data:e});this.intentEditor=n}}};const E=(0,u.Z)(y,[["render",d],["__scopeId","data-v-1365f81f"]]);var U=E,M={name:"IntentView",components:{IntentIndex:U}};const T=(0,u.Z)(M,[["render",a]]);var j=T}}]);
//# sourceMappingURL=90.772e6f0e.js.map