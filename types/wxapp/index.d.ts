// Type definitions for wxapp 1.3
// Project: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/MINA.html
// Definitions by: cipchk <https://github.com/cipchk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// ==========global==========
export namespace App {
    interface Options {
        /**
         * 生命周期函数--监听小程序初始化
         * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
         */
        onLaunch?(options: OnOptions): void;
        /**
         * 生命周期函数--监听小程序显示
         * 当小程序启动，或从后台进入前台显示，会触发 onShow
         */
        onShow?(options: OnOptions): void;
        /**
         * 生命周期函数--监听小程序隐藏
         * 当小程序从前台进入后台，会触发 onHide
         */
        onHide?(): void;
        /**
         * 错误监听函数
         * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
         * @param {string} msg 异常描述
         */
        onError?(msg: string): void;
        [key: string]: any;
    }

    interface OnOptions {
        /**
         * 打开小程序的路径
         * @type {string}
         */
        path?: string;
        /**
         * 打开小程序的query
         * @type {{ [key: string]: any }}
         */
        query?: { [key: string]: any };
        /**
         * 打开小程序的场景值
         * @type {number}
         */
        scene?: number;
        /**
         * shareTicket，详见 [获取更多转发信息](https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#获取更多转发信息)
         * @type {string}
         */
        shareTicket?: string;
        /**
         * 当场景为由另一个小程序打开时，返回此字段
         * @type {ReferrerInfoOptions}
         */
        referrerInfo?: ReferrerInfoOptions;
    }

    interface ReferrerInfoOptions {
        /**
         * 来源小程序的 appId
         * @type {string}
         */
        appId?: string;
        /**
         * 来源小程序传过来的数据
         * @type {{ [key: string]: any }}
         */
        extraData?: {
            [key: string]: any
        };
    }
}

/**
 * 注册一个小程序
 * 注意：
 *   App() 必须在 app.js 中注册，且不能注册多个。
 *   不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。
 *   不要在 onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。
 */
export function App(app: App.Options): void;

/**
 * 获取小程序实例
 * 注意：通过 getApp() 获取实例之后，不要私自调用生命周期函数。
 */
export function getApp(): App.Options;

export namespace Page {
    interface Instance {
        /**
         * 页面的初始数据
         * @type {Data}
         */
        data?: Data;
        /**
         * 生命周期函数--监听页面加载
         * 一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。
         */
        onLoad?(options: OnLoadOptions): void;
        /**
         * 生命周期函数--监听页面初次渲染完成
         * 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
         * 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。
         */
        onReady?(): void;
        /**
         * 生命周期函数--监听页面显示
         * 每次打开页面都会调用一次。
         */
        onShow?(): void;
        /**
         * 生命周期函数--监听页面隐藏
         * 当navigateTo或底部tab切换时调用。
         */
        onHide?(): void;
        /**
         * 生命周期函数--监听页面卸载
         * 当redirectTo或navigateBack的时候调用。
         */
        onUnload?(): void;
        /**
         * 页面相关事件处理函数--监听用户下拉动作
         * 需要在config的window选项中开启enablePullDownRefresh。
         * 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
         */
        onPullDownRefresh?(): void;
        /**
         * 用户点击右上角转发
         * 只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
         * 用户点击转发按钮的时候会调用
         * 此事件需要 return 一个 Object，用于自定义转发内容
         */
        onShareAppMessage?(options?: OnShareAppMessageOptions): OnShareReturn;
        /**
         * 当前页面的路径
         * @type {string}
         */
        route?: string;
        /**
         * 将数据从逻辑层发送到视图层
         */
        setData?(): void;
    }

    interface Options extends Instance {
        [key: string]: any;
    }

    interface Data {
        [key: string]: any;
    }

    interface OnLoadOptions {
        [key: string]: any;
    }

    interface OnShareReturn {
        /**
         * 转发标题
         * 默认值：当前小程序名称
         * @type {string}
         */
        title?: string;
        /**
         * 转发路径
         * 默认值：当前页面 path ，必须是以 / 开头的完整路径
         * @type {string}
         */
        path?: string;
        [key: string]: any;
    }

    interface OnShareAppMessageOptions {
        /** 转发事件来源。button：页面内转发按钮；menu：右上角转发菜单 */
        from?: 'button' | 'menu';
        /** 如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined */
        target?: any;
    }
}

/**
 * 注册一个页面
 */
export function Page(app: Page.Options): void;

/**
 * 获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
 */
export function getCurrentPages(): Page.Options[];

// ==========global==========

export const wx: wx.WxAppStatic;
// WxAppImplicit
export namespace wx {
    interface WxAppImplicitBaseData {
        [key: string]: any;
    }

    interface WxAppImplicitBaseCallback {
        success?(...args: any[]): void;
        /** 接口调用失败的回调函数 */
        fail?(...args: any[]): void;
        /** 接口调用结束的回调函数（调用成功、失败都会执行） */
        complete?(...args: any[]): void;
    }

