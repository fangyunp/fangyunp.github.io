import{C as g,o as b,c as m,ai as a,E as s,j as e,a as n}from"./chunks/framework.CAnUr3M0.js";const C=JSON.parse('{"title":"事件","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/event.md","filePath":"javascript/event.md"}'),v={name:"javascript/event.md"},F=Object.assign(v,{setup(y){const l=`
<div class="container">
  <button class="btn">按钮</button>
  <button class="btn1">按钮1</button>
  <button class="btn2" onclick="handleClick()">按钮2</button>
  <button class="btn3">按钮3</button>
</div>`,o=`
.container { display: flex; gap: 12px; padding: 16px; }
button { padding: 8px 16px; font-size: 14px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; background: #f9fafb; }
button:hover { background: #e5e7eb; }`,r=`
let btn = document.querySelector(".btn");
btn.onclick = function() { alert("我是点语法注册的事件-1"); };
btn.onclick = function() { alert("我是点语法注册的事件-2"); };

let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function() { alert("addEventListener事件-1"); });
btn1.addEventListener("click", function() { alert("addEventListener事件-2"); });

function handleClick() { console.log("handleClick,直接属性绑定语法"); }

let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", function() { console.log("冒泡阶段触发"); }, false);
btn3.addEventListener("click", function() { setTimeout(function() { console.log("捕获阶段触发"); }, 0); }, true);`,d='<button id="demoBtn">点击测试</button>',c=`
// 第三个参数为 false（默认）：冒泡阶段触发
// 第三个参数为 true：捕获阶段触发
const btn = document.getElementById("demoBtn");
btn.addEventListener("click", function() { console.log("冒泡阶段触发 (useCapture=false)"); }, false);
btn.addEventListener("click", function() { console.log("捕获阶段触发 (useCapture=true)"); }, true);
console.log("addEventListener 第三个参数：false=冒泡，true=捕获");`,h=`
<div id="outer" style="padding:20px;background:#e5e7eb;border-radius:8px;">
  <div id="inner" style="padding:20px;background:#93c5fd;border-radius:8px;">
    <button id="target">点击我</button>
  </div>
</div>`,u=`
// 捕获阶段：window → document → html → body → ... → target
// 冒泡阶段：target → ... → body → html → document → window
const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const target = document.getElementById("target");

outer.addEventListener("click", () => console.log("外层-冒泡"), false);
outer.addEventListener("click", () => console.log("外层-捕获"), true);
inner.addEventListener("click", () => console.log("内层-冒泡"), false);
inner.addEventListener("click", () => console.log("内层-捕获"), true);
target.addEventListener("click", () => console.log("目标-冒泡"), false);
target.addEventListener("click", () => console.log("目标-捕获"), true);

console.log("点击按钮查看捕获/冒泡顺序");`,k=`
<div style="display:flex;gap:10px;padding:16px;">
  <button id="startBtn">开始计时</button>
  <button id="stopBtn">停止</button>
  <button id="rebootBtn">重启</button>
  <span id="count" style="line-height:36px;">计数: 0</span>
</div>`,p=`
button { padding: 8px 16px; font-size: 14px; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; background: #f9fafb; }
button:hover { background: #e5e7eb; }`,E=`
function mySetinterval(fn, time) {
  time = time || 1000;
  var run = null;
  function timer() {
    run = setTimeout(function() {
      fn();
      timer();
    }, time);
  }
  timer();
  return {
    stop: function() { clearTimeout(run); run = null; },
    reboot: function() { if (!run) timer(); }
  };
}

var count = 0;
var countDom = document.getElementById("count");
var timer = null;

document.getElementById("startBtn").onclick = function() {
  if (timer) timer.stop();
  count = 0;
  timer = mySetinterval(function() {
    count++;
    countDom.textContent = "计数: " + count;
    console.log("第" + count + "次执行");
  }, 500);
};

document.getElementById("stopBtn").onclick = function() {
  if (timer) { timer.stop(); console.log("已停止"); }
};

document.getElementById("rebootBtn").onclick = function() {
  if (timer) { timer.reboot(); console.log("已重启"); }
};

console.log("点击按钮测试定时器");`;return(f,t)=>{const i=g("LiveCodes");return b(),m("div",null,[t[0]||(t[0]=a('<h1 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h1><blockquote><p>来源：<code>js/基础/6事件.html</code></p></blockquote><h2 id="速查导航" tabindex="-1">速查导航 <a class="header-anchor" href="#速查导航" aria-label="Permalink to &quot;速查导航&quot;">​</a></h2><ul><li><a href="#事件注册方式">事件注册方式</a> — onclick / addEventListener / 行内绑定</li><li><a href="#addeventlistener-参数">addEventListener 参数</a> — 事件名、回调、捕获/冒泡</li><li><a href="#事件捕获与冒泡">事件捕获与冒泡</a> — 传递方向与事件委托</li><li><a href="#settimeout-实现-setinterval">setTimeout 实现 setInterval</a> — 自定义定时器（含 stop / reboot）</li></ul><hr><h2 id="事件注册方式" tabindex="-1">事件注册方式 <a class="header-anchor" href="#事件注册方式" aria-label="Permalink to &quot;事件注册方式&quot;">​</a></h2>',6)),s(i,{html:l,css:o,js:r}),t[1]||(t[1]=a('<h3 id="onclick-属性-点语法" tabindex="-1">onclick 属性（点语法） <a class="header-anchor" href="#onclick-属性-点语法" aria-label="Permalink to &quot;onclick 属性（点语法）&quot;">​</a></h3><p>同一个元素多次赋值 <code>onclick</code>，<strong>后面的会覆盖前面的</strong>，只会执行最后一个。</p><blockquote><p>点击「按钮 (onclick)」：第一次点击弹出&quot;事件-1&quot;，之后再点击只会弹出&quot;事件-2&quot;</p></blockquote><h3 id="addeventlistener" tabindex="-1">addEventListener <a class="header-anchor" href="#addeventlistener" aria-label="Permalink to &quot;addEventListener&quot;">​</a></h3><p>同一个元素可以绑定多个同类型事件，<strong>按绑定顺序依次执行</strong>。</p><blockquote><p>点击「按钮1 (addEventListener)」：会依次弹出&quot;事件-1&quot;和&quot;事件-2&quot;</p></blockquote><h3 id="行内绑定" tabindex="-1">行内绑定 <a class="header-anchor" href="#行内绑定" aria-label="Permalink to &quot;行内绑定&quot;">​</a></h3><p>直接在 HTML 元素上写 <code>onclick=&quot;handleClick()&quot;</code>，本质也是属性绑定。</p><blockquote><p>点击「按钮2 (行内绑定)」：输出 handleClick 日志</p></blockquote><hr><h2 id="addeventlistener-参数" tabindex="-1">addEventListener 参数 <a class="header-anchor" href="#addeventlistener-参数" aria-label="Permalink to &quot;addEventListener 参数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>event</code></td><td>（必需）事件名，支持所有 DOM 事件</td></tr><tr><td><code>function</code></td><td>（必需）事件触发时执行的函数</td></tr><tr><td><code>useCapture</code></td><td>（可选）<code>true</code> 捕获阶段执行，<code>false</code> 冒泡阶段执行，默认 <code>false</code></td></tr></tbody></table>',12)),s(i,{html:d,js:c,height:"400"}),t[2]||(t[2]=e("hr",null,null,-1)),t[3]||(t[3]=e("h2",{id:"事件捕获与冒泡",tabindex:"-1"},[n("事件捕获与冒泡 "),e("a",{class:"header-anchor",href:"#事件捕获与冒泡","aria-label":'Permalink to "事件捕获与冒泡"'},"​")],-1)),t[4]||(t[4]=e("ul",null,[e("li",null,[e("strong",null,"事件捕获"),n("：点击元素后从外到内，一层一层向下传递")]),e("li",null,[e("strong",null,"事件冒泡"),n("：到达目标后，由内向外，一层一层传递")]),e("li",null,[e("strong",null,"事件委托"),n("：利用事件冒泡，在父元素统一处理逻辑")])],-1)),s(i,{html:h,js:u,height:"450"}),t[5]||(t[5]=a(`<blockquote><p>在捕获阶段触发，只需事件绑定时传递 <code>true</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">btn3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fn, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 捕获</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">btn3.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fn, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 冒泡（默认）</span></span></code></pre></div></blockquote><hr><h2 id="事件代理-事件委托" tabindex="-1">事件代理（事件委托） <a class="header-anchor" href="#事件代理-事件委托" aria-label="Permalink to &quot;事件代理（事件委托）&quot;">​</a></h2><ul><li><strong>原理</strong>：利用事件冒泡机制，在父元素上监听事件，通过 <code>e.target</code> 判断实际触发元素</li><li><strong>优点</strong>：减少事件绑定数量，动态添加的子元素也能响应</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> list</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;color-list&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (e.target.nodeName.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLowerCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;li&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e.target.innerHTML)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><hr><h2 id="settimeout-实现-setinterval" tabindex="-1">setTimeout 实现 setInterval <a class="header-anchor" href="#settimeout-实现-setinterval" aria-label="Permalink to &quot;setTimeout 实现 setInterval&quot;">​</a></h2><p>使用 <code>setTimeout</code> 实现 <code>setInterval</code> 的根本原因：</p><ul><li><code>setTimeout</code> 不管上次异步任务是否完成，都会将当前任务推入队列（一次调用一次执行）</li><li><code>setInterval</code> 会在任务推入异步队列时<strong>判断上次异步任务是否被执行</strong></li><li>这导致 <code>setInterval</code> 在做定时轮询时，出现耗时操作会导致异步任务不按期待的时间间隔执行</li><li><code>setTimeout</code> 保证调用的时间间隔是一致的，<code>setInterval</code> 的设定间隔时间<strong>包括了执行回调的时间</strong></li></ul><h3 id="自定义-mysetinterval" tabindex="-1">自定义 mySetinterval <a class="header-anchor" href="#自定义-mysetinterval" aria-label="Permalink to &quot;自定义 mySetinterval&quot;">​</a></h3>`,10)),s(i,{html:k,css:p,js:E,height:"400"}),t[6]||(t[6]=e("blockquote",null,[e("p",null,[e("code",null,"stop()"),n(" 清除定时器，"),e("code",null,"reboot()"),n(" 重新启动。")])],-1))])}}});export{C as __pageData,F as default};
