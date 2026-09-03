import{o as n,a as t,x as l}from"./vue-libs-2907b903.js";const p={class:"van-doc-markdown-body"},d={__name:"README",setup(e,{expose:a}){return a({frontmatter:{}}),(h,s)=>(n(),t("div",p,[...s[0]||(s[0]=[l(`<h1>List 列表</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>List 是一个集成上拉加载，下滑刷新，列表选择，无数据展示的列表组件。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html">// 默认局部滚动，外层需要限制最大高度
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ljf-list</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;getData&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ljf-list</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

// 全局滚动，window可视范围为最大高度，设置isScroll=false
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-list</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;getData&quot;</span> <span class="hljs-attr">:isScroll</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-list</span>&gt;</span>
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">&quot;scss&quot;</span> <span class="hljs-attr">scoped</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.box</span> {
    <span class="hljs-attribute">max-height</span>: <span class="hljs-number">100vh</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">getData</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// 异步更新数据</span>
    <span class="hljs-comment">// setTimeout 仅做示例，真实场景中一般为 ajax 请求</span>
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">relovse</span>) =&gt;</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-keyword">let</span> arr = [];
          <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
          arr.<span class="hljs-title function_">push</span>(i);
      }
        <span class="hljs-title function_">relovse</span>({ <span class="hljs-attr">data</span>: arr, <span class="hljs-attr">payload</span>: <span class="hljs-string">&#39;&#39;</span> });
      }, <span class="hljs-number">1000</span>);
    });
  }
&lt;/script&gt;
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-qing-qiu" tabindex="-1">自定义请求</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">vant-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;changeQuery&quot;</span>&gt;</span>更改query<span class="hljs-tag">&lt;/<span class="hljs-name">vant-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;changeAuto&quot;</span>&gt;</span>是否自动请求<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-list</span> <span class="hljs-attr">:query</span>=<span class="hljs-string">&quot;queryData&quot;</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;getData2&quot;</span> <span class="hljs-attr">:isAuto</span>=<span class="hljs-string">&quot;isAuto&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-list</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
    <span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
    
    <span class="hljs-comment">// query参数更改自动请求接口</span>
    <span class="hljs-keyword">const</span> queryData = <span class="hljs-title function_">ref</span>({ <span class="hljs-attr">id</span>: <span class="hljs-number">1</span> })
    <span class="hljs-keyword">const</span> isAuto = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>)
    <span class="hljs-keyword">const</span> index = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);

    <span class="hljs-keyword">function</span> <span class="hljs-title function_">changeQuery</span>(<span class="hljs-params"></span>) {
        queryData.<span class="hljs-property">value</span> = { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span> };
    }

    <span class="hljs-keyword">function</span> <span class="hljs-title function_">changeAuto</span>(<span class="hljs-params"></span>){
      isAuto.<span class="hljs-property">value</span> = !isAuto.<span class="hljs-property">value</span>;
    }

    <span class="hljs-keyword">function</span> <span class="hljs-title function_">getData2</span>(<span class="hljs-params"></span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">relovse</span>) =&gt;</span> {
            <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
                <span class="hljs-keyword">let</span> arr = [];
                <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
                    index.<span class="hljs-property">value</span> ++;
                    arr.<span class="hljs-title function_">push</span>(index.<span class="hljs-property">value</span>);
                }
                <span class="hljs-title function_">relovse</span>({ <span class="hljs-attr">data</span>: { <span class="hljs-attr">data</span>: { <span class="hljs-attr">records</span>: arr } } });
            }, <span class="hljs-number">1000</span>);
        });
    }
&lt;/script&gt;
</code></pre></div><div class="van-doc-card"><h3 id="wu-shu-ju" tabindex="-1">无数据</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;mini&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getIsList&quot;</span>
  &gt;</span>首次是否有数据&lt;/van-button
&gt;
<span class="hljs-tag">&lt;<span class="hljs-name">ljf-list</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;getData1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:noLength</span>&gt;</span> 数据跑丢了 <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-list</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
    <span class="hljs-keyword">function</span> <span class="hljs-title function_">getData1</span>(<span class="hljs-params"></span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">relovse</span>) =&gt;</span> {
            <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
            <span class="hljs-title function_">relovse</span>({ <span class="hljs-attr">data</span>: { <span class="hljs-attr">data</span>: { <span class="hljs-attr">records</span>: [] } } });
            }, <span class="hljs-number">3000</span>);
        });
    }
&lt;/script&gt;
</code></pre></div><div class="van-doc-card"><h3 id="duo-xuan" tabindex="-1">多选</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-list</span> <span class="hljs-attr">isCheckBox</span> @<span class="hljs-attr">onChecked</span>=<span class="hljs-string">&quot;getChecked&quot;</span> <span class="hljs-attr">:url</span>=<span class="hljs-string">&quot;getData2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 300px;&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;divClick&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">center</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;单元格&#39;+item&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;内容&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;描述信息&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-list</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script setup&gt;
    <span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

    <span class="hljs-keyword">function</span> <span class="hljs-title function_">getChecked</span>(<span class="hljs-params">e</span>) {
        <span class="hljs-title function_">showToast</span>(<span class="hljs-string">\`message: 选中项<span class="hljs-subst">\${<span class="hljs-built_in">JSON</span>.stringify(e)}</span>\`</span>);
    }

    <span class="hljs-keyword">function</span> <span class="hljs-title function_">getData2</span>(<span class="hljs-params"></span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">relovse</span>) =&gt;</span> {
            <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
                <span class="hljs-keyword">let</span> arr = [];
                <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
                    index.<span class="hljs-property">value</span> ++;
                    <span class="hljs-comment">// arr.push({ index: ndex.value });</span>
                    arr.<span class="hljs-title function_">push</span>(index.<span class="hljs-property">value</span>);
                }
                <span class="hljs-title function_">relovse</span>({ <span class="hljs-attr">data</span>: { <span class="hljs-attr">data</span>: { <span class="hljs-attr">records</span>: arr } } });
            }, <span class="hljs-number">1000</span>);
        });
    }
&lt;/script&gt;
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>请求 url，更改时自动刷新 <br></td><td><em>function&lt;<code>primose</code>&gt;</em></td><td>-</td></tr><tr><td>query</td><td>请求参数，更改时自动刷新</td><td><em>object</em></td><td>-</td></tr><tr><td>queryConfig</td><td>配置请求和返回 key：<br>pageKey 覆写请求当前页 page<br>limitKey 覆写请求数 limit<br>dataKey 覆写返回 data<br>totalKey 覆写返回 total</td><td><em>object</em></td><td>pageKey:&#39;pageSize&#39;<br>limitKey:&#39;limit&#39;<br> dataKey:&#39;records&#39;<br>totalKey:&#39;total&#39;</td></tr><tr><td>isAuto</td><td>是否自动请求，为 false 时下拉刷新禁用且优先级最高</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>listStyle</td><td>列表样式，样式覆写</td><td><em>Object</em></td><td>-</td></tr><tr><td>listClass</td><td>列表类名，默认正常排列,list--grid 宫格排列</td><td><em>&quot;&quot;|list--grid</em></td><td>-</td></tr><tr><td>refreshStyle</td><td>无数据，样式覆写</td><td><em>Object</em></td><td>-</td></tr><tr><td>isRefresh</td><td>是否下拉刷新</td><td><em>boolean</em></td><td>-</td></tr><tr><td>isScroll</td><td>是否局部滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>isCheckBox</td><td>是否多选</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>isClearList</td><td>是否在请求之前清除列表</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>checkBoxStyle</td><td>多选框，样式覆写</td><td><em>Object</em></td><td>-</td></tr><tr><td>checkedBefore</td><td>多选之前，返回false阻止勾选</td><td><em>function</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>onChecked</td><td>多选时触发</td><td><em>所选对象数组</em></td></tr><tr><td>getAfter</td><td>请求返回时触发</td><td><em>总列表数组,当前请求数组</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="ref-fang-fa" tabindex="-1">ref 方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td>getList</td><td>重置请求</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>noLength</td><td>无数据插槽,第一次没有数据时展示</td></tr></tbody></table></div>`,13)])]))}};export{d as default};
