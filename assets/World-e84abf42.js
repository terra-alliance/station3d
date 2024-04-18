import{R as A,r as e,C as E,u as d,A as w,S as C,V as j,a as z,j as a}from"./index-4cbdb934.js";const F=()=>parseInt(A.replace(/\D+/g,"")),P=F();class _ extends C{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${P>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}const R=t=>new j().setFromSpherical(new z(t,Math.acos(1-Math.random()*2),Math.random()*2*Math.PI)),V=e.forwardRef(({radius:t=100,depth:o=50,count:r=5e3,saturation:c=0,factor:m=4,fade:p=!1,speed:g=1},v)=>{const s=e.useRef(),[h,x,b]=e.useMemo(()=>{const n=[],f=[],M=Array.from({length:r},()=>(.5+.5*Math.random())*m),i=new E;let u=t+o;const y=o/r;for(let l=0;l<r;l++)u-=y*Math.random(),n.push(...R(u).toArray()),i.setHSL(l/r,c,.9),f.push(i.r,i.g,i.b);return[new Float32Array(n),new Float32Array(f),new Float32Array(M)]},[r,o,m,t,c]);d(n=>s.current&&(s.current.uniforms.time.value=n.clock.getElapsedTime()*g));const[S]=e.useState(()=>new _);return e.createElement("points",{ref:v},e.createElement("bufferGeometry",null,e.createElement("bufferAttribute",{attach:"attributes-position",args:[h,3]}),e.createElement("bufferAttribute",{attach:"attributes-color",args:[x,3]}),e.createElement("bufferAttribute",{attach:"attributes-size",args:[b,1]})),e.createElement("primitive",{ref:s,object:S,attach:"material",blending:w,"uniforms-fade-value":p,depthWrite:!1,transparent:!0,vertexColors:!0}))});function T(){return a.jsx(a.Fragment,{children:a.jsx(I,{})})}function I(){const t=e.useRef();return d((o,r)=>t.current.rotation.z-=r*.01),a.jsx(a.Fragment,{children:a.jsx(V,{ref:t,radius:100,depth:50,count:5e3,factor:2,saturation:0,speed:1})})}export{T as default};
