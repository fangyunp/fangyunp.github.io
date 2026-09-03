import{o as n,a as l,x as t}from"./vue-libs-2907b903.js";const p={class:"van-doc-markdown-body"},d={__name:"README",setup(c,{expose:a}){return a({frontmatter:{}}),(h,s)=>(n(),l("div",p,[...s[0]||(s[0]=[t(`<h1>useLinkage</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>为自定义组件赋予联动关系</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> useLinkage <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui/hooks/useLinkage&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Linkage1</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Linkage2</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Linkage3</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;resetLinkage&quot;</span>&gt;</span>重置<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getLinkage&quot;</span>&gt;</span>获取结果<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-comment">//card 为渲染组件需要自己编写，treeData是树形数据，详情见下方</span>
<span class="hljs-keyword">const</span> { <span class="hljs-title class_">Linkage1</span>, <span class="hljs-title class_">Linkage2</span>, <span class="hljs-title class_">Linkage3</span> } = <span class="hljs-title function_">useLinkage</span>(card, treeData);

<span class="hljs-keyword">const</span> <span class="hljs-title function_">resetLinkage</span> = (<span class="hljs-params"></span>) =&gt; {
  <span class="hljs-title function_">reset</span>();
};

<span class="hljs-keyword">const</span> <span class="hljs-title function_">getLinkage</span> = (<span class="hljs-params"></span>) =&gt; {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;modelValueList :&gt;&gt; &#39;</span>, modelValueList);
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;activeList :&gt;&gt; &#39;</span>, activeList);
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;componentListRef :&gt;&gt; &#39;</span>, componentListRef);
};
</code></pre></div><div class="van-doc-card"><h3 id="cardzu-jian-shi-li" tabindex="-1">card组件示例</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick(item)&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">LjfButton</span>
        <span class="hljs-attr">v-if</span>=<span class="hljs-string">&quot;item.id&quot;</span>
        <span class="hljs-attr">:color</span>=<span class="hljs-string">&quot;activeList?.includes(item?.id) ? &#39;red&#39; : &#39;black&#39;&quot;</span>
      &gt;</span>
        {{ item.name }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">LjfButton</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> props = <span class="hljs-title function_">defineProps</span>({
  <span class="hljs-attr">list</span>: <span class="hljs-title class_">Array</span>, <span class="hljs-comment">// 当前展示数据</span>
  <span class="hljs-attr">activeList</span>: <span class="hljs-title class_">Array</span>, <span class="hljs-comment">// 当前选中数据</span>
});
<span class="hljs-comment">// 以下为固定格式，定义要触发update:modelValue，返回当前项</span>
<span class="hljs-keyword">const</span> emit = <span class="hljs-title function_">defineEmits</span>([<span class="hljs-string">&#39;update:modelValue&#39;</span>]);

<span class="hljs-keyword">const</span> <span class="hljs-title function_">handleClick</span> = (<span class="hljs-params">item</span>) =&gt; {
  <span class="hljs-title function_">emit</span>(<span class="hljs-string">&#39;update:modelValue&#39;</span>, item);
};
</code></pre></div><div class="van-doc-card"><h3 id="zhi-ding-ceng-ji" tabindex="-1">指定层级</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Linkage1</span> /&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">Linkage2</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> {
  <span class="hljs-title class_">Linkage</span>
  <span class="hljs-title class_">Linkage</span>
} = <span class="hljs-title function_">useLinkage</span>(card, treeData, {
  <span class="hljs-attr">levels</span>: <span class="hljs-number">2</span>
});
</code></pre></div><div class="van-doc-card"><h3 id="modelcan-shu-chu-shi-hua" tabindex="-1">model参数初始化</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Linkage</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selectedProvince&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Linkage</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selectedCity&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Linkage</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;selectedArea&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;initLinkage&quot;</span>&gt;</span>点击初始化<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
</code></pre><pre><code class="language-js">
<span class="hljs-keyword">const</span> selectedProvince = <span class="hljs-title function_">ref</span>({});
<span class="hljs-keyword">const</span> selectedCity = <span class="hljs-title function_">ref</span>({});
<span class="hljs-keyword">const</span> selectedArea = <span class="hljs-title function_">ref</span>({});

<span class="hljs-keyword">const</span> {
  <span class="hljs-title class_">Linkage1</span>
  <span class="hljs-title class_">Linkage2</span>
  <span class="hljs-title class_">Linkage3</span>
} = <span class="hljs-title function_">useLinkage</span>(card, treeData);

<span class="hljs-keyword">const</span> <span class="hljs-title function_">modelInitLinkage</span> = (<span class="hljs-params"></span>) =&gt; {

  selectedProvince.<span class="hljs-property">value</span> = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;山西&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-number">120000</span>,
  }
  selectedCity.<span class="hljs-property">value</span> = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;山西市&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-number">120100</span>,
  }
  selectedArea.<span class="hljs-property">value</span> = {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;山西河西区&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-number">120103</span>,
  }
};

</code></pre></div><div class="van-doc-card"><h3 id="initcan-shu-chu-shi-hua" tabindex="-1">init参数初始化</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Linkage1</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Linkage2</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Linkage3</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;initLinkage&quot;</span>&gt;</span>点击初始化<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
</code></pre><pre><code class="language-js">
<span class="hljs-keyword">const</span> {
  <span class="hljs-title class_">Linkage1</span>
  <span class="hljs-title class_">Linkage2</span>
  <span class="hljs-title class_">Linkage3</span>
  <span class="hljs-attr">init</span>:initList
} = <span class="hljs-title function_">useLinkage</span>(card, treeData);

<span class="hljs-keyword">const</span> <span class="hljs-title function_">initLinkage</span> = (<span class="hljs-params"></span>) =&gt; {
  <span class="hljs-title function_">initList</span>([<span class="hljs-number">120000</span>, <span class="hljs-number">120100</span>, <span class="hljs-number">120101</span>]);
};

</code></pre></div><div class="van-doc-card"><h3 id="wu-xian-ceng-ji" tabindex="-1">无限层级</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Linkage</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Linkage</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">Linkage</span> } = <span class="hljs-title function_">useLinkage</span>(card, treeData, {
  <span class="hljs-attr">isInfinite</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="wu-xian-ceng-ji-zui-da-ceng-shu" tabindex="-1">无限层级-最大层数</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">LinkageMax3</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">LinkageMax3</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> { <span class="hljs-title class_">Linkage</span>: <span class="hljs-title class_">LinkageMax3</span> } = <span class="hljs-title function_">useLinkage</span>(card, treeData, {
  <span class="hljs-attr">isInfinite</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">maxLevels</span>: <span class="hljs-number">3</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="shu-xing-shu-ju" tabindex="-1">树形数据</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> treeData = [
  {
    <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;110000&#39;</span>,
    <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;北京&#39;</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;北京&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-number">110000</span>,
  },
  {
    <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120000&#39;</span>,
    <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;山西&#39;</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;山西&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-number">120000</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120100&#39;</span>,
        <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;山西市&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;山西市&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">120100</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120101&#39;</span>,
            <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;山西和平区&#39;</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;山西和平区&#39;</span>,
            <span class="hljs-attr">id</span>: <span class="hljs-number">120101</span>,
          },
          {
            <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120102&#39;</span>,
            <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;山西河东区&#39;</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;山西河东区&#39;</span>,
            <span class="hljs-attr">id</span>: <span class="hljs-number">120102</span>,
          },
          {
            <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120103&#39;</span>,
            <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;山西河西区&#39;</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;山西河西区&#39;</span>,
            <span class="hljs-attr">id</span>: <span class="hljs-number">120103</span>,
          },
        ],
      },
    ],
  },
  {
    <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;1200001&#39;</span>,
    <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;天津&#39;</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;天津&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-number">1200001</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120100111&#39;</span>,
        <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;天津1&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;天津1&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">1201001111</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120101&#39;</span>,
            <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;天津2&#39;</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;天津2&#39;</span>,
            <span class="hljs-attr">id</span>: <span class="hljs-number">12010112312</span>,
            <span class="hljs-attr">children</span>: [
              {
                <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120100111111&#39;</span>,
                <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;天津3&#39;</span>,
                <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;天津3&#39;</span>,
                <span class="hljs-attr">id</span>: <span class="hljs-number">120100111111</span>,
                <span class="hljs-attr">children</span>: [
                  {
                    <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;12010122222&#39;</span>,
                    <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;天津4&#39;</span>,
                    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;天津4&#39;</span>,
                    <span class="hljs-attr">id</span>: <span class="hljs-number">12010122222</span>,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="ru-can" tabindex="-1">入参</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>card</td><td>基础组件</td><td><code>component</code></td><td>-</td></tr><tr><td>treeData</td><td>树形数据</td><td><code>Array</code></td><td>-</td></tr><tr><td>options</td><td>配置对象</td><td><code>Object</code></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="options" tabindex="-1">options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>levels</td><td>指定层级</td><td><code>number</code></td><td>3</td></tr><tr><td>isInfinite</td><td>是否无限层级</td><td><code>boolean</code></td><td>false</td></tr><tr><td>maxLevels</td><td>最大层级</td><td><code>number</code></td><td>99</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="fan-hui-zhi" tabindex="-1">返回值</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>Linkage</td><td>返回渲染组件</td><td><code>component</code></td><td>-</td></tr><tr><td>reset</td><td>重置联动，清空所有选中项</td><td><code>Function</code></td><td>-</td></tr><tr><td>initList</td><td>使用初始值初始化联动</td><td><code>Function</code></td><td>-</td></tr><tr><td>modelValueList</td><td>当前联动选中项的值列表</td><td><code>Array</code></td><td>-</td></tr><tr><td>activeList</td><td>当前联动激活状态的组件列表</td><td><code>Array</code></td><td>-</td></tr><tr><td>componentListRef</td><td>所有联动组件的引用列表</td><td><code>Array</code></td><td>-</td></tr></tbody></table></div>`,16)])]))}};export{d as default};
