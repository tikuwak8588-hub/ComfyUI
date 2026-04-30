import{B as X,ar as at,v as Qt,as as en,g as S,o as h,m as b,j as te,c as I,r as O,w as P,l as ae,q as j,n as R,a as m,a8 as me,W as He,F as ce,V as ge,M as _n,an as jn,at as Hn,O as qn,au as Kn,av as It,aw as Tt,I as rt,Z as Qe,ap as Gn,a0 as ne,k as ft,b as C,p as W,t as w,h as ee,d as re,_ as M,ax as G,e as x,ay as ht,a7 as oe,a1 as tn,al as Dt,A as mt,az as Wn,G as Jn,aA as nn,aB as Xn,a2 as st,a4 as qe,aC as it,u as Zn,aD as Yn}from"./index-B4t0AlBR.js";import{s as J,b as Ke,R as gt}from"./index--UliHvld.js";import{s as on,a as Qn,b as eo,c as to,d as no,e as bt,f as oo,g as ao,_ as ro}from"./BaseViewTemplate.vue_vue_type_script_setup_true_lang-CVr3zlLP.js";import{s as Se}from"./index-KsOEsaua.js";import{F as so}from"./index-CRg0dVMo.js";import{s as vt}from"./index-DyjM2XwC.js";import{s as Ot}from"./index-DZhoKLrT.js";import{s as io}from"./index-DAWmibXT.js";import{c as co}from"./index-Dtjc6EhN.js";import{M as lo,T as Le}from"./index-B5M8Z7-R.js";import{s as uo}from"./index-6lNASchS.js";import{i as an,n as po}from"./formatUtil-DguQMHH5.js";import{_ as rn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-VL7IV67K.js";var fo={root:function(t){var n=t.instance;return["p-steppanel",{"p-steppanel-active":n.isVertical&&n.active}]},content:"p-steppanel-content"},ho=X.extend({name:"steppanel",classes:fo}),sn={name:"StepperSeparator",hostName:"Stepper",extends:J};function mo(e,t,n,o,r,a){return h(),S("span",b({class:e.cx("separator")},e.ptm("separator")),null,16)}sn.render=mo;var go={name:"BaseStepPanel",extends:J,props:{value:{type:[String,Number],default:void 0},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:ho,provide:function(){return{$pcStepPanel:this,$parentInstance:this}}},Be={name:"StepPanel",extends:go,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepItem:{default:null},$pcStepList:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el){var t,n,o=at(this.$pcStepper.$el,'[data-pc-name="step"]'),r=Qt(this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.$el:(n=this.$pcStepList)===null||n===void 0?void 0:n.$el,'[data-pc-name="step"]'),a=en(r,o);this.isSeparatorVisible=this.isVertical&&a!==o.length-1}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{active:this.active}})},updateValue:function(t){this.$pcStepper.updateValue(t)}},computed:{active:function(){var t,n,o=this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value;return o===((n=this.$pcStepper)===null||n===void 0?void 0:n.d_value)},isVertical:function(){return!!this.$pcStepItem},activeValue:function(){var t;return this.isVertical?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_steppanel_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_step_").concat(this.activeValue)},a11yAttrs:function(){return{id:this.id,role:"tabpanel","aria-controls":this.ariaControls,"data-pc-name":"steppanel","data-p-active":this.active}}},components:{StepperSeparator:sn}};function bo(e,t,n,o,r,a){var s=te("StepperSeparator");return a.isVertical?(h(),S(ce,{key:0},[e.asChild?O(e.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(u){return a.updateValue(u)}}):(h(),I(He,b({key:0,name:"p-toggleable-content"},e.ptm("transition")),{default:P(function(){return[ae((h(),I(j(e.as),b({id:a.id,class:e.cx("root"),role:"tabpanel","aria-controls":a.ariaControls},a.getPTOptions("root")),{default:P(function(){return[r.isSeparatorVisible?(h(),I(s,{key:0})):R("",!0),m("div",b({class:e.cx("content")},a.getPTOptions("content")),[O(e.$slots,"default",{active:a.active,activateCallback:function(u){return a.updateValue(u)}})],16)]}),_:3},16,["id","class","aria-controls"])),[[me,a.active]])]}),_:3},16))],64)):(h(),S(ce,{key:1},[e.asChild?e.asChild&&a.active?O(e.$slots,"default",{key:1,active:a.active,a11yAttrs:a.a11yAttrs,activateCallback:function(u){return a.updateValue(u)}}):R("",!0):ae((h(),I(j(e.as),b({key:0,id:a.id,class:e.cx("root"),role:"tabpanel","aria-controls":a.ariaControls},a.getPTOptions("root")),{default:P(function(){return[O(e.$slots,"default",{active:a.active,activateCallback:function(u){return a.updateValue(u)}})]}),_:3},16,["id","class","aria-controls"])),[[me,a.active]])],64))}Be.render=bo;var vo={root:"p-steppanels"},yo=X.extend({name:"steppanels",classes:vo}),wo={name:"BaseStepPanels",extends:J,style:yo,provide:function(){return{$pcStepPanels:this,$parentInstance:this}}},cn={name:"StepPanels",extends:wo,inheritAttrs:!1};function ko(e,t,n,o,r,a){return h(),S("div",b({class:e.cx("root")},e.ptmi("root")),[O(e.$slots,"default")],16)}cn.render=ko;var xo=function(t){var n=t.dt;return`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: `.concat(n("stepper.step.gap"),`;
    padding: `).concat(n("stepper.step.padding"),`;
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background `).concat(n("stepper.transition.duration"),", color ").concat(n("stepper.transition.duration"),", border-color ").concat(n("stepper.transition.duration"),", outline-color ").concat(n("stepper.transition.duration"),", box-shadow ").concat(n("stepper.transition.duration"),`;
    border-radius: `).concat(n("stepper.step.header.border.radius"),`;
    outline-color: transparent;
    background: transparent;
    padding: `).concat(n("stepper.step.header.padding"),`;
    gap: `).concat(n("stepper.step.header.gap"),`;
}

.p-step-header:focus-visible {
    box-shadow: `).concat(n("stepper.step.header.focus.ring.shadow"),`;
    outline: `).concat(n("stepper.step.header.focus.ring.width")," ").concat(n("stepper.step.header.focus.ring.style")," ").concat(n("stepper.step.header.focus.ring.color"),`;
    outline-offset: `).concat(n("stepper.step.header.focus.ring.offset"),`;
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: `).concat(n("stepper.step.title.color"),`;
    font-weight: `).concat(n("stepper.step.title.font.weight"),`;
    transition: background `).concat(n("stepper.transition.duration"),", color ").concat(n("stepper.transition.duration"),", border-color ").concat(n("stepper.transition.duration"),", box-shadow ").concat(n("stepper.transition.duration"),", outline-color ").concat(n("stepper.transition.duration"),`;
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(n("stepper.step.number.color"),`;
    border: 2px solid `).concat(n("stepper.step.number.border.color"),`;
    background: `).concat(n("stepper.step.number.background"),`;
    min-width: `).concat(n("stepper.step.number.size"),`;
    height: `).concat(n("stepper.step.number.size"),`;
    line-height: `).concat(n("stepper.step.number.size"),`;
    font-size: `).concat(n("stepper.step.number.font.size"),`;
    z-index: 1;
    border-radius: `).concat(n("stepper.step.number.border.radius"),`;
    position: relative;
    font-weight: `).concat(n("stepper.step.number.font.weight"),`;
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(n("stepper.step.number.border.radius"),`;
    box-shadow: `).concat(n("stepper.step.number.shadow"),`;
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: `).concat(n("stepper.step.number.active.background"),`;
    border-color: `).concat(n("stepper.step.number.active.border.color"),`;
    color: `).concat(n("stepper.step.number.active.color"),`;
}

.p-step-active .p-step-title {
    color: `).concat(n("stepper.step.title.active.color"),`;
}

.p-step:not(.p-disabled):focus-visible {
    outline: `).concat(n("focus.ring.width")," ").concat(n("focus.ring.style")," ").concat(n("focus.ring.color"),`;
    outline-offset: `).concat(n("focus.ring.offset"),`;
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: `).concat(n("stepper.separator.active.background"),`;
}

.p-stepper-separator {
    flex: 1 1 0;
    background: `).concat(n("stepper.separator.background"),`;
    width: 100%;
    height: `).concat(n("stepper.separator.size"),`;
    transition: background `).concat(n("stepper.transition.duration"),", color ").concat(n("stepper.transition.duration"),", border-color ").concat(n("stepper.transition.duration"),", box-shadow ").concat(n("stepper.transition.duration"),", outline-color ").concat(n("stepper.transition.duration"),`;
}

.p-steppanels {
    padding: `).concat(n("stepper.steppanels.padding"),`;
}

.p-steppanel {
    background: `).concat(n("stepper.steppanel.background"),`;
    color: `).concat(n("stepper.steppanel.color"),`;
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: `).concat(n("stepper.steppanel.padding"),`;
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: `).concat(n("stepper.separator.size"),`;
    height: auto;
    margin: `).concat(n("stepper.separator.margin"),`;
    position: relative;
    left: calc(-1 * `).concat(n("stepper.separator.size"),`);
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * `).concat(n("stepper.separator.size"),`);
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: `).concat(n("stepper.separator.active.background"),`;
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: `).concat(n("stepper.step.number.size"),`;
}
`)},Co={root:function(t){var n=t.props;return["p-stepper p-component",{"p-readonly":n.linear}]},separator:"p-stepper-separator"},So=X.extend({name:"stepper",theme:xo,classes:Co}),$o={name:"BaseStepper",extends:J,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:So,provide:function(){return{$pcStepper:this,$parentInstance:this}}},ln={name:"Stepper",extends:$o,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||ge()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||ge()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isStepActive:function(t){return this.d_value===t},isStepDisabled:function(){return this.linear}}};function Ao(e,t,n,o,r,a){return h(),S("div",b({class:e.cx("root"),role:"tablist"},e.ptmi("root")),[e.$slots.start?O(e.$slots,"start",{key:0}):R("",!0),O(e.$slots,"default"),e.$slots.end?O(e.$slots,"end",{key:1}):R("",!0)],16)}ln.render=Ao;var dn={name:"WindowMaximizeIcon",extends:Ke};function Po(e,t,n,o,r,a){return h(),S("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z",fill:"currentColor"},null,-1)]),16)}dn.render=Po;var un={name:"WindowMinimizeIcon",extends:Ke};function Eo(e,t,n,o,r,a){return h(),S("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z",fill:"currentColor"},null,-1)]),16)}un.render=Eo;var Io=function(t){var n=t.dt;return`
.p-dialog {
    max-height: 90%;
    transform: scale(1);
    border-radius: `.concat(n("dialog.border.radius"),`;
    box-shadow: `).concat(n("dialog.shadow"),`;
    background: `).concat(n("dialog.background"),`;
    border: 1px solid `).concat(n("dialog.border.color"),`;
    color: `).concat(n("dialog.color"),`;
}

.p-dialog-content {
    overflow-y: auto;
    padding: `).concat(n("dialog.content.padding"),`;
}

.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(n("dialog.header.padding"),`;
}

.p-dialog-title {
    font-weight: `).concat(n("dialog.title.font.weight"),`;
    font-size: `).concat(n("dialog.title.font.size"),`;
}

.p-dialog-footer {
    flex-shrink: 0;
    padding: `).concat(n("dialog.footer.padding"),`;
    display: flex;
    justify-content: flex-end;
    gap: `).concat(n("dialog.footer.gap"),`;
}

.p-dialog-header-actions {
    display: flex;
    align-items: center;
    gap: `).concat(n("dialog.header.gap"),`;
}

.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}

.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}

.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}

.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}

.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-left:dir(rtl) .p-dialog-enter-from,
.p-dialog-left:dir(rtl) .p-dialog-leave-to,
.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

.p-dialog-right:dir(rtl) .p-dialog-enter-from,
.p-dialog-right:dir(rtl) .p-dialog-leave-to,
.p-dialog-topright:dir(rtl) .p-dialog-enter-from,
.p-dialog-topright:dir(rtl) .p-dialog-leave-to,
.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,
.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}

.p-dialog-maximized {
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
    border-radius: 0;
}

