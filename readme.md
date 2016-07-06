#nodejs学习心得#

##在32位win7安装nodjs##
###步骤###
1. 下载node.js安装程序
2. start->All Programes->Accessories->Command Prompt->右键（使用管理员权限打开）
3. 安装插件 npm install -g 插件名称
4. 可以安装 mongodb, grunt




##在32位win7安装mongodb##
1. 下载安装包安装
2. 安装目录一般是:C:\Program Files\MongoDB\Server\3.2\bin
3. 在安装目录下：mongod --dbpath D:\Yanjie\SourceCode\NodejsStudy\db  --logpath D:\Yanjie\SourceCode\NodejsStudy\log\MongoDB.log --install --serviceName "MongoDB" --journal --storageEngine=mmapv1
4. 启动服务:net start MongoDB
5. 打开mongo.exe就可以在控制台输入命令
6. 命令熟悉请参照 http://www.cnblogs.com/liyonghui/p/mongodb.html



##重点说明##




##FAQ##




