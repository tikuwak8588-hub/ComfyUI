import{_ as b}from"./comfy-brand-mark-CkgFBh1o.js";import{s as f}from"./index--UliHvld.js";import{B as v,g as s,o as t,n as i,m as l,r as h,h as y,t as p,d as k,aA as w,a0 as c,a as d,e as m,c as B,p as S}from"./index-B4t0AlBR.js";var P=function(a){var n=a.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: `.concat(n("progressbar.height"),`;
    background: `).concat(n("progressbar.background"),`;
    border-radius: `).concat(n("progressbar.border.radius"),`;
}

.p-progressbar-value {
    margin: 0;
    background: `).concat(n("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(n("progressbar.label.color"),`;
    font-size: `).concat(n("progressbar.label.font.size"),`;
    font-weight: `).concat(n("progressbar.label.font.weight"),`;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`)},x={root:function(a){var n=a.instance;return["p-progressbar p-component",{"p-progressbar-determinate":n.determinate,"p-progressbar-indeterminate":n.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},$=v.extend({name:"progressbar",theme:P,classes:x}),j={name:"BaseProgressBar",extends:f,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:$,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},g={name:"ProgressBar",extends:j,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},z=["aria-valuenow"];function V(e,a,n,u,r,o){return t(),s("div",l({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[o.determinate?(t(),s("div",l({key:0,class:e.cx("value"),style:o.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(t(),s("div",l({key:0,class:e.cx("label")},e.ptm("label")),[h(e.$slots,"default",{},function(){return[y(p(e.value+"%"),1)]})],16)):i("",!0)],16)):o.indeterminate?(t(),s("div",l({key:1,class:e.cx("value")},e.ptm("value")),null,16)):i("",!0)],16,z)}g.render=V;const C={class:"grid grid-rows-2 gap-8"},N={class:"flex items-end justify-center"},T=["alt"],_={class:"flex flex-col items-center justify-center gap-4"},A={key:1,class:"font-inter font-bold text-3xl text-neutral-300"},D={key:2,class:"text-lg text-neutral-400","data-testid":"startup-status-text"},q=k({__name:"StartupDisplay",props:{progressPercentage:{},title:{},statusText:{},hideProgress:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!0}},setup(e){const{t:a}=w(),n=c(()=>e.progressPercentage===void 0?"indeterminate":"determinate"),u=c(()=>e.fullScreen?"flex items-center justify-center min-h-screen":"flex items-center justify-center");return(r,o)=>(t(),s("div",{class:S(u.value)},[d("div",C,[d("div",N,[d("img",{src:b,alt:m(a)("g.logoAlt"),class:"w-60"},null,8,T)]),d("div",_,[r.hideProgress?i("",!0):(t(),B(m(g),{key:0,mode:n.value,value:r.progressPercentage??0,"show-value":!1,class:"w-90 h-2 mt-8",pt:{value:{class:"bg-brand-yellow"}}},null,8,["mode","value"])),r.title?(t(),s("h1",A,p(r.title),1)):i("",!0),r.statusText?(t(),s("p",D,p(r.statusText),1)):i("",!0)])])],2))}});export{q as _};
//# sourceMappingURL=StartupDisplay.vue_vue_type_script_setup_true_lang-CftKLe_v.js.map
