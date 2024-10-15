import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/b.jpg',
  // your git repo url
  docsRepo: '',
  docsDir: 'docs',

  appearance: true,

  profile: {
    //avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'Louaq',
    description: '这是一个很棒的博客',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/Louaq' },
	{ icon: 'zhihu', link: '/' },
	{ icon: 'weibo', link: '/' },
	{ icon: 'bilibili', link: '/' },
  ],

})
