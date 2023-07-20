import{ba as g,i as d,j as w,o as l,c as n,w as t,A as x,n as o,a as s,h,m,aM as c,x as y,Q}from"./index.efa01b05.js";import{Q as u}from"./QBadge.9ed5d79d.js";import{Q as p}from"./QTd.ca3dc957.js";import{Q as k}from"./QTable.c89e77de.js";import{Q as V}from"./QPage.4a1349b4.js";import"./QList.562d1e83.js";import"./QSelect.ad46de18.js";import"./QChip.2e6b4c07.js";import"./QItem.2c90671b.js";import"./QItemLabel.0159edf1.js";import"./QMenu.d4c2ee07.js";import"./position-engine.d1710d5a.js";import"./selection.4ec88403.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./use-fullscreen.601433c7.js";const N={class:"row items-center q-mt-xl"},q=o("p",{class:"font-body-small q-pl-md col"},[o("span",{class:"text-weight-bolder text-capitalize text-h6"},"events and awards")],-1),z={class:"flex justify-end width col"},K={__name:"EventsandAwards",setup(B){const f=g(),r=d([]),v=d([{name:"event_name",label:"Event Name",align:"left",field:e=>e.event_title,sortable:!0},{name:"event_number",label:"Event Number",align:"left",field:e=>e.event_number,sortable:!0},{name:"date",label:"Date",align:"left",field:e=>e.event_date,sortable:!0},{name:"status",label:"Status",field:e=>e.event_status,align:"left"},{name:"action",label:"action",align:"left"}]),_=async()=>{try{const e=await x.get("/events");console.log(e.data.data),r.value=e.data.data}catch(e){console.log(e)}},b=e=>f.push(`/admin/event/${e}`);return w(()=>{_()}),(e,i)=>(l(),n(V,{padding:""},{default:t(()=>[o("div",N,[q,o("p",z,[s(m,{class:"text-capitalize",to:"/admin/eventsandawards/addevent"},{default:t(()=>[h(" add event ")]),_:1})])]),s(k,{bordered:"",rows:r.value,columns:v.value,"row-key":"name",filter:e.filter,class:"q-mt-md"},{"body-cell-status":t(a=>[s(p,null,{default:t(()=>[a.row.event_status==="closed"?(l(),n(u,{key:0,dense:"",color:"red",size:"10px",label:"closed",class:"q-ma-xs"})):c("",!0),a.row.event_status==="active"?(l(),n(u,{key:1,dense:"",color:"green",size:"10px",label:"Active",class:"q-ma-xs"})):c("",!0)]),_:2},1024)]),"body-cell-action":t(a=>[s(p,{props:a},{default:t(()=>[s(m,{class:"",icon:"mdi-eye",flat:"",dense:"",color:"primary",size:"10px",onClick:C=>b(a.row.event_id)},null,8,["onClick"])]),_:2},1032,["props"])]),"top-right":t(()=>[s(y,{outlined:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":i[0]||(i[0]=a=>e.filter=a),placeholder:"Search"},{append:t(()=>[s(Q,{name:"mdi-magnify"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter"])]),_:1}))}};export{K as default};