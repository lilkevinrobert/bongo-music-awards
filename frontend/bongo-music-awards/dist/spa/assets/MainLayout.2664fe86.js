import{Q as x,a as w}from"./QLayout.8b926842.js";import{Q as T}from"./QImg.e2dc6975.js";import{Q as L,a as C,b as R,c as V}from"./QDrawer.7f4719ed.js";import{B,a8 as D,a9 as N,C as q,J as $,aL as M,i as z,l as h,o as l,e as c,a as e,w as a,bm as v,f as n,bl as A,n as F,F as m,r as k,c as _,aM as d,m as g,h as y,g as I,t as P,R as j}from"./index.efa01b05.js";import{u as S,a as E,b as H,Q as J}from"./QTabs.294aff3f.js";import{Q as O}from"./QTooltip.d29e9214.js";import{Q as U,a as G}from"./QItem.2c90671b.js";import{Q as K}from"./QList.562d1e83.js";import{_ as W}from"./logo.388c1cd0.js";import{u as X}from"./use-quasar.db03a2e2.js";import"./QResizeObserver.6ca608c1.js";import"./touch.3df10340.js";import"./selection.4ec88403.js";import"./format.3e32b8d9.js";import"./rtl.b51694b1.js";import"./position-engine.d1710d5a.js";var Y=B({name:"QRouteTab",props:{...D,...S},emits:E,setup(i,{slots:s,emit:t}){const o=N({useDisableForRouterLinkProps:!1}),{renderTab:u,$tabs:f}=H(i,s,t,{exact:q(()=>i.exact),...o});return $(()=>`${i.name} | ${i.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{f.verifyRouteModel()}),()=>u(o.linkTag.value,o.linkAttrs.value)}});const Z={key:0,class:"col flex justify-end"},ee={__name:"NavComponent",setup(i){const s=z(!1),t=X(),o=[{path:"/",label:"Voting",icon:"mdi-vote"},{path:"/artists",label:"Artists",icon:"mdi-music-clef-treble"},{path:"/awards",label:"Awards",icon:"mdi-trophy"},{path:"/tickets",label:"Tickets",icon:"mdi-ticket"},{path:"/login",label:"login",icon:"mdi-account-question-outline"}],u=()=>{s.value=!s.value};return(f,b)=>{const Q=h("router-link");return l(),c(m,null,[e(R,{class:"q-pa-xs bg-white row justify-around text-black",bordered:""},{default:a(()=>[e(L,{class:v(n(t).platform.is.desktop?"col-2":"col-4")},{default:a(()=>[e(C,null,{default:a(()=>[e(Q,{to:"/"},{default:a(()=>[e(T,{alt:"BMA logo",src:W,style:A(n(t).platform.is.desktop?"width: 100px":"width: 100%")},null,8,["style"])]),_:1})]),_:1})]),_:1},8,["class"]),F("div",{class:v(n(t).platform.is.desktop?"col-9 row":"col-6 row  justify-end ")},[(l(),c(m,null,k(o,(r,p)=>e(J,{key:p,"active-color":"primary",class:"text-grey-9 col cursor-pointer q-pa-sm",dense:"","indicator-color":"transparent","no-caps":"","inline-label":""},{default:a(()=>[r.label!=="login"&&n(t).platform.is.desktop?(l(),_(Y,{key:0,inline:"",label:r.label,icon:r.icon,to:r.path,exact:"",replace:"",class:"text-capitalize"},null,8,["label","icon","to"])):d("",!0)]),_:2},1024)),64)),n(t).platform.is.desktop?(l(),c("div",Z,[e(g,{icon:"mdi-login",flat:"",size:"12px",color:"primary",to:"/login"},{default:a(()=>[e(O,null,{default:a(()=>[y("Login")]),_:1})]),_:1})])):d("",!0),n(t).platform.is.mobile?(l(),_(g,{key:1,flat:"",icon:"menu",padding:"12px",round:"",onClick:u})):d("",!0)],2)]),_:1}),e(V,{modelValue:s.value,"onUpdate:modelValue":b[0]||(b[0]=r=>s.value=r),width:180,behavior:"mobile",elevated:"",side:"right"},{default:a(()=>[e(K,{bordered:"",padding:"",separator:""},{default:a(()=>[(l(),c(m,null,k(o,(r,p)=>I(e(U,{key:p,to:r.path,class:"q-my-md q-pa-md text-center",clickable:"",exact:"","indicator-color":"transparent"},{default:a(()=>[e(G,{padding:""},{default:a(()=>[y(P(r.label),1)]),_:2},1024)]),_:2},1032,["to"]),[[j]])),64))]),_:1})]),_:1},8,["modelValue"])],64)}}};var ae=M(ee,[["__scopeId","data-v-5887d3bf"]]);const ke={__name:"MainLayout",setup(i){return(s,t)=>{const o=h("router-view");return l(),_(x,{view:"hHh LpR fFf",class:"bg-images"},{default:a(()=>[e(ae),e(w,null,{default:a(()=>[e(o)]),_:1})]),_:1})}}};export{ke as default};