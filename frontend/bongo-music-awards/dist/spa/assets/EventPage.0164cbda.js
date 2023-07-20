import{j as r,u as F,k as I,o as m,c as v,w as o,s as q,p as u,a as l,h as p,t as f,n as c,ap as w,aq as g,ao as B,ar as V,b3 as D,g as h,a_ as R}from"./index.34fc6f26.js";import{Q as S}from"./QSelect.e33092ae.js";import{Q as _}from"./QChip.3285a9f2.js";import{Q as Y}from"./QBanner.36f79498.js";import{Q as j}from"./QTable.f580e19c.js";import{Q as G}from"./QPage.225bd69c.js";import{C as U}from"./ClosePopup.d92574f4.js";import"./QItem.54f3b4c2.js";import"./QItemLabel.d6426e10.js";import"./position-engine.a74986fc.js";import"./selection.8e2952d4.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./QList.848173ff.js";import"./use-fullscreen.afdd318e.js";const M={class:"row scroll-on-mobile justify-around q-mt-xl"},O={class:"q-pa-"},T={class:"q-mt-xl"},H=u("p",{class:"text-weight-bolder text-capitalize q-pl-md"},"Nominees",-1),J=u("div",{class:"text-h6"},"Fill the form bellow",-1),ve={__name:"EventPage",setup(K){const N=r([{name:"artist_name",label:"Artist name",align:"left",field:t=>t.artist_name,sortable:!0},{name:"genre",label:"genre",align:"left",field:t=>t.genre,sortable:!0},{name:"category",label:"category",align:"left",field:t=>t.category,sortable:!0},{name:"work_name",label:"Artwork Name",align:"left",field:t=>t.work_name,sortable:!0},{name:"link",label:"Link",align:"left",field:t=>t.link,sortable:!0}]),E=[{category:"Best Artist of the Year",artist_name:"Ally kiba",genre:"Song of the year",work_name:"Utu",link:"http://blablablab.com"},{category:"Best Artist of the Year",artist_name:"Harmonize",genre:"Song of the year",work_name:"I'm single",link:"http://blablablab.com"},{category:"Best Artist of the Year",artist_name:"Marioo",genre:"Song of the year",work_name:"Raha",link:"http://blablablab.com"}],d=r("");r("");const b=r(""),k=r(""),A=r({}),y=r(!1),C=r(!1),s=r(""),n=r(""),i=r(""),Q=F(),$=async()=>{const t=d.value==="active"?"closed":"active";await z(t)},z=async t=>{try{const e=await q.post(`/activateEvent/${Q.params.event_id}`,{status:t});console.log(e),d.value=t}catch(e){console.error("Error sending API:",e)}},P=async()=>{try{const t=await q.get(`/events/${Q.params.event_id}`);d.value=t.data.data.event_status}catch(t){console.log(t)}},x=(t,e)=>{C.value=!0,e==="l"?s.value=t:e==="b"?n.value=t:e==="d"&&(i.value=t),A.value={events_data:s.value,genre_data:n.value,category_data:i.value}},L=()=>{console.log(A.value)};return I(()=>{P()}),(t,e)=>(m(),v(G,{padding:""},{default:o(()=>[u("div",M,[l(c,{onClick:$,class:"text-capitalize",flat:"",color:d.value==="active"?"negative":"primary"},{default:o(()=>[p(f(d.value==="active"?"Close Event":"Activate Event"),1)]),_:1},8,["color"]),l(w,{class:"col-xs-12 col-sm-6 col-md-3",flat:"",bordered:""},{default:o(()=>[l(S,{"bg-color":"white",label:"Genres",options:["Bongo Fleva","Singeli"],borderless:"",modelValue:b.value,"onUpdate:modelValue":[e[0]||(e[0]=a=>b.value=a),e[1]||(e[1]=a=>x(b.value,"b"))]},null,8,["modelValue"])]),_:1}),l(w,{class:"col-xs-12 col-sm-6 col-md-3",flat:"",bordered:""},{default:o(()=>[l(S,{"bg-color":"white",standout:"",label:"Category",options:["Best song of the year","Best artist of the year"],borderless:"",modelValue:k.value,"onUpdate:modelValue":[e[2]||(e[2]=a=>k.value=a),e[3]||(e[3]=a=>x(k.value,"d"))]},null,8,["modelValue"])]),_:1})]),u("div",O,[C.value?(m(),v(Y,{key:0,"inline-actions":"",class:"q-ml-xs q-mt-md bordered"},{action:o(()=>[l(c,{class:"text-capitalize",color:"primary",label:"Apply Filter",onClick:e[7]||(e[7]=a=>L())})]),default:o(()=>[u("div",null,[s.value!=""?(m(),v(_,{key:0,removable:"",modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=a=>s.value=a),color:"primary","text-color":"white"},{default:o(()=>[p(f(s.value),1)]),_:1},8,["modelValue"])):g("",!0),n.value!=""?(m(),v(_,{key:1,removable:"",modelValue:n.value,"onUpdate:modelValue":e[5]||(e[5]=a=>n.value=a),color:"primary","text-color":"white"},{default:o(()=>[p(f(n.value),1)]),_:1},8,["modelValue"])):g("",!0),i.value!=""?(m(),v(_,{key:2,removable:"",modelValue:i.value,"onUpdate:modelValue":e[6]||(e[6]=a=>i.value=a),color:"primary","text-color":"white"},{default:o(()=>[p(f(i.value),1)]),_:1},8,["modelValue"])):g("",!0)])]),_:1})):g("",!0)]),u("div",T,[l(j,{bordered:"",flat:"",rows:E,columns:N.value,"row-key":"name",filter:t.filter,class:"q-mt-md"},{"top-right":o(()=>[l(c,{class:"text-capitalize",icon:"mdi-music-note-plus",color:"primary",onClick:e[8]||(e[8]=a=>{y.value=!0})},{default:o(()=>[p(" Add Nomenees ")]),_:1})]),"top-left":o(()=>[H]),_:1},8,["columns","filter"])]),l(R,{modelValue:y.value,"onUpdate:modelValue":e[14]||(e[14]=a=>y.value=a),position:"right"},{default:o(()=>[l(w,{style:{width:"500px","max-width":"80vw",height:"100vh"}},{default:o(()=>[l(B,null,{default:o(()=>[J]),_:1}),l(B,{class:"q-pt-none q-gutter-y-md"},{default:o(()=>[l(V,{modelValue:t.artwork_name,"onUpdate:modelValue":e[9]||(e[9]=a=>t.artwork_name=a),dense:"",outlined:"",label:"Artist Name"},null,8,["modelValue"]),l(V,{modelValue:t.artwork_name,"onUpdate:modelValue":e[10]||(e[10]=a=>t.artwork_name=a),dense:"",outlined:"",label:"Artwork Name"},null,8,["modelValue"]),l(V,{modelValue:t.artwork_link,"onUpdate:modelValue":e[11]||(e[11]=a=>t.artwork_link=a),dense:"",outlined:"",label:"Artwork Link"},null,8,["modelValue"])]),_:1}),l(D,null,{default:o(()=>[h(l(c,{flat:"",outline:"",color:"negative",label:"Cancel",onClick:e[12]||(e[12]=a=>t.declineLoans()),class:"q-mx-sm text-capitalize"},null,512),[[U]]),h(l(c,{color:"primary",label:"Submit",onClick:e[13]||(e[13]=a=>t.approveLoans()),class:"q-mx-sm text-capitalize"},null,512),[[U]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{ve as default};