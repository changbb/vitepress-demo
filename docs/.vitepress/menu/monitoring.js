// write your menu in here
const middlewareMenu = [
  {
    text: '汇总',
    collapsible: true,
    items: [
      {
        text: '监控指标',
        link: '/monitoring/monitorkeys'
      },
      {
        text: '文档核对记录',
        link: '/monitoring/checkdoc'
      },
      {
        text: '备忘录',
        link: '/monitoring/memo'
      }
    ]
  },
  {
    text: 'Prometheus',
    collapsible: true,
    items: [
      {
        text: 'prometheus安装',
        link: '/monitoring/prometheus/install'
      }
    ]
  },
  {
    text: 'Skywalking',
    collapsible: true,
    items: [
      {
        text: 'Skywalking安装',
        link: '/monitoring/Skywalking/install'
      }
    ]
  },
  {
    text: 'Zabbix',
    collapsible: true,
    items: [
      {
        text: '快速入门指南',
        link: '/monitoring/zabbix/quickstart'
      },
      {
        text: 'Zabbix6.0 Server安装',
        link: '/monitoring/zabbix/zabbix6/install-zabbix60-server'
      },
      {
        text: 'Zabbix6.0 Proxy安装',
        link: '/monitoring/zabbix/zabbix6/install-zabbix60-proxy'
      },
      {
        text: 'Zabbix6.0 JMX安装',
        link: '/monitoring/zabbix/zabbix6/install-zabbix60-jmx'
      },
      {
        text: 'Zabbix6.0 Agent安装',
        link: '/monitoring/zabbix/zabbix6/install-zabbix60-agent'
      },
      {
        text: 'Zabbix5.4 Server安装',
        link: '/monitoring/zabbix/zabbix5/install-zabbix54-server'
      },
      {
        text: 'Zabbix5.4 Proxy安装',
        link: '/monitoring/zabbix/zabbix5/install-zabbix54-proxy'
      },
      {
        text: 'Zabbix5.4 JMX安装',
        link: '/monitoring/zabbix/zabbix5/install-zabbix54-jmx'
      },
      {
        text: 'Zabbix5.4 Agent安装',
        link: '/monitoring/zabbix/zabbix5/install-zabbix54-agent'
      },
      {
        text: '自定义 Nginx 监控',
        link: '/monitoring/zabbix/integrate-nginx'
      },
      {
        text: '自定义 PHP-FPM 监控',
        link: '/monitoring/zabbix/integrate-phpfpm'
      },
      {
        text: '自定义 Mysql 监控',
        link: '/monitoring/zabbix/integrate-mysql'
      },
      {
        text: '自定义 Redis 监控',
        link: '/monitoring/zabbix/integrate-redis'
      }
    ]
  }
]

export default middlewareMenu
