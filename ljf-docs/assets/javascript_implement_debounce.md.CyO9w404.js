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
`;return(k,t)=>{const i=p("LiveCodes");return g(),v("div",null,[t[0]||(t[0]=r('<h1 id="手写防抖" tabindex="-1">手写防抖 <a class="header-anchor" href="#手写防抖" aria-label="Permalink to &quot;手写防抖&quot;">​</a></h1><blockquote><p>来源：<code>js/实现/防抖.html</code>，手写实现 <code>debounce</code> —— 持续触发事件，以最后一次为准，停止后延迟执行。</p></blockquote><h2 id="速查导航" tabindex="-1">速查导航 <a class="header-anchor" href="#速查导航" aria-label="Permalink to &quot;速查导航&quot;">​</a></h2><ul><li><a href="#防抖是什么">防抖是什么</a> — 以最后一次为准</li><li><a href="#基础版">基础版</a> — 每次清除上一个定时器</li><li><a href="#立即执行版">立即执行版</a> — immediate 参数</li><li><a href="#对比节流">对比节流</a> — 防抖 vs 节流</li></ul><hr><h2 id="防抖是什么" tabindex="-1">防抖是什么 <a class="header-anchor" href="#防抖是什么" aria-label="Permalink to &quot;防抖是什么&quot;">​</a></h2><blockquote><p>持续触发事件，<strong>以最后一次为准</strong>，停止触发后延迟执行。</p></blockquote><p>典型场景：搜索框输入、窗口 resize 后重新计算布局。</p>',8)),a(i,{html:c,css:n,js:u,height:"350",console:"open"}),t[1]||(t[1]=e("hr",null,null,-1)),t[2]||(t[2]=e("h2",{id:"基础版",tabindex:"-1"},[o("基础版 "),e("a",{class:"header-anchor",href:"#基础版","aria-label":'Permalink to "基础版"'},"​")],-1)),t[3]||(t[3]=e("p",null,"每次触发都清除上一个定时器，重新计时：",-1)),a(i,{html:s,css:l(d),js:m,height:"350",console:"open"},null,8,["css"]),t[4]||(t[4]=e("blockquote",null,[e("p",null,[e("strong",null,"要点："),o(),e("code",null,"clearTimeout"),o(" 确保只有最后一次触发能真正执行。")])],-1)),t[5]||(t[5]=e("hr",null,null,-1)),t[6]||(t[6]=e("h2",{id:"立即执行版",tabindex:"-1"},[o("立即执行版 "),e("a",{class:"header-anchor",href:"#立即执行版","aria-label":'Permalink to "立即执行版"'},"​")],-1)),t[7]||(t[7]=e("p",null,[o("添加 "),e("code",null,"immediate"),o(" 参数：第一次触发立即执行，之后在等待期间不再执行。")],-1)),a(i,{html:h,css:l(b),js:f,height:"350",console:"open"},null,8,["css"]),t[8]||(t[8]=r('<blockquote><p><strong><code>immediate</code> 模式执行流程：</strong></p><ol><li>第一次触发 → <code>timeout</code> 为空 → <code>callNow = true</code> → 立即执行</li><li>后续触发 → <code>timeout</code> 存在 → 每次清除重建 → 不执行</li><li>等待 <code>wait</code> 过期后 → <code>timeout = null</code> → 下次触发又能立即执行</li></ol></blockquote><hr><h2 id="对比节流" tabindex="-1">对比节流 <a class="header-anchor" href="#对比节流" aria-label="Permalink to &quot;对比节流&quot;">​</a></h2><table tabindex="0"><thead><tr><th>特性</th><th>防抖 (debounce)</th><th>节流 (throttle)</th></tr></thead><tbody><tr><td>执行时机</td><td>停止触发后延迟执行</td><td>固定间隔执行一次</td></tr><tr><td>持续触发</td><td>只执行最后一次</td><td>按频率持续执行</td></tr><tr><td>典型场景</td><td>搜索输入、表单验证</td><td>滚动加载、鼠标跟踪</td></tr><tr><td>比喻</td><td>电梯等人到齐再走</td><td>电梯定时发车</td></tr></tbody></table>',4))])}}});export{q as __pageData,w as default};
