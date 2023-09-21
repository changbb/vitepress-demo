# Java面试题

## Java SE

String 类的常用方法都有哪些

重载（Overload）和重写（Override）的区别

抽象类和接口有什么区别，并举例说明日常开发中的使用场景

多态的好处，并举例说明日常开发中的使用场景

String 和 StringBuilder、StringBuffer的区别

== 和 equals 的区别是什么

Java 中的 final 关键字有哪些用法

为什么要重写hashcode()和equals()以及他们之间的区别与关系

Java 集合框架中ArrayList与Vector的不同之处

Java 语言是如何处理异常的，关键字throws、throw、try、catch、finally怎么使用

如何尽量避免 Java 内存泄露

## Java Web

转发（forward）和重定向（redirect）的区别？

过滤器有哪些作用和用法？

监听器有哪些作用和用法？

列举Spring boot常用注解并说明其用途

Spring Boot 的核心注解是哪个？它主要由哪几个注解组成的？

如何重新加载Spring Boot上的更改，而无需重新启动服务器

Spring Boot如何实现多环境配置

列举常用的三方库

基于Spring Boot的目录结构

Service、Logic、Model、Entity、POJO、DTO、DO、VO、BO、Repository、DAO、Mapper等专有名词解释

## JVM

调优命令

调优工具

监控指标

## Mybatis

Xml映射文件中，除了常见的select|insert|updae|delete标签之外，还有哪些标签

通常一个Xml映射文件，都会写一个Dao接口与之对应，请问，这个Dao接口的工作原理是什么？Dao接口里的方法，参数不同时，方法能重载吗？

Mybatis是如何进行分页的？分页插件的原理是什么

Mybatis是如何将sql执行结果封装为目标对象并返回的？都有哪些映射形式

Mybatis的Xml映射文件中，不同的Xml映射文件，id是否可以重复

#{}和${}的区别是什么

简单的说一下MyBatis的一级缓存和二级缓存

Mybatis Plus 在 Mybatis 基础上增强了什么

## Mysql

SQL 语句编写注意事项

谈谈你对联合索引的认识

SQL 优化的手段（包括慢sql的定位）

怎么查看索引是否生效

如何预防 SQL 注入

Mysql高可用方案

数据库的乐观锁和悲观锁是什么，怎么实现的，并说明应用场景

阐述对分区、水平分表的理解

## 缓存

如何保证数据库和缓存的数据一致性

Redis 在项目中的使用场景，并说明对应使用的是什么数据结构

如何使用Redis构建分布式锁

Redis 内存碎片率过高如何产生的，该怎么解决

Redis Sentinal 和 Redis Cluster 的区别

Redis 如何做持久化的

Redis 的内存淘汰策略

Redis 缓存穿透、缓存击穿、缓存雪崩如何预防

## 消息队列

列举自己使用过的消息队列系统，并说明其优缺点

如何保证消息不被重复消费

RabbitMQ常用的消息模式，并说明其应用场景

如何使用消息队列实现定时任务

描述自己使用消息队列的业务场景

## 并发

并发高、任务执行时间短的业务怎样使用线程池

并发高、任务执行时间长的业务怎样使用线程池

并发不高、任务执行时间长的业务怎样使用线程池

## 系统设计

Cookie、Session、Token（JWT）的对比

说说你对Restful API的理解

常用加密算法的了解（MD5、AES、RSA、国密SM4）

如何处理session在分布式系统中失效的问题

说下你目前使用的框架中用到的核心概念

如何防止接口重复请求

说说编码规范及日常开发中实践的手段

阐述功能权限、行为权限、数据权限如何设计

抢购系统的设计方案

参与过系统设计的项目中，哪些可以值得拿出来说一下

## 安全

如何避免接口同级越权

在传统的文件存储中，如何保证用户上传隐私图片的安全
