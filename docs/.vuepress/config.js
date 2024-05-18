module.exports = {
	title: 'XXX System',
	description: 'A VuePress QuickStart for Kinsta',
	// dest: 'public',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }]// 这个是标签页 logo
	],
	themeConfig: {
		//已启用多语言配置路由，这里就用不到了
		// nav: [
		// 	{
		// 		text: 'Guide',
		// 		link: '/guide/',
		// 	},
		// 	{ text: 'Blog', link: '/blog/' },
		// 	{
		// 		text: 'About',
		// 		link: '/about/',
		// 	},
		// 	{
		// 		text: 'Tools',
		// 		link: '/tools/',
		// 	},
		// ],
		// sidebar: {
		// 	'/guide/': [
		// 		{
		// 			title: 'Guide',
		// 			collapsable: false,//是否可折叠
		// 			children: ['', 'using-kinsta-stsh'],
		// 		},
		// 	],
		// 	'/about/': [
		// 		{
		// 			title: 'About this site',
		// 			collapsable: false,
		// 			children: [
		// 				'/about/about'
		// 			]
		// 		},
		// 		{
		// 			title: 'Contact information',
		// 			children: [
		// 				'/about/contact/qq',
		// 				'/about/contact/wechat',
		// 			]
		// 		}
		// 	],
		// 	'/tools/': [
		// 		{
		// 			title: 'Tools',
		// 			children: [
		// 				'/Everything.html',
		// 				'/IDEA.html',
		// 			]
		// 		},
		// 	],
		// },

		lastUpdated: 'Last Updated',//每个文件最后一次git提交的时间戳，同时它将以合适的日期格式显示在每一页的底部
		sidebarDepth: 1 ,   // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
		displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
		activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题

		search: true,//启用搜索栏

		locales: {
			'/': {
				selectText: 'Languages',
				label: 'English',
				ariaLabel: 'Languages',
				// editLinkText: 'Edit this page on GitHub',
				serviceWorker: {
					updatePopup: {
						message: "New content is available.",
						buttonText: "Refresh"
					}
				},
				algolia: {},
				nav: [
					{
						text: 'Guide',
						link: '/guide/',
					},
					{ text: 'Blog', link: '/blog/' },
					{
						text: 'About',
						link: '/about/',
					},
					{
						text: 'Tools',
						link: '/tools/',
					},
				],
				sidebar: {
					'/guide/': [
						{
							title: 'Guide',
							collapsable: false,//是否可折叠
							children: [
								'',
							 	'using-kinsta-stsh'
							],
						},
					],
					'/about/': [
						{
							title: 'About this site',
							collapsable: false,
							children: [
								'about'
							]
						},
						{
							title: 'Contact information',
							children: [
								'contact/qq',
								'contact/wechat',
							]
						}
					],
					'/tools/': [
						{
							title: 'Tools',
							children: [
								'Everything',
								'IDEA',
							]
						},
					],
				},
			},
			'/zh/': {
				// 多语言下拉菜单的标题
				selectText: '选择语言',
				// 该语言在下拉菜单中的标签
				label: '简体中文',
				// 编辑链接文字
				// editLinkText: '在 GitHub 上编辑此页',
				// Service Worker 的配置
				serviceWorker: {
					updatePopup: {
						message: "发现新内容可用.",
						buttonText: "刷新"
					}
				},
				// 当前 locale 的 algolia docsearch 选项
				algolia: {},
				nav: [
					{
						text: '指导',
						link: '/zh/guide/',
					},
					{ text: '博客', link: '/zh/blog/' },
					{
						text: '关于本站',
						link: '/zh/about/',
					},
					{
						text: '工具推荐',
						link: '/zh/tools/',
					},
				],
				sidebar: {
					'/zh/guide/': [
						{
							title: '指导',
							collapsable: false,//是否可折叠
							children: [
								'',
							 	'using-kinsta-stsh'
							],
						},
					],
					'/zh/about/': [
						{
							title: '关于本站',
							collapsable: false,
							children: [
								'about'
							]
						},
						{
							title: '联系方式',
							children: [
								'contact/qq',
								'contact/wechat',
							]
						}
					],
					'/zh/tools/': [
						{
							title: '工具推荐',
							children: [
								'Everything',
								'IDEA',
							]
						},
					],
				},
			}
		}
	},

	// 语言配置
	locales: {
	// 键名是该语言所属的子路径
	// 作为特例，默认语言可以使用 '/' 作为其路径。
		'/': {
			lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
			title: 'XXX System',
			description: 'Vue-powered Static Site Generator',
		},
		'/zh/': {
			lang: 'zh-CN',
			title: 'XXX系统',
			description: 'Vue 驱动的静态网站生成器',
		},
	},

	markdown: {
		lineNumbers: true // 代码块显示行号
	},


};
