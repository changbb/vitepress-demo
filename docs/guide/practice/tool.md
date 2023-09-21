# 开发工具

工欲善其事，必先利其器

## IDE

*Integrated Development Environments*

* [PhpStorm](https://www.jetbrains.com/zh-cn/phpstorm/download/other.html) - The Lightning-Smart PHP IDE.
* [IntelliJ IDEA](https://www.jetbrains.com/zh-cn/idea/download/other.html) - the Leading Java and Kotlin IDE.
* [VS Code](https://code.visualstudio.com/) - A lightweight but powerful source code editor.
  - debug-visualizer
  - live-server
  - vue-vscode-snippets
  - HTML Snippets
* ~~[Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - A PHP IDE based on the Eclipse platform.~~
* ~~[Apache NetBeans](https://netbeans.org) - Development Environment, Tooling Platform and Application Framework.~~

## Http Emulator

* [Postman](https://www.getpostman.com/) - A most complete API Development Environment. **BASIC FREE**

## Terminal Emulator

* [Xshell](https://www.netsarang.com/en/free-for-home-school) - A powerful terminal emulator that supports SSH, SFTP, TELNET, RLOGIN and SERIAL.  **Free for Home/School**
* [Termius](https://www.termius.com/) - The cross-platform terminal with built-in ssh client which works as your own portable server management system in any situation.
* [MobaXterm](https://mobaxterm.mobatek.net/download.html) - Enhanced terminal for Windows with X11 server, tabbed SSH client, network tools and much more. **Home Edition FREE**

## Git

*GUI*
* [SourceTree](https://www.sourcetreeapp.com/) - A free Git client for Windows and Mac. **FREE**

## Web Debugging Proxy

* [Fiddler2](https://www.telerik.com/download/fiddler/fiddler2) - A free web debugging tool which logs all HTTP(S) traffic between your computer and the Internet. **FREE**
* [Charles](https://www.charlesproxy.com) - Web Debugging Proxy Application for Windows, Mac OS and Linux. **FERR TRIAL**

## Database

* [Heidisql](https://www.heidisql.com/) - A useful and reliable tool designed for web developers using the popular MySQL server, Microsoft SQL databases and PostgreSQL. **FREE**
* [Navicat for Mysql](http://www.navicat.com.cn/products/navicat-for-mysql)
* [DBeaver Community](https://dbeaver.io/) - Free Universal Database Tool. **FREE**
* [SQLyog(windows)](https://www.webyog.com/product/sqlyog)
* [Sequel Pro(MacOS)](http://www.sequelpro.com/) - A fast, easy-to-use Mac database management application for working with MySQL databases. **FREE**
* [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer/overview/index.html) - A free integrated development environment that simplifies the development and management of Oracle Database in both traditional and Cloud deployments. **FREE**
* [RedisInsight](https://redis.com/redis-enterprise/redis-insight/) - The best Redis GUI. **FREE**
* [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager/releases) - 🚀🚀🚀 A faster, better and more stable redis desktop manager, compatible with Linux, windows, mac. What's more, it won't crash when loading massive keys. **FREE**

## Object Storage

* [S3 Browser](https://s3browser.com/) - a freeware Windows client for Amazon S3 and Amazon CloudFront. **FREE**

## FTP

* [FileZilla](https://filezilla-project.org/) - Filezilla is open source software distributed free of charge. **FREE**

## Online Api Doc

* [API Blueprint](https://apiblueprint.org/) - A powerful high-level API description language for web APIs.
  - [API Blueprint format 1A](https://github.com/apiaryio/api-blueprint/blob/master/API%20Blueprint%20Specification.md)
  - [Aglio](https://github.com/danielgtaylor/aglio) - An API Blueprint renderer with theme support that outputs static HTML
* [Yapi](https://github.com/YMFE/yapi) - YApi 是一个可本地部署的、打通前后端及QA的、可视化的接口管理平台

## Development Environment
*Software and tools for creating a sandboxed development environment.*

* [Vagrant](https://www.vagrantup.com/) - A portable development environment utility.
```
Vagrant.configure("2") do |config|
  config.vm.define "lnmp" do | vbox |
    vbox.vm.box = "lnmp"
    vbox.vm.box_url = "lnmp_centos7.box"
    vbox.vm.hostname = "lnmp"
    vbox.vm.network "private_network", ip: "192.168.33.100"
    vbox.vm.synced_folder "../codes", "/codes", create:true, owner:"nginx", group:"nginx", mount_options:["dmode=755","fmode=755"]
    vbox.vm.synced_folder ".", "/vagrant", disabled:true
    vbox.vm.provider "virtualbox" do |vb|
        vb.gui = false
        vb.name = "lnmp"
        vb.cpus = "1"
        vb.memory = "4096"
    end
    vbox.ssh.username = "root"
    vbox.ssh.password = "vagrant"
  end
end
```

* [Docker](https://www.docker.com/) - A containerization platform. 

## Markdown

* [MarkdownPad(Windows)](http://markdownpad.com/) -  A full-featured Markdown editor for Windows.
* [MacDown(MacOS)](http://macdown.uranusjr.com/) - The open source Markdown editor for macOS.
* [Typora](https://www.typora.io/) - a markdown editor, markdown reader.
* [Mark Text](https://marktext.app/) - Simple and Elegant Markdown Editor.（Focused on speed and usability）

## Image Compress

* [squoosh](https://squoosh.app/) - Make images smaller using best-in-class codecs, right in the browser.
* [tinypng](https://tinypng.com/) - Smart PNG and JPEG compression.

## Online Diagram Software

* [excalidraw](https://excalidraw.com/) - A virtual collaborative whiteboard tool. 
* [draw.io](https://app.diagrams.net) - Flowchart Maker & Online Diagram Software.
* [ProcessOn](https://www.processon.com/) - 免费在线流程图思维导图

## Miscellaneous

* [jsfiddle](https://jsfiddle.net/) - 在线编辑和测试 HTML、CSS、JavaScript代码片段
* [bfg-repo-cleaner](https://rtyley.github.io/bfg-repo-cleaner/) - Removes large or troublesome blobs like git-filter-branch does, but faster. 
* [ide-eval-resetter](https://gitee.com/pengzhile/ide-eval-resetter) - Reset your IDE eval information.
* [PDF转换成WORD](https://www.ilovepdf.com/zh-cn/compress_pdf)
* [七牛命令行工具](https://developer.qiniu.com/kodo/1302/qshell)
* [screw](https://github.com/pingfangushi/screw) - 简洁好用的数据库表结构文档生成工具
* [菜鸟工具](https://c.runoob.com/)