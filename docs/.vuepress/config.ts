import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/Vuepress_blog/',
  lang: 'zh-CN',
  title: 'Louaq',
  description: '这是一个很棒的博客',

  bundler: viteBundler(),

  theme: plumeTheme({
    logo: true,
	social: [
      { icon: 'github', link: 'https://github.com/zhangsan' },
      {
        icon: { svg: '<svg>xxxxx</svg>', name: 'xxx' },
        link: 'https://xxx.com'
      },
    ],
    profile: {
      avatar: '/b.jpg',
      name: 'Louaq',
      description: '这是一个很棒的博客',
      circle: true,
      location: '武汉，中国',
      organization: '南湖边，双子塔',
      layout: 'right',
    },
	blog: {
	  pagination: {
	     perPage: 6,
	  
	  },
	  postCover: 'left',
	},


	
    // 添加您的部署域名
    // hostname: 'https://your_site_url',

    plugins: {
       shiki: {
           // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
         languages: ['shell', 'bash', 'typescript', 'javascript','python','c++','c#'],
       },
      markdownEnhance: {
        demo: true,
        include: true,
        chart: true,
        echarts: true,
        mermaid: true,
        flowchart: true,
		
      },
	  readingTime: {
        wordPerMinute: 300
      },
	  
      markdownPower: {
         pdf: true,
         caniuse: true,
         plot: true,
         bilibili: true,
         youtube: true,
         icons: true,
         codepen: true,
         replit: true,
         codeSandbox: true,
         jsfiddle: true,
		 fileTree: true,
         repl: {
           go: true,
           rust: true,
           kotlin: true,
         },
       },
	   markdownImage: {
        // 启用 figure
         figure: true,

        // 启用图片懒加载
         lazyload: true,

        // 启用图片标记
         mark: true,

        // 启用图片大小
         size: true,
      },
	  markdownMath: {
        type: 'katex',
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),
})