    interface SuccessOptions extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 开发者服务器返回的内容 */
        data?: string;
        /** 开发者服务器返回的状态码 */
        statusCode?: number;
        /** 开发者服务器返回的 HTTP Response Header */
        header?: WxAppImplicitBaseData;
    }

    type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

    // =====发起请求=====
    interface WxAppStatic {
        /**
         * 发起请求
         */
        request(options: RequestOptions): void;
    }

    interface RequestOptions extends WxAppImplicitBaseCallback {
        /** 开发者服务器接口地址 */
        url: string;
        /**
         * 请求的参数
         * @type {(WxAppImplicitBaseData | string)}
         */
        data?: WxAppImplicitBaseData | string;
        /**
         * 设置请求的 header , header 中不能设置 Referer
         * @type {WxAppImplicitBaseData}
         */
        header?: WxAppImplicitBaseData;
        /** 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT */
        method?: Method;
        /** 默认为 json。如果设置了 dataType 为 json，则会尝试对响应的数据做一次 JSON.parse */
        dataType?: string;
        /** 收到开发者服务成功返回的回调函数 */
        success?(res: SuccessOptions): void;
    }

    // =====上传、下载=====
    interface WxAppStatic {
        /**
         * 将本地资源上传到开发者服务器。
         * 如页面通过 `wx.chooseImage` 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。
         * 客户端发起一个 HTTPS POST 请求，其中 content-type 为 `multipart/form-data`。
         */
        uploadFile(options: UploadFileOptions): void;

        /**
         * 下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。
         */
        downloadFile(options: DownloadFileOptions): void;
    }

    interface UploadFileOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 开发者服务器 url */
        url: string;
        /** 要上传文件资源的路径 */
        filePath: string;
        /** 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容 */
        name: string;
        /**
         * HTTP 请求 Header , header 中不能设置 Referer
         * @type {WxAppImplicitBaseData}
         */
        header?: WxAppImplicitBaseData;
        /**
         * HTTP 请求中其他额外的 form data
         * @type {WxAppImplicitBaseData}
         */
        formData?: WxAppImplicitBaseData;
        /** 收到开发者服务成功返回的回调函数 */
        success?(res: SuccessOptions): void;
    }

    interface DownloadFileOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 下载资源的 url */
        url: string;
        /**
         * HTTP 请求 Header , header 中不能设置 Referer
         * @type {WxAppImplicitBaseData}
         */
        header?: WxAppImplicitBaseData;
        /** 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'} */
        success?(res: DownloadFileSuccessOptions): void;
    }

    interface DownloadFileSuccessOptions extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 文件的临时路径 */
        tempFilePath: string;
    }

    // =====WebSocket=====
    interface WxAppStatic {
        /** 创建一个 WebSocket 连接 */
        connectSocket(options: ConnectSocketOptions): void;

        /** 监听WebSocket连接打开事件。 */
        onSocketOpen(callback: (res?: any) => any): void;

        /** 监听WebSocket错误。 */
        onSocketError(callback: (res: any) => any): void;

        /** 通过 WebSocket 连接发送数据 */
        sendSocketMessage(options: SendSocketMessageOptions): void;

        /** 监听WebSocket接受到服务器的消息事件。 */
        onSocketMessage(callback: (res: { data: string | Uint8Array }) => any): void;

        /** 关闭WebSocket连接 */
        closeSocket(): void;

        /** 监听WebSocket关闭 */
        onSocketClose(callback: (res?: any) => any): void;
    }

    interface ConnectSocketOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        url: string;
        data?: WxAppImplicitBaseData;
        header?: WxAppImplicitBaseData;
        method?: Method;
        success?(res: DownloadFileSuccessOptions): void;
    }

    interface SendSocketMessageOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要发送的内容 */
        data: string | Uint8Array;
    }

    // =====图片=====
    interface WxAppStatic {
        /** 从本地相册选择图片或使用相机拍照 */
        chooseImage(options: ChooseImageOptions): void;
        /** 预览图片 */
        previewImage(options: PreviewImageOptions): void;
        /** 获取图片信息 */
        getImageInfo(options: GetImageInfoOptions): void;
        /** 保存图片到系统相册 */
        saveImageToPhotosAlbum(options: SaveImageToPhotosAlbumOptions): void;
    }

    interface File extends WxAppImplicitBaseData {
        /** 本地文件路径 */
        path?: string;
        /** 本地文件大小，单位：B */
        size?: number;
    }

    type SizeType = 'original' | 'compressed';
    type SourceTypeType = 'album' | 'camera';

    interface ChooseImageOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 最多可以选择的图片张数，默认9 */
        count?: number;
        /** original 原图，compressed 压缩图，默认二者都有 */
        sizeType?: SizeType[];
        /** album 从相册选图，camera 使用相机，默认二者都有 */
        sourceType?: SourceTypeType[];
        /** 成功则返回图片的本地文件路径列表 tempFilePaths */
        success(res: ChooseImageSuccessOptions): void;
    }

    interface ChooseImageSuccessOptions {
        errMsg?: string;
        tempFilePaths?: string[];
        tempFiles?: File[];
    }

    interface PreviewImageOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 当前显示图片的链接，不填则默认为 urls 的第一张 */
        current?: string;
        /** 需要预览的图片链接列表 */
        urls: string[];
        /** 成功则返回图片的本地文件路径列表 tempFilePaths */
        success(res: ChooseImageSuccessOptions): void;
    }

    interface GetImageInfoOptions extends WxAppImplicitBaseCallback {
        /** 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径 */
        src: string;
        /** 成功则返回图片的本地文件路径列表 tempFilePaths */
        success(res: GetImageInfoSuccessOptions): void;
    }

    interface GetImageInfoSuccessOptions extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 图片宽度，单位px */
        width?: number;
        /** 图片高度，单位px */
        height?: number;
        /** 返回图片的本地路径 */
        path?: string;
    }

    interface SaveImageToPhotosAlbumOptions extends WxAppImplicitBaseCallback {
        /** 图片文件路径，可以是临时文件路径也可以是永久文件路径 */
        filePath: string;
        /** 成功则返回图片的本地文件路径列表 tempFilePaths */
        success(res: { errMsg?: string }): void;
    }

    // =====录音=====
    interface WxAppStatic {
        /** 开始录音 */
        startRecord(options: StartRecordOptions): void;
        /** 主动调用停止录音 */
        stopRecord(): void;
    }

    interface StartRecordOptions extends WxAppImplicitBaseCallback {
        /** 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'} */
        success(res: { errMsg?: string, tempFilePath: string }): void;
    }

    // =====音频播放控制=====
    interface WxAppStatic {
        /** 开始录音 */
        playVoice(options: PlayVoiceOptions): void;
        /** 暂停正在播放的语音 */
        pauseVoice(): void;
        /** 结束播放语音 */
        stopVoice(): void;
    }

    interface PlayVoiceOptions extends WxAppImplicitBaseCallback {
        /** 需要播放的语音文件的文件路径 */
        filePath: string;
    }

    // =====音乐播放控制=====
    interface WxAppStatic {
        /** 获取后台音乐播放状态 */
        getBackgroundAudioPlayerState(options: GetBackgroundAudioPlayerStateOptions): void;
        /** 使用后台播放器播放音乐 */
        playBackgroundAudio(options: PlayBackgroundAudioOptions): void;
        /** 暂停播放音乐 */
        pauseBackgroundAudio(): void;
        /** 控制音乐播放进度 */
        seekBackgroundAudio(options: SeekBackgroundAudioOptions): void;
        /** 停止播放音乐 */
        stopBackgroundAudio(): void;
        /** 监听音乐播放 */
        onBackgroundAudioPlay(callback: (res?: any) => any): void;
        /** 监听音乐暂停 */
        onBackgroundAudioPause(callback: (res?: any) => any): void;
        /** 监听音乐停止 */
        onBackgroundAudioStop(callback: (res?: any) => any): void;
    }

    interface GetBackgroundAudioPlayerStateOptions extends WxAppImplicitBaseCallback {
        /** 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'} */
        success(res: GetBackgroundAudioPlayerStateSuccessOptions): void;
    }

    interface GetBackgroundAudioPlayerStateSuccessOptions extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 选定音频的长度（单位：s），只有在当前有音乐播放时返回 */
        duration?: number;
        /** 选定音频的播放位置（单位：s），只有在当前有音乐播放时返回 */
        currentPosition?: number;
        /** 播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
        status?: number;
        /** 音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回 */
        downloadPercent?: number;
        /** 歌曲数据链接，只有在当前有音乐播放时返回 */
        dataUrl?: string;
    }

    interface PlayBackgroundAudioOptions extends WxAppImplicitBaseCallback {
        /** 音乐链接 */
        dataUrl: string;
        /** 音乐标题 */
        title?: string;
        /** 封面URL */
        coverImgUrl?: string;
    }

    interface SeekBackgroundAudioOptions extends WxAppImplicitBaseCallback {
        /** 音乐位置，单位：秒 */
        position: number;
    }

    // =====背景音频播放管理=====
    interface WxAppStatic {
        /** 获取全局唯一的背景音频管理器 */
        getBackgroundAudioManager(): BackgroundAudioManager;
    }

    interface BackgroundAudioManager extends WxAppImplicitBaseData {
        /** 当前音频的长度（单位：s），只有在当前有合法的 src 时返回 */
        readonly duration?: number;
        /** 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回 */
        readonly currentTime?: number;
        /** 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放 */
        readonly paused?: boolean;
        /** 音频的数据源，默认为空字符串，当设置了新的 src 时，会自动开始播放 */
        src?: string;
        /** 音频开始播放的位置（单位：s） */
        startTime?: number;
        /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。 */
        readonly buffered?: number;
        /** 音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。 */
        title?: string;
        /** 专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 */
        epname?: string;
        /** 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 */
        singer?: string;
        /** 封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。 */
        coverImgUrl?: string;
        /** 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。 */
        webUrl?: string;
        /** 播放 */
        play?(): void;
        /** 暂停 */
        pause?(): void;
        /** 停止 */
        stop?(): void;
        /** 跳转到指定位置，单位 s */
        seek?(position: number): void;
        /** 背景音频进入可以播放状态，但不保证后面可以流畅播放 */
        onCanplay?(callback: (res?: any) => any): void;
        /** 背景音频播放事件 */
        onPlay?(callback: (res?: any) => any): void;
        /** 背景音频暂停事件 */
        onPause?(callback: (res?: any) => any): void;
        /** 背景音频停止事件 */
        onStop?(callback: (res?: any) => any): void;
        /** 背景音频自然播放结束事件 */
        onEnded?(callback: (res?: any) => any): void;
        /** 背景音频播放进度更新事件 */
        onTimeUpdate?(callback: (res?: any) => any): void;
        /** 用户在系统音乐播放面板点击上一曲事件（iOS only） */
        onPrev?(callback: (res?: any) => any): void;
        /** 用户在系统音乐播放面板点击下一曲事件（iOS only） */
        onNext?(callback: (res?: any) => any): void;
        /** 背景音频播放错误事件 */
        onError?(callback: (res?: any) => any): void;
        /** 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 */
        onWaiting?(callback: (res?: any) => any): void;
        /** 错误代码 */
        errcode?: number;
    }

    // =====音频组件控制=====
    interface WxAppStatic {
        /** 创建并返回 audio 上下文 audioContext 对象 */
        createAudioContext(audioId: string): AudioContext;
    }

    interface AudioContext extends WxAppImplicitBaseData {
        /** 音频的地址 */
        setSrc?(src: string): void;
        /** 播放 */
        play?(): void;
        /** 暂停 */
        pause?(): void;
        /** 跳转到指定位置，单位 s */
        seek?(position: number): void;
    }

    // =====视频=====
    interface WxAppStatic {
        /** 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。 */
        chooseVideo(options: ChooseVideoOptions): void;
        /** 保存视频到系统相册 */
        saveVideoToPhotosAlbum(options: SaveVideoToPhotosAlbumOptions): void;
    }

    type Camera = 'front' | 'back';

    interface ChooseVideoOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera'] */
        sourceType?: SourceTypeType[];
        /** 拍摄视频最长拍摄时间，单位秒。最长支持 60 秒 */
        maxDuration?: number;
        /** 默认调起的为前置还是后置摄像头。front: 前置，back: 后置，默认 back */
        camera?: Camera;
        success?(res: ChooseVideoSuccessOptions): void;
    }

    interface ChooseVideoSuccessOptions extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 选定视频的临时文件路径 */
        tempFilePath?: string;
        /** 选定视频的时间长度 */
        duration?: number;
        /** 选定视频的数据量大小 */
        size?: number;
        /** 返回选定视频的长 */
        height?: number;
        /** 返回选定视频的宽 */
        width?: number;
    }

    interface SaveVideoToPhotosAlbumOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 视频文件路径，可以是临时文件路径也可以是永久文件路径 */
        filePath: string;
        success?(res?: { errMsg?: string }): void;
    }

    // =====视频组件控制=====
    interface WxAppStatic {
        /** 创建并返回 video 上下文 videoContext 对象 */
        createVideoContext(videoId: string): VideoContext;
    }

    interface VideoContext extends WxAppImplicitBaseData {
        /** 播放 */
        play?(): void;
        /** 暂停 */
        pause?(): void;
        /** 跳转到指定位置，单位 s */
        seek?(position: number): void;
        /** 发送弹幕，danmu 包含两个属性text,color */
        sendDanmu?(danmu: { text: string, color: string }): void;
    }

    // =====文件=====
    interface WxAppStatic {
        /** 保存文件到本地 */
        saveFile(options: SaveFileOptions): void;
        /** 获取本地已保存的文件列表 */
        getSavedFileList(options: GetSavedFileListOptions): void;
        /** 获取本地文件的文件信息 */
        getSavedFileInfo(options: GetSavedFileInfoOptions): void;
        /** 删除本地存储的文件 */
        removeSavedFile(options: RemoveSavedFileOptions): void;
        /** 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx */
        openDocument(options: OpenDocumentOptions): void;
    }

    interface SaveFileOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要保存的文件的临时路径 */
        tempFilePath: string;
        success?(res: { errMsg?: string, savedFilePath: string }): void;
    }

    interface GetSavedFileListOptions extends WxAppImplicitBaseCallback {
        success?(res: GetSavedFileListSuccessOptions): void;
    }

    interface FileList {
        /** 文件的本地路径 */
        filePath: string;
        /** 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数 */
        createTime: number;
        /** 文件大小，单位B */
        size: number;
    }

    interface GetSavedFileListSuccessOptions extends WxAppImplicitBaseData {
        /** 接口调用结果 */
        errMsg?: string;
        /** 文件列表 */
        fileList?: FileList[];
    }

    interface GetSavedFileInfoOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 文件路径 */
        filePath: string;
        success?(res: GetSavedFileInfoSuccessOptions): void;
    }

    interface GetSavedFileInfoSuccessOptions extends WxAppImplicitBaseData {
        /** 接口调用结果 */
        errMsg?: string;
        /** 文件大小，单位B */
        size?: number;
        /** 文件的保存是的时间戳，从1970/01/01 08:00:00 到当前时间的秒数 */
        createTime?: number;
    }

    interface RemoveSavedFileOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要删除的文件路径 */
        filePath: string;
    }

    interface OpenDocumentOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 文件路径，可通过 downFile 获得 */
        filePath: string;
    }

    // =====数据缓存=====
    interface WxAppStatic {
        /** 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。 */
        setStorage(options: SetStorageOptions): void;
        /**
         * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
         * @param {string} key 本地缓存中的指定的 key
         * @param {(WxAppImplicitBaseData | string)} data 需要存储的内容
         */
        setStorageSync(key: string, data: WxAppImplicitBaseData | string): void;
        /** 从本地缓存中异步获取指定 key 对应的内容。 */
        getStorage(options: GetStorageOptions): void;
        /**
         * 从本地缓存中同步获取指定 key 对应的内容。
         * @param {string} key 本地缓存中的指定的 key
         */
        getStorageSync(key: string): void;
        /** 异步获取当前storage的相关信息 */
        getStorageInfo(options: GetStorageInfoOptions): void;
        /** 同步获取当前storage的相关信息 */
        getStorageInfoSync(): GetStorageInfoData;
        /** 从本地缓存中异步移除指定 key */
        removeStorage(options: RemoveStorageOptions): void;
        /** 从本地缓存中同步移除指定 key */
        removeStorageSync(key: string): void;
        /** 清理本地数据缓存 */
        clearStorage(): void;
        /** 同步清理本地数据缓存 */
        clearStorageSync(): void;
    }

    interface SetStorageOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 本地缓存中的指定的 key */
        key: string;
        /** 需要存储的内容 */
        data: WxAppImplicitBaseData | string;
    }

    interface GetStorageOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 本地缓存中的指定的 key */
        key: string;
        success?(res: { errMsg?: string, data: WxAppImplicitBaseData | string }): void;
    }

    interface GetStorageInfoOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: GetStorageInfoData): void;
    }

    interface GetStorageInfoData extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 当前storage中所有的key */
        keys: string[];
        /** 当前占用的空间大小, 单位kb */
        currentSize: number;
        /** 限制的空间大小，单位kb */
        limitSize: number;
    }

    interface RemoveStorageOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 本地缓存中的指定的 key */
        key: string;
        success?(res: { errMsg?: string, data: WxAppImplicitBaseData | string }): void;
    }

    // =====获取位置=====
    interface WxAppStatic {
        /** 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用 */
        getLocation(options: GetLocationOptions): void;
        /** 打开地图选择位置 */
        chooseLocation?(options: ChooseLocationOptions): void;
        /** 使用微信内置地图查看位置 */
        openLocation?(options: OpenLocationOptions): void;
    }

    interface Point {
        /** 纬度，浮点数，范围为-90~90，负数表示南纬 */
        latitude?: number;
        /** 经度，浮点数，范围为-180~180，负数表示西经 */
        longitude?: number;
    }

    interface GetLocationOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标 */
        type: string;
        success?(res: GetLocationData): void;
    }

    interface GetLocationData extends WxAppImplicitBaseData, Point {
        errMsg?: string;
        /** 速度，浮点数，单位m/s */
        speed?: number;
        /** 位置的精确度 */
        accuracy?: number;
        /** 高度，单位 m */
        altitude?: number;
        /** 垂直精度，单位 m（Android 无法获取，返回 0） */
        verticalAccuracy?: number;
        /** 水平精度，单位 m */
        horizontalAccuracy?: number;
    }

    interface ChooseLocationOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success(res: ChooseLocationData): void;
        /** 用户取消时调用 */
        cancel?(): void;
    }

    interface ChooseLocationData extends WxAppImplicitBaseData, Point {
        errMsg?: string;
        /** 位置名称 */
        name?: string;
        /** 详细地址 */
        address?: string;
    }

    interface OpenLocationOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback, Point {
        /** 缩放比例，范围5~18，默认为18 */
        scale?: number;
        /** 位置名称 */
        name?: string;
        /** 地址的详细说明 */
        address?: string;
    }

    // =====地图组件控制=====
    interface WxAppStatic {
        /** 创建并返回 map 上下文 mapContext 对象 */
        createMapContext(mapId: string): MapContext;
    }

    interface MapContext extends WxAppImplicitBaseData {
        /** 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 wx.openLocation */
        getCenterLocation(options: GetCenterLocationOptions): void;
        /** 将地图中心移动到当前定位点，需要配合map组件的show-location使用 */
        moveToLocation(): void;
        /** 平移marker，带动画 */
        translateMarker(options: TranslateMarkerOptions): void;
        /** 缩放视野展示所有经纬度 */
        includePoints(options: IncludePointsOptions): void;
    }

    interface GetCenterLocationOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res?: Point): void;
    }

    interface TranslateMarkerOptions extends WxAppImplicitBaseData {
        /** 指定marker */
        markerId: number;
        /** 指定marker移动到的目标点 */
        destination: Point;
        /** 移动过程中是否自动旋转marker */
        autoRotate: boolean;
        /** 动画持续时长，默认值1000ms，平移与旋转分别计算 */
        duration?: number;
        /** 动画结束回调函数 */
        animationEnd?(): void;
    }

    interface IncludePointsOptions extends WxAppImplicitBaseData {
        /** 要显示在可视区域内的坐标点列表 */
        points: Point[];
        /**
         * 坐标点形成的矩形边缘到地图边缘的距离，单位像素。
         * 格式为[上,右,下,左]，安卓上只能识别数组第一项，上下左右的padding一致。开发者工具暂不支持padding参数。
         */
        padding?: number[];
    }

    // =====系统信息=====
    interface WxAppStatic {
        /** 获取系统信息 */
        getSystemInfo(options: GetSystemInfoOptions): void;
        /** 获取系统信息同步接口 */
        getSystemInfoSync(): GetSystemInfoData;
        /** 判断小程序的API，回调，参数，组件等是否在当前版本可用。 */
        canIUse(param: string): boolean;
    }

    interface GetSystemInfoOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: GetSystemInfoData): void;
    }

    interface GetSystemInfoData extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 手机型号 */
        model?: string;
        /** 设备像素比 */
        pixelRatio?: number;
        /** 屏幕宽度 */
        screenWidth?: number;
        /** 屏幕高度 */
        screenHeight?: number;
        /** 可使用窗口宽度 */
        windowWidth?: number;
        /** 可使用窗口高度 */
        windowHeight?: number;
        /** 微信设置的语言 */
        language?: string;
        /** 微信版本号 */
        version?: string;
        /** 操作系统版本 */
        system?: string;
        /** 客户端平台 */
        platform?: string;
        /** 客户端基础库版本 */
        SDKVersion?: string;
    }

    // =====网络状态=====
    interface WxAppStatic {
        /** 获取网络类型 */
        getNetworkType(options: GetNetworkTypeOptions): void;
        /** 监听网络状态变化 */
        onNetworkStatusChange(callback: (res: { isConnected: boolean, networkType: networkType }) => any): void;
    }

    type networkType = '2g' | '3g' | '4g' | 'wifi' | 'unknown' | 'none';

    interface GetNetworkTypeOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: { errMsg?: string, networkType?: networkType }): void;
    }

    // =====加速度计=====
    interface WxAppStatic {
        /** 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 wx.stopAccelerometer 停止监听 */
        onAccelerometerChange(callback: (res: { x: number, y: number, z: number }) => any): void;
        /** 开始监听加速度数据 */
        startAccelerometer(options?: WxAppImplicitBaseCallback): void;
        /** 停止监听加速度数据 */
        stopAccelerometer(options?: WxAppImplicitBaseCallback): void;
    }

    // =====罗盘=====
    interface WxAppStatic {
        /** 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用wx.stopCompass停止监听。 */
        onCompassChange(callback: (res: { direction: number }) => any): void;
        /** 开始监听罗盘数据 */
        startCompass(options?: WxAppImplicitBaseCallback): void;
        /** 停止监听罗盘数据 */
        stopCompass(options?: WxAppImplicitBaseCallback): void;
    }

    // =====拨打电话=====
    interface WxAppStatic {
        /** 停止监听罗盘数据 */
        makePhoneCall(options: MakePhoneCallOptions): void;
    }

    interface MakePhoneCallOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要拨打的电话号码 */
        phoneNumber: string;
    }

    // =====扫码=====
    interface WxAppStatic {
        /** 停止监听罗盘数据 */
        scanCode(options: ScanCodeOptions): void;
    }

    interface ScanCodeOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 是否只能从相机扫码，不允许从相册选择图片 */
        onlyFromCamera?: boolean;
        success?(res: ScanCodeSuccess): void;
    }

    interface ScanCodeSuccess extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 所扫码的内容 */
        result: any;
        /** 所扫码的类型 */
        scanType: any;
        /** 所扫码的字符集 */
        charSet: any;
        /** 当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path */
        path: any;
    }

    // =====剪贴板=====
    interface WxAppStatic {
        /** 设置系统剪贴板的内容 */
        setClipboardData(options: SetClipboardDataOptions): void;
        /** 获取系统剪贴板内容 */
        getClipboardData(options: GetClipboardDataOptions): void;
    }

    interface SetClipboardDataOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要设置的内容 */
        data: string;
    }

    interface GetClipboardDataOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: { errMsg?: string; data: string }): void;
    }

    // =====蓝牙=====
    interface WxAppStatic {
        /** 初始化蓝牙适配器 */
        openBluetoothAdapter(options?: WxAppImplicitBaseCallback): void;
        /** 关闭蓝牙模块。调用该方法将断开所有已建立的链接并释放系统资源 */
        closeBluetoothAdapter(options?: WxAppImplicitBaseCallback): void;
        /** 获取本机蓝牙适配器状态 */
        getBluetoothAdapterState(options?: GetBluetoothAdapterStateOptions): void;
        /** 监听蓝牙适配器状态变化事件 */
        onBluetoothAdapterStateChange(callback: (res: AdapterState) => any): void;
        /** 始搜寻附近的蓝牙外围设备。注意，该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。 */
        startBluetoothDevicesDiscovery(options: StartBluetoothDevicesDiscoveryOptions): void;
        /** 停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。 */
        stopBluetoothDevicesDiscovery(options: StopBluetoothDevicesDiscoveryOptions): void;
        /** 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备 */
        getBluetoothDevices(options: GetBluetoothDevicesOptions): void;
        /** 监听寻找到新设备的事件 */
        onBluetoothDeviceFound(callback: (devices: BluetoothDevice[]) => any): void;
        /** 根据 uuid 获取处于已连接状态的设备 */
        getConnectedBluetoothDevices(options: GetConnectedBluetoothDevicesOptions): void;
        /** 连接低功耗蓝牙设备 */
        createBLEConnection(options: CreateBLEConnectionOptions): void;
        /** 断开与低功耗蓝牙设备的连接 */
        closeBLEConnection(options: CloseBLEConnectionOptions): void;
        /** 获取蓝牙设备所有 service（服务） */
        getBLEDeviceServices(options: GetBLEDeviceServicesOptions): void;
        /** 获取蓝牙设备所有 characteristic（特征值） */
        getBLEDeviceCharacteristics(options: GetBLEDeviceCharacteristicsOptions): void;
        /** 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持read才可以成功调用，具体参照 characteristic 的 properties 属性 */
        readBLECharacteristicValue(options: ReadBLECharacteristicValueOptions): void;
        /** 向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持write才可以成功调用，具体参照 characteristic 的 properties 属性 */
        writeBLECharacteristicValue(options: WriteBLECharacteristicValueOptions): void;
        /** 启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：必须设备的特征值支持notify才可以成功调用，具体参照 characteristic 的 properties 属性 */
        notifyBLECharacteristicValueChange(options: NotifyBLECharacteristicValueChangeOptions): void;
        /** 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。 */
        onBLEConnectionStateChange(callback: (res: { deviceId?: string, connected?: boolean }) => any): void;
        /** 监听低功耗蓝牙设备的特征值变化。必须先启用notify接口才能接收到设备推送的notification。 */
        onBLECharacteristicValueChange(callback: (res: {
            deviceId?: string,
            serviceId?: string,
            characteristicId?: string,
            value?: any
        }) => any): void;
    }

    interface GetBluetoothAdapterStateOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: GetBluetoothAdapterStateData): void;
    }

    interface GetBluetoothAdapterStateData extends WxAppImplicitBaseData {
        /** 成功：ok，错误：详细信息 */
        errMsg?: string;
        /** 蓝牙适配器信息 */
        adapterState?: AdapterState;
    }

    interface AdapterState {
        /** 是否正在搜索设备 */
        discovering?: boolean;
        /** 蓝牙适配器是否可用 */
        available?: boolean;
    }

    interface StartBluetoothDevicesDiscoveryOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 蓝牙设备主 service 的 uuid 列表 */
        services?: string[];
        /** 是否允许重复上报同一设备， 如果允许重复上报，则onDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同 */
        allowDuplicatesKey?: boolean;
        /** 上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报 */
        interval?: number;
        success(res: { errMsg?: string, isDiscovering?: boolean }): void;
    }

    interface StopBluetoothDevicesDiscoveryOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success(res: { errMsg?: string }): void;
    }

    interface GetBluetoothDevicesOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 蓝牙设备主 service 的 uuid 列表 */
        services?: string[];
        success(res: { errMsg?: string, devices: BluetoothDevice[] }): void;
    }

    interface BluetoothDevice extends WxAppImplicitBaseData {
        /** 蓝牙设备名称，某些设备可能没有 */
        name?: string;
        /** 用于区分设备的 id */
        deviceId?: string;
        /** 当前蓝牙设备的信号强度 */
        RSSI?: number;
        /** 当前蓝牙设备的广播内容（注意：vConsole 无法打印出 ArrayBuffer 类型数据） */
        advertisData?: any;
    }

    interface GetConnectedBluetoothDevicesOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 蓝牙设备主 service 的 uuid 列表 */
        services: string[];
        /** 成功则返回本机蓝牙适配器状态 */
        success(res: { errMsg?: string, devices: BluetoothDevice[] }): void;
    }

    interface CreateBLEConnectionOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 蓝牙设备 id，参考 getDevices 接口 */
        deviceId: string;
        /** 成功则返回本机蓝牙适配器状态 */
        success(res: { errMsg?: string }): void;
    }

    interface CloseBLEConnectionOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 蓝牙设备 id，参考 getDevices 接口 */
        deviceId: string;
        /** 成功则返回本机蓝牙适配器状态 */
        success(res: { errMsg?: string }): void;
    }

    interface BluetoothService extends WxAppImplicitBaseData {
        /** 蓝牙设备服务的 uuid */
        uuid?: string;
        /** 该服务是否为主服务 */
        isPrimary?: any;
    }

    interface GetBLEDeviceServicesOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 蓝牙设备 id，参考 getDevices 接口 */
        deviceId: string;
        /** 成功则返回本机蓝牙适配器状态 */
        success(res: { errMsg?: string, services: BluetoothService[] }): void;
    }

    interface BluetoothCharacteristic extends WxAppImplicitBaseData {
        /** 蓝牙设备服务的 uuid */
        uuid?: string;
        /** 该特征值支持的操作类型 */
        properties?: BluetoothProperties;
    }

    interface BluetoothProperties extends WxAppImplicitBaseData {
        /** 该特征值是否支持 read 操作 */
        read?: boolean;
        /** 该特征值是否支持 write 操作 */
        write?: boolean;
        /** 该特征值是否支持 notify 操作 */
        notify?: boolean;
        /** 该特征值是否支持 indicate 操作 */
        indicate?: boolean;
    }

    interface GetBLEDeviceCharacteristicsOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 蓝牙设备 id，参考 getDevices 接口 */
        deviceId: string;
        /** 蓝牙服务 uuid */
        serviceId: string;
        /** 成功则返回本机蓝牙适配器状态 */
        success(res: { errMsg?: string, characteristics: BluetoothCharacteristic[] }): void;
    }

    interface BluetoothReadBLECharacteristic extends WxAppImplicitBaseData {
        /** 蓝牙设备特征值的 uuid */
        characteristicId?: string;
        /** 蓝牙设备特征值对应服务的 uuid */
        serviceId?: string;
        /** 蓝牙设备特征值对应的二进制值（注意：vConsole 无法打印出 ArrayBuffer 类型数据） */
        value?: any;
    }

    interface ReadBLECharacteristicValueOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 蓝牙设备 id，参考 getDevices 接口 */
        deviceId: string;
        /** 蓝牙服务 uuid */
        serviceId: string;
        /** 蓝牙特征值的 uuid */
        characteristicId: string;
        /** 成功则返回本机蓝牙适配器状态 */
        success(res: { errMsg?: string, characteristic: BluetoothReadBLECharacteristic }): void;
    }

    interface WriteBLECharacteristicValueOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 蓝牙设备 id，参考 getDevices 接口 */
        deviceId: string;
        /** 蓝牙服务 uuid */
        serviceId: string;
        /** 蓝牙特征值的 uuid */
        characteristicId: string;
        /** 蓝牙设备特征值对应的二进制值（注意：vConsole 无法打印出 ArrayBuffer 类型数据） */
        value: any;
        /** 成功则返回本机蓝牙适配器状态 */
        success(res: { errMsg?: string }): void;
    }

    interface NotifyBLECharacteristicValueChangeOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 蓝牙设备 id，参考 getDevices 接口 */
        deviceId: string;
        /** 蓝牙服务 uuid */
        serviceId: string;
        /** 蓝牙特征值的 uuid */
        characteristicId: string;
        /** true: 启用 notify; false: 停用 notify */
        state: boolean;
        /** 成功则返回本机蓝牙适配器状态 */
        success(res: { errMsg?: string }): void;
    }

    // =====iBeacon=====
    interface WxAppStatic {
        /** 开始搜索附近的iBeacon设备 */
        startBeaconDiscovery(options?: StartBeaconDiscoveryOptions): void;
        /** 停止搜索附近的iBeacon设备 */
        stopBeaconDiscovery(options?: WxAppImplicitBaseCallback): void;
        /** 获取所有已搜索到的iBeacon设备 */
        getBeacons(options?: GetBeaconsOptions): void;
        /** 监听 iBeacon 设备的更新事件 */
        onBeaconUpdate(callback: (res?: { beacons: iBeacon[] }) => any): void;
        /** 监听 iBeacon 服务的状态变化 */
        onBeaconServiceChange(callback: (res?: { available?: boolean, discovering?: boolean }) => any): void;
    }

    interface StartBeaconDiscoveryOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** iBeacon设备广播的 uuids */
        uuids: string[];
        success?(res: { errMsg?: string }): void;
    }

    interface iBeacon {
        /** iBeacon 设备广播的 uuid */
        uuid?: string;
        /** iBeacon 设备的主 id */
        major?: string;
        /** iBeacon 设备的次 id */
        minor?: string;
        /** 表示设备距离的枚举值 */
        proximity?: number;
        /** iBeacon 设备的距离 */
        accuracy?: number;
        /** 表示设备的信号强度 */
        rssi?: number;
    }

    interface GetBeaconsOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: { errMsg?: string, beacons: iBeacon[] }): void;
    }

    // =====屏幕亮度=====
    interface WxAppStatic {
        /** 设置屏幕亮度 */
        setScreenBrightness(options: SetScreenBrightnessOptions): void;
        getScreenBrightness(options: GetScreenBrightnessOptions): void;
    }

    interface SetScreenBrightnessOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 屏幕亮度值，范围 0~1，0 最暗，1 最亮 */
        value: number;
    }

    interface GetScreenBrightnessOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: { errMsg?: string, value?: number }): void;
    }

    // =====振动=====
    interface WxAppStatic {
        /** 使手机发生较长时间的振动（400ms） */
        vibrateLong(options?: WxAppImplicitBaseCallback): void;
        /** 使手机发生较短时间的振动（15ms） */
        vibrateShort(options?: WxAppImplicitBaseCallback): void;
    }

    // =====手机联系人=====
    interface WxAppStatic {
        /** 调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式，写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。 */
        addPhoneContact(options: AddPhoneContactOptions): void;
    }

    interface AddPhoneContactOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 头像本地文件路径 */
        photoFilePath?: string;
        /** 昵称 */
        nickName?: string;
        /** 姓氏 */
        lastName?: string;
        /** 中间名 */
        middleName?: string;
        /** 名字 */
        firstName: string;
        /** 备注 */
        remark?: string;
        /** 手机号 */
        mobilePhoneNumber?: string;
        /** 微信号 */
        weChatNumber?: string;
        /** 联系地址国家 */
        addressCountry?: string;
        /** 联系地址省份 */
        addressState?: string;
        /** 联系地址城市 */
        addressCity?: string;
        /** 联系地址街道 */
        addressStreet?: string;
        /** 联系地址邮政编码 */
        addressPostalCode?: string;
        /** 公司 */
        organization?: string;
        /** 职位 */
        title?: string;
        /** 工作传真 */
        workFaxNumber?: string;
        /** 工作电话 */
        workPhoneNumber?: string;
        /** 公司电话 */
        hostNumber?: string;
        /** 电子邮件 */
        email?: string;
        /** 网站 */
        url?: string;
        /** 工作地址国家 */
        workAddressCountry?: string;
        /** 工作地址省份 */
        workAddressState?: string;
        /** 工作地址城市 */
        workAddressCity?: string;
        /** 工作地址街道 */
        workAddressStreet?: string;
        /** 工作地址邮政编码 */
        workAddressPostalCode?: string;
        /** 住宅传真 */
        homeFaxNumber?: string;
        /** 住宅电话 */
        homePhoneNumber?: string;
        /** 住宅地址国家 */
        homeAddressCountry?: string;
        /** 住宅地址省份 */
        homeAddressState?: string;
        /** 住宅地址城市 */
        homeAddressCity?: string;
        /** 住宅地址街道 */
        homeAddressStreet?: string;
        /** 住宅地址邮政编码 */
        homeAddressPostalCode?: string;
    }

    // =====交互反馈=====
    interface WxAppStatic {
        /** 显示消息提示框 */
        showToast(options: ShowToastOptions): void;
        /** 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框 */
        showLoading(options: ShowLoadingOptions): void;
        /** 隐藏消息提示框 */
        hideToast(): void;
        /** 隐藏 loading 提示框 */
        hideLoading(): void;
        /** 显示模态弹窗 */
        showModal(options: ShowModalOptions): void;
        /** 显示操作菜单 */
        showActionSheet(options: ShowActionSheetOptions): void;
    }

    interface ShowToastOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 提示的内容 */
        title: string;
        /** 图标，有效值 "success", "loading" */
        icon?: 'success' | 'loading';
        /** 自定义图标的本地路径，image 的优先级高于 icon */
        image?: string;
        /** 提示的延迟时间，单位毫秒，默认：1500 */
        duration?: number;
        /** 是否显示透明蒙层，防止触摸穿透，默认：false */
        mask?: boolean;
    }

    interface ShowLoadingOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 提示的内容 */
        title: string;
        /** 是否显示透明蒙层，防止触摸穿透，默认：false */
        mask?: boolean;
    }

    interface ShowModalOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 提示的内容 */
        title: string;
        /** 提示的内容 */
        content: string;
        /** 是否显示取消按钮，默认为 true */
        showCancel?: boolean;
        /** 取消按钮的文字，默认为"取消"，最多 4 个字符 */
        cancelText?: string;
        /** 取消按钮的文字颜色，默认为"#000000" */
        cancelColor?: string;
        /** 确定按钮的文字，默认为"确定"，最多 4 个字符 */
        confirmText?: string;
        /** 确定按钮的文字颜色，默认为"#3CC51F" */
        confirmColor?: string;
        success?(res: { confirm?: boolean, cancel?: boolean }): void;
    }

    interface ShowActionSheetOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 按钮的文字数组，数组长度最大为6个 */
        itemList: string[];
        /** 按钮的文字颜色，默认为"#000000" */
        itemColor?: string;
        success?(res: { tapIndex?: number }): void;
    }

    // =====设置导航条=====
    interface WxAppStatic {
        /** 动态设置当前页面的标题 */
        setNavigationBarTitle(options: SetNavigationBarTitleOptions): void;
        /** 在当前页面显示导航条加载动画 */
        showNavigationBarLoading(): void;
        /** 隐藏导航条加载动画 */
        hideNavigationBarLoading(): void;
    }

    interface SetNavigationBarTitleOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 页面标题 */
        title: string;
    }

    // =====导航=====
    interface WxAppStatic {
        /** 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。 */
        navigateTo(options: NavigateToOptions): void;
        /** 关闭当前页面，跳转到应用内的某个页面。 */
        redirectTo(options: RedirectToOptions): void;
        /** 关闭所有页面，打开到应用内的某个页面。 */
        reLaunch(options: ReLaunchOptions): void;
        /** 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 */
        switchTab(options: SwitchTabOptions): void;
        /** 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。 */
        navigateBack(param: { delta: number }): void;
    }

    interface NavigateToOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2' */
        url: string;
    }

    interface RedirectToOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2' */
        url: string;
    }

    interface ReLaunchOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要跳转的应用内页面路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数 */
        url: string;
    }

    interface SwitchTabOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数 */
        url: string;
    }

    // =====动画=====
    interface WxAppStatic {
        /** 创建一个动画实例animation。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性。 */
        createAnimation(options: CreateAnimationOptions): AnimationContext;
    }

    interface CreateAnimationOptions extends WxAppImplicitBaseData {
        /** 动画持续时间，单位ms */
        duration?: number;
        /** 定义动画的效果 */
        timingFunction?: string;
        /** 动画延迟时间，单位 ms */
        delay?: number;
        /** 设置transform-origin */
        transformOrigin?: string;
    }

    interface AnimationContext extends WxAppImplicitBaseData {
        /** 透明度，参数范围 0~1 */
        opacity?(value: number): AnimationContext;
        /** 颜色值 */
        backgroundColor?(color: string): AnimationContext;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        width?(length: number | string): AnimationContext;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        height?(length: number | string): AnimationContext;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        top?(length: number | string): AnimationContext;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        left?(length: number | string): AnimationContext;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        bottom?(length: number | string): AnimationContext;
        /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
        right?(length: number | string): AnimationContext;
        /** deg的范围-180~180，从原点顺时针旋转一个deg角度 */
        rotate?(deg: any): AnimationContext;
        /** deg的范围-180~180，在X轴旋转一个deg角度 */
        rotateX?(deg: any): AnimationContext;
        /** deg的范围-180~180，在Y轴旋转一个deg角度 */
        rotateY?(deg: any): AnimationContext;
        /** deg的范围-180~180，在Z轴旋转一个deg角度 */
        rotateZ?(deg: any): AnimationContext;
        /** 同transform-function rotate3d */
        rotate3d?(x: any, y: any, z: any, deg: any): AnimationContext;
        /** 一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数 */
        scale?(sx: any, sy?: any): AnimationContext;
        /** 在X轴缩放sx倍数 */
        scaleX?(sx: any): AnimationContext;
        /** 在Y轴缩放sy倍数 */
        scaleY?(sy: any): AnimationContext;
        /** 在Z轴缩放sy倍数 */
        scaleZ?(sz: any): AnimationContext;
        /** 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数 */
        scale3d?(sx: any, sy: any, sz: any): AnimationContext;
        /** 一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。 */
        translate?(tx: any, ty?: any): AnimationContext;
        /** 在X轴偏移tx，单位px */
        translateX?(tx: any): AnimationContext;
        /** 在Y轴偏移tx，单位px */
        translateY?(ty: any): AnimationContext;
        /** 在Z轴偏移tx，单位px */
        translateZ?(tz: any): AnimationContext;
        /** 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px */
        translate3d?(tx: any, ty: any, tz: any): AnimationContext;
        /** 参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度 */
        skew?(ax: any, ay?: any): AnimationContext;
        /** 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度 */
        skewX?(ax: any): AnimationContext;
        /** 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度 */
        skewY?(ay: any): AnimationContext;
        /** 同transform-function matrix */
        matrix?(a: any, b: any, c: any, d: any, tx: any, ty: any): AnimationContext;
        /** 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px */
        matrix3d?(tx: any, ty: any, tz: any): AnimationContext;
        /** 设置一组动画完成 */
        step(options?: CreateAnimationOptions): void;
        /** 导出 */
        export(): any;
    }

    // =====绘图=====
    interface WxAppStatic {
        /** 创建 canvas 绘图上下文(指定 canvasId) */
        createCanvasContext(canvasId: string): CanvasContext;
        /** 导出图片 */
        canvasToTempFilePath(options: CanvasToTempFilePathOptions): void;
    }

    /** 目前并不支持，但Ts允许链式写法 */
    interface CanvasContext extends WxAppImplicitBaseData {
        /** 设置填充色 */
        fillStyle?(color: string): CanvasContext;
        /** 设置边框颜色 */
        setStrokeStyle?(color: string): CanvasContext;
        /**
         * 设置阴影样式
         * @param {number} offsetX 阴影相对于形状在水平方向的偏移
         * @param {number} offsetY 阴影相对于形状在竖直方向的偏移
         * @param {number} blur 阴影的模糊级别，数值越大越模糊(0~100)
         * @param {string} color 阴影的颜色
         */
        setShadow?(offsetX: number, offsetY: number, blur: number, color: string): CanvasContext;
        /** 创建一个线性的渐变颜色 */
        createLinearGradient?(x0: number, y0: number, x1: number, y1: number): CanvasContext;
        /** 创建一个圆形的渐变颜色 */
        createCircularGradient?(x: number, y: number, r: number): CanvasContext;
        /**
         * 创建一个颜色的渐变点
         * @param {number} stop 表示渐变点在起点和终点中的位置(0-1)
         * @param {string} color 渐变点的颜色
         */
        addColorStop?(stop: number, color: string): CanvasContext;
        /** 设置线条的宽度(px) */
        setLineWidth?(lineWidth: number): CanvasContext;
        /** 设置线条的端点样式 */
        setLineCap?(value: 'butt' | 'round' | 'square'): CanvasContext;
        /** 设置线条的交点样式 */
        setLineJoin?(value: 'bevel' | 'round' | 'miter'): CanvasContext;
        /** 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示 */
        setMiterLimit?(value: number): CanvasContext;
        /** 创建一个矩形 */
        rect?(x: number, y: number, width: number, height: number): CanvasContext;
        /** 填充一个矩形 */
        fillRect?(x: number, y: number, width: number, height: number): CanvasContext;
        /** 画一个矩形(非填充)。 */
        strokeRect?(x: number, y: number, width: number, height: number): CanvasContext;
        /** 清除画布上在该矩形区域内的内容 */
        clearRect?(x: number, y: number, width: number, height: number): CanvasContext;
        /** 对当前路径中的内容进行填充。默认的填充色为黑色。 */
        fill?(): CanvasContext;
        /** 画出当前路径的边框。默认颜色色为黑色。 */
        stroke?(): CanvasContext;
        /** 开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或描边。 */
        beginPath?(): CanvasContext;
        /** 关闭一个路径 */
        closePath?(): CanvasContext;
        /** 把路径移动到画布中的指定点，不创建线条。 */
        moveTo?(x: number, y: number): CanvasContext;
        /** 增加一个新点，然后创建一条从上次指定点到目标点的线。 */
        lineTo?(x: number, y: number): CanvasContext;
        /**
         * 画一条弧线
         * @param {number} x 圆的x坐标
         * @param {number} y 圆的y坐标
         * @param {number} r 圆的半径
         * @param {number} sAngle 起始弧度，单位弧度（在3点钟方向）
         * @param {number} eAngle 终止弧度
         * @param {boolean} counterclockwise 可选。指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针。
         */
        arc?(x: number, y: number, r: number, sAngle: number, eAngle: number, counterclockwise?: boolean): CanvasContext;
        /**
         * 创建三次方贝塞尔曲线路径
         * @param {number} cp1x 第一个贝塞尔控制点的 x 坐标
         * @param {number} cp1y 第一个贝塞尔控制点的 y 坐标
         * @param {number} cp2x 第二个贝塞尔控制点的 x 坐标
         * @param {number} cp2y 第二个贝塞尔控制点的 y 坐标
         * @param {number} x 结束点的 x 坐标
         * @param {number} y 结束点的 y 坐标
         */
        bezierCurveTo?(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): CanvasContext;
        /**
         * 创建二次贝塞尔曲线路径
         * @param {number} cpx 贝塞尔控制点的x坐标
         * @param {number} cpy 贝塞尔控制点的y坐标
         * @param {number} x 结束点的x坐标
         * @param {number} y 结束点的y坐标
         */
        quadraticCurveTo?(cpx: number, cpy: number, x: number, y: number): CanvasContext;
        /**
         * 在调用scale方法后，之后创建的路径其横纵坐标会被缩放。多次调用scale，倍数会相乘。
         * @param {number} scaleWidth 横坐标缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%)
         * @param {number} scaleHeight 纵坐标轴缩放的倍数 (1 = 100%，0.5 = 50%，2 = 200%)
         */
        scale?(scaleWidth: number, scaleHeight: number): CanvasContext;
        /**
         * 以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
         * @param {number} rotate 旋转角度，以弧度计(degrees * Math.PI/180；degrees范围为0~360)
         */
        rotate?(rotate: number): CanvasContext;
        /** 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。 */
        translate?(x: number, y: number): CanvasContext;
        /** 设置字体的字号 */
        setFontSize?(fontSize: number): CanvasContext;
        /** 在画布上绘制被填充的文本 */
        fillText?(text: string, x: number, y: number): CanvasContext;
        /** 用于设置文字的对齐 */
        setTextAlign?(value: 'left' | 'center' | 'right'): CanvasContext;
        /**
         * 绘制图像，图像保持原始尺寸
         * @param {string} imageResource 所要绘制的图片资源
         * @param {number} x 图像左上角的x坐标
         * @param {number} y 图像左上角的y坐标
         * @param {number} width 图像宽度
         * @param {number} height 图像高度
         */
        drawImage?(imageResource: string, x: number, y: number, width: number, height: number): CanvasContext;
        /** 设置全局画笔透明度(透明度0~1，0 表示完全透明，1 表示完全不透明) */
        setGlobalAlpha?(alpha: number): CanvasContext;
        /** 保存当前的绘图上下文 */
        save?(): CanvasContext;
        /** 恢复之前保存的绘图上下文 */
        restore?(): CanvasContext;
        /**
         * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
         * @param {boolean} [reserve] 非必填。本次绘制是否接着上一次绘制，即reserve参数为false，则在本次调用drawCanvas绘制之前native层应先清空画布再继续绘制；若reserver参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
         */
        draw?(reserve?: boolean): CanvasContext;
    }

    interface CanvasToTempFilePathOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 画布x轴起点（默认0） */
        x?: number;
        /** 画布y轴起点（默认0） */
        y?: number;
        /** 画布宽度（默认为canvas宽度-x） */
        width?: number;
        /** 画布高度（默认为canvas高度-y） */
        height?: number;
        /** 输出图片宽度（默认为width） */
        destWidth?: number;
        /** 输出图片高度（默认为height） */
        destHeight?: number;
        /** 画布标识 */
        canvasId?: string;
        /** 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'} */
        success?(res: CanvasToTempFilePathSuccessOptions): void;
    }

    interface CanvasToTempFilePathSuccessOptions extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 文件的临时路径 */
        tempFilePath: string;
    }

    // =====下拉刷新=====
    interface WxAppStatic {
        /** 停止当前页面下拉刷新 */
        stopPullDownRefresh(): void;
    }

    // =====第三方平台=====
    interface WxAppStatic {
        /** 获取第三方平台自定义的数据字段 */
        getExtConfig(options: GetExtConfigOptions): void;
        /** 获取第三方平台自定义的数据字段的同步接口 */
        getExtConfigSync(): any;
    }

    interface GetExtConfigOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: GetExtConfigSuccessOptions): void;
    }

    interface GetExtConfigSuccessOptions extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 第三方平台自定义的数据 */
        extConfig: any;
    }

    // =====登录=====
    interface WxAppStatic {
        /** 获取登录凭证 */
        login(options: LoginOptions): void;
        /** 检测当前用户登录态是否有效 */
        checkSession(options: WxAppImplicitBaseCallback): void;
        /** 获取登录凭证 */
        authorize(options: AuthorizeOptions): void;
        /** 获取用户信息 */
        getUserInfo(options: GetUserInfoOptions): void;
    }

    interface LoginOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: LoginSuccessOptions): void;
    }

    interface LoginSuccessOptions extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 用户允许登录后，回调内容会带上 code（有效期五分钟），开发者需要将 code 发送到开发者服务器后台，使用code 换取 session_key api，将 code 换成 openid 和 session_key */
        code: string;
    }

    interface AuthorizeOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要获取权限的scope，详见 scope 列表 */
        scope: string;
    }

    interface GetUserInfoOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 是否带上登录态信息 */
        withCredentials?: boolean;
        success?(res: GetUserInfoSuccess): void;
    }

    interface UserInfo extends WxAppImplicitBaseData {
        openId?: string;
        nickName?: string;
        /** 用户的性别，值为1时是男性，值为2时是女性，值为0时是未知 */
        gender?: number;
        city?: string;
        province?: string;
        country?: string;
        avatarUrl?: string;
        unionId?: string;
    }

    interface GetUserInfoSuccess extends WxAppImplicitBaseData {
        /** 用户信息对象，不包含 openid 等敏感信息 */
        userInfo?: UserInfo;
        /** 不包括敏感信息的原始数据字符串，用于计算签名。 */
        rawData?: string;
        /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息 */
        signature?: string;
        /** 包括敏感数据在内的完整用户信息的加密数据 */
        encryptedData?: string;
        /** 加密算法的初始向量 */
        iv?: string;
    }

    // =====微信支付=====
    interface WxAppStatic {
        /** 发起微信支付 */
        requestPayment(options: RequestPaymentOptions): void;
    }

    interface RequestPaymentOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间 */
        timeStamp: string;
        /** 随机字符串，长度为32个字符以下。 */
        nonceStr: string;
        /** 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=* */
        package: string;
        /** 签名算法，暂支持 MD5 */
        signType: 'MD5' | string;
        /** 签名 */
        paySign: string;
    }

    // =====转发=====
    interface WxAppStatic {
        /** 显示当前页面的转发按钮 */
        showShareMenu(options?: ShowShareMenuOptions): void;
        /** 隐藏转发按钮 */
        hideShareMenu(options?: WxAppImplicitBaseCallback): void;
        /** 更新转发属性 */
        updateShareMenu(options?: UpdateShareMenuOptions): void;
        /** 获取转发详细信息 */
        getShareInfo(options: GetShareInfoOptions): void;
    }

    interface ShowShareMenuOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 是否使用带 shareTicket 的转发详情 */
        withShareTicket?: boolean;
    }

    interface UpdateShareMenuOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 是否使用带 shareTicket 的转发详情 */
        withShareTicket?: boolean;
    }

    interface GetShareInfoOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** shareTicket */
        shareTicket: string;
        success?(res: GetShareInfoSuccess): void;
    }

    interface GetShareInfoSuccess extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 包括敏感数据在内的完整转发信息的加密数据 */
        encryptedData?: string;
        /** 加密算法的初始向量 */
        iv?: string;
    }

    // =====收货地址=====
    interface WxAppStatic {
        /** 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。 */
        chooseAddress(options?: ChooseAddressOptions): void;
    }

    interface ChooseAddressOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: ChooseAddressSuccess): void;
    }

    interface ChooseAddressSuccess extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 收货人姓名 */
        userName?: string;
        /** 邮编 */
        postalCode?: string;
        /** 国标收货地址第一级地址 */
        provinceName?: string;
        /** 国标收货地址第二级地址 */
        cityName?: string;
        /** 国标收货地址第三级地址 */
        countyName?: string;
        /** 详细收货地址信息 */
        detailInfo?: string;
        /** 收货地址国家码 */
        nationalCode?: string;
        /** 收货人手机号码 */
        telNumber?: string;
    }

    // =====卡券=====
    interface WxAppStatic {
        /** 批量添加卡券 */
        addCard(options?: AddCardOptions): void;
        /** 查看微信卡包中的卡券 */
        openCard(options?: OpenCardOptions): void;
    }

    interface CardListItem {
        /** 卡券 Id */
        cardId: string;
        /** 卡券的扩展参数 */
        cardExt?: string;
    }

    interface AddCardOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要添加的卡券列表 */
        cardList: CardListItem[];
        success?(res: AddCardSuccess): void;
    }

    interface CardSuccessItem extends WxAppImplicitBaseData {
        /** 加密 code，为用户领取到卡券的code加密后的字符串 */
        code?: string;
        /** 用户领取到卡券的Id */
        cardId?: string;
        /** 用户领取到卡券的扩展参数，与调用时传入的参数相同 */
        cardExt?: string;
        /** 是否成功 */
        isSuccess?: boolean;
    }

    interface AddCardSuccess extends WxAppImplicitBaseData {
        errMsg?: string;
        /** 卡券添加结果列表 */
        cardList?: CardSuccessItem[];
    }

    interface OpenCard {
        /** 需要打开的卡券 Id */
        cardId: string;
        /** 由 addCard 的返回对象中的加密 code 通过解密后得到 */
        code: string;
    }

    interface OpenCardOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要添加的卡券列表 */
        cardList: OpenCard[];
    }

    // =====设置=====
    interface WxAppStatic {
        /** 调起客户端小程序设置界面，返回用户设置的操作结果 */
        openSetting(options?: OpenSettingOptions): void;
        /** 获取用户的当前设置 */
        getSetting(options?: GetSettingOptions): void;
    }

    interface OpenSettingOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: { authSetting?: WxAppImplicitBaseData }): void;
    }

    interface GetSettingOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: { authSetting?: WxAppImplicitBaseData }): void;
    }

    // =====微信运动=====
    interface WxAppStatic {
        /** 获取用户过去三十天微信运动步数，需要先调用 wx.login 接口。 */
        getWeRunData(options?: GetWeRunDataOptions): void;
    }

    interface GetWeRunDataOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        success?(res: { errMsg?: string, encryptedData?: string }): void;
    }

    // =====打开小程序=====
    interface WxAppStatic {
        /** 打开同一公众号下关联的另一个小程序 */
        navigateToMiniProgram(options?: NavigateToMiniProgramOptions): void;
        /** 返回到上一个小程序，只有在当前小程序是被其他小程序打开时可以调用成功 */
        navigateBackMiniProgram(options?: NavigateBackMiniProgramOptions): void;
    }

    interface NavigateToMiniProgramOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 要打开的小程序 appId */
        appId: string;
        /** 打开的页面路径，如果为空则打开首页 */
        path?: string;
        /** 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据。 */
        extraData?: WxAppImplicitBaseData;
        /** 要打开的小程序版本，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是体验版或正式版，则打开的小程序必定是正式版。默认值 release */
        envVersion?: 'develop' | 'trial' | 'release';
    }

    interface NavigateBackMiniProgramOptions extends WxAppImplicitBaseData, WxAppImplicitBaseCallback {
        /** 需要返回给上一个小程序的数据，上一个小程序可在 App.onShow() 中获取到这份数据。详情 */
        extraData?: WxAppImplicitBaseData;
    }

    // =====扩展接口=====
    interface WxAppStatic {
        /** 将 ArrayBuffer 数据转成 Base64 字符串 */
        arrayBufferToBase64(options: Uint8Array): string;

        /** 将 Base64 字符串转成 ArrayBuffer 数据 */
        base64ToArrayBuffer(base64: string): Uint8Array;
    }
}
