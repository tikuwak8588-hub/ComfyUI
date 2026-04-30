import{s as q,b as te,R as be}from"./index--UliHvld.js";import{B as ne,g as A,o as R,m as O,a as D,au as Ce,i as ve,Z as F,aH as $,k as ue,c as T,q as N,n as z,F as oe,t as X,X as ye,l as de,j as W,w as j,b as re,aI as we,A as _e,av as Se,aw as ke,I as Ie,ap as Le,W as Re,r as U,p as Oe,aJ as xe,a4 as he,aF as Be,d as Ae,aC as De,ax as Te,a7 as Ee,e as Me}from"./index-B4t0AlBR.js";import{a as fe,c as se,s as pe}from"./BaseViewTemplate.vue_vue_type_script_setup_true_lang-CVr3zlLP.js";import{s as Pe}from"./index-KsOEsaua.js";import{F as $e}from"./index-CRg0dVMo.js";import{x as ze,B as Fe}from"./BaseTerminal-DUWvX35A.js";var je=function(n){var t=n.dt;return`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(t("progressspinner.color.1"),`;
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: `).concat(t("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(t("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(t("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(t("progressspinner.color.4"),`;
    }
}
`)},Ue={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Ne=ne.extend({name:"progressspinner",theme:je,classes:Ue}),Ke={name:"BaseProgressSpinner",extends:q,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Ne,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},Ze={name:"ProgressSpinner",extends:Ke,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},Ve=["fill","stroke-width"];function Ge(e,n,t,y,I,w){return R(),A("div",O({class:e.cx("root"),role:"progressbar"},e.ptmi("root")),[(R(),A("svg",O({class:e.cx("spin"),viewBox:"25 25 50 50",style:w.svgStyle},e.ptm("spin")),[D("circle",O({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,Ve)],16))],16)}Ze.render=Ge;function K(e){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},K(e)}function G(e,n,t){return(n=He(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function He(e){var n=We(e,"string");return K(n)=="symbol"?n:n+""}function We(e,n){if(K(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var y=t.call(e,n);if(K(y)!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var qe=function(n){var t=n.dt;return`
.p-toast {
    width: `.concat(t("toast.width"),`;
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: `).concat(t("toast.icon.size"),`;
    width: `).concat(t("toast.icon.size"),`;
    height: `).concat(t("toast.icon.size"),`;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: `).concat(t("toast.content.padding"),`;
    gap: `).concat(t("toast.content.gap"),`;
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("toast.text.gap"),`;
}

.p-toast-summary {
    font-weight: `).concat(t("toast.summary.font.weight"),`;
    font-size: `).concat(t("toast.summary.font.size"),`;
}

.p-toast-detail {
    font-weight: `).concat(t("toast.detail.font.weight"),`;
    font-size: `).concat(t("toast.detail.font.size"),`;
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background `).concat(t("toast.transition.duration"),", color ").concat(t("toast.transition.duration"),", outline-color ").concat(t("toast.transition.duration"),", box-shadow ").concat(t("toast.transition.duration"),`;
    outline-color: transparent;
    color: inherit;
    width: `).concat(t("toast.close.button.width"),`;
    height: `).concat(t("toast.close.button.height"),`;
    border-radius: `).concat(t("toast.close.button.border.radius"),`;
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-close-button:dir(rtl) {
    margin: -25% 0 0 auto;
    left: -25%;
    right: auto;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: `).concat(t("toast.border.width"),`;
    border-style: solid;
    backdrop-filter: blur(`).concat(t("toast.blur"),`);
    border-radius: `).concat(t("toast.border.radius"),`;
}

.p-toast-close-icon {
    font-size: `).concat(t("toast.close.icon.size"),`;
    width: `).concat(t("toast.close.icon.size"),`;
    height: `).concat(t("toast.close.icon.size"),`;
}

.p-toast-close-button:focus-visible {
    outline-width: `).concat(t("focus.ring.width"),`;
    outline-style: `).concat(t("focus.ring.style"),`;
    outline-offset: `).concat(t("focus.ring.offset"),`;
}

.p-toast-message-info {
    background: `).concat(t("toast.info.background"),`;
    border-color: `).concat(t("toast.info.border.color"),`;
    color: `).concat(t("toast.info.color"),`;
    box-shadow: `).concat(t("toast.info.shadow"),`;
}

.p-toast-message-info .p-toast-detail {
    color: `).concat(t("toast.info.detail.color"),`;
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: `).concat(t("toast.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("toast.info.close.button.focus.ring.shadow"),`;
}

.p-toast-message-info .p-toast-close-button:hover {
    background: `).concat(t("toast.info.close.button.hover.background"),`;
}

.p-toast-message-success {
    background: `).concat(t("toast.success.background"),`;
    border-color: `).concat(t("toast.success.border.color"),`;
    color: `).concat(t("toast.success.color"),`;
    box-shadow: `).concat(t("toast.success.shadow"),`;
}

.p-toast-message-success .p-toast-detail {
    color: `).concat(t("toast.success.detail.color"),`;
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: `).concat(t("toast.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("toast.success.close.button.focus.ring.shadow"),`;
}

.p-toast-message-success .p-toast-close-button:hover {
    background: `).concat(t("toast.success.close.button.hover.background"),`;
}

.p-toast-message-warn {
    background: `).concat(t("toast.warn.background"),`;
    border-color: `).concat(t("toast.warn.border.color"),`;
    color: `).concat(t("toast.warn.color"),`;
    box-shadow: `).concat(t("toast.warn.shadow"),`;
}

.p-toast-message-warn .p-toast-detail {
    color: `).concat(t("toast.warn.detail.color"),`;
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: `).concat(t("toast.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("toast.warn.close.button.focus.ring.shadow"),`;
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: `).concat(t("toast.warn.close.button.hover.background"),`;
}

.p-toast-message-error {
    background: `).concat(t("toast.error.background"),`;
    border-color: `).concat(t("toast.error.border.color"),`;
    color: `).concat(t("toast.error.color"),`;
    box-shadow: `).concat(t("toast.error.shadow"),`;
}

.p-toast-message-error .p-toast-detail {
    color: `).concat(t("toast.error.detail.color"),`;
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: `).concat(t("toast.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("toast.error.close.button.focus.ring.shadow"),`;
}

.p-toast-message-error .p-toast-close-button:hover {
    background: `).concat(t("toast.error.close.button.hover.background"),`;
}

.p-toast-message-secondary {
    background: `).concat(t("toast.secondary.background"),`;
    border-color: `).concat(t("toast.secondary.border.color"),`;
    color: `).concat(t("toast.secondary.color"),`;
    box-shadow: `).concat(t("toast.secondary.shadow"),`;
}

.p-toast-message-secondary .p-toast-detail {
    color: `).concat(t("toast.secondary.detail.color"),`;
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: `).concat(t("toast.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("toast.secondary.close.button.focus.ring.shadow"),`;
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: `).concat(t("toast.secondary.close.button.hover.background"),`;
}

.p-toast-message-contrast {
    background: `).concat(t("toast.contrast.background"),`;
    border-color: `).concat(t("toast.contrast.border.color"),`;
    color: `).concat(t("toast.contrast.color"),`;
    box-shadow: `).concat(t("toast.contrast.shadow"),`;
}

.p-toast-message-contrast .p-toast-detail {
    color: `).concat(t("toast.contrast.detail.color"),`;
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: `).concat(t("toast.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("toast.contrast.close.button.focus.ring.shadow"),`;
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: `).concat(t("toast.contrast.close.button.hover.background"),`;
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`)},Xe={root:function(n){var t=n.position;return{position:"fixed",top:t==="top-right"||t==="top-left"||t==="top-center"?"20px":t==="center"?"50%":null,right:(t==="top-right"||t==="bottom-right")&&"20px",bottom:(t==="bottom-left"||t==="bottom-right"||t==="bottom-center")&&"20px",left:t==="top-left"||t==="bottom-left"?"20px":t==="center"||t==="top-center"||t==="bottom-center"?"50%":null}}},Ye={root:function(n){var t=n.props;return["p-toast p-component p-toast-"+t.position]},message:function(n){var t=n.props;return["p-toast-message",{"p-toast-message-info":t.message.severity==="info"||t.message.severity===void 0,"p-toast-message-warn":t.message.severity==="warn","p-toast-message-error":t.message.severity==="error","p-toast-message-success":t.message.severity==="success","p-toast-message-secondary":t.message.severity==="secondary","p-toast-message-contrast":t.message.severity==="contrast"}]},messageContent:"p-toast-message-content",messageIcon:function(n){var t=n.props;return["p-toast-message-icon",G(G(G(G({},t.infoIcon,t.message.severity==="info"),t.warnIcon,t.message.severity==="warn"),t.errorIcon,t.message.severity==="error"),t.successIcon,t.message.severity==="success")]},messageText:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-close-button",closeIcon:"p-toast-close-icon"},Je=ne.extend({name:"toast",theme:qe,classes:Ye,inlineStyles:Xe}),Y={name:"ExclamationTriangleIcon",extends:te};function Qe(e,n,t,y,I,w){return R(),A("svg",O({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[D("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"},null,-1),D("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"},null,-1),D("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"},null,-1)]),16)}Y.render=Qe;var J={name:"InfoCircleIcon",extends:te};function et(e,n,t,y,I,w){return R(),A("svg",O({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[D("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"},null,-1)]),16)}J.render=et;var Q={name:"TimesCircleIcon",extends:te};function tt(e,n,t,y,I,w){return R(),A("svg",O({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[D("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)]),16)}Q.render=tt;var nt={name:"BaseToast",extends:q,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:Je,provide:function(){return{$pcToast:this,$parentInstance:this}}},me={name:"ToastMessage",hostName:"Toast",extends:q,emits:["close"],closeTimeout:null,props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},mounted:function(){var n=this;this.message.life&&(this.closeTimeout=setTimeout(function(){n.close({message:n.message,type:"life-end"})},this.message.life))},beforeUnmount:function(){this.clearCloseTimeout()},methods:{close:function(n){this.$emit("close",n)},onCloseClick:function(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{iconComponent:function(){return{info:!this.infoIcon&&J,success:!this.successIcon&&se,warn:!this.warnIcon&&Y,error:!this.errorIcon&&Q}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:pe,InfoCircleIcon:J,CheckIcon:se,ExclamationTriangleIcon:Y,TimesCircleIcon:Q},directives:{ripple:be}};function Z(e){"@babel/helpers - typeof";return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Z(e)}function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(e);n&&(y=y.filter(function(I){return Object.getOwnPropertyDescriptor(e,I).enumerable})),t.push.apply(t,y)}return t}function ae(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ie(Object(t),!0).forEach(function(y){ot(e,y,t[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach(function(y){Object.defineProperty(e,y,Object.getOwnPropertyDescriptor(t,y))})}return e}function ot(e,n,t){return(n=rt(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function rt(e){var n=st(e,"string");return Z(n)=="symbol"?n:n+""}function st(e,n){if(Z(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var y=t.call(e,n);if(Z(y)!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var it=["aria-label"];function at(e,n,t,y,I,w){var L=ue("ripple");return R(),A("div",O({class:[e.cx("message"),t.message.styleClass],role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("message")),[t.templates.container?(R(),T(N(t.templates.container),{key:0,message:t.message,closeCallback:w.onCloseClick},null,8,["message","closeCallback"])):(R(),A("div",O({key:1,class:[e.cx("messageContent"),t.message.contentStyleClass]},e.ptm("messageContent")),[t.templates.message?(R(),T(N(t.templates.message),{key:1,message:t.message},null,8,["message"])):(R(),A(oe,{key:0},[(R(),T(N(t.templates.messageicon?t.templates.messageicon:t.templates.icon?t.templates.icon:w.iconComponent&&w.iconComponent.name?w.iconComponent:"span"),O({class:e.cx("messageIcon")},e.ptm("messageIcon")),null,16,["class"])),D("div",O({class:e.cx("messageText")},e.ptm("messageText")),[D("span",O({class:e.cx("summary")},e.ptm("summary")),X(t.message.summary),17),D("div",O({class:e.cx("detail")},e.ptm("detail")),X(t.message.detail),17)],16)],64)),t.message.closable!==!1?(R(),A("div",ye(O({key:2},e.ptm("buttonContainer"))),[de((R(),A("button",O({class:e.cx("closeButton"),type:"button","aria-label":w.closeAriaLabel,onClick:n[0]||(n[0]=function(){return w.onCloseClick&&w.onCloseClick.apply(w,arguments)}),autofocus:""},ae(ae({},t.closeButtonProps),e.ptm("closeButton"))),[(R(),T(N(t.templates.closeicon||"TimesIcon"),O({class:[e.cx("closeIcon"),t.closeIcon]},e.ptm("closeIcon")),null,16,["class"]))],16,it)),[[L]])],16)):z("",!0)],16))],16)}me.render=at;function lt(e){return ht(e)||dt(e)||ut(e)||ct()}function ct(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ut(e,n){if(e){if(typeof e=="string")return ee(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ee(e,n):void 0}}function dt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ht(e){if(Array.isArray(e))return ee(e)}function ee(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,y=Array(n);t<n;t++)y[t]=e[t];return y}var ft=0,pt={name:"Toast",extends:nt,inheritAttrs:!1,emits:["close","life-end"],data:function(){return{messages:[]}},styleElement:null,mounted:function(){$.on("add",this.onAdd),$.on("remove",this.onRemove),$.on("remove-group",this.onRemoveGroup),$.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&F.clear(this.$refs.container),$.off("add",this.onAdd),$.off("remove",this.onRemove),$.off("remove-group",this.onRemoveGroup),$.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add:function(n){n.id==null&&(n.id=ft++),this.messages=[].concat(lt(this.messages),[n])},remove:function(n){var t=this.messages.findIndex(function(y){return y.id===n.message.id});t!==-1&&(this.messages.splice(t,1),this.$emit(n.type,{message:n.message}))},onAdd:function(n){this.group==n.group&&this.add(n)},onRemove:function(n){this.remove({message:n,type:"close"})},onRemoveGroup:function(n){this.group===n&&(this.messages=[])},onRemoveAllGroups:function(){this.messages=[]},onEnter:function(){this.autoZIndex&&F.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var n=this;this.$refs.container&&this.autoZIndex&&ve(this.messages)&&setTimeout(function(){F.clear(n.$refs.container)},200)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var n;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",Ce(this.styleElement,"nonce",(n=this.$primevue)===null||n===void 0||(n=n.config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce),document.head.appendChild(this.styleElement);var t="";for(var y in this.breakpoints){var I="";for(var w in this.breakpoints[y])I+=w+":"+this.breakpoints[y][w]+"!important;";t+=`
                        @media screen and (max-width: `.concat(y,`) {
                            .p-toast[`).concat(this.$attrSelector,`] {
                                `).concat(I,`
                            }
                        }
                    `)}this.styleElement.innerHTML=t}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},components:{ToastMessage:me,Portal:fe}};function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},V(e)}function le(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(e);n&&(y=y.filter(function(I){return Object.getOwnPropertyDescriptor(e,I).enumerable})),t.push.apply(t,y)}return t}function mt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?le(Object(t),!0).forEach(function(y){gt(e,y,t[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):le(Object(t)).forEach(function(y){Object.defineProperty(e,y,Object.getOwnPropertyDescriptor(t,y))})}return e}function gt(e,n,t){return(n=bt(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function bt(e){var n=Ct(e,"string");return V(n)=="symbol"?n:n+""}function Ct(e,n){if(V(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var y=t.call(e,n);if(V(y)!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function vt(e,n,t,y,I,w){var L=W("ToastMessage"),s=W("Portal");return R(),T(s,null,{default:j(function(){return[D("div",O({ref:"container",class:e.cx("root"),style:e.sx("root",!0,{position:e.position})},e.ptmi("root")),[re(we,O({name:"p-toast-message",tag:"div",onEnter:w.onEnter,onLeave:w.onLeave},mt({},e.ptm("transition"))),{default:j(function(){return[(R(!0),A(oe,null,_e(I.messages,function(f){return R(),T(L,{key:f.id,message:f,templates:e.$slots,closeIcon:e.closeIcon,infoIcon:e.infoIcon,warnIcon:e.warnIcon,errorIcon:e.errorIcon,successIcon:e.successIcon,closeButtonProps:e.closeButtonProps,unstyled:e.unstyled,onClose:n[0]||(n[0]=function(u){return w.remove(u)}),pt:e.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","unstyled","pt"])}),128))]}),_:1},16,["onEnter","onLeave"])],16)]}),_:1})}pt.render=vt;var yt=function(n){var t=n.dt;return`
.p-drawer {
    display: flex;
    flex-direction: column;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
    background: `.concat(t("drawer.background"),`;
    color: `).concat(t("drawer.color"),`;
    border: 1px solid `).concat(t("drawer.border.color"),`;
    box-shadow: `).concat(t("drawer.shadow"),`;
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: `).concat(t("drawer.content.padding"),`;
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: `).concat(t("drawer.header.padding"),`;
}

.p-drawer-footer {
    padding: `).concat(t("drawer.footer.padding"),`;
}

.p-drawer-title {
    font-weight: `).concat(t("drawer.title.font.weight"),`;
    font-size: `).concat(t("drawer.title.font.size"),`;
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer-enter-from,
.p-drawer-left .p-drawer-leave-to {
    transform: translateX(-100%);
}

.p-drawer-right .p-drawer-enter-from,
.p-drawer-right .p-drawer-leave-to {
    transform: translateX(100%);
}

.p-drawer-top .p-drawer-enter-from,
.p-drawer-top .p-drawer-leave-to {
    transform: translateY(-100%);
}

.p-drawer-bottom .p-drawer-enter-from,
.p-drawer-bottom .p-drawer-leave-to {
    transform: translateY(100%);
}

.p-drawer-full .p-drawer-enter-from,
.p-drawer-full .p-drawer-leave-to {
    opacity: 0;
}

.p-drawer-full .p-drawer-enter-active,
.p-drawer-full .p-drawer-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.p-drawer-left .p-drawer {
    width: 20rem;
    height: 100%;
    border-inline-end-width: 1px;
}

.p-drawer-right .p-drawer {
    width: 20rem;
    height: 100%;
    border-inline-start-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-block-end-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-block-start-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-mask:dir(rtl) {
    flex-direction: row-reverse;
}
`)},wt={mask:function(n){var t=n.position,y=n.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t==="left"?"flex-start":t==="right"?"flex-end":"center",alignItems:t==="top"?"flex-start":t==="bottom"?"flex-end":"center",pointerEvents:y?"auto":"none"}},root:{pointerEvents:"auto"}},_t={mask:function(n){var t=n.instance,y=n.props,I=["left","right","top","bottom"],w=I.find(function(L){return L===y.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":y.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen},w?"p-drawer-".concat(w):""]},root:function(n){var t=n.instance;return["p-drawer p-component",{"p-drawer-full":t.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},St=ne.extend({name:"drawer",theme:yt,classes:_t,inlineStyles:wt}),kt={name:"BaseDrawer",extends:q,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:St,provide:function(){return{$pcDrawer:this,$parentInstance:this}}},ge={name:"Drawer",extends:kt,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(n){n?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&F.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&F.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&Le(this.mask,"p-overlay-mask-leave")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&F.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(n){this.dismissable&&this.modal&&this.mask===n.target&&this.hide()},focus:function(){var n=function(I){return I&&I.querySelector("[autofocus]")},t=this.$slots.header&&n(this.headerContainer);t||(t=this.$slots.default&&n(this.container),t||(t=this.$slots.footer&&n(this.footerContainer),t||(t=this.closeButton))),t&&Ie(t)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&ke()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&Se()},onKeydown:function(n){n.code==="Escape"&&this.hide()},containerRef:function(n){this.container=n},maskRef:function(n){this.mask=n},contentRef:function(n){this.content=n},headerContainerRef:function(n){this.headerContainer=n},footerContainerRef:function(n){this.footerContainer=n},closeButtonRef:function(n){this.closeButton=n?n.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){n.isOutsideClicked(t)&&n.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked:function(n){return this.container&&!this.container.contains(n.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:$e},components:{Button:Pe,Portal:fe,TimesIcon:pe}},It=["aria-modal"];function Lt(e,n,t,y,I,w){var L=W("Button"),s=W("Portal"),f=ue("focustrap");return R(),T(s,null,{default:j(function(){return[I.containerVisible?(R(),A("div",O({key:0,ref:w.maskRef,onMousedown:n[0]||(n[0]=function(){return w.onMaskClick&&w.onMaskClick.apply(w,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal})},e.ptm("mask")),[re(Re,O({name:"p-drawer",onEnter:w.onEnter,onAfterEnter:w.onAfterEnter,onBeforeLeave:w.onBeforeLeave,onLeave:w.onLeave,onAfterLeave:w.onAfterLeave,appear:""},e.ptm("transition")),{default:j(function(){return[e.visible?de((R(),A("div",O({key:0,ref:w.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal},e.ptmi("root")),[e.$slots.container?U(e.$slots,"container",{key:0,closeCallback:w.hide}):(R(),A(oe,{key:1},[D("div",O({ref:w.headerContainerRef,class:e.cx("header")},e.ptm("header")),[U(e.$slots,"header",{class:Oe(e.cx("title"))},function(){return[e.header?(R(),A("div",O({key:0,class:e.cx("title")},e.ptm("title")),X(e.header),17)):z("",!0)]}),e.showCloseIcon?(R(),T(L,O({key:0,ref:w.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":w.closeAriaLabel,unstyled:e.unstyled,onClick:w.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:j(function(u){return[U(e.$slots,"closeicon",{},function(){return[(R(),T(N(e.closeIcon?"span":"TimesIcon"),O({class:[e.closeIcon,u.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])):z("",!0)],16),D("div",O({ref:w.contentRef,class:e.cx("content")},e.ptm("content")),[U(e.$slots,"default")],16),e.$slots.footer?(R(),A("div",O({key:0,ref:w.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[U(e.$slots,"footer")],16)):z("",!0)],64))],16,It)),[[f]]):z("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16)):z("",!0)]}),_:3})}ge.render=Lt;var H={exports:{}},Rt=H.exports,ce;function Ot(){return ce||(ce=1,(function(e,n){(function(t,y){e.exports=y()})(Rt,(()=>(()=>{var t={930:(L,s,f)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.ColorContrastCache=void 0;const u=f(485);s.ColorContrastCache=class{constructor(){this._color=new u.TwoKeyMap,this._css=new u.TwoKeyMap}setCss(m,d,C){this._css.set(m,d,C)}getCss(m,d){return this._css.get(m,d)}setColor(m,d,C){this._color.set(m,d,C)}getColor(m,d){return this._color.get(m,d)}clear(){this._color.clear(),this._css.clear()}}},997:function(L,s,f){var u=this&&this.__decorate||function(i,c,v,_){var x,k=arguments.length,S=k<3?c:_===null?_=Object.getOwnPropertyDescriptor(c,v):_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")S=Reflect.decorate(i,c,v,_);else for(var B=i.length-1;B>=0;B--)(x=i[B])&&(S=(k<3?x(S):k>3?x(c,v,S):x(c,v))||S);return k>3&&S&&Object.defineProperty(c,v,S),S},m=this&&this.__param||function(i,c){return function(v,_){c(v,_,i)}};Object.defineProperty(s,"__esModule",{value:!0}),s.ThemeService=s.DEFAULT_ANSI_COLORS=void 0;const d=f(930),C=f(160),E=f(345),M=f(859),b=f(97),o=C.css.toColor("#ffffff"),l=C.css.toColor("#000000"),a=C.css.toColor("#ffffff"),p=C.css.toColor("#000000"),g={css:"rgba(255, 255, 255, 0.3)",rgba:4294967117};s.DEFAULT_ANSI_COLORS=Object.freeze((()=>{const i=[C.css.toColor("#2e3436"),C.css.toColor("#cc0000"),C.css.toColor("#4e9a06"),C.css.toColor("#c4a000"),C.css.toColor("#3465a4"),C.css.toColor("#75507b"),C.css.toColor("#06989a"),C.css.toColor("#d3d7cf"),C.css.toColor("#555753"),C.css.toColor("#ef2929"),C.css.toColor("#8ae234"),C.css.toColor("#fce94f"),C.css.toColor("#729fcf"),C.css.toColor("#ad7fa8"),C.css.toColor("#34e2e2"),C.css.toColor("#eeeeec")],c=[0,95,135,175,215,255];for(let v=0;v<216;v++){const _=c[v/36%6|0],x=c[v/6%6|0],k=c[v%6];i.push({css:C.channels.toCss(_,x,k),rgba:C.channels.toRgba(_,x,k)})}for(let v=0;v<24;v++){const _=8+10*v;i.push({css:C.channels.toCss(_,_,_),rgba:C.channels.toRgba(_,_,_)})}return i})());let h=s.ThemeService=class extends M.Disposable{get colors(){return this._colors}constructor(i){super(),this._optionsService=i,this._contrastCache=new d.ColorContrastCache,this._halfContrastCache=new d.ColorContrastCache,this._onChangeColors=this.register(new E.EventEmitter),this.onChangeColors=this._onChangeColors.event,this._colors={foreground:o,background:l,cursor:a,cursorAccent:p,selectionForeground:void 0,selectionBackgroundTransparent:g,selectionBackgroundOpaque:C.color.blend(l,g),selectionInactiveBackgroundTransparent:g,selectionInactiveBackgroundOpaque:C.color.blend(l,g),ansi:s.DEFAULT_ANSI_COLORS.slice(),contrastCache:this._contrastCache,halfContrastCache:this._halfContrastCache},this._updateRestoreColors(),this._setTheme(this._optionsService.rawOptions.theme),this.register(this._optionsService.onSpecificOptionChange("minimumContrastRatio",(()=>this._contrastCache.clear()))),this.register(this._optionsService.onSpecificOptionChange("theme",(()=>this._setTheme(this._optionsService.rawOptions.theme))))}_setTheme(i={}){const c=this._colors;if(c.foreground=r(i.foreground,o),c.background=r(i.background,l),c.cursor=r(i.cursor,a),c.cursorAccent=r(i.cursorAccent,p),c.selectionBackgroundTransparent=r(i.selectionBackground,g),c.selectionBackgroundOpaque=C.color.blend(c.background,c.selectionBackgroundTransparent),c.selectionInactiveBackgroundTransparent=r(i.selectionInactiveBackground,c.selectionBackgroundTransparent),c.selectionInactiveBackgroundOpaque=C.color.blend(c.background,c.selectionInactiveBackgroundTransparent),c.selectionForeground=i.selectionForeground?r(i.selectionForeground,C.NULL_COLOR):void 0,c.selectionForeground===C.NULL_COLOR&&(c.selectionForeground=void 0),C.color.isOpaque(c.selectionBackgroundTransparent)&&(c.selectionBackgroundTransparent=C.color.opacity(c.selectionBackgroundTransparent,.3)),C.color.isOpaque(c.selectionInactiveBackgroundTransparent)&&(c.selectionInactiveBackgroundTransparent=C.color.opacity(c.selectionInactiveBackgroundTransparent,.3)),c.ansi=s.DEFAULT_ANSI_COLORS.slice(),c.ansi[0]=r(i.black,s.DEFAULT_ANSI_COLORS[0]),c.ansi[1]=r(i.red,s.DEFAULT_ANSI_COLORS[1]),c.ansi[2]=r(i.green,s.DEFAULT_ANSI_COLORS[2]),c.ansi[3]=r(i.yellow,s.DEFAULT_ANSI_COLORS[3]),c.ansi[4]=r(i.blue,s.DEFAULT_ANSI_COLORS[4]),c.ansi[5]=r(i.magenta,s.DEFAULT_ANSI_COLORS[5]),c.ansi[6]=r(i.cyan,s.DEFAULT_ANSI_COLORS[6]),c.ansi[7]=r(i.white,s.DEFAULT_ANSI_COLORS[7]),c.ansi[8]=r(i.brightBlack,s.DEFAULT_ANSI_COLORS[8]),c.ansi[9]=r(i.brightRed,s.DEFAULT_ANSI_COLORS[9]),c.ansi[10]=r(i.brightGreen,s.DEFAULT_ANSI_COLORS[10]),c.ansi[11]=r(i.brightYellow,s.DEFAULT_ANSI_COLORS[11]),c.ansi[12]=r(i.brightBlue,s.DEFAULT_ANSI_COLORS[12]),c.ansi[13]=r(i.brightMagenta,s.DEFAULT_ANSI_COLORS[13]),c.ansi[14]=r(i.brightCyan,s.DEFAULT_ANSI_COLORS[14]),c.ansi[15]=r(i.brightWhite,s.DEFAULT_ANSI_COLORS[15]),i.extendedAnsi){const v=Math.min(c.ansi.length-16,i.extendedAnsi.length);for(let _=0;_<v;_++)c.ansi[_+16]=r(i.extendedAnsi[_],s.DEFAULT_ANSI_COLORS[_+16])}this._contrastCache.clear(),this._halfContrastCache.clear(),this._updateRestoreColors(),this._onChangeColors.fire(this.colors)}restoreColor(i){this._restoreColor(i),this._onChangeColors.fire(this.colors)}_restoreColor(i){if(i!==void 0)switch(i){case 256:this._colors.foreground=this._restoreColors.foreground;break;case 257:this._colors.background=this._restoreColors.background;break;case 258:this._colors.cursor=this._restoreColors.cursor;break;default:this._colors.ansi[i]=this._restoreColors.ansi[i]}else for(let c=0;c<this._restoreColors.ansi.length;++c)this._colors.ansi[c]=this._restoreColors.ansi[c]}modifyColors(i){i(this._colors),this._onChangeColors.fire(this.colors)}_updateRestoreColors(){this._restoreColors={foreground:this._colors.foreground,background:this._colors.background,cursor:this._colors.cursor,ansi:this._colors.ansi.slice()}}};function r(i,c){if(i!==void 0)try{return C.css.toColor(i)}catch{}return c}s.ThemeService=h=u([m(0,b.IOptionsService)],h)},160:(L,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.contrastRatio=s.toPaddedHex=s.rgba=s.rgb=s.css=s.color=s.channels=s.NULL_COLOR=void 0;let f=0,u=0,m=0,d=0;var C,E,M,b,o;function l(p){const g=p.toString(16);return g.length<2?"0"+g:g}function a(p,g){return p<g?(g+.05)/(p+.05):(p+.05)/(g+.05)}s.NULL_COLOR={css:"#00000000",rgba:0},(function(p){p.toCss=function(g,h,r,i){return i!==void 0?`#${l(g)}${l(h)}${l(r)}${l(i)}`:`#${l(g)}${l(h)}${l(r)}`},p.toRgba=function(g,h,r,i=255){return(g<<24|h<<16|r<<8|i)>>>0},p.toColor=function(g,h,r,i){return{css:p.toCss(g,h,r,i),rgba:p.toRgba(g,h,r,i)}}})(C||(s.channels=C={})),(function(p){function g(h,r){return d=Math.round(255*r),[f,u,m]=o.toChannels(h.rgba),{css:C.toCss(f,u,m,d),rgba:C.toRgba(f,u,m,d)}}p.blend=function(h,r){if(d=(255&r.rgba)/255,d===1)return{css:r.css,rgba:r.rgba};const i=r.rgba>>24&255,c=r.rgba>>16&255,v=r.rgba>>8&255,_=h.rgba>>24&255,x=h.rgba>>16&255,k=h.rgba>>8&255;return f=_+Math.round((i-_)*d),u=x+Math.round((c-x)*d),m=k+Math.round((v-k)*d),{css:C.toCss(f,u,m),rgba:C.toRgba(f,u,m)}},p.isOpaque=function(h){return(255&h.rgba)==255},p.ensureContrastRatio=function(h,r,i){const c=o.ensureContrastRatio(h.rgba,r.rgba,i);if(c)return C.toColor(c>>24&255,c>>16&255,c>>8&255)},p.opaque=function(h){const r=(255|h.rgba)>>>0;return[f,u,m]=o.toChannels(r),{css:C.toCss(f,u,m),rgba:r}},p.opacity=g,p.multiplyOpacity=function(h,r){return d=255&h.rgba,g(h,d*r/255)},p.toColorRGB=function(h){return[h.rgba>>24&255,h.rgba>>16&255,h.rgba>>8&255]}})(E||(s.color=E={})),(function(p){let g,h;try{const r=document.createElement("canvas");r.width=1,r.height=1;const i=r.getContext("2d",{willReadFrequently:!0});i&&(g=i,g.globalCompositeOperation="copy",h=g.createLinearGradient(0,0,1,1))}catch{}p.toColor=function(r){if(r.match(/#[\da-f]{3,8}/i))switch(r.length){case 4:return f=parseInt(r.slice(1,2).repeat(2),16),u=parseInt(r.slice(2,3).repeat(2),16),m=parseInt(r.slice(3,4).repeat(2),16),C.toColor(f,u,m);case 5:return f=parseInt(r.slice(1,2).repeat(2),16),u=parseInt(r.slice(2,3).repeat(2),16),m=parseInt(r.slice(3,4).repeat(2),16),d=parseInt(r.slice(4,5).repeat(2),16),C.toColor(f,u,m,d);case 7:return{css:r,rgba:(parseInt(r.slice(1),16)<<8|255)>>>0};case 9:return{css:r,rgba:parseInt(r.slice(1),16)>>>0}}const i=r.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);if(i)return f=parseInt(i[1]),u=parseInt(i[2]),m=parseInt(i[3]),d=Math.round(255*(i[5]===void 0?1:parseFloat(i[5]))),C.toColor(f,u,m,d);if(!g||!h)throw new Error("css.toColor: Unsupported css format");if(g.fillStyle=h,g.fillStyle=r,typeof g.fillStyle!="string")throw new Error("css.toColor: Unsupported css format");if(g.fillRect(0,0,1,1),[f,u,m,d]=g.getImageData(0,0,1,1).data,d!==255)throw new Error("css.toColor: Unsupported css format");return{rgba:C.toRgba(f,u,m,d),css:r}}})(M||(s.css=M={})),(function(p){function g(h,r,i){const c=h/255,v=r/255,_=i/255;return .2126*(c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))+.7152*(v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4))+.0722*(_<=.03928?_/12.92:Math.pow((_+.055)/1.055,2.4))}p.relativeLuminance=function(h){return g(h>>16&255,h>>8&255,255&h)},p.relativeLuminance2=g})(b||(s.rgb=b={})),(function(p){function g(r,i,c){const v=r>>24&255,_=r>>16&255,x=r>>8&255;let k=i>>24&255,S=i>>16&255,B=i>>8&255,P=a(b.relativeLuminance2(k,S,B),b.relativeLuminance2(v,_,x));for(;P<c&&(k>0||S>0||B>0);)k-=Math.max(0,Math.ceil(.1*k)),S-=Math.max(0,Math.ceil(.1*S)),B-=Math.max(0,Math.ceil(.1*B)),P=a(b.relativeLuminance2(k,S,B),b.relativeLuminance2(v,_,x));return(k<<24|S<<16|B<<8|255)>>>0}function h(r,i,c){const v=r>>24&255,_=r>>16&255,x=r>>8&255;let k=i>>24&255,S=i>>16&255,B=i>>8&255,P=a(b.relativeLuminance2(k,S,B),b.relativeLuminance2(v,_,x));for(;P<c&&(k<255||S<255||B<255);)k=Math.min(255,k+Math.ceil(.1*(255-k))),S=Math.min(255,S+Math.ceil(.1*(255-S))),B=Math.min(255,B+Math.ceil(.1*(255-B))),P=a(b.relativeLuminance2(k,S,B),b.relativeLuminance2(v,_,x));return(k<<24|S<<16|B<<8|255)>>>0}p.blend=function(r,i){if(d=(255&i)/255,d===1)return i;const c=i>>24&255,v=i>>16&255,_=i>>8&255,x=r>>24&255,k=r>>16&255,S=r>>8&255;return f=x+Math.round((c-x)*d),u=k+Math.round((v-k)*d),m=S+Math.round((_-S)*d),C.toRgba(f,u,m)},p.ensureContrastRatio=function(r,i,c){const v=b.relativeLuminance(r>>8),_=b.relativeLuminance(i>>8);if(a(v,_)<c){if(_<v){const S=g(r,i,c),B=a(v,b.relativeLuminance(S>>8));if(B<c){const P=h(r,i,c);return B>a(v,b.relativeLuminance(P>>8))?S:P}return S}const x=h(r,i,c),k=a(v,b.relativeLuminance(x>>8));if(k<c){const S=g(r,i,c);return k>a(v,b.relativeLuminance(S>>8))?x:S}return x}},p.reduceLuminance=g,p.increaseLuminance=h,p.toChannels=function(r){return[r>>24&255,r>>16&255,r>>8&255,255&r]}})(o||(s.rgba=o={})),s.toPaddedHex=l,s.contrastRatio=a},345:(L,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.runAndSubscribe=s.forwardEvent=s.EventEmitter=void 0,s.EventEmitter=class{constructor(){this._listeners=[],this._disposed=!1}get event(){return this._event||(this._event=f=>(this._listeners.push(f),{dispose:()=>{if(!this._disposed){for(let u=0;u<this._listeners.length;u++)if(this._listeners[u]===f)return void this._listeners.splice(u,1)}}})),this._event}fire(f,u){const m=[];for(let d=0;d<this._listeners.length;d++)m.push(this._listeners[d]);for(let d=0;d<m.length;d++)m[d].call(void 0,f,u)}dispose(){this.clearListeners(),this._disposed=!0}clearListeners(){this._listeners&&(this._listeners.length=0)}},s.forwardEvent=function(f,u){return f((m=>u.fire(m)))},s.runAndSubscribe=function(f,u){return u(void 0),f((m=>u(m)))}},859:(L,s)=>{function f(u){for(const m of u)m.dispose();u.length=0}Object.defineProperty(s,"__esModule",{value:!0}),s.getDisposeArrayDisposable=s.disposeArray=s.toDisposable=s.MutableDisposable=s.Disposable=void 0,s.Disposable=class{constructor(){this._disposables=[],this._isDisposed=!1}dispose(){this._isDisposed=!0;for(const u of this._disposables)u.dispose();this._disposables.length=0}register(u){return this._disposables.push(u),u}unregister(u){const m=this._disposables.indexOf(u);m!==-1&&this._disposables.splice(m,1)}},s.MutableDisposable=class{constructor(){this._isDisposed=!1}get value(){return this._isDisposed?void 0:this._value}set value(u){this._isDisposed||u===this._value||(this._value?.dispose(),this._value=u)}clear(){this.value=void 0}dispose(){this._isDisposed=!0,this._value?.dispose(),this._value=void 0}},s.toDisposable=function(u){return{dispose:u}},s.disposeArray=f,s.getDisposeArrayDisposable=function(u){return{dispose:()=>f(u)}}},485:(L,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.FourKeyMap=s.TwoKeyMap=void 0;class f{constructor(){this._data={}}set(m,d,C){this._data[m]||(this._data[m]={}),this._data[m][d]=C}get(m,d){return this._data[m]?this._data[m][d]:void 0}clear(){this._data={}}}s.TwoKeyMap=f,s.FourKeyMap=class{constructor(){this._data=new f}set(u,m,d,C,E){this._data.get(u,m)||this._data.set(u,m,new f),this._data.get(u,m).set(d,C,E)}get(u,m,d,C){return this._data.get(u,m)?.get(d,C)}clear(){this._data.clear()}}},726:(L,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.createDecorator=s.getServiceDependencies=s.serviceRegistry=void 0;const f="di$target",u="di$dependencies";s.serviceRegistry=new Map,s.getServiceDependencies=function(m){return m[u]||[]},s.createDecorator=function(m){if(s.serviceRegistry.has(m))return s.serviceRegistry.get(m);const d=function(C,E,M){if(arguments.length!==3)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");(function(b,o,l){o[f]===o?o[u].push({id:b,index:l}):(o[u]=[{id:b,index:l}],o[f]=o)})(d,C,M)};return d.toString=()=>m,s.serviceRegistry.set(m,d),d}},97:(L,s,f)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.IDecorationService=s.IUnicodeService=s.IOscLinkService=s.IOptionsService=s.ILogService=s.LogLevelEnum=s.IInstantiationService=s.ICharsetService=s.ICoreService=s.ICoreMouseService=s.IBufferService=void 0;const u=f(726);var m;s.IBufferService=(0,u.createDecorator)("BufferService"),s.ICoreMouseService=(0,u.createDecorator)("CoreMouseService"),s.ICoreService=(0,u.createDecorator)("CoreService"),s.ICharsetService=(0,u.createDecorator)("CharsetService"),s.IInstantiationService=(0,u.createDecorator)("InstantiationService"),(function(d){d[d.TRACE=0]="TRACE",d[d.DEBUG=1]="DEBUG",d[d.INFO=2]="INFO",d[d.WARN=3]="WARN",d[d.ERROR=4]="ERROR",d[d.OFF=5]="OFF"})(m||(s.LogLevelEnum=m={})),s.ILogService=(0,u.createDecorator)("LogService"),s.IOptionsService=(0,u.createDecorator)("OptionsService"),s.IOscLinkService=(0,u.createDecorator)("OscLinkService"),s.IUnicodeService=(0,u.createDecorator)("UnicodeService"),s.IDecorationService=(0,u.createDecorator)("DecorationService")}},y={};function I(L){var s=y[L];if(s!==void 0)return s.exports;var f=y[L]={exports:{}};return t[L].call(f.exports,f,f.exports,I),f.exports}var w={};return(()=>{var L=w;Object.defineProperty(L,"__esModule",{value:!0}),L.HTMLSerializeHandler=L.SerializeAddon=void 0;const s=I(997);function f(b,o,l){return Math.max(o,Math.min(b,l))}class u{constructor(o){this._buffer=o}serialize(o,l){const a=this._buffer.getNullCell(),p=this._buffer.getNullCell();let g=a;const h=o.start.y,r=o.end.y,i=o.start.x,c=o.end.x;this._beforeSerialize(r-h,h,r);for(let v=h;v<=r;v++){const _=this._buffer.getLine(v);if(_){const x=v===o.start.y?i:0,k=v===o.end.y?c:_.length;for(let S=x;S<k;S++){const B=_.getCell(S,g===a?p:a);B?(this._nextCell(B,g,v,S),g=B):console.warn(`Can't get cell at row=${v}, col=${S}`)}}this._rowEnd(v,v===r)}return this._afterSerialize(),this._serializeString(l)}_nextCell(o,l,a,p){}_rowEnd(o,l){}_beforeSerialize(o,l,a){}_afterSerialize(){}_serializeString(o){return""}}function m(b,o){return b.getFgColorMode()===o.getFgColorMode()&&b.getFgColor()===o.getFgColor()}function d(b,o){return b.getBgColorMode()===o.getBgColorMode()&&b.getBgColor()===o.getBgColor()}function C(b,o){return b.isInverse()===o.isInverse()&&b.isBold()===o.isBold()&&b.isUnderline()===o.isUnderline()&&b.isOverline()===o.isOverline()&&b.isBlink()===o.isBlink()&&b.isInvisible()===o.isInvisible()&&b.isItalic()===o.isItalic()&&b.isDim()===o.isDim()&&b.isStrikethrough()===o.isStrikethrough()}class E extends u{constructor(o,l){super(o),this._terminal=l,this._rowIndex=0,this._allRows=new Array,this._allRowSeparators=new Array,this._currentRow="",this._nullCellCount=0,this._cursorStyle=this._buffer.getNullCell(),this._cursorStyleRow=0,this._cursorStyleCol=0,this._backgroundCell=this._buffer.getNullCell(),this._firstRow=0,this._lastCursorRow=0,this._lastCursorCol=0,this._lastContentCursorRow=0,this._lastContentCursorCol=0,this._thisRowLastChar=this._buffer.getNullCell(),this._thisRowLastSecondChar=this._buffer.getNullCell(),this._nextRowFirstChar=this._buffer.getNullCell()}_beforeSerialize(o,l,a){this._allRows=new Array(o),this._lastContentCursorRow=l,this._lastCursorRow=l,this._firstRow=l}_rowEnd(o,l){this._nullCellCount>0&&!d(this._cursorStyle,this._backgroundCell)&&(this._currentRow+=`\x1B[${this._nullCellCount}X`);let a="";if(!l){o-this._firstRow>=this._terminal.rows&&this._buffer.getLine(this._cursorStyleRow)?.getCell(this._cursorStyleCol,this._backgroundCell);const p=this._buffer.getLine(o),g=this._buffer.getLine(o+1);if(g.isWrapped){a="";const h=p.getCell(p.length-1,this._thisRowLastChar),r=p.getCell(p.length-2,this._thisRowLastSecondChar),i=g.getCell(0,this._nextRowFirstChar),c=i.getWidth()>1;let v=!1;(i.getChars()&&c?this._nullCellCount<=1:this._nullCellCount<=0)&&((h.getChars()||h.getWidth()===0)&&d(h,i)&&(v=!0),c&&(r.getChars()||r.getWidth()===0)&&d(h,i)&&d(r,i)&&(v=!0)),v||(a="-".repeat(this._nullCellCount+1),a+="\x1B[1D\x1B[1X",this._nullCellCount>0&&(a+="\x1B[A",a+=`\x1B[${p.length-this._nullCellCount}C`,a+=`\x1B[${this._nullCellCount}X`,a+=`\x1B[${p.length-this._nullCellCount}D`,a+="\x1B[B"),this._lastContentCursorRow=o+1,this._lastContentCursorCol=0,this._lastCursorRow=o+1,this._lastCursorCol=0)}else a=`\r
`,this._lastCursorRow=o+1,this._lastCursorCol=0}this._allRows[this._rowIndex]=this._currentRow,this._allRowSeparators[this._rowIndex++]=a,this._currentRow="",this._nullCellCount=0}_diffStyle(o,l){const a=[],p=!m(o,l),g=!d(o,l),h=!C(o,l);if(p||g||h)if(o.isAttributeDefault())l.isAttributeDefault()||a.push(0);else{if(p){const r=o.getFgColor();o.isFgRGB()?a.push(38,2,r>>>16&255,r>>>8&255,255&r):o.isFgPalette()?r>=16?a.push(38,5,r):a.push(8&r?90+(7&r):30+(7&r)):a.push(39)}if(g){const r=o.getBgColor();o.isBgRGB()?a.push(48,2,r>>>16&255,r>>>8&255,255&r):o.isBgPalette()?r>=16?a.push(48,5,r):a.push(8&r?100+(7&r):40+(7&r)):a.push(49)}h&&(o.isInverse()!==l.isInverse()&&a.push(o.isInverse()?7:27),o.isBold()!==l.isBold()&&a.push(o.isBold()?1:22),o.isUnderline()!==l.isUnderline()&&a.push(o.isUnderline()?4:24),o.isOverline()!==l.isOverline()&&a.push(o.isOverline()?53:55),o.isBlink()!==l.isBlink()&&a.push(o.isBlink()?5:25),o.isInvisible()!==l.isInvisible()&&a.push(o.isInvisible()?8:28),o.isItalic()!==l.isItalic()&&a.push(o.isItalic()?3:23),o.isDim()!==l.isDim()&&a.push(o.isDim()?2:22),o.isStrikethrough()!==l.isStrikethrough()&&a.push(o.isStrikethrough()?9:29))}return a}_nextCell(o,l,a,p){if(o.getWidth()===0)return;const g=o.getChars()==="",h=this._diffStyle(o,this._cursorStyle);if(g?!d(this._cursorStyle,o):h.length>0){this._nullCellCount>0&&(d(this._cursorStyle,this._backgroundCell)||(this._currentRow+=`\x1B[${this._nullCellCount}X`),this._currentRow+=`\x1B[${this._nullCellCount}C`,this._nullCellCount=0),this._lastContentCursorRow=this._lastCursorRow=a,this._lastContentCursorCol=this._lastCursorCol=p,this._currentRow+=`\x1B[${h.join(";")}m`;const r=this._buffer.getLine(a);r!==void 0&&(r.getCell(p,this._cursorStyle),this._cursorStyleRow=a,this._cursorStyleCol=p)}g?this._nullCellCount+=o.getWidth():(this._nullCellCount>0&&(d(this._cursorStyle,this._backgroundCell)||(this._currentRow+=`\x1B[${this._nullCellCount}X`),this._currentRow+=`\x1B[${this._nullCellCount}C`,this._nullCellCount=0),this._currentRow+=o.getChars(),this._lastContentCursorRow=this._lastCursorRow=a,this._lastContentCursorCol=this._lastCursorCol=p+o.getWidth())}_serializeString(o){let l=this._allRows.length;this._buffer.length-this._firstRow<=this._terminal.rows&&(l=this._lastContentCursorRow+1-this._firstRow,this._lastCursorCol=this._lastContentCursorCol,this._lastCursorRow=this._lastContentCursorRow);let a="";for(let r=0;r<l;r++)a+=this._allRows[r],r+1<l&&(a+=this._allRowSeparators[r]);if(!o){const r=this._buffer.baseY+this._buffer.cursorY,i=this._buffer.cursorX,c=v=>{v>0?a+=`\x1B[${v}C`:v<0&&(a+=`\x1B[${-v}D`)};(r!==this._lastCursorRow||i!==this._lastCursorCol)&&((p=r-this._lastCursorRow)>0?a+=`\x1B[${p}B`:p<0&&(a+=`\x1B[${-p}A`),c(i-this._lastCursorCol))}var p;const g=this._terminal._core._inputHandler._curAttrData,h=this._diffStyle(g,this._cursorStyle);return h.length>0&&(a+=`\x1B[${h.join(";")}m`),a}}L.SerializeAddon=class{activate(b){this._terminal=b}_serializeBufferByScrollback(b,o,l){const a=o.length,p=l===void 0?a:f(l+b.rows,0,a);return this._serializeBufferByRange(b,o,{start:a-p,end:a-1},!1)}_serializeBufferByRange(b,o,l,a){return new E(o,b).serialize({start:{x:0,y:typeof l.start=="number"?l.start:l.start.line},end:{x:b.cols,y:typeof l.end=="number"?l.end:l.end.line}},a)}_serializeBufferAsHTML(b,o){const l=b.buffer.active,a=new M(l,b,o);if(!o.onlySelection){const g=l.length,h=o.scrollback,r=h===void 0?g:f(h+b.rows,0,g);return a.serialize({start:{x:0,y:g-r},end:{x:b.cols,y:g-1}})}const p=this._terminal?.getSelectionPosition();return p!==void 0?a.serialize({start:{x:p.start.x,y:p.start.y},end:{x:p.end.x,y:p.end.y}}):""}_serializeModes(b){let o="";const l=b.modes;if(l.applicationCursorKeysMode&&(o+="\x1B[?1h"),l.applicationKeypadMode&&(o+="\x1B[?66h"),l.bracketedPasteMode&&(o+="\x1B[?2004h"),l.insertMode&&(o+="\x1B[4h"),l.originMode&&(o+="\x1B[?6h"),l.reverseWraparoundMode&&(o+="\x1B[?45h"),l.sendFocusMode&&(o+="\x1B[?1004h"),l.wraparoundMode===!1&&(o+="\x1B[?7l"),l.mouseTrackingMode!=="none")switch(l.mouseTrackingMode){case"x10":o+="\x1B[?9h";break;case"vt200":o+="\x1B[?1000h";break;case"drag":o+="\x1B[?1002h";break;case"any":o+="\x1B[?1003h"}return o}serialize(b){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");let o=b?.range?this._serializeBufferByRange(this._terminal,this._terminal.buffer.normal,b.range,!0):this._serializeBufferByScrollback(this._terminal,this._terminal.buffer.normal,b?.scrollback);return b?.excludeAltBuffer||this._terminal.buffer.active.type!=="alternate"||(o+=`\x1B[?1049h\x1B[H${this._serializeBufferByScrollback(this._terminal,this._terminal.buffer.alternate,void 0)}`),b?.excludeModes||(o+=this._serializeModes(this._terminal)),o}serializeAsHTML(b){if(!this._terminal)throw new Error("Cannot use addon until it has been loaded");return this._serializeBufferAsHTML(this._terminal,b||{})}dispose(){}};class M extends u{constructor(o,l,a){super(o),this._terminal=l,this._options=a,this._currentRow="",this._htmlContent="",l._core._themeService?this._ansiColors=l._core._themeService.colors.ansi:this._ansiColors=s.DEFAULT_ANSI_COLORS}_padStart(o,l,a){return l>>=0,a=a??" ",o.length>l?o:((l-=o.length)>a.length&&(a+=a.repeat(l/a.length)),a.slice(0,l)+o)}_beforeSerialize(o,l,a){this._htmlContent+="<html><body><!--StartFragment--><pre>";let p="#000000",g="#ffffff";this._options.includeGlobalBackground&&(p=this._terminal.options.theme?.foreground??"#ffffff",g=this._terminal.options.theme?.background??"#000000");const h=[];h.push("color: "+p+";"),h.push("background-color: "+g+";"),h.push("font-family: "+this._terminal.options.fontFamily+";"),h.push("font-size: "+this._terminal.options.fontSize+"px;"),this._htmlContent+="<div style='"+h.join(" ")+"'>"}_afterSerialize(){this._htmlContent+="</div>",this._htmlContent+="</pre><!--EndFragment--></body></html>"}_rowEnd(o,l){this._htmlContent+="<div><span>"+this._currentRow+"</span></div>",this._currentRow=""}_getHexColor(o,l){const a=l?o.getFgColor():o.getBgColor();return(l?o.isFgRGB():o.isBgRGB())?"#"+[a>>16&255,a>>8&255,255&a].map((p=>this._padStart(p.toString(16),2,"0"))).join(""):(l?o.isFgPalette():o.isBgPalette())?this._ansiColors[a].css:void 0}_diffStyle(o,l){const a=[],p=!m(o,l),g=!d(o,l),h=!C(o,l);if(p||g||h){const r=this._getHexColor(o,!0);r&&a.push("color: "+r+";");const i=this._getHexColor(o,!1);return i&&a.push("background-color: "+i+";"),o.isInverse()&&a.push("color: #000000; background-color: #BFBFBF;"),o.isBold()&&a.push("font-weight: bold;"),o.isUnderline()&&o.isOverline()?a.push("text-decoration: overline underline;"):o.isUnderline()?a.push("text-decoration: underline;"):o.isOverline()&&a.push("text-decoration: overline;"),o.isBlink()&&a.push("text-decoration: blink;"),o.isInvisible()&&a.push("visibility: hidden;"),o.isItalic()&&a.push("font-style: italic;"),o.isDim()&&a.push("opacity: 0.5;"),o.isStrikethrough()&&a.push("text-decoration: line-through;"),a}}_nextCell(o,l,a,p){if(o.getWidth()===0)return;const g=o.getChars()==="",h=this._diffStyle(o,l);h&&(this._currentRow+=h.length===0?"</span><span>":"</span><span style='"+h.join(" ")+"'>"),this._currentRow+=g?" ":o.getChars()}_serializeString(){return this._htmlContent}}L.HTMLSerializeHandler=M})(),w})()))})(H)),H.exports}var xt=Ot();function Bt(){const e=new xt.SerializeAddon,n=xe(new ze.Terminal({convertEol:!0})),t=w=>{w.write(e.serialize())},y=w=>n.write(w),I=()=>e.serialize();return he(()=>{n.loadAddon(e)}),Be(()=>{n.dispose()}),{copyTo:t,serialize:I,write:y}}const $t=Ae({__name:"TerminalOutputDrawer",props:De({header:{},defaultMessage:{}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const n=Te(e,"modelValue"),t=e,y=Ee(),I=Bt();let w=null;const L=({terminal:f,useAutoSize:u},m)=>{w=f,u({root:m,autoRows:!0,autoCols:!0}),f.write(t.defaultMessage),I.copyTo(f),f.options.cursorBlink=!1,f.options.cursorStyle="bar",f.options.cursorInactiveStyle="bar",f.options.disableStdin=!0},s=()=>{w=null};return he(async()=>{y.onLogMessage(f=>{I.write(f),w?.write(f)})}),(f,u)=>(R(),T(Me(ge),{visible:n.value,"onUpdate:visible":u[0]||(u[0]=m=>n.value=m),header:f.header,position:"bottom",style:{height:"max(50vh, 34rem)"}},{default:j(()=>[re(Fe,{onCreated:L,onUnmounted:s})]),_:1},8,["visible","header"]))}});export{$t as _,pt as a,Ze as s};
//# sourceMappingURL=TerminalOutputDrawer.vue_vue_type_script_setup_true_lang-Cq-Suwkh.js.map
