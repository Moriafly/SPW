import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'SPW',
  description: 'Salt Player® for Windows™',
  base: '/',
  head: [['link', { rel: 'shortcut icon', href: '/favicon.ico' }]],
  markdown: {
    toc: {
      // level: [1, 2]
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/logo.png',
    nav: [
      // { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    outline: {
      label: '页面导航'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Moriafly/SPW' }
    ],

    footer: {
      copyright: 'Copyright © 2024 Moriafly. All Rights Reserved.'
    },

    darkModeSwitchLabel: '主题模式',
    returnToTopLabel: '返回顶部'
  }
})
