
Page({
	data: {
		text: '',
		userInfo: {},
		showSkeleton: true
	},
	onLoad: function () {
		setTimeout(() => {
			this.setData({
				showSkeleton: false,
				text: 'Hello World',
				userInfo: {
					avatarUrl: 'https://wx.qlogo.cn/mmhead/vtnuMBibofcZB1ChNW5WJtG0hYmUkCRnKNqCSTVK8aul4ozrVvJhU8g/64',
				}
			})
		}, 2000)
	}
})
