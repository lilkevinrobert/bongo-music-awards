import{Q as p,_ as f,a as b}from"./vote1copy.3defc22e.js";import{i as m,o as V,c as k,w as a,n as t,a as n,v as u,bn as v,x as s,m as g,s as w}from"./index.cce3915b.js";import{Q as r}from"./QSelect.9cf437ff.js";import{Q as y}from"./QForm.8f6a84e2.js";import{Q}from"./QPage.76a46a00.js";import"./use-panel.5bf595e2.js";import"./touch.3df10340.js";import"./selection.109ccf0b.js";import"./use-fullscreen.fa37bee6.js";import"./QChip.729eece9.js";import"./QItem.a90bd647.js";import"./QItemLabel.9e65cb53.js";import"./QMenu.e874daef.js";import"./position-engine.0cde2c40.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";const h={class:"flex justify-center"},q={class:"full-width"},B={class:"cols justify-center q-my-sm"},C=t("div",{class:"text-h6 text-center text-weight-bold"}," Buy Your Ticket Now ",-1),U={class:"flex justify-end q-ma-lg"},K={__name:"ArtistTickets",setup(S){const d=m(1),i=m(!0);return(o,e)=>(V(),k(Q,{padding:""},{default:a(()=>[t("div",h,[t("div",q,[n(b,{height:"300px",swipeable:"",animated:"",modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=l=>d.value=l),navigation:"",infinite:"",autoplay:i.value,arrows:"","transition-prev":"slide-right","transition-next":"slide-left",onMouseenter:e[1]||(e[1]=l=>i.value=!1),onMouseleave:e[2]||(e[2]=l=>i.value=!0)},{default:a(()=>[n(p,{name:1,"img-src":f})]),_:1},8,["modelValue","autoplay"])])]),t("div",B,[n(w,{class:"bg-grey-1"},{default:a(()=>[n(u,null,{default:a(()=>[C]),_:1}),n(u,{class:"flex justify-center"},{default:a(()=>[n(y,{onSubmit:e[10]||(e[10]=v(l=>o.moneyToBank(),["prevent"])),style:{width:"80%"}},{default:a(()=>[t("div",null,[n(r,{label:"Select Payment Method",class:"q-ma-lg",outlined:"",dense:"","transition-show":"flip-up","transition-hide":"scale",modelValue:o.bank_name,"onUpdate:modelValue":e[3]||(e[3]=l=>o.bank_name=l),options:o.options},null,8,["modelValue","options"]),n(r,{label:"Select Ticket Type",class:"q-ma-lg",outlined:"",dense:"","transition-show":"flip-up","transition-hide":"scale",modelValue:o.bank_name,"onUpdate:modelValue":e[4]||(e[4]=l=>o.bank_name=l),options:o.options},null,8,["modelValue","options"]),n(s,{label:"Enter Amount",class:"q-ma-lg",outlined:"",dense:"","transition-show":"flip-up","transition-hide":"scale",modelValue:o.bank_name,"onUpdate:modelValue":e[5]||(e[5]=l=>o.bank_name=l),options:o.options},null,8,["modelValue","options"]),n(s,{label:"Enter Phone Number",class:"q-ma-lg",outlined:"",dense:"","transition-show":"flip-up","transition-hide":"scale",modelValue:o.bank_name,"onUpdate:modelValue":e[6]||(e[6]=l=>o.bank_name=l),options:o.options},null,8,["modelValue","options"]),n(s,{label:"Enter Email",class:"q-ma-lg",outlined:"",dense:"","transition-show":"flip-up","transition-hide":"scale",modelValue:o.bank_name,"onUpdate:modelValue":e[7]||(e[7]=l=>o.bank_name=l),options:o.options},null,8,["modelValue","options"]),n(s,{label:"Enter Full Name",class:"q-ma-lg",outlined:"",dense:"","transition-show":"flip-up","transition-hide":"scale",modelValue:o.bank_name,"onUpdate:modelValue":e[8]||(e[8]=l=>o.bank_name=l),options:o.options},null,8,["modelValue","options"]),t("div",U,[n(g,{class:"",color:"primary",label:"Checkout",onClick:e[9]||(e[9]=l=>o.sendToBank())})])])]),_:1})]),_:1})]),_:1})])]),_:1}))}};export{K as default};
