import{B as V,f as ce,k as W,l as G,g as f,o as l,a as d,r as O,p as z,n as x,m,t as S,G as J,U as Z,j as X,F as j,A as te,c as R,Y as ne,w as L,d as $,aC as ue,ax as De,e as s,a8 as Be,b,a0 as v,aN as w,aG as h,aO as U,I as N,J as fe,K as he,N as me,ao as Y,aP as ge,ap as be,Z as P,W as ve,q as de,au as ze,s as Ke,O as $e,a7 as ae,aQ as je,_ as A,aR as Pe,a2 as ye,h as oe,aM as ke,aS as Ve,a4 as _e,aF as Fe,aT as Ue}from"./index-B4t0AlBR.js";import{s as K}from"./index-KsOEsaua.js";import{R as se,s as le}from"./index--UliHvld.js";import{s as we}from"./index-VL7IV67K.js";import{s as Le}from"./index-DAWmibXT.js";import{s as Ce,_ as He,a as Ne}from"./TerminalOutputDrawer.vue_vue_type_script_setup_true_lang-Cq-Suwkh.js";import{F as Ee}from"./index-CRg0dVMo.js";import{a as Te,O as M,_ as Me}from"./BaseViewTemplate.vue_vue_type_script_setup_true_lang-CVr3zlLP.js";import{s as qe}from"./index-DyjM2XwC.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BaseTerminal-DUWvX35A.js";import"./index-Dtjc6EhN.js";var Ge=function(e){var n=e.dt;return`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: `.concat(n("togglebutton.color"),`;
    background: `).concat(n("togglebutton.background"),`;
    border: 1px solid `).concat(n("togglebutton.border.color"),`;
    padding: `).concat(n("togglebutton.padding"),`;
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background `).concat(n("togglebutton.transition.duration"),", color ").concat(n("togglebutton.transition.duration"),", border-color ").concat(n("togglebutton.transition.duration"),`,
        outline-color `).concat(n("togglebutton.transition.duration"),", box-shadow ").concat(n("togglebutton.transition.duration"),`;
    border-radius: `).concat(n("togglebutton.border.radius"),`;
    outline-color: transparent;
    font-weight: `).concat(n("togglebutton.font.weight"),`;
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: `).concat(n("togglebutton.gap"),`;
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background `).concat(n("togglebutton.transition.duration"),", color ").concat(n("togglebutton.transition.duration"),", border-color ").concat(n("togglebutton.transition.duration"),`,
            outline-color `).concat(n("togglebutton.transition.duration"),", box-shadow ").concat(n("togglebutton.transition.duration"),`;
    position: absolute;
    inset-inline-start: `).concat(n("togglebutton.content.left"),`;
    inset-block-start: `).concat(n("togglebutton.content.top"),`;
    width: calc(100% - calc(2 * `).concat(n("togglebutton.content.left"),`));
    height: calc(100% - calc(2 * `).concat(n("togglebutton.content.top"),`));
    border-radius: `).concat(n("togglebutton.border.radius"),`;
}

.p-togglebutton.p-togglebutton-checked::before {
    background: `).concat(n("togglebutton.content.checked.background"),`;
    box-shadow: `).concat(n("togglebutton.content.checked.shadow"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: `).concat(n("togglebutton.hover.background"),`;
    color: `).concat(n("togglebutton.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked {
    background: `).concat(n("togglebutton.checked.background"),`;
    border-color: `).concat(n("togglebutton.checked.border.color"),`;
    color: `).concat(n("togglebutton.checked.color"),`;
}

.p-togglebutton:focus-visible {
    box-shadow: `).concat(n("togglebutton.focus.ring.shadow"),`;
    outline: `).concat(n("togglebutton.focus.ring.width")," ").concat(n("togglebutton.focus.ring.style")," ").concat(n("togglebutton.focus.ring.color"),`;
    outline-offset: `).concat(n("togglebutton.focus.ring.offset"),`;
}

.p-togglebutton.p-invalid {
    border-color: `).concat(n("togglebutton.invalid.border.color"),`;
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: `).concat(n("togglebutton.disabled.background"),`;
    border-color: `).concat(n("togglebutton.disabled.border.color"),`;
    color: `).concat(n("togglebutton.disabled.color"),`;
}

.p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.color"),`;
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.hover.color"),`;
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.checked.color"),`;
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: `).concat(n("togglebutton.icon.disabled.color"),`;
}

.p-togglebutton-sm {
    padding: `).concat(n("togglebutton.sm.padding"),`;
    font-size: `).concat(n("togglebutton.sm.font.size"),`;
}

.p-togglebutton-lg {
    padding: `).concat(n("togglebutton.lg.padding"),`;
    font-size: `).concat(n("togglebutton.lg.font.size"),`;
}
`)},Ze={root:function(e){var n=e.instance,i=e.props;return["p-togglebutton p-component",{"p-togglebutton-checked":n.active,"p-invalid":n.$invalid,"p-togglebutton-sm p-inputfield-sm":i.size==="small","p-togglebutton-lg p-inputfield-lg":i.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Xe=V.extend({name:"togglebutton",theme:Ge,classes:Ze}),Ye={name:"BaseToggleButton",extends:we,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:Xe,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}},Oe={name:"ToggleButton",extends:Ye,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(e){var n=e==="root"?this.ptmi:this.ptm;return n(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit("change",e))},onBlur:function(e){var n,i;(n=(i=this.formField).onBlur)===null||n===void 0||n.call(i,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return ce(this.onLabel)&&ce(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "}},directives:{ripple:se}},We=["tabindex","disabled","aria-pressed","aria-labelledby","data-p-checked","data-p-disabled"];function Qe(t,e,n,i,r,o){var c=W("ripple");return G((l(),f("button",m({type:"button",class:t.cx("root"),tabindex:t.tabindex,disabled:t.disabled,"aria-pressed":t.d_value,onClick:e[0]||(e[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-labelledby":t.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":t.disabled}),[d("span",m({class:t.cx("content")},o.getPTOptions("content")),[O(t.$slots,"default",{},function(){return[O(t.$slots,"icon",{value:t.d_value,class:z(t.cx("icon"))},function(){return[t.onIcon||t.offIcon?(l(),f("span",m({key:0,class:[t.cx("icon"),t.d_value?t.onIcon:t.offIcon]},o.getPTOptions("icon")),null,16)):x("",!0)]}),d("span",m({class:t.cx("label")},o.getPTOptions("label")),S(o.label),17)]})],16)],16,We)),[[c]])}Oe.render=Qe;var Je=function(e){var n=e.dt;return`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: `.concat(n("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: `).concat(n("selectbutton.border.radius"),`;
    border-end-start-radius: `).concat(n("selectbutton.border.radius"),`;
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: `).concat(n("selectbutton.border.radius"),`;
    border-end-end-radius: `).concat(n("selectbutton.border.radius"),`;
}

.p-selectbutton.p-invalid {
    outline: 1px solid `).concat(n("selectbutton.invalid.border.color"),`;
    outline-offset: 0;
}
`)},et={root:function(e){var n=e.instance;return["p-selectbutton p-component",{"p-invalid":n.$invalid}]}},tt=V.extend({name:"selectbutton",theme:Je,classes:et}),nt={name:"BaseSelectButton",extends:we,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:tt,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function ot(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Ie(t))||e){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(u){throw u},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,c=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return c=u.done,u},e:function(u){a=!0,o=u},f:function(){try{c||n.return==null||n.return()}finally{if(a)throw o}}}}function it(t){return st(t)||at(t)||Ie(t)||rt()}function rt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ie(t,e){if(t){if(typeof t=="string")return ie(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ie(t,e):void 0}}function at(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function st(t){if(Array.isArray(t))return ie(t)}function ie(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}var re={name:"SelectButton",extends:nt,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(e){return this.optionLabel?Z(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?Z(e,this.optionValue):e},getOptionRenderKey:function(e){return this.dataKey?Z(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled:function(e){return this.optionDisabled?Z(e,this.optionDisabled):!1},onOptionSelect:function(e,n,i){var r=this;if(!(this.disabled||this.isOptionDisabled(n))){var o=this.isSelected(n);if(!(o&&!this.allowEmpty)){var c=this.getOptionValue(n),a;this.multiple?o?a=this.d_value.filter(function(p){return!J(p,c,r.equalityKey)}):a=this.d_value?[].concat(it(this.d_value),[c]):[c]:a=o?null:c,this.writeValue(a,e),this.$emit("change",{event:e,value:a})}}},isSelected:function(e){var n=!1,i=this.getOptionValue(e);if(this.multiple){if(this.d_value){var r=ot(this.d_value),o;try{for(r.s();!(o=r.n()).done;){var c=o.value;if(J(c,i,this.equalityKey)){n=!0;break}}}catch(a){r.e(a)}finally{r.f()}}}else n=J(this.d_value,i,this.equalityKey);return n}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey}},directives:{ripple:se},components:{ToggleButton:Oe}},lt=["aria-labelledby"];function ct(t,e,n,i,r,o){var c=X("ToggleButton");return l(),f("div",m({class:t.cx("root"),role:"group","aria-labelledby":t.ariaLabelledby},t.ptmi("root")),[(l(!0),f(j,null,te(t.options,function(a,p){return l(),R(c,{key:o.getOptionRenderKey(a),modelValue:o.isSelected(a),onLabel:o.getOptionLabel(a),offLabel:o.getOptionLabel(a),disabled:t.disabled||o.isOptionDisabled(a),unstyled:t.unstyled,size:t.size,readonly:!t.allowEmpty&&o.isSelected(a),onChange:function(y){return o.onOptionSelect(y,a,p)},pt:t.ptm("pcToggleButton")},ne({_:2},[t.$slots.option?{name:"default",fn:L(function(){return[O(t.$slots,"option",{option:a,index:p},function(){return[d("span",m({ref_for:!0},t.ptm("pcToggleButton").label),S(o.getOptionLabel(a)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,lt)}re.render=ct;const ut=$({__name:"RefreshButton",props:ue({disabled:{type:Boolean},outlined:{type:Boolean,default:!0},severity:{default:"secondary"}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:ue(["refresh"],["update:modelValue"]),setup(t){const e=De(t,"modelValue");return(n,i)=>(l(),R(s(K),{class:"relative p-button-icon-only",outlined:n.outlined,severity:n.severity,disabled:e.value||n.disabled,onClick:i[0]||(i[0]=r=>n.$emit("refresh",r))},{default:L(()=>[d("span",{class:z(["p-button-icon pi pi-refresh transition-all",{"opacity-0":e.value}]),"data-pc-section":"icon"},null,2),i[1]||(i[1]=d("span",{class:"p-button-label","data-pc-section":"label"}," ",-1)),G(b(s(Ce),{class:"absolute w-1/2 h-1/2"},null,512),[[Be,e.value]])]),_:1},8,["outlined","severity","disabled"]))}}),dt=$({__name:"StatusTag",props:{error:{type:Boolean},refreshing:{type:Boolean}},setup(t){const e=t,n=v(()=>e.refreshing?w.QUESTION:e.error?w.TIMES:w.CHECK),i=v(()=>e.refreshing?"info":e.error?"danger":"success"),r=v(()=>e.refreshing?h("maintenance.refreshing"):e.error?h("g.error"):h("maintenance.OK"));return(o,c)=>(l(),R(s(Le),{icon:n.value,severity:i.value,value:r.value},null,8,["icon","severity","value"]))}});var pt=function(e){var n=e.dt;return`
.p-card {
    background: `.concat(n("card.background"),`;
    color: `).concat(n("card.color"),`;
    box-shadow: `).concat(n("card.shadow"),`;
    border-radius: `).concat(n("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(n("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(n("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(n("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(n("card.title.font.size"),`;
    font-weight: `).concat(n("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(n("card.subtitle.color"),`;
}
`)},ft={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},ht=V.extend({name:"card",theme:pt,classes:ft}),mt={name:"BaseCard",extends:le,style:ht,provide:function(){return{$pcCard:this,$parentInstance:this}}},xe={name:"Card",extends:mt,inheritAttrs:!1};function gt(t,e,n,i,r,o){return l(),f("div",m({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(l(),f("div",m({key:0,class:t.cx("header")},t.ptm("header")),[O(t.$slots,"header")],16)):x("",!0),d("div",m({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(l(),f("div",m({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(l(),f("div",m({key:0,class:t.cx("title")},t.ptm("title")),[O(t.$slots,"title")],16)):x("",!0),t.$slots.subtitle?(l(),f("div",m({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[O(t.$slots,"subtitle")],16)):x("",!0)],16)):x("",!0),d("div",m({class:t.cx("content")},t.ptm("content")),[O(t.$slots,"content")],16),t.$slots.footer?(l(),f("div",m({key:1,class:t.cx("footer")},t.ptm("footer")),[O(t.$slots,"footer")],16)):x("",!0)],16)],16)}xe.render=gt;var bt=function(e){var n=e.dt;return`
.p-confirmpopup {
    position: absolute;
    margin-top: `.concat(n("confirmpopup.gutter"),`;
    top: 0;
    left: 0;
    background: `).concat(n("confirmpopup.background"),`;
    color: `).concat(n("confirmpopup.color"),`;
    border: 1px solid `).concat(n("confirmpopup.border.color"),`;
    border-radius: `).concat(n("confirmpopup.border.radius"),`;
    box-shadow: `).concat(n("confirmpopup.shadow"),`;
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: `).concat(n("confirmpopup.content.padding"),`;
    gap: `).concat(n("confirmpopup.content.gap"),`;
}

.p-confirmpopup-icon {
    font-size: `).concat(n("confirmpopup.icon.size"),`;
    width: `).concat(n("confirmpopup.icon.size"),`;
    height: `).concat(n("confirmpopup.icon.size"),`;
    color: `).concat(n("confirmpopup.icon.color"),`;
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: `).concat(n("confirmpopup.footer.gap"),`;
    padding: `).concat(n("confirmpopup.footer.padding"),`;
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-block-start: calc(`).concat(n("confirmpopup.gutter"),` * -1);
    margin-block-end: `).concat(n("confirmpopup.gutter"),`;
}

.p-confirmpopup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirmpopup-leave-to {
    opacity: 0;
}

.p-confirmpopup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirmpopup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirmpopup:after,
.p-confirmpopup:before {
    bottom: 100%;
    left: calc(`).concat(n("confirmpopup.arrow.offset")," + ").concat(n("confirmpopup.arrow.left"),`);
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(`).concat(n("confirmpopup.gutter"),` - 2px);
    margin-left: calc(-1 * (`).concat(n("confirmpopup.gutter"),` - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(n("confirmpopup.background"),`;
}

.p-confirmpopup:before {
    border-width: `).concat(n("confirmpopup.gutter"),`;
    margin-left: calc(-1 * `).concat(n("confirmpopup.gutter"),`);
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(n("confirmpopup.border.color"),`;
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(n("confirmpopup.background"),`;
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(n("confirmpopup.border.color"),`;
}
`)},vt={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},yt=V.extend({name:"confirmpopup",theme:bt,classes:vt}),kt={name:"BaseConfirmPopup",extends:le,props:{group:String},style:yt,provide:function(){return{$pcConfirmPopup:this,$parentInstance:this}}},Re={name:"ConfirmPopup",extends:kt,inheritAttrs:!1,data:function(){return{visible:!1,confirmation:null,autoFocusAccept:null,autoFocusReject:null,target:null}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,confirmListener:null,closeListener:null,mounted:function(){var e=this;this.confirmListener=function(n){n&&n.group===e.group&&(e.confirmation=n,e.target=n.target,e.confirmation.onShow&&e.confirmation.onShow(),e.visible=!0)},this.closeListener=function(){e.visible=!1,e.confirmation=null},U.on("confirm",this.confirmListener),U.on("close",this.closeListener)},beforeUnmount:function(){U.off("confirm",this.confirmListener),U.off("close",this.closeListener),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindResizeListener(),this.container&&(P.clear(this.container),this.container=null),this.target=null,this.confirmation=null},methods:{accept:function(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject:function(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1},onHide:function(){this.confirmation.onHide&&this.confirmation.onHide(),this.visible=!1},onAcceptKeydown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.accept(),N(this.target),e.preventDefault())},onRejectKeydown:function(e){(e.code==="Space"||e.code==="Enter"||e.code==="NumpadEnter")&&(this.reject(),N(this.target),e.preventDefault())},onEnter:function(e){this.autoFocusAccept=this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept",this.autoFocusReject=this.confirmation.defaultFocus==="reject",this.target=this.target||document.activeElement,this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),P.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterEnter:function(){this.focus()},onLeave:function(){this.autoFocusAccept=null,this.autoFocusReject=null,N(this.target),this.target=null,this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener()},onAfterLeave:function(e){P.clear(e)},alignOverlay:function(){me(this.container,this.target,!1);var e=Y(this.container),n=Y(this.target),i=0;e.left<n.left&&(i=n.left-e.left),this.container.style.setProperty(ge("confirmpopup.arrow.left").name,"".concat(i,"px")),e.top<n.top&&(this.container.setAttribute("data-p-confirmpopup-flipped","true"),!this.isUnstyled&&be(this.container,"p-confirmpopup-flipped"))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.visible&&e.container&&!e.container.contains(n.target)&&!e.isTargetClicked(n)?(e.confirmation.onHide&&e.confirmation.onHide(),e.visible=!1):e.alignOverlay()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new he(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!fe()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus({preventScroll:!0})},isTargetClicked:function(e){return this.target&&(this.target===e.target||this.target.contains(e.target))},containerRef:function(e){this.container=e},onOverlayClick:function(e){M.emit("overlay-click",{originalEvent:e,target:this.target})},onOverlayKeydown:function(e){e.code==="Escape"&&(U.emit("close",this.closeListener),N(this.target))}},computed:{message:function(){return this.confirmation?this.confirmation.message:null},acceptLabel:function(){if(this.confirmation){var e,n=this.confirmation;return n.acceptLabel||((e=n.acceptProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.accept}return this.$primevue.config.locale.accept},rejectLabel:function(){if(this.confirmation){var e,n=this.confirmation;return n.rejectLabel||((e=n.rejectProps)===null||e===void 0?void 0:e.label)||this.$primevue.config.locale.reject}return this.$primevue.config.locale.reject},acceptIcon:function(){var e;return this.confirmation?this.confirmation.acceptIcon:(e=this.confirmation)!==null&&e!==void 0&&e.acceptProps?this.confirmation.acceptProps.icon:null},rejectIcon:function(){var e;return this.confirmation?this.confirmation.rejectIcon:(e=this.confirmation)!==null&&e!==void 0&&e.rejectProps?this.confirmation.rejectProps.icon:null}},components:{Button:K,Portal:Te},directives:{focustrap:Ee}},wt=["aria-modal"];function Lt(t,e,n,i,r,o){var c=X("Button"),a=X("Portal"),p=W("focustrap");return l(),R(a,null,{default:L(function(){return[b(ve,m({name:"p-confirmpopup",onEnter:o.onEnter,onAfterEnter:o.onAfterEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},t.ptm("transition")),{default:L(function(){var u,y,k;return[r.visible?G((l(),f("div",m({key:0,ref:o.containerRef,role:"alertdialog",class:t.cx("root"),"aria-modal":r.visible,onClick:e[2]||(e[2]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[3]||(e[3]=function(){return o.onOverlayKeydown&&o.onOverlayKeydown.apply(o,arguments)})},t.ptmi("root")),[t.$slots.container?O(t.$slots,"container",{key:0,message:r.confirmation,acceptCallback:o.accept,rejectCallback:o.reject}):(l(),f(j,{key:1},[t.$slots.message?(l(),R(de(t.$slots.message),{key:1,message:r.confirmation},null,8,["message"])):(l(),f("div",m({key:0,class:t.cx("content")},t.ptm("content")),[O(t.$slots,"icon",{},function(){return[t.$slots.icon?(l(),R(de(t.$slots.icon),{key:0,class:z(t.cx("icon"))},null,8,["class"])):r.confirmation.icon?(l(),f("span",m({key:1,class:[r.confirmation.icon,t.cx("icon")]},t.ptm("icon")),null,16)):x("",!0)]}),d("span",m({class:t.cx("message")},t.ptm("message")),S(r.confirmation.message),17)],16)),d("div",m({class:t.cx("footer")},t.ptm("footer")),[b(c,m({class:[t.cx("pcRejectButton"),r.confirmation.rejectClass],autofocus:r.autoFocusReject,unstyled:t.unstyled,size:((u=r.confirmation.rejectProps)===null||u===void 0?void 0:u.size)||"small",text:((y=r.confirmation.rejectProps)===null||y===void 0?void 0:y.text)||!1,onClick:e[0]||(e[0]=function(C){return o.reject()}),onKeydown:o.onRejectKeydown},r.confirmation.rejectProps,{label:o.rejectLabel,pt:t.ptm("pcRejectButton")}),ne({_:2},[o.rejectIcon||t.$slots.rejecticon?{name:"icon",fn:L(function(C){return[O(t.$slots,"rejecticon",{},function(){return[d("span",m({class:[o.rejectIcon,C.class]},t.ptm("pcRejectButton").icon,{"data-pc-section":"rejectbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","text","onKeydown","label","pt"]),b(c,m({class:[t.cx("pcAcceptButton"),r.confirmation.acceptClass],autofocus:r.autoFocusAccept,unstyled:t.unstyled,size:((k=r.confirmation.acceptProps)===null||k===void 0?void 0:k.size)||"small",onClick:e[1]||(e[1]=function(C){return o.accept()}),onKeydown:o.onAcceptKeydown},r.confirmation.acceptProps,{label:o.acceptLabel,pt:t.ptm("pcAcceptButton")}),ne({_:2},[o.acceptIcon||t.$slots.accepticon?{name:"icon",fn:L(function(C){return[O(t.$slots,"accepticon",{},function(){return[d("span",m({class:[o.acceptIcon,C.class]},t.ptm("pcAcceptButton").icon,{"data-pc-section":"acceptbuttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","autofocus","unstyled","size","onKeydown","label","pt"])],16)],64))],16,wt)),[[p]]):x("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3})}Re.render=Lt;var Ct=function(e){var n=e.dt;return`
.p-popover {
    margin-block-start: `.concat(n("popover.gutter"),`;
    background: `).concat(n("popover.background"),`;
    color: `).concat(n("popover.color"),`;
    border: 1px solid `).concat(n("popover.border.color"),`;
    border-radius: `).concat(n("popover.border.radius"),`;
    box-shadow: `).concat(n("popover.shadow"),`;
}

.p-popover-content {
    padding: `).concat(n("popover.content.padding"),`;
}

.p-popover-flipped {
    margin-block-start: calc(`).concat(n("popover.gutter"),` * -1);
    margin-block-end: `).concat(n("popover.gutter"),`;
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(`).concat(n("popover.arrow.offset")," + ").concat(n("popover.arrow.left"),`);
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(`).concat(n("popover.gutter"),` - 2px);
    margin-left: calc(-1 * (`).concat(n("popover.gutter"),` - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(n("popover.background"),`;
}

.p-popover:before {
    border-width: `).concat(n("popover.gutter"),`;
    margin-left: calc(-1 * `).concat(n("popover.gutter"),`);
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(n("popover.border.color"),`;
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(n("popover.background"),`;
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(n("popover.border.color"),`;
}
`)},Et={root:"p-popover p-component",content:"p-popover-content"},Tt=V.extend({name:"popover",theme:Ct,classes:Et}),St={name:"BasePopover",extends:le,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:Tt,provide:function(){return{$pcPopover:this,$parentInstance:this}}},Ae={name:"Popover",extends:St,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&P.clear(this.container),this.overlayEventListener&&(M.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,n){this.visible?this.hide():this.show(e,n)},show:function(e,n){this.visible=!0,this.eventTarget=e.currentTarget,this.target=n||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var n=this;$e(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&P.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(i){n.container.contains(i.target)&&(n.selfClick=!0)},this.focus(),M.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),M.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&P.clear(e)},alignOverlay:function(){me(this.container,this.target,!1);var e=Y(this.container),n=Y(this.target),i=0;e.left<n.left&&(i=n.left-e.left),this.container.style.setProperty(ge("popover.arrow.left").name,"".concat(i,"px")),e.top<n.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&be(this.container,"p-popover-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),N(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&Ke()&&(this.outsideClickListener=function(n){e.visible&&!e.selfClick&&!e.isTargetClicked(n)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new he(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!fe()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",ze(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var n="";for(var i in this.breakpoints)n+=`
                        @media screen and (max-width: `.concat(i,`) {
                            .p-popover[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[i],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){M.emit("overlay-click",{originalEvent:e,target:this.target})}},directives:{focustrap:Ee,ripple:se},components:{Portal:Te}},Ot=["aria-modal"];function It(t,e,n,i,r,o){var c=X("Portal"),a=W("focustrap");return l(),R(c,{appendTo:t.appendTo},{default:L(function(){return[b(ve,m({name:"p-popover",onEnter:o.onEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},t.ptm("transition")),{default:L(function(){return[r.visible?G((l(),f("div",m({key:0,ref:o.containerRef,role:"dialog","aria-modal":r.visible,onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),class:t.cx("root")},t.ptmi("root")),[t.$slots.container?O(t.$slots,"container",{key:0,closeCallback:o.hide,keydownCallback:function(u){return o.onButtonKeydown(u)}}):(l(),f("div",m({key:1,class:t.cx("content"),onClick:e[0]||(e[0]=function(){return o.onContentClick&&o.onContentClick.apply(o,arguments)}),onMousedown:e[1]||(e[1]=function(){return o.onContentClick&&o.onContentClick.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onContentKeydown&&o.onContentKeydown.apply(o,arguments)})},t.ptm("content")),[O(t.$slots,"default")],16))],16,Ot)),[[a]]):x("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}Ae.render=It;V.extend({name:"common"});const H=ae(),ee=t=>(window.open(t,"_blank"),!0),pe=[{id:"basePath",execute:async()=>await H.setBasePath(),name:"Base path",shortDescription:"Change the application base path.",errorDescription:"The current base path is invalid or unsafe. Please select a new location.",description:"The base path is the default location where ComfyUI stores data. It is the location for the python environment, and may also contain models, custom nodes, and other extensions.",isInstallationFix:!0,button:{icon:w.QUESTION,text:"Select"}},{id:"git",headerImg:"assets/images/Git-Logo-White.svg",execute:()=>ee("https://git-scm.com/downloads/"),name:"Download git",shortDescription:"Open the git download page.",errorDescription:"Git is missing. Please download and install git, then restart ComfyUI Desktop.",description:"Git is required to download and manage custom nodes and other extensions. This task opens the download page in your default browser, where you can download the latest version of git. Once you have installed git, please restart ComfyUI Desktop.",button:{icon:w.EXTERNAL_LINK,text:"Download"}},{id:"vcRedist",execute:()=>ee("https://aka.ms/vs/17/release/vc_redist.x64.exe"),name:"Download VC++ Redist",shortDescription:"Download the latest VC++ Redistributable runtime.",description:"The Visual C++ runtime libraries are required to run ComfyUI. You will need to download and install this file.",button:{icon:w.EXTERNAL_LINK,text:"Download"}},{id:"reinstall",severity:"danger",requireConfirm:!0,execute:async()=>(await H.reinstall(),!0),name:"Reinstall ComfyUI",shortDescription:"Deletes the desktop app config and load the welcome screen.",description:"Delete the desktop app config, restart the app, and load the installation screen.",confirmText:"Delete all saved config and reinstall?",button:{icon:w.EXCLAMATION_TRIANGLE,text:"Reinstall"}},{id:"pythonPackages",requireConfirm:!0,execute:async()=>{try{return await H.uv.installRequirements(),!0}catch{return!1}},name:"Install python packages",shortDescription:"Installs the base python packages required to run ComfyUI.",errorDescription:"Python packages that are required to run ComfyUI are not installed.",description:"This will install the python packages required to run ComfyUI. This includes torch, torchvision, and other dependencies.",usesTerminal:!0,isInstallationFix:!0,button:{icon:w.DOWNLOAD,text:"Install"}},{id:"uv",execute:()=>ee("https://docs.astral.sh/uv/getting-started/installation/"),name:"uv executable",shortDescription:"uv installs and maintains the python environment.",description:"This will open the download page for Astral's uv tool. uv is used to install python and manage python packages.",button:{icon:"pi pi-asterisk",text:"Download"}},{id:"uvCache",severity:"danger",requireConfirm:!0,execute:async()=>await H.uv.clearCache(),name:"uv cache",shortDescription:"Remove the Astral uv cache of python packages.",description:"This will remove the uv cache directory and its contents. All downloaded python packages will need to be downloaded again.",confirmText:"Delete uv cache of python packages?",usesTerminal:!0,isInstallationFix:!0,button:{icon:w.TRASH,text:"Clear cache"}},{id:"venvDirectory",severity:"danger",requireConfirm:!0,execute:async()=>await H.uv.resetVenv(),name:"Reset virtual environment",shortDescription:"Remove and recreate the .venv directory. This removes all python packages.",description:"The python environment is where ComfyUI installs python and python packages. It is used to run the ComfyUI server.",confirmText:"Delete the .venv directory?",usesTerminal:!0,isInstallationFix:!0,button:{icon:w.FOLDER,text:"Recreate"}}];class xt{constructor(e){this.task=e}_state;get state(){return this._state}setState(e){this._state==="error"&&e==="OK"&&(this.resolved=!0),e==="error"&&(this.resolved&&=!1),this._state=e}resolved;refreshing;executing;error;update(e){const n=e[this.task.id];this.refreshing=n===void 0,n&&this.setState(n)}finaliseUpdate(e){this.refreshing=!1,this.setState(e[this.task.id]??"skipped")}async execute(e){try{return this.executing=!0,await e.execute()?(this.error=void 0,!0):!1}catch(n){throw this.error=n?.message,n}finally{this.executing=!1}}}const Q=je("maintenanceTask",()=>{const t=ae(),e=A(null),n=A(!1),i=v(()=>a.value.filter(g=>g.usesTerminal).some(g=>y(g)?.executing)),r=v(()=>a.value.filter(g=>g.isInstallationFix).some(g=>y(g)?.executing)),o=v(()=>e.value?.unsafeBasePath===!0),c=v(()=>e.value?.unsafeBasePathReason),a=A(pe),p=A(new Map(pe.map(g=>[g.id,new xt(g)]))),u=v(()=>a.value.some(g=>y(g).state==="error")),y=g=>p.value.get(g.id),k=g=>{e.value=g;const B=g;n.value=!0;for(const F of a.value)y(F).update(B);if(!B.inProgress&&n.value){n.value=!1;for(const F of a.value)y(F).finaliseUpdate(B)}},C=()=>{for(const g of a.value)y(g).resolved&&=!1},D=async()=>{n.value=!0,await t.Validation.validateInstallation(k)};return{tasks:a,isRefreshing:n,isRunningTerminalCommand:i,isRunningInstallationFix:r,unsafeBasePath:o,unsafeBasePathReason:c,execute:async g=>{const B=await y(g).execute(g);return B&&g.isInstallationFix&&await D(),B},getRunner:y,processUpdate:k,clearResolved:C,anyErrors:u,refreshDesktopTasks:D}});function q(t,e=250){const n=A(t.value),{ready:i,start:r}=Pe(e,{controls:!0,immediate:!1});return ye(t,o=>{o&&!n.value&&r(),n.value=o}),v(()=>n.value||!i.value)}const Rt={key:0,class:"pi pi-exclamation-triangle absolute top-0 -right-14 m-2 text-red-500 opacity-15",style:{"font-size":"10rem"}},At=["src"],Dt={class:"mt-1 flex gap-4"},Bt={key:0,class:"task-card-ok pi pi-check"},zt=$({__name:"TaskCard",props:{task:{}},emits:["execute"],setup(t){const e=Q(),n=v(()=>e.getRunner(i.task)),i=t,r=v(()=>n.value.state==="error"?i.task.errorDescription??i.task.shortDescription:i.task.shortDescription),o=v(()=>!!n.value.refreshing),c=v(()=>!!n.value.executing),a=q(o,250),p=q(c,250);return(u,y)=>(l(),f("div",{class:z(["task-div relative grid min-h-52 max-w-48",{"opacity-75":s(a)}])},[b(s(xe),m({class:["relative h-full max-w-48 overflow-hidden",{"opacity-65":n.value.state!=="error"}]},(({onClick:k,...C})=>C)(u.$attrs)),{header:L(()=>[n.value.state==="error"?(l(),f("i",Rt)):x("",!0),u.task.headerImg?(l(),f("img",{key:1,src:u.task.headerImg,class:"h-full w-full object-contain px-4 pt-4 opacity-25"},null,8,At)):x("",!0)]),title:L(()=>[oe(S(u.task.name),1)]),content:L(()=>[oe(S(r.value),1)]),footer:L(()=>[d("div",Dt,[b(s(K),{icon:u.task.button?.icon,label:u.task.button?.text,class:"w-full",raised:"","icon-pos":"right",loading:s(p),onClick:y[0]||(y[0]=k=>u.$emit("execute",k))},null,8,["icon","label","loading"])])]),_:1},16,["class"]),!s(a)&&n.value.state==="OK"?(l(),f("i",Bt)):x("",!0)],2))}}),Kt=Se(zt,[["__scopeId","data-v-4265e2a0"]]),$t=$({__name:"TaskListStatusIcon",props:{state:{},loading:{}},setup(t){const e=v(()=>i.state==="error"?h("g.error"):i.state==="OK"?h("maintenance.OK"):h("maintenance.Skipped")),n=v(()=>{let r;return i.state==="error"?r=`${w.EXCLAMATION_TRIANGLE} text-red-500`:i.state==="OK"?r=`${w.CHECK} text-green-500`:r=w.MINUS,`text-3xl pi ${r}`}),i=t;return(r,o)=>{const c=W("tooltip");return!r.state||r.loading?(l(),R(s(Ce),{key:0,class:"h-8 w-8"})):G((l(),f("i",{key:1,class:z(n.value)},null,2)),[[c,{value:e.value,showDelay:250},void 0,{top:!0}]])}}}),jt={class:"text-center w-16"},Pt={class:"inline-block"},Vt={class:"whitespace-pre-line"},_t={class:"text-right px-4"},Ft=$({__name:"TaskListItem",props:{task:{}},emits:["execute"],setup(t){const e=Q(),n=v(()=>e.getRunner(i.task)),i=t,r=v(()=>n.value.state==="error"||n.value.state==="warning"?"primary":"secondary"),o=v(()=>!!n.value.refreshing),c=v(()=>!!n.value.executing),a=q(o,250),p=q(c,250),u=A(null),y=k=>{u.value?.toggle(k)};return(k,C)=>(l(),f("tr",{class:z(["border-neutral-700 border-solid border-y",{"opacity-50":n.value.resolved,"opacity-75":s(a)&&n.value.resolved}])},[d("td",jt,[b($t,{state:n.value.state,loading:s(a)},null,8,["state","loading"])]),d("td",null,[d("p",Pt,S(k.task.name),1),b(s(K),{class:"inline-block mx-2",type:"button",icon:s(w).INFO_CIRCLE,severity:"secondary",text:!0,onClick:y},null,8,["icon"]),b(s(Ae),{ref_key:"infoPopover",ref:u,class:"block m-1 max-w-64 min-w-32"},{default:L(()=>[d("span",Vt,S(k.task.description),1)]),_:1},512)]),d("td",_t,[b(s(K),{icon:k.task.button?.icon,label:k.task.button?.text,severity:r.value,"icon-pos":"right",loading:s(p),onClick:C[0]||(C[0]=D=>k.$emit("execute",D))},null,8,["icon","label","severity","loading"])])],2))}}),Ut={class:"my-4"},Ht={class:"text-neutral-400 w-full text-center"},Nt={key:0,class:"w-full border-collapse border-hidden"},Mt={key:1,class:"flex flex-wrap justify-evenly gap-8 pad-y my-4"},qt=$({__name:"TaskListPanel",props:{displayAsList:{},filter:{}},setup(t){const e=ke(),n=Ve(),i=Q(),r=async c=>{let a;try{if(await i.execute(c)===!0)return;a=h("maintenance.error.taskFailed")}catch(p){a=p?.message}e.add({severity:"error",summary:h("maintenance.error.toastTitle"),detail:a??h("maintenance.error.defaultDescription"),life:1e4})},o=async(c,a)=>{if(!a.requireConfirm){await r(a);return}n.require({target:c.currentTarget,message:a.confirmText??h("maintenance.confirmTitle"),icon:"pi pi-exclamation-circle",rejectProps:{label:h("g.cancel"),severity:"secondary",outlined:!0},acceptProps:{label:a.button?.text??h("g.save"),severity:a.severity??"primary"},accept:async()=>{await r(a)}})};return(c,a)=>(l(),f("section",Ut,[c.filter.tasks.length===0?(l(),f(j,{key:0},[b(s(qe)),d("p",Ht,S(c.$t("maintenance.allOk")),1)],64)):(l(),f(j,{key:1},[c.displayAsList===s(w).LIST?(l(),f("table",Nt,[(l(!0),f(j,null,te(c.filter.tasks,p=>(l(),R(Ft,{key:p.id,task:p,onExecute:u=>o(u,p)},null,8,["task","onExecute"]))),128))])):(l(),f("div",Mt,[(l(!0),f(j,null,te(c.filter.tasks,p=>(l(),R(Kt,{key:p.id,task:p,onExecute:u=>o(u,p)},null,8,["task","onExecute"]))),128))]))],64)),b(s(Re))]))}}),Gt={class:"min-w-full min-h-full font-sans w-screen h-screen grid justify-around text-neutral-300 bg-neutral-900 dark-theme overflow-y-auto"},Zt={class:"max-w-(--breakpoint-sm) w-screen m-8 relative"},Xt={class:"backspan pi-wrench text-4xl font-bold"},Yt={class:"w-full flex flex-wrap gap-4 items-center"},Wt={class:"grow"},Qt={class:"flex gap-4 items-center"},Jt={class:"max-sm:hidden"},en={key:0,class:"my-4"},tn={class:"flex items-start gap-3 text-neutral-300"},nn={class:"block mb-1"},on={class:"block mb-1"},rn={class:"block text-sm text-neutral-400"},an={class:"flex justify-between gap-4 flex-row"},sn=$({__name:"MaintenanceView",setup(t){const e=ae(),n=ke(),i=Q(),{clearResolved:r,processUpdate:o,refreshDesktopTasks:c}=i,a=A(!1),p=v(()=>i.isRefreshing),u=q(p,250),y=v(()=>i.anyErrors),k=A(w.TH_LARGE),C=v(()=>i.tasks.filter(I=>{const{state:E,resolved:T}=i.getRunner(I);return E==="error"||T})),D=A([{icon:w.FILTER_FILL,value:"All",tasks:i.tasks},{icon:w.EXCLAMATION_TRIANGLE,value:"Errors",tasks:C}]),_=A(D.value[0]),g=v(()=>{const I=i.unsafeBasePathReason;return I?I==="appInstallDir"?h("maintenance.unsafeMigration.appInstallDir"):I==="updaterCache"?h("maintenance.unsafeMigration.updaterCache"):I==="oneDrive"?h("maintenance.unsafeMigration.oneDrive"):h("maintenance.unsafeMigration.generic"):h("maintenance.unsafeMigration.generic")}),B=async()=>{await e.Validation.complete()||n.add({severity:"error",summary:h("g.error"),detail:h("maintenance.error.cannotContinue"),life:5e3})},F=()=>{a.value=!a.value};return ye(()=>i.isRunningTerminalCommand,I=>{a.value=I}),_e(async()=>{e.Validation.onUpdate(o);const I=await e.Validation.getStatus();Object.values(I).some(E=>E==="error")&&(_.value=D.value[1]),o(I)}),Fe(()=>e.Validation.dispose()),(I,E)=>(l(),R(Me,{dark:""},{default:L(()=>[d("div",Gt,[d("div",Zt,[d("h1",Xt,S(s(h)("maintenance.title")),1),d("div",Yt,[d("span",Wt,[oe(S(s(h)("maintenance.status"))+": ",1),b(dt,{refreshing:s(u),error:y.value},null,8,["refreshing","error"])]),d("div",Qt,[b(s(re),{modelValue:k.value,"onUpdate:modelValue":E[0]||(E[0]=T=>k.value=T),options:[s(w).LIST,s(w).TH_LARGE],"allow-empty":!1},{option:L(T=>[d("i",{class:z(T.option)},null,2)]),_:1},8,["modelValue","options"]),b(s(re),{modelValue:_.value,"onUpdate:modelValue":E[1]||(E[1]=T=>_.value=T),options:D.value,"allow-empty":!1,"option-label":"value","data-key":"value","area-labelledby":"custom",onChange:s(r)},{option:L(T=>[d("i",{class:z(T.option.icon)},null,2),d("span",Jt,S(T.option.value),1)]),_:1},8,["modelValue","options","onChange"]),b(ut,{modelValue:s(u),"onUpdate:modelValue":E[2]||(E[2]=T=>Ue(u)?u.value=T:null),severity:"secondary",onRefresh:s(c)},null,8,["modelValue","onRefresh"])])]),s(i).unsafeBasePath?(l(),f("div",en,[d("p",tn,[b(s(Le),{icon:"pi pi-exclamation-triangle",severity:"warn",value:s(h)("icon.exclamation-triangle")},null,8,["value"]),d("span",null,[d("strong",nn,S(s(h)("maintenance.unsafeMigration.title")),1),d("span",on,S(g.value),1),d("span",rn,S(s(h)("maintenance.unsafeMigration.action")),1)])])])):x("",!0),b(qt,{class:"border-neutral-700 border-solid border-x-0 border-y",filter:_.value,"display-as-list":k.value},null,8,["filter","display-as-list"]),d("div",an,[b(s(K),{label:s(h)("maintenance.consoleLogs"),icon:"pi pi-desktop","icon-pos":"left",severity:"secondary",onClick:F},null,8,["label"]),b(s(K),{label:s(h)("g.continue"),icon:"pi pi-arrow-right","icon-pos":"left",severity:y.value?"secondary":"primary",loading:s(u),onClick:E[3]||(E[3]=()=>B())},null,8,["label","severity","loading"])])]),b(He,{modelValue:a.value,"onUpdate:modelValue":E[4]||(E[4]=T=>a.value=T),header:s(h)("g.terminal"),"default-message":s(h)("maintenance.terminalDefaultMessage")},null,8,["modelValue","header","default-message"]),b(s(Ne))])]),_:1}))}}),kn=Se(sn,[["__scopeId","data-v-48acd01f"]]);export{kn as default};
//# sourceMappingURL=MaintenanceView-TNYCUGPv.js.map
