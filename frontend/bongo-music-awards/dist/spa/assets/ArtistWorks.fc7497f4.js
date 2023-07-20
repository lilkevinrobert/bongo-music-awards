import{j as s,k as R,o as j,c as G,w as o,s as d,p as n,a as e,h as r,n as u,ar as i,Q as q,ap as A,ao as m,b3 as C,g as p,a_ as S}from"./index.34fc6f26.js";import{Q as U}from"./QTooltip.151b1868.js";import{Q as N}from"./QTd.25a0b405.js";import{Q as z}from"./QTable.f580e19c.js";import{Q as O}from"./QPage.225bd69c.js";import{C as c}from"./ClosePopup.d92574f4.js";import"./position-engine.a74986fc.js";import"./selection.8e2952d4.js";import"./QList.848173ff.js";import"./QSelect.e33092ae.js";import"./QChip.3285a9f2.js";import"./QItem.54f3b4c2.js";import"./QItemLabel.d6426e10.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./use-fullscreen.afdd318e.js";const P={class:"row items-center q-mt-xl"},F=n("p",{class:"font-body-small q-pl-md col"},[n("span",{class:"text-weight-bolder text-capitalize text-h6"},"Albums and EPs")],-1),M={class:"flex justify-end width col"},J={class:"row items-center q-mt-xl"},W=n("p",{class:"font-body-small q-pl-md col"},[n("span",{class:"text-weight-bolder text-capitalize text-h6"},"Singles")],-1),H={class:"flex justify-end width col"},K=n("div",{class:"text-h6"},"Fill the form bellow",-1),X=n("div",{class:"text-h6"},"Fill the form bellow",-1),be={__name:"ArtistWorks",setup(Y){const f=s(!1),b=s(!1),g=s(""),v=s(""),_=s(""),V=s(""),k=s(""),w=s(""),x=s(""),D=sessionStorage.getItem("user"),y=JSON.parse(D),L=s([{name:"album_name",label:"Album/Ep Name",align:"left",field:l=>l.album_name,sortable:!0},{name:"number_of_tracks",label:"Number of Tracks",align:"left",field:l=>l.number_of_tracks,sortable:!0},{name:"date",label:"Release Date",align:"left",field:l=>l.album_date,sortable:!0},{name:"link",label:"Link",align:"left",field:l=>l.album_link,sortable:!0},{name:"action",label:"action",align:"left"}]),Q=s([]),T=s([{name:"track_name",label:"Track Name",align:"left",field:l=>l.single_name,sortable:!0},{name:"date",label:"Release Date",align:"left",field:l=>l.single_date,sortable:!0},{name:"link",label:"Link",align:"left",field:l=>l.single_link,sortable:!0},{name:"action",label:"action",align:"left"}]),h=s([]),I=async()=>{try{const l=await d.post("/single",{single_name:g.value,single_date:v.value,single_link:_.value});console.log(l.data)}catch{}},$=async()=>{try{const l=await d.post("/albums",{album_name:V.value,album_date:w.value,album_link:k.value,number_of_tracks:x.value});console.log(l.data)}catch{}},B=async()=>{try{const l=await d.get(`/single/${y.user_id}`);h.value=l.data,console.log(l.data)}catch{}},E=async()=>{try{const l=await d.get(`/albums/${y.user_id}`);console.log(l.data),Q.value=l.data}catch{}};return R(()=>{B(),E()}),(l,a)=>(j(),G(O,{padding:""},{default:o(()=>[n("div",P,[F,n("p",M,[e(u,{onClick:a[0]||(a[0]=t=>{b.value=!0}),class:"text-capitalize"},{default:o(()=>[r("add new")]),_:1})])]),e(z,{bordered:"",rows:Q.value,columns:L.value,"row-key":"name",filter:l.filter,class:"q-mt-md"},{"body-cell-action":o(()=>[e(N,null,{default:o(()=>[e(u,{class:"",icon:"mdi-pencil",flat:"",dense:"",color:"primary",size:"10px"},{default:o(()=>[e(U,null,{default:o(()=>[r("edit")]),_:1})]),_:1})]),_:1})]),"top-right":o(()=>[e(i,{outlined:"",dense:"",debounce:"300",modelValue:l.filter,"onUpdate:modelValue":a[1]||(a[1]=t=>l.filter=t),placeholder:"Search"},{append:o(()=>[e(q,{name:"mdi-magnify"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter"]),n("div",J,[W,n("p",H,[e(u,{onClick:a[2]||(a[2]=t=>{f.value=!0}),class:"text-capitalize"},{default:o(()=>[r("add new")]),_:1})])]),e(z,{bordered:"",album:"singlerows",columns:T.value,rows:h.value,"row-key":"name",filter:l.filter,class:"q-mt-md"},{"body-cell-action":o(()=>[e(N,null,{default:o(()=>[e(u,{class:"",icon:"mdi-pencil",flat:"",dense:"",color:"primary",size:"10px"},{default:o(()=>[e(U,null,{default:o(()=>[r("edit")]),_:1})]),_:1})]),_:1})]),"top-right":o(()=>[e(i,{outlined:"",dense:"",debounce:"300",modelValue:l.filter,"onUpdate:modelValue":a[3]||(a[3]=t=>l.filter=t),placeholder:"Search"},{append:o(()=>[e(q,{name:"mdi-magnify"})]),_:1},8,["modelValue"])]),_:1},8,["columns","rows","filter"]),e(S,{modelValue:b.value,"onUpdate:modelValue":a[9]||(a[9]=t=>b.value=t),position:"right"},{default:o(()=>[e(A,{style:{width:"500px","max-width":"80vw",height:"100vh"}},{default:o(()=>[e(m,null,{default:o(()=>[K]),_:1}),e(m,{class:"q-pt-none q-gutter-y-md"},{default:o(()=>[e(i,{modelValue:V.value,"onUpdate:modelValue":a[4]||(a[4]=t=>V.value=t),dense:"",outlined:"",label:"Album/Ep Name"},null,8,["modelValue"]),e(i,{modelValue:x.value,"onUpdate:modelValue":a[5]||(a[5]=t=>x.value=t),dense:"",outlined:"",label:"Number of trucks"},null,8,["modelValue"]),e(i,{modelValue:w.value,"onUpdate:modelValue":a[6]||(a[6]=t=>w.value=t),dense:"",outlined:"",label:"Release Date"},null,8,["modelValue"]),e(i,{modelValue:k.value,"onUpdate:modelValue":a[7]||(a[7]=t=>k.value=t),dense:"",outlined:"",label:"Link"},null,8,["modelValue"])]),_:1}),e(C,null,{default:o(()=>[p(e(u,{flat:"",outline:"",color:"negative",label:"Cancel",class:"q-mx-sm text-capitalize"},null,512),[[c]]),p(e(u,{color:"primary",label:"Save",onClick:a[8]||(a[8]=t=>$()),class:"q-mx-sm text-capitalize"},null,512),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(S,{modelValue:f.value,"onUpdate:modelValue":a[14]||(a[14]=t=>f.value=t),position:"right"},{default:o(()=>[e(A,{style:{width:"500px","max-width":"80vw",height:"100vh"}},{default:o(()=>[e(m,null,{default:o(()=>[X]),_:1}),e(m,{class:"q-pt-none q-gutter-y-md"},{default:o(()=>[e(i,{modelValue:g.value,"onUpdate:modelValue":a[10]||(a[10]=t=>g.value=t),dense:"",outlined:"",label:"Truck Name"},null,8,["modelValue"]),e(i,{modelValue:v.value,"onUpdate:modelValue":a[11]||(a[11]=t=>v.value=t),dense:"",outlined:"",label:"Release Date"},null,8,["modelValue"]),e(i,{modelValue:_.value,"onUpdate:modelValue":a[12]||(a[12]=t=>_.value=t),dense:"",outlined:"",label:"Link"},null,8,["modelValue"])]),_:1}),e(C,null,{default:o(()=>[p(e(u,{flat:"",outline:"",color:"negative",label:"Cancel",class:"q-mx-sm text-capitalize"},null,512),[[c]]),p(e(u,{color:"primary",label:"Save",onClick:a[13]||(a[13]=t=>I()),class:"q-mx-sm text-capitalize"},null,512),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{be as default};