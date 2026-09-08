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
`;return(T,t)=>{const n=g("LiveCodes");return f(),_("div",null,[t[0]||(t[0]=r('<h1 id="手写节流" tabindex="-1">手写节流 <a class="header-anchor" href="#手写节流" aria-label="Permalink to &quot;手写节流&quot;">​</a></h1><blockquote><p>来源：<code>js/实现/节流.html</code>，手写实现 <code>throttle</code> —— 持续触发事件，每隔一段时间只执行一次。</p></blockquote><h2 id="速查导航" tabindex="-1">速查导航 <a class="header-anchor" href="#速查导航" aria-label="Permalink to &quot;速查导航&quot;">​</a></h2><ul><li><a href="#节流是什么">节流是什么</a> — 固定频率执行</li><li><a href="#定时器版">定时器版</a> — setTimeout 实现</li><li><a href="#时间戳版">时间戳版</a> — 时间差判断</li><li><a href="#对比">对比</a> — 两种方案差异</li></ul><hr><h2 id="节流是什么" tabindex="-1">节流是什么 <a class="header-anchor" href="#节流是什么" aria-label="Permalink to &quot;节流是什么&quot;">​</a></h2><blockquote><p>持续触发事件，每一段时间<strong>只触发一次</strong>。</p></blockquote><p>典型场景：<code>scroll</code>、<code>resize</code>、<code>mousemove</code> 等高频事件。</p>',8)),a(n,{html:i,css:s,js:l,height:"350",console:"open"}),t[1]||(t[1]=o("hr",null,null,-1)),t[2]||(t[2]=o("h2",{id:"定时器版",tabindex:"-1"},[e("定时器版 "),o("a",{class:"header-anchor",href:"#定时器版","aria-label":'Permalink to "定时器版"'},"​")],-1)),t[3]||(t[3]=o("p",null,[e("使用 "),o("code",null,"setTimeout"),e(" 实现，第一次触发后等待 "),o("code",null,"wait"),e(" 时间才执行：")],-1)),a(n,{html:c,css:u,js:d,height:"350",console:"open"}),t[4]||(t[4]=r('<blockquote><p><strong>定时器版特点：</strong> 第一次触发后<strong>延迟</strong> <code>wait</code> 才执行，停止触发后还会再执行一次。</p></blockquote><hr><h2 id="时间戳版" tabindex="-1">时间戳版 <a class="header-anchor" href="#时间戳版" aria-label="Permalink to &quot;时间戳版&quot;">​</a></h2><p>使用时间差判断，第一次触发<strong>立即</strong>执行：</p>',4)),a(n,{html:h,css:m,js:p,height:"350",console:"open"}),t[5]||(t[5]=r('<blockquote><p><strong>时间戳版特点：</strong> 第一次触发<strong>立即</strong>执行，停止触发后<strong>不会</strong>再执行。</p></blockquote><hr><h2 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方案</th><th>首次触发</th><th>停止后</th><th>适用场景</th></tr></thead><tbody><tr><td>定时器版</td><td>延迟 <code>wait</code> 执行</td><td>还会执行一次</td><td>鼠标移入动画</td></tr><tr><td>时间戳版</td><td>立即执行</td><td>不再执行</td><td>滚动加载、resize</td></tr></tbody></table><blockquote><p><strong>完整版</strong>可以结合两者：首次立即执行 + 停止后再执行一次，兼顾两种场景。</p></blockquote>',5))])}}});export{k as __pageData,q as default};
