// write your menu in here
const guideMenu =  [
  {
    text: '最佳实践',
    collapsible: true,
    items: [
      {
        text: '🛠️ 开发工具',
        link: '/guide/practice/tool',
      },
      {
        text: '🔀 git版本控制',
        link: '/guide/practice/git',
      },
      {
        text: '📚 技术书籍',
        link: '/guide/practice/book',
      },
      {
        text: '💻 专业术语',
        link: '/guide/practice/terminology',
      },
      {
        text: '📝 备忘录',
        link: '/guide/practice/memo'
      }
    ]
  },
  {
    text: '面试',
    collapsible: true,
    items: [
      {
        text: 'Java面试题',
        link: '/guide/interview/java',
      },
      {
        text: 'Web前端面试题',
        link: '/guide/interview/h5',
      },
      {
        text: 'Devops面试题',
        link: '/guide/interview/devops',
      }
    ]
  }
]

export default guideMenu