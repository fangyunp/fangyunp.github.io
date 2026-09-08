import{o as n,a as t,x as l}from"./vue-libs-2907b903.js";const p={class:"van-doc-markdown-body"},h={__name:"README",setup(e,{expose:a}){return a({frontmatter:{}}),(d,s)=>(n(),t("div",p,[...s[0]||(s[0]=[l(`<h1>Field 输入框</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Field 常用业务功能输入框</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfField</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;基础用法&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="bi-chuan" tabindex="-1">必传</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;必传&quot;</span> <span class="hljs-attr">required</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-qi" tabindex="-1">选择器</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;选择器&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span> <span class="hljs-attr">is-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;cityList&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> cityList = <span class="hljs-title function_">ref</span>([
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Ningbo&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;绍兴&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Shaoxing&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;湖州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Huzhou&#39;</span> },
]);
</code></pre></div><div class="van-doc-card"><h3 id="ji-lian-xuan-ze-qi" tabindex="-1">级联选择器</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;选择器&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>
  <span class="hljs-attr">is-picker</span>
  <span class="hljs-attr">is-linkage</span>
  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;cityList&quot;</span>
  <span class="hljs-attr">v-model:real-value</span>=<span class="hljs-string">&quot;realValue&quot;</span>
  <span class="hljs-attr">:picker-config</span>=<span class="hljs-string">&quot;{
          &#39;columns-field-names&#39;: {
            text: &#39;name&#39;,
            value: &#39;no&#39;,
            children: &#39;children&#39;,
          }
        }&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> cityList = <span class="hljs-title function_">ref</span>([
  {
    <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;110000&#39;</span>,
    <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;北京&#39;</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;北京&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-number">110000</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;110100&#39;</span>,
        <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;北京市&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;北京市&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">110100</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;110102&#39;</span>,
            <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;西城&#39;</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;西城区&#39;</span>,
            <span class="hljs-attr">id</span>: <span class="hljs-number">110102</span>,
          },
          {
            <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;110105&#39;</span>,
            <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;朝阳区&#39;</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;朝阳区&#39;</span>,
            <span class="hljs-attr">id</span>: <span class="hljs-number">110105</span>,
          },
        ],
      },
    ],
  },
  {
    <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120000&#39;</span>,
    <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;天津&#39;</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;天津&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-number">120000</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120100&#39;</span>,
        <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;天津市&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;天津市&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">120100</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120101&#39;</span>,
            <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;和平区&#39;</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;和平区&#39;</span>,
            <span class="hljs-attr">id</span>: <span class="hljs-number">120101</span>,
          },
          {
            <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120102&#39;</span>,
            <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;河东区&#39;</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;河东区&#39;</span>,
            <span class="hljs-attr">id</span>: <span class="hljs-number">120102</span>,
          },
          {
            <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120103&#39;</span>,
            <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;河西区&#39;</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;河西区&#39;</span>,
            <span class="hljs-attr">id</span>: <span class="hljs-number">120103</span>,
          },
        ],
      },
    ],
  },
  {
    <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;1200001&#39;</span>,
    <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;天津1&#39;</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;天津1&#39;</span>,
    <span class="hljs-attr">id</span>: <span class="hljs-number">120000</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">no</span>: <span class="hljs-string">&#39;120100&#39;</span>,
        <span class="hljs-attr">simpleName</span>: <span class="hljs-string">&#39;天津市1&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;天津市1&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">1201001</span>,
        <span class="hljs-attr">children</span>: [],
      },
    ],
  },
]);
</code></pre></div><div class="van-doc-card"><h3 id="xuan-ze-qi-url" tabindex="-1">选择器url</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;选择器url&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span> <span class="hljs-attr">is-picker</span> <span class="hljs-attr">:api-url</span>=<span class="hljs-string">&quot;apiUrl&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> <span class="hljs-title function_">apiUrl</span> = (<span class="hljs-params"></span>) =&gt; {
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
    <span class="hljs-title function_">resolve</span>({
      <span class="hljs-attr">data</span>: [
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Ningbo&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;绍兴&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Shaoxing&#39;</span> },
        { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;湖州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Huzhou&#39;</span> },
      ],
      <span class="hljs-attr">payload</span>: <span class="hljs-string">&#39;&#39;</span>,
    });
  });
};
</code></pre></div><div class="van-doc-card"><h3 id="shi-jian-xuan-ze-qi" tabindex="-1">时间选择器</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;时间选择器&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span> <span class="hljs-attr">is-date-time-picker</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="you-ce-wen-ben" tabindex="-1">右侧文本</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;右侧文本&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span> <span class="hljs-attr">rightText</span>=<span class="hljs-string">&quot;元/天&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="you-ce-zi-ding-yi" tabindex="-1">右侧自定义</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;右侧自定义&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>自定义<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="tian-jia" tabindex="-1">添加</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;右侧添加&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span> <span class="hljs-attr">slotType</span>=<span class="hljs-string">&quot;add&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="fu-xuan-kuang" tabindex="-1">复选框</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;复选框&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span> <span class="hljs-attr">isCheckbox</span> <span class="hljs-attr">rightText</span>=<span class="hljs-string">&quot;面议&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="wen-ben-kuang" tabindex="-1">文本框</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本框&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue6&quot;</span>
  <span class="hljs-attr">show-word-limit</span>
  <span class="hljs-attr">isVertical</span>
  <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;50&quot;</span>
/&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>当前输入的值</td><td><em>number | string</em></td><td>-</td></tr><tr><td>required</td><td>是否必传，调整红星在右侧</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>isPicker</td><td>是否选择器选择</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>columns</td><td>选择器数组</td><td><em>array</em></td><td><code>false</code></td></tr><tr><td>showPickerBefore</td><td>点击选择器前的回调</td><td><em>Function</em></td><td>-</td></tr><tr><td>rightText</td><td>右侧按钮文本</td><td><em>String</em></td><td>-</td></tr><tr><td>isCheckbox</td><td>是否是多选框</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>isPicker</td><td>是否是选择器</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>v-model:checked</td><td>是否选中</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>isVertical</td><td>是否是垂直方向布局</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>isDateTimePicker</td><td>是否是日期时间选择器</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>pickerConfig</td><td>选择器的配置项</td><td><em>Object</em></td><td><code>{}</code></td></tr><tr><td>slotType</td><td>固定插槽类型，可选：add</td><td><em>String</em></td><td>-</td></tr><tr><td>cardConfig</td><td>card 组件配置项</td><td><em>Object</em></td><td><code>{}</code></td></tr><tr><td>url</td><td>选择器接口</td><td><em>function&lt;<code>promise</code>&gt;</em></td><td><code>{}</code></td></tr><tr><td>query</td><td>接口请求的参数</td><td><em>Object</em></td><td>-</td></tr><tr><td>isLinkage</td><td>是否级联</td><td><em>Boolean</em></td><td><code>false</code></td></tr><tr><td>v-model:realValue</td><td>真实值</td><td><em>[Object, String]</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>messageType</td><td>消息类型，可选：uploader</td><td><em>String</em></td><td><code>&#39;&#39;</code></td></tr><tr><td>Field Props</td><td>van-field 原始参数</td><td>-</td><td>-</td></tr><tr><td>isFilledRequire</td><td>是否填写后校验</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>Field Events</td><td>vanfield原始事件</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>right</td><td>右侧插槽</td></tr></tbody></table></div>`,19)])]))}};export{h as default};
