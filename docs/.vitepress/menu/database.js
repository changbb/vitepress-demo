// write your menu in here
const databaseMenu = [
  {
    text: 'Overview',
    collapsible: true,
    items: [
      {
        text: '备忘录',
        link: '/database/memo'
      },
      {
        text: '文档核对记录（开发）',
        link: '/database/checkdoc-for-dev'
      },
      {
        text: '文档核对记录（运维）',
        link: '/database/checkdoc-for-ops'
      },
    ]
  },
  {
    text: 'mysql设计规范',
    collapsible: true,
    items: [
      {
        text: '基本设计规范',
        link: '/database/mysql/basic-specification'
      },
      {
        text: '库表规约',
        link: '/database/mysql/db-table-specification'
      },
      {
        text: 'SQL 开发规范',
        link: '/database/mysql/sql-develop-specification'
      },
      {
        text: 'DDL 常用示例',
        link: '/database/mysql/data-definition-language'
      }
    ]
  },
  {
    text: 'mysql安装及配置',
    collapsible: true,
    items: [
      {
        text: '安装mysql8.0',
        link: '/database/mysql/install-mysql8.0'
      },
      {
        text: 'mysql8.0系统变量说明',
        link: '/database/mysql/system-variable-for-mysql8.0'
      },
      {
        text: 'mysql8.0备份与恢复',
        link: '/database/mysql/backup-mysql8.0'
      },
      {
        text: 'mysql5.7系统变量说明',
        link: '/database/mysql/system-variable-for-mysql5.7'
      }
    ]
  },
  {
    text: 'mysql集群',
    collapsible: true,
    items: [
      {
        text: 'mysql双主双从集群 📄',
        link: '/database/mysql/mmss'
      },
      {
        text: 'mysql组复制集群 📄',
        link: '/database/mysql/mgr'
      }
    ]
  },
  {
    text: 'mysql数据备份及恢复',
    collapsible: true,
    items: [
      {
        text: 'XtraBackup',
        link: '/database/mysql/xtraBackup'
      }
    ]
  },
  {
    text: 'MongoDB',
    collapsible: true,
    items: [
      {
        text: '安装MongoDB4.4',
        link: '/database/mongodb/install-mongodb-4.4'
      },
      {
        text: '安装MongoDB6.0',
        link: '/database/mongodb/install-mongodb-6.0'
      }
    ]
  },
]

export default databaseMenu