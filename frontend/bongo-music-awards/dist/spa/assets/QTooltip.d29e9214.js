import{B as ee,_ as te,ac as ae,a0 as oe,i as O,C as f,ay as ne,a2 as ie,az as le,a3 as se,aA as re,J as C,K as E,Y as k,T as x,an as ue,D as H,aH as ce,M as de,E as fe,Z as ve}from"./index.efa01b05.js";import{u as he,v as A,a as me,p as D,b as ge,c as ye,r as M,s as Te,d as pe}from"./position-engine.d1710d5a.js";import{c as q}from"./selection.4ec88403.js";var we=ee({name:"QTooltip",inheritAttrs:!1,props:{...he,...te,...ae,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:me},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...oe],setup(e,{slots:j,emit:y,attrs:v}){let i,l;const h=de(),{proxy:{$q:o}}=h,s=O(null),c=O(!1),L=f(()=>D(e.anchor,o.lang.rtl)),Q=f(()=>D(e.self,o.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:_,removeTick:B}=ne(),{registerTimeout:d}=ie(),{transitionProps:N,transitionStyle:R}=le(e),{localScrollTarget:T,changeScrollEvent:z,unconfigureScrollTarget:I}=ge(e,P),{anchorEl:a,canShow:J,anchorEvents:r}=ye({showing:c,configureAnchorEl:F}),{show:K,hide:m}=se({showing:c,canShow:J,handleShow:V,handleHide:Y,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:Z,delayHide:$});const{showPortal:p,hidePortal:b,renderPortal:U}=re(h,s,X,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ve(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);C(g,n=>{(n===!0?pe:M)(t)}),E(()=>{M(t)})}function V(t){p(),_(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=C(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function Y(t){B(),b(),S(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),I(),k(r,"tooltipTemp")}function u(){const t=s.value;a.value===null||!t||Te({el:t,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Z(t){if(o.platform.is.mobile===!0){q(),document.body.classList.add("non-selectable");const g=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{K(t)},e.delay)}function $(t){o.platform.is.mobile===!0&&(k(r,"tooltipTemp"),q(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function F(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(a.value!==null||e.scrollTarget!==void 0){T.value=ue(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;z(T.value,t)}}function G(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,R.value],role:"tooltip"},fe(j.default)):null}function X(){return H(ce,N.value,G)}return E(S),Object.assign(h.proxy,{updatePosition:u}),U}});export{we as Q};