import{o as n,a as t,x as l}from"./vue-libs-2907b903.js";const p={class:"van-doc-markdown-body"},h={__name:"README",setup(o,{expose:a}){return a({frontmatter:{}}),(e,s)=>(n(),t("div",p,[...s[0]||(s[0]=[l(`<h1>ModalBox 固定样式弹窗</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>ModalBox 是固定样式弹窗</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfModalBox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showModel(&#39;down&#39;)&quot;</span> <span class="hljs-attr">:font-size-scale</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span>下载<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showModel(&#39;login&#39;)&quot;</span> <span class="hljs-attr">:font-size-scale</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span>登录<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showModel(&#39;dev&#39;)&quot;</span> <span class="hljs-attr">:font-size-scale</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span>开发中<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ljf-modal-box</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;type&quot;</span> <span class="hljs-attr">:font-size-scale</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ljf-modal-box</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
  <span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfButton</span>, <span class="hljs-title class_">LjfModalBox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;

  <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> type = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;dev&#39;</span>)
  <span class="hljs-keyword">const</span> radio = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;default&#39;</span>)

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">showModel</span>(<span class="hljs-params">downLoadYype</span>) {
    type.<span class="hljs-property">value</span> = downLoadYype;
    show.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
  }
  
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">downConfirm1</span>(<span class="hljs-params"></span>) {
    show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">loginConfirm1</span>(<span class="hljs-params">value</span>) {
    show.<span class="hljs-property">value</span> = value;
  }
&lt;/script&gt;
</code></pre></div><div class="van-doc-card"><h3 id="que-ren-lan-jie" tabindex="-1">确认拦截</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showModel1(&#39;down&#39;)&quot;</span> <span class="hljs-attr">:font-size-scale</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span>下载2秒后关<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showModel1(&#39;login&#39;)&quot;</span> <span class="hljs-attr">:font-size-scale</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span>登录2秒后关<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-modal-box</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show1&quot;</span> <span class="hljs-attr">:type</span>=<span class="hljs-string">&quot;type1&quot;</span> @<span class="hljs-attr">downConfirm</span>=<span class="hljs-string">&quot;downConfirm&quot;</span> @<span class="hljs-attr">loginConfirm</span>=<span class="hljs-string">&quot;loginConfirm&quot;</span> <span class="hljs-attr">:font-size-scale</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ljf-modal-box</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
  <span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
  <span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfButton</span>, <span class="hljs-title class_">LjfModalBox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;

  <span class="hljs-keyword">const</span> show1 = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> type1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>)

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">showModel1</span>(<span class="hljs-params">downLoadYype</span>) {
    type1.<span class="hljs-property">value</span> = downLoadYype;
    show1.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">downConfirm</span>(<span class="hljs-params"></span>) {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      show1.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    }, <span class="hljs-number">2000</span>);
  }

  <span class="hljs-keyword">function</span> <span class="hljs-title function_">loginConfirm</span>(<span class="hljs-params">value</span>) {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        show1.<span class="hljs-property">value</span> = value;
    }, <span class="hljs-number">2000</span>);
  }
&lt;/script&gt;
  
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>是否弹出</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>type</td><td>down(下载),login(登录),dev(开发)</td><td><em>string</em></td><td>-</td></tr><tr><td>toastConfig</td><td>type为dev时，toast配置，同vant-toast</td><td><em>object</em></td><td>-</td></tr><tr><td>fontSizeScale</td><td>是否放大字体 (default:原始大小 medium:1.2倍 large:1.4倍)</td><td><em>string</em></td><td><code>default</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>downConfirm</td><td>下载确认</td><td>-</td></tr><tr><td>loginConfirm</td><td>登录确认</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td></td><td></td></tr></tbody></table></div>`,10)])]))}};export{h as default};
