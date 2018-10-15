getCurrentPages();

interface MyOwnEvent
	extends wx.CustomEvent<
			"my-own",
			{
				hello: string;
			}
		> {}

let behavior = Behavior({
	behaviors: [],
	properties: {
		myBehaviorProperty: {
			type: String
		}
	},
	data: {
		myBehaviorData: ""
	},
	attached() {},
	methods: {
		myBehaviorMethod() {
			const s: string = this.data.myBehaviorData;
		}
	}
});

Component({
	behaviors: [behavior, "wx://form-field"],

	options: {
		multipleSlots: false,
		addGlobalClass: false
	},

	properties: {
		myProperty: {
			// 属性名
			type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
			value: "", // 属性初始值（可选），如果未指定则会根据类型选择一个
			observer(newVal: string, oldVal: string, changedPath: string) {
				const anotherKey = newVal + changedPath;
				this.setData({
					anotherKey
				});
			} // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
		},
		myProperty2: String // 简化的定义方式
	},
	data: {
		key: "value",
		anotherKey: "value"
	}, // 私有数据，可用于模版渲染

	lifetimes: {
		attached() {
			wx.setEnableDebug({
				enableDebug: true,
				success(res) {}
			});

			wx.reportMonitor("123", 123);

			wx.getLogManager().info("123");
			wx.getLogManager().log("123");
			wx.getLogManager().warn("123");
			wx.getLogManager().debug("123");

			this.createIntersectionObserver({}).observe("123", res => {
				res.id;
			});
		},

		detached() {
			this.setData(
				{
					key: null
				},
				() => {}
			);
		}
	},

	pageLifetimes: {
		show() {},
		hide() {}
	},

	// 生命周期函数，可以为函数，或一个在methods段中定义的方法名
	attached() {
		this.setData(
			{
				key: "123"
			},
			() => {}
		);
	},

	moved() {},

	detached() {},

	methods: {
		readMyDataAndMyProps() {
			const stringValue1: string = this.data.myProperty;
			const stringValue2: string = this.data.myProperty2;
			const stringValue3: string = this.data.key;
			this.data.anotherKey;
			this.properties.myProperty;
			this.properties.myProperty2;
			this.properties.key;
			this.properties.anotherKey;
			this.setData({
				key: stringValue1 + stringValue2 + stringValue3
			});
		},
		onMyButtonTap() {
			// 更新属性和数据的方法与更新页面数据的方法类似
			this.setData({
				key: 123 // note this is edge case where it cannot detect wrong types...
			});
		},
		_myPrivateMethod() {
			// 内部方法建议以下划线开头
			// this.replaceDataOnPath(['A', 0, 'B'], 'myPrivateData'); // 这里将 data.A[0].B 设为 'myPrivateData'
			// this.applyDataUpdates();
			this.setData({
				anotherKey: 123
			});
		},
		_propertyChange(newVal: string, oldVal: string) {
			//
		}
	},
	relations: {
		"./custom-ul": {
			type: "parent", // 关联的目标节点应为父节点
			linked(target: wx.Component<{ key: string }, {}>) {
				// 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
				target.data.key;
			},
			linkChanged(target: wx.Component<{ key: string }, {}>) {
				// 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
				target.data.key;
			},
			unlinked(target: wx.Component<{ key: string }, {}>) {
				// 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
				target.data.key;
			}
		}
	}
});

// index.js
Page({
	data: {
		text: "This is page data."
	},
	onLoad() {
		// Do some initialize when page load.
		this.setData({}, () => {
			// callback
		});
	},
	onReady: () => {
		// Do something when page ready.
	},
	onShow: () => {
		// Do something when page show.
	},
	onHide: () => {
		// Do something when page hide.
	},
	onUnload: () => {
		// Do something when page close.
	},
	onPullDownRefresh: () => {
		// Do something when pull down.
	},
	onReachBottom: () => {
		// Do something when page reach bottom.
	},
	onShareAppMessage: res => {
		if (res && res.from === "menu") {
			//
		}
		// return custom share data when user share.
		return {
			success(res) {
				console.log(res.shareTickets.length);
			}
		};
	},
	onPageScroll() {
		wx.createIntersectionObserver(this, {})
			.relativeToViewport()
			.observe("div", res => {
				console.log(res.id);
				console.log(res.dataset);
				console.log(res.intersectionRatio);
				console.log(res.intersectionRect.left);
				console.log(res.intersectionRect.top);
				console.log(res.intersectionRect.width);
				console.log(res.intersectionRect.height);
			})
			.disconnect();
	},
	onTabItemTap(item: any) {
		this.setData({
			1: null,
			_2: "undefined"
		});
		console.log(item.index);
		console.log(item.pagePath);
		console.log(item.text);
	},
	// Event handler.
	viewTap() {
		this.setData(
			{
				text: "Set some data for updating view."
			},
			() => {
				// this is setData callback
			}
		);
	},
	customData: {
		hi: "MINA"
	},
	onMyOwnEvent(e: MyOwnEvent) {
		e.detail.hello;
	},
	onTouchStart(e: wx.TouchStartEvent) {
		e.touches;
		e.detail.x;
		e.detail.y;
	},
	onTouchEnd(e: wx.TouchEndEvent) {
		e.touches;
		e.detail.x;
		e.detail.y;
	},
	onTouchCancel(e: wx.TouchCancelEvent) {
		e.touches;
		e.detail.x;
		e.detail.y;
	},
	onTouchMove(e: wx.TouchMoveEvent) {
		e.touches;
		e.detail.x;
		e.detail.y;
	}
});

