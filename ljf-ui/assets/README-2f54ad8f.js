import{o as n,a as t,x as l}from"./vue-libs-2907b903.js";const p={class:"van-doc-markdown-body"},o={__name:"README",setup(c,{expose:a}){return a({frontmatter:{}}),(e,s)=>(n(),t("div",p,[...s[0]||(s[0]=[l(`<h1>FooterBar 底部导航</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>FooterBar 是一个兼容按钮的底部导航</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfFooterBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-footer-bar</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span> <span class="hljs-attr">:isFixed</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-footer-bar</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">const</span> radio = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;default&#39;</span>)
<span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;shop&#39;</span> },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;inquiry&#39;</span> },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;follow&#39;</span>, <span class="hljs-attr">status</span>: <span class="hljs-number">1</span> },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;follow&#39;</span>, <span class="hljs-attr">status</span>: <span class="hljs-number">0</span> },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;bargaining&#39;</span> }
])
&lt;/script&gt;
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-chuan-ru" tabindex="-1">自定义传入</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-footer-bar</span> 
  <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list1&quot;</span> 
  <span class="hljs-attr">:isFixed</span>=<span class="hljs-string">&quot;false&quot;</span> 
  @<span class="hljs-attr">follow</span>=<span class="hljs-string">&quot;follow&quot;</span> 
  @<span class="hljs-attr">myClick</span>=<span class="hljs-string">&quot;myClick&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-footer-bar</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">const</span> list1 = <span class="hljs-title function_">ref</span>([
  {
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;shop&#39;</span>,
    <span class="hljs-comment">// 覆盖默认icon</span>
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://shigongbang.obs.cn-east-3.myhuaweicloud.com/4B9AL6xDME62Hx20sa2lo.png&#39;</span>,
  },
  {
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;shop&#39;</span>,
    <span class="hljs-comment">// 覆盖默认颜色</span>
    <span class="hljs-attr">color</span>:<span class="hljs-string">&#39;rgb(239, 64, 51)&#39;</span>,
  },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;myKey&#39;</span>,<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;自己定义&#39;</span>,<span class="hljs-attr">icon</span>:<span class="hljs-string">&#39;https://shigongbang.obs.cn-east-3.myhuaweicloud.com/4B9AL6xDME62Hx20sa2lo.png&#39;</span> },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;follow&#39;</span>,<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;可点击&#39;</span>,<span class="hljs-attr">status</span>: <span class="hljs-number">0</span> },
  {
    <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;myClick&#39;</span>,<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;可点击0&#39;</span>, <span class="hljs-attr">status</span>:<span class="hljs-number">0</span>, 
    <span class="hljs-attr">icon</span>: [
      <span class="hljs-string">&#39;https://shigongbang.obs.cn-east-3.myhuaweicloud.com/4B9AL6xDME62Hx20sa2lo.png&#39;</span>,  
      <span class="hljs-string">&#39;https://shigongbang.obs.cn-east-3.myhuaweicloud.com/app/2022/04/1650787611506.png&#39;</span>,
      <span class="hljs-string">&#39;https://shigongbang.obs.cn-east-3.myhuaweicloud.com/app/2022/04/1649232203899.png&#39;</span>,
    ],
    <span class="hljs-attr">color</span>:[
      <span class="hljs-string">&#39;#000&#39;</span>,<span class="hljs-string">&#39;blue&#39;</span>,<span class="hljs-string">&#39;#EF4033&#39;</span>
    ]
  }
]);

<span class="hljs-keyword">function</span> <span class="hljs-title function_">follow</span>(<span class="hljs-params">e</span>){
  e.<span class="hljs-property">status</span> = e.<span class="hljs-property">status</span> ? <span class="hljs-number">0</span> : <span class="hljs-number">1</span>;
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">myClick</span>(<span class="hljs-params">e</span>) {
  e.<span class="hljs-property">status</span> ++;
  e.<span class="hljs-property">status</span> &gt; <span class="hljs-number">2</span> &amp;&amp; e.<span class="hljs-property">status</span> = <span class="hljs-number">0</span> 
  e.<span class="hljs-property">name</span> = <span class="hljs-string">&quot;可点击&quot;</span> + e.<span class="hljs-property">status</span>
}
&lt;/script&gt;
</code></pre></div><div class="van-doc-card"><h3 id="gu-ding-dan-chuang" tabindex="-1">固定弹窗</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-footer-bar</span> 
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> 
  <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list2&quot;</span> 
  <span class="hljs-attr">:isFixed</span>=<span class="hljs-string">&quot;false&quot;</span> 
  @<span class="hljs-attr">downConfirm</span>=<span class="hljs-string">&quot;confirm&quot;</span> 
  @<span class="hljs-attr">loginConfirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-footer-bar</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
<span class="hljs-keyword">const</span> list2 = <span class="hljs-title function_">ref</span>([
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;shop&#39;</span>,<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;跳转&#39;</span>, <span class="hljs-attr">url</span>:<span class="hljs-string">&#39;https://vant-contrib.gitee.io/vant/#/zh-CN/home&#39;</span>},
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;inquiry&#39;</span>,<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;开发&#39;</span> ,<span class="hljs-attr">dev</span>:<span class="hljs-literal">true</span>},
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;follow&#39;</span>,<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;登录&#39;</span> ,<span class="hljs-attr">login</span>:<span class="hljs-literal">true</span> },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;bargaining&#39;</span>,<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;下载&#39;</span> ,<span class="hljs-attr">down</span>:<span class="hljs-literal">true</span> },
])

<span class="hljs-keyword">function</span> <span class="hljs-title function_">confirm</span>(<span class="hljs-params"></span>){
    show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
}
&lt;/script&gt;
</code></pre></div><div class="van-doc-card"><h3 id="you-ce-cha-cao" tabindex="-1">右侧插槽</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-footer-bar</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;list&quot;</span> <span class="hljs-attr">:isFixed</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button-group</span> <span class="hljs-attr">groupType</span>=<span class="hljs-string">&quot;footer&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>设置<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>同意报价<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-footer-bar</span>&gt;</span>
</code></pre><pre><code class="language-js">
&lt;script setup&gt;
<span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">LjfButton</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">LjfButtonGroup</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;

<span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;shop&#39;</span> },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;inquiry&#39;</span> },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;follow&#39;</span>, <span class="hljs-attr">status</span>: <span class="hljs-number">1</span> },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;follow&#39;</span>, <span class="hljs-attr">status</span>: <span class="hljs-number">0</span> },
  { <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;bargaining&#39;</span> },
])
&lt;/script&gt;
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>固定弹窗的显示/隐藏</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>fixed</td><td>是否固定在底部</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>list</td><td>展示数据</td><td><em>list[]</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="list-shu-ju-jie-gou" tabindex="-1">list 数据结构</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>唯一标识</td><td><em>string</em></td><td>-</td></tr><tr><td>name</td><td>名称展示</td><td><em>string | array</em></td><td>-</td></tr><tr><td>icon</td><td>图片展示</td><td><em>string | array</em></td><td>-</td></tr><tr><td>status</td><td>name 和 icon 为数组时下标，例：为 0 时 name 展示 name[0]</td><td><em>number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>key</td><td>对应 list 里的 key 值，点击触发事件同名,item 当前点击项，index 下标位置</td><td><em>(item:object,index:number)</em></td></tr><tr><td>downConfirm</td><td>登录确认，绑定后需手动处理隐藏</td><td>-</td></tr><tr><td>loginConfirm</td><td>下载确认，绑定后需手动处理隐藏</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>右侧插槽内容</td></tr></tbody></table></div>`,13)])]))}};export{o as default};
