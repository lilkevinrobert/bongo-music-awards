import{B as ae,_ as ne,$ as se,ac as ue,a0 as le,i as D,C as l,a1 as ie,ay as re,a2 as ce,az as fe,a3 as de,aA as ve,J as M,aB as ge,aC as w,aD as he,X as me,aE as ye,an as Pe,aF as Ce,aG as Te,D as A,E as ke,aH as Se,K as xe,M as Oe,aI as qe,Z as Be}from"./index.efa01b05.js";import{u as be,v as R,a as Ee,b as Fe,c as De,p as H,d as Me,r as K,s as we}from"./position-engine.d1710d5a.js";var He=ae({name:"QMenu",inheritAttrs:!1,props:{...be,...ne,...se,...ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:R},self:{type:String,validator:R},offset:{type:Array,validator:Ee},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...le,"click","escapeKey"],setup(t,{slots:Q,emit:c,attrs:d}){let n=null,f,i,v;const C=Oe(),{proxy:g}=C,{$q:o}=g,a=D(null),s=D(!1),W=l(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),_=ie(t,o),{registerTick:I,removeTick:$}=re(),{registerTimeout:T}=ce(),{transitionProps:j,transitionStyle:z}=fe(t),{localScrollTarget:k,changeScrollEvent:G,unconfigureScrollTarget:J}=Fe(t,E),{anchorEl:u,canShow:L}=De({showing:s}),{hide:S}=de({showing:s,canShow:L,handleShow:V,handleHide:Y,hideOnRouteChange:W,processOnMount:!0}),{showPortal:x,hidePortal:O,renderPortal:U}=ve(C,a,ee,"menu"),h={anchorEl:u,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return S(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&Be(e),!0}},q=l(()=>H(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),X=l(()=>t.cover===!0?q.value:H(t.self||"top start",o.lang.rtl)),Z=l(()=>(t.square===!0?" q-menu--square":"")+(_.value===!0?" q-menu--dark q-dark":"")),N=l(()=>t.autoClose===!0?{onClick:p}:{}),B=l(()=>s.value===!0&&t.persistent!==!0);M(B,e=>{e===!0?(ge(y),Me(h)):(w(y),K(h))});function m(){qe(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function V(e){if(n=t.noRefocus===!1?document.activeElement:null,he(F),x(),E(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const P=me(e);if(P.left!==void 0){const{top:te,left:oe}=u.value.getBoundingClientRect();f={left:P.left-oe,top:P.top-te}}}i===void 0&&(i=M(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),I(()=>{r(),t.noFocus!==!0&&m()}),T(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),r(),x(!0),c("show",e)},t.transitionDuration)}function Y(e){$(),O(),b(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&(((e&&e.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),T(()=>{O(!0),c("hide",e)},t.transitionDuration)}function b(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||s.value===!0)&&(ye(F),J(),K(h),w(y)),e!==!0&&(n=null)}function E(){(u.value!==null||t.scrollTarget!==void 0)&&(k.value=Pe(u.value,t.scrollTarget),G(k.value,r))}function p(e){v!==!0?(Ce(g,e),c("click",e)):v=!1}function F(e){B.value===!0&&t.noFocus!==!0&&Te(a.value,e.target)!==!0&&m()}function y(e){c("escapeKey"),S(e)}function r(){const e=a.value;e===null||u.value===null||we({el:e,offset:t.offset,anchorEl:u.value,anchorOrigin:q.value,selfOrigin:X.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return A(Se,j.value,()=>s.value===!0?A("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+Z.value,d.class],style:[d.style,z.value],...N.value},ke(Q.default)):null)}return xe(b),Object.assign(g,{focus:m,updatePosition:r}),U}});export{He as Q};
