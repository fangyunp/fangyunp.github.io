import{o as t,a as n,x as e}from"./vue-libs-2907b903.js";const l={class:"van-doc-markdown-body"},r={__name:"README",setup(c,{expose:a}){return a({frontmatter:{}}),(p,s)=>(t(),n("div",l,[...s[0]||(s[0]=[e(`<h1>Checked 选中组件</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Checked 用于在不同状态下展示选择和未选择的样式</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfChecked</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="wei-xuan-ze" tabindex="-1">未选择</h3><pre><code class="language-js">  &lt;<span class="hljs-title class_">LjfChecked</span> :active=<span class="hljs-string">&quot;activeDisabled&quot;</span> :active-list=<span class="hljs-string">&quot;activeList&quot;</span>&gt;
    默认未选择
  &lt;/<span class="hljs-title class_">LjfChecked</span>&gt;
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> activeDisabled = -<span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> activeList = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>];
</code></pre><pre><code class="language-js">  &lt;<span class="hljs-title class_">LjfChecked</span> base-type=<span class="hljs-string">&quot;card&quot;</span> :active=<span class="hljs-string">&quot;activeDisabled&quot;</span> :active-list=<span class="hljs-string">&quot;activeList&quot;</span>&gt;
   卡片未选择
  &lt;/<span class="hljs-title class_">LjfChecked</span>&gt;
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> activeDisabled = -<span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> activeList = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>];
</code></pre></div><div class="van-doc-card"><h3 id="yi-xuan-ze" tabindex="-1">已选择</h3><pre><code class="language-js">  &lt;<span class="hljs-title class_">LjfChecked</span>  :active=<span class="hljs-string">&quot;active&quot;</span> :active-list=<span class="hljs-string">&quot;activeList&quot;</span>&gt;
    默认已选择
  &lt;/<span class="hljs-title class_">LjfChecked</span>&gt;
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> active = <span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> activeList = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>];
</code></pre><pre><code class="language-js">  &lt;<span class="hljs-title class_">LjfChecked</span>  type=<span class="hljs-string">&quot;right&quot;</span> :active=<span class="hljs-string">&quot;active&quot;</span> :active-list=<span class="hljs-string">&quot;activeList&quot;</span>&gt;
    加粗带对钩
  &lt;/<span class="hljs-title class_">LjfChecked</span>&gt;
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> active = <span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> activeList = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>];
</code></pre><pre><code class="language-js">  &lt;<span class="hljs-title class_">LjfChecked</span>  type=<span class="hljs-string">&quot;right--red&quot;</span> :active=<span class="hljs-string">&quot;active&quot;</span> :active-list=<span class="hljs-string">&quot;activeList&quot;</span>&gt;
          带对钩
      &lt;/<span class="hljs-title class_">LjfChecked</span>&gt;
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> active = <span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> activeList = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">4</span>];
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>控制激活状态</td><td><code>number</code></td><td>-</td></tr><tr><td>active-list</td><td>多选框的选择项列表</td><td><code>Array&lt;number&gt;</code></td><td><code>[]</code></td></tr><tr><td>type</td><td>多选框的类型</td><td><code>string</code></td><td>-</td></tr><tr><td>base-type</td><td>多选框的基本样式类型</td><td><code>number</code></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="shi-jian" tabindex="-1">事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>-</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="cha-cao" tabindex="-1">插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>-</td><td>-</td></tr></tbody></table></div>`,10)])]))}};export{r as default};
