import{C as p,o as g,c as v,ai as r,E as a,j as e,a as o,k as l}from"./chunks/framework.CAnUr3M0.js";const q=JSON.parse('{"title":"手写防抖","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/implement/debounce.md","filePath":"javascript/implement/debounce.md"}'),T={name:"javascript/implement/debounce.md"},w=Object.assign(T,{setup(_){const n=`
#container {
  width: 100%; height: 200px; line-height: 200px;
  text-align: center; color: #fff; background-color: #444;
  font-size: 30px; cursor: crosshair;
}`,c='<div id="container">移动鼠标测试：0</div>',u=`
function debounce(func, wait) {
  var timeout;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => { func.apply(this, args); }, wait);
  };
}
var count = 0;
var container = document.getElementById('container');
function getUserAction() {
  count++;
  container.innerHTML = '基础防抖：' + count;
  console.log('第' + count + '次执行');
}
container.onmousemove = debounce(getUserAction, 500);
console.log('停止移动 500ms 后才执行');
`,s='<div id="container">移动鼠标测试：0</div>',d=n,m=`
function debounce(func, wait) {
  var timeout;
  return function (...args) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => { func.apply(this, args); }, wait);
  };
}
var count = 0;
var container = document.getElementById('container');
function getUserAction() {
  count++;
  container.innerHTML = '基础版：' + count;
  console.log('第' + count + '次执行');
}
container.onmousemove = debounce(getUserAction, 500);
console.log('基础版：clearTimeout 确保只有最后一次能真正执行');
`,h='<div id="container">移动鼠标测试：0</div>',b=n,f=`
function debounce(func, wait, immediate) {
  var timeout, result;
  return function () {
    var context = this, args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () { timeout = null; }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function () { func.apply(context, args); }, wait);
    }
    return result;
  };
}
var count = 0;
var container = document.getElementById('container');
function getUserAction() {
  count++;
  container.innerHTML = '立即执行版：' + count;
  console.log('第' + count + '次执行');
}
container.onmousemove = debounce(getUserAction, 500, true);
console.log('立即执行版：首次立即执行，之后等 500ms 过期才能再次立即执行');
`;return(k,t)=>{const i=p("LiveCodes");return g(),v("div",null,[t[0]||(t[0]=r("",8)),a(i,{html:c,css:n,js:u,height:"350",console:"open"}),t[1]||(t[1]=e("hr",null,null,-1)),t[2]||(t[2]=e("h2",{id:"基础版",tabindex:"-1"},[o("基础版 "),e("a",{class:"header-anchor",href:"#基础版","aria-label":'Permalink to "基础版"'},"​")],-1)),t[3]||(t[3]=e("p",null,"每次触发都清除上一个定时器，重新计时：",-1)),a(i,{html:s,css:l(d),js:m,height:"350",console:"open"},null,8,["css"]),t[4]||(t[4]=e("blockquote",null,[e("p",null,[e("strong",null,"要点："),o(),e("code",null,"clearTimeout"),o(" 确保只有最后一次触发能真正执行。")])],-1)),t[5]||(t[5]=e("hr",null,null,-1)),t[6]||(t[6]=e("h2",{id:"立即执行版",tabindex:"-1"},[o("立即执行版 "),e("a",{class:"header-anchor",href:"#立即执行版","aria-label":'Permalink to "立即执行版"'},"​")],-1)),t[7]||(t[7]=e("p",null,[o("添加 "),e("code",null,"immediate"),o(" 参数：第一次触发立即执行，之后在等待期间不再执行。")],-1)),a(i,{html:h,css:l(b),js:f,height:"350",console:"open"},null,8,["css"]),t[8]||(t[8]=r("",4))])}}});export{q as __pageData,w as default};
