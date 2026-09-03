import{o as t,a as d,x as i}from"./vue-libs-2907b903.js";const o={class:"van-doc-markdown-body"},p={__name:"question",setup(s,{expose:n}){return n({frontmatter:{}}),(c,e)=>(t(),d("div",o,[...e[0]||(e[0]=[i(`<h1>常见问题</h1><div class="van-doc-card"><h3 id="vantresolverzi-dong-dao-ru-da-bao-hou-hui-dao-zhi-cssjia-zai-shun-xu-cuo-wu" tabindex="-1">VantResolver自动导入打包后会导致css加载顺序错误</h3><pre><code>https://github.com/unplugin/unplugin-vue-components/issues/327
</code></pre></div><div class="van-doc-card"><h3 id="git" tabindex="-1">git</h3><pre><code>由于vue3版本和vue2版本共用一个代码库，但是所需的要的node环境是不同的，所以建议使用nvm进行node版本管理本地根据分支建立两个不同的文件夹，以便于调试
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-xiang-guan" tabindex="-1">组件相关</h3><pre><code>内置了ljf-font-scale组件在demo中直接引入，编写的组件源码文件则需要配置useFontScale
</code></pre></div><div class="van-doc-card"><h3 id="vant-cli" tabindex="-1">vant-cli</h3><pre><code>1..vue文件使用setup语法打包后生成index.d.ts文件内没有引入问题
源码位置：packages\\vant-cli\\src\\common\\index.ts  getComponents方法解析问题
解决方案：添加注释export default即可

2.打包成功报错utils formatType方法错误
源码位置：packages\\vant-cli\\src\\compiler\\web-types\\formatter.ts formatArguments函数问题
解决方案：md文件内的Events必须保持三列
</code></pre></div><h2 id="lei-xing-wen-ti" tabindex="-1">类型问题</h2><div class="van-doc-card"><h3 id="ji-ben-pei-zhi" tabindex="-1">基本配置</h3><pre><code>https://cn.vuejs.org/guide/typescript/overview.html
</code></pre></div><div class="van-doc-card"><h3 id="lei-xing-ti-shi" tabindex="-1">类型提示</h3><pre><code>https://github.com/vuejs/core/discussions/7981
https://github.com/vuejs/rfcs/pull/477
</code></pre></div>`,8)])]))}};export{p as default};
