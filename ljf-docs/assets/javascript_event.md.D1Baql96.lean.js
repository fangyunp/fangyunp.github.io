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

console.log("点击按钮测试定时器");`;return(f,t)=>{const i=g("LiveCodes");return b(),m("div",null,[t[0]||(t[0]=a("",6)),s(i,{html:l,css:o,js:r}),t[1]||(t[1]=a("",12)),s(i,{html:d,js:c,height:"400"}),t[2]||(t[2]=e("hr",null,null,-1)),t[3]||(t[3]=e("h2",{id:"事件捕获与冒泡",tabindex:"-1"},[n("事件捕获与冒泡 "),e("a",{class:"header-anchor",href:"#事件捕获与冒泡","aria-label":'Permalink to "事件捕获与冒泡"'},"​")],-1)),t[4]||(t[4]=e("ul",null,[e("li",null,[e("strong",null,"事件捕获"),n("：点击元素后从外到内，一层一层向下传递")]),e("li",null,[e("strong",null,"事件冒泡"),n("：到达目标后，由内向外，一层一层传递")]),e("li",null,[e("strong",null,"事件委托"),n("：利用事件冒泡，在父元素统一处理逻辑")])],-1)),s(i,{html:h,js:u,height:"450"}),t[5]||(t[5]=a("",10)),s(i,{html:k,css:p,js:E,height:"400"}),t[6]||(t[6]=e("blockquote",null,[e("p",null,[e("code",null,"stop()"),n(" 清除定时器，"),e("code",null,"reboot()"),n(" 重新启动。")])],-1))])}}});export{C as __pageData,F as default};
