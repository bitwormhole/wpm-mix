(self["webpackChunkwpm_station_vue"]=self["webpackChunkwpm_station_vue"]||[]).push([[111],{5581:function(e,t,l){"use strict";var a=l(2109),i=l(1572),o=l(5656),n=Array;a({target:"Array",proto:!0},{with:function(e,t){return i(o(this),n,e,t)}})},7391:function(e,t,l){l(5581)},7967:function(e,t,l){"use strict";l.d(t,{Z:function(){return U}});var a=l(3396),i=l(7139);const o=["src"];function n(e,t,l,n,d,u){const m=(0,a.up)("MySelectorDialog");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",{class:"image-parent",style:(0,i.j5)(u.imageParentStyle),title:"修改",onClick:t[0]||(t[0]=e=>d.displayDialog=!0)},[(0,a._)("img",{class:"image-img",src:u.url,style:(0,i.j5)(u.imageStyle)},null,12,o)],4),(0,a.Wm)(m,{modelValue:d.displayDialog,"onUpdate:modelValue":t[1]||(t[1]=e=>d.displayDialog=e),onChange:u.handleImageSelected},null,8,["modelValue","onChange"])])}function d(e,t,l,i,o,n){const d=(0,a.up)("MySelector"),u=(0,a.up)("el-button"),m=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.j4)(m,{title:"选择图片"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{class:"",onChange:n.handleSelectionChange},null,8,["onChange"]),(0,a._)("div",null,[(0,a.Wm)(u,{type:"primary",onClick:n.onok},{default:(0,a.w5)((()=>[(0,a.Uk)("确定")])),_:1},8,["onClick"]),(0,a.Wm)(u,{type:"default",onClick:n.cancel},{default:(0,a.w5)((()=>[(0,a.Uk)("取消")])),_:1},8,["onClick"])])])),_:1})}const u=e=>((0,a.dD)("data-v-9bb3daa0"),e=e(),(0,a.Cn)(),e),m=u((()=>(0,a._)("div",{class:"searchbox"},null,-1))),s={class:"pager"},r={class:"item-list"},p={class:"list"},c=["title","onClick"],h=["src"],g={class:"item-text"};function f(e,t,l,o,n,d){const u=(0,a.up)("el-pagination");return(0,a.wg)(),(0,a.iD)("div",null,[m,(0,a._)("div",s,[(0,a.Wm)(u,{"current-page":n.currentPage,"onUpdate:currentPage":t[0]||(t[0]=e=>n.currentPage=e),"page-size":n.pageSize,"onUpdate:pageSize":t[1]||(t[1]=e=>n.pageSize=e),"page-sizes":[5,10,20,50,100,200,500],background:n.background,layout:"total, sizes, prev, pager, next",total:d.theCountItemsTotal,onSizeChange:d.handleSizeChange,onCurrentChange:d.handleCurrentChange},null,8,["current-page","page-size","background","total","onSizeChange","onCurrentChange"])]),(0,a._)("div",r,[(0,a._)("ul",p,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.items,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"item",key:e.id,title:e.name,style:(0,i.j5)(d.computeItemStyle(e)),onClick:t=>d.handleClickItem(e)},[(0,a._)("img",{class:"item-image",src:e.url},null,8,h),(0,a._)("div",g,(0,i.zw)(e.label),1)],12,c)))),128))])])])}var w={name:"media-selector",computed:{items(){return this.$store.getters["media/list"]},theCountItemsTotal(){return this.$store.getters["media/total"]}},data(){return{selectedId:0,selectedItem:{},currentPage:1,pageSize:10,background:!0}},methods:{handleClickItem(e){this.selectedId=e.id,this.selectedItem=e,this.$emit("change",e)},computeItemStyle(e){let t=e.id==this.selectedId,l={};return t&&(l.borderWidth="3px",l.borderColor="rgb(61, 139, 255)"),l},fetch(){this.$store.dispatch("lazy/load_mediae")},handleSizeChange(e){let t=e,l=0;this.$store.commit("media/update",{index:l,size:t})},handleCurrentChange(e){let t=e-1;this.$store.commit("media/update",{index:t})}},mounted(){this.fetch()}},_=l(89);const y=(0,_.Z)(w,[["render",f],["__scopeId","data-v-9bb3daa0"]]);var b=y,v={name:"media-selector-dialog",components:{MySelector:b},data(){return{item:{}}},methods:{handleSelectionChange(e){null!=e&&(this.item=e)},onok(){let e=this.item,t=e.id;t<1||(this.$emit("change",e),this.close())},cancel(){this.close()},close(){this.$emit("update:modelValue",!1)}}};const W=(0,_.Z)(v,[["render",d]]);var V=W,k={name:"media-image-select",components:{MySelectorDialog:V},computed:{url(){return this.modelValue},imageStyle(){let e=this.imageHeight,t=this.imageWidth;return{maxHeight:e,maxWidth:t}},imageParentStyle(){let e=this.imageHeight,t=this.imageWidth;return{minHeight:e,minWidth:t}}},data(){return{displayDialog:!1}},methods:{handleImageSelected(e){let t=e.url;this.$emit("update:modelValue",t)}},props:{modelValue:String,imageWidth:String,imageHeight:String}};const C=(0,_.Z)(k,[["render",n],["__scopeId","data-v-2c75f73f"]]);var U=C},3368:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var a=l(3396),i=l(7139);const o=["src"];function n(e,t,l,n,d,u){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",{class:"image-parent",style:(0,i.j5)(u.imageParentStyle)},[(0,a._)("img",{class:"image-img",src:u.url,style:(0,i.j5)(u.imageStyle)},null,12,o)],4)])}var d={name:"media-image-view",components:{},computed:{url(){return this.modelValue},imageStyle(){let e=this.imageHeight,t=this.imageWidth;return{maxHeight:e,maxWidth:t}},imageParentStyle(){let e=this.imageHeight,t=this.imageWidth;return{minHeight:e,minWidth:t}}},data(){return{}},methods:{},props:{modelValue:String,imageWidth:String,imageHeight:String}},u=l(89);const m=(0,u.Z)(d,[["render",n],["__scopeId","data-v-0b43dffa"]]);var s=m},9698:function(e,t,l){"use strict";l.d(t,{Z:function(){return p}});var a=l(3396),i=l(7139),o=l(9242);const n={class:"utils-batch-tool-bar"},d={class:"the-count-box"};function u(e,t,l,u,m,s){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("span",null,(0,i.zw)(l.title),1),(0,a._)("span",d,(0,i.zw)(s.count)+" 项 ",1),(0,a.WI)(e.$slots,"default",{},void 0,!0)],512)),[[o.F8,!s.hide]])}var m={name:"utils-batch-tool-bar",computed:{items(){let e=this.modelValue;return null==e&&(e=[]),e},count(){let e=this.items.length;return null==e?0:e},hide(){return!!this.hideEmpty&&this.count<=0}},props:{modelValue:Array,title:String,hideEmpty:Boolean}},s=l(89);const r=(0,s.Z)(m,[["render",u],["__scopeId","data-v-5c44dc71"]]);var p=r},7111:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return De}});var a=l(3396);function i(e,t,l,i,o,n){const d=(0,a.up)("MyClient"),u=(0,a.up)("AdminFrame");return(0,a.wg)(),(0,a.j4)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d)])),_:1})}const o=e=>((0,a.dD)("data-v-bd53ae4c"),e=e(),(0,a.Cn)(),e),n={class:"index-page"},d=o((()=>(0,a._)("h1",null,"命令模板",-1)));function u(e,t,l,i,o,u){const m=(0,a.up)("MyToolbar"),s=(0,a.up)("MySearch"),r=(0,a.up)("MyPager"),p=(0,a.up)("MyTable"),c=(0,a.up)("MyEditDialog"),h=(0,a.up)("MyMacroListDialog");return(0,a.wg)(),(0,a.iD)("div",n,[d,(0,a.Wm)(m,{onAction:u.handleAction},null,8,["onAction"]),(0,a.Wm)(s,{class:"search-box"}),(0,a.Wm)(r,{class:"pager-box"}),(0,a.Wm)(p,{onAction:u.handleAction},null,8,["onAction"]),(0,a.Wm)(c,{class:"insert-dialog",modelValue:o.displayInsertDialog,"onUpdate:modelValue":t[0]||(t[0]=e=>o.displayInsertDialog=e),method:"POST",onAction:u.handleAction},null,8,["modelValue","onAction"]),(0,a.Wm)(h,{modelValue:o.displayMacroListDialog,"onUpdate:modelValue":t[1]||(t[1]=e=>o.displayMacroListDialog=e)},null,8,["modelValue"])])}var m=l(4870),s=l(2748);const r={class:"toolbar"},p={name:"settings-intent-templates-toolbar",components:{},data(){return{}},methods:{fetch(){this.$store.dispatch("intent_template/fetch")},insert(){this.fireAction("insert")},fireAction(e){let t={name:e};this.$emit("action",t)},handleCommand(e){"IMPORT_PRESET_TEMPLATES"==e&&this.doImportPresetTemplates()},doImportPresetTemplates(){this.$store.dispatch("intent_template/import_preset_templates",{})}},mounted(){this.fetch()}};var c=Object.assign(p,{setup(e){return(e,t)=>{const l=(0,a.up)("el-icon"),i=(0,a.up)("el-button"),o=(0,a.up)("el-dropdown-item"),n=(0,a.up)("el-dropdown-menu"),d=(0,a.up)("el-dropdown");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(i,{type:"default",onClick:e.fetch,title:"刷新"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,m.SU)(s.hYj))])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(i,{type:"default",onClick:e.insert,title:"添加"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,m.SU)(s.v37))])),_:1})])),_:1},8,["onClick"]),(0,a.Wm)(d,{style:{"margin-left":"15px"},onCommand:e.handleCommand},{dropdown:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)(o,{command:"IMPORT_PRESET_TEMPLATES"},{default:(0,a.w5)((()=>[(0,a.Uk)(" 导入预置模板 ")])),_:1})])),_:1})])),default:(0,a.w5)((()=>[(0,a.Wm)(i,{type:"default",title:"更多"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,m.SU)(s.Tkc))])),_:1})])),_:1})])),_:1},8,["onCommand"])])}}}),h=l(89);const g=(0,h.Z)(c,[["__scopeId","data-v-5b274ab1"]]);var f=g;function w(e,t,l,i,o,n){const d=(0,a.up)("el-table-column"),u=(0,a.up)("ImageView"),m=(0,a.up)("el-button"),s=(0,a.up)("el-table"),r=(0,a.up)("MyBatch"),p=(0,a.up)("MyEditDialog"),c=(0,a.up)("MyItemDetailDialog");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(s,{data:n.items,onSelectionChange:n.handleSelectionChange},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{type:"selection"}),(0,a.Wm)(d,{width:"48px"},{default:(0,a.w5)((e=>[(0,a.Wm)(u,{modelValue:e.row.icon,"onUpdate:modelValue":t=>e.row.icon=t,"image-height":"24px","image-width":"24px"},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),(0,a.Wm)(d,{prop:"name",label:"名称",sortable:""}),(0,a.Wm)(d,{prop:"title",label:"标题",sortable:""}),(0,a.Wm)(d,{prop:"group",label:"分组",sortable:""}),(0,a.Wm)(d,{prop:"name",label:"操作",width:"170px"},{default:(0,a.w5)((e=>[(0,a.Wm)(m,{type:"primary",link:"",onClick:t=>n.handleClickItemDetail(e.row)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 详细 ")])),_:2},1032,["onClick"]),(0,a.Wm)(m,{type:"primary",link:"",onClick:t=>n.handleClickItemEdit(e.row)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 编辑 ")])),_:2},1032,["onClick"]),(0,a.Wm)(m,{type:"danger",link:"",onClick:t=>n.handleClickItemRemove(e.row)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),(0,a.Wm)(r,{modelValue:o.selectedItems,"onUpdate:modelValue":t[0]||(t[0]=e=>o.selectedItems=e)},null,8,["modelValue"]),(0,a.Wm)(p,{modelValue:o.displayEditDialog,"onUpdate:modelValue":t[1]||(t[1]=e=>o.displayEditDialog=e),target:o.theEditDialogItem,method:"PUT",onAction:n.handleAction},null,8,["modelValue","target","onAction"]),(0,a.Wm)(c,{modelValue:o.displayDetailDialog,"onUpdate:modelValue":t[2]||(t[2]=e=>o.displayDetailDialog=e),target:o.theDetailDialogItem},null,8,["modelValue","target"])])}var _=l(2655),y=(l(7391),l(7139)),b=l(9242);const v=e=>((0,a.dD)("data-v-285505b2"),e=e(),(0,a.Cn)(),e),W={class:"select-sub-type"},V=v((()=>(0,a._)("span",null," 项目类型：",-1))),k={class:"select-sub-type"},C=v((()=>(0,a._)("span",null," 文件类型：",-1))),U={class:"dialog-button-bar"},D=v((()=>(0,a._)("span",{class:"spring"},null,-1)));function S(e,t,l,i,o,n){const d=(0,a.up)("ImageSelect"),u=(0,a.up)("el-form-item"),m=(0,a.up)("el-input"),s=(0,a.up)("el-button"),r=(0,a.up)("ExecutableUrnSelector"),p=(0,a.up)("el-option"),c=(0,a.up)("el-select"),h=(0,a.up)("ProjectTypeSelector"),g=(0,a.up)("FileTypeSelector"),f=(0,a.up)("el-form"),w=(0,a.up)("MyMacroListDialog"),_=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.j4)(_,{title:n.dialogTitle,onOpen:n.open},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{"label-width":"120px"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{label:""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{modelValue:o.item.icon,"onUpdate:modelValue":t[0]||(t[0]=e=>o.item.icon=e),"image-height":"100px","image-width":"100px"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,{label:"名称"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:o.item.name,"onUpdate:modelValue":t[1]||(t[1]=e=>o.item.name=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,{label:"标题"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:o.item.title,"onUpdate:modelValue":t[2]||(t[2]=e=>o.item.title=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,{label:"分组"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:o.item.group,"onUpdate:modelValue":t[3]||(t[3]=e=>o.item.group=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,{label:"动作"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:o.item.method,"onUpdate:modelValue":t[5]||(t[5]=e=>o.item.method=e)},{append:(0,a.w5)((()=>[(0,a.Wm)(s,{onClick:t[4]||(t[4]=e=>o.item.method=o.valueDefault.method)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 使用默认值 ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(u,{label:"应用名称"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{modelValue:o.item.with,"onUpdate:modelValue":t[6]||(t[6]=e=>o.item.with=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,{label:"目标类型"},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{modelValue:o.item.target,"onUpdate:modelValue":t[7]||(t[7]=e=>o.item.target=e),placeholder:"选择目标类型",onChange:n.handleTargetChange},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.target_types,(e=>((0,a.wg)(),(0,a.j4)(p,{key:e.id,value:e.value,label:e.label},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(e.label),1)])),_:2},1032,["value","label"])))),128))])),_:1},8,["modelValue","onChange"]),(0,a.wy)((0,a._)("div",W,[V,(0,a.Wm)(h,{modelValue:o.item.type,"onUpdate:modelValue":t[8]||(t[8]=e=>o.item.type=e),style:{display:"inline-block"}},null,8,["modelValue"])],512),[[b.F8,n.displaySelectTypeForProject]]),(0,a.wy)((0,a._)("div",k,[C,(0,a.Wm)(g,{modelValue:o.item.type,"onUpdate:modelValue":t[9]||(t[9]=e=>o.item.type=e),style:{display:"inline-block"}},null,8,["modelValue"])],512),[[b.F8,n.displaySelectTypeForFile]])])),_:1}),(0,a.Wm)(u,{label:"命令"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:o.item.command,"onUpdate:modelValue":t[11]||(t[11]=e=>o.item.command=e)},{append:(0,a.w5)((()=>[(0,a.Wm)(s,{onClick:t[10]||(t[10]=e=>o.item.command=o.valueDefault.command)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 使用默认值 ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(u,{label:"参数"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:o.item.args,"onUpdate:modelValue":t[12]||(t[12]=e=>o.item.args=e),type:"textarea"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,{label:"环境变量"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:o.item.env,"onUpdate:modelValue":t[13]||(t[13]=e=>o.item.env=e),type:"textarea"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(u,{label:"工作目录"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:o.item.wd,"onUpdate:modelValue":t[15]||(t[15]=e=>o.item.wd=e)},{append:(0,a.w5)((()=>[(0,a.Wm)(s,{onClick:t[14]||(t[14]=e=>o.item.wd=o.valueDefault.wd)},{default:(0,a.w5)((()=>[(0,a.Uk)(" 使用默认值 ")])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,a.Wm)(u,{label:"描述"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{modelValue:o.item.description,"onUpdate:modelValue":t[16]||(t[16]=e=>o.item.description=e),type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1}),(0,a._)("div",U,[(0,a.Wm)(s,{type:"default",onClick:n.showMacroProps},{default:(0,a.w5)((()=>[(0,a.Uk)(" 宏变量... ")])),_:1},8,["onClick"]),D,(0,a.Wm)(s,{type:"success",onClick:n.save},{default:(0,a.w5)((()=>[(0,a.Uk)(" 保存 ")])),_:1},8,["onClick"]),(0,a.Wm)(s,{type:"default",onClick:n.close},{default:(0,a.w5)((()=>[(0,a.Uk)(" 取消 ")])),_:1},8,["onClick"])]),(0,a.Wm)(w,{modelValue:o.displayMacroListDialog,"onUpdate:modelValue":t[17]||(t[17]=e=>o.displayMacroListDialog=e)},null,8,["modelValue"])])),_:1},8,["title","onOpen"])}var I=l(9327);const M={name:"settings-intent-templates-macro-list-dialog",computed:{items(){return this.$store.getters["intent_template/macro_properties"]}},data(){return{output:""}},methods:{handleSelect(e){this.output="${"+e.name+"}"},fetch(){this.$store.dispatch("intent_template/fetch_macro_props").then((()=>{}))},copy(){let e=this.output;this.$store.dispatch("clipboard/copy",e).then((()=>{this.close()}))},close(){this.$emit("update:modelValue",!1)}},mounted(){this.fetch()}};var $=Object.assign(M,{setup(e){return(e,t)=>{const l=(0,a.up)("el-table-column"),i=(0,a.up)("el-table"),o=(0,a.up)("el-button"),n=(0,a.up)("el-icon"),d=(0,a.up)("el-input"),u=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.j4)(u,{title:"宏变量名单"},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{data:e.items,"max-height":"320",border:"",onCurrentChange:e.handleSelect},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{prop:"name",label:"变量名"}),(0,a.Wm)(l,{prop:"description",label:"说明"})])),_:1},8,["data","onCurrentChange"]),(0,a.Wm)(d,{class:"output-text-edit",modelValue:e.output,"onUpdate:modelValue":t[0]||(t[0]=t=>e.output=t),readonly:""},{prepend:(0,a.w5)((()=>[(0,a.Wm)(o,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" 引用表达式 ")])),_:1})])),append:(0,a.w5)((()=>[(0,a.Wm)(o,{onClick:e.copy},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,m.SU)(s._hA))])),_:1}),(0,a.Uk)(" 复制文本 ")])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])),_:1})}}});const z=(0,h.Z)($,[["__scopeId","data-v-749bc7ba"]]);var x=z;const T={name:"settings-content-types-for-project-selector",computed:{options(){return this.$store.getters["content_type/file_type_list"]}},data(){return{}},methods:{refresh(){this.$store.dispatch("content_type/fetch")},computeLabel(e){let t=e.label,l=e.patterns;return t+" ("+l+")"},fireUpdateModelValue(e){this.$emit("update:modelValue",e)}},props:{modelValue:String}};var j=Object.assign(T,{setup(e){return(t,l)=>{const i=(0,a.up)("el-option"),o=(0,a.up)("el-select"),n=(0,a.up)("el-icon"),d=(0,a.up)("el-button");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o,{"model-value":e.modelValue,"onUpdate:modelValue":t.fireUpdateModelValue,placeholder:"请选择"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.options,(e=>((0,a.wg)(),(0,a.j4)(i,{key:e.id,label:t.computeLabel(e),value:e.type},null,8,["label","value"])))),128)),(0,a.Wm)(i,{label:"任何类型",value:"*"})])),_:1},8,["model-value","onUpdate:modelValue"]),(0,a.Wm)(d,{type:"default",title:"刷新",onClick:t.refresh},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,m.SU)(s.hYj))])),_:1})])),_:1},8,["onClick"])])}}});const P=j;var E=P;const A={name:"settings-content-types-for-project-selector",computed:{options(){return this.$store.getters["content_type/project_type_list"]}},data(){return{}},methods:{refresh(){this.$store.dispatch("content_type/fetch")},computeLabel(e){let t=e.label,l=e.patterns;return t+" ("+l+")"},fireUpdateModelValue(e){this.$emit("update:modelValue",e)}},props:{modelValue:String}};var Z=Object.assign(A,{setup(e){return(t,l)=>{const i=(0,a.up)("el-option"),o=(0,a.up)("el-select"),n=(0,a.up)("el-icon"),d=(0,a.up)("el-button");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o,{"model-value":e.modelValue,"onUpdate:modelValue":t.fireUpdateModelValue,placeholder:"请选择"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.options,(e=>((0,a.wg)(),(0,a.j4)(i,{key:e.id,label:t.computeLabel(e),value:e.type},null,8,["label","value"])))),128)),(0,a.Wm)(i,{label:"任何类型",value:"*"})])),_:1},8,["model-value","onUpdate:modelValue"]),(0,a.Wm)(d,{type:"default",title:"刷新",onClick:t.refresh},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,m.SU)(s.hYj))])),_:1})])),_:1},8,["onClick"])])}}});const L=Z;var H=L;const O={class:"select-option-box"},B=["src"],F={name:"executable-urn-selector",computed:{options(){return this.$store.getters["executable/all"]}},methods:{fireUpdateModelValue(e){this.$emit("update:modelValue",e)},refresh(){this.$store.dispatch("executable/fetch")}},props:{modelValue:String}};var Y=Object.assign(F,{setup(e){return(t,l)=>{const i=(0,a.up)("el-option"),o=(0,a.up)("el-select"),n=(0,a.up)("el-icon"),d=(0,a.up)("el-button");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o,{"model-value":e.modelValue,"onUpdate:modelValue":t.fireUpdateModelValue},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.options,(e=>((0,a.wg)(),(0,a.j4)(i,{key:e.id,label:e.title,value:e.urn},{default:(0,a.w5)((()=>[(0,a._)("div",O,[(0,a._)("span",null,[(0,a._)("img",{class:"select-option-icon-image",src:e.icon},null,8,B)]),(0,a._)("span",null,(0,y.zw)(e.name),1)])])),_:2},1032,["label","value"])))),128))])),_:1},8,["model-value","onUpdate:modelValue"]),(0,a.Wm)(d,{onClick:t.refresh},{default:(0,a.w5)((()=>[(0,a.Wm)(n,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,m.SU)(s.hYj))])),_:1})])),_:1},8,["onClick"])])}}});const R=(0,h.Z)(Y,[["__scopeId","data-v-4cdbea7e"]]);var K=R,G=l(7967);const J=[{id:1,label:"git 仓库",value:"repository",wd_default:"${repository.wkdir}"},{id:2,label:"git 工作区",value:"worktree",wd_default:"${worktree.wkdir}"},{id:3,label:"git 子模块",value:"submodule",wd_default:"${submodule.wkdir}"},{id:4,label:"文件夹",value:"folder",wd_default:"${folder.path}"},{id:5,label:"文件",value:"file",wd_default:"${file.path}"},{id:6,label:"工程项目",value:"project",wd_default:"${project.fullpath}"},{id:99,label:"任何类型",value:"*",wd_default:"${executable.path}"}];var N={name:"settings-intent-template-edit-dialog",components:{MyMacroListDialog:x,ProjectTypeSelector:H,FileTypeSelector:E,ExecutableUrnSelector:K,ImageSelect:G.Z},computed:{dialogTitle(){return this.isPost()?"新建命令模板":"修改命令模板"},displaySelectTypeForFile(){let e=I.Z.Get(this.item,"target","");return"file"==e},displaySelectTypeForProject(){let e=I.Z.Get(this.item,"target","");return"project"==e}},data(){return{item:{},displayMacroListDialog:!1,target_types:J,project_types:[],content_types:[],valueDefault:{wd:"${repository.wkdir}",command:"${executable.path}",method:"open"},target_type_selection:""}},methods:{isPost(){let e=""+this.method;return"post"==e.toLowerCase()},isPut(){let e=""+this.method;return"put"==e.toLowerCase()},save(){this.prepareSave();let e="";if(this.isPost())e="intent_template/insert";else{if(!this.isPut())return void console.warn("bad prop.method.value: "+this.method);e="intent_template/update"}let t=this.item;this.$store.dispatch(e,{item:t}).then((()=>{this.close()}))},close(){this.$emit("update:modelValue")},open(){this.prepareLoad()},prepareLoad(){let e=this.target;null==e&&(e={});let t=JSON.stringify(e);e=JSON.parse(t),this.item=e},prepareSave(){let e=I.Z.Get(this,"item",{});this.item=e},handleTargetChange(e){let t=J;for(var l in t){let a=t[l];a.value==e&&(this.valueDefault.wd=a.wd_default)}},showMacroProps(){let e={name:"list:macro"};this.$emit("action",e)}},props:{method:String,target:Object}};const q=(0,h.Z)(N,[["render",S],["__scopeId","data-v-285505b2"]]);var Q=q,X=l(3368);const ee={style:{"margin-top":"10px"}};function te(e,t,l,i,o,n){const d=(0,a.up)("el-button"),u=(0,a.up)("BatchToolBar");return(0,a.wg)(),(0,a.iD)("div",ee,[(0,a.Wm)(u,{modelValue:n.items,"onUpdate:modelValue":t[0]||(t[0]=e=>n.items=e),title:"批处理",hideEmpty:!0},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{type:"danger",onClick:n.handleDelete},{default:(0,a.w5)((()=>[(0,a.Uk)(" 删除 ")])),_:1},8,["onClick"]),(0,a.Wm)(d,{type:"primary",onClick:n.handlePutToBuffer},{default:(0,a.w5)((()=>[(0,a.Uk)(" 存入缓冲区 ")])),_:1},8,["onClick"])])),_:1},8,["modelValue"])])}var le=l(9698),ae={name:"settings-intent-templates-batch",components:{BatchToolBar:le.Z},computed:{items(){return this.modelValue}},methods:{handleDelete(){let e=this.items;this.$store.dispatch("intent_template/remove",{items:e})},handlePutToBuffer(){let e="intenttemplates",t={};t[e]=this.items,this.$store.dispatch("jsonbuffer/put",{vo:t})}},props:{modelValue:Array}};const ie=(0,h.Z)(ae,[["render",te]]);var oe=ie;function ne(e,t,l,i,o,n){const d=(0,a.up)("el-form-item"),u=(0,a.up)("el-form"),m=(0,a.up)("ElButton"),s=(0,a.up)("el-dialog");return(0,a.wg)(),(0,a.j4)(s,{title:"命令模板详情"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"the-item-detail-dialog","label-width":"128px"},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{label:"标题"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.title),1)])),_:1}),(0,a.Wm)(d,{label:"描述"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.description),1)])),_:1}),(0,a.Wm)(d,{label:"ID"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.id),1)])),_:1}),(0,a.Wm)(d,{label:"UUID"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.uuid),1)])),_:1}),(0,a.Wm)(d,{label:"名称"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.name),1)])),_:1}),(0,a.Wm)(d,{label:"分组"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.group),1)])),_:1}),(0,a.Wm)(d,{label:"选择表达式"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.selector),1)])),_:1}),(0,a.Wm)(d,{label:"命令"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.command),1)])),_:1}),(0,a.Wm)(d,{label:"参数"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.args),1)])),_:1}),(0,a.Wm)(d,{label:"工作目录"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.wd),1)])),_:1}),(0,a.Wm)(d,{label:"环境变量"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,y.zw)(n.item.env),1)])),_:1})])),_:1}),(0,a._)("div",null,[(0,a.Wm)(m,{type:"default",onClick:n.duplicate},{default:(0,a.w5)((()=>[(0,a.Uk)("创建副本")])),_:1},8,["onClick"]),(0,a.Wm)(m,{type:"default",onClick:n.close},{default:(0,a.w5)((()=>[(0,a.Uk)("关闭")])),_:1},8,["onClick"])])])),_:1})}var de=l(6465),ue={name:"settings-intent-templates-item-detail-dialog",components:{ElButton:de.mi},computed:{item(){let e=this.target;return null==e&&(e=this.emptyItem),e}},data(){return{emptyItem:{}}},methods:{close(){this.$emit("update:modelValue",!1)},duplicate(){let e=this.item;this.$store.dispatch("intent_template/duplicate",{item:e}).then((()=>{this.close()}))}},props:{target:Object}};const me=(0,h.Z)(ue,[["render",ne],["__scopeId","data-v-252ae6a4"]]);var se=me,re={name:"settings-intent-templates-table",components:{MyEditDialog:Q,ImageView:X.Z,MyBatch:oe,MyItemDetailDialog:se},computed:{items(){return this.$store.getters["intent_template/list"]}},data(){return{displayDetailDialog:!1,displayEditDialog:!1,theEditDialogItem:{},theDetailDialogItem:{},selectedItems:[]}},methods:{handleClickItemEdit(e){this.theEditDialogItem=e,this.displayEditDialog=!0},handleClickItemDetail(e){this.theDetailDialogItem=e,this.displayDetailDialog=!0},handleClickItemRemove(e){let t="删除命令模板",l="确定要删除 ["+e.name+"] 这个命令模板吗？",a="";_.T.confirm(l+a,t,{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.removeItem(e)})).catch((()=>{}))},removeItem(e){let t=e.id;this.$store.dispatch("intent_template/remove",{id:t})},handleAction(e){this.$emit("action",e)},handleSelectionChange(e){this.selectedItems=e}}};const pe=(0,h.Z)(re,[["render",w]]);var ce=pe;function he(e,t,l,i,o,n){const d=(0,a.up)("el-pagination");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(d,{"current-page":n.currentPage,"onUpdate:currentPage":t[0]||(t[0]=e=>n.currentPage=e),"page-size":n.pageSize,"onUpdate:pageSize":t[1]||(t[1]=e=>n.pageSize=e),"page-sizes":[5,10,20,50,100,200,500],background:o.background,layout:"total, sizes, prev, pager, next",total:n.theCountItemsTotal,onSizeChange:n.handleSizeChange,onCurrentChange:n.handleCurrentChange},null,8,["current-page","page-size","background","total","onSizeChange","onCurrentChange"])])}var ge={name:"settings-intent-templates-pager",computed:{theCountItemsTotal(){return this.$store.getters["intent_template/total"]},currentPage(){return this.$store.getters["intent_template/current_page"]},pageSize(){return this.$store.getters["intent_template/page_size"]}},data(){return{background:!0}},methods:{handleSizeChange(e){let t=e,l=0;this.$store.commit("intent_template/update",{size:t,index:l})},handleCurrentChange(e){let t=e-1;this.$store.commit("intent_template/update",{index:t})}}};const fe=(0,h.Z)(ge,[["render",he]]);var we=fe;const _e={name:"settings-intent-templates-search",computed:{theModelValue(){return this.$store.getters["intent_template/filter"]}},methods:{handleUpdateModelValue(e){let t=e;this.$store.commit("intent_template/update",{filter:t})}}};var ye=Object.assign(_e,{setup(e){return(e,t)=>{const l=(0,a.up)("el-icon"),i=(0,a.up)("el-button"),o=(0,a.up)("el-input");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o,{modelValue:e.theModelValue,"onUpdate:modelValue":e.handleUpdateModelValue,placeholder:"输入要查找的内容"},{append:(0,a.w5)((()=>[(0,a.Wm)(i,{title:"查找"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,m.SU)(s.olm))])),_:1})])),_:1})])),_:1},8,["modelValue","onUpdate:modelValue"])])}}});const be=ye;var ve=be,We={name:"settings-intent-templates-index",components:{MyToolbar:f,MyTable:ce,MyPager:we,MyEditDialog:Q,MyMacroListDialog:x,MySearch:ve},data(){return{displayInsertDialog:!1,displayMacroListDialog:!1}},methods:{handleAction(e){let t=e.name;"insert"==t?this.insert():"list:macro"==t&&(this.displayMacroListDialog=!0)},insert(){this.displayInsertDialog=!0}}};const Ve=(0,h.Z)(We,[["render",u],["__scopeId","data-v-bd53ae4c"]]);var ke=Ve,Ce={name:"views-settings-intent-templates",components:{MyClient:ke}};const Ue=(0,h.Z)(Ce,[["render",i]]);var De=Ue}}]);
//# sourceMappingURL=111.f9a4f322.js.map