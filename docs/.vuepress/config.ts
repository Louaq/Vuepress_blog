import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { watermarkPlugin } from '@vuepress/plugin-watermark'
import { noticePlugin } from '@vuepress/plugin-notice'
export default defineUserConfig({
  base: '/Vuepress_blog/',
  lang: 'zh-CN',
  title: 'Louaq',
  description: '这是一个很棒的博客',

  bundler: viteBundler(),

  theme: plumeTheme({
    logo: true,
	notes: false,
	sidebar: {
	  '/stack/': [
        { text: 'Roboflow', link: '/notes/stack/Roboflow.md' },
        { text: 'ultralytics', link: '/notes/stack/ultralytics.md' },
      ]
   },
    profile: {
      name: 'Louaq',
      description: '这是一个很棒的博客',
	  avatar: '/b.jpg',
      circle: true,
      location: '武汉，中国',
      organization: '南湖边，双子塔',
      layout: 'right',
    },
	blog: {
	  pagination: {
	     perPage: 6,
	  
	  },
	  postCover: {
        layout: 'left',
        ratio: '4:3',
        width: 300,
        compact: true
      }
	},
	footer: {
	   message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
	   copyright: 'Copyright © 2024-present Louaq',
	   
	
	
	},

    // 添加您的部署域名
    hostname: 'https://louaq.github.io/Vuepress_blog/',

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
	  noticePlugin: {
         config: [
         {
          path: '/',
          title: '重要通知',
          content: '服务全面关停',
		  confirm: true,
          actions: [
            {
              text: 'Primary Action',
              link: 'https://theme-hope.vuejs.press/',
              type: 'primary',
            },
            { text: 'Default Action' },
          ],
        },
  
      ],
     },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
       comment: {
         provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
         comment: true,
         repo: 'Louaq/Vuepress_blog',
         repoId: 'R_kgDONAm_Xw',
		 category: 'Announcements',
         categoryId: 'DIC_kwDONAm_X84CjYiJ',
         mapping: 'pathname',
         reactionsEnabled: true,
         inputPosition: 'top',
       },
    },
  }),
})
