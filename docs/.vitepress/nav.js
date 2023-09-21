/**
 * 创建顶部导航
*/
export function createNav() {
  return [
    // 多级菜单demo
    // {
    //   text: 'Dropdown Menu',
    //   items: [
    //     { text: 'Item A', link: '/item-1' },
    //     { text: 'Item B', link: '/item-2' },
    //     { text: 'Item C', link: '/item-3' }
    //   ]
    // },
    {
      text: '综合',
      link: '/guide/practice/tool',
      activeMatch: '/guide/'
    }
  ];
}