import{C as D,o as A,c as V,ai as u,E as r,j as e,a as t,k as S}from"./chunks/framework.CAnUr3M0.js";const N=JSON.parse('{"title":"脚本加载机制","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/script-loading.md","filePath":"javascript/script-loading.md"}'),E={name:"javascript/script-loading.md"},O=Object.assign(E,{setup(H){const a="https://express-core-backend.loujinfeng123.workers.dev";function p(n){return"<script"+(n?" "+n:"")+">"}function h(n){return"<link"+(n?" "+n:"")+">"}const b="<\/script>",o=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>脚本加载演示</title>
`,l=`</head>
<body>
`,i=`
</body>
</html>`,c=`.box{padding:15px;margin:8px 0;border-radius:4px;font-size:14px;text-align:center}
.ok{background:#d4edda;color:#155724}
.blocked{background:#fff3cd;color:#856404}`,k=o+'<link rel="stylesheet" href="'+a+`/1.css">
`+l+`<div class="box ok">✅ 第一个 div — 立即渲染</div>
`+p('src="'+a+'/addTen.js?t=8000"')+b+`
<div class="box blocked">⏳ 第二个 div — 等脚本加载完才渲染</div>`+i,g='console.log("普通脚本阻塞：第二个 div 等了 8 秒")',v=o+p('async src="'+a+'/addTen.js?t=8000"')+b+`
`+l+`<div class="box ok">✅ 第一个 div — 立即渲染</div>
<div class="box ok">✅ 第二个 div — async 不阻塞，立即渲染</div>`+i,m='console.log("async 不阻塞：两个 div 都立即渲染")',C=o+h('rel="stylesheet" href="'+a+'/1.css?t=8000"')+`
`+l+'<div class="box blocked">⏳ body 内容 — 等 head 中 CSS 加载完才渲染</div>'+i,y=c,x='console.log("CSS 在 head 中阻塞了整个 body 渲染 8 秒")',f=o+l+`<div class="box ok">✅ 第一个 div — CSS 之前，立即渲染</div>
`+h('rel="stylesheet" href="'+a+'/1.css?t=8000"')+`
<div class="box blocked">⏳ 第二个 div — CSS 之后，等 CSS 加载完才渲染</div>`+i,_=c,T='console.log("CSS 在 body 中阻塞了后续内容渲染 8 秒")',q=o+h('rel="stylesheet" href="'+a+'/1.css?t=5000"')+`
`+l+p()+'console.log("脚本执行时间:", Date.now())'+b+`
<div class="box blocked">⏳ 脚本被 CSS 阻塞了 5 秒才执行（看控制台）</div>`+i,P=c,j="";return(n,s)=>{const d=D("LiveCodes");return A(),V("div",null,[s[0]||(s[0]=u("",9)),r(d,{html:k,css:c,js:g,height:350,console:"open"}),s[1]||(s[1]=e("h3",{id:"script-async-不阻塞",tabindex:"-1"},[e("code",null,"<script async>"),t(" 不阻塞 "),e("a",{class:"header-anchor",href:"#script-async-不阻塞","aria-label":'Permalink to "`<script async>` 不阻塞"'},"​")],-1)),s[2]||(s[2]=e("p",null,[t("同样的延迟脚本，加 "),e("code",null,"async"),t(" 后不阻塞解析，第二个 div 立即渲染。")],-1)),r(d,{html:v,css:c,js:m,height:350,console:"open"}),s[3]||(s[3]=u("",5)),r(d,{html:C,css:S(y),js:x,height:350,console:"open"},null,8,["css"]),s[4]||(s[4]=e("h3",{id:"css-在-body-中-—-阻塞后续内容渲染",tabindex:"-1"},[t("CSS 在 "),e("code",null,"<body>"),t(" 中 — 阻塞后续内容渲染 "),e("a",{class:"header-anchor",href:"#css-在-body-中-—-阻塞后续内容渲染","aria-label":'Permalink to "CSS 在 `<body>` 中 — 阻塞后续内容渲染"'},"​")],-1)),r(d,{html:f,css:S(_),js:T,height:350,console:"open"},null,8,["css"]),s[5]||(s[5]=e("blockquote",null,[e("p",null,[e("strong",null,"注意："),t(" CSS 不阻塞 HTML 解析（DOM 树正常构建），但阻塞渲染（不会绘制到屏幕）。")])],-1)),s[6]||(s[6]=e("hr",null,null,-1)),s[7]||(s[7]=e("h2",{id:"三、css-与-script-互相影响",tabindex:"-1"},[t("三、CSS 与 Script 互相影响 "),e("a",{class:"header-anchor",href:"#三、css-与-script-互相影响","aria-label":'Permalink to "三、CSS 与 Script 互相影响"'},"​")],-1)),s[8]||(s[8]=e("p",null,[t("CSS 还会阻塞 "),e("code",null,"<script>"),t(" 的执行 — 脚本必须等 CSSOM 构建完毕才执行。")],-1)),r(d,{html:q,css:S(P),js:j,height:350,console:"open"},null,8,["css"]),s[9]||(s[9]=u("",5))])}}});export{N as __pageData,O as default};
