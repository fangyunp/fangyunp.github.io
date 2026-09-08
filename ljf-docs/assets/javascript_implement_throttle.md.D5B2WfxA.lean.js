import{C as g,o as f,c as _,ai as r,E as a,j as o,a as e}from"./chunks/framework.CAnUr3M0.js";const k=JSON.parse('{"title":"手写节流","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/implement/throttle.md","filePath":"javascript/implement/throttle.md"}'),v={name:"javascript/implement/throttle.md"},q=Object.assign(v,{setup(b){const i='<div id="container">移动鼠标测试：0</div>',s=`
#container {
  width: 100%; height: 200px; line-height: 200px;
  text-align: center; color: #fff; background-color: #444;
  font-size: 30px; cursor: crosshair;
}`,l=`
function throttle(func, wait) {
  var previous = 0;
  return function (...args) {
    var now = +new Date();
    if (now - previous > wait) {
      func.apply(this, args);
      previous = now;
    }
  };
}
var count = 0;
var container = document.getElementById('container');
function getUserAction() {
  count++;
  container.innerHTML = '时间戳版：' + count;
  console.log('第' + count + '次执行');
}
container.onmousemove = throttle(getUserAction, 1000);
console.log('时间戳版：每 1000ms 最多触发一次，首次立即执行');
`,c='<div id="container">移动鼠标测试：0</div>',u=`
#container {
  width: 100%; height: 200px; line-height: 200px;
  text-align: center; color: #fff; background-color: #444;
  font-size: 30px; cursor: crosshair;
}`,d=`
function throttle(func, wait) {
  var timeout;
  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(this, args);
      }, wait);
    }
  };
}
var count = 0;
var container = document.getElementById('container');
function getUserAction() {
  count++;
  container.innerHTML = '定时器版：' + count;
  console.log('第' + count + '次执行');
}
container.onmousemove = throttle(getUserAction, 1000);
console.log('定时器版：每 1000ms 最多触发一次，首次延迟执行');
`,h='<div id="container">移动鼠标测试：0</div>',m=`
#container {
  width: 100%; height: 200px; line-height: 200px;
  text-align: center; color: #fff; background-color: #444;
  font-size: 30px; cursor: crosshair;
}`,p=`
function throttle(func, wait) {
  var previous = 0;
  return function (...args) {
    var now = +new Date();
    if (now - previous > wait) {
      func.apply(this, args);
      previous = now;
    }
  };
}
var count = 0;
var container = document.getElementById('container');
function getUserAction() {
  count++;
  container.innerHTML = '时间戳版：' + count;
  console.log('第' + count + '次执行');
}
container.onmousemove = throttle(getUserAction, 1000);
console.log('时间戳版：每 1000ms 最多触发一次，首次立即执行，停止后不再执行');
`;return(T,t)=>{const n=g("LiveCodes");return f(),_("div",null,[t[0]||(t[0]=r("",8)),a(n,{html:i,css:s,js:l,height:"350",console:"open"}),t[1]||(t[1]=o("hr",null,null,-1)),t[2]||(t[2]=o("h2",{id:"定时器版",tabindex:"-1"},[e("定时器版 "),o("a",{class:"header-anchor",href:"#定时器版","aria-label":'Permalink to "定时器版"'},"​")],-1)),t[3]||(t[3]=o("p",null,[e("使用 "),o("code",null,"setTimeout"),e(" 实现，第一次触发后等待 "),o("code",null,"wait"),e(" 时间才执行：")],-1)),a(n,{html:c,css:u,js:d,height:"350",console:"open"}),t[4]||(t[4]=r("",4)),a(n,{html:h,css:m,js:p,height:"350",console:"open"}),t[5]||(t[5]=r("",5))])}}});export{k as __pageData,q as default};
