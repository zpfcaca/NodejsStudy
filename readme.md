#nodejs学习心得#

##在32位win7安装nodejs##
###步骤###
1. 下载node.js安装程序
2. start->All Programes->Accessories->Command Prompt->右键（使用管理员权限打开）
3. 安装插件 npm install -g 插件名称 安装位置：在win10中全局安装一般安装在C:\Users\shumaojie\AppData\Roaming\npm\node_modules\express
4. 可以安装 mongodb, grunt

##在32位win7安装mongodb##
1. 下载安装包安装
2. 安装目录一般是:C:\Program Files\MongoDB\Server\3.2\bin
3. 在安装目录下：mongod --dbpath D:\Yanjie\SourceCode\NodejsStudy\db  --logpath D:\Yanjie\SourceCode\NodejsStudy\log\MongoDB.log --install --serviceName "MongoDB" --journal --storageEngine=mmapv1
4. 启动服务:net start MongoDB
5. 打开mongo.exe就可以在控制台输入命令
6. 命令熟悉请参照 http://www.cnblogs.com/liyonghui/p/mongodb.html


##在树莓派ubuntu16.04上安装nodejs##
1. 下载ARMV7 的源代码包
2.  解压缩进入bin
3.  安装node,npm

##在树莓派ubuntu16.04上安装mongodb##
1. 直接使用sudo  apt-get  install  mongodb

##node.js与mongodb交互##
1. 创建 
2. 插查删替 
3.

##开发环境##
1. 利用sublime Text3来写node.js
2. sublime Text3 安装node.js插件
3. 利用github shell来运行 一般是node **.js

##重点说明##
1. mongodb类似于json数据格式
2. node.js与python进行交互
3. node.js进行socket通讯

##FAQ##
1. 在命令行中输入express 报错‘express’ 不是内部或外部命令，也不是可运行的程序，或批处理文件。
这个还需要安装： npm  install -g express-generator
2. 前端使用$.post(),后端使用node js交互
3. 虚拟主机



