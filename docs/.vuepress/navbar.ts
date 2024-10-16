import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
  { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
  { text: '标签', link: '/blog/tags/', icon: 'icon-park-solid:theme' },
  { text: '归档', link: '/blog/archives/', icon: 'mdi:idea' },
  { text: '朋友', link: '/friends', icon: 'mingcute:plugin-2-fill' },
  {
    text: '笔记',
    items: [
	{ text: '栈', link: '/notes/stack/README.md', icon: 'pajamas:feature-flag' },
	
	]
  },
])
