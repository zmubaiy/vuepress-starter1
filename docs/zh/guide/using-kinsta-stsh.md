# Kinsta静态网站托管的工作原理

Kinsta静态网站托管的操作方式如下：

1.你连接了一个存储在Git提供商上的存储库，比如（[BitBucket](https://kinsta.com/docs/granting-kinsta-access-to-bitbucket/)，[GitHub](https://kinsta.com/docs/authorizing-kinsta-on-github/)，和[GitLab](https://kinsta.com/docs/authorizing-kinsta-on-gitlab/)）到您的Kinsta帐户。
2.Kinsta会将你的静态网站文件部署到互联网上。

![在Kinsta静态网站托管中设置应用程序]（../images/Set Application-processs.jpg）

使用Kinsta静态网站托管部署静态网站有两个选项：
- 如果您的静态文件位于存储库的根目录或存储库中的某个目录中，Kinsta将直接为它们提供服务。
- 如果您使用[Static Site Generator](https://kinsta.com/docs/static-site-generators/)（SSG）基于Node.js，Kinsta可以在提供静态文件之前从源代码构建静态文件。