Page({
	getScrollOffset: () => {
		wx.createSelectorQuery()
			.selectViewport()
			.scrollOffset(res => {
				res.id; // 节点的ID
				res.dataset; // 节点的dataset
				res.scrollLeft; // 节点的水平滚动位置
				res.scrollTop; // 节点的竖直滚动位置
			})
			.exec();
	}
});

Page({
	getFields: () => {
		wx.createSelectorQuery()
			.select("#the-id")
			.fields(
				{
					id: true,
					dataset: true,
					size: true,
					scrollOffset: true,
					properties: ["scrollX", "scrollY"]
				},
				res => {
					// res.
					res.dataset; // 节点的dataset
					res.width; // 节点的宽度
					res.height; // 节点的高度
					res.scrollLeft; // 节点的水平滚动位置
					res.scrollTop; // 节点的竖直滚动位置
					res.scrollX; // 节点 scroll-x 属性的当前值
					res.scrollY; // 节点 scroll-x 属性的当前值
				}
			)
			.exec();
	}
});

Page({
	getRect: () => {
		wx.createSelectorQuery()
			.select("#the-id")
			.boundingClientRect((rect: wx.NodesRefRect) => {
				rect.id; // 节点的ID
				rect.dataset; // 节点的dataset
				rect.left; // 节点的左边界坐标
				rect.right; // 节点的右边界坐标
				rect.top; // 节点的上边界坐标
				rect.bottom; // 节点的下边界坐标
				rect.width; // 节点的宽度
				rect.height; // 节点的高度
			})
			.exec();
	},
	getAllRects: () => {
		wx.createSelectorQuery()
			.selectAll(".a-class")
			.boundingClientRect((rects: wx.NodesRefRect[]) => {
				rects.forEach(rect => {
					rect.id; // 节点的ID
					rect.dataset; // 节点的dataset
					rect.left; // 节点的左边界坐标
					rect.right; // 节点的右边界坐标
					rect.top; // 节点的上边界坐标
					rect.bottom; // 节点的下边界坐标
					rect.width; // 节点的宽度
					rect.height; // 节点的高度
				});
			})
			.exec();
	}
});

const recorderManager = wx.getRecorderManager();

recorderManager.onStart(() => {
	console.log("recorder start");
});
recorderManager.onResume(() => {
	console.log("recorder resume");
});
recorderManager.onPause(() => {
	console.log("recorder pause");
});
recorderManager.onStop(res => {
	console.log("recorder stop", res);
	const { tempFilePath } = res;
});
recorderManager.onFrameRecorded(res => {
	const { frameBuffer } = res;
	console.log("frameBuffer.byteLength", frameBuffer.byteLength);
});

const options = {
	duration: 10000,
	sampleRate: 44100,
	numberOfChannels: 1,
	encodeBitRate: 192000,
	format: "aac",
	frameSize: 50
};

recorderManager.start(options);

wx.onGetWifiList(res => {
	if (res.wifiList.length) {
		wx.setWifiList({
			wifiList: [
				{
					SSID: res.wifiList[0].SSID,
					BSSID: res.wifiList[0].BSSID,
					password: "123456"
				}
			]
		});
	} else {
		wx.setWifiList({
			wifiList: []
		});
	}
});
wx.getWifiList();

wx.onWifiConnected(wifi => {
	// wifi.BSSID
});

wx.getConnectedWifi({
	success(result) {
		result.signalStrength;
	}
});

wx.getWeRunData({
	success(res) {
		const encryptedData = res.encryptedData;
	}
});

const uploadTask = wx.uploadFile({
	url: "http://example.weixin.qq.com/upload", // 仅为示例，非真实的接口地址
	filePath: "/local/folder/file.ext",
	name: "file",
	formData: {
		user: "test"
	},
	success: res => {
		const data = res.data;
		// do something
	}
});

uploadTask.onProgressUpdate(res => {
	console.log("上传进度", res.progress);
	console.log("已经上传的数据长度", res.totalBytesSent);
	console.log("预期需要上传的数据总长度", res.totalBytesExpectedToSend);
});

uploadTask.abort(); // 取消上传任务

const downloadTask = wx.downloadFile({
	url: "http://example.com/audio/123", // 仅为示例，并非真实的资源
	success: res => {
		wx.playVoice({
			filePath: res.tempFilePath
		});
	}
});

downloadTask.onProgressUpdate(res => {
	console.log("下载进度", res.progress);
	console.log("已经下载的数据长度", res.totalBytesWritten);
	console.log("预期需要下载的数据总长度", res.totalBytesExpectedToWrite);
});

downloadTask.abort(); // 取消下载任务

wx.request({
	url: "https://www.baidu.com",
	method: "GET",
	success(res) {
		if (res.statusCode < 300) {
			console.log(res.data);
		} else {
			console.warn(res.statusCode, res.header);
		}
	},
	fail(e) {
		console.error(e);
	}
}).abort();

wx.getSystemInfo({
	success(res) {
		const {
			brand,
			pixelRatio,
			platform,
			windowHeight,
			windowWidth,
			screenHeight,
			screenWidth,
			statusBarHeight,
			SDKVersion,
			language,
			model,
			version,
			fontSizeSetting,
			system
		} = res;
	}
});
