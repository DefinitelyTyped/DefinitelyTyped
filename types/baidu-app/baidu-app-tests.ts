(() => {
	swan.request({
		url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的接口地址
		method: 'GET',
		dataType: 'json',
		data: {
			key: 'value'
		},
		header: {
			'content-type': 'application/json' // 默认值
		},
		success(res) {
			console.log(res.data);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});

	const requestTask = swan.request({
		url: 'test.php', // 仅为示例，并非真实的接口地址
		data: {
			x: '',
			y: ''
		},
		header: {
			'content-type': 'application/json'
		},
		success(res) {
			console.log(res.data);
		}
	});
	// 取消请求任务
	requestTask.abort();
})();

(() => {
	swan.chooseImage({
		success(res) {
			swan.uploadFile({
				url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的接口地址
				filePath: res.tempFilePaths[0], // 要上传文件资源的路径
				name: 'myfile',
				success(res) {
					console.log(res.statusCode);
				},
				fail(err) {
					console.log('错误码：' + err.errCode);
					console.log('错误信息：' + err.errMsg);
				}
			});
		}
	});
})();

(() => {
	const uploadTask = swan.uploadFile({
		url: 'https://smartprogram.baidu.com/xxx', // 开发者服务器 url
		filePath: '', // res.tempFilePaths[0], // 要上传文件资源的路径
		name: 'myfile',
		success(res) {
			console.log(res.statusCode);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});

	uploadTask.onProgressUpdate(res => {
		console.log('上传进度', res.progress);
		console.log('已经上传的数据长度', res.totalBytesSent);
		console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
	});

	uploadTask.abort(); // 取消上传任务
})();

(() => {
	swan.downloadFile({
		url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的资源
		success(res) {
			// 下载成功
			if (res.statusCode === 200) {
				console.log("临时文件路径" + res.tempFilePath);
			}
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
})();

(() => {
	const downloadTask = swan.downloadFile({
		url: 'https://smartprogram.baidu.com/xxx', // 仅为示例，并非真实的资源
		success(res) {
			console.log(res.tempFilePath);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});

	downloadTask.onProgressUpdate(res => {
		console.log('下载进度', res.progress);
		console.log('已经下载的数据长度', res.totalBytesWritten);
		console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
	});

	downloadTask.abort(); // 取消下载任务
})();

(() => {
	swan.connectSocket({
		url: 'wss://example.baidu.com'
	});
})();

(() => {
	swan.connectSocket({
		url: 'wss://example.baidu.com'
	});
	swan.onSocketOpen((res) => {
		console.log('WebSocket连接已打开！', res.header);
	});
})();

(() => {
	swan.connectSocket({
		url: 'wss://example.baidu.com' // 仅为示例，并非真实的服务地址
	});
	swan.onSocketError((res) => {
		console.log('WebSocket连接打开失败，请检查！');
	});
})();

(() => {
	swan.connectSocket({
		url: 'wss://example.baidu.com'
	});
	swan.onSocketOpen(() => {
		swan.sendSocketMessage({
			data: 'baidu'
		});
	});
})();

(() => {
	swan.connectSocket({
		url: 'wss://example.baidu.com'
	});
	swan.onSocketOpen(() => {
		swan.sendSocketMessage({
			data: 'baidu'
		});
	});
	swan.onSocketMessage((res) => {
		console.log('收到服务器内容：', res.data);
	});
})();

(() => {
	swan.connectSocket({
		url: 'wss://example.baidu.com',
		success(res) {
			swan.closeSocket();
		}
	});
})();

(() => {
	swan.connectSocket({
		url: 'wss://example.baidu.com'
	});

	swan.onSocketClose((res) => {
		console.log('WebSocket 已关闭！');
	});

	swan.onSocketOpen(() => {
		swan.closeSocket();
	});
})();

(() => {
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.ocrIdCard({
				image,
				success(res) {
					console.log(res.words_result);
				}
			});
		}
	});
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.ocrBankCard({
				image,
				success(res) {
					console.log(res.result.bank_name);
				}
			});
		}
	});
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.ocrDrivingLicense({
				image,
				success(res) {
					console.log(res.words_result);
				}
			});
		}
	});
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.ocrVehicleLicense({
				image,
				success(res) {
					console.log(res.words_result);
				}
			});
		}
	});
})();

(() => {
	swan.ai.textReview({
		content: '',
		success(res) {
			console.log(res.result.spam); // 0 表示审核通过
		}
	});
})();

(() => {
	swan.ai.textToAudio({
		ctp: '1',
		lan: 'zh',
		tex: '这是一段测试文字',
		success(res) {
			console.log(res.filePath);
		}
	});
})();

(() => {
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.imageAudit({
				image,
				success(res) {
					console.log(res.conclusionType); // 1 为合规
				}
			});
		}
	});
})();

(() => {
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.advancedGeneralIdentify({
				image,
				success(res) {
					console.log(res.result);
				}
			});
		}
	});
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.objectDetectIdentify({
				image,
				success(res) {
					console.log(res.result);
				}
			});
		}
	});
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.carClassify({
				image,
				success(res) {
					console.log(res.result);
				}
			});
		}
	});
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.dishClassify({
				image,
				success(res) {
					console.log(res.result);
				}
			});
		}
	});
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.logoClassify({
				image,
				success(res) {
					console.log(res.result);
				}
			});
		}
	});
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.animalClassify({
				image,
				success(res) {
					console.log(res.result);
				}
			});
		}
	});
	swan.chooseImage({
		success(res) {
			const image = res.tempFilePaths[0];
			swan.ai.plantClassify({
				image,
				success(res) {
					console.log(res.result);
				}
			});
		}
	});
})();

(() => {
	const voiceRecognizer = swan.ai.getVoiceRecognizer();

	voiceRecognizer.onStart(() => {
		console.log('voice start');
	});
	voiceRecognizer.onRecognize(res => {
		console.log('voice recognize', res);
	});
	voiceRecognizer.onFinish(res => {
		console.log('voice end', res);
	});
	voiceRecognizer.onError(err => {
		console.log('voice error', err);
	});

	const options = {
		mode: 'dnn',
		longSpeech: false
	};

	voiceRecognizer.start(options);
})();

(() => {
	swan.chooseImage({
		count: 1,
		sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		success(res) {
			// 成功则返回图片的本地文件路径列表 tempFilePaths
			console.log(res.tempFilePaths);
			// 文件列表对象
			console.log(res.tempFiles);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
})();

(() => {
	swan.previewImage({
		current: '', // 当前显示图片的http链接
		urls: [], // 需要预览的图片http链接列表
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});

	swan.getImageInfo({
		src: '/xxx/xxx.jpg',
		success(res) {
			// 成功则返回图片高，宽，本地路径
			console.log(res.width);
			console.log(res.height);
			console.log(res.path);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
	swan.saveImageToPhotosAlbum({
		filePath: '/xxx/xxx.jpg',
		success(res) {
			console.log(res);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
})();

(() => {
	const recorderManager = swan.getRecorderManager();

	recorderManager.onStart(() => {
		// 开始录音事件
		console.log('recorder start');
	});
	recorderManager.onPause(() => {
		// 暂停录音事件
		console.log('recorder pause');
	});
	recorderManager.onStop((res) => {
		// 停止录音事件
		console.log('recorder stop', res);
		const { tempFilePath } = res;
	});

	const options = {
		duration: 10000,
		sampleRate: 44100,
		numberOfChannels: 1,
		encodeBitRate: 96000,
		format: 'aac'
	};

	recorderManager.start(options);
})();

(() => {
	const backgroundAudioManager = swan.getBackgroundAudioManager();

	backgroundAudioManager.title = '此时此刻';
	backgroundAudioManager.epname = '此时此刻';
	backgroundAudioManager.singer = '许巍';
	backgroundAudioManager.coverImgUrl = 'xxx';
	backgroundAudioManager.src = 'xxx';
})();

(() => {
	const innerAudioContext = swan.createInnerAudioContext();
	innerAudioContext.src = 'xxx';
	innerAudioContext.autoplay = true;
	innerAudioContext.seek({
		position: 10
	});
	innerAudioContext.onPlay((res) => {
		console.log('开始播放');
	});
})();

(() => {
	Page({
		data: {
			sourceType: ['album', 'camera'],
			compressed: false,
			maxDuration: 60,
			src: ''
		},

		chooseVideo() {
			const self = this;
			swan.chooseVideo({
				sourceType: this.getData('sourceType'),
				compressed: this.getData('compressed'),
				maxDuration: this.getData('maxDuration'),
				success(res) {
					// 成功返回选定视频的临时文件路径
					self.setData('src', res.tempFilePath);
				},
				fail(err) {
					console.log('错误码：' + err.errCode);
					console.log('错误信息：' + err.errMsg);
				}
			});
		}
	});
	swan.saveVideoToPhotosAlbum({
		filePath: 'bdfile://xxx',
		success(res) {
			console.log(res);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
})();

(() => {
	const myVideo = swan.createVideoContext('myVideo');
	myVideo.play();
})();

(() => {
	swan.chooseImage({
		count: 1,
		success(res) {
			const tempFilePaths = res.tempFilePaths;
			swan.saveFile({
				tempFilePath: tempFilePaths[0],
				success(res) {
					const savedFilePath = res.savedFilePath;
				}
			});
		}
	});
	swan.getFileInfo({
		filePath: 'bdfile://somefile',
		success(res) {
			console.log(res.size);
			console.log(res.digest);
		}
	});
	swan.getSavedFileList({
		success(res) {
			const fileList = res.fileList;
		}
	});
	swan.getSavedFileInfo({
		filePath: 'bdfile://somefile',
		success(res) {
			console.log(res.size);
			console.log(res.createTime);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
})();

(() => {
	swan.getSavedFileList({
		success(res) {
			if (res.fileList.length > 0) {
				swan.removeSavedFile({
					filePath: res.fileList[0].filePath,
					success(res) {
						console.log(res.filePath);
					}
				});
			}
		}
	});
})();

(() => {
	swan.downloadFile({
		url: 'https://smartprogram.baidu.com/xxx.pdf',
		success(res) {
			const filePath = res.tempFilePath;
			swan.openDocument({
				filePath,
				success(res) {
					console.log('打开文档成功');
				}
			});
		}
	});
})();

(() => {
	swan.setStorage({
		key: 'key',
		data: 'value'
	});
})();

(() => {
	try {
		swan.setStorageSync('key', 'value');
	} catch (e) {
	}
	swan.getStorage({
		key: 'key',
		success(res) {
			console.log(res.data);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
	try {
		const result = swan.getStorageSync('key');
	} catch (e) {
	}
	swan.getStorageInfo({
		success(res) {
			console.log(res.keys);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
	try {
		const result = swan.getStorageInfoSync();
		console.log(result);
	} catch (e) {
	}
})();

(() => {
	swan.removeStorage({
		key: 'key',
		success(res) {
			console.log(res);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
	try {
		swan.removeStorageSync('key');
	} catch (e) {
	}
	try {
		swan.clearStorageSync();
	} catch (e) {
	}
})();

(() => {
	swan.getLocation({
		type: 'gcj02',
		success(res) {
			console.log('纬度：' + res.latitude);
			console.log('经度：' + res.longitude);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
})();

(() => {
	swan.getLocation({
		type: 'gcj02',
		success(res) {
			swan.openLocation({
				latitude: res.latitude,
				longitude: res.longitude,
				scale: 18
			});
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
})();

(() => {
	let mapContext: swan.MapContext;
	Page({
		data: {
			latitude: '40.042500',
			longitude: '116.274040',
		},
		onReady() {
			mapContext = swan.createMapContext('myMap');
		},
		getCenterLocation() {
			mapContext.getCenterLocation({
				success(res) {
					console.log("经度" + res.longitude);
					console.log("纬度" + res.latitude);
				}
			});
		},
		moveToLocation() {
			mapContext.moveToLocation();
		},
		translateMarker() {
			mapContext.translateMarker({
				markerId: 0,
				rotate: 90,
				autoRotate: true,
				duration: 1000,
				destination: {
					latitude: 23.10229,
					longitude: 113.3345211,
				},
				animationEnd() {
					console.log('animation end');
				}
			});
		},
		includePoints() {
			mapContext.includePoints({
				padding: [10],
				points: [{
					latitude: 23,
					longitude: 113.33,
				}, {
					latitude: 23,
					longitude: 113.3345211,
				}]
			});
		},
		getRegion() {
			mapContext.getRegion({
				success(res) {
					console.log("西南角的经纬度" + res.southwest);
					console.log("东北角的经纬度" + res.northeast);
				}
			});
		}
	});
})();

(() => {
	Page({
		onReady() {
			const ctx = this.createCanvasContext('myCanvas');
			ctx.setFillStyle('#ff0000');
			ctx.arc(100, 100, 50, 0, 2 * Math.PI);
			ctx.fill();
			ctx.draw();
		}
	});
	Page({
		onReady() {
			const ctx = this.createCanvasContext('myCanvas');
		}
	});
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.setFillStyle('#ff0000');
	ctx.arc(100, 100, 50, 0, 2 * Math.PI);
	ctx.fill();

	ctx.draw();

	swan.canvasGetImageData({
		canvasId: 'myCanvas',
		x: 0,
		y: 0,
		width: 100,
		height: 100,
		success(res) {
			console.log(res);
		}
	});
	const data = new Uint8ClampedArray([255, 0, 0, 1]);
	swan.canvasPutImageData({
		canvasId: 'myCanvas',
		data,
		x: 0,
		y: 0,
		width: 1,
		height: 2,
		success(res) {
			console.log('success');
		}
	});
	swan.canvasToTempFilePath({
		x: 100,
		y: 200,
		width: 50,
		height: 50,
		destWidth: 100,
		destHeight: 100,
		canvasId: 'myCanvas',
		success(res) {
			console.log(res.tempFilePath);
		}
	});
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.setFillStyle('blue');
	ctx.fillRect(30, 30, 150, 75);
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.setFillStyle('blue');
	ctx.setShadow(10, 50, 50, 'red');
	ctx.fillRect(30, 30, 150, 75);
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	// Create linear gradient
	const grd = ctx.createLinearGradient(0, 0, 200, 0);
	grd.addColorStop(0, 'blue');
	grd.addColorStop(1, 'red');

	// Fill with gradient
	ctx.setFillStyle(grd);
	ctx.fillRect(30, 30, 150, 80);
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	// Create circular gradient
	const grd = ctx.createCircularGradient(75, 50, 50);
	grd.addColorStop(0, 'red');
	grd.addColorStop(1, 'blue');

	// Fill with gradient
	ctx.setFillStyle(grd);
	ctx.fillRect(30, 30, 150, 80);
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	// Create circular gradient
	const grd = ctx.createLinearGradient(30, 10, 120, 10);
	grd.addColorStop(0, 'red');
	grd.addColorStop(0.16, 'orange');
	grd.addColorStop(0.33, 'yellow');
	grd.addColorStop(0.5, 'green');
	grd.addColorStop(0.66, 'cyan');
	grd.addColorStop(0.83, 'blue');
	grd.addColorStop(1, 'purple');

	// Fill with gradient
	ctx.setFillStyle(grd);
	ctx.fillRect(30, 30, 150, 80);
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.beginPath();
	ctx.moveTo(30, 10);
	ctx.lineTo(200, 10);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineWidth(5);
	ctx.moveTo(50, 30);
	ctx.lineTo(200, 30);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineWidth(10);
	ctx.moveTo(70, 50);
	ctx.lineTo(200, 50);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineWidth(15);
	ctx.moveTo(90, 70);
	ctx.lineTo(200, 70);
	ctx.stroke();

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.beginPath();
	ctx.moveTo(30, 10);
	ctx.lineTo(200, 10);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineCap('butt');
	ctx.setLineWidth(10);
	ctx.moveTo(50, 30);
	ctx.lineTo(200, 30);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineCap('round');
	ctx.setLineWidth(10);
	ctx.moveTo(70, 50);
	ctx.lineTo(200, 50);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineCap('square');
	ctx.setLineWidth(10);
	ctx.moveTo(90, 70);
	ctx.lineTo(200, 70);
	ctx.stroke();

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.beginPath();
	ctx.moveTo(10, 10);
	ctx.lineTo(100, 50);
	ctx.lineTo(10, 90);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineJoin('bevel');
	ctx.setLineWidth(10);
	ctx.moveTo(50, 10);
	ctx.lineTo(140, 50);
	ctx.lineTo(50, 90);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineJoin('round');
	ctx.setLineWidth(10);
	ctx.moveTo(90, 10);
	ctx.lineTo(180, 50);
	ctx.lineTo(90, 90);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineJoin('miter');
	ctx.setLineWidth(10);
	ctx.moveTo(130, 10);
	ctx.lineTo(220, 50);
	ctx.lineTo(130, 90);
	ctx.stroke();

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.setLineDash([10, 20], 5);
	ctx.beginPath();
	ctx.moveTo(0, 100);
	ctx.lineTo(400, 100);
	ctx.stroke();
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.beginPath();
	ctx.setLineWidth(10);
	ctx.setLineJoin('miter');
	ctx.setMiterLimit(1);
	ctx.moveTo(10, 10);
	ctx.lineTo(100, 50);
	ctx.lineTo(10, 90);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineWidth(10);
	ctx.setLineJoin('miter');
	ctx.setMiterLimit(2);
	ctx.moveTo(50, 10);
	ctx.lineTo(140, 50);
	ctx.lineTo(50, 90);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineWidth(10);
	ctx.setLineJoin('miter');
	ctx.setMiterLimit(3);
	ctx.moveTo(90, 10);
	ctx.lineTo(180, 50);
	ctx.lineTo(90, 90);
	ctx.stroke();

	ctx.beginPath();
	ctx.setLineWidth(10);
	ctx.setLineJoin('miter');
	ctx.setMiterLimit(4);
	ctx.moveTo(130, 10);
	ctx.lineTo(220, 50);
	ctx.lineTo(130, 90);
	ctx.stroke();

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.rect(30, 30, 150, 75);
	ctx.setFillStyle('blue');
	ctx.fill();
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.setFillStyle('blue');
	ctx.fillRect(30, 30, 150, 75);
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.setStrokeStyle('blue');
	ctx.strokeRect(30, 30, 150, 75);
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.setFillStyle('red');
	ctx.fillRect(0, 0, 150, 200);
	ctx.setFillStyle('blue');
	ctx.fillRect(150, 0, 150, 200);
	ctx.clearRect(30, 30, 150, 75);
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.moveTo(100, 100);
	ctx.lineTo(10, 100);
	ctx.lineTo(10, 10);
	ctx.fill();
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.moveTo(100, 100);
	ctx.lineTo(10, 100);
	ctx.lineTo(10, 10);
	ctx.stroke();
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.rect(10, 10, 100, 30);
	ctx.setFillStyle('red');
	ctx.fill();
	ctx.beginPath();
	ctx.rect(10, 40, 100, 30);
	ctx.setFillStyle('blue');
	ctx.fillRect(10, 70, 100, 30);
	ctx.rect(10, 100, 100, 30);
	ctx.setFillStyle('green');
	ctx.fill();
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.moveTo(100, 100);
	ctx.lineTo(10, 100);
	ctx.lineTo(10, 10);
	ctx.closePath();
	ctx.stroke();
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.moveTo(10, 10);
	ctx.lineTo(100, 10);
	ctx.moveTo(10, 100);
	ctx.lineTo(100, 100);
	ctx.stroke();
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.moveTo(10, 10);
	ctx.rect(10, 10, 100, 50);
	ctx.lineTo(110, 60);
	ctx.stroke();
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.arc(100, 75, 50, 0, 2 * Math.PI);
	ctx.setFillStyle('blue');
	ctx.fill();
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	ctx.strokeRect(10, 10, 25, 15);
	ctx.scale(2, 2);
	ctx.strokeRect(10, 10, 25, 15);
	ctx.scale(2, 2);
	ctx.strokeRect(10, 10, 25, 15);

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	ctx.strokeRect(100, 10, 150, 100);
	ctx.rotate(20 * Math.PI / 180);
	ctx.strokeRect(100, 10, 150, 100);
	ctx.rotate(20 * Math.PI / 180);
	ctx.strokeRect(100, 10, 150, 100);

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	ctx.strokeRect(10, 10, 150, 100);
	ctx.translate(20, 20);
	ctx.strokeRect(10, 10, 150, 100);
	ctx.translate(20, 20);
	ctx.strokeRect(10, 10, 150, 100);

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	swan.downloadFile({
		url: 'https://b.bdstatic.com/searchbox/icms/searchbox/img/LOGO300x300.jpg',
		success(res) {
			ctx.save();
			ctx.beginPath();
			ctx.arc(50, 50, 25, 0, 2 * Math.PI);
			ctx.clip();
			ctx.drawImage(res.tempFilePath, 25, 25);
			ctx.restore();
			ctx.draw();
		}
	});
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	ctx.setFontSize(20);
	ctx.fillText('20', 20, 20);
	ctx.setFontSize(30);
	ctx.fillText('30', 40, 40);
	ctx.setFontSize(40);
	ctx.fillText('40', 60, 60);
	ctx.setFontSize(50);
	ctx.fillText('50', 90, 90);

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	ctx.setFontSize(20);
	ctx.fillText('Hello', 20, 20);
	ctx.fillText('World', 100, 100);

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	ctx.setStrokeStyle('red');
	ctx.moveTo(150, 20);
	ctx.lineTo(150, 170);
	ctx.stroke();

	ctx.setFontSize(15);
	ctx.setTextAlign('left');
	ctx.fillText('textAlign=left', 150, 60);

	ctx.setTextAlign('center');
	ctx.fillText('textAlign=center', 150, 80);

	ctx.setTextAlign('right');
	ctx.fillText('textAlign=right', 150, 100);

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	ctx.setStrokeStyle('red');
	ctx.moveTo(5, 75);
	ctx.lineTo(295, 75);
	ctx.stroke();

	ctx.setFontSize(20);

	ctx.setTextBaseline('top');
	ctx.fillText('top', 5, 75);

	ctx.setTextBaseline('middle');
	ctx.fillText('middle', 50, 75);

	ctx.setTextBaseline('bottom');
	ctx.fillText('bottom', 120, 75);

	ctx.setTextBaseline('normal');
	ctx.fillText('normal', 200, 75);

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	swan.chooseImage({
		success(res) {
			ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100);
			ctx.draw();
		}
	});
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');

	ctx.setFillStyle('red');
	ctx.fillRect(10, 10, 150, 100);
	ctx.setGlobalAlpha(0.2);
	ctx.setFillStyle('blue');
	ctx.fillRect(50, 50, 150, 100);
	ctx.setFillStyle('yellow');
	ctx.fillRect(100, 100, 150, 100);

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.font = 'italic bold 20px cursive';
	const metrics = ctx.measureText('Hello World');
	console.log(metrics.width);
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	const pattern = ctx.createPattern('/path/to/image', 'repeat-x');
	ctx.fillStyle = pattern;
	ctx.fillRect(0, 0, 300, 150);
	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	// Draw quadratic curve
	ctx.beginPath();
	ctx.moveTo(20, 20);
	ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
	ctx.setStrokeStyle('black');
	ctx.stroke();

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	// Draw quadratic curve
	ctx.beginPath();
	ctx.moveTo(20, 20);
	ctx.quadraticCurveTo(20, 100, 200, 20);
	ctx.setStrokeStyle('blue');
	ctx.stroke();

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	// save the default fill style
	ctx.save();
	ctx.setFillStyle('blue');
	ctx.fillRect(10, 10, 150, 100);

	// restore to the previous saved state
	ctx.restore();
	ctx.fillRect(50, 50, 150, 100);

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	// save the default fill style
	ctx.save();
	ctx.setFillStyle('blue');
	ctx.fillRect(10, 10, 150, 100);

	// restore to the previous saved state
	ctx.restore();
	ctx.fillRect(50, 50, 150, 100);

	ctx.draw();
})();

(() => {
	const ctx = swan.createCanvasContext('myCanvas');
	ctx.setFillStyle('blue');
	ctx.fillRect(10, 10, 150, 100);
	ctx.draw();
	ctx.fillRect(30, 30, 150, 100);
	ctx.draw();
})();

(() => {
	swan.showToast({
		title: '我是标题',
		icon: 'loading',
		duration: 1000,
	});
	swan.showLoading({
		title: '加载中',
		mask: 'true'
	});

	setTimeout(() => {
		swan.hideLoading();
	}, 2000);

	swan.showModal({
		title: '提示',
		content: '这是一个模态弹窗',
		cancelColor: '#999999',
		confirmColor: '#0099cc',
		success(res) {
			if (res.confirm) {
				console.log('用户点击了确定');
			} else if (res.cancel) {
				console.log('用户点击了取消');
			}
		}
	});
	swan.showActionSheet({
		itemList: ['同意', '一般', '不同意'],
		success(res) {
			console.log(`用户点击了第${(res.tapIndex + 1)}个按钮`);
		}
	});
})();

(() => {
	swan.setNavigationBarTitle({
		title: '我是页面标题'
	});
	swan.setNavigationBarColor({
		frontColor: '#ffffff',
		backgroundColor: '#ff0000',
		animation: {
			duration: 500,
			timingFunc: 'linear'
		}
	});
})();

(() => {
	swan.setTabBarBadge({
		index: 0,
		text: '文本'
	});
	swan.removeTabBarBadge({
		index: 0
	});
	swan.showTabBarRedDot({
		index: 0
	});
	swan.hideTabBarRedDot({
		index: 0
	});
	swan.setTabBarStyle({
		color: '#FFFFBD',
		selectedColor: '#FFFFBD',
		backgroundColor: '#FFFFBD',
		borderStyle: 'white'
	});
	swan.setTabBarItem({
		index: 0,
		text: '文本',
		// 图片路径
		iconPath: '/images/component_normal.png',
		// 选中图片路径
		selectedIconPath: '/images/component_selected.png',
	});
	swan.showTabBar({
		success(res) {
			console.log(res);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
	swan.hideTabBar({
		success(res) {
			console.log(res);
		},
		fail(err) {
			console.log('错误码：' + err.errCode);
			console.log('错误信息：' + err.errMsg);
		}
	});
})();

(() => {
	swan.navigateTo({
		// 此路径为相对路径；如需写为绝对地址，则可写为‘/example/xxx?key=valu’。
		url: 'example/xxx?key=value'
	});
	swan.redirectTo({
		// 此路径为相对路径；如需写为绝对地址，则可写为‘/example/xxx?key=valu’。
		url: 'example/xxx?key=value'
	});
	swan.switchTab({
		url: '/list',
	});
	// 注意：调用 navigateTo 跳转时，调用页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码

	// 当前是首页
	swan.navigateTo({
		url: 'list?key=value'
	});

	// 当前是列表页
	swan.navigateTo({
		url: 'detail?key=value'
	});

	// 在详情页内 navigateBack，将返回首页
	swan.navigateBack({
		delta: 2
	});
	swan.reLaunch({
		// 此路径为相对路径；如需写为绝对地址，则可写为‘/example/xxx?key=valu’。
		url: 'example/xxx?key=value'
	});
})();

(() => {
	const animation = swan.createAnimation({
		transformOrigin: "50% 50%",
		duration: 1000,
		timingFunction: "ease",
		delay: 0
	});
	Page({
		data: {
			animationData: {}
		},
		starttoanimate() {
			const animation = swan.createAnimation();
			animation.rotate(90).translateY(10).step();
			animation.rotate(-90).translateY(-10).step();
			this.setData({
				animationData: animation.export()
			});
		}
	});
})();

(() => {
	swan.pageScrollTo({
		scrollTop: 0,
		duration: 300
	});
})();

(() => {
	Page({
		onPullDownRefresh() {
			// do something
		}
	});
	swan.startPullDownRefresh();
	swan.stopPullDownRefresh();
})();

(() => {
	swan.createIntersectionObserver({} as any, {
		selectAll: true
	}).relativeTo('.container')
		.observe('.ball', res => {
			console.log(res.intersectionRect); // 相交区域
			console.log(res.intersectionRect.left); // 相交区域的左边界坐标
			console.log(res.intersectionRect.top); // 相交区域的上边界坐标
			console.log(res.intersectionRect.width); // 相交区域的宽度
			console.log(res.intersectionRect.height); // 相交区域的高度
		});
	Page({
		queryMultipleNodes() {
			const query = swan.createSelectorQuery();
			query.select('#the-id').boundingClientRect();
			query.selectViewport().scrollOffset();
			query.exec((res) => {
				// res[0].top,       // #the-id节点的上边界坐标
				// res[1].scrollTop // 显示区域的竖直滚动位置
			});
		}
	});
	Component({
		// queryMultipleNodes() {
		// 	const query = swan.createSelectorQuery().in(this);
		// 	query.select('#the-id').boundingClientRect((res) => {
		// 		// res.top // 这个组件内 #the-id 节点的上边界坐标
		// 	}).exec();
		// }
	});
	Page({
		getRect() {
			swan.createSelectorQuery().select('#the-id').boundingClientRect((res) => {
				const rect = res as swan.NodesRefRect;
				rect.id;      // 节点的ID
				rect.dataset; // 节点的dataset
				rect.left;    // 节点的左边界坐标
				rect.right;   // 节点的右边界坐标
				rect.top;     // 节点的上边界坐标
				rect.bottom;  // 节点的下边界坐标
				rect.width;   // 节点的宽度
				rect.height;  // 节点的高度
			}).exec();
		},
		getAllRects() {
			swan.createSelectorQuery().selectAll('.a-class').boundingClientRect((rects) => {
				(rects as swan.NodesRefRect[]).forEach((rect) => {
					rect.id;      // 节点的ID
					rect.dataset; // 节点的dataset
					rect.left;    // 节点的左边界坐标
					rect.right;   // 节点的右边界坐标
					rect.top;     // 节点的上边界坐标
					rect.bottom;  // 节点的下边界坐标
					rect.width;   // 节点的宽度
					rect.height;  // 节点的高度
				});
			}).exec();
		}
	});
	Page({
		getScrollOffset() {
			swan.createSelectorQuery().selectViewport().scrollOffset((res) => {
				res.id;      // 节点的ID
				res.dataset; // 节点的dataset
				res.scrollLeft; // 节点的水平滚动位置
				res.scrollTop;  // 节点的竖直滚动位置
			}).exec();
		}
	});
	Page({
		getFields() {
			swan.createSelectorQuery().select('#the-id').fields({
				dataset: true,
				size: true,
				scrollOffset: true,
				properties: ['scrollX', 'scrollY'],
				computedStyle: ['margin', 'backgroundColor']
			}, (res) => {
				res.dataset;    // 节点的dataset
				res.width;      // 节点的宽度
				res.height;     // 节点的高度
				res.scrollLeft; // 节点的水平滚动位置
				res.scrollTop;  // 节点的竖直滚动位置
				res.scrollX;    // 节点 scroll-x 属性的当前值
				res.scrollY;    // 节点 scroll-y 属性的当前值
				// 此处返回指定要返回的样式名
				res.margin;
				res.backgroundColor;
			}).exec();
		}
	});
})();

(() => {
	swan.getSystemInfo({
		success(res) {
			console.log(res.model);
			console.log(res.pixelRatio);
			console.log(res.windowWidth);
			console.log(res.windowHeight);
			console.log(res.language);
			console.log(res.version);
			console.log(res.platform);
		}
	});
	try {
		const res = swan.getSystemInfoSync();
		console.log(res.model);
		console.log(res.pixelRatio);
		console.log(res.windowWidth);
		console.log(res.windowHeight);
		console.log(res.language);
		console.log(res.version);
		console.log(res.platform);
	} catch (e) {
		// Do something when catch error
	}
	try {
		const res = swan.getEnvInfoSync();
		console.log(res.appKey);
		console.log(res.appName);
		console.log(res.lastAppURL);
		console.log(res.sdkVersion);
		console.log(res.scheme);
	} catch (e) {
		// Do something when catch error
	}
	swan.canIUse('view.hover-class');
	swan.canIUse('scroll-view.scroll-x');
	swan.canIUse('cover-view');
	swan.canIUse('button.size.default');
	swan.canIUse('button.size.default');
	swan.canIUse('request.object.success.data');
	swan.canIUse('getSavedFileList');
	swan.canIUse('getSavedFileList.object');
	swan.canIUse('getSavedFileList.object.success');
})();

(() => {
	swan.onMemoryWarning((res) => {
		console.log('onMemoryWarningReceive');
	});
})();

(() => {
	swan.getNetworkType({
		success(res) {
			console.log(res.networkType);
		}
	});
	swan.onNetworkStatusChange((res) => {
		console.log(res.isConnected);
		console.log(res.networkType);
	});
})();

(() => {
	swan.onAccelerometerChange((res) => {
		console.log(res.x);
		console.log(res.y);
		console.log(res.z);
	});
	swan.startAccelerometer({
		interval: 'ui'
	});
	swan.stopAccelerometer();
})();

(() => {
	swan.onCompassChange((res) => {
		console.log(res.direction);
	});
	swan.startCompass();
	swan.stopCompass();
})();

(() => {
	swan.scanCode({
		success(res) {
			console.log(res.result);
			console.log(res.scanType);
		}
	});
})();

(() => {
	swan.onUserCaptureScreen(() => {
		console.log('用户截屏了');
	});
})();

(() => {
	swan.makePhoneCall({
		phoneNumber: '000000' // 仅为示例，并非真实的电话号码
	});
})();

(() => {
	swan.setClipboardData({
		data: 'baidu',
		success(res) {
			swan.getClipboardData({
				success(res) {
					console.log(res.data); // baidu
				}
			});
		}
	});
	swan.getClipboardData({
		success(res) {
			console.log(res.data);
		}
	});
})();

(() => {
	swan.getExtConfig({
		success(res) {
			console.log(res.extConfig);
		}
	});
	const data = swan.getExtConfigSync();
	console.log(data.extConfig);
})();

(() => {
	swan.login({
		success(res) {
			swan.request({
				url: 'https://xxx/xxx', // 开发者服务器地址
				data: {
					code: res.code
				}
			});
		},
		fail(err) {
			console.log('login fail', err);
		}
	});
	swan.checkSession({
		success(res) {
			console.log('登录态有效');
			swan.getUserInfo({
				success(res) {
					console.log('用户名', res.userInfo.nickName);
					swan.request({
						url: "https://xxx/decrypt_user_data", // 开发者服务器地址，对 data 进行解密
						data: {
							data: res.data,
							iv: res.iv
						}
					});
				}
			});
		},
		fail(err) {
			console.log('登录态无效');
			swan.login({
				success(res) {
					swan.request({
						url: 'https://xxx/xxx', // 开发者服务器地址，用 code 换取 session_key
						data: {
							code: res.code
						}
					});
				},
				fail(err) {
					console.log('登录失败', err);
				}
			});
		}
	});

	try {
		const result = swan.isLoginSync();
		console.log('isLoginSync', result);
	} catch (e) {
		console.log('error', e);
	}
})();

(() => {
	swan.authorize({
		scope: 'scope.userLocation',
		success(res) {
			// 用户已经同意智能小程序使用定位功能
			swan.getLocation();
		}
	});
})();

(() => {
	swan.getSwanId({
		success(res) {
			console.log(res.data.swanid);
		}
	});
	swan.getUserInfo({
		success(res) {
			console.log('用户名', res.userInfo.nickName);
		}
	});
})();

(() => {
	swan.openSetting({
		success(res) {
			console.log(res.authSetting['scope.userInfo']);
			console.log(res.authSetting['scope.userLocation']);
		}
	});
	swan.getSetting({
		success(res) {
			console.log(res.authSetting['scope.userInfo']);
			console.log(res.authSetting['scope.userLocation']);
		}
	});
})();

(() => {
	Page({
		onShareAppMessage() {
			return {
				title: '智能小程序示例',
				content: '世界很复杂，百度更懂你',
				path: '/pages/openShare/openShare?key=value'
			};
		}
	});
	swan.openShare({
		title: '智能小程序示例',
		content: '世界很复杂，百度更懂你',
		path: '/pages/openShare/openShare?key=value'
	});
})();

(() => {
	swan.chooseAddress({
		success(res) {
			console.log(res.userName);
			console.log(res.postalCode);
			console.log(res.provinceName);
			console.log(res.cityName);
			console.log(res.countyName);
			console.log(res.detailInfo);
			console.log(res.telNumber);
		}
	});
})();

(() => {
	swan.requestPolymerPayment({
		orderInfo: {
			dealId: "470193086",
			appKey: "MMMabc",
			totalAmount: "1",
			tpOrderId: "3028903626",
			dealTitle: "智能小程序Demo支付测试",
			signFieldsRange: 1,
			rsaSign: '',
			bizInfo: ''
		},
		success(res) {
			swan.showToast({
				title: '支付成功',
				icon: 'success'
			});
		},
		fail(err) {
			swan.showToast({
				title: JSON.stringify(err)
			});
			console.log('pay fail', err);
		}
	});
})();

(() => {
	swan.chooseInvoiceTitle({
		success(res) {
			console.log(res.type);
			console.log(res.title);
			console.log(res.taxNumber);
			console.log(res.companyAddress);
			console.log(res.telephone);
			console.log(res.bankName);
			console.log(res.bankAccount);
		}
	});
})();

(() => {
	swan.navigateToSmartProgram({
		appKey: '4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c', // 要打开的小程序 App Key
		path: '', // 打开的页面路径，如果为空则打开首页
		extraData: {
			foo: 'baidu'
		},
		success(res) {
			// 打开成功
		}
	});
	swan.navigateBackSmartProgram({
		extraData: {
			foo: 'baidu'
		},
		success(res) {
			// 返回成功
		}
	});
})();

(() => {
	if (swan.setMetaDescription) {
		swan.setMetaDescription({
			content: '当前小程序页面描述信息',
			success(res) {
				console.log('设置成功');
			},
			fail(res) {
				console.log('设置失败');
			},
			complete(res) {
				console.log('设置失败');
			}
		});
	}
	if (swan.setMetaKeywords) {
		swan.setMetaKeywords({
			content: '小程序, 关键字',
			success(res) {
				console.log('设置成功');
			},
			fail(res) {
				console.log('设置失败');
			},
			complete(res) {
				console.log('设置失败');
			}
		});
	}
	if (swan.setDocumentTitle) {
		swan.setDocumentTitle({
			title: '我是页面标题'
		});
	}
})();

(() => {
	swan.loadSubPackage({
		root: 'subpackage',
		success(res) {
			console.log('下载成功', res);
		},
		fail(err) {
			console.log('下载失败', err);
		}
	});
})();

(() => {
	const updateManager = swan.getUpdateManager();

	updateManager.onCheckForUpdate((res) => {
		// 请求完新版本信息的回调
		console.log(res.hasUpdate);
	});

	updateManager.onUpdateReady((res) => {
		swan.showModal({
			title: '更新提示',
			content: '新版本已经准备好，是否重启应用？',
			success(res) {
				if (res.confirm) {
					// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
					updateManager.applyUpdate();
				}
			}
		});
	});

	updateManager.onUpdateFailed((res) => {
		// 新的版本下载失败
	});
})();

(() => {
	// 打开调试
	swan.setEnableDebug({
		enableDebug: true
	});

	// 关闭调试
	swan.setEnableDebug({
		enableDebug: false
	});
})();

(() => {
	swan.reportAnalytics('purchase', {
		price: 120,
		color: 'red'
	});
})();
