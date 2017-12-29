// Type definitions for jweixin 1.0
// Project: https://mp.weixin.qq.com/wiki/11/74ad127cc054f6b80759c40f77ec03db.html
// Definitions by: taoqf <https://github.com/taoqf>
// 					gomydodo <https://github.com/gomydodo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/* =================== USAGE ===================
import * as wx from 'jweixin';
wx.config(...);
or
import { config } from 'jweixin';
config();
 =============================================== */

declare namespace wx {
	type ImageSizeType = 'original' | 'compressed';
	type ImageSourceType = 'album' | 'camera';
	type VideoSourceType = 'album' | 'camera';
	type ApiMethod = 'onMenuShareTimeline' |
		'onMenuShareAppMessage' |
		'onMenuShareQQ' |
		'onMenuShareWeibo' |
		'onMenuShareQZone' |
		'startRecord' |
		'stopRecord' |
		'onVoiceRecordEnd' |
		'playVoice' |
		'pauseVoice' |
		'stopVoice' |
		'onVoicePlayEnd' |
		'uploadVoice' |
		'downloadVoice' |
		'chooseImage' |
		'previewImage' |
		'uploadImage' |
		'downloadImage' |
		'translateVoice' |
		'getNetworkType' |
		'openLocation' |
		'getLocation' |
		'hideOptionMenu' |
		'showOptionMenu' |
		'hideMenuItems' |
		'showMenuItems' |
		'hideAllNonBaseMenuItem' |
		'showAllNonBaseMenuItem' |
		'closeWindow' |
		'scanQRCode' |
		'chooseWXPay' |
		'openProductSpecificView' |
		'addCard' |
		'chooseCard' |
		'openCard';
	// 所有JS接口列表
	type jsApiList = ApiMethod[];

	// 所有菜单项列表
	// 基本类
	type menuBase = "menuItem:exposeArticle" | // 举报
		"menuItem:setFont" | // 调整字体
		"menuItem:dayMode" | // 日间模式
		"menuItem:nightMode" | // 夜间模式
		"menuItem:refresh" | // 刷新
		"menuItem:profile" | // 查看公众号（已添加）
		"menuItem:addContact"; // 查看公众号（未添加）
	// 传播类
	type menuShare = "menuItem:share:appMessage" |	// 发送给朋友
		"menuItem:share:timeline" |	// 分享到朋友圈
		"menuItem:share:qq" |	// 分享到QQ
		"menuItem:share:weiboApp" |	// 分享到Weibo
		"menuItem:favorite" |	// 收藏
		"menuItem:share:facebook" |	// 分享到FB
		"menuItem:share:QZone";	// 分享到 QQ 空间

	// 保护类
	type menuProtected = "menuItem:editTag" |	// 编辑标签
		"menuItem:delete" |	// 删除
		"menuItem:copyUrl" |	// 复制链接
		"menuItem:originPage" |	// 原网页
		"menuItem:readMode" |	// 阅读模式
		"menuItem:openWithQQBrowser" |	// 在QQ浏览器中打开
		"menuItem:openWithSafari" |	// 在Safari中打开
		"menuItem:share:email" |	// 邮件
		"menuItem:share:brand";	// 一些特殊公众号

	type menuList = Array<menuBase | menuProtected | menuShare>;

	function config(conf: {
		debug?: boolean; // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: string; // 必填，公众号的唯一标识
		timestamp: number; // 必填，生成签名的时间戳
		nonceStr: string; // 必填，生成签名的随机串
		signature: string; // 必填，签名，见附录1
		jsApiList: jsApiList; // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	}): void;

	interface Resouce {
		localId: string;
	}
	interface BaseParams {
		success?(...args: any[]): void;
		/** 接口调用失败的回调函数 */
		fail?(...args: any[]): void;
		/** 接口调用结束的回调函数（调用成功、失败都会执行） */
		complete?(...args: any[]): void;
	}
	function ready(fn: () => void): void;
	function error(fn: (err: { errMsg: string; }) => void): void;

	interface IcheckJsApi extends BaseParams {
		jsApiList: jsApiList; // 需要检测的JS接口列表，所有JS接口列表见附录2,
		// 以键值对的形式返回，可用的api值true，不可用为false
		// 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
		success(res: { checkResult: { [api: string]: boolean }, errMsg: string; }): void;
	}
	/**
	 * 判断当前客户端版本是否支持指定JS接口
	 * 备注：checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测。
	 */
	function checkJsApi(params: IcheckJsApi): void;

	interface IonMenuShareTimeline extends BaseParams {
		title: string; // 分享标题
		link: string; // 分享链接
		imgUrl: string; // 分享图标
		// 用户确认分享后执行的回调函数
		success(): void;
		// 用户取消分享后执行的回调函数
		cancel(): void;
	}
	/*=============================基础接口================================*/
	/**
	 * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
	 */
	function onMenuShareTimeline(params: IonMenuShareTimeline): void;

	interface IonMenuShareAppMessage extends BaseParams {
		title: string;	// 分享标题
		desc: string;	// 分享描述
		link: string;	// 分享链接
		imgUrl: string;	// 分享图标
		type?: 'music' | 'video或link' | 'link';		// 分享类型,music、video或link，不填默认为link
		dataUrl?: string; // 如果type是music或video，则要提供数据链接，默认为空
		// 用户确认分享后执行的回调函数
		success(): void;
		// 用户取消分享后执行的回调函数
		cancel(): void;
	}
	/**
	 * 获取“分享给朋友”按钮点击状态及自定义分享内容接口
	 */
	function onMenuShareAppMessage(params: IonMenuShareAppMessage): void;

	interface IonMenuShareQQ extends BaseParams {
		title: string; // 分享标题
		desc: string; // 分享描述
		link: string; // 分享链接
		imgUrl: string; // 分享图标
		// 用户确认分享后执行的回调函数
		success(): void;
		// 用户取消分享后执行的回调函数
		cancel(): void;
	}
	/**
	 * 获取“分享到QQ”按钮点击状态及自定义分享内容接口
	 */
	function onMenuShareQQ(params: IonMenuShareQQ): void;

	interface IonMenuShareWeibo extends BaseParams {
		title: string; // 分享标题
		desc: string; // 分享描述
		link: string; // 分享链接
		imgUrl: string; // 分享图标
		// 用户确认分享后执行的回调函数
		success(): void;
		// 用户取消分享后执行的回调函数
		cancel(): void;
	}
	/**
	 * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
	 */
	function onMenuShareWeibo(params: IonMenuShareWeibo): void;

	interface IonMenuShareQZone extends BaseParams {
		title: string; // 分享标题
		desc: string; // 分享描述
		link: string; // 分享链接
		imgUrl: string; // 分享图标
		// 用户确认分享后执行的回调函数
		success(): void;
		// 用户取消分享后执行的回调函数
		cancel(): void;
	}
	/**
	 * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
	 */
	function onMenuShareQZone(params: IonMenuShareQZone): void;
	/*=============================基础接口================================*/

	/*=============================图像接口================================*/
	interface IchooseImage extends BaseParams {
		/** 最多可以选择的图片张数，默认9 */
		count?: number;
		/** original 原图，compressed 压缩图，默认二者都有 */
		sizeType?: ImageSizeType[];
		/** album 从相册选图，camera 使用相机，默认二者都有 */
		sourceType?: ImageSourceType[];
		/** 成功则返回图片的本地文件路径列表 tempFilePaths */
		success(res: {
			sourceType: string;	// weixin album camera
			localIds: string[];
			errMsg: string;
		}): void;
	}
	/**
	 * 从本地相册选择图片或使用相机拍照。
	 */
	function chooseImage(params: IchooseImage): void;

	interface IpreviewImage extends BaseParams {
		current: string; // 当前显示图片的http链接
		urls: string[]; // 需要预览的图片http链接列表
	}
	/**
	 * 预览图片接口
	 */
	function previewImage(params: IpreviewImage): void;

	interface IuploadImage extends BaseParams {
		localId: string; // 需要上传的图片的本地ID，由chooseImage接口获得
		isShowProgressTips: number; // 默认为1，显示进度提示
		// 返回图片的服务器端ID
		success(res: { serverId: string }): void;
	}
	/**
	 * 上传图片接口
	 */
	function uploadImage(params: IuploadImage): void;

	interface IdownloadImage extends BaseParams {
		serverId: string; // 需要下载的图片的服务器端ID，由uploadImage接口获得
		isShowProgressTips: number; // 默认为1，显示进度提示
		// 返回图片下载后的本地ID
		success(res: Resouce): void;
	}
	/**
	 * 下载图片接口
	 */
	function downloadImage(params: IdownloadImage): void;
	
	interface IgetLocalImgData extends BaseParams {
		localId: string; // 图片的localID
		// localData是图片的base64数据，可以用img标签显示
		success(res: {localData: string}): void;
	}
	/**
	 * 获取本地图片接口
	 */
	function getLocalImgData(params: IgetLocalImgData): void;
	/*=============================图像接口================================*/
	/*=============================音频接口================================*/
	/**
	 * 开始录音接口
	 */
	function startRecord(): void;

	interface IstopRecord extends BaseParams {
		success(res: Resouce): void;
	}
	/**
	 * 停止录音接口
	 */
	function stopRecord(params: IstopRecord): void;

	interface IonVoiceRecordEnd extends BaseParams {
		// 录音时间超过一分钟没有停止的时候会执行 complete 回调
		complete(res: Resouce): void;
	}
	/**
	 * 监听录音自动停止接口
	 */
	function onVoiceRecordEnd(params: IonVoiceRecordEnd): void;

	interface IplaypausestopVoice extends BaseParams {
		localId: string; // 需要播放的音频的本地ID，由stopRecord接口获得
	}
	/**
	 * 播放语音接口
	 */
	function playVoice(params: IplaypausestopVoice): void;

	/**
	 * 暂停播放接口
	 */
	function pauseVoice(params: IplaypausestopVoice): void;
	/**
	 * 停止播放接口
	 */
	function stopVoice(params: IplaypausestopVoice): void;

	interface IonVoicePlayEnd extends BaseParams {
		success(res: Resouce): void;
	}
	/**
	 * 监听语音播放完毕接口
	 */
	function onVoicePlayEnd(params: IonVoicePlayEnd): void;

	interface IupdownloadVoice extends BaseParams {
		localId: string; // 需要上传的音频的本地ID，由stopRecord接口获得
		isShowProgressTips: number; // 默认为1，显示进度提示
		success(res: Resouce): void;
	}
	/**
	 * 上传语音接口
	 * 备注：上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器
	 * ，此处获得的 serverId 即 media_id，参考文档
	 * ../12 / 58bfcfabbd501c7cd77c19bd9cfa8354.html
	 * 目前多媒体文件下载接口的频率限制为10000次/ 天，
	 * 如需要调高频率，请邮件weixin - open@qq.com,
	 * 邮件主题为【申请多媒体接口调用量】，请对你的项目进行简单描述，
	 * 附上产品体验链接，并对用户量和使用量进行说明。
	 */
	function uploadVoice(params: IupdownloadVoice): void;
	/**
	 * 下载语音接口
	 */
	function downloadVoice(params: IupdownloadVoice): void;
	/*=============================音频接口================================*/
	/*=============================智能接口================================*/

	interface ItranslateVoice extends BaseParams {
		localId: string; // 需要识别的音频的本地Id，由录音相关接口获得
		isShowProgressTips: number; // 默认为1，显示进度提示
		success(res: {
			translateResult: string;
		}): void;
	}
	/**
	 * 识别音频并返回识别结果接口
	 */
	function translateVoice(params: ItranslateVoice): void;

	/*=============================智能接口================================*/

	/*=============================设备信息================================*/
	type networkType = '2g' | '3g' | '4g' | 'wifi';
	interface IgetNetworkType extends BaseParams {
		success(res: { networkType: networkType }): void;
	}
	/**
	 * 获取网络状态接口
	 */
	function getNetworkType(params: IgetNetworkType): void;
	/*=============================设备信息================================*/

	/*=============================地理位置================================*/
	interface IopenLocation extends BaseParams {
		latitude: number; // 纬度，浮点数，范围为90 ~ -90
		longitude: number; // 经度，浮点数，范围为180 ~ -180。
		name: string; // 位置名
		address: string; // 地址详情说明
		scale: number; // 地图缩放级别,整形值,范围从1~28。默认为最大
		infoUrl: string; // 在查看位置界面底部显示的超链接,可点击跳转
	}
	/**
	 * 使用微信内置地图查看位置接口
	 */
	function openLocation(params: IopenLocation): void;

	interface IgetLocation extends BaseParams {
		type: 'wgs84' | 'gcj02'; // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
		success(res: {
			latitude: number; // 纬度，浮点数，范围为90 ~ -90
			longitude: number; // 经度，浮点数，范围为180 ~ -180。
			speed: number; // 速度，以米/每秒计
			accuracy: number; // 位置精度
		}): void;
	}
	/**
	 * 获取地理位置接口
	 */
	function getLocation(params: IgetLocation): void;
	/*=============================地理位置================================*/
	/*=============================摇一摇周边================================*/
	interface IstartSearchBeacons extends BaseParams {
		ticket: string;  // 摇周边的业务ticket, 系统自动添加在摇出来的页面链接后面
		// 开启查找完成后的回调函数
		complete(argv: any): void;
	}
	/**
	 * 开启查找周边ibeacon设备接口
	 * 备注：如需接入摇一摇周边功能，请参考：申请开通摇一摇周边
	 */
	function startSearchBeacons(params: IstartSearchBeacons): void;

	interface IstopSearchBeacons extends BaseParams {
		// 关闭查找完成后的回调函数
		complete(res: any): void;
	}

	/**
	 * 关闭查找周边ibeacon设备接口
	 */
	function stopSearchBeacons(params: IstopSearchBeacons): void;

	interface IonSearchBeacons extends BaseParams {
		// 回调函数，可以数组形式取得该商家注册的在周边的相关设备列表
		complete(argv: any): void;
	}
	/**
	 * 监听周边ibeacon设备接口
	 */
	function onSearchBeacons(params: IonSearchBeacons): void;
	/*=============================摇一摇周边================================*/
	/*=============================界面操作================================*/

	/**
	 * 隐藏右上角菜单接口
	 */
	function hideOptionMenu(): void;

	/**
	 * 显示右上角菜单接口
	 */
	function showOptionMenu(): void;

	/**
	 * 关闭当前网页窗口接口
	 */
	function closeWindow(): void;

	interface IhideMenuItems extends BaseParams {
		menuList: Array<menuProtected | menuShare>; // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
	}
	/**
	 * 批量隐藏功能按钮接口
	 */
	function hideMenuItems(): void;

	interface IshowMenuItems extends BaseParams {
		menuList: menuList; // 要显示的菜单项，所有menu项见附录3
	}
	/**
	 * 批量显示功能按钮接口
	 */
	function showMenuItems(params: IshowMenuItems): void;

	/**
	 * 隐藏所有非基础按钮接口
	 * “基本类”按钮详见附录3
	 */
	function hideAllNonBaseMenuItem(): void;

	/**
	 * 显示所有功能按钮接口
	 */
	function showAllNonBaseMenuItem(): void;
	/*=============================界面操作================================*/
	/*=============================微信扫一扫================================*/

	type scanType = "qrCode" | "barCode";

	interface IscanQRCode extends BaseParams {
		needResult: 0 | 1; // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
		scanType: scanType[]; // 可以指定扫二维码还是一维码，默认二者都有
		// 当needResult 为 1 时，扫码返回的结果
		success(res: { resultStr: string; }): void;
	}
	/**
	 * 调起微信扫一扫接口
	 */
	function scanQRCode(params: IscanQRCode): void;
	/*=============================微信扫一扫================================*/
	/*=============================微信小店================================*/

	interface IopenProductSpecificView extends BaseParams {
		productId: string; // 商品id
		viewType: '0' | '1' | '2'; // 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
	}
	/**
	 * 跳转微信商品页接口
	 */
	function openProductSpecificView(params: IopenProductSpecificView): void;
	/*=============================微信卡券================================*/

	interface IchooseCard extends BaseParams {
		shopId: string; // 门店Id
		cardType: string; // 卡券类型
		cardId: string; // 卡券Id
		timestamp: number; // 卡券签名时间戳
		nonceStr: string; // 卡券签名随机串
		signType: string; // 签名方式，默认'SHA1'
		cardSign: string; // 卡券签名
		success(res: {
			cardList: string[];
		}): void;
	}
	/**
	 * 拉取适用卡券列表并获取用户选择信息
	 */
	function chooseCard(params: IchooseCard): void;

	interface IaddCard extends BaseParams {
		cardList: Array<{
			cardId: string;
			cardExt: string;
		}>; // 需要添加的卡券列表
		success(res: { cardList: string[]; }): void;
	}
	/**
	 * 批量添加卡券接口
	 */
	function addCard(): void;

	interface IopenCard extends BaseParams {
		cardList: Array<{
			cardId: string;
			code: string;
		}>; // 需要打开的卡券列表
	}
	/**
	 * 查看微信卡包中的卡券接口
	 */
	function openCard(params: IopenCard): void;

	interface IconsumeAndShareCard extends BaseParams {
		cardId: string;
		code: string;
	}
	/**
	 * 核销后再次赠送卡券接口
	 */
	function consumeAndShareCard(params: IconsumeAndShareCard): void;
	/*=============================微信卡券================================*/
	/*=============================微信支付================================*/

	interface IchooseWXPay extends BaseParams {
		timestamp: number; // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
		nonceStr: string; // 支付签名随机串，不长于 32 位
		package: string; // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
		signType: string; // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
		paySign: string; // 支付签名
		// 支付成功后的回调函数
		success(res: any): void;
	}
	/**
	 * 发起一个微信支付请求
	 */
	function chooseWXPay(params: IchooseWXPay): void;
	/*=============================微信支付================================*/
}

declare function wx(): void;
export = wx;
