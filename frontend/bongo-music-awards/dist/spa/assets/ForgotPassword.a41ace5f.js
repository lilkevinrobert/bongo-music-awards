import{ab as p,j as t,o as u,c as _,w as s,p as a,a as e,n as l,q as f,ar as x,f as i,Q as g,bq as b}from"./index.34fc6f26.js";import{Q as h}from"./QForm.3329b8c4.js";import{Q as w}from"./QPage.225bd69c.js";import{_ as q}from"./logo.388c1cd0.js";const Q={class:"full-width q-pa-md"},y=a("img",{src:q},null,-1),v=a("p",{class:"text-capitalize q-mx-auto text-h6",to:"forgot-password"},"Enter Registered Email",-1),V={class:"q-mx-auto text-center q-my-md"},j={__name:"ForgotPassword",setup(z){const o=p({email:""});t(!1),t("");let m=t(!1),n=t("");return(d,r)=>(u(),_(w,{padding:"",class:"column items-center"},{default:s(()=>[a("div",Q,[e(l,{label:"home",class:"text-capitalize",to:"/",icon:"arrow_back",flat:"",color:"primary"})]),e(h,{class:"q-pa-md column justify-center bg-white",style:{width:"400px"},onSubmit:b(d.onSubmit,["prevent"])},{default:s(()=>[e(f,{class:"q-mx-auto",size:"100px"},{default:s(()=>[y]),_:1}),v,e(x,{modelValue:o.email,"onUpdate:modelValue":r[0]||(r[0]=c=>o.email=c),error:i(m),"error-message":i(n),label:"Email",outlined:"",dense:"",class:"q-mx-lg"},{prepend:s(()=>[e(g,{name:"mdi-account"})]),_:1},8,["modelValue","error","error-message"]),a("div",null,[a("div",V,[e(l,{color:"primary",label:"Send email",style:{width:"150px","font-size":"15px"},type:"submit",dense:""})])])]),_:1},8,["onSubmit"])]),_:1}))}};export{j as default};