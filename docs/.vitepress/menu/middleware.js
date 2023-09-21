// write your menu in here
const middlewareMenu = [
  {
    text: '汇总',
    collapsible: true,
    items: [
      {
        text: '备忘录',
        link: '/middleware/memo'
      },
      {
        text: '文档核对记录（运维）',
        link: '/middleware/checkdoc-for-ops'
      },
      {
        text: '文档核对记录（开发）',
        link: '/middleware/checkdoc-for-dev'
      },
    ]
  },
  {
    text: 'Redis',
    collapsible: true,
    items: [
      {
        text: '单节点 Redis 部署',
        link: '/middleware/redis/install'
      },
      {
        text: 'Redis Cluster 配置 📄',
        link: '/middleware/redis/cluster'
      },
      {
        text: 'Redis Sentinel 配置 📄',
        link: '/middleware/redis/sentinel'
      },
      {
        text: 'Redis 开发规范',
        link: '/middleware/redis/developing-guideline'
      },
    ]
  },
  {
    text: 'RabbitMQ',
    collapsible: true,
    items: [
      {
        text: 'RabbitMQ介绍',
        link: '/middleware/rabbitmq/introduction'
      },
      {
        text: '单节点RabbitMQ安装',
        link: '/middleware/rabbitmq/install.md'
      },
      {
        text: '镜像队列的搭建及配置 📄',
        link: '/middleware/rabbitmq/mirror-queues'
      },
      {
        text: '仲裁队列的搭建及配置 📄',
        link: '/middleware/rabbitmq/quorum-queues'
      },
      {
        text: 'RabbitMQ开发规约 📄',
        link: '/middleware/rabbitmq/developing-guideline'
      },
    ]
  },
  {
    text: 'Elastic',
    collapsible: true,
    items: [
      {
        text: '单节点 Elasticsearch 部署',
        link: '/middleware/elastic/install-es'
      },
      {
        text: 'Kibana部署 📄',
        link: '/middleware/elastic/install-kibana'
      },
    ]
  },
  {
    text: 'MinIO',
    collapsible: true,
    items: [
      {
        text: 'MinIO单节点单驱动部署',
        link: '/middleware/minio/deploy-minio-snsd'
      },
      {
        text: 'MinIO集群部署 📄',
        link: '/middleware/minio/cluster-install'
      },
    ]
  },
  {
    text: 'Nacos',
    collapsible: true,
    items: [
      {
        text: 'Nacos部署（单机模式） 📄',
        link: '/middleware/nacos/install'
      },
      {
        text: 'Nacos部署（集群模式） 📄',
        link: '/middleware/nacos/cluster-install'
      },
      {
        text: 'Nacos配置说明 📄',
        link: '/middleware/nacos/configuration'
      }
    ]
  },
  {
    text: 'HaProxy',
    collapsible: true,
    items: [
    ]
  },
  {
    text: 'Keepalived',
    collapsible: true,
    items: [
      {
        text: 'Keepalived介绍',
        link: '/middleware/keepalived/introduction'
      },
      {
        text: 'Keepalived安装',
        link: '/middleware/keepalived/install'
      }
    ]
  },
  {
    text: 'Supervisor',
    collapsible: true,
    items: [
      {
        text: 'Supervisor 安装',
        link: '/middleware/supervisor/install'
      },
      {
        text: '应用程序配置',
        link: '/middleware/supervisor/program-settings'
      },
      {
        text: 'Supervisord Monitoring 📄',
        link: '/middleware/supervisor/supervisor-monitor'
      }
    ]
  }
]

export default middlewareMenu