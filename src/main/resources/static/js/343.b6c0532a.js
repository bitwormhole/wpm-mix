"use strict";(self["webpackChunkwpm_station_vue"]=self["webpackChunkwpm_station_vue"]||[]).push([[343],{9698:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(3396),n=a(7139),i=a(9242);const o={class:"utils-batch-tool-bar"},s={class:"the-count-box"};function r(e,t,a,r,u,d){return(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("span",null,(0,n.zw)(a.title),1),(0,l._)("span",s,(0,n.zw)(d.count)+" 项 ",1),(0,l.WI)(e.$slots,"default",{},void 0,!0)],512)),[[i.F8,!d.hide]])}var u={name:"utils-batch-tool-bar",computed:{items(){let e=this.modelValue;return null==e&&(e=[]),e},count(){let e=this.items.length;return null==e?0:e},hide(){return!!this.hideEmpty&&this.count<=0}},props:{modelValue:Array,title:String,hideEmpty:Boolean}},d=a(89);const m=(0,d.Z)(u,[["render",r],["__scopeId","data-v-5c44dc71"]]);var c=m},2343:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var l=a(3396);function n(e,t,a,n,i,o){const s=(0,l.up)("ClientViewIndex"),r=(0,l.up)("AdminFrame");return(0,l.wg)(),(0,l.j4)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s)])),_:1})}const i=e=>((0,l.dD)("data-v-be2d93de"),e=e(),(0,l.Cn)(),e),o={class:"settings-mediae-index-page"},s=i((()=>(0,l._)("h1",null,"媒体文件",-1)));function r(e,t,a,n,i,r){const u=(0,l.up)("MyToolbar"),d=(0,l.up)("MyPager"),m=(0,l.up)("MyTable"),c=(0,l.up)("MyUpImageDialog");return(0,l.wg)(),(0,l.iD)("div",o,[s,(0,l.Wm)(u,{onAction:r.handleAction},null,8,["onAction"]),(0,l.Wm)(d,{class:"settings-mediae-index-pager"}),(0,l.Wm)(m),(0,l.Wm)(c,{modelValue:i.displayUploadDialog,"onUpdate:modelValue":t[0]||(t[0]=e=>i.displayUploadDialog=e)},null,8,["modelValue"])])}var u=a(4870),d=a(2748);const m={class:"toolbar"},c={name:"settings-mediae-toolbar",methods:{fire(e){let t={name:e};this.$emit("action",t)},insert(){this.fire("insert")},refresh(){this.fire("refresh")},importPresets(){this.fire("import-presets")}}};var p=Object.assign(c,{setup(e){return(e,t)=>{const a=(0,l.up)("el-icon"),n=(0,l.up)("el-button");return(0,l.wg)(),(0,l.iD)("div",m,[(0,l.Wm)(n,{type:"default",onClick:e.refresh},{default:(0,l.w5)((()=>[(0,l.Wm)(a,null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,u.SU)(d.hYj))])),_:1}),(0,l.Uk)(" 刷新 ")])),_:1},8,["onClick"]),(0,l.Wm)(n,{type:"default",onClick:e.insert},{default:(0,l.w5)((()=>[(0,l.Wm)(a,null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,u.SU)(d.v37))])),_:1}),(0,l.Uk)(" 添加 ")])),_:1},8,["onClick"]),(0,l.Wm)(n,{type:"default",onClick:e.importPresets},{default:(0,l.w5)((()=>[(0,l.Wm)(a,null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,u.SU)(d.v37)),(0,l.Uk)(),(0,l.Wm)((0,u.SU)(d.v37))])),_:1}),(0,l.Uk)(" 导入预置资源 ")])),_:1},8,["onClick"])])}}}),h=a(89);const g=(0,h.Z)(p,[["__scopeId","data-v-0ce938ae"]]);var f=g;function v(e,t,a,n,i,o){const s=(0,l.up)("el-pagination");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(s,{"current-page":i.currentPage,"onUpdate:currentPage":t[0]||(t[0]=e=>i.currentPage=e),"page-size":i.pageSize,"onUpdate:pageSize":t[1]||(t[1]=e=>i.pageSize=e),"page-sizes":[5,10,20,50,100,200,500],background:i.background,layout:"total, sizes, prev, pager, next",total:o.theCountItemsTotal,onSizeChange:o.handleSizeChange,onCurrentChange:o.handleCurrentChange},null,8,["current-page","page-size","background","total","onSizeChange","onCurrentChange"])])}var w={name:"settings-mediae-pager",computed:{theCountItemsTotal(){return this.$store.getters["media/total"]}},data(){return{currentPage:1,pageSize:10,background:!0}},methods:{handleSizeChange(e){let t=e,a=0;this.$store.commit("media/update",{index:a,size:t})},handleCurrentChange(e){let t=e-1;this.$store.commit("media/update",{index:t})}}};const b=(0,h.Z)(w,[["render",v]]);var k=b;const _=["src"];function y(e,t,a,n,i,o){const s=(0,l.up)("el-table-column"),r=(0,l.up)("el-button"),u=(0,l.up)("el-table"),d=(0,l.up)("MyBatch"),m=(0,l.up)("MyItemDetailDialog");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(u,{data:o.items,onSelectionChange:o.handleSelectionChange},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{type:"selection"}),(0,l.Wm)(s,{prop:"url",label:"",width:"90"},{default:(0,l.w5)((e=>[(0,l._)("img",{class:"media-item-image",src:e.row.url},null,8,_)])),_:1}),(0,l.Wm)(s,{prop:"label",label:"名称",sortable:""}),(0,l.Wm)(s,{prop:"content_type",label:"类型",sortable:""}),(0,l.Wm)(s,{prop:"size",label:"大小",sortable:""}),(0,l.Wm)(s,{label:"操作",width:"170px"},{default:(0,l.w5)((e=>[(0,l.Wm)(r,{link:"",type:"primary",onClick:t=>o.handleClickItemDetail(e.row)},{default:(0,l.w5)((()=>[(0,l.Uk)("详情")])),_:2},1032,["onClick"]),(0,l.Wm)(r,{link:"",type:"danger",onClick:t=>o.handleClickRemoveItem(e.row)},{default:(0,l.w5)((()=>[(0,l.Uk)("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),(0,l.Wm)(d,{modelValue:i.selectedItems,"onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedItems=e)},null,8,["modelValue"]),(0,l.Wm)(m,{modelValue:i.displayDetailDialog,"onUpdate:modelValue":t[1]||(t[1]=e=>i.displayDetailDialog=e),target:e.theDetailDialogItem},null,8,["modelValue","target"])])}var C=a(2655);const W={style:{"margin-top":"10px"}};function U(e,t,a,n,i,o){const s=(0,l.up)("el-button"),r=(0,l.up)("BatchToolBar");return(0,l.wg)(),(0,l.iD)("div",W,[(0,l.Wm)(r,{modelValue:o.items,"onUpdate:modelValue":t[0]||(t[0]=e=>o.items=e),title:"批处理",hideEmpty:!0},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{type:"danger",onClick:o.handleDelete},{default:(0,l.w5)((()=>[(0,l.Uk)(" 删除 ")])),_:1},8,["onClick"]),(0,l.Wm)(s,{type:"primary",onClick:o.handlePutToBuffer},{default:(0,l.w5)((()=>[(0,l.Uk)(" 存入缓冲区 ")])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])}var D=a(9698),I={name:"settings-intent-templates-batch",components:{BatchToolBar:D.Z},computed:{items(){return this.modelValue}},methods:{handleDelete(){let e=this.items;this.$store.dispatch("media/remove",{items:e})},handlePutToBuffer(){let e="mediae",t={};t[e]=this.items,this.$store.dispatch("jsonbuffer/put",{vo:t})}},props:{modelValue:Array}};const z=(0,h.Z)(I,[["render",U]]);var S=z,V=a(7139);function x(e,t,a,n,i,o){const s=(0,l.up)("el-form-item"),r=(0,l.up)("el-form"),u=(0,l.up)("ElButton"),d=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.j4)(d,{title:"详情"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{label:"a"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,V.zw)(1))])),_:1}),(0,l.Wm)(s,{label:"b"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,V.zw)(2))])),_:1})])),_:1}),(0,l._)("div",null,[(0,l.Wm)(u,{type:"default",onClick:o.close},{default:(0,l.w5)((()=>[(0,l.Uk)("关闭")])),_:1},8,["onClick"])])])),_:1})}var T=a(6465),B={name:"settings-local-repository-item-detail-dialog",components:{ElButton:T.mi},methods:{close(){this.$emit("update:modelValue",!1)}}};const M=(0,h.Z)(B,[["render",x]]);var P=M,$={name:"settings-mediae-table",components:{MyBatch:S,MyItemDetailDialog:P},computed:{items(){return this.$store.getters["media/list"]}},data(){return{selectedItems:[],theDetailDialogTarget:{},displayDetailDialog:!1}},methods:{handleClickItemDetail(){},handleClickRemoveItem(e){let t="移除媒体文件",a="确定要移除 ["+e.name+"] 这个媒体文件吗？",l="注意：移除该文件可能会导致引用它的内容显示不正常！";C.T.confirm(a+l,t,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.removeItem(e)})).catch((()=>{}))},handleClickItemDetail(e){this.theDetailDialogItem=e,this.displayDetailDialog=!0},removeItem(e){this.$store.dispatch("media/remove",{item:e})},handleSelectionChange(e){this.selectedItems=e}}};const A=(0,h.Z)($,[["render",y],["__scopeId","data-v-0699b50c"]]);var Z=A,j=(a(7658),a(7178));const E=["src"];function F(){}const R={name:"update-up-dialog",data(){return{imageUrl:"",vo:{},item:{},fileprops:[{name:"",value:""}]}},methods:{handleAvatarSuccess(e,t){F(e);let a=e,l=a.mediae[0];this.vo=a,this.item=l,this.fileprops=this.makeFileProps(l),this.imageUrl=URL.createObjectURL(t.raw)},makeFileProps(e){const t={name:"文件名",size:"大小",content_type:"类型",sha256sum:"SHA-256"};let a=[];for(var l in t){let n=t[l],i=e[l];a.push({name:n,value:i})}return a},beforeAvatarUpload(e){return this.acceptType(e.type)?!(e.size/1024/1024>2)||(j.z8.error("文件太大了，最多支持 2MB!"),!1):(j.z8.error("不支持的文件格式!"),console.warn("不支持的文件格式: "+e.type),!1)},acceptType(e){const t=["image/jpeg","image/png","image/gif","image/svg","image/webp","image/svg+xml"];for(var a in t){let l=t[a];if(l==e)return!0}return!1},save(){let e=this.item;this.$store.dispatch("media/insert",{item:e}).then((()=>{this.close()}))},cancel(){this.close()},close(){this.$emit("update:modelValue",!1)}}};var O=Object.assign(R,{setup(e){return(e,t)=>{const a=(0,l.up)("el-icon"),n=(0,l.up)("el-upload"),i=(0,l.up)("el-col"),o=(0,l.up)("el-table-column"),s=(0,l.up)("el-table"),r=(0,l.up)("el-row"),m=(0,l.up)("el-button"),c=(0,l.up)("el-dialog");return(0,l.wg)(),(0,l.j4)(c,{title:"上传图片"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{span:12},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{class:"avatar-uploader up-box",action:"/upload",drag:"","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload},{default:(0,l.w5)((()=>[e.imageUrl?((0,l.wg)(),(0,l.iD)("img",{key:0,src:e.imageUrl,class:"avatar"},null,8,E)):((0,l.wg)(),(0,l.j4)(a,{key:1,class:"avatar-uploader-icon"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,u.SU)(d.v37))])),_:1}))])),_:1},8,["on-success","before-upload"])])),_:1}),(0,l.Wm)(i,{span:12},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{class:"up-box",data:e.fileprops,border:""},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{prop:"name",label:"属性"}),(0,l.Wm)(o,{prop:"value",label:"值"})])),_:1},8,["data"])])),_:1})])),_:1}),(0,l._)("div",null,[(0,l.Wm)(m,{type:"success",onClick:e.save},{default:(0,l.w5)((()=>[(0,l.Uk)(" 保存 ")])),_:1},8,["onClick"]),(0,l.Wm)(m,{type:"default",onClick:e.cancel},{default:(0,l.w5)((()=>[(0,l.Uk)(" 取消 ")])),_:1},8,["onClick"])])])),_:1})}}});const L=(0,h.Z)(O,[["__scopeId","data-v-7061dd8c"]]);var H=L,Y={name:"settings-mediae-index",components:{MyToolbar:f,MyTable:Z,MyUpImageDialog:H,MyPager:k},data(){return{displayUploadDialog:!1}},methods:{fetch(){this.$store.dispatch("media/fetch",{all:1})},upload(){this.displayUploadDialog=!0},importPresets(){this.$store.dispatch("media/import_presets",{})},handleAction(e){let t=e.name;"refresh"==t?this.fetch():"import-presets"==t?this.importPresets():"insert"==t&&this.upload()}},mounted(){this.fetch()}};const q=(0,h.Z)(Y,[["render",r],["__scopeId","data-v-be2d93de"]]);var G=q,J={name:"SettingsMediaeView",components:{ClientViewIndex:G}};const K=(0,h.Z)(J,[["render",n]]);var N=K}}]);
//# sourceMappingURL=343.b6c0532a.js.map