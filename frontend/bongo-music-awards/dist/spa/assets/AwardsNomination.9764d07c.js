import{Q as V}from"./QSelect.d8365bf0.js";import{j as r,o as u,c as m,w as o,p as d,a as t,ap as p,n as f,h as v,t as x,aq as b,ao as _,ar as C,b3 as $,g as B,a_ as z}from"./index.a2a6cfde.js";import{Q as A}from"./QChip.7a4b047c.js";import{Q as L}from"./QBanner.6349854b.js";import{Q as F}from"./QTable.6e027470.js";import{Q as D}from"./QPage.81319fa2.js";import{C as U}from"./ClosePopup.5e5ba2a5.js";import"./QItem.8f89f5b7.js";import"./QItemLabel.5da09386.js";import"./position-engine.dddaf326.js";import"./selection.c992f87f.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./QList.416a0a8c.js";import"./use-fullscreen.6cb5833e.js";const P={class:"row scroll-on-mobile justify-around q-mt-xl"},I={class:"q-pa-"},T={class:"q-mt-xl"},Y=d("p",{class:"text-weight-bolder text-capitalize q-pl-md"},"Nominees",-1),j=d("div",{class:"text-h6"},"Fill the form bellow",-1),re={__name:"AwardsNomination",setup(G){const N=r([{name:"artist_name",label:"Artist name",align:"left",field:a=>a.artist_name,sortable:!0},{name:"genre",label:"genre",align:"left",field:a=>a.genre,sortable:!0},{name:"category",label:"category",align:"left",field:a=>a.category,sortable:!0},{name:"work_name",label:"Artwork Name",align:"left",field:a=>a.work_name,sortable:!0},{name:"link",label:"Link",align:"left",field:a=>a.link,sortable:!0}]),S=[{category:"Best Artist of the Year",artist_name:"Ally kiba",genre:"Song of the year",work_name:"Utu",link:"http://blablablab.com"},{category:"Best Artist of the Year",artist_name:"Harmonize",genre:"Song of the year",work_name:"I'm single",link:"http://blablablab.com"},{category:"Best Artist of the Year",artist_name:"Marioo",genre:"Song of the year",work_name:"Raha",link:"http://blablablab.com"}],g=r(""),c=r(""),k=r(""),Q=r({}),w=r(!1),q=r(!1),s=r(""),n=r(""),i=r(""),y=(a,e)=>{q.value=!0,e==="l"?s.value=a:e==="b"?n.value=a:e==="d"&&(i.value=a),Q.value={events_data:s.value,genre_data:n.value,category_data:i.value}},h=()=>{console.log(Q.value)};return(a,e)=>(u(),m(D,{padding:""},{default:o(()=>[d("div",P,[t(p,{class:"col-xs-12 col-sm-6 col-md-3 q-pa-xs",flat:"",bordered:""},{default:o(()=>[t(V,{"bg-color":"white",label:"Events",options:["Bongo Music Awards"],borderless:"",modelValue:g.value,"onUpdate:modelValue":[e[0]||(e[0]=l=>g.value=l),e[1]||(e[1]=l=>y(g.value,"l"))]},null,8,["modelValue"])]),_:1}),t(p,{class:"col-xs-12 col-sm-6 col-md-3 q-pa-xs",flat:"",bordered:""},{default:o(()=>[t(V,{"bg-color":"white",label:"Genres",options:["Bongo Fleva","Taarabu","Singeli"],borderless:"",modelValue:c.value,"onUpdate:modelValue":[e[2]||(e[2]=l=>c.value=l),e[3]||(e[3]=l=>y(c.value,"b"))]},null,8,["modelValue"])]),_:1}),t(p,{class:"col-xs-12 col-sm-6 col-md-3 q-pa-xs",flat:"",bordered:""},{default:o(()=>[t(V,{"bg-color":"white",standout:"",label:"Category",options:["Best song of the year","Best artist of the year"],borderless:"",modelValue:k.value,"onUpdate:modelValue":[e[4]||(e[4]=l=>k.value=l),e[5]||(e[5]=l=>y(k.value,"d"))]},null,8,["modelValue"])]),_:1})]),d("div",I,[q.value?(u(),m(L,{key:0,"inline-actions":"",class:"q-ml-xs q-mt-md bordered"},{action:o(()=>[t(f,{class:"text-capitalize",color:"primary",label:"Apply Filter",onClick:e[9]||(e[9]=l=>h())})]),default:o(()=>[d("div",null,[s.value!=""?(u(),m(A,{key:0,removable:"",modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=l=>s.value=l),color:"primary","text-color":"white"},{default:o(()=>[v(x(s.value),1)]),_:1},8,["modelValue"])):b("",!0),n.value!=""?(u(),m(A,{key:1,removable:"",modelValue:n.value,"onUpdate:modelValue":e[7]||(e[7]=l=>n.value=l),color:"primary","text-color":"white"},{default:o(()=>[v(x(n.value),1)]),_:1},8,["modelValue"])):b("",!0),i.value!=""?(u(),m(A,{key:2,removable:"",modelValue:i.value,"onUpdate:modelValue":e[8]||(e[8]=l=>i.value=l),color:"primary","text-color":"white"},{default:o(()=>[v(x(i.value),1)]),_:1},8,["modelValue"])):b("",!0)])]),_:1})):b("",!0)]),d("div",T,[t(F,{bordered:"",flat:"",rows:S,columns:N.value,"row-key":"name",filter:a.filter,class:"q-mt-md"},{"top-right":o(()=>[t(f,{class:"text-capitalize",icon:"mdi-music-note-plus",color:"primary",onClick:e[10]||(e[10]=l=>{w.value=!0})},{default:o(()=>[v(" Add your work ")]),_:1})]),"top-left":o(()=>[Y]),_:1},8,["columns","filter"])]),t(z,{modelValue:w.value,"onUpdate:modelValue":e[15]||(e[15]=l=>w.value=l),position:"right"},{default:o(()=>[t(p,{style:{width:"500px","max-width":"80vw",height:"100vh"}},{default:o(()=>[t(_,null,{default:o(()=>[j]),_:1}),t(_,{class:"q-pt-none q-gutter-y-md"},{default:o(()=>[t(C,{modelValue:a.artwork_name,"onUpdate:modelValue":e[11]||(e[11]=l=>a.artwork_name=l),dense:"",outlined:"",label:"Artwork Name"},null,8,["modelValue"]),t(C,{modelValue:a.artwork_link,"onUpdate:modelValue":e[12]||(e[12]=l=>a.artwork_link=l),dense:"",outlined:"",label:"Artwork Link"},null,8,["modelValue"])]),_:1}),t($,null,{default:o(()=>[B(t(f,{flat:"",outline:"",color:"negative",label:"Cancel",onClick:e[13]||(e[13]=l=>a.declineLoans()),class:"q-mx-sm text-capitalize"},null,512),[[U]]),B(t(f,{color:"primary",label:"Submit",onClick:e[14]||(e[14]=l=>a.approveLoans()),class:"q-mx-sm text-capitalize"},null,512),[[U]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{re as default};
