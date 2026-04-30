import{s as y}from"./index-KsOEsaua.js";import{g as m,o as i,a as o,m as s,B as _,V as C,j as P,b as h,r as u,n as b,t as r,p as k,c as v,w as f,q as I,l as V,a8 as A,W as S,d as M,aA as D,_ as $,a4 as L,a7 as E,e as c}from"./index-B4t0AlBR.js";import{s as K}from"./index-6lNASchS.js";import{b as N,R as T,s as q}from"./index--UliHvld.js";import{s as H}from"./index-DAWmibXT.js";import{_ as R}from"./BaseViewTemplate.vue_vue_type_script_setup_true_lang-CVr3zlLP.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-VL7IV67K.js";var w={name:"PlusIcon",extends:N};function O(e,n,t,p,a,d){return i(),m("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[o("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}w.render=O;var W=function(n){var t=n.dt;return`
.p-panel {
    border: 1px solid `.concat(t("panel.border.color"),`;
    border-radius: `).concat(t("panel.border.radius"),`;
    background: `).concat(t("panel.background"),`;
    color: `).concat(t("panel.color"),`;
}

.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: `).concat(t("panel.header.padding"),`;
    background: `).concat(t("panel.header.background"),`;
    color: `).concat(t("panel.header.color"),`;
    border-style: solid;
    border-width: `).concat(t("panel.header.border.width"),`;
    border-color: `).concat(t("panel.header.border.color"),`;
    border-radius: `).concat(t("panel.header.border.radius"),`;
}

.p-panel-toggleable .p-panel-header {
    padding: `).concat(t("panel.toggleable.header.padding"),`;
}

.p-panel-title {
    line-height: 1;
    font-weight: `).concat(t("panel.title.font.weight"),`;
}

.p-panel-content {
    padding: `).concat(t("panel.content.padding"),`;
}

.p-panel-footer {
    padding: `).concat(t("panel.footer.padding"),`;
}
`)},z={root:function(n){var t=n.props;return["p-panel p-component",{"p-panel-toggleable":t.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},F=_.extend({name:"panel",theme:W,classes:z}),U={name:"BasePanel",extends:q,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:F,provide:function(){return{$pcPanel:this,$parentInstance:this}}},B={name:"Panel",extends:U,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||C()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||C()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:w,MinusIcon:K,Button:y},directives:{ripple:T}},Z=["id"],G=["id","aria-labelledby"];function J(e,n,t,p,a,d){var l=P("Button");return i(),m("div",s({class:e.cx("root")},e.ptmi("root")),[o("div",s({class:e.cx("header")},e.ptm("header")),[u(e.$slots,"header",{id:a.id+"_header",class:k(e.cx("title"))},function(){return[e.header?(i(),m("span",s({key:0,id:a.id+"_header",class:e.cx("title")},e.ptm("title")),r(e.header),17,Z)):b("",!0)]}),o("div",s({class:e.cx("headerActions")},e.ptm("headerActions")),[u(e.$slots,"icons"),e.toggleable?(i(),v(l,s({key:0,id:a.id+"_header",class:e.cx("pcToggleButton"),"aria-label":d.buttonAriaLabel,"aria-controls":a.id+"_content","aria-expanded":!a.d_collapsed,unstyled:e.unstyled,onClick:d.toggle,onKeydown:d.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:f(function(g){return[u(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:a.d_collapsed},function(){return[(i(),v(I(a.d_collapsed?"PlusIcon":"MinusIcon"),s({class:g.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]})]}),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):b("",!0)],16)],16),h(S,s({name:"p-toggleable-content"},e.ptm("transition")),{default:f(function(){return[V(o("div",s({id:a.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":a.id+"_header"},e.ptm("contentContainer")),[o("div",s({class:e.cx("content")},e.ptm("content")),[u(e.$slots,"default")],16),e.$slots.footer?(i(),m("div",s({key:0,class:e.cx("footer")},e.ptm("footer")),[u(e.$slots,"footer")],16)):b("",!0)],16,G),[[A,!a.d_collapsed]])]}),_:3},16)],16)}B.render=J;const Q={class:"comfy-installer grow flex flex-col gap-4 text-neutral-300 max-w-110"},X={class:"text-2xl font-semibold text-neutral-100"},Y={class:"m-1 text-neutral-300"},x={class:"ml-2"},ee={class:"m-1 mb-4"},ne={class:"m-0"},te={class:"m-1"},oe={class:"font-mono"},ae={class:"m-1"},le=M({__name:"ManualConfigurationView",setup(e){const{t:n}=D(),t=E(),p=$(null),a=$("/"),d=l=>t.restartApp(l);return L(async()=>{p.value=await t.getBasePath(),p.value.indexOf("/")===-1&&(a.value="\\")}),(l,g)=>(i(),v(R,{dark:""},{default:f(()=>[o("div",Q,[o("h2",X,r(l.$t("install.manualConfiguration.title")),1),o("p",Y,[h(c(H),{icon:"pi pi-exclamation-triangle",severity:"warn",value:c(n)("icon.exclamation-triangle")},null,8,["value"]),o("strong",x,r(l.$t("install.gpuSelection.customComfyNeedsPython")),1)]),o("div",null,[o("p",ee,r(l.$t("install.manualConfiguration.requirements"))+": ",1),o("ul",ne,[o("li",null,r(l.$t("install.gpuSelection.customManualVenv")),1),o("li",null,r(l.$t("install.gpuSelection.customInstallRequirements")),1)])]),o("p",te,r(l.$t("install.manualConfiguration.createVenv"))+":",1),h(c(B),{header:c(n)("install.manualConfiguration.virtualEnvironmentPath")},{default:f(()=>[o("span",oe,r(`${p.value}${a.value}.venv${a.value}`),1)]),_:1},8,["header"]),o("p",ae,r(l.$t("install.manualConfiguration.restartWhenFinished")),1),h(c(y),{class:"place-self-end",label:c(n)("menuLabels.Restart"),severity:"warn",icon:"pi pi-refresh",onClick:g[0]||(g[0]=se=>d("Manual configuration complete"))},null,8,["label"])])]),_:1}))}}),he=j(le,[["__scopeId","data-v-818f40b1"]]);export{he as default};
//# sourceMappingURL=ManualConfigurationView-CPUAqGgt.js.map
