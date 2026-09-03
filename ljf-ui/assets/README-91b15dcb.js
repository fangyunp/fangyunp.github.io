import{o as n,a as l,x as t}from"./vue-libs-2907b903.js";const p={class:"van-doc-markdown-body"},r={__name:"README",setup(c,{expose:a}){return a({frontmatter:{}}),(e,s)=>(n(),l("div",p,[...s[0]||(s[0]=[t(`<h1>Form 表单</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Form 表单</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfForm</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-form</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span> @<span class="hljs-attr">failed</span>=<span class="hljs-string">&quot;onFailed&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.fieldValue&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;基础用法&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fieldValue&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.fieldValue1&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;必传&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fieldValue1&quot;</span>
    <span class="hljs-attr">required</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;选择器&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fieldValue2&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.fieldValue2&quot;</span>
    <span class="hljs-attr">isPicker</span>
    <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
    <span class="hljs-attr">required</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;右侧文本&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fieldValue3&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.fieldValue3&quot;</span>
    <span class="hljs-attr">rightText</span>=<span class="hljs-string">&quot;元/天&quot;</span>
  &gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;右侧自定义&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fieldValue4&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.fieldValue4&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;button&quot;</span>
        &gt;</span>自定义&lt;/ljf-button
      &gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;复选框&quot;</span>
    <span class="hljs-attr">label-width</span>=<span class="hljs-string">&quot;60px&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fieldValue5&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.fieldValue5&quot;</span>
    <span class="hljs-attr">isCheckbox</span>
    <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">&quot;checked&quot;</span>
    <span class="hljs-attr">rightText</span>=<span class="hljs-string">&quot;面议&quot;</span>
    <span class="hljs-attr">required</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;上传图片&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">required</span> <span class="hljs-attr">isVertical</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ljf-uploader</span>
        <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;Upload&quot;</span>
        <span class="hljs-attr">:fileList.sync</span>=<span class="hljs-string">&quot;formData.fileList&quot;</span>
        <span class="hljs-attr">:isAuto</span>=<span class="hljs-string">&quot;true&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ljf-uploader</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;文本框&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;fieldValue7&quot;</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;formData.fieldValue7&quot;</span>
    <span class="hljs-attr">show-word-limit</span>
    <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;50&quot;</span>
    <span class="hljs-attr">required</span>
    <span class="hljs-attr">isVertical</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px 16px 0&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
      表单提交
    <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-form</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> formData = ref&lt;any&gt;({});
<span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
<span class="hljs-keyword">const</span> columns = <span class="hljs-title function_">ref</span>([
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;杭州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;宁波&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Ningbo&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;温州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;绍兴&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Shaoxing&#39;</span> },
  { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;湖州&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;Huzhou&#39;</span> },
]);

<span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params">values: any</span>) =&gt; {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;submit&#39;</span>, values);
};

<span class="hljs-keyword">const</span> <span class="hljs-title function_">onFailed</span> = (<span class="hljs-params">errorInfo: any</span>) =&gt; {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;failed&#39;</span>, errorInfo);
};
</code></pre></div><div class="van-doc-card"><h3 id="jie-he-vant-lei-xing-xiang" tabindex="-1">结合 vant 类型项</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;switch&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;开关&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switchChecked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;复选框&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;复选框组&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>复选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>复选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;单选框&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>单选框 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>单选框 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;stepper&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;步进器&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;stepper&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;评分&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;rate&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;slider&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;滑块&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;slider&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> switchChecked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
<span class="hljs-keyword">const</span> checkbox = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
<span class="hljs-keyword">const</span> checkboxGroup = <span class="hljs-title function_">ref</span>([]);
<span class="hljs-keyword">const</span> radio = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
<span class="hljs-keyword">const</span> stepper = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);
<span class="hljs-keyword">const</span> rate = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);
<span class="hljs-keyword">const</span> slider = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);
<span class="hljs-keyword">const</span> fontScale = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;default&#39;</span>);
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>isToast</td><td>是否提示错误信息</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>Form Props</td><td>van-form 原始参数</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td>Form Events</td><td>van-form 原始事件</td><td>-</td></tr></tbody></table></div>`,9)])]))}};export{r as default};
