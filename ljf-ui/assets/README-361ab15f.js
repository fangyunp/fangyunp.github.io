import{o as t,a as n,x as l}from"./vue-libs-2907b903.js";const d={class:"van-doc-markdown-body"},h={__name:"README",setup(e,{expose:a}){return a({frontmatter:{}}),(c,s)=>(t(),n("div",d,[...s[0]||(s[0]=[l(`<h1>Card 卡片</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Card 表单</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfCard</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-card</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cards&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ljf-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> cards1 = <span class="hljs-title function_">ref</span>([
  {
    <span class="hljs-attr">fieldKey</span>: <span class="hljs-string">&#39;123&#39;</span>,
    <span class="hljs-attr">fieldValue</span>: <span class="hljs-string">&#39;123&#39;</span>,
  },
  {
    <span class="hljs-attr">fieldKey</span>: <span class="hljs-string">&#39;123&#39;</span>,
    <span class="hljs-attr">fieldValue</span>: <span class="hljs-string">&#39;123&#39;</span>,
  },
]);
</code></pre></div><div class="van-doc-card"><h3 id="ming-cheng" tabindex="-1">名称</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-card</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cards&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;新增自定义信息&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ljf-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="wen-ben" tabindex="-1">文本</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-card</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cards&quot;</span> <span class="hljs-attr">isTextarea</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ljf-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ding-rong-qi" tabindex="-1">指定容器</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;boxRef&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-card</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cards&quot;</span> <span class="hljs-attr">:teleport</span>=<span class="hljs-string">&quot;boxRef&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ljf-card</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> boxRef = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);
<span class="hljs-keyword">const</span> cards = <span class="hljs-title function_">ref</span>([]);
</code></pre></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> card = {
  <span class="hljs-attr">fieldKey</span>?: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">fieldValue</span>?: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">groupKey</span>?: <span class="hljs-built_in">string</span>;
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> <span class="hljs-title class_">CardArray</span> = <span class="hljs-title class_">Array</span>&lt;card&gt;;
</code></pre></div><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>卡片的值</td><td><em>CardArray</em></td><td><code>[]</code></td></tr><tr><td>maxCount</td><td>最大卡片数量</td><td><em>Number</em></td><td><code>5</code></td></tr><tr><td>keyMaxlength</td><td>卡片的键的最大长度</td><td><em>Number</em></td><td><code>10</code></td></tr><tr><td>valueMaxlength</td><td>卡片的值的最大长度</td><td><em>Number</em></td><td><code>200</code></td></tr><tr><td>teleport</td><td>指定容器</td><td><em>dom</em></td><td>-</td></tr><tr><td>title</td><td>标题</td><td><em>string</em></td><td>-</td></tr><tr><td>addLabel</td><td>按钮文字</td><td><em>string</em></td><td><code>添加</code></td></tr><tr><td>isTextarea</td><td>内容是否是 textarea 样式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>isFilledRequire</td><td>是否填写后校验</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>groupKey</td><td>标识，会在返回对象中添加此字段</td><td><em>string</em></td><td>-</td></tr></tbody></table></div>`,10)])]))}};export{h as default};
