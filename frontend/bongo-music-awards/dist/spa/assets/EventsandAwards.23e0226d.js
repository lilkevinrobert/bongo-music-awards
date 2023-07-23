import{i as n,bb as y,j as x,o as m,c as u,w as a,A as p,n as l,a as t,h as k,m as r,aM as v,g as V,x as q,Q as C}from"./index.cce3915b.js";import{Q as z}from"./QInnerLoading.453ab13a.js";import{Q as f}from"./QBadge.97ccef41.js";import{Q as _}from"./QTd.c320ee66.js";import{Q as E}from"./QSelect.9cf437ff.js";import{Q as N}from"./QMenu.e874daef.js";import{Q as B}from"./QTable.f524ade3.js";import{Q as S}from"./QPage.76a46a00.js";import{C as $}from"./ClosePopup.f712e32b.js";import"./QChip.729eece9.js";import"./QItem.a90bd647.js";import"./QItemLabel.9e65cb53.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./position-engine.0cde2c40.js";import"./selection.109ccf0b.js";import"./QList.f3f9416a.js";import"./use-fullscreen.fa37bee6.js";const A={class:"row items-center q-mt-xl"},D=l("p",{class:"font-body-small q-pl-md col"},[l("span",{class:"text-weight-bolder text-capitalize text-h6"},"events and awards")],-1),I={class:"flex justify-end width col"},M={class:"row no-wrap q-pa-md"},T={class:"column"},oe={__name:"EventsandAwards",setup(j){const i=n(""),g=y();n("");const d=n([]),b=n([{name:"event_name",label:"Event Name",align:"left",field:e=>e.event_title,sortable:!0},{name:"event_number",label:"Event Number",align:"left",field:e=>e.event_number,sortable:!0},{name:"date",label:"Date",align:"left",field:e=>e.event_date,sortable:!0},{name:"status",label:"Status",field:e=>e.event_status,align:"left"},{name:"action",label:"action",align:"left"}]),w=async()=>{try{const e=await p.get("/events");console.log(e.data.data),d.value=e.data.data}catch(e){console.log(e)}},Q=async e=>{try{const o=await p.post(`/activateEvent/${e}`);d.value=o.data.data}catch{}},h=e=>g.push(`/admin/event/${e}`);return x(()=>{w()}),(e,o)=>(m(),u(S,{padding:""},{default:a(()=>[l("div",A,[D,l("p",I,[t(r,{class:"text-capitalize",to:"/admin/eventsandawards/addevent"},{default:a(()=>[k(" add event ")]),_:1})])]),t(B,{bordered:"",rows:d.value,columns:b.value,"row-key":"name",filter:i.value,class:"q-mt-md",loading:e.loading},{loading:a(()=>[t(z,{showing:"",color:"primary"})]),"body-cell-status":a(s=>[t(_,null,{default:a(()=>[s.row.event_status==="closed"?(m(),u(f,{key:0,dense:"",color:"red",size:"10px",label:"closed",class:"q-ma-xs"})):v("",!0),s.row.event_status==="active"?(m(),u(f,{key:1,dense:"",color:"green",size:"10px",label:"Active",class:"q-ma-xs"})):v("",!0)]),_:2},1024)]),"body-cell-action":a(s=>[t(_,{props:s},{default:a(()=>[t(r,{class:"",icon:"mdi-eye",flat:"",dense:"",color:"primary",size:"10px",onClick:c=>h(s.row.event_id)},null,8,["onClick"]),t(r,{class:"",icon:"mdi-check-decagram",flat:"",dense:"",color:"primary",size:"10px"},{default:a(()=>[t(N,null,{default:a(()=>[l("div",M,[l("div",T,[t(E,{class:"q-ma-xs",dense:"",modelValue:e.customer_status,"onUpdate:modelValue":o[0]||(o[0]=c=>e.customer_status=c),options:["active","closed"]},null,8,["modelValue"]),V(t(r,{class:"q-ma-xs",color:"primary",label:"Save",push:"",size:"sm",onClick:c=>Q(s.row.event_id)},null,8,["onClick"]),[[$]])])])]),_:2},1024)]),_:2},1024)]),_:2},1032,["props"])]),"top-right":a(()=>[t(q,{outlined:"",dense:"",debounce:"300",modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=s=>i.value=s),placeholder:"Search"},{append:a(()=>[t(C,{name:"mdi-magnify"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter","loading"])]),_:1}))}};export{oe as default};
