import{o as s,a as i,x as e}from"./vue-libs-2907b903.js";const o={class:"van-doc-markdown-body"},u={__name:"ui",setup(t,{expose:n}){return n({frontmatter:{}}),(c,a)=>(s(),i("div",o,[...a[0]||(a[0]=[e(`<h1>快速上手</h1><div class="van-doc-card"><h3 id="an-zhuang" tabindex="-1">安装</h3><pre><code class="language-bash"><span class="hljs-comment"># ui仓库地址</span>
https://codehub.devcloud.cn-east-3.huaweicloud.com/xian-reseach00002/ljf-h5_ljf-h5-based-ui.git

<span class="hljs-comment"># 选择对应分支 （git提交流程同其它项目一致）</span>
release-vue3  正式分支
develop       测试分支  

<span class="hljs-comment"># 通过 npm</span>
npm install

<span class="hljs-comment"># 启动服务</span>
npm run dev
</code></pre></div><div class="van-doc-card"><h3 id="kai-fa" tabindex="-1">开发</h3><h4 id="di-yi-bu" tabindex="-1">第一步</h4><ol><li>创建组件相关文件夹。 例如：新增TabAuto组件 首先在src下建立ljf-tab-auto文件夹包含： <ul><li>READMED.md说明文档</li><li>index.vue组件文件，组件源码</li><li>demo示例文件夹(包含index.vue，组件展示例子)</li></ul></li></ol><h4 id="di-er-bu" tabindex="-1">第二步</h4><ol start="2"><li>填写对应的路由配置。 <ul><li>进入vant.config.js文件，site配置，nav数组，添加对应的路由目录 <img src="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/0VWutBqWxlf3f46bccfgi.jpg" alt="docs/images/ui-2.png"></li></ul></li></ol><h4 id="xiao-guo" tabindex="-1">效果</h4><ol start="3"><li>对应区域 <img src="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/isz9E5qodjBX8k-RNth-R.png" alt="docs/images/ui-3.png"></li></ol></div><div class="van-doc-card"><h3 id="zhu-yi-shi-xiang" tabindex="-1">注意事项</h3><pre><code>+   config配置路径地址,组件文件名,组件名称需要保持一致,统一使用ljf前缀,且vant依赖需要自己声明到组件里
+   使用定义好的css变量,确保主题能正常生效
+   demo中右侧展示的的title，可以使用框架内置的demo-seciton和demo-block
+   组件暂不支持异步引入注册，vuex，axios，router等第三方依赖处理
</code></pre></div>`,4)])]))}};export{u as default};
