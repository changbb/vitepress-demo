import { defineConfig } from 'vitepress'
import { createNav } from './nav'
import { createSidebar } from './menu/index'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "世纪飞越",
  description: "技术团队文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: createNav(),
    sidebar: createSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    }

  }
})
