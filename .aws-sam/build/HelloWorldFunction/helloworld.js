"use strict";var a=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var n=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var P=(t,e)=>{for(var o in e)a(t,o,{get:e[o],enumerable:!0})},d=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of n(e))!l.call(t,r)&&r!==o&&a(t,r,{get:()=>e[r],enumerable:!(s=y(e,r))||s.enumerable});return t};var m=t=>d(a({},"__esModule",{value:!0}),t);var u={};P(u,{lambdaHandler:()=>i});module.exports=m(u);var i=async t=>{let e;try{e={statusCode:200,body:JSON.stringify({message:"hello world!"})}}catch(o){console.log(o),e={statusCode:500,body:JSON.stringify({message:"some error happened"})}}return e};0&&(module.exports={lambdaHandler});
//# sourceMappingURL=helloworld.js.map
