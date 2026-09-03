import{o as n,a as t,x as l}from"./vue-libs-2907b903.js";const p={class:"van-doc-markdown-body"},d={__name:"README",setup(c,{expose:a}){return a({frontmatter:{}}),(o,s)=>(n(),t("div",p,[...s[0]||(s[0]=[l(`<h1>DropdownMenu 菜单搜索</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>DropdownMenu 是一个下拉搜索组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfDropdownMenu</span>, <span class="hljs-title class_">LjfDropdownItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;全部&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;默认&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(-<span class="hljs-number">1</span>);
<span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(-<span class="hljs-number">1</span>);
<span class="hljs-keyword">const</span> option1 = [
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;全部&#39;</span>, <span class="hljs-attr">value</span>: -<span class="hljs-number">1</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;新款商品&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;活动商品1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;活动商品2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;活动商品4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">4</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;活动商品5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">5</span> },
];
<span class="hljs-keyword">const</span> option2 = [
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;默认&#39;</span>, <span class="hljs-attr">value</span>: -<span class="hljs-number">1</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;好评排序b&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;b&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;销量排序c&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;c&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;销量排序d&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;d&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;销量排序e&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;e&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;销量排序f&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;f&#39;</span> },
];
</code></pre></div><div class="van-doc-card"><h3 id="tabfeng-ge" tabindex="-1">tab风格</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-menu</span> <span class="hljs-attr">is-tab</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;全部&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;默认&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="jian-tou-feng-ge" tabindex="-1">箭头风格</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- 箭头风格只会渲染首个item --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-menu</span> <span class="hljs-attr">is-right</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;全部&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> option1 = [
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;全部&#39;</span>, <span class="hljs-attr">value</span>: -<span class="hljs-number">1</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;新款商品&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">1</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;活动商品1&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">2</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;活动商品2&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">3</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;活动商品4&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">4</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;活动商品5&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-number">5</span> },
];
</code></pre></div><h2 id="dropdown-item" tabindex="-1">dropdown-item</h2><div class="van-doc-card"><h3 id="btnfeng-ge" tabindex="-1">btn风格</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">is-btn</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;全部&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">is-btn</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;默认&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="btnfeng-ge-kong-zhi-lie-shu" tabindex="-1">btn风格-控制列数</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span>
    <span class="hljs-attr">is-btn</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span>
    <span class="hljs-attr">grid</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;全部&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span>
    <span class="hljs-attr">is-btn</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span>
    <span class="hljs-attr">grid</span>=<span class="hljs-string">&quot;4&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;默认&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi" tabindex="-1">自定义</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;titleRef&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;{ update, active }&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;点击选择&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick(update)&quot;</span>&gt;</span>{{ active === 2 ? &#39;选中&#39; : &#39;未选中&#39; }}<span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-dropdown-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;默认&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-dropdown-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-btnfeng-ge" tabindex="-1">自定义-btn风格</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">demo-block</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;自定义-btn风格&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span> <span class="hljs-attr">is-btn</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option1&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;全部&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;{ update, active }&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;点击选择&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick1(update)&quot;</span>&gt;</span>{{ active === 2 ? &#39;选中&#39; : &#39;未选中&#39; }}<span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ljf-dropdown-item</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span> <span class="hljs-attr">is-btn</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;option2&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;默认&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-dropdown-item</span>&gt;</span> &lt;/ljf-dropdown-menu
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">demo-block</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3></div><div class="van-doc-card"><h3 id="dropdownmenuprops" tabindex="-1">DropdownMenuProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>is-tab</td><td>是否为标签页样式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>is-right</td><td>是否为右侧箭头样式</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="dropdownitemprops" tabindex="-1">DropdownItemProps</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>选中项的值</td><td><code>number</code></td><td>\`\`</td></tr><tr><td>is-btn</td><td>是否为按钮风格</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>grid</td><td>控制列数</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>options</td><td>选项列表</td><td><code>Array&lt;object&gt;</code></td><td><code>[]</code></td></tr><tr><td>title</td><td>选项的标题</td><td><code>string</code></td><td><code>&#39;&#39;</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>菜单选项有变化时触发</td><td><em>event: changeData</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>默认插槽</td></tr></tbody></table></div>`,18)])]))}};export{d as default};