.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}
`)},To={mask:function(t){var n=t.position,o=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n==="left"||n==="topleft"||n==="bottomleft"?"flex-start":n==="right"||n==="topright"||n==="bottomright"?"flex-end":"center",alignItems:n==="top"||n==="topleft"||n==="topright"?"flex-start":n==="bottom"||n==="bottomleft"||n==="bottomright"?"flex-end":"center",pointerEvents:o?"auto":"none"}},root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},Do={mask:function(t){var n=t.props,o=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"],r=o.find(function(a){return a===n.position});return["p-dialog-mask",{"p-overlay-mask p-overlay-mask-enter":n.modal},r?"p-dialog-".concat(r):""]},root:function(t){var n=t.props,o=t.instance;return["p-dialog p-component",{"p-dialog-maximized":n.maximizable&&o.maximized}]},header:"p-dialog-header",title:"p-dialog-title",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:"p-dialog-content",footer:"p-dialog-footer"},Oo=X.extend({name:"dialog",theme:Io,classes:Do,inlineStyles:To}),Lo={name:"BaseDialog",extends:J,props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},closeIcon:{type:String,default:void 0},maximizeIcon:{type:String,default:void 0},minimizeIcon:{type:String,default:void 0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},maximizeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},_instance:null},style:Oo,provide:function(){return{$pcDialog:this,$parentInstance:this}}},yt={name:"Dialog",extends:Lo,inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragstart","dragend"],provide:function(){var t=this;return{dialogRef:ne(function(){return t._instance})}},data:function(){return{id:this.$attrs.id,containerVisible:this.visible,maximized:!1,focusableMax:null,focusableClose:null,target:null}},watch:{"$attrs.id":function(t){this.id=t||ge()}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,maskMouseDownTarget:null,updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&Qe.clear(this.mask),this.container=null,this.mask=null},mounted:function(){this.id=this.id||ge(),this.breakpoints&&this.createStyle()},methods:{close:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.target=document.activeElement,this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&Qe.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.focus()},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Gn(this.mask,"p-overlay-mask-leave"),this.dragging&&this.documentDragEndListener&&this.documentDragEndListener()},onLeave:function(){this.$emit("hide"),rt(this.target),this.target=null,this.focusableClose=null,this.focusableMax=null},onAfterLeave:function(){this.autoZIndex&&Qe.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskMouseDown:function(t){this.maskMouseDownTarget=t.target},onMaskMouseUp:function(){this.dismissableMask&&this.modal&&this.mask===this.maskMouseDownTarget&&this.close()},focus:function(){var t=function(r){return r&&r.querySelector("[autofocus]")},n=this.$slots.footer&&t(this.footerContainer);n||(n=this.$slots.header&&t(this.headerContainer),n||(n=this.$slots.default&&t(this.content),n||(this.maximizable?(this.focusableMax=!0,n=this.maximizableButton):(this.focusableClose=!0,n=this.closeButton)))),n&&rt(n,{focusVisible:!0})},maximize:function(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?Tt():It())},enableDocumentSettings:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&Tt()},unbindDocumentState:function(){(this.modal||!this.modal&&this.blockScroll||this.maximizable&&this.maximized)&&It()},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},maximizableRef:function(t){this.maximizableButton=t?t.$el:void 0},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Kn(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n="";for(var o in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(o,`) {
                            .p-dialog[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[o],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag:function(t){t.target.closest("div").getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",document.body.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&qn(document.body,{"user-select":"none"}),this.$emit("dragstart",t))},bindGlobalListeners:function(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners:function(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener:function(){var t=this;this.documentDragListener=function(n){if(t.dragging){var o=_n(t.container),r=jn(t.container),a=n.pageX-t.lastPageX,s=n.pageY-t.lastPageY,c=t.container.getBoundingClientRect(),u=c.left+a,l=c.top+s,i=Hn(),p=getComputedStyle(t.container),v=parseFloat(p.marginLeft),D=parseFloat(p.marginTop);t.container.style.position="fixed",t.keepInViewport?(u>=t.minX&&u+o<i.width&&(t.lastPageX=n.pageX,t.container.style.left=u-v+"px"),l>=t.minY&&l+r<i.height&&(t.lastPageY=n.pageY,t.container.style.top=l-D+"px")):(t.lastPageX=n.pageX,t.container.style.left=u-v+"px",t.lastPageY=n.pageY,t.container.style.top=l-D+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener:function(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener:function(){var t=this;this.documentDragEndListener=function(n){t.dragging&&(t.dragging=!1,document.body.removeAttribute("data-p-unselectable-text"),!t.isUnstyled&&(document.body.style["user-select"]=""),t.$emit("dragend",n))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener:function(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maximizeIconComponent:function(){return this.maximized?this.minimizeIcon?"span":"WindowMinimizeIcon":this.maximizeIcon?"span":"WindowMaximizeIcon"},ariaLabelledById:function(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.id+"_header":null},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:gt,focustrap:so},components:{Button:Se,Portal:Qn,WindowMinimizeIcon:un,WindowMaximizeIcon:dn,TimesIcon:on}};function $e(e){"@babel/helpers - typeof";return $e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$e(e)}function Lt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Rt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lt(Object(n),!0).forEach(function(o){Ro(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lt(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Ro(e,t,n){return(t=Bo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bo(e){var t=Mo(e,"string");return $e(t)=="symbol"?t:t+""}function Mo(e,t){if($e(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if($e(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Uo=["aria-labelledby","aria-modal"],zo=["id"];function No(e,t,n,o,r,a){var s=te("Button"),c=te("Portal"),u=ft("focustrap");return h(),I(c,{appendTo:e.appendTo},{default:P(function(){return[r.containerVisible?(h(),S("div",b({key:0,ref:a.maskRef,class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),onMousedown:t[1]||(t[1]=function(){return a.onMaskMouseDown&&a.onMaskMouseDown.apply(a,arguments)}),onMouseup:t[2]||(t[2]=function(){return a.onMaskMouseUp&&a.onMaskMouseUp.apply(a,arguments)})},e.ptm("mask")),[C(He,b({name:"p-dialog",onEnter:a.onEnter,onAfterEnter:a.onAfterEnter,onBeforeLeave:a.onBeforeLeave,onLeave:a.onLeave,onAfterLeave:a.onAfterLeave,appear:""},e.ptm("transition")),{default:P(function(){return[e.visible?ae((h(),S("div",b({key:0,ref:a.containerRef,class:e.cx("root"),style:e.sx("root"),role:"dialog","aria-labelledby":a.ariaLabelledById,"aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?O(e.$slots,"container",{key:0,closeCallback:a.close,maximizeCallback:function(i){return a.maximize(i)}}):(h(),S(ce,{key:1},[e.showHeader?(h(),S("div",b({key:0,ref:a.headerContainerRef,class:e.cx("header"),onMousedown:t[0]||(t[0]=function(){return a.initDrag&&a.initDrag.apply(a,arguments)})},e.ptm("header")),[O(e.$slots,"header",{class:W(e.cx("title"))},function(){return[e.header?(h(),S("span",b({key:0,id:a.ariaLabelledById,class:e.cx("title")},e.ptm("title")),w(e.header),17,zo)):R("",!0)]}),m("div",b({class:e.cx("headerActions")},e.ptm("headerActions")),[e.maximizable?(h(),I(s,b({key:0,ref:a.maximizableRef,autofocus:r.focusableMax,class:e.cx("pcMaximizeButton"),onClick:a.maximize,tabindex:e.maximizable?"0":"-1",unstyled:e.unstyled},e.maximizeButtonProps,{pt:e.ptm("pcMaximizeButton"),"data-pc-group-section":"headericon"}),{icon:P(function(l){return[O(e.$slots,"maximizeicon",{maximized:r.maximized},function(){return[(h(),I(j(a.maximizeIconComponent),b({class:[l.class,r.maximized?e.minimizeIcon:e.maximizeIcon]},e.ptm("pcMaximizeButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","tabindex","unstyled","pt"])):R("",!0),e.closable?(h(),I(s,b({key:1,ref:a.closeButtonRef,autofocus:r.focusableClose,class:e.cx("pcCloseButton"),onClick:a.close,"aria-label":a.closeAriaLabel,unstyled:e.unstyled},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"headericon"}),{icon:P(function(l){return[O(e.$slots,"closeicon",{},function(){return[(h(),I(j(e.closeIcon?"span":"TimesIcon"),b({class:[e.closeIcon,l.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["autofocus","class","onClick","aria-label","unstyled","pt"])):R("",!0)],16)],16)):R("",!0),m("div",b({ref:a.contentRef,class:[e.cx("content"),e.contentClass],style:e.contentStyle},Rt(Rt({},e.contentProps),e.ptm("content"))),[O(e.$slots,"default")],16),e.footer||e.$slots.footer?(h(),S("div",b({key:1,ref:a.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[O(e.$slots,"footer",{},function(){return[ee(w(e.footer),1)]})],16)):R("",!0)],64))],16,Uo)),[[u,{disabled:!e.modal}]]):R("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):R("",!0)]}),_:3},8,["appendTo"])}yt.render=No;const Vo={class:"flex flex-col gap-6 w-[600px]"},Fo={class:"flex flex-col gap-4"},_o={class:"text-2xl font-semibold text-neutral-100"},jo={class:"text-neutral-400 my-0"},Ho={class:"flex flex-col bg-neutral-800 p-4 rounded-lg text-sm"},qo={class:"flex items-center gap-4"},Ko={class:"flex-1"},Go={class:"text-lg font-medium text-neutral-100"},Wo={class:"text-neutral-400 mt-1"},Jo={class:"flex items-center gap-4"},Xo={class:"flex-1"},Zo={class:"text-lg font-medium text-neutral-100"},Yo={class:"text-neutral-400"},Qo={class:"text-neutral-300"},ea={class:"font-medium mb-2"},ta={class:"list-disc pl-6 space-y-1"},na={class:"font-medium mt-4 mb-2"},oa={class:"list-disc pl-6 space-y-1"},aa={class:"mt-4"},ra={href:"https://comfy.org/privacy",target:"_blank"},sa=re({__name:"DesktopSettingsConfiguration",props:{autoUpdate:{type:Boolean,required:!0},autoUpdateModifiers:{},allowMetrics:{type:Boolean,required:!0},allowMetricsModifiers:{}},emits:["update:autoUpdate","update:allowMetrics"],setup(e){const t=M(!1),n=G(e,"autoUpdate"),o=G(e,"allowMetrics"),r=()=>{t.value=!0};return(a,s)=>(h(),S("div",Vo,[m("div",Fo,[m("h2",_o,w(a.$t("install.desktopAppSettings")),1),m("p",jo,w(a.$t("install.desktopAppSettingsDescription")),1)]),m("div",Ho,[m("div",qo,[m("div",Ko,[m("h3",Go,w(a.$t("install.settings.autoUpdate")),1),m("p",Wo,w(a.$t("install.settings.autoUpdateDescription")),1)]),C(x(Ot),{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=c=>n.value=c)},null,8,["modelValue"])]),C(x(vt)),m("div",Jo,[m("div",Xo,[m("h3",Zo,w(a.$t("install.settings.allowMetrics")),1),m("p",Yo,w(a.$t("install.settings.allowMetricsDescription")),1),m("a",{href:"#",onClick:ht(r,["prevent"])},w(a.$t("install.settings.learnMoreAboutData")),1)]),C(x(Ot),{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=c=>o.value=c)},null,8,["modelValue"])])]),C(x(yt),{visible:t.value,"onUpdate:visible":s[2]||(s[2]=c=>t.value=c),modal:"","dismissable-mask":"",header:a.$t("install.settings.dataCollectionDialog.title"),class:"select-none"},{default:P(()=>[m("div",Qo,[m("h4",ea,w(a.$t("install.settings.dataCollectionDialog.whatWeCollect")),1),m("ul",ta,[m("li",null,w(a.$t("install.settings.dataCollectionDialog.collect.errorReports")),1),m("li",null,w(a.$t("install.settings.dataCollectionDialog.collect.systemInfo")),1),m("li",null,w(a.$t("install.settings.dataCollectionDialog.collect.userJourneyEvents")),1)]),m("h4",na,w(a.$t("install.settings.dataCollectionDialog.whatWeDoNotCollect")),1),m("ul",oa,[m("li",null,w(a.$t("install.settings.dataCollectionDialog.doNotCollect.personalInformation")),1),m("li",null,w(a.$t("install.settings.dataCollectionDialog.doNotCollect.workflowContents")),1),m("li",null,w(a.$t("install.settings.dataCollectionDialog.doNotCollect.fileSystemInformation")),1),m("li",null,w(a.$t("install.settings.dataCollectionDialog.doNotCollect.customNodeConfigurations")),1)]),m("div",aa,[m("a",ra,w(a.$t("install.settings.dataCollectionDialog.viewFullPolicy")),1)])])]),_:1},8,["visible","header"])]))}}),ia={class:"relative"},ca={class:"icon-container w-[110px] h-[110px] shrink-0 rounded-2xl bg-neutral-800 flex items-center justify-center overflow-hidden"},la=["src","alt"],da={key:1,class:"text-xl font-medium text-neutral-400"},ua={key:0,class:"text-center mt-4"},pa={class:"text-sm text-neutral-500"},ke=re({__name:"HardwareOption",props:{imagePath:{},placeholderText:{},subtitle:{},selected:{type:Boolean}},emits:["click"],setup(e){return(t,n)=>(h(),S("div",ia,[m("button",{class:W(x(co)("hardware-option w-[170px] h-[190px] p-5 flex flex-col items-center rounded-3xl transition-all duration-200 bg-neutral-900/70 border-4",t.selected?"border-solid border-brand-yellow":"border-transparent")),onClick:n[0]||(n[0]=o=>t.$emit("click"))},[m("div",ca,[t.imagePath?(h(),S("img",{key:0,src:t.imagePath,alt:t.placeholderText,class:"w-full h-full object-cover",style:{"object-position":"57% center"},draggable:"false"},null,8,la)):(h(),S("span",da,w(t.placeholderText),1))]),t.subtitle?(h(),S("div",ua,[m("div",pa,w(t.subtitle),1)])):R("",!0)],2)]))}}),fa={class:"mx-auto grid h-[40rem] w-full max-w-3xl grid-rows-[1fr_auto_auto_1fr] select-none"},ha={class:"text-center font-inter text-3xl font-bold text-neutral-100"},ma={class:"flex flex-1 items-center justify-center gap-8"},ga={class:"h-16 px-24 pt-12"},ba={class:"flex items-center gap-2"},va={class:"px-24 text-neutral-300"},ya=re({__name:"GpuPicker",props:{device:{required:!0},deviceModifiers:{}},emits:["update:device"],setup(e){const t=G(e,"device"),o=oe().getPlatform(),r=["mps","nvidia","amd"],a=ne(()=>t.value?r.includes(t.value):!1),s={mps:"appleMetal",nvidia:"nvidia",amd:"amd",cpu:"cpu",unsupported:"manual"},c=ne(()=>{const l=t.value?s[t.value]:void 0;return tn(`install.gpuPicker.${l}Description`,"")});function u(l){t.value=l}return(l,i)=>(h(),S("div",fa,[m("h2",ha,w(l.$t("install.gpuPicker.title")),1),m("div",ma,[x(o)==="darwin"?(h(),I(ke,{key:0,"image-path":"./assets/images/apple-mps-logo.png","placeholder-text":"Apple Metal",subtitle:"Apple Metal",selected:t.value==="mps",onClick:i[0]||(i[0]=p=>u("mps"))},null,8,["selected"])):(h(),S(ce,{key:1},[C(ke,{"image-path":"./assets/images/nvidia-logo-square.jpg","placeholder-text":"NVIDIA",subtitle:l.$t("install.gpuPicker.nvidiaSubtitle"),selected:t.value==="nvidia",onClick:i[1]||(i[1]=p=>u("nvidia"))},null,8,["subtitle","selected"]),C(ke,{"image-path":"./assets/images/amd-rocm-logo.png","placeholder-text":"AMD",subtitle:l.$t("install.gpuPicker.amdSubtitle"),selected:t.value==="amd",onClick:i[2]||(i[2]=p=>u("amd"))},null,8,["subtitle","selected"])],64)),C(ke,{"placeholder-text":"CPU",subtitle:l.$t("install.gpuPicker.cpuSubtitle"),selected:t.value==="cpu",onClick:i[3]||(i[3]=p=>u("cpu"))},null,8,["subtitle","selected"]),C(ke,{"placeholder-text":"Manual Install",subtitle:l.$t("install.gpuPicker.manualSubtitle"),selected:t.value==="unsupported",onClick:i[4]||(i[4]=p=>u("unsupported"))},null,8,["subtitle","selected"])]),m("div",ga,[ae(m("div",ba,[C(x(io),{value:l.$t("install.gpuPicker.recommended"),class:"rounded-full bg-neutral-300 px-2 py-[1px] text-sm font-bold text-neutral-900"},null,8,["value"]),i[5]||(i[5]=m("i",{class:"icon-[lucide--badge-check] text-lg text-neutral-300"},null,-1))],512),[[me,a.value]])]),m("div",va,[ae(m("p",{class:"leading-relaxed"},w(c.value),513),[[me,c.value]])])]))}});var wa={root:function(t){var n=t.instance;return["p-step",{"p-step-active":n.active,"p-disabled":n.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},ka=X.extend({name:"step",classes:wa}),pn={name:"StepperSeparator",hostName:"Stepper",extends:J};function xa(e,t,n,o,r,a){return h(),S("span",b({class:e.cx("separator")},e.ptm("separator")),null,16)}pn.render=xa;var Ca={name:"BaseStep",extends:J,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:ka,provide:function(){return{$pcStep:this,$parentInstance:this}}},Me={name:"Step",extends:Ca,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var t=en(this.$el,at(this.$pcStepper.$el,'[data-pc-name="step"]')),n=at(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=t!==n-1}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var t;return this.$pcStepItem?(t=this.$pcStepItem)===null||t===void 0?void 0:t.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_step_").concat(this.activeValue)},ariaControls:function(){var t;return"".concat((t=this.$pcStepper)===null||t===void 0?void 0:t.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}}},components:{StepperSeparator:pn}},Sa=["id","tabindex","aria-controls","disabled"];function $a(e,t,n,o,r,a){var s=te("StepperSeparator");return e.asChild?O(e.$slots,"default",{key:1,class:W(e.cx("root")),active:a.active,value:e.value,a11yAttrs:a.a11yAttrs,activateCallback:a.onStepClick}):(h(),I(j(e.as),b({key:0,class:e.cx("root"),"aria-current":a.active?"step":void 0,role:"presentation","data-p-active":a.active,"data-p-disabled":a.isStepDisabled},a.getPTOptions("root")),{default:P(function(){return[m("button",b({id:a.id,class:e.cx("header"),role:"tab",type:"button",tabindex:a.isStepDisabled?-1:void 0,"aria-controls":a.ariaControls,disabled:a.isStepDisabled,onClick:t[0]||(t[0]=function(){return a.onStepClick&&a.onStepClick.apply(a,arguments)})},a.getPTOptions("header")),[m("span",b({class:e.cx("number")},a.getPTOptions("number")),w(a.activeValue),17),m("span",b({class:e.cx("title")},a.getPTOptions("title")),[O(e.$slots,"default")],16)],16,Sa),r.isSeparatorVisible?(h(),I(s,{key:0})):R("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}Me.render=$a;var Aa={root:"p-steplist"},Pa=X.extend({name:"steplist",classes:Aa}),Ea={name:"BaseStepList",extends:J,style:Pa,provide:function(){return{$pcStepList:this,$parentInstance:this}}},fn={name:"StepList",extends:Ea,inheritAttrs:!1};function Ia(e,t,n,o,r,a){return h(),S("div",b({class:e.cx("root")},e.ptmi("root")),[O(e.$slots,"default")],16)}fn.render=Ia;const Ta={class:"grid grid-cols-[1fr_auto_1fr] items-center gap-4"},Da={key:1},Oa=re({__name:"InstallFooter",props:{currentStep:{},canProceed:{type:Boolean},disableLocationStep:{type:Boolean},disableSettingsStep:{type:Boolean}},emits:["previous","next","install"],setup(e){const t={root:{class:"flex-none p-0 m-0"},header:({context:n})=>({class:["h-2.5 p-0 m-0 border-0 rounded-full transition-all duration-300",n.active?"bg-brand-yellow w-8 rounded-sm":"bg-neutral-700 w-2.5",n.disabled?"opacity-60 cursor-not-allowed":""].join(" ")}),number:{class:"hidden"},title:{class:"hidden"}};return(n,o)=>(h(),S("div",Ta,[n.currentStep!=="1"?(h(),I(x(Se),{key:0,label:n.$t("g.back"),severity:"secondary",icon:"pi pi-arrow-left",class:"font-inter rounded-lg border-0 px-6 py-2 justify-self-start",onClick:o[0]||(o[0]=r=>n.$emit("previous"))},null,8,["label"])):(h(),S("div",Da)),C(x(fn),{class:"flex justify-center items-center gap-3 select-none"},{default:P(()=>[C(x(Me),{value:"1",pt:t},{default:P(()=>[ee(w(n.$t("install.gpu")),1)]),_:1}),C(x(Me),{value:"2",disabled:n.disableLocationStep,pt:t},{default:P(()=>[ee(w(n.$t("install.installLocation")),1)]),_:1},8,["disabled"]),C(x(Me),{value:"3",disabled:n.disableSettingsStep,pt:t},{default:P(()=>[ee(w(n.$t("install.desktopSettings")),1)]),_:1},8,["disabled"])]),_:1}),C(x(Se),{label:n.currentStep!=="3"?n.$t("g.next"):n.$t("g.install"),class:"px-8 py-2 bg-brand-yellow hover:bg-brand-yellow/90 font-inter rounded-lg border-0 transition-colors justify-self-end",pt:{label:{class:"text-neutral-900 font-inter font-black"}},disabled:!n.canProceed,onClick:o[1]||(o[1]=r=>n.currentStep!=="3"?n.$emit("next"):n.$emit("install"))},null,8,["label","disabled"])]))}});function hn(e,t){return function(){return e.apply(t,arguments)}}const{toString:La}=Object.prototype,{getPrototypeOf:wt}=Object,{iterator:Ge,toStringTag:mn}=Symbol,We=(e=>t=>{const n=La.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Z=e=>(e=e.toLowerCase(),t=>We(t)===e),Je=e=>t=>typeof t===e,{isArray:ve}=Array,be=Je("undefined");function Pe(e){return e!==null&&!be(e)&&e.constructor!==null&&!be(e.constructor)&&q(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const gn=Z("ArrayBuffer");function Ra(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&gn(e.buffer),t}const Ba=Je("string"),q=Je("function"),bn=Je("number"),Ee=e=>e!==null&&typeof e=="object",Ma=e=>e===!0||e===!1,Ue=e=>{if(We(e)!=="object")return!1;const t=wt(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(mn in e)&&!(Ge in e)},Ua=e=>{if(!Ee(e)||Pe(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},za=Z("Date"),Na=Z("File"),Va=Z("Blob"),Fa=Z("FileList"),_a=e=>Ee(e)&&q(e.pipe),ja=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||q(e.append)&&((t=We(e))==="formdata"||t==="object"&&q(e.toString)&&e.toString()==="[object FormData]"))},Ha=Z("URLSearchParams"),[qa,Ka,Ga,Wa]=["ReadableStream","Request","Response","Headers"].map(Z),Ja=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ie(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,r;if(typeof e!="object"&&(e=[e]),ve(e))for(o=0,r=e.length;o<r;o++)t.call(null,e[o],o,e);else{if(Pe(e))return;const a=n?Object.getOwnPropertyNames(e):Object.keys(e),s=a.length;let c;for(o=0;o<s;o++)c=a[o],t.call(null,e[c],c,e)}}function vn(e,t){if(Pe(e))return null;t=t.toLowerCase();const n=Object.keys(e);let o=n.length,r;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const de=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,yn=e=>!be(e)&&e!==de;function ct(){const{caseless:e,skipUndefined:t}=yn(this)&&this||{},n={},o=(r,a)=>{const s=e&&vn(n,a)||a;Ue(n[s])&&Ue(r)?n[s]=ct(n[s],r):Ue(r)?n[s]=ct({},r):ve(r)?n[s]=r.slice():(!t||!be(r))&&(n[s]=r)};for(let r=0,a=arguments.length;r<a;r++)arguments[r]&&Ie(arguments[r],o);return n}const Xa=(e,t,n,{allOwnKeys:o}={})=>(Ie(t,(r,a)=>{n&&q(r)?e[a]=hn(r,n):e[a]=r},{allOwnKeys:o}),e),Za=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ya=(e,t,n,o)=>{e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Qa=(e,t,n,o)=>{let r,a,s;const c={};if(t=t||{},e==null)return t;do{for(r=Object.getOwnPropertyNames(e),a=r.length;a-- >0;)s=r[a],(!o||o(s,e,t))&&!c[s]&&(t[s]=e[s],c[s]=!0);e=n!==!1&&wt(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},er=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const o=e.indexOf(t,n);return o!==-1&&o===n},tr=e=>{if(!e)return null;if(ve(e))return e;let t=e.length;if(!bn(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},nr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&wt(Uint8Array)),or=(e,t)=>{const o=(e&&e[Ge]).call(e);let r;for(;(r=o.next())&&!r.done;){const a=r.value;t.call(e,a[0],a[1])}},ar=(e,t)=>{let n;const o=[];for(;(n=e.exec(t))!==null;)o.push(n);return o},rr=Z("HTMLFormElement"),sr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,r){return o.toUpperCase()+r}),Bt=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ir=Z("RegExp"),wn=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),o={};Ie(n,(r,a)=>{let s;(s=t(r,a,e))!==!1&&(o[a]=s||r)}),Object.defineProperties(e,o)},cr=e=>{wn(e,(t,n)=>{if(q(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(q(o)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},lr=(e,t)=>{const n={},o=r=>{r.forEach(a=>{n[a]=!0})};return ve(e)?o(e):o(String(e).split(t)),n},dr=()=>{},ur=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function pr(e){return!!(e&&q(e.append)&&e[mn]==="FormData"&&e[Ge])}const fr=e=>{const t=new Array(10),n=(o,r)=>{if(Ee(o)){if(t.indexOf(o)>=0)return;if(Pe(o))return o;if(!("toJSON"in o)){t[r]=o;const a=ve(o)?[]:{};return Ie(o,(s,c)=>{const u=n(s,r+1);!be(u)&&(a[c]=u)}),t[r]=void 0,a}}return o};return n(e,0)},hr=Z("AsyncFunction"),mr=e=>e&&(Ee(e)||q(e))&&q(e.then)&&q(e.catch),kn=((e,t)=>e?setImmediate:t?((n,o)=>(de.addEventListener("message",({source:r,data:a})=>{r===de&&a===n&&o.length&&o.shift()()},!1),r=>{o.push(r),de.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",q(de.postMessage)),gr=typeof queueMicrotask<"u"?queueMicrotask.bind(de):typeof process<"u"&&process.nextTick||kn,br=e=>e!=null&&q(e[Ge]),d={isArray:ve,isArrayBuffer:gn,isBuffer:Pe,isFormData:ja,isArrayBufferView:Ra,isString:Ba,isNumber:bn,isBoolean:Ma,isObject:Ee,isPlainObject:Ue,isEmptyObject:Ua,isReadableStream:qa,isRequest:Ka,isResponse:Ga,isHeaders:Wa,isUndefined:be,isDate:za,isFile:Na,isBlob:Va,isRegExp:ir,isFunction:q,isStream:_a,isURLSearchParams:Ha,isTypedArray:nr,isFileList:Fa,forEach:Ie,merge:ct,extend:Xa,trim:Ja,stripBOM:Za,inherits:Ya,toFlatObject:Qa,kindOf:We,kindOfTest:Z,endsWith:er,toArray:tr,forEachEntry:or,matchAll:ar,isHTMLForm:rr,hasOwnProperty:Bt,hasOwnProp:Bt,reduceDescriptors:wn,freezeMethods:cr,toObjectSet:lr,toCamelCase:sr,noop:dr,toFiniteNumber:ur,findKey:vn,global:de,isContextDefined:yn,isSpecCompliantForm:pr,toJSONObject:fr,isAsyncFn:hr,isThenable:mr,setImmediate:kn,asap:gr,isIterable:br};function A(e,t,n,o,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),o&&(this.request=o),r&&(this.response=r,this.status=r.status?r.status:null)}d.inherits(A,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:d.toJSONObject(this.config),code:this.code,status:this.status}}});const xn=A.prototype,Cn={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Cn[e]={value:e}});Object.defineProperties(A,Cn);Object.defineProperty(xn,"isAxiosError",{value:!0});A.from=(e,t,n,o,r,a)=>{const s=Object.create(xn);d.toFlatObject(e,s,function(i){return i!==Error.prototype},l=>l!=="isAxiosError");const c=e&&e.message?e.message:"Error",u=t==null&&e?e.code:t;return A.call(s,c,u,n,o,r),e&&s.cause==null&&Object.defineProperty(s,"cause",{value:e,configurable:!0}),s.name=e&&e.name||"Error",a&&Object.assign(s,a),s};const vr=null;function lt(e){return d.isPlainObject(e)||d.isArray(e)}function Sn(e){return d.endsWith(e,"[]")?e.slice(0,-2):e}function Mt(e,t,n){return e?e.concat(t).map(function(r,a){return r=Sn(r),!n&&a?"["+r+"]":r}).join(n?".":""):t}function yr(e){return d.isArray(e)&&!e.some(lt)}const wr=d.toFlatObject(d,{},null,function(t){return/^is[A-Z]/.test(t)});function Xe(e,t,n){if(!d.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=d.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,g){return!d.isUndefined(g[y])});const o=n.metaTokens,r=n.visitor||i,a=n.dots,s=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&d.isSpecCompliantForm(t);if(!d.isFunction(r))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(d.isDate(f))return f.toISOString();if(d.isBoolean(f))return f.toString();if(!u&&d.isBlob(f))throw new A("Blob is not supported. Use a Buffer instead.");return d.isArrayBuffer(f)||d.isTypedArray(f)?u&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function i(f,y,g){let U=f;if(f&&!g&&typeof f=="object"){if(d.endsWith(y,"{}"))y=o?y:y.slice(0,-2),f=JSON.stringify(f);else if(d.isArray(f)&&yr(f)||(d.isFileList(f)||d.endsWith(y,"[]"))&&(U=d.toArray(f)))return y=Sn(y),U.forEach(function(B,N){!(d.isUndefined(B)||B===null)&&t.append(s===!0?Mt([y],N,a):s===null?y:y+"[]",l(B))}),!1}return lt(f)?!0:(t.append(Mt(g,y,a),l(f)),!1)}const p=[],v=Object.assign(wr,{defaultVisitor:i,convertValue:l,isVisitable:lt});function D(f,y){if(!d.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(f),d.forEach(f,function(U,F){(!(d.isUndefined(U)||U===null)&&r.call(t,U,d.isString(F)?F.trim():F,y,v))===!0&&D(U,y?y.concat(F):[F])}),p.pop()}}if(!d.isObject(e))throw new TypeError("data must be an object");return D(e),t}function Ut(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function kt(e,t){this._pairs=[],e&&Xe(e,this,t)}const $n=kt.prototype;$n.append=function(t,n){this._pairs.push([t,n])};$n.toString=function(t){const n=t?function(o){return t.call(this,o,Ut)}:Ut;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function kr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function An(e,t,n){if(!t)return e;const o=n&&n.encode||kr;d.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let a;if(r?a=r(t,n):a=d.isURLSearchParams(t)?t.toString():new kt(t,n).toString(o),a){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class zt{constructor(){this.handlers=[]}use(t,n,o){return this.handlers.push({fulfilled:t,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){d.forEach(this.handlers,function(o){o!==null&&t(o)})}}const Pn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xr=typeof URLSearchParams<"u"?URLSearchParams:kt,Cr=typeof FormData<"u"?FormData:null,Sr=typeof Blob<"u"?Blob:null,$r={isBrowser:!0,classes:{URLSearchParams:xr,FormData:Cr,Blob:Sr},protocols:["http","https","file","blob","url","data"]},xt=typeof window<"u"&&typeof document<"u",dt=typeof navigator=="object"&&navigator||void 0,Ar=xt&&(!dt||["ReactNative","NativeScript","NS"].indexOf(dt.product)<0),Pr=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Er=xt&&window.location.href||"http://localhost",Ir=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xt,hasStandardBrowserEnv:Ar,hasStandardBrowserWebWorkerEnv:Pr,navigator:dt,origin:Er},Symbol.toStringTag,{value:"Module"})),H={...Ir,...$r};function Tr(e,t){return Xe(e,new H.classes.URLSearchParams,{visitor:function(n,o,r,a){return H.isNode&&d.isBuffer(n)?(this.append(o,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...t})}function Dr(e){return d.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Or(e){const t={},n=Object.keys(e);let o;const r=n.length;let a;for(o=0;o<r;o++)a=n[o],t[a]=e[a];return t}function En(e){function t(n,o,r,a){let s=n[a++];if(s==="__proto__")return!0;const c=Number.isFinite(+s),u=a>=n.length;return s=!s&&d.isArray(r)?r.length:s,u?(d.hasOwnProp(r,s)?r[s]=[r[s],o]:r[s]=o,!c):((!r[s]||!d.isObject(r[s]))&&(r[s]=[]),t(n,o,r[s],a)&&d.isArray(r[s])&&(r[s]=Or(r[s])),!c)}if(d.isFormData(e)&&d.isFunction(e.entries)){const n={};return d.forEachEntry(e,(o,r)=>{t(Dr(o),r,n,0)}),n}return null}function Lr(e,t,n){if(d.isString(e))try{return(t||JSON.parse)(e),d.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const Te={transitional:Pn,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const o=n.getContentType()||"",r=o.indexOf("application/json")>-1,a=d.isObject(t);if(a&&d.isHTMLForm(t)&&(t=new FormData(t)),d.isFormData(t))return r?JSON.stringify(En(t)):t;if(d.isArrayBuffer(t)||d.isBuffer(t)||d.isStream(t)||d.isFile(t)||d.isBlob(t)||d.isReadableStream(t))return t;if(d.isArrayBufferView(t))return t.buffer;if(d.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(a){if(o.indexOf("application/x-www-form-urlencoded")>-1)return Tr(t,this.formSerializer).toString();if((c=d.isFileList(t))||o.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Xe(c?{"files[]":t}:t,u&&new u,this.formSerializer)}}return a||r?(n.setContentType("application/json",!1),Lr(t)):t}],transformResponse:[function(t){const n=this.transitional||Te.transitional,o=n&&n.forcedJSONParsing,r=this.responseType==="json";if(d.isResponse(t)||d.isReadableStream(t))return t;if(t&&d.isString(t)&&(o&&!this.responseType||r)){const s=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(t,this.parseReviver)}catch(c){if(s)throw c.name==="SyntaxError"?A.from(c,A.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:H.classes.FormData,Blob:H.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};d.forEach(["delete","get","head","post","put","patch"],e=>{Te.headers[e]={}});const Rr=d.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Br=e=>{const t={};let n,o,r;return e&&e.split(`
`).forEach(function(s){r=s.indexOf(":"),n=s.substring(0,r).trim().toLowerCase(),o=s.substring(r+1).trim(),!(!n||t[n]&&Rr[n])&&(n==="set-cookie"?t[n]?t[n].push(o):t[n]=[o]:t[n]=t[n]?t[n]+", "+o:o)}),t},Nt=Symbol("internals");function xe(e){return e&&String(e).trim().toLowerCase()}function ze(e){return e===!1||e==null?e:d.isArray(e)?e.map(ze):String(e)}function Mr(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)t[o[1]]=o[2];return t}const Ur=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function et(e,t,n,o,r){if(d.isFunction(o))return o.call(this,t,n);if(r&&(t=n),!!d.isString(t)){if(d.isString(o))return t.indexOf(o)!==-1;if(d.isRegExp(o))return o.test(t)}}function zr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,o)=>n.toUpperCase()+o)}function Nr(e,t){const n=d.toCamelCase(" "+t);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(r,a,s){return this[o].call(this,t,r,a,s)},configurable:!0})})}let K=class{constructor(t){t&&this.set(t)}set(t,n,o){const r=this;function a(c,u,l){const i=xe(u);if(!i)throw new Error("header name must be a non-empty string");const p=d.findKey(r,i);(!p||r[p]===void 0||l===!0||l===void 0&&r[p]!==!1)&&(r[p||u]=ze(c))}const s=(c,u)=>d.forEach(c,(l,i)=>a(l,i,u));if(d.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(d.isString(t)&&(t=t.trim())&&!Ur(t))s(Br(t),n);else if(d.isObject(t)&&d.isIterable(t)){let c={},u,l;for(const i of t){if(!d.isArray(i))throw TypeError("Object iterator must return a key-value pair");c[l=i[0]]=(u=c[l])?d.isArray(u)?[...u,i[1]]:[u,i[1]]:i[1]}s(c,n)}else t!=null&&a(n,t,o);return this}get(t,n){if(t=xe(t),t){const o=d.findKey(this,t);if(o){const r=this[o];if(!n)return r;if(n===!0)return Mr(r);if(d.isFunction(n))return n.call(this,r,o);if(d.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=xe(t),t){const o=d.findKey(this,t);return!!(o&&this[o]!==void 0&&(!n||et(this,this[o],o,n)))}return!1}delete(t,n){const o=this;let r=!1;function a(s){if(s=xe(s),s){const c=d.findKey(o,s);c&&(!n||et(o,o[c],c,n))&&(delete o[c],r=!0)}}return d.isArray(t)?t.forEach(a):a(t),r}clear(t){const n=Object.keys(this);let o=n.length,r=!1;for(;o--;){const a=n[o];(!t||et(this,this[a],a,t,!0))&&(delete this[a],r=!0)}return r}normalize(t){const n=this,o={};return d.forEach(this,(r,a)=>{const s=d.findKey(o,a);if(s){n[s]=ze(r),delete n[a];return}const c=t?zr(a):String(a).trim();c!==a&&delete n[a],n[c]=ze(r),o[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return d.forEach(this,(o,r)=>{o!=null&&o!==!1&&(n[r]=t&&d.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const o=new this(t);return n.forEach(r=>o.set(r)),o}static accessor(t){const o=(this[Nt]=this[Nt]={accessors:{}}).accessors,r=this.prototype;function a(s){const c=xe(s);o[c]||(Nr(r,s),o[c]=!0)}return d.isArray(t)?t.forEach(a):a(t),this}};K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);d.reduceDescriptors(K.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(o){this[n]=o}}});d.freezeMethods(K);function tt(e,t){const n=this||Te,o=t||n,r=K.from(o.headers);let a=o.data;return d.forEach(e,function(c){a=c.call(n,a,r.normalize(),t?t.status:void 0)}),r.normalize(),a}function In(e){return!!(e&&e.__CANCEL__)}function ye(e,t,n){A.call(this,e??"canceled",A.ERR_CANCELED,t,n),this.name="CanceledError"}d.inherits(ye,A,{__CANCEL__:!0});function Tn(e,t,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):t(new A("Request failed with status code "+n.status,[A.ERR_BAD_REQUEST,A.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Vr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Fr(e,t){e=e||10;const n=new Array(e),o=new Array(e);let r=0,a=0,s;return t=t!==void 0?t:1e3,function(u){const l=Date.now(),i=o[a];s||(s=l),n[r]=u,o[r]=l;let p=a,v=0;for(;p!==r;)v+=n[p++],p=p%e;if(r=(r+1)%e,r===a&&(a=(a+1)%e),l-s<t)return;const D=i&&l-i;return D?Math.round(v*1e3/D):void 0}}function _r(e,t){let n=0,o=1e3/t,r,a;const s=(l,i=Date.now())=>{n=i,r=null,a&&(clearTimeout(a),a=null),e(...l)};return[(...l)=>{const i=Date.now(),p=i-n;p>=o?s(l,i):(r=l,a||(a=setTimeout(()=>{a=null,s(r)},o-p)))},()=>r&&s(r)]}const Ve=(e,t,n=3)=>{let o=0;const r=Fr(50,250);return _r(a=>{const s=a.loaded,c=a.lengthComputable?a.total:void 0,u=s-o,l=r(u),i=s<=c;o=s;const p={loaded:s,total:c,progress:c?s/c:void 0,bytes:u,rate:l||void 0,estimated:l&&c&&i?(c-s)/l:void 0,event:a,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(p)},n)},Vt=(e,t)=>{const n=e!=null;return[o=>t[0]({lengthComputable:n,total:e,loaded:o}),t[1]]},Ft=e=>(...t)=>d.asap(()=>e(...t)),jr=H.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,H.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(H.origin),H.navigator&&/(msie|trident)/i.test(H.navigator.userAgent)):()=>!0,Hr=H.hasStandardBrowserEnv?{write(e,t,n,o,r,a,s){if(typeof document>"u")return;const c=[`${e}=${encodeURIComponent(t)}`];d.isNumber(n)&&c.push(`expires=${new Date(n).toUTCString()}`),d.isString(o)&&c.push(`path=${o}`),d.isString(r)&&c.push(`domain=${r}`),a===!0&&c.push("secure"),d.isString(s)&&c.push(`SameSite=${s}`),document.cookie=c.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function qr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Kr(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Dn(e,t,n){let o=!qr(t);return e&&(o||n==!1)?Kr(e,t):t}const _t=e=>e instanceof K?{...e}:e;function pe(e,t){t=t||{};const n={};function o(l,i,p,v){return d.isPlainObject(l)&&d.isPlainObject(i)?d.merge.call({caseless:v},l,i):d.isPlainObject(i)?d.merge({},i):d.isArray(i)?i.slice():i}function r(l,i,p,v){if(d.isUndefined(i)){if(!d.isUndefined(l))return o(void 0,l,p,v)}else return o(l,i,p,v)}function a(l,i){if(!d.isUndefined(i))return o(void 0,i)}function s(l,i){if(d.isUndefined(i)){if(!d.isUndefined(l))return o(void 0,l)}else return o(void 0,i)}function c(l,i,p){if(p in t)return o(l,i);if(p in e)return o(void 0,l)}const u={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c,headers:(l,i,p)=>r(_t(l),_t(i),p,!0)};return d.forEach(Object.keys({...e,...t}),function(i){const p=u[i]||r,v=p(e[i],t[i],i);d.isUndefined(v)&&p!==c||(n[i]=v)}),n}const On=e=>{const t=pe({},e);let{data:n,withXSRFToken:o,xsrfHeaderName:r,xsrfCookieName:a,headers:s,auth:c}=t;if(t.headers=s=K.from(s),t.url=An(Dn(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),c&&s.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),d.isFormData(n)){if(H.hasStandardBrowserEnv||H.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(d.isFunction(n.getHeaders)){const u=n.getHeaders(),l=["content-type","content-length"];Object.entries(u).forEach(([i,p])=>{l.includes(i.toLowerCase())&&s.set(i,p)})}}if(H.hasStandardBrowserEnv&&(o&&d.isFunction(o)&&(o=o(t)),o||o!==!1&&jr(t.url))){const u=r&&a&&Hr.read(a);u&&s.set(r,u)}return t},Gr=typeof XMLHttpRequest<"u",Wr=Gr&&function(e){return new Promise(function(n,o){const r=On(e);let a=r.data;const s=K.from(r.headers).normalize();let{responseType:c,onUploadProgress:u,onDownloadProgress:l}=r,i,p,v,D,f;function y(){D&&D(),f&&f(),r.cancelToken&&r.cancelToken.unsubscribe(i),r.signal&&r.signal.removeEventListener("abort",i)}let g=new XMLHttpRequest;g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout;function U(){if(!g)return;const B=K.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),V={data:!c||c==="text"||c==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:B,config:e,request:g};Tn(function($){n($),y()},function($){o($),y()},V),g=null}"onloadend"in g?g.onloadend=U:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.indexOf("file:")===0)||setTimeout(U)},g.onabort=function(){g&&(o(new A("Request aborted",A.ECONNABORTED,e,g)),g=null)},g.onerror=function(N){const V=N&&N.message?N.message:"Network Error",T=new A(V,A.ERR_NETWORK,e,g);T.event=N||null,o(T),g=null},g.ontimeout=function(){let N=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const V=r.transitional||Pn;r.timeoutErrorMessage&&(N=r.timeoutErrorMessage),o(new A(N,V.clarifyTimeoutError?A.ETIMEDOUT:A.ECONNABORTED,e,g)),g=null},a===void 0&&s.setContentType(null),"setRequestHeader"in g&&d.forEach(s.toJSON(),function(N,V){g.setRequestHeader(V,N)}),d.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),c&&c!=="json"&&(g.responseType=r.responseType),l&&([v,f]=Ve(l,!0),g.addEventListener("progress",v)),u&&g.upload&&([p,D]=Ve(u),g.upload.addEventListener("progress",p),g.upload.addEventListener("loadend",D)),(r.cancelToken||r.signal)&&(i=B=>{g&&(o(!B||B.type?new ye(null,e,g):B),g.abort(),g=null)},r.cancelToken&&r.cancelToken.subscribe(i),r.signal&&(r.signal.aborted?i():r.signal.addEventListener("abort",i)));const F=Vr(r.url);if(F&&H.protocols.indexOf(F)===-1){o(new A("Unsupported protocol "+F+":",A.ERR_BAD_REQUEST,e));return}g.send(a||null)})},Jr=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let o=new AbortController,r;const a=function(l){if(!r){r=!0,c();const i=l instanceof Error?l:this.reason;o.abort(i instanceof A?i:new ye(i instanceof Error?i.message:i))}};let s=t&&setTimeout(()=>{s=null,a(new A(`timeout ${t} of ms exceeded`,A.ETIMEDOUT))},t);const c=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(a):l.removeEventListener("abort",a)}),e=null)};e.forEach(l=>l.addEventListener("abort",a));const{signal:u}=o;return u.unsubscribe=()=>d.asap(c),u}},Xr=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let o=0,r;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Zr=async function*(e,t){for await(const n of Yr(e))yield*Xr(n,t)},Yr=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:o}=await t.read();if(n)break;yield o}}finally{await t.cancel()}},jt=(e,t,n,o)=>{const r=Zr(e,t);let a=0,s,c=u=>{s||(s=!0,o&&o(u))};return new ReadableStream({async pull(u){try{const{done:l,value:i}=await r.next();if(l){c(),u.close();return}let p=i.byteLength;if(n){let v=a+=p;n(v)}u.enqueue(new Uint8Array(i))}catch(l){throw c(l),l}},cancel(u){return c(u),r.return()}},{highWaterMark:2})},Ht=64*1024,{isFunction:Re}=d,Qr=(({Request:e,Response:t})=>({Request:e,Response:t}))(d.global),{ReadableStream:qt,TextEncoder:Kt}=d.global,Gt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},es=e=>{e=d.merge.call({skipUndefined:!0},Qr,e);const{fetch:t,Request:n,Response:o}=e,r=t?Re(t):typeof fetch=="function",a=Re(n),s=Re(o);if(!r)return!1;const c=r&&Re(qt),u=r&&(typeof Kt=="function"?(f=>y=>f.encode(y))(new Kt):async f=>new Uint8Array(await new n(f).arrayBuffer())),l=a&&c&&Gt(()=>{let f=!1;const y=new n(H.origin,{body:new qt,method:"POST",get duplex(){return f=!0,"half"}}).headers.has("Content-Type");return f&&!y}),i=s&&c&&Gt(()=>d.isReadableStream(new o("").body)),p={stream:i&&(f=>f.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(f=>{!p[f]&&(p[f]=(y,g)=>{let U=y&&y[f];if(U)return U.call(y);throw new A(`Response type '${f}' is not supported`,A.ERR_NOT_SUPPORT,g)})});const v=async f=>{if(f==null)return 0;if(d.isBlob(f))return f.size;if(d.isSpecCompliantForm(f))return(await new n(H.origin,{method:"POST",body:f}).arrayBuffer()).byteLength;if(d.isArrayBufferView(f)||d.isArrayBuffer(f))return f.byteLength;if(d.isURLSearchParams(f)&&(f=f+""),d.isString(f))return(await u(f)).byteLength},D=async(f,y)=>{const g=d.toFiniteNumber(f.getContentLength());return g??v(y)};return async f=>{let{url:y,method:g,data:U,signal:F,cancelToken:B,timeout:N,onDownloadProgress:V,onUploadProgress:T,responseType:$,headers:k,withCredentials:E="same-origin",fetchOptions:L}=On(f),fe=t||fetch;$=$?($+"").toLowerCase():"text";let De=Jr([F,B&&B.toAbortSignal()],N),we=null;const le=De&&De.unsubscribe&&(()=>{De.unsubscribe()});let $t;try{if(T&&l&&g!=="get"&&g!=="head"&&($t=await D(k,U))!==0){let ie=new n(y,{method:"POST",body:U,duplex:"half"}),he;if(d.isFormData(U)&&(he=ie.headers.get("content-type"))&&k.setContentType(he),ie.body){const[Ye,Oe]=Vt($t,Ve(Ft(T)));U=jt(ie.body,Ht,Ye,Oe)}}d.isString(E)||(E=E?"include":"omit");const Y=a&&"credentials"in n.prototype,At={...L,signal:De,method:g.toUpperCase(),headers:k.normalize().toJSON(),body:U,duplex:"half",credentials:Y?E:void 0};we=a&&new n(y,At);let se=await(a?fe(we,L):fe(y,At));const Pt=i&&($==="stream"||$==="response");if(i&&(V||Pt&&le)){const ie={};["status","statusText","headers"].forEach(Et=>{ie[Et]=se[Et]});const he=d.toFiniteNumber(se.headers.get("content-length")),[Ye,Oe]=V&&Vt(he,Ve(Ft(V),!0))||[];se=new o(jt(se.body,Ht,Ye,()=>{Oe&&Oe(),le&&le()}),ie)}$=$||"text";let Fn=await p[d.findKey(p,$)||"text"](se,f);return!Pt&&le&&le(),await new Promise((ie,he)=>{Tn(ie,he,{data:Fn,headers:K.from(se.headers),status:se.status,statusText:se.statusText,config:f,request:we})})}catch(Y){throw le&&le(),Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)?Object.assign(new A("Network Error",A.ERR_NETWORK,f,we),{cause:Y.cause||Y}):A.from(Y,Y&&Y.code,f,we)}}},ts=new Map,Ln=e=>{let t=e&&e.env||{};const{fetch:n,Request:o,Response:r}=t,a=[o,r,n];let s=a.length,c=s,u,l,i=ts;for(;c--;)u=a[c],l=i.get(u),l===void 0&&i.set(u,l=c?new Map:es(t)),i=l;return l};Ln();const Ct={http:vr,xhr:Wr,fetch:{get:Ln}};d.forEach(Ct,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Wt=e=>`- ${e}`,ns=e=>d.isFunction(e)||e===null||e===!1;function os(e,t){e=d.isArray(e)?e:[e];const{length:n}=e;let o,r;const a={};for(let s=0;s<n;s++){o=e[s];let c;if(r=o,!ns(o)&&(r=Ct[(c=String(o)).toLowerCase()],r===void 0))throw new A(`Unknown adapter '${c}'`);if(r&&(d.isFunction(r)||(r=r.get(t))))break;a[c||"#"+s]=r}if(!r){const s=Object.entries(a).map(([u,l])=>`adapter ${u} `+(l===!1?"is not supported by the environment":"is not available in the build"));let c=n?s.length>1?`since :
`+s.map(Wt).join(`
`):" "+Wt(s[0]):"as no adapter specified";throw new A("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return r}const Rn={getAdapter:os,adapters:Ct};function nt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ye(null,e)}function Jt(e){return nt(e),e.headers=K.from(e.headers),e.data=tt.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Rn.getAdapter(e.adapter||Te.adapter,e)(e).then(function(o){return nt(e),o.data=tt.call(e,e.transformResponse,o),o.headers=K.from(o.headers),o},function(o){return In(o)||(nt(e),o&&o.response&&(o.response.data=tt.call(e,e.transformResponse,o.response),o.response.headers=K.from(o.response.headers))),Promise.reject(o)})}const Bn="1.13.2",Ze={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ze[e]=function(o){return typeof o===e||"a"+(t<1?"n ":" ")+e}});const Xt={};Ze.transitional=function(t,n,o){function r(a,s){return"[Axios v"+Bn+"] Transitional option '"+a+"'"+s+(o?". "+o:"")}return(a,s,c)=>{if(t===!1)throw new A(r(s," has been removed"+(n?" in "+n:"")),A.ERR_DEPRECATED);return n&&!Xt[s]&&(Xt[s]=!0,console.warn(r(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,s,c):!0}};Ze.spelling=function(t){return(n,o)=>(console.warn(`${o} is likely a misspelling of ${t}`),!0)};function as(e,t,n){if(typeof e!="object")throw new A("options must be an object",A.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let r=o.length;for(;r-- >0;){const a=o[r],s=t[a];if(s){const c=e[a],u=c===void 0||s(c,a,e);if(u!==!0)throw new A("option "+a+" must be "+u,A.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new A("Unknown option "+a,A.ERR_BAD_OPTION)}}const Ne={assertOptions:as,validators:Ze},Q=Ne.validators;let ue=class{constructor(t){this.defaults=t||{},this.interceptors={request:new zt,response:new zt}}async request(t,n){try{return await this._request(t,n)}catch(o){if(o instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const a=r.stack?r.stack.replace(/^.+\n/,""):"";try{o.stack?a&&!String(o.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+a):o.stack=a}catch{}}throw o}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=pe(this.defaults,n);const{transitional:o,paramsSerializer:r,headers:a}=n;o!==void 0&&Ne.assertOptions(o,{silentJSONParsing:Q.transitional(Q.boolean),forcedJSONParsing:Q.transitional(Q.boolean),clarifyTimeoutError:Q.transitional(Q.boolean)},!1),r!=null&&(d.isFunction(r)?n.paramsSerializer={serialize:r}:Ne.assertOptions(r,{encode:Q.function,serialize:Q.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ne.assertOptions(n,{baseUrl:Q.spelling("baseURL"),withXsrfToken:Q.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=a&&d.merge(a.common,a[n.method]);a&&d.forEach(["delete","get","head","post","put","patch","common"],f=>{delete a[f]}),n.headers=K.concat(s,a);const c=[];let u=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(u=u&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let i,p=0,v;if(!u){const f=[Jt.bind(this),void 0];for(f.unshift(...c),f.push(...l),v=f.length,i=Promise.resolve(n);p<v;)i=i.then(f[p++],f[p++]);return i}v=c.length;let D=n;for(;p<v;){const f=c[p++],y=c[p++];try{D=f(D)}catch(g){y.call(this,g);break}}try{i=Jt.call(this,D)}catch(f){return Promise.reject(f)}for(p=0,v=l.length;p<v;)i=i.then(l[p++],l[p++]);return i}getUri(t){t=pe(this.defaults,t);const n=Dn(t.baseURL,t.url,t.allowAbsoluteUrls);return An(n,t.params,t.paramsSerializer)}};d.forEach(["delete","get","head","options"],function(t){ue.prototype[t]=function(n,o){return this.request(pe(o||{},{method:t,url:n,data:(o||{}).data}))}});d.forEach(["post","put","patch"],function(t){function n(o){return function(a,s,c){return this.request(pe(c||{},{method:t,headers:o?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}ue.prototype[t]=n(),ue.prototype[t+"Form"]=n(!0)});let rs=class Mn{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const o=this;this.promise.then(r=>{if(!o._listeners)return;let a=o._listeners.length;for(;a-- >0;)o._listeners[a](r);o._listeners=null}),this.promise.then=r=>{let a;const s=new Promise(c=>{o.subscribe(c),a=c}).then(r);return s.cancel=function(){o.unsubscribe(a)},s},t(function(a,s,c){o.reason||(o.reason=new ye(a,s,c),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=o=>{t.abort(o)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Mn(function(r){t=r}),cancel:t}}};function ss(e){return function(n){return e.apply(null,n)}}function is(e){return d.isObject(e)&&e.isAxiosError===!0}const ut={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ut).forEach(([e,t])=>{ut[t]=e});function Un(e){const t=new ue(e),n=hn(ue.prototype.request,t);return d.extend(n,ue.prototype,t,{allOwnKeys:!0}),d.extend(n,t,null,{allOwnKeys:!0}),n.create=function(r){return Un(pe(e,r))},n}const z=Un(Te);z.Axios=ue;z.CanceledError=ye;z.CancelToken=rs;z.isCancel=In;z.VERSION=Bn;z.toFormData=Xe;z.AxiosError=A;z.Cancel=z.CanceledError;z.all=function(t){return Promise.all(t)};z.spread=ss;z.isAxiosError=is;z.mergeConfig=pe;z.AxiosHeaders=K;z.formToJSON=e=>En(d.isHTMLForm(e)?new FormData(e):e);z.getAdapter=Rn.getAdapter;z.HttpStatusCode=ut;z.default=z;const{Axios:Ji,AxiosError:Xi,CanceledError:Zi,isCancel:Yi,CancelToken:Qi,VERSION:ec,all:tc,Cancel:nc,isAxiosError:oc,spread:ac,toFormData:rc,AxiosHeaders:sc,HttpStatusCode:ic,formToJSON:cc,getAdapter:lc,mergeConfig:dc}=z,cs=[200,201,301,302,307,308],ls=async e=>{try{const t=await z.head(e);return cs.includes(t.status)}catch{return!1}};async function ds(){const e=navigator.language.toLowerCase().startsWith("zh-cn");try{if(await Promise.race([fetch("https://www.google.com",{mode:"no-cors",cache:"no-cache"}),new Promise((n,o)=>setTimeout(()=>o(),2e3))]))return!1}catch{if(e)return!0;try{const t=performance.now();return await fetch("https://www.baidu.com",{mode:"no-cors",cache:"no-cache"}),performance.now()-t<150}catch{return e}}return!1}var zn={name:"ChevronRightIcon",extends:Ke};function us(e,t,n,o,r,a){return h(),S("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}zn.render=us;var St={name:"ChevronUpIcon",extends:Ke};function ps(e,t,n,o,r,a){return h(),S("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[m("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"},null,-1)]),16)}St.render=ps;var fs={root:"p-accordioncontent",content:"p-accordioncontent-content"},hs=X.extend({name:"accordioncontent",classes:fs}),ms={name:"BaseAccordionContent",extends:J,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:hs,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},Fe={name:"AccordionContent",extends:ms,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return b(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function gs(e,t,n,o,r,a){return e.asChild?O(e.$slots,"default",{key:1,class:W(e.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs}):(h(),I(He,b({key:0,name:"p-toggleable-content"},e.ptm("transition",a.ptParams)),{default:P(function(){return[!a.$pcAccordion.lazy||a.$pcAccordionPanel.active?ae((h(),I(j(e.as),b({key:0,class:e.cx("root")},a.attrs),{default:P(function(){return[m("div",b({class:e.cx("content")},e.ptm("content",a.ptParams)),[O(e.$slots,"default")],16)]}),_:3},16,["class"])),[[me,a.$pcAccordion.lazy?!0:a.$pcAccordionPanel.active]]):R("",!0)]}),_:3},16))}Fe.render=gs;var bs={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},vs=X.extend({name:"accordionheader",classes:bs}),ys={name:"BaseAccordionHeader",extends:J,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:vs,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},_e={name:"AccordionHeader",extends:ys,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowDownKey:function(t){var n=this.findNextPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onHomeKey(t),t.preventDefault()},onArrowUpKey:function(t){var n=this.findPrevPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findPanel:function(t){return t?.closest('[data-pc-name="accordionpanel"]')},findHeader:function(t){return Qt(t,'[data-pc-name="accordionheader"]')},findNextPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=n?t:t.nextElementSibling;return o?Dt(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null},findPrevPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=n?t:t.previousElementSibling;return o?Dt(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(t,n){rt(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return b(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}},components:{ChevronUpIcon:St,ChevronDownIcon:eo},directives:{ripple:gt}};function ws(e,t,n,o,r,a){var s=ft("ripple");return e.asChild?O(e.$slots,"default",{key:1,class:W(e.cx("root")),active:a.$pcAccordionPanel.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):ae((h(),I(j(e.as),b({key:0,class:e.cx("root"),onClick:a.onClick},a.attrs),{default:P(function(){return[O(e.$slots,"default",{active:a.$pcAccordionPanel.active}),O(e.$slots,"toggleicon",{active:a.$pcAccordionPanel.active,class:W(e.cx("toggleicon"))},function(){return[a.$pcAccordionPanel.active?(h(),I(j(a.$pcAccordion.$slots.collapseicon?a.$pcAccordion.$slots.collapseicon:a.$pcAccordion.collapseIcon?"span":"ChevronDownIcon"),b({key:0,class:[a.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",a.ptParams)),null,16,["class"])):(h(),I(j(a.$pcAccordion.$slots.expandicon?a.$pcAccordion.$slots.expandicon:a.$pcAccordion.expandIcon?"span":"ChevronUpIcon"),b({key:1,class:[a.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",a.ptParams)),null,16,["class"]))]})]}),_:3},16,["class","onClick"])),[[s]])}_e.render=ws;var ks={root:function(t){var n=t.instance,o=t.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":o.disabled}]}},xs=X.extend({name:"accordionpanel",classes:ks}),Cs={name:"BaseAccordionPanel",extends:J,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:xs,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},je={name:"AccordionPanel",extends:Cs,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return b(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Ss(e,t,n,o,r,a){return e.asChild?O(e.$slots,"default",{key:1,class:W(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(h(),I(j(e.as),b({key:0,class:e.cx("root")},a.attrs),{default:P(function(){return[O(e.$slots,"default")]}),_:3},16,["class"]))}je.render=Ss;var $s=function(t){var n=t.dt;return`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: `.concat(n("accordion.panel.border.width"),`;
    border-color: `).concat(n("accordion.panel.border.color"),`;
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: `).concat(n("accordion.header.padding"),`;
    color: `).concat(n("accordion.header.color"),`;
    background: `).concat(n("accordion.header.background"),`;
    border-style: solid;
    border-width: `).concat(n("accordion.header.border.width"),`;
    border-color: `).concat(n("accordion.header.border.color"),`;
    font-weight: `).concat(n("accordion.header.font.weight"),`;
    border-radius: `).concat(n("accordion.header.border.radius"),`;
    transition: background `).concat(n("accordion.transition.duration"),"; color ").concat(n("accordion.transition.duration"),"color ").concat(n("accordion.transition.duration"),", outline-color ").concat(n("accordion.transition.duration"),", box-shadow ").concat(n("accordion.transition.duration"),`;
    outline-color: transparent;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: `).concat(n("accordion.header.first.border.width"),`;
    border-start-start-radius: `).concat(n("accordion.header.first.top.border.radius"),`;
    border-start-end-radius: `).concat(n("accordion.header.first.top.border.radius"),`;
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: `).concat(n("accordion.header.last.bottom.border.radius"),`;
    border-end-end-radius: `).concat(n("accordion.header.last.bottom.border.radius"),`;
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: `).concat(n("accordion.header.last.active.bottom.border.radius"),`;
    border-end-end-radius: `).concat(n("accordion.header.last.active.bottom.border.radius"),`;
}

.p-accordionheader-toggle-icon {
    color: `).concat(n("accordion.header.toggle.icon.color"),`;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: `).concat(n("accordion.header.focus.ring.shadow"),`;
    outline: `).concat(n("accordion.header.focus.ring.width")," ").concat(n("accordion.header.focus.ring.style")," ").concat(n("accordion.header.focus.ring.color"),`;
    outline-offset: `).concat(n("accordion.header.focus.ring.offset"),`;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: `).concat(n("accordion.header.hover.background"),`;
    color: `).concat(n("accordion.header.hover.color"),`;
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: `).concat(n("accordion.header.toggle.icon.hover.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: `).concat(n("accordion.header.active.background"),`;
    color: `).concat(n("accordion.header.active.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: `).concat(n("accordion.header.toggle.icon.active.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
    background: `).concat(n("accordion.header.active.hover.background"),`;
    color: `).concat(n("accordion.header.active.hover.color"),`;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: `).concat(n("accordion.header.toggle.icon.active.hover.color"),`;
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: `).concat(n("accordion.content.border.width"),`;
    border-color: `).concat(n("accordion.content.border.color"),`;
    background-color: `).concat(n("accordion.content.background"),`;
    color: `).concat(n("accordion.content.color"),`;
    padding: `).concat(n("accordion.content.padding"),`;
}
`)},As={root:"p-accordion p-component"},Ps=X.extend({name:"accordion",theme:$s,classes:As}),Es={name:"BaseAccordion",extends:J,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:Ps,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},Nn={name:"Accordion",extends:Es,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||ge()},value:function(t){this.d_value=t},activeIndex:{immediate:!0,handler:function(t){this.hasAccordionTab&&(this.d_value=this.multiple?t?.map(String):t?.toString())}}},mounted:function(){this.id=this.id||ge()},methods:{isItemActive:function(t){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(t):this.d_value===t},updateValue:function(t){var n,o=this.isItemActive(t);this.multiple?o?this.d_value=this.d_value.filter(function(r){return r!==t}):this.d_value?this.d_value.push(t):this.d_value=[t]:this.d_value=o?null:t,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(o?"tab-close":"tab-open",{originalEvent:void 0,index:Number(t)})},isAccordionTab:function(t){return t.type.name==="AccordionTab"},getTabProp:function(t,n){return t.props?t.props[n]:void 0},getKey:function(t,n){return this.getTabProp(t,"header")||n},getHeaderPT:function(t,n){var o=this;return{root:b({onClick:function(a){return o.onTabClick(a,n)}},this.getTabProp(t,"headerProps"),this.getTabPT(t,"header",n)),toggleicon:b(this.getTabProp(t,"headeractionprops"),this.getTabPT(t,"headeraction",n))}},getContentPT:function(t,n){return{root:b(this.getTabProp(t,"contentProps"),this.getTabPT(t,"toggleablecontent",n)),transition:this.getTabPT(t,"transition",n),content:this.getTabPT(t,"content",n)}},getTabPT:function(t,n,o){var r=this.tabs.length,a={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:o,count:r,first:o===0,last:o===r-1,active:this.isItemActive("".concat(o))}};return b(this.ptm("accordiontab.".concat(n),a),this.ptmo(this.getTabProp(t,"pt"),n,a))},onTabClick:function(t,n){this.$emit("tab-click",{originalEvent:t,index:n})}},computed:{tabs:function(){var t=this;return this.$slots.default().reduce(function(n,o){return t.isAccordionTab(o)?n.push(o):o.children&&o.children instanceof Array&&o.children.forEach(function(r){t.isAccordionTab(r)&&n.push(r)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:je,AccordionHeader:_e,AccordionContent:Fe,ChevronUpIcon:St,ChevronRightIcon:zn}};function Is(e,t,n,o,r,a){var s=te("AccordionHeader"),c=te("AccordionContent"),u=te("AccordionPanel");return h(),S("div",b({class:e.cx("root")},e.ptmi("root")),[a.hasAccordionTab?(h(!0),S(ce,{key:0},mt(a.tabs,function(l,i){return h(),I(u,{key:a.getKey(l,i),value:"".concat(i),pt:{root:a.getTabPT(l,"root",i)},disabled:a.getTabProp(l,"disabled")},{default:P(function(){return[C(s,{class:W(a.getTabProp(l,"headerClass")),pt:a.getHeaderPT(l,i)},{toggleicon:P(function(p){return[p.active?(h(),I(j(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),b({key:0,class:[e.collapseIcon,p.class],"aria-hidden":"true",ref_for:!0},a.getTabPT(l,"headericon",i)),null,16,["class"])):(h(),I(j(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),b({key:1,class:[e.expandIcon,p.class],"aria-hidden":"true",ref_for:!0},a.getTabPT(l,"headericon",i)),null,16,["class"]))]}),default:P(function(){return[l.children&&l.children.headericon?(h(),I(j(l.children.headericon),{key:0,isTabActive:a.isItemActive("".concat(i)),active:a.isItemActive("".concat(i)),index:i},null,8,["isTabActive","active","index"])):R("",!0),l.props&&l.props.header?(h(),S("span",b({key:1,ref_for:!0},a.getTabPT(l,"headertitle",i)),w(l.props.header),17)):R("",!0),l.children&&l.children.header?(h(),I(j(l.children.header),{key:2})):R("",!0)]}),_:2},1032,["class","pt"]),C(c,{pt:a.getContentPT(l,i)},{default:P(function(){return[(h(),I(j(l)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):O(e.$slots,"default",{key:1})],16)}Nn.render=Is;var Ts=function(t){var n=t.dt;return`
.p-message {
    border-radius: `.concat(n("message.border.radius"),`;
    outline-width: `).concat(n("message.border.width"),`;
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: `).concat(n("message.content.padding"),`;
    gap: `).concat(n("message.content.gap"),`;
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: `).concat(n("message.close.button.width"),`;
    height: `).concat(n("message.close.button.height"),`;
    border-radius: `).concat(n("message.close.button.border.radius"),`;
    background: transparent;
    transition: background `).concat(n("message.transition.duration"),", color ").concat(n("message.transition.duration"),", outline-color ").concat(n("message.transition.duration"),", box-shadow ").concat(n("message.transition.duration"),`, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: `).concat(n("message.close.icon.size"),`;
    width: `).concat(n("message.close.icon.size"),`;
    height: `).concat(n("message.close.icon.size"),`;
}

.p-message-close-button:focus-visible {
    outline-width: `).concat(n("message.close.button.focus.ring.width"),`;
    outline-style: `).concat(n("message.close.button.focus.ring.style"),`;
    outline-offset: `).concat(n("message.close.button.focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(n("message.info.background"),`;
    outline-color: `).concat(n("message.info.border.color"),`;
    color: `).concat(n("message.info.color"),`;
    box-shadow: `).concat(n("message.info.shadow"),`;
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.info.close.button.focus.ring.shadow"),`;
}

.p-message-info .p-message-close-button:hover {
    background: `).concat(n("message.info.close.button.hover.background"),`;
}

.p-message-info.p-message-outlined {
    color: `).concat(n("message.info.outlined.color"),`;
    outline-color: `).concat(n("message.info.outlined.border.color"),`;
}

.p-message-info.p-message-simple {
    color: `).concat(n("message.info.simple.color"),`;
}

.p-message-success {
    background: `).concat(n("message.success.background"),`;
    outline-color: `).concat(n("message.success.border.color"),`;
    color: `).concat(n("message.success.color"),`;
    box-shadow: `).concat(n("message.success.shadow"),`;
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.success.close.button.focus.ring.shadow"),`;
}

.p-message-success .p-message-close-button:hover {
    background: `).concat(n("message.success.close.button.hover.background"),`;
}

.p-message-success.p-message-outlined {
    color: `).concat(n("message.success.outlined.color"),`;
    outline-color: `).concat(n("message.success.outlined.border.color"),`;
}

.p-message-success.p-message-simple {
    color: `).concat(n("message.success.simple.color"),`;
}

.p-message-warn {
    background: `).concat(n("message.warn.background"),`;
    outline-color: `).concat(n("message.warn.border.color"),`;
    color: `).concat(n("message.warn.color"),`;
    box-shadow: `).concat(n("message.warn.shadow"),`;
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.warn.close.button.focus.ring.shadow"),`;
}

.p-message-warn .p-message-close-button:hover {
    background: `).concat(n("message.warn.close.button.hover.background"),`;
}

.p-message-warn.p-message-outlined {
    color: `).concat(n("message.warn.outlined.color"),`;
    outline-color: `).concat(n("message.warn.outlined.border.color"),`;
}

.p-message-warn.p-message-simple {
    color: `).concat(n("message.warn.simple.color"),`;
}

.p-message-error {
    background: `).concat(n("message.error.background"),`;
    outline-color: `).concat(n("message.error.border.color"),`;
    color: `).concat(n("message.error.color"),`;
    box-shadow: `).concat(n("message.error.shadow"),`;
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.error.close.button.focus.ring.shadow"),`;
}

.p-message-error .p-message-close-button:hover {
    background: `).concat(n("message.error.close.button.hover.background"),`;
}

.p-message-error.p-message-outlined {
    color: `).concat(n("message.error.outlined.color"),`;
    outline-color: `).concat(n("message.error.outlined.border.color"),`;
}

.p-message-error.p-message-simple {
    color: `).concat(n("message.error.simple.color"),`;
}

.p-message-secondary {
    background: `).concat(n("message.secondary.background"),`;
    outline-color: `).concat(n("message.secondary.border.color"),`;
    color: `).concat(n("message.secondary.color"),`;
    box-shadow: `).concat(n("message.secondary.shadow"),`;
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.secondary.close.button.focus.ring.shadow"),`;
}

.p-message-secondary .p-message-close-button:hover {
    background: `).concat(n("message.secondary.close.button.hover.background"),`;
}

.p-message-secondary.p-message-outlined {
    color: `).concat(n("message.secondary.outlined.color"),`;
    outline-color: `).concat(n("message.secondary.outlined.border.color"),`;
}

.p-message-secondary.p-message-simple {
    color: `).concat(n("message.secondary.simple.color"),`;
}

.p-message-contrast {
    background: `).concat(n("message.contrast.background"),`;
    outline-color: `).concat(n("message.contrast.border.color"),`;
    color: `).concat(n("message.contrast.color"),`;
    box-shadow: `).concat(n("message.contrast.shadow"),`;
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: `).concat(n("message.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(n("message.contrast.close.button.focus.ring.shadow"),`;
}

.p-message-contrast .p-message-close-button:hover {
    background: `).concat(n("message.contrast.close.button.hover.background"),`;
}

.p-message-contrast.p-message-outlined {
    color: `).concat(n("message.contrast.outlined.color"),`;
    outline-color: `).concat(n("message.contrast.outlined.border.color"),`;
}

.p-message-contrast.p-message-simple {
    color: `).concat(n("message.contrast.simple.color"),`;
}

.p-message-text {
    font-size: `).concat(n("message.text.font.size"),`;
    font-weight: `).concat(n("message.text.font.weight"),`;
}

.p-message-icon {
    font-size: `).concat(n("message.icon.size"),`;
    width: `).concat(n("message.icon.size"),`;
    height: `).concat(n("message.icon.size"),`;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: `).concat(n("message.content.sm.padding"),`;
}

.p-message-sm .p-message-text {
    font-size: `).concat(n("message.text.sm.font.size"),`;
}

.p-message-sm .p-message-icon {
    font-size: `).concat(n("message.icon.sm.size"),`;
    width: `).concat(n("message.icon.sm.size"),`;
    height: `).concat(n("message.icon.sm.size"),`;
}

.p-message-sm .p-message-close-icon {
    font-size: `).concat(n("message.close.icon.sm.size"),`;
    width: `).concat(n("message.close.icon.sm.size"),`;
    height: `).concat(n("message.close.icon.sm.size"),`;
}

.p-message-lg .p-message-content {
    padding: `).concat(n("message.content.lg.padding"),`;
}

.p-message-lg .p-message-text {
    font-size: `).concat(n("message.text.lg.font.size"),`;
}

.p-message-lg .p-message-icon {
    font-size: `).concat(n("message.icon.lg.size"),`;
    width: `).concat(n("message.icon.lg.size"),`;
    height: `).concat(n("message.icon.lg.size"),`;
}

.p-message-lg .p-message-close-icon {
    font-size: `).concat(n("message.close.icon.lg.size"),`;
    width: `).concat(n("message.close.icon.lg.size"),`;
    height: `).concat(n("message.close.icon.lg.size"),`;
}

.p-message-outlined {
    background: transparent;
    outline-width: `).concat(n("message.outlined.border.width"),`;
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: `).concat(n("message.simple.content.padding"),`;
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}
`)},Ds={root:function(t){var n=t.props;return["p-message p-component p-message-"+n.severity,{"p-message-outlined":n.variant==="outlined","p-message-simple":n.variant==="simple","p-message-sm":n.size==="small","p-message-lg":n.size==="large"}]},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Os=X.extend({name:"message",theme:Ts,classes:Ds}),Ls={name:"BaseMessage",extends:J,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null},size:{type:String,default:null},variant:{type:String,default:null}},style:Os,provide:function(){return{$pcMessage:this,$parentInstance:this}}},Ce={name:"Message",extends:Ls,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var t=this;this.life&&setTimeout(function(){t.visible=!1,t.$emit("life-end")},this.life)},methods:{close:function(t){this.visible=!1,this.$emit("close",t)}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:gt},components:{TimesIcon:on}};function Ae(e){"@babel/helpers - typeof";return Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ae(e)}function Zt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,o)}return n}function Yt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zt(Object(n),!0).forEach(function(o){Rs(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zt(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Rs(e,t,n){return(t=Bs(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bs(e){var t=Ms(e,"string");return Ae(t)=="symbol"?t:t+""}function Ms(e,t){if(Ae(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(Ae(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Us=["aria-label"];function zs(e,t,n,o,r,a){var s=te("TimesIcon"),c=ft("ripple");return h(),I(He,b({name:"p-message",appear:""},e.ptmi("transition")),{default:P(function(){return[ae(m("div",b({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("root")),[e.$slots.container?O(e.$slots,"container",{key:0,closeCallback:a.close}):(h(),S("div",b({key:1,class:e.cx("content")},e.ptm("content")),[O(e.$slots,"icon",{class:W(e.cx("icon"))},function(){return[(h(),I(j(e.icon?"span":null),b({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]}),e.$slots.default?(h(),S("div",b({key:0,class:e.cx("text")},e.ptm("text")),[O(e.$slots,"default")],16)):R("",!0),e.closable?ae((h(),S("button",b({key:1,class:e.cx("closeButton"),"aria-label":a.closeAriaLabel,type:"button",onClick:t[0]||(t[0]=function(u){return a.close(u)})},Yt(Yt({},e.closeButtonProps),e.ptm("closeButton"))),[O(e.$slots,"closeicon",{},function(){return[e.closeIcon?(h(),S("i",b({key:0,class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16)):(h(),I(s,b({key:1,class:[e.cx("closeIcon"),e.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))]})],16,Us)),[[c]]):R("",!0)],16))],16),[[me,r.visible]])]}),_:3},16)}Ce.render=zs;const Ns={settingId:"Comfy-Desktop.UV.PythonInstallMirror",mirror:"https://github.com/astral-sh/python-build-standalone/releases/download",fallbackMirror:"https://python-standalone.org/mirror/astral-sh/python-build-standalone",validationPathSuffix:"/20250115/cpython-3.10.16+20250115-aarch64-apple-darwin-debug-full.tar.zst.sha256"},ot={settingId:"Comfy-Desktop.UV.PypiInstallMirror",mirror:"https://pypi.org/simple/",fallbackMirror:"https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple"};var _=(e=>(e.IDLE="IDLE",e.LOADING="LOADING",e.VALID="VALID",e.INVALID="INVALID",e))(_||{}),Vs=function(t){var n=t.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(n("checkbox.width"),`;
    height: `).concat(n("checkbox.height"),`;
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: `).concat(n("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(n("checkbox.border.radius"),`;
    border: 1px solid `).concat(n("checkbox.border.color"),`;
    background: `).concat(n("checkbox.background"),`;
    width: `).concat(n("checkbox.width"),`;
    height: `).concat(n("checkbox.height"),`;
    transition: background `).concat(n("checkbox.transition.duration"),", color ").concat(n("checkbox.transition.duration"),", border-color ").concat(n("checkbox.transition.duration"),", box-shadow ").concat(n("checkbox.transition.duration"),", outline-color ").concat(n("checkbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("checkbox.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(n("checkbox.transition.duration"),`;
    color: `).concat(n("checkbox.icon.color"),`;
    font-size: `).concat(n("checkbox.icon.size"),`;
    width: `).concat(n("checkbox.icon.size"),`;
    height: `).concat(n("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(n("checkbox.hover.border.color"),`;
}

.p-checkbox-checked .p-checkbox-box {
    border-color: `).concat(n("checkbox.checked.border.color"),`;
    background: `).concat(n("checkbox.checked.background"),`;
}

.p-checkbox-checked .p-checkbox-icon {
    color: `).concat(n("checkbox.icon.checked.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(n("checkbox.checked.hover.background"),`;
    border-color: `).concat(n("checkbox.checked.hover.border.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: `).concat(n("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(n("checkbox.focus.border.color"),`;
    box-shadow: `).concat(n("checkbox.focus.ring.shadow"),`;
    outline: `).concat(n("checkbox.focus.ring.width")," ").concat(n("checkbox.focus.ring.style")," ").concat(n("checkbox.focus.ring.color"),`;
    outline-offset: `).concat(n("checkbox.focus.ring.offset"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(n("checkbox.checked.focus.border.color"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(n("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(n("checkbox.filled.background"),`;
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: `).concat(n("checkbox.checked.background"),`;
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(n("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(n("checkbox.disabled.background"),`;
    border-color: `).concat(n("checkbox.checked.disabled.border.color"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(n("checkbox.icon.disabled.color"),`;
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: `).concat(n("checkbox.sm.width"),`;
    height: `).concat(n("checkbox.sm.height"),`;
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: `).concat(n("checkbox.icon.sm.size"),`;
    width: `).concat(n("checkbox.icon.sm.size"),`;
    height: `).concat(n("checkbox.icon.sm.size"),`;
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: `).concat(n("checkbox.lg.width"),`;
    height: `).concat(n("checkbox.lg.height"),`;
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: `).concat(n("checkbox.icon.lg.size"),`;
    width: `).concat(n("checkbox.icon.lg.size"),`;
    height: `).concat(n("checkbox.icon.lg.size"),`;
}
`)},Fs={root:function(t){var n=t.instance,o=t.props;return["p-checkbox p-component",{"p-checkbox-checked":n.checked,"p-disabled":o.disabled,"p-invalid":n.$pcCheckboxGroup?n.$pcCheckboxGroup.$invalid:n.$invalid,"p-variant-filled":n.$variant==="filled","p-checkbox-sm p-inputfield-sm":o.size==="small","p-checkbox-lg p-inputfield-lg":o.size==="large"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},_s=X.extend({name:"checkbox",theme:Vs,classes:Fs}),js={name:"BaseCheckbox",extends:no,props:{value:null,binary:Boolean,indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:_s,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function Hs(e){return Ws(e)||Gs(e)||Ks(e)||qs()}function qs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ks(e,t){if(e){if(typeof e=="string")return pt(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?pt(e,t):void 0}}function Gs(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ws(e){if(Array.isArray(e))return pt(e)}function pt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var Vn={name:"Checkbox",extends:js,inheritAttrs:!1,emits:["change","focus","blur","update:indeterminate"],inject:{$pcCheckboxGroup:{default:void 0}},data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(t){this.d_indeterminate=t}},methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(t){var n=this;if(!this.disabled&&!this.readonly){var o=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value,r;this.binary?r=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?r=o.filter(function(a){return!Jn(a,n.value)}):r=o?[].concat(Hs(o),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$pcCheckboxGroup?this.$pcCheckboxGroup.writeValue(r,t):this.writeValue(r,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var n,o;this.$emit("blur",t),(n=(o=this.formField).onBlur)===null||n===void 0||n.call(o,t)}},computed:{groupName:function(){return this.$pcCheckboxGroup?this.$pcCheckboxGroup.groupName:this.$formName},checked:function(){var t=this.$pcCheckboxGroup?this.$pcCheckboxGroup.d_value:this.d_value;return this.d_indeterminate?!1:this.binary?t===this.trueValue:Wn(this.value,t)}},components:{CheckIcon:to,MinusIcon:uo}},Js=["data-p-checked","data-p-indeterminate","data-p-disabled"],Xs=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function Zs(e,t,n,o,r,a){var s=te("CheckIcon"),c=te("MinusIcon");return h(),S("div",b({class:e.cx("root")},a.getPTOptions("root"),{"data-p-checked":a.checked,"data-p-indeterminate":r.d_indeterminate||void 0,"data-p-disabled":e.disabled}),[m("input",b({id:e.inputId,type:"checkbox",class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.value,name:a.groupName,checked:a.checked,tabindex:e.tabindex,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-invalid":e.invalid||void 0,"aria-checked":r.d_indeterminate?"mixed":void 0,onFocus:t[0]||(t[0]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:t[1]||(t[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onChange:t[2]||(t[2]=function(){return a.onChange&&a.onChange.apply(a,arguments)})},a.getPTOptions("input")),null,16,Xs),m("div",b({class:e.cx("box")},a.getPTOptions("box")),[O(e.$slots,"icon",{checked:a.checked,indeterminate:r.d_indeterminate,class:W(e.cx("icon"))},function(){return[a.checked?(h(),I(s,b({key:0,class:e.cx("icon")},a.getPTOptions("icon")),null,16,["class"])):r.d_indeterminate?(h(),I(c,b({key:1,class:e.cx("icon")},a.getPTOptions("icon")),null,16,["class"])):R("",!0)]})],16)],16,Js)}Vn.render=Zs;const Ys={class:"flex flex-col gap-6 w-[600px]"},Qs={class:"flex flex-col gap-4"},ei={class:"text-neutral-400 my-0"},ti={class:"flex gap-2"},ni={key:0,class:"flex flex-col gap-4 p-4 rounded-lg"},oi={class:"text-lg mt-0 font-medium text-neutral-100"},ai={class:"flex flex-col gap-3"},ri=["onClick"],si=["for"],ii={class:"text-sm text-neutral-400 my-1"},ci={key:1,class:"text-neutral-400 italic"},li=re({__name:"MigrationPicker",props:{sourcePath:{required:!1},sourcePathModifiers:{},migrationItemIds:{required:!1},migrationItemIdsModifiers:{}},emits:["update:sourcePath","update:migrationItemIds"],setup(e){const{t}=nn(),n=oe(),o=G(e,"sourcePath"),r=G(e,"migrationItemIds"),a=M(lo.map(i=>({...i,selected:!0}))),s=M(""),c=ne(()=>o.value!==""&&s.value===""),u=async i=>{if(!i){s.value="";return}try{s.value="";const p=await n.validateComfyUISource(i);p.isValid||(s.value=p.error??"ERROR")}catch(p){console.error(p),s.value=t("install.pathValidationFailed")}},l=async()=>{try{const i=await n.showDirectoryPicker();i&&(o.value=i,await u(i))}catch(i){console.error(i),s.value=t("install.failedToSelectDirectory")}};return Xn(()=>{r.value=a.value.filter(i=>i.selected).map(i=>i.id)}),(i,p)=>(h(),S("div",Ys,[m("div",Qs,[m("p",ei,w(i.$t("install.migrationSourcePathDescription")),1),m("div",ti,[C(x(bt),{modelValue:o.value,"onUpdate:modelValue":[p[0]||(p[0]=v=>o.value=v),u],placeholder:i.$t("install.locationPicker.migrationPathPlaceholder"),class:W(["flex-1",{"p-invalid":s.value}])},null,8,["modelValue","placeholder","class"]),C(x(Se),{icon:"pi pi-folder",class:"w-12",onClick:l})]),s.value?(h(),I(x(Ce),{key:0,severity:"error"},{default:P(()=>[ee(w(s.value),1)]),_:1})):R("",!0)]),c.value?(h(),S("div",ni,[m("h3",oi,w(i.$t("install.selectItemsToMigrate")),1),m("div",ai,[(h(!0),S(ce,null,mt(a.value,v=>(h(),S("div",{key:v.id,class:"flex items-center gap-3 p-2 hover:bg-neutral-700 rounded",onClick:D=>v.selected=!v.selected},[C(x(Vn),{modelValue:v.selected,"onUpdate:modelValue":D=>v.selected=D,"input-id":v.id,binary:!0,onClick:p[1]||(p[1]=ht(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","input-id"]),m("div",null,[m("label",{for:v.id,class:"text-neutral-200 font-medium"},w(v.label),9,si),m("p",ii,w(v.description),1)])],8,ri))),128))])])):(h(),S("div",ci,w(i.$t("install.migrationOptional")),1))]))}}),di=re({inheritAttrs:!1,__name:"UrlInput",props:{modelValue:{},validateUrlFn:{type:Function}},emits:["update:modelValue","state-change"],setup(e,{emit:t}){const n=e,o=t,r=M(_.IDLE),a=p=>p?p.replace(/\s+/g,""):"",s=M(a(n.modelValue));st(()=>n.modelValue,async p=>{s.value=a(p),await i(p)}),st(r,p=>{o("state-change",p)}),qe(async()=>{await i(n.modelValue)});const c=p=>{s.value=a(p??""),r.value=_.IDLE},u=async()=>{const p=a(s.value);let v=p;try{v=new URL(p).toString()}catch{}o("update:modelValue",v)},l=async p=>{if(!an(p))return!1;try{return await ls(p)}catch{return!1}},i=async p=>{if(r.value===_.LOADING)return;const v=a(p);if(r.value=_.IDLE,!!v){r.value=_.LOADING;try{const D=await(n.validateUrlFn??l)(v);r.value=D?_.VALID:_.INVALID}catch{r.value=_.INVALID}}};return(p,v)=>(h(),I(x(oo),{class:"w-full"},{default:P(()=>[C(x(bt),b(p.$attrs,{"model-value":s.value,class:"w-full",invalid:r.value===x(_).INVALID,"onUpdate:modelValue":c,onBlur:u}),null,16,["model-value","invalid"]),C(x(ao),{class:W({"pi pi-spin pi-spinner text-neutral-400":r.value===x(_).LOADING,"pi pi-check text-green-500 cursor-pointer":r.value===x(_).VALID,"pi pi-times text-red-500 cursor-pointer":r.value===x(_).INVALID}),onClick:v[0]||(v[0]=D=>i(n.modelValue))},null,8,["class"])]),_:1}))}}),ui=async e=>an(e)&&await oe().NetWork.canAccessUrl(e),pi={class:"flex flex-col gap-4 text-neutral-400 text-sm"},fi={class:"text-lg font-medium text-neutral-100 mb-3 mt-0"},hi={class:"my-1"},mi={key:0,class:"mt-2"},gi={class:"text-neutral-300"},bi={class:"mt-1 whitespace-pre-wrap"},vi="file://",yi="/C:/MyPythonInstallers/",wi="https://github.com/astral-sh/python-build-standalone/releases/download",ki="/20250902/cpython-3.12.11+20250902-x86_64-pc-windows-msvc-install_only.tar.gz",xi=re({__name:"MirrorItem",props:it({item:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:it(["state-change"],["update:modelValue"]),setup(e,{emit:t}){const n=t,o=G(e,"modelValue"),r=M(_.IDLE),a=M(!1),s=ne(()=>po(e.item.settingId)),c=ne(()=>tn(`settings.${s.value}.urlDescription`,""));return qe(()=>{o.value=e.item.mirror}),st(r,u=>{n("state-change",u),u===_.INVALID&&o.value===e.item.mirror&&(o.value=e.item.fallbackMirror)}),(u,l)=>(h(),S("div",pi,[m("div",null,[m("h3",fi,w(u.$t(`settings.${s.value}.name`)),1),m("p",hi,w(u.$t(`settings.${s.value}.tooltip`)),1)]),C(di,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=i=>o.value=i),"validate-url-fn":i=>x(ui)(i+(u.item.validationPathSuffix??"")),onStateChange:l[1]||(l[1]=i=>r.value=i)},null,8,["modelValue","validate-url-fn"]),c.value?(h(),S("div",mi,[m("a",{href:"#",onClick:l[2]||(l[2]=ht(i=>a.value=!0,["prevent"]))},w(u.$t("g.learnMore")),1),C(x(yt),{visible:a.value,"onUpdate:visible":l[3]||(l[3]=i=>a.value=i),modal:"","dismissable-mask":"",header:u.$t(`settings.${s.value}.urlFormatTitle`),class:"select-none max-w-3xl"},{default:P(()=>[m("div",gi,[m("p",bi,w(c.value),1),m("div",{class:"mt-2 break-all"},[m("span",{class:"text-neutral-300 font-semibold"},w(wi)),m("span",null,w(ki))]),C(x(vt)),m("p",null,w(u.$t(`settings.${s.value}.fileUrlDescription`)),1),m("span",{class:"text-neutral-300 font-semibold"},w(vi)),m("span",null,w(yi))])]),_:1},8,["visible","header"])])):R("",!0)]))}}),Ci={class:"flex flex-col gap-8 w-full max-w-3xl mx-auto select-none"},Si={class:"grow flex flex-col gap-6 text-neutral-300"},$i={class:"font-inter font-bold text-3xl text-neutral-100 text-center"},Ai={class:"text-center text-neutral-400 px-12"},Pi={class:"flex gap-2 px-12"},Ei={key:0,class:"px-12"},Ii=re({__name:"InstallLocationPicker",props:it({device:{}},{installPath:{required:!0},installPathModifiers:{},pathError:{required:!0},pathErrorModifiers:{},migrationSourcePath:{},migrationSourcePathModifiers:{},migrationItemIds:{},migrationItemIdsModifiers:{},pythonMirror:{default:""},pythonMirrorModifiers:{},pypiMirror:{default:""},pypiMirrorModifiers:{},torchMirror:{default:""},torchMirrorModifiers:{}}),emits:["update:installPath","update:pathError","update:migrationSourcePath","update:migrationItemIds","update:pythonMirror","update:pypiMirror","update:torchMirror"],setup(e){const{t}=nn(),n=G(e,"installPath"),o=G(e,"pathError"),r=G(e,"migrationSourcePath"),a=G(e,"migrationItemIds"),s=G(e,"pythonMirror"),c=G(e,"pypiMirror"),u=G(e,"torchMirror"),l=M(!1),i=M(!1),p=M(!1),v=M(void 0),D=oe();function f(T){const $="Comfy-Desktop.UV.TorchInstallMirror";switch(T){case"mps":return{settingId:$,mirror:Le.NightlyCpu,fallbackMirror:Le.NightlyCpu};case"nvidia":return{settingId:$,mirror:Le.Cuda,fallbackMirror:Le.Cuda};case"amd":case"cpu":default:return{settingId:$,mirror:ot.mirror,fallbackMirror:ot.fallbackMirror}}}const y=M(!1),g=T=>({...T,mirror:T.fallbackMirror}),U=ne(()=>[[Ns,s],[ot,c],[f(e.device??"cpu"),u]].map(([T,$])=>[y.value?g(T):T,$])),F=M(U.value.map(()=>_.IDLE));qe(async()=>{const T=await D.getSystemPaths();n.value=T.defaultInstallPath,await B(T.defaultInstallPath),y.value=await ds()});const B=async T=>{try{o.value="",l.value=!1,i.value=!1;const $=await D.validateInstallPath(T??"");if(!$.isValid){const k=[];if($.cannotWrite&&k.push(t("install.cannotWrite")),$.freeSpace<$.requiredSpace){const E=$.requiredSpace/1024/1024/1024;k.push(`${t("install.insufficientFreeSpace")}: ${E} GB`)}$.parentMissing&&k.push(t("install.parentMissing")),$.isOneDrive&&k.push(t("install.isOneDrive")),$.isInsideAppInstallDir&&k.push(t("install.insideAppInstallDir")),$.isInsideUpdaterCache&&k.push(t("install.insideUpdaterCache")),$.error&&k.push(`${t("install.unhandledError")}: ${$.error}`),o.value=k.join(`
`)}$.isNonDefaultDrive&&(i.value=!0),$.exists&&(l.value=!0)}catch{o.value=t("install.pathValidationFailed")}},N=async()=>{try{const T=await D.showDirectoryPicker();T&&(n.value=T,await B(T))}catch{o.value=t("install.failedToSelectDirectory")}},V=async()=>{if(!p.value){p.value=!0;return}await B(n.value)};return(T,$)=>(h(),S("div",Ci,[m("div",Si,[m("h2",$i,w(T.$t("install.locationPicker.title")),1),m("p",Ai,w(T.$t("install.locationPicker.subtitle")),1),m("div",Pi,[C(x(bt),{modelValue:n.value,"onUpdate:modelValue":[$[0]||($[0]=k=>n.value=k),B],placeholder:T.$t("install.locationPicker.pathPlaceholder"),class:W(["flex-1 bg-neutral-800/50 border-neutral-700 text-neutral-200 placeholder:text-neutral-500",{"p-invalid":o.value}]),onFocus:V},null,8,["modelValue","placeholder","class"]),C(x(Se),{icon:"pi pi-folder-open",severity:"secondary",class:"bg-neutral-700 hover:bg-neutral-600 border-0",onClick:N})]),o.value||l.value||i.value?(h(),S("div",Ei,[o.value?(h(),I(x(Ce),{key:0,severity:"error",class:"whitespace-pre-line w-full"},{default:P(()=>[ee(w(o.value),1)]),_:1})):R("",!0),l.value?(h(),I(x(Ce),{key:1,severity:"warn",class:"w-full"},{default:P(()=>[ee(w(T.$t("install.pathExists")),1)]),_:1})):R("",!0),i.value?(h(),I(x(Ce),{key:2,severity:"warn",class:"w-full"},{default:P(()=>[ee(w(T.$t("install.nonDefaultDrive")),1)]),_:1})):R("",!0)])):R("",!0),C(x(Nn),{value:v.value,"onUpdate:value":$[3]||($[3]=k=>v.value=k),multiple:!0,class:"location-picker-accordion",pt:{root:"bg-transparent border-0",panel:{root:"border-0 mb-0"},header:{root:"border-0",content:"text-neutral-400 hover:text-neutral-300 px-4 py-2 flex items-center gap-3",toggleicon:"text-xs order-first mr-0"},content:{root:"bg-transparent border-0",content:"text-neutral-500 text-sm pl-11 pb-3 pt-0"}}},{default:P(()=>[C(x(je),{value:"0"},{default:P(()=>[C(x(_e),null,{default:P(()=>[ee(w(T.$t("install.locationPicker.migrateFromExisting")),1)]),_:1}),C(x(Fe),null,{default:P(()=>[C(li,{"source-path":r.value,"onUpdate:sourcePath":$[1]||($[1]=k=>r.value=k),"migration-item-ids":a.value,"onUpdate:migrationItemIds":$[2]||($[2]=k=>a.value=k)},null,8,["source-path","migration-item-ids"])]),_:1})]),_:1}),C(x(je),{value:"1"},{default:P(()=>[C(x(_e),null,{default:P(()=>[ee(w(T.$t("install.locationPicker.chooseDownloadServers")),1)]),_:1}),C(x(Fe),null,{default:P(()=>[(h(!0),S(ce,null,mt(U.value,([k,E],L)=>(h(),S(ce,{key:k.settingId+k.mirror},[L>0?(h(),I(x(vt),{key:0,class:"my-8"})):R("",!0),C(xi,{modelValue:E.value,"onUpdate:modelValue":fe=>E.value=fe,item:k,onStateChange:fe=>F.value[L]=fe},null,8,["modelValue","onUpdate:modelValue","item","onStateChange"])],64))),128))]),_:1})]),_:1})]),_:1},8,["value"])])]))}}),Ti=rn(Ii,[["__scopeId","data-v-571ad58c"]]),Di={class:"w-full h-full flex flex-col"},Oi=re({__name:"InstallView",setup(e){const t=M(null),n=M(""),o=M(""),r=M(""),a=M([]),s=M(!0),c=M(!0),u=M(""),l=M(""),i=M(""),p=M("1"),v=M(0),D=k=>{f(k),oe().Events.trackEvent("install_stepper_change",{step:k})},f=k=>{const E=typeof k=="number"?k:parseInt(k,10);!isNaN(E)&&E>v.value&&(v.value=E)},y=ne(()=>o.value!==""),g=ne(()=>typeof t.value!="string"),U=/^Insufficient space - minimum free space: \d+ GB$/,F=ne(()=>{switch(p.value){case"1":return typeof t.value=="string";case"2":return o.value===""||U.test(o.value);case"3":return!y.value;default:return!1}}),B=()=>{const k=(parseInt(p.value)+1).toString();p.value=k,f(k),oe().Events.trackEvent("install_stepper_change",{step:k})},N=()=>{const k=(parseInt(p.value)-1).toString();p.value=k,oe().Events.trackEvent("install_stepper_change",{step:k})},V=oe(),T=Zn(),$=async()=>{if(!t.value)return;const k={installPath:n.value,autoUpdate:s.value,allowMetrics:c.value,migrationSourcePath:r.value,migrationItemIds:Yn(a.value),pythonMirror:u.value,pypiMirror:l.value,torchMirror:i.value,device:t.value};V.installComfyUI(k);const E=k.device==="unsupported"?"/manual-configuration":"/server-start";await T.push(E)};return qe(async()=>{if(!V)return;const k=await V.Config.getDetectedGpu();(k==="mps"||k==="nvidia"||k==="amd")&&(t.value=k),oe().Events.trackEvent("install_stepper_change",{step:p.value,gpu:k})}),(k,E)=>(h(),I(ro,{dark:""},{default:P(()=>[m("div",Di,[C(x(ln),{value:p.value,"onUpdate:value":[E[10]||(E[10]=L=>p.value=L),D],class:"flex flex-col h-full"},{default:P(()=>[C(x(cn),{class:"flex-1 overflow-auto",style:{scrollbarGutter:"stable"}},{default:P(()=>[C(x(Be),{value:"1",class:"flex"},{default:P(()=>[C(ya,{device:t.value,"onUpdate:device":E[0]||(E[0]=L=>t.value=L)},null,8,["device"])]),_:1}),C(x(Be),{value:"2"},{default:P(()=>[C(Ti,{"install-path":n.value,"onUpdate:installPath":E[1]||(E[1]=L=>n.value=L),"path-error":o.value,"onUpdate:pathError":E[2]||(E[2]=L=>o.value=L),"migration-source-path":r.value,"onUpdate:migrationSourcePath":E[3]||(E[3]=L=>r.value=L),"migration-item-ids":a.value,"onUpdate:migrationItemIds":E[4]||(E[4]=L=>a.value=L),"python-mirror":u.value,"onUpdate:pythonMirror":E[5]||(E[5]=L=>u.value=L),"pypi-mirror":l.value,"onUpdate:pypiMirror":E[6]||(E[6]=L=>l.value=L),"torch-mirror":i.value,"onUpdate:torchMirror":E[7]||(E[7]=L=>i.value=L),device:t.value},null,8,["install-path","path-error","migration-source-path","migration-item-ids","python-mirror","pypi-mirror","torch-mirror","device"])]),_:1}),C(x(Be),{value:"3"},{default:P(()=>[C(sa,{"auto-update":s.value,"onUpdate:autoUpdate":E[8]||(E[8]=L=>s.value=L),"allow-metrics":c.value,"onUpdate:allowMetrics":E[9]||(E[9]=L=>c.value=L)},null,8,["auto-update","allow-metrics"])]),_:1})]),_:1}),C(Oa,{class:"w-full max-w-2xl my-6 mx-auto","current-step":p.value,"can-proceed":F.value,"disable-location-step":g.value,"disable-migration-step":g.value||y.value||v.value<2,"disable-settings-step":g.value||y.value||v.value<3,onPrevious:N,onNext:B,onInstall:$},null,8,["current-step","can-proceed","disable-location-step","disable-migration-step","disable-settings-step"])]),_:1},8,["value"])])]),_:1}))}}),uc=rn(Oi,[["__scopeId","data-v-ae3d55ea"]]);export{uc as default};
//# sourceMappingURL=InstallView-nxLcnm-5.js.map
