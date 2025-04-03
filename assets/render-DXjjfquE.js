var F=Object.defineProperty;var $=(e,t,s)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var x=(e,t,s)=>$(e,typeof t!="symbol"?t+"":t,s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const q=()=>{const e=new Set;return{subscribe:n=>e.add(n),notify:()=>e.forEach(n=>n())}},B=(e,t)=>{const{subscribe:s,notify:n}=q();let o={...e};const a=m=>{o={...o,...m},n()},l=()=>({...o}),h=Object.fromEntries(Object.entries(t).map(([m,C])=>[m,(...k)=>a(C(l(),...k))]));return{getState:l,setState:a,subscribe:s,actions:h}},V=(e,t=window.localStorage)=>({get:()=>JSON.parse(t.getItem(e)),set:a=>t.setItem(e,JSON.stringify(a)),reset:()=>t.removeItem(e)});var E;const z=((E=process==null?void 0:process.env)==null?void 0:E.NODE_DEV)==="production",oe=z?"/front_5th_chapter1-2":"";function r(e,t,...s){return{type:e,props:t,children:s.flat(1/0).filter(n=>n===0||!!n)}}const N=e=>e.replace(/^on/,"").toLowerCase(),S=e=>e.startsWith("on"),i=new Map;function G(e){e&&Object.keys(i).forEach(t=>{e.addEventListener(t,H)})}function H(e){const{type:t,target:s}=e;if(i[t]){for(const[n,o]of i[t].entries())if(n===s||n.contains(s)){o(e);break}}}function L(e,t,s){i[t]||(i[t]=new Map),i[t].set(e,s)}function J(e,t){i[t]&&i[t].delete(e)}function u(e){if(e==null||typeof e=="boolean")return document.createTextNode("");if(typeof e=="string"||typeof e=="number")return document.createTextNode(e);if(typeof e.type=="function")throw new Error("normalizeVNode를 먼저 사용하세요");if(Array.isArray(e)){const s=document.createDocumentFragment();return s.append(...e.map(u)),s}const t=document.createElement(e.type);return e.children.map(u).forEach(s=>t.appendChild(s)),T(t,e.props),t}function T(e,t){Object.entries(t||{}).forEach(([s,n])=>{S(s)?L(e,N(s),n):s==="className"?e.setAttribute("class",n):e.setAttribute(s,n)})}function v(e){if(e==null||typeof e=="boolean")return"";if(typeof e=="number"||typeof e=="string")return String(e);if(typeof e.type=="function"){const{type:t,props:s,children:n}=e;return v(t({...s,children:n}))}return{...e,children:e.children.map(v).filter(Boolean)}}function K(e,t,s){for(const[n,o]of Object.entries(t))s[n]!==o&&(S(n)?L(e,N(n),o):n==="className"?e.setAttribute("class",o):e.setAttribute(n,o));for(const n of Object.keys(s))n in t||(S(n)?J(e,N(n)):e.removeAttribute(n))}function j(e,t,s,n=0){if(!t&&s)return e.removeChild(e.children[n]);if(!s&&t)return e.appendChild(u(t));if(t.type!==s.type)return e.replaceChild(u(t),e.childNodes[n]);if(typeof t=="string"||typeof s=="string"){t!==s&&e.replaceChild(u(t),e.childNodes[n]);return}K(e==null?void 0:e.childNodes[n],t.props||{},s.props||{});const o=Math.max(t.children.length,s.children.length);for(let a=0;a<o;a++)j(e==null?void 0:e.children[n],t.children[a],s.children[a],a)}function W(e,t){const s=v(e);if(t.oldNode)j(t,s,t.oldNode);else{const n=u(s);t.replaceChildren(n)}t.oldNode=s,G(t)}const Y=1e3,A=Y*60,D=A*60,Q=D*24,R=e=>{const t=Date.now()-e;return t<A?"방금 전":t<D?`${Math.floor(t/A)}분 전`:t<Q?`${Math.floor(t/D)}시간 전`:new Date(e).toLocaleString()},X=({author:e,time:t,content:s,likeUsers:n,activationLike:o=!1})=>r("div",{className:"bg-white rounded-lg shadow p-4 mb-4"},r("div",{className:"flex items-center mb-2"},r("div",null,r("div",{className:"font-bold"},e),r("div",{className:"text-gray-500 text-sm"},R(t)))),r("p",null,s),r("div",{className:"mt-2 flex justify-between text-gray-500"},r("span",{className:`like-button cursor-pointer${o?" text-blue-500":""}`},"좋아요 ",n.length),r("span",null,"댓글"),r("span",null,"공유"))),Z=()=>r("div",{className:"mb-4 bg-white rounded-lg shadow p-4"},r("textarea",{id:"post-content",placeholder:"무슨 생각을 하고 계신가요?",className:"w-full p-2 border rounded"}),r("button",{id:"post-submit",className:"mt-2 bg-blue-600 text-white px-4 py-2 rounded"},"게시")),I=()=>r("header",{className:"bg-blue-600 text-white p-4 sticky top-0"},r("h1",{className:"text-2xl font-bold"},"항해플러스")),M=()=>r("footer",{className:"bg-gray-200 p-4 text-center"},r("p",null,"© $",new Date().getFullYear()," 항해플러스. All rights reserved.")),b={value:null,get(){return this.value},set(e){this.value=e}},d=V("user"),_=1e3,f=_*60,ee=f*60,c=B({currentUser:d.get(),loggedIn:!!d.get(),posts:[{id:1,author:"홍길동",time:Date.now()-5*f,content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!",likeUsers:[]},{id:2,author:"김철수",time:Date.now()-15*f,content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!",likeUsers:[]},{id:3,author:"이영희",time:Date.now()-30*f,content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?",likeUsers:[]},{id:4,author:"박민수",time:Date.now()-30*f,content:"주말에 등산 가실 분 계신가요? 함께 가요!",likeUsers:[]},{id:5,author:"정수연",time:Date.now()-2*ee,content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?",likeUsers:[]}],error:null},{logout(e){return d.reset(),{...e,currentUser:null,loggedIn:!1}}}),y=e=>window.location.pathname===e?"text-blue-600 font-bold":"text-gray-600";function w({onClick:e,children:t,...s}){return r("a",{onClick:o=>{o.preventDefault(),e==null||e(),b.get().push(o.target.href.replace(window.location.origin,""))},...s},t)}const U=()=>{const{loggedIn:e}=c.getState(),{logout:t}=c.actions;return r("nav",{className:"bg-white shadow-md p-2 sticky top-14 z-10"},r("ul",{className:"flex justify-around"},r("li",null,r(w,{href:"/",className:y("/")},"홈")),!e&&r("li",null,r(w,{href:"/login",className:y("/login")},"로그인")),e&&r("li",null,r(w,{href:"/profile",className:y("/profile")},"프로필")),e&&r("li",null,r("a",{href:"#",id:"logout",className:"text-gray-600",onClick:s=>{s.preventDefault(),t()}},"로그아웃"))))},ae=()=>{const{posts:e}=c.getState();return r("div",{className:"bg-gray-100 min-h-screen flex justify-center"},r("div",{className:"max-w-md w-full"},r(I,null),r(U,null),r("main",{className:"p-4"},r(Z,null),r("div",{id:"posts-container",className:"space-y-4"},[...e].sort((t,s)=>s.time-t.time).map(t=>r(X,{...t,activationLike:!1})))),r(M,null)))};function te(e){const t={username:e,email:"",bio:""};c.setState({currentUser:t,loggedIn:!0}),d.set(t)}const le=()=>r("div",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},r("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md"},r("h1",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"항해플러스"),r("form",{id:"login-form",onSubmit:t=>{t.preventDefault();const s=document.getElementById("username").value;te(s)}},r("input",{type:"text",id:"username",placeholder:"사용자 이름",className:"w-full p-2 mb-4 border rounded",required:!0}),r("input",{type:"password",placeholder:"비밀번호",className:"w-full p-2 mb-6 border rounded",required:!0}),r("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded"},"로그인")),r("div",{className:"mt-4 text-center"},r("a",{href:"#",className:"text-blue-600 text-sm"},"비밀번호를 잊으셨나요?")),r("hr",{className:"my-6"}),r("div",{className:"text-center"},r("button",{className:"bg-green-500 text-white px-4 py-2 rounded"},"새 계정 만들기")))),re=()=>r("main",{className:"bg-gray-100 flex items-center justify-center min-h-screen"},r("div",{className:"bg-white p-8 rounded-lg shadow-md w-full text-center",style:"max-width: 480px"},r("h1",{className:"text-2xl font-bold text-blue-600 mb-4"},"항해플러스"),r("p",{className:"text-4xl font-bold text-gray-800 mb-4"},"404"),r("p",{className:"text-xl text-gray-600 mb-8"},"페이지를 찾을 수 없습니다"),r("p",{className:"text-gray-600 mb-8"},"요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."),r("a",{href:"/","data-link":"",className:"bg-blue-600 text-white px-4 py-2 rounded font-bold"},"홈으로 돌아가기")));function se(e){const t={...c.getState().currentUser,...e};c.setState({currentUser:t}),d.set(t),alert("프로필이 업데이트되었습니다.")}const ie=()=>{const{loggedIn:e,currentUser:t}=c.getState(),{username:s="",email:n="",bio:o=""}=t??{};return r("div",{className:"bg-gray-100 min-h-screen flex justify-center"},r("div",{className:"max-w-md w-full"},r(I,null),r(U,{loggedIn:e}),r("main",{className:"p-4"},r("div",{className:"bg-white p-8 rounded-lg shadow-md"},r("h2",{className:"text-2xl font-bold text-center text-blue-600 mb-8"},"내 프로필"),r("form",{id:"profile-form",onSubmit:l=>{l.preventDefault();const h=new FormData(l.target),m=Object.fromEntries(h);se(m)}},r("div",{className:"mb-4"},r("label",{for:"username",className:"block text-gray-700 text-sm font-bold mb-2"},"사용자 이름"),r("input",{type:"text",id:"username",name:"username",className:"w-full p-2 border rounded",value:s,required:!0})),r("div",{className:"mb-4"},r("label",{for:"email",className:"block text-gray-700 text-sm font-bold mb-2"},"이메일"),r("input",{type:"email",id:"email",name:"email",className:"w-full p-2 border rounded",value:n,required:!0})),r("div",{className:"mb-6"},r("label",{for:"bio",className:"block text-gray-700 text-sm font-bold mb-2"},"자기소개"),r("textarea",{id:"bio",name:"bio",rows:"4",className:"w-full p-2 border rounded"},o)),r("button",{type:"submit",className:"w-full bg-blue-600 text-white p-2 rounded font-bold"},"프로필 업데이트")))),r(M,null)))},p=class p extends Error{constructor(){super(p.MESSAGE)}};x(p,"MESSAGE","ForbiddenError");let O=p;const g=class g extends Error{constructor(){super(g.MESSAGE)}};x(g,"MESSAGE","UnauthorizedError");let P=g;function ce(){const e=b.get().getTarget()??re,t=document.querySelector("#root");try{W(r(e,null),t)}catch(s){if(s instanceof O){b.get().push("/");return}if(s instanceof P){b.get().push("/login");return}console.error(s)}}export{oe as B,O as F,ae as H,le as L,ie as P,P as U,ce as a,r as b,q as c,c as g,b as r};
