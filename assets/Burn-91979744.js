import{j as s,r as d}from"./index-ef113196.js";import{s as o,a as m}from"./Hud-b03c398e.js";import{u as x}from"./use-sound.esm-4d59a6fc.js";import{A as j}from"./AnimatedPage-e4b3d823.js";import{A as i}from"./AnimatedText-5c6cd9e7.js";import{H as u}from"./Html-28adec3e.js";import a from"./Button-e68e725a.js";import{L as h}from"./Lunc-c7ebe2a4.js";import{L as f,F as l}from"./Luna-e417ff54.js";import{T as g}from"./Terra-bc4ee001.js";import"./react-spring_three.modern-3e66679a.js";import"./Html-3965ac2a.js";import"./useGLTF-fb206ba2.js";const y="/station3d/sounds/sound_19.mp3";function R(){const e=o.data.balance.total.use();return s.jsx(j,{name:"Burn",children:o.Hud.Burn.active.use()&&s.jsx(k,{total:e})})}function k({total:e}){const[n]=x(y,{volume:o.volume.use()}),r=m();return s.jsx(s.Fragment,{children:{mainnet:s.jsx(t,{total:e,play:n}),testnet:s.jsx(t,{total:e,play:n}),classic:s.jsx(C,{total:e,play:n}),localterra:s.jsx(t,{total:e,play:n})}[(r==null?void 0:r.network)||"mainnet"]})}function t({total:e,play:n}){return s.jsxs(s.Fragment,{children:[s.jsx(f,{position:[0,0,0],scale:130}),s.jsxs(u,{position:[0,-180,0],style:{fontSize:35},children:[s.jsx("span",{children:"supply: "}),s.jsx("b",{children:s.jsx(i,{text:Math.round((e==null?void 0:e.uluna.amount)/1e6).toString(),chars:"0123456789",speed:20})})]}),s.jsx(a,{text:"Burn",position:[0,-250,0],scale:35,selectedColor:"yellow",onClick:()=>n()})]})}const S=["uusd","utwd","uthb","usgd","usek","usdr","uphp","unok","umyr","umnt","ukrw","ujpy","uinr","uidr","uhkd","ugbp","ueur","udkk","ucny","uchf","ucad","uaud"];function C({total:e,play:n}){var c;const[r,p]=d.useState(0);return s.jsxs(s.Fragment,{children:[s.jsx(h,{position:[-200,0,0],scale:130}),s.jsx(l,{position:[-200,0,0],scale:131}),s.jsx(l,{position:[200,0,0],scale:131}),s.jsx(g,{position:[200,0,0],scale:130,flag:r,setFlag:p}),s.jsxs(u,{position:[-200,-180,0],style:{fontSize:35},children:[s.jsx("span",{children:"supply: "}),s.jsx("b",{children:s.jsx(i,{text:Math.round((e==null?void 0:e.uluna.amount)/1e6).toString(),chars:"0123456789",speed:20})})]}),s.jsxs(u,{position:[200,-180,0],style:{fontSize:35},children:[s.jsx("span",{children:"supply: "}),s.jsx("b",{children:s.jsx(i,{text:Math.round(((c=e==null?void 0:e[S.at(r)])==null?void 0:c.amount)/1e6).toString(),chars:"0123456789",speed:20})})]}),s.jsx(a,{text:"Burn",position:[-200,-250,0],scale:35,selectedColor:"yellow",onClick:()=>n()}),s.jsx(a,{text:"Burn",position:[200,-250,0],scale:35,selectedColor:"yellow",onClick:()=>n()})]})}export{R as default};