import{a as c}from"./chunk-YTKEQ3B2.js";import{a as v}from"./chunk-LYNC7AOZ.js";import{a as n}from"./chunk-TSWBBZEI.js";import{b as s}from"./chunk-OAXRZPAS.js";import{a as d,d as u,f}from"./chunk-E3MB5WL4.js";var l=u(null),i=u(!0),r=u(!0);s&&f(()=>{l.value==null&&(i.value=!0,r.value=!0)});s&&f(()=>{l.value!=null?document.body.style.overflow="hidden":document.body.style.overflow=""});var a=u(!1);function k(){return a.value}function y(e,o,t){e==null?(i.value=!0,r.value=!0):(typeof o=="boolean"&&(r.value=o),typeof t=="boolean"&&(i.value=t)),l.value=e,a.value=!0}function p(){a.value=!1}function h(e,o){console.trace(e),y(o?`${o}: ${e}`:String(e))}function E({onDismiss:e}){d(()=>{let t=m=>{m.key=="Escape"&&p()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[]);function o(){e?e():p()}return n(v,{present:a,children:n("div",{class:`w-full h-screen fixed top-0 left-0 bg-[#0005] dark:bg-[#fff1] p-5 flex items-center justify-center ${a.value?"animate-in-opacity":"animate-out-opacity"}`,onClick:t=>t.target==t.currentTarget&&r.value&&o(),children:n("div",{class:`w-full max-w-lg p-5 bg-background rounded-xl flex flex-col gap-5 justify-between shadow-sm ${a.value?"animate-in-scale":"animate-out-scale"}`,children:n("div",{class:"flex flex-col gap-4",children:[typeof l.value=="string"?n("p",{children:l.value}):typeof l.value=="function"?l.value():l.value,i.value&&n(c,{onClick:o,children:"Dismiss"})]})})})})}export{k as a,y as b,p as c,h as d,E as e};
