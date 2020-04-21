Component({
	properties: {
		bgcolor: {
			type: String,
			value: '#FFF'
		},
		selector: {
			type: String,
			value: 'skeleton'
		},
		loading: {
			type: String,
			value: 'chiaroscuro'
		},
		unit: {
			type: String,
			value: 'px'
		}
	},
	data: {
		loadingAni: ['spin', 'chiaroscuro'],
		systemInfo: {},
		rects: [],
		circulars: []
	},
	attached: function () {
		//默认的首屏宽高，防止内容闪现
		const systemInfo = wx.getSystemInfoSync();
		this.setData({
			systemInfo: {
				width: systemInfo.windowWidth,
				height: systemInfo.windowHeight
			},
			loading: this.data.loadingAni.includes(this.data.loading) ? this.data.loading : 'spin'
		})
	},
	ready: function () {
		this.init()
	},
	methods: {
		init() {
			const { selector } = this.data
			Promise.all([
				this.getNodesRef(`.${selector} >>> .${selector}-rects`),
				this.getNodesRef(`.${selector} >>> .${selector}-circulars`),
			]).then(([rects, circulars]) => {
				this.setData({
					rects,
					circulars
				})
			})
		},
		getNodesRef(selector) {
			return new Promise(resolve => {
				wx.createSelectorQuery().selectAll(selector).boundingClientRect().exec(res => {
					resolve(res[0])
				})
			})
		}
	}
})