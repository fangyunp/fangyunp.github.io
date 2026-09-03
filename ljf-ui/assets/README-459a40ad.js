import{o as n,a as t,x as l}from"./vue-libs-2907b903.js";const p={class:"van-doc-markdown-body"},r={__name:"README",setup(e,{expose:a}){return a({frontmatter:{}}),(c,s)=>(n(),t("div",p,[...s[0]||(s[0]=[l(`<h1>Tab 标签页</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>Tab 是一个自动计算红线，防止同一标签页多次触发，提供默认无数据展示组件</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">LjfTab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;ljf-ui&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-tab</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;headerList&quot;</span> @<span class="hljs-attr">tabChange</span>=<span class="hljs-string">&quot;tabchange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:title</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ item.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-tab</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> headerList = <span class="hljs-title function_">ref</span>([
  {
    <span class="hljs-attr">id</span>: -<span class="hljs-number">1</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;商标交易-1&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>,
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;版权交易1&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;版权交易2&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;版权交易3&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;版权交易4&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;版权交易5&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
]);
<span class="hljs-keyword">const</span> <span class="hljs-title function_">tabchange</span> = (<span class="hljs-params">item</span>) =&gt; {
  <span class="hljs-title function_">showToast</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;当前tab:&#39;</span> + <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(item) });
};
</code></pre><!-- ### 右侧下拉自动

\`\`\`html
&lt;ljf-tab :list=&quot;headerList&quot; isRightSearch&gt;
  &lt;template v-slot:title=&quot;{ item }&quot;&gt;
    &lt;div&gt;{{ item.name }}&lt;/div&gt;
  &lt;/template&gt;
&lt;/ljf-tab&gt;
\`\`\`

\`\`\`js
export default {
  data() {
    return {
      headerList: [
        {
          id: -1,
          name: &#39;商标交易-1&#39;,
          value: 0,
        },
        {
          id: 1,
          name: &#39;版权交易1&#39;,
          value: 1,
        },
        {
          id: 2,
          name: &#39;版权交易2&#39;,
          value: 1,
        },
        {
          id: 3,
          name: &#39;版权交易3&#39;,
          value: 1,
        },
        {
          id: 4,
          name: &#39;版权交易4&#39;,
          value: 1,
        },
        {
          id: 5,
          name: &#39;版权交易5&#39;,
          value: 1,
        },
      ],
    };
  },
};
\`\`\` --><!-- ### 右侧下拉自定义

\`\`\`html
&lt;ljf-tab
  ref=&quot;tabAuto&quot;
  :list=&quot;headerList&quot;
  v-model=&quot;tabIndex1&quot;
  isRightSearch
  :showList=&quot;showList&quot;
  @searchChange=&quot;searchChange&quot;
  @tabChange=&quot;tabchange1&quot;
  @closedDropdown=&quot;closedDropdown&quot;
&gt;
  &lt;template v-slot:title=&quot;{ item }&quot;&gt;
    &lt;div&gt;{{ item.name }}&lt;/div&gt;
  &lt;/template&gt;
&lt;/ljf-tab&gt;
\`\`\`

\`\`\`js
  export default {
    data() {
      return {
      tabIndex1:0,//初始第二项
    },
    methods: {
      closedDropdown(e) {
        console.log(&#39;tab关闭&#39;, e);
      },
      searchChange(e) {
        console.log(&#39;search&#39;, e);
      },
      tabchange1(item, isChange) {
      if (isChange) {
        this.showList = [
          {
            key: &#39;tabSearch&#39;,
            list: [
              {
                id: -1,
                name: item.name,
              },
              {
                id: 1,
                name: &#39;自定义&#39;,
              },
            ],
          },
        ];
        this.$nextTick(() =&gt; {
          this.$refs.tabAuto.$refs.dropdownMenu.initFromData(&#39;tabSearch&#39;);
          this.$refs.tabAuto.openDropdownItem(&#39;tabSearch&#39;, true);
        });
        return;
      }
      this.$nextTick(() =&gt; {
        this.$refs[&#39;tabAuto&#39;].openDropdownItem(&#39;tabSearch&#39;);
      });
    },
  }

  }
}
\`\`\`
 --></div><div class="van-doc-card"><h3 id="kao-zuo-feng-ge" tabindex="-1">靠左风格</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-tab</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;headerList2&quot;</span> <span class="hljs-attr">isTextAuto</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:title</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ item.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-tab</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> headerList2 = <span class="hljs-title function_">ref</span>([
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;长度1&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>,
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;长度2222&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;短&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
]);
</code></pre></div><div class="van-doc-card"><h3 id="an-niu-feng-ge" tabindex="-1">按钮风格</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-tab</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;headerList2&quot;</span> <span class="hljs-attr">isBtn</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:title</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ item.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-tab</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> headerList2 = <span class="hljs-title function_">ref</span>([
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;长度1&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>,
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;长度2222&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;短&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
]);
</code></pre></div><div class="van-doc-card"><h3 id="wen-zi-xuan-zhong-feng-ge" tabindex="-1">文字选中风格</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-tab</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;headerList2&quot;</span> <span class="hljs-attr">isTextActive</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:title</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ item.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-tab</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> headerList2 = <span class="hljs-title function_">ref</span>([
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;长度1&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>,
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;长度2222&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;短&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
  },
]);
</code></pre></div><div class="van-doc-card"><h3 id="wu-shu-ju-zhan-shi" tabindex="-1">无数据展示</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">ljf-tab</span> <span class="hljs-attr">:list</span>=<span class="hljs-string">&quot;headerList1&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:title</span>=<span class="hljs-string">&quot;{ item }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ item.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:tab0</span>&gt;</span> 无数据 <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:tab1</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center;&quot;</span>&gt;</span>有数据<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ljf-tab</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> headerList1 = <span class="hljs-title function_">ref</span>([
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;商标交易&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">data</span>: <span class="hljs-literal">null</span>,
  },
  {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;版权交易&#39;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">data</span>: {},
  },
]);
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>list</td><td>标签列表,key 为 data 时特殊</td><td><em>tabList Array[{[key：Any]：Any}]</em></td><td>-</td></tr><tr><td>v-model</td><td>默认选中项</td><td><em>number</em></td><td><code>0</code></td></tr><tr><td>isBtn</td><td>是否按钮风格</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>isTextAuto</td><td>是否靠左显示</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>isTextActive</td><td>是否文字选中</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>Tabs Props</td><td>Tabs 原始参数</td><td>-</td><td>-</td></tr></tbody></table><!-- | isRightSearch | 是否展示右侧下拉（使用 list 展示固定 id 标识（-1 默认选中），name 展示）   | _boolean_                          | \`false\`   |
| showList      | 自定义右侧下拉，参数等同 DropdownMenu 组件参数，isRightSearch 为 true 生效 | _array_                            | -         | --></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tabChange</td><td>点击时触发,item 当前 tab 对象,isChange 判断 tab 是否改变过</td><td><em>(item：object,isChange：boolean)</em></td></tr></tbody></table><!-- | searchChange | DropdownMenu 组件操作返回，showList 为自定义时生效         | _DropdownMenu 触发对象_            | --><!-- | closedDropdown | 下拉框关闭时触发，showList 为自定义时生效                  | _当前 tab 对象_                    | --></div><div class="van-doc-card"><h3 id="tablist-shu-ju-jie-gou" tabindex="-1">tabList 数据结构</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>暂无数据判断对象,!data===true 则展示</td><td><em>Any</em></td><td>-</td></tr></tbody></table><!-- ### refs

| 名称              | 说明                   |
| ----------------- | ---------------------- |
| openDropdownItem  | 打开右侧下拉           |
| DropdownMenu 组件 | DropdownMenu 组件 refs | --></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>title</td><td>title 展示插槽,item 为返回值</td></tr><tr><td>tab+x</td><td>内容插槽,x 为下标(例如：tab0,tab1...)</td></tr></tbody></table></div>`,14)])]))}};export{r as default};
