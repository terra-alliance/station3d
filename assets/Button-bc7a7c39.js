import{r as c,j as r}from"./index-c609724e.js";import{u as g,a as S}from"./react-spring_three.modern-0c91d765.js";import{s as o}from"./Hud-2d1b8e6d.js";import{H as w}from"./Html-9ef16b78.js";function z(e,n="pointer",s="auto",t=document.body){c.useEffect(()=>{if(e)return t.style.cursor=n,()=>void(t.style.cursor=s)},[e])}o.Hud.text.color.set("orange");o.Hud.Button.position.z.set(-4800);o.Hud.Button.text.font.set("Alien League");o.Hud.Button.body.color.set("blue");o.Hud.Button.body.color.set("blue");function E(e,n,s){let t=document.createElement("canvas").getContext("2d");return t.font=s+"px "+n,t.measureText(e).width}function O({text:e="Button",position:n=[0,0,0],rotation:s,scale:t=35,width:m,selectedColor:i="yellow",opacity:x=1,onClick:y,active:H}){const h=o.Hud.Button.position.z.use(),B=o.Hud.text.color.use(),d=o.Hud.Button.text.font.use(),u=o.Hud.Button.body.color.use(),a=g(0,{config:{mass:1,friction:15,tension:1e3,clamp:!0}}),[b,l]=c.useState(H?i:u),[j,f]=c.useState(!1);return z(j),r.jsxs(S.group,{position:a.to(p=>[n[0],n[1]-p/500,n[2]+h+p]),rotation:s,children:[r.jsxs("mesh",{onClick:y,onPointerOver:()=>f(!0),onPointerOut:()=>{f(!1),l(u),a.start(0)},onPointerDown:()=>{l(i),a.start(2100)},onPointerUp:()=>{l(u),a.start(0)},"rotation-z":90*(Math.PI/180),children:[r.jsx("capsuleGeometry",{args:[t*.7,m||E(e,d,t),5,20]}),r.jsx("meshStandardMaterial",{color:i?b:u,transparent:"true",opacity:x,depthWrite:!1})]}),r.jsx(w,{transform:!0,pointerEvents:"none",children:r.jsx("p",{style:{userSelect:"none",fontSize:t*40,color:B,fontFamily:d,whiteSpace:"nowrap"},children:e})})]})}export{O as default};