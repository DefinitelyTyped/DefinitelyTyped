// Type definitions for wx-app 1.9
// Project: https://mp.weixin.qq.com/debug/wxadoc/dev/api/
// Definitions by: taoqf <https://github.com/taoqf>
//                 AlexStacker <https://github.com/AlexStacker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace wx {
  // #region 基本参数
  interface DataResponse {
    /** 回调函数返回的内容 */
    data: any;
  }
  interface ErrMsgResponse {
    /** 成功：ok，错误：详细信息 */
    errMsg: 'ok' | string;
  }
  interface TempFileResponse {
    /** 文件的临时路径 */
    tempFilePath: string;
  }
  interface BaseOptions {
    /** 接口调用成功的回调函数 */
    success?(res: any): void;
    /** 接口调用失败的回调函数 */
    fail?(res: any): void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?(res: any): void;
  }
  // #endregion
  // #region 网络API列表
  // 发起请求
  interface RequestHeader {
    [key: string]: string;
  }
  interface RequestOptions extends BaseOptions {
    /** 开发者服务器接口地址 */
    url: string;
    /** 请求的参数 */
    data?: string | any;
    /** 设置请求的 header , header 中不能设置 Referer */
    header?: RequestHeader;
    /** 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT */
    method?: string;
    /** 如果设为json，会尝试对返回的数据做一次 JSON.parse */
    dataType?: string;
    /**
     * 设置响应的数据类型。合法值：text、arraybuffer
     * @version 1.7.0
     */
    responseType?: string;
    /** 收到开发者服务成功返回的回调函数，res = {data: '开发者服务器返回的内容'} */
    success?(res: DataResponse): void;
  }
  /**
   * wx.request发起的是https请求。一个微信小程序，同时只能有5个网络请求连接。
   */
  function request(options: RequestOptions): void;
  interface UploadTask {
    /**
     * 监听上传进度变化
     * @version 1.4.0
     */
    onProgressUpdate(callback?: (res: {
      /** 上传进度百分比 */
      progress: number;
      /** 已经上传的数据长度，单位 Bytes */
      totalBytesSent: number;
      /** 预期需要上传的数据总长度，单位 Bytes */
      totalBytesExpectedToSend: number;
    }) => void): void;
    /**
     * 中断下载任务
     * @version 1.4.0
     */
    abort(): void;
  }
  // 上传下载
  interface UploadFileOptions extends BaseOptions {
    /** 开发者服务器 url */
    url: string;
    /** 要上传文件资源的路径 */
    filePath: string;
    /** 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容 */
    name: string;
    /** HTTP 请求 Header , header 中不能设置 Referer */
    header?: RequestHeader;
    /** HTTP 请求中其他额外的 form data */
    formData?: any;
  }
  /**
   * 将本地资源上传到开发者服务器。
   * 如页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后，
   * 可通过此接口将本地资源上传到指定服务器。
   * 客户端发起一个 HTTPS POST 请求，
   * 其中 Content-Type 为 multipart/form-data 。
   */
  function uploadFile(options: UploadFileOptions): UploadTask;
  interface DownloadTask {
    /**
     * 监听下载进度变化
     * @version 1.4.0
     */
    onProgressUpdate(callback?: (res: {
      /** 下载进度百分比 */
      progress: number;
      /** 已经下载的数据长度，单位 Bytes */
      totalBytesWritten: number;
      /** 预期需要下载的数据总长度，单位 Bytes */
      totalBytesExpectedToWrite: number;
    }) => void): void;
    /**
     * 中断下载任务
     * @version 1.4.0
     */
    abort(): void;
  }
  interface DownloadFileOptions extends BaseOptions {
    /** 下载资源的 url */
    url: string;
    /** 下载资源的类型，用于客户端识别处理，有效值：image/audio/video */
    type?: string;
    /** HTTP 请求 Header */
    header?: RequestHeader;
    /** 下载成功后以 tempFilePath 的形式传给页面，res = {tempFilePath: '文件的临时路径'} */
    success?(res: TempFileResponse): void;
  }
  /**
   * 下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，
   * 把下载到的资源根据 type 进行处理，并返回文件的本地临时路径。
   */
  function downloadFile(options: DownloadFileOptions): DownloadTask;
  // WebSocket
  interface ConnectSocketOptions extends BaseOptions {
    /** 开发者服务器接口地址，必须是 HTTPS 协议，且域名必须是后台配置的合法域名 */
    url: string;
    /** 请求的数据 */
    data?: any;
    /** HTTP Header , header 中不能设置 Referer */
    header?: RequestHeader;
    /** 默认是GET，有效值为： OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT */
    method?: string;
    /**
     * 子协议数组
     * @version 1.4.0
     */
    protocols?: string[];
  }
  /**
   * 创建一个 WebSocket 连接；
   * 一个微信小程序同时只能有一个 WebSocket 连接，
   * 如果当前已存在一个 WebSocket 连接，
   * 会自动关闭该连接，并重新创建一个 WebSocket 连接。
   */
  function connectSocket(options: ConnectSocketOptions): void;
  /** 监听WebSocket连接打开事件。 */
  function onSocketOpen(callback: () => void): void;
  /** 监听WebSocket错误。 */
  function onSocketError(callback: (error: any) => void): void;
  interface SendSocketMessageOptions extends BaseOptions {
    /** 需要发送的内容 */
    data: string;
  }
  /**
   * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，
   * 并在 wx.onSocketOpen 回调之后才能发送。
   */
  function sendSocketMessage(options: SendSocketMessageOptions): void;
  /**
   * 监听WebSocket接受到服务器的消息事件。
   */
  function onSocketMessage(callback: (res: DataResponse) => void): void;
  /**
   * 关闭WebSocket连接。
   */
  function closeSocket(): void;
  /** 监听WebSocket关闭。 */
  function onSocketClose(callback: () => void): void;
  // #endregion
  // #region 媒体API列表
  // 媒体-----图片
  type ImageSizeType = 'original' | 'compressed';
  type ImageSourceType = 'album' | 'camera';
  type VideoSourceType = 'album' | 'camera';
  type CameraDevice = 'front' | 'back';
  interface TempFile {
    /** 本地文件路径 */
    path: string;
    /** 本地文件大小，单位：B */
    size: number;
  }
  interface TempFilesData {
    /** 文件的临时路径 */
    tempFilePaths: string;
    /**
     * 图片的本地文件列表，每一项是一个 File 对象
     * @version 1.2.0
     */
    tempFiles: TempFile[];
  }
  interface ChooseImageOptions extends BaseOptions {
    /** 最多可以选择的图片张数，默认9 */
    count?: number;
    /** original 原图，compressed 压缩图，默认二者都有 */
    sizeType?: ImageSizeType[];
    /** album 从相册选图，camera 使用相机，默认二者都有 */
    sourceType?: ImageSourceType[];
    /** 成功则返回图片的本地文件路径列表 tempFilePaths */
    success(res: TempFilesData): void;
  }
  /**
   * 从本地相册选择图片或使用相机拍照。
   */
  function chooseImage(options: ChooseImageOptions): void;
  interface PreviewImageOptions extends BaseOptions {
    /** 当前显示图片的链接，不填则默认为 urls 的第一张 */
    current?: string;
    /** 需要预览的图片链接列表 */
    urls: string[];
  }
  /**
   * 预览图片。
   */
  function previewImage(options: PreviewImageOptions): void;
  interface GetImageInfoOptions extends BaseOptions {
    /**
     * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
     */
    src: string;
  }
  /**
   * 获取图片信息
   */
  function getImageInfo(options: GetImageInfoOptions): void;
  interface SaveImageToPhotosAlbumOptions extends BaseOptions {
    /**
     * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
     */
    filePath: string;
    success(res: {
      errMsg: string
    }): void;
  }
  /**
   * 保存图片到系统相册。
   * 需要用户授权 scope.writePhotosAlbum
   * @version 1.2.0
   */
  function saveImageToPhotosAlbum(options: SaveImageToPhotosAlbumOptions): void;
  // 媒体-----录音
  interface StartRecordOptions extends BaseOptions {
    /** 录音成功后调用，返回录音文件的临时文件路径，res = {tempFilePath: '录音文件的临时路径'} */
    success?(res: TempFileResponse): void;
  }
  /**
   * 开始录音。当主动调用wx.stopRecord，
   * 或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。
   * 注：文件的临时路径，在小程序本次启动期间可以正常使用，
   * 如需持久保存，需在主动调用wx.saveFile，在小程序下次启动时才能访问得到。
   * @deprecated 1.6.0
   */
  function startRecord(options: StartRecordOptions): void;
  interface StopRecordOptions extends BaseOptions {
    success?(): void;
  }
  /**
   * ​ 主动调用停止录音。
   */
  function stopRecord(options?: StopRecordOptions): void;
  type EncodeBitRate = 8000 | 11025 | 12000 | 16000 | 22050 | 24000 | 32000 | 44100 | 48000;
  interface RecorderManagerStartOptions {
    /**
     * 指定录音的时长，单位 ms
     * 如果传入了合法的 duration
     * 在到达指定的 duration 后会自动停止录音，最大值 600000（10 分钟）,默认值 60000（1 分钟）
     */
    duration?: number;
    /**
     * 采样率，有效值 8000/16000/44100
     */
    sampleRate?: number;
    /**
     * 否 录音通道数，有效值 1/2
     */
    numberOfChannels?: number;
    /**
     * 编码码率
     * 采样率和码率有一定要求，具体有效值如下：
     * 采样率 编码码率
     * + 8000 16000 ~ 48000
     * + 11025 16000 ~ 48000
     * + 12000 24000 ~ 64000
     * + 16000 24000 ~ 96000
     * + 22050 32000 ~ 128000
     * + 24000 32000 ~ 128000
     * + 32000 48000 ~ 192000
     * + 44100 64000 ~ 320000
     * + 48000 64000 ~ 320000
     */
    encodeBitRate: number;
    /** 音频格式，有效值 aac/mp3 */
    format: string;
    /**
     * 指定帧大小，单位 KB
     * 传入 frameSize 后，每录制指定帧大小的内容后
     * 会回调录制的文件内容，不指定则不会回调。暂仅支持 mp3 格式。
     */
    frameSize: number;
  }
  interface OnRecorderManagerStopOptions {
    tempFilePath: string;
  }
  interface OnFrameRecordedOptions {
    /**  录音分片结果数据 */
    frameBuffer: ArrayBuffer;
    /** 当前帧是否正常录音结束前的最后一帧 */
    isLastFrame: boolean;
  }
  interface RecorderManager {
    /** 开始录音 */
    start(options?: RecorderManagerStartOptions): void;
    /** 暂停录音 */
    pause(): void;
    /** 继续录音 */
    resume(): void;
    /** 停止录音 */
    stop(): void;
    /** 录音开始事件 */
    onStart(callback?: () => void): void;
    /** 录音暂停事件 */
    onPause(callback?: () => void): void;
    /** 录音恢复事件 */
    onResume(callback?: () => void): void;
    /** 录音停止事件，会回调文件地址 */
    onStop(callback?: (options: OnRecorderManagerStopOptions) => void): void;
    /** 已录制完指定帧大小的文件，会回调录音分片结果数据。如果设置了 frameSize ，则会回调此事件 */
    onFrameRecorded(callback?: (options: OnFrameRecordedOptions) => void): void;
    /** 录音错误事件, 会回调错误信息 */
    onError(callback?: (err: ErrMsgResponse) => void): void;
  }
  /**
   * 获取全局唯一的录音管理器 recorderManager
   * @version 1.6.0
   */
  function getRecorderManager(): RecorderManager;
  // 媒体-----音频播放控制
  interface PlayVoiceOptions extends BaseOptions {
    /** 需要播放的语音文件的文件路径 */
    filePath: string;
  }
  /**
   * 开始播放语音，同时只允许一个语音文件正在播放，
   * 如果前一个语音文件还没播放完，将中断前一个语音播放。
   * @deprecated 1.6.0
   */
  function playVoice(options: PlayVoiceOptions): void;
  /**
   * 暂停正在播放的语音。
   * 再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。
   * 如果想从头开始播放，需要先调用 wx.stopVoice。
   * @deprecated 1.6.0
   */
  function pauseVoice(): void;
  /**
   * 结束播放语音。
   * @deprecated 1.6.0
   */
  function stopVoice(): void;
  // 媒体-----音乐播放控制
  interface BackgroundAudioPlayerState {
    /** 选定音频的长度（单位：s），只有在当前有音乐播放时返回 */
    duration: number;
    /** 选定音频的播放位置（单位：s），只有在当前有音乐播放时返回 */
    currentPosition: number;
    /** 播放状态（2：没有音乐在播放，1：播放中，0：暂停中） */
    status: number;
    /** 音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回 */
    downloadPercent: number;
    /** 歌曲数据链接，只有在当前有音乐播放时返回 */
    dataUrl: string;
  }
  interface GetBackgroundAudioPlayerStateOptions extends BaseOptions {
    /** 接口调用成功的回调函数 */
    success?(state: BackgroundAudioPlayerState): void;
    /** 接口调用失败的回调函数 */
    fail?(): void;
    /** 接口调用结束的回调函数（调用成功、失败都会执行） */
    complete?(): void;
  }
  /**
   * 获取音乐播放状态。
   * @deprecated 1.2.0
   */
  function getBackgroundAudioPlayerState(options: GetBackgroundAudioPlayerStateOptions): void;
  interface PlayBackgroundAudioOptions extends BaseOptions {
    /** 音乐链接 */
    dataUrl: string;
    /** 音乐标题 */
    title?: string;
    /** 封面URL */
    coverImgUrl?: string;
  }
  /**
   * 播放音乐，同时只能有一首音乐正在播放。
   * @deprecated 1.2.0
   */
  function playBackgroundAudio(options: PlayBackgroundAudioOptions): void;
  /**
   * 暂停播放音乐。
   * @deprecated 1.2.0
   */
  function pauseBackgroundAudio(options: PlayBackgroundAudioOptions): void;
  interface SeekBackgroundAudioOptions extends BaseOptions {
    /** 音乐位置，单位：秒 */
    position: number;
  }
  /**
   * 控制音乐播放进度。
   * @deprecated 1.2.0
   */
  function seekBackgroundAudio(options: SeekBackgroundAudioOptions): void;
  /**
   * 停止播放音乐。
   * @deprecated 1.2.0
   */
  function stopBackgroundAudio(options: PlayBackgroundAudioOptions): void;
  /**
   * 监听音乐播放。
   * @deprecated 1.2.0
   */
  function onBackgroundAudioPlay(callback: () => void): void;
  /**
   * 监听音乐暂停。
   * @deprecated 1.2.0
   */
  function onBackgroundAudioPause(callback: () => void): void;
  /**
   * 监听音乐停止。
   * @deprecated 1.2.0
   */
  function onBackgroundAudioStop(callback: () => void): void;
  interface BackgroundAudioManager {
    /** 当前音频的长度（单位：s），只有在当前有合法的 src 时返回 */
    readonly duration: number;
    /** 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回 */
    readonly currentTime: number;
    /** 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放 */
    readonly paused: boolean;
    /** 音频的数据源，默认为空字符串，当设置了新的 src 时，会自动开始播放 ，目前支持的格式有 m4a, aac, mp3, wav */
    src: string;
    /** 音频开始播放的位置（单位：s） */
    startTime: number;
    /** 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。 是 */
    buffered: number;
    /** 音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。 */
    title: string;
    /** 专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值 */
    epname: string;
    /** 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值 */
    singer: string;
    /** 封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。 */
    coverImgUrl: string;
    /** 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值 */
    webUrl: string;
    /** 播放 */
    play(): void;
    /** 暂停 */
    pause(): void;
    /** 停止 */
    stop(): void;
    /** 跳转到指定位置，单位 s */
    seek(position: number): void;
    /** 背景音频进入可以播放状态，但不保证后面可以流畅播放 */
    onCanplay(callback?: () => void): void;
    /** 背景音频播放事件 */
    onPlay(callback?: () => void): void;
    /** 背景音频暂停事件 */
    onPause(callback?: () => void): void;
    /** 背景音频停止事件 */
    onStop(callback?: () => void): void;
    /** 背景音频自然播放结束事件 */
    onEnded(callback?: () => void): void;
    /** 背景音频播放进度更新事件 */
    onTimeUpdate(callback?: () => void): void;
    /** 用户在系统音乐播放面板点击上一曲事件（iOS only） */
    onPrev(callback?: () => void): void;
    /** 用户在系统音乐播放面板点击下一曲事件（iOS only） */
    onNext(callback?: () => void): void;
    /** 背景音频播放错误事件 */
    onError(callback?: () => void): void;
    /** 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 */
    onWaiting(callback?: () => void): void;
  }
  /**
   * 获取全局唯一的背景音频管理器 backgroundAudioManager。
   * @version 1.2.0
   */
  function getBackgroundAudioManager(): BackgroundAudioManager;
  // 媒体-----音频组件控制
  /**
   * audioContext 通过 audioId 跟一个 <audio/> 组件绑定，通过它可以操作对应的 <audio/> 组件。
   */
  interface AudioContext {
    /**
     * 音频的地址
     */
    setSrc(src: string): void;
    /**
     * 播放
     */
    play(): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 跳转到指定位置，单位 s
     */
    seek(position: number): void;
  }
  /**
   * 创建并返回 audio 上下文 audioContext 对象
   * @param audioId audio标签id <audio  src="{{src}}" id="myAudio" ></audio>
   * @example
   * <!-- audio.wxml -->
   * <audio  src="{{src}}" id="myAudio" ></audio>
   * <button type="primary" bindtap="audioPlay">播放</button>
   * <button type="primary" bindtap="audioPause">暂停</button>
   * <button type="primary" bindtap="audio14">设置当前播放时间为14秒</button>
   * <button type="primary" bindtap="audioStart">回到开头</button>
   * // audio.js
   * Page({
   * onReady: function (e) {
   *   // 使用 wx.createAudioContext 获取 audio 上下文 context
   *   this.audioCtx = wx.createAudioContext('myAudio')
   *   this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/
   * M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&
   * uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&
   * fromtag=46')
   *   this.audioCtx.play()
   * },
   * data: {
   *   src: ''
   * },
   * audioPlay: function () {
   *   this.audioCtx.play()
   * },
   * audioPause: function () {
   *   this.audioCtx.pause()
   * },
   * audio14: function () {
   *   this.audioCtx.seek(14)
   * },
   * audioStart: function () {
   *   this.audioCtx.seek(0)
   * }
   * })
   * @deprecated 1.6.0
   */
  function createAudioContext(audioId: string, instance: any): AudioContext;
  interface InnerAudioContext {
    /** 当前音频的长度（单位：s），只有在当前有合法的 src 时返 */
    readonly duration: number;
    /** 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6  */
    readonly currentTime: number;
    /** 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播 */
    readonly paused: boolean;
    /**  音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲 */
    readonly buffered: number;
    /** 音频的数据链接，用于直接播放。 */
    src: string;
    /** 开始播放的位置（单位：s），默认 0 */
    startTime: number;
    /** 是否自动开始播放，默认 false */
    autoplay: boolean;
    /** 是否循环播放，默认 false */
    loop: boolean;
    /** 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音，默认值 true */
    obeyMuteSwitch: boolean;
    /** 播放 */
    play(): void;
    /** 暂停 */
    pause(): void;
    /** 停止 */
    stop(): void;
    /** 跳转到指定位置，单位 s */
    seek(position: number): void;
    /** 销毁当前实例 */
    destroy(): void;
    /** 音频进入可以播放状态，但不保证后面可以流畅播放 */
    onCanplay(callback?: () => void): void;
    /** 音频播放事件 */
    onPlay(callback?: () => void): void;
    /** 音频暂停事件 */
    onPause(callback?: () => void): void;
    /** 音频停止事件 */
    onStop(callback?: () => void): void;
    /** 音频自然播放结束事件 */
    onEnded(callback?: () => void): void;
    /** 音频播放进度更新事件 */
    onTimeUpdate(callback?: () => void): void;
    /** 音频播放错误事件 */
    onError(callback?: () => void): void;
    /** 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 */
    onWaiting(callback?: () => void): void;
    /** 音频进行 seek 操作事件 */
    onSeeking(callback?: () => void): void;
    /** 音频完成 seek 操作事件 */
    onSeeked(callback?: () => void): void;
  }
  /**
   * 创建并返回内部 audio 上下文 innerAudioContext 对象。
   * 本接口是 wx.createAudioContext 升级版。
   * @version 1.6.0
   */
  function createInnerAudioContext(): InnerAudioContext;
  // 媒体-----视频
  interface ChooseVideoOptions extends BaseOptions {
    /** album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera'] */
    sourceType?: VideoSourceType[];
    /** 拍摄视频最长拍摄时间，单位秒。最长支持60秒 */
    maxDuration?: number;
    /** 前置或者后置摄像头，默认为前后都有，即：['front', 'back'] */
    camera?: CameraDevice[];
    /** 接口调用成功，返回视频文件的临时文件路径，详见返回参数说明 */
    success?(res: VideoData): void;
  }
  /**
   * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
   */
  function chooseVideo(options: ChooseVideoOptions): void;
  // 媒体-----视频组件控制
  interface VideoContext {
    /**
     * 播放
     */
    play(): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 跳转到指定位置，单位 s
     */
    seek(position: number): void;
    /**
     * 发送弹幕，danmu 包含两个属性 text, color。
     */
    sendDanmu(danmu: {
      text: string;
      color: number | string;
    }): void;
  }
  interface VideoData {
    /** 选定视频的临时文件路径 */
    tempFilePath: string;
    /** 选定视频的时间长度 */
    duration: number;
    /** 选定视频的数据量大小 */
    size: number;
    /** 返回选定视频的长 */
    height: number;
    /** 返回选定视频的宽 */
    width: number;
  }
  /**
   * 创建并返回 video 上下文 videoContext 对象
   * @param videoId video标签id <video  src="{{src}}" id="myVideo" ></video>
   */
  function createVideoContext(videoId: string): VideoContext;
  interface TakePhotoOptions extends BaseOptions {
    /** 成像质量，值为high, normal, low，默认normal */
    quality?: string;
    success?(res: { tempImagePath: string }): void;
  }
  interface StartRecordOptions extends BaseOptions {
    /** 超过30s或页面onHide时会结束录像 */
    timeoutCallback?(res: { tempThumbPath: string, tempVideoPath: string }): void;
  }
  interface StopRecordOptions extends BaseOptions {
    success?(res: { tempThumbPath: string, tempVideoPath: string }): void;
  }
  interface CameraContext {
    /** 拍照，可指定质量，成功则返回图片 */
    takePhoto(options: TakePhotoOptions): void;
    /** 开始录像 */
    startRecord(options: StartRecordOptions): void;
    /** 结束录像，成功则返回封面与视频 */
    stopRecord(options: StopRecordOptions): void;
  }
  /**
   * 创建并返回 camera 上下文 cameraContext 对象
   * cameraContext 与页面的 camera 组件绑定
   * 一个页面只能有一个camera，通过它可以操作对应的 <camera/> 组件。
   * 在自定义组件下，第一个参数传入组件实例this，以操作组件内 <camera/> 组件
   * @version 1.6.0
   */
  function createCameraContext(instance: any): CameraContext;
  interface RequestFullScreenOptions extends BaseOptions {
    /** 有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度） */
    direction: number;
  }
  interface LivePlayerContext {
    /** 播放 */
    play(options: BaseOptions): void;
    /** 停止 */
    stop(options: BaseOptions): void;
    /** 静音 */
    mute(options: BaseOptions): void;
    /** 进入全屏 */
    requestFullScreen(options: RequestFullScreenOptions): void;
    /** 退出全屏 */
    exitFullScreen(options: BaseOptions): void;
  }
  /**
   * 操作对应的 <live-player/> 组件。
   * 创建并返回 live-player 上下文 LivePlayerContext 对象。
   * 在自定义组件下，第二个参数传入组件实例this，以操作组件内 <live-player/> 组件
   * @version 1.7.0
   */
  function createLivePlayerContext(id: string, instance: any): LivePlayerContext;
  // 文件
  interface SavedFileData {
    /** 文件的保存路径 */
    savedFilePath: string;
  }
  interface SaveFileOptions extends BaseOptions {
    /** 需要保存的文件的临时路径 */
    tempFilePath: string;
    /** 返回文件的保存路径，res = {savedFilePath: '文件的保存路径'} */
    success?(res: SavedFileData): void;
  }
  /**
   * 保存文件到本地。
   * 本地文件存储的大小限制为 10M
   */
  function saveFile(options: SaveFileOptions): void;
  interface File {
    /**
     * 文件的本地路径
     */
    filePath: string;
    /**
     * 文件的保存时的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;
    /**
     * 文件大小，单位B
     */
    size: number;
  }
  interface GetFileInfoOptions extends BaseOptions {
    /** 本地文件路径 */
    filePath: string;
    /** 计算文件摘要的算法，默认值 md5，有效值：md5，sha1 */
    digestAlgorithm?: string;
    success?(options: GetFileInfoSuccess): void;
  }
  interface GetFileInfoSuccess {
    /** 文件大小，单位：B */
    size: number;
    /** 按照传入的 digestAlgorithm 计算得出的的文件摘要 */
    digest: string;
    /** 调用结果 */
    errMsg: string;
  }
  /**
   *  获取文件信息
   * @version 1.4.0
   */
  function getFileInfo(options: GetFileInfoOptions): void;
  interface GetSavedFileListData {
    /**
     * 接口调用结果
     */
    errMsg: string;
    /**
     * 文件列表
     */
    fileList: File[];
  }
  interface GetSavedFileListOptions extends BaseOptions {
    /** 接口调用成功的回调函数 */
    success?(res: GetSavedFileListData): void;
  }
  /**
   * 获取本地已保存的文件列表
   */
  function getSavedFileList(options: GetSavedFileListOptions): void;
  interface SavedFileInfoData {
    /**
     * 接口调用结果
     */
    errMsg: string;
    /**
     * 文件大小，单位B
     */
    size: number;
    /**
     * 文件的保存是的时间戳，从1970/01/01 08:00:00 到当前时间的秒数
     */
    createTime: number;
  }
  interface GetSavedFileInfoOptions extends BaseOptions {
    filePath: string;
    /** 接口调用成功的回调函数 */
    success?(res: SavedFileInfoData): void;
  }
  /**
   * 获取本地文件的文件信息
   */
  function getSavedFileInfo(options: GetSavedFileInfoOptions): void;
  type RemoveSavedFileOptions = BaseOptions;
  /**
   * 删除本地存储的文件
   */
  function removeSavedFile(options: RemoveSavedFileOptions): void;
  interface OpenDocumentOptions extends BaseOptions {
    /**
     * 文件路径，可通过 downFile 获得
     */
    filePath: string;
  }
  /**
   * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
   */
  function openDocument(options: OpenDocumentOptions): void;
  // 数据缓存
  interface SetStorageOptions extends BaseOptions {
    /** 本地缓存中的指定的 key */
    key: string;
    /** 需要存储的内容 */
    data: any | string;
  }
  /**
   * 将数据存储在本地缓存中指定的 key 中，
   * 会覆盖掉原来该 key 对应的内容，这是一个异步接口。
   */
  function setStorage(options: SetStorageOptions): void;
  /**
   * 将 data 存储在本地缓存中指定的 key 中，
   * 会覆盖掉原来该 key 对应的内容，这是一个同步接口。
   *
   * @param key 本地缓存中的指定的 key
   * @param data 需要存储的内容
   */
  function setStorageSync(key: string, data: any | string): void;
  interface GetStorageOptions extends BaseOptions {
    /** 本地缓存中的指定的 key */
    key: string;
    /** 接口调用的回调函数,res = {data: key对应的内容} */
    success(res: DataResponse): void;
  }
  /**
   * 从本地缓存中异步获取指定 key 对应的内容。
   */
  function getStorage(options: GetStorageOptions): void;
  /**
   * 从本地缓存中同步获取指定 key 对应的内容。
   *
   */
  function getStorageSync(key: string): any | string;
  interface StorageInfo {
    /**
     * 当前storage中所有的key
     */
    keys: string[];
    /**
     * 当前占用的空间大小, 单位kb
     */
    currentSize: number;
    /**
     * 限制的空间大小，单位kb
     */
    limitSize: number;
  }
  interface GetStorageInfoOptions extends BaseOptions {
    success(res: StorageInfo): void;
  }
  /**
   * 异步获取当前storage的相关信息
   */
  function getStorageInfo(options: GetStorageInfoOptions): void;
  function getStorageInfoSync(): GetStorageInfoOptions;
  interface RemoveStorageOptions extends BaseOptions {
    key: string;
    success?(res: DataResponse): void;
  }
  function removeStorage(options: RemoveStorageOptions): void;
  function removeStorageSync(key: string): DataResponse;
  /**
   * 清理本地数据缓存。
   */
  function clearStorage(): void;
  /**
   * 同步清理本地数据缓存
   */
  function clearStorageSync(): void;
  // #endregion
  // #region 位置API列表
  // 位置-----获取位置
  interface LocationData {
    /** 纬度，浮点数，范围为-90~90，负数表示南纬 */
    latitude: number;
    /** 经度，浮点数，范围为-180~180，负数表示西经 */
    longitude: number;
    /** 速度，浮点数，单位m/s */
    speed: number;
    /** 位置的精确度 */
    accuracy: number;
  }
  interface GetLocationOptions extends BaseOptions {
    /** 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标 */
    type?: 'wgs84' | 'gcj02';
    /** 接口调用成功的回调函数，返回内容详见返回参数说明。 */
    success(res: LocationData): void;
  }
  /**
   * 获取当前的地理位置、速度。
   */
  function getLocation(options: GetLocationOptions): void;
  interface ChooseLocationData {
    /**
     * 位置名称
     */
    name: string;
    /**
     * 详细地址
     */
    address: string;
    /**
     * 纬度，浮点数，范围为-90~90，负数表示南纬
     */
    latitude: number;
    /**
     * 经度，浮点数，范围为-180~180，负数表示西经
     */
    longitude: number;
  }
  interface ChooseLocationOptions extends BaseOptions {
    success(res: ChooseLocationData): void;
  }
  /**
   * 打开地图选择位置
   */
  function chooseLocation(options: ChooseLocationOptions): void;
  // 位置-----查看位置
  interface OpenLocationOptions extends BaseOptions {
    /** 纬度，范围为-90~90，负数表示南纬 */
    latitude: number;
    /** 经度，范围为-180~180，负数表示西经 */
    longitude: number;
    /** 缩放比例，范围1~28，默认为28 */
    scale?: number;
    /** 位置名 */
    name?: string;
    /** 地址的详细说明 */
    address?: string;
  }
  /**
   * 使用微信内置地图查看位置
   */
  function openLocation(options: OpenLocationOptions): void;
  // 位置-----地图组件控制
  interface GetCenterLocationOptions extends BaseOptions {
    success(res: {
      longitude: number;
      latitude: number;
    }): void;
  }
  /**
   * mapContext 通过 mapId 跟一个 <map/> 组件绑定，通过它可以操作对应的 <map/> 组件。
   */
  interface MapContext {
    /**
     * 获取当前地图中心的经纬度，返回的是 gcj02 坐标系，可以用于 wx.openLocation
     */
    getCenterLocation(options: GetCenterLocationOptions): OpenLocationOptions;
    /**
     * 将地图中心移动到当前定位点，需要配合map组件的show-location使用
     */
    moveToLocation(): void;
  }
  /**
   * 创建并返回 map 上下文 mapContext 对象
   */
  function createMapContext(mapId: string): MapContext;
  // #endregion
  // #region 设备API列表
  // 设备-----系统信息
  interface SystemInfo {
    /** 手机型号 */
    model: string;
    /** 设备像素比 */
    pixelRatio: number;
    /** 窗口宽度 */
    windowWidth: number;
    /** 窗口高度 */
    windowHeight: number;
    /** 微信设置的语言 */
    language: string;
    /** 微信版本号 */
    version: string;
  }
  interface GetSystemInfoOptions extends BaseOptions {
    /** 成功获取系统信息的回调 */
    success(res: SystemInfo): void;
  }
  /**
   * 获取系统信息。
   */
  function getSystemInfo(options: GetSystemInfoOptions): void;
  function getSystemInfoSync(): SystemInfo;
  /**
   * 判断小程序的API，回调，参数，组件等是否在当前版本可用。
   * String参数说明：
   * 使用 ${API}.${method}.${param}.${options}
   * 或者 ${component}.${attribute}.${option}方式来调用
   * 例如：
   * ${API} 代表 API 名字
   * ${method} 代表调用方式，有效值为return, success, object, callback
   * ${param} 代表参数或者返回值
   * ${options} 代表参数的可选值
   * ${component} 代表组件名字
   * ${attribute} 代表组件属性
   * ${option} 代表组件属性的可选值
   */
  function canIUse(api: string): boolean;
  // 设备-----网络状态
  type networkType = '2g' | '3g' | '4g' | 'wifi' | 'unknown' | 'none';
  interface NetworkTypeData {
    /** 返回网络类型2g，3g，4g，wifi */
    networkType: networkType;
  }
  interface GetNetworkTypeOptions extends BaseOptions {
    /** 接口调用成功，返回网络类型 networkType */
    success(res: NetworkTypeData): void;
  }
  /**
   * 获取网络类型。
   */
  function getNetworkType(options: GetNetworkTypeOptions): void;
  /**
   * 监听网络状态变化。
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  function onNetworkStatusChange(callback: (res: {
    isConnected: boolean;
    networkType: networkType;
  }) => void): void;
  // 设备-----加速度计
  interface AccelerometerData {
    /** X 轴 */
    x: number;
    /** Y 轴 */
    y: number;
    /** Z 轴 */
    z: number;
  }
  type AccelerometerChangeCallback = (res: AccelerometerData) => void;
  /**
   * 监听重力感应数据，频率：5次/秒
   */
  function onAccelerometerChange(callback: AccelerometerChangeCallback): void;
  type AccelerometerOptions = BaseOptions;
  /**
   * 开始监听加速度数据。
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  function startAccelerometer(options: AccelerometerOptions): void;
  /**
   * 停止监听加速度数据。
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  function stopAccelerometer(options: AccelerometerOptions): void;
  // 设备-----罗盘
  interface CompassData {
    /** 面对的方向度数 */
    direction: number;
  }
  type CompassChangeCallback = (res: CompassData) => void;
  /**
   * 监听罗盘数据，频率：5次/秒，接口调用后会自动开始监听，可使用wx.stopCompass停止监听。
   */
  function onCompassChange(callback: CompassChangeCallback): void;
  type CompassOptions = BaseOptions;
  /**
   * 开始监听罗盘数据。
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  function startCompass(options: CompassOptions): void;
  function stopCompass(options: CompassOptions): void;
  // 设备-----拨打电话
  interface MakePhoneCallOptions extends BaseOptions {
    /**
     * 需要拨打的电话号码
     */
    phoneNumber: string;
  }
  /**
   * 拨打电话
   */
  function makePhoneCall(options: MakePhoneCallOptions): void;
  // 设备-----扫码
  type scanType = "qrCode" | "barCode";
  interface ScanCodeData {
    /**
     * 所扫码的内容
     */
    result: string;
    /**
     * 所扫码的类型
     */
    scanType: scanType;
    /**
     * 所扫码的字符集
     */
    charSet: string;
    /**
     * 当所扫的码为当前小程序的合法二维码时，会返回此字段，内容为二维码携带的 path
     */
    path: string;
  }
  interface ScanCodeOptions extends BaseOptions {
    /**
     * 是否只能从相机扫码，不允许从相册选择图片
     * @version 1.2.0
     */
    onlyFromCamera?: boolean;
    /**
     * 扫码类型，参数类型是数组
     * 二维码是'qrCode'，一维码是'barCode'，DataMatrix是‘datamatrix’，pdf417是‘pdf417’。
     * @version 1.7.0
     */
    scanType?: string[];
    success(res: ScanCodeData): void;
  }
  /**
   * 调起客户端扫码界面，扫码成功后返回对应的结果
   */
  function scanCode(options: ScanCodeOptions): void;
  // 设备-----剪贴板
  interface ClipboardDataOptions extends BaseOptions {
    data: string;
    success?(res: DataResponse): void;
  }
  /**
   * 设置系统剪贴板的内容
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  function setClipboardData(options: ClipboardDataOptions): void;
  /**
   * 获取系统剪贴板内容
   * 微信客户端 6.5.6 版本开始支持
   * @version 1.1.0
   */
  function getClipboardData(options: ClipboardDataOptions): void;
  // 设备-----蓝牙
  interface OpenBluetoothAdapterOptions extends BaseOptions {
    success(res: any): void;
  }
  /**
   * 初始化蓝牙适配器
   * @version 1.1.0
   */
  function openBluetoothAdapter(options: OpenBluetoothAdapterOptions): void;
  interface CloseBluetoothAdapterOptions extends BaseOptions {
    success(res: any): void;
  }
  /**
   * 关闭蓝牙模块。调用该方法将断开所有已建立的链接并释放系统资源
   * @version 1.1.0
   */
  function closeBluetoothAdapter(options: CloseBluetoothAdapterOptions): void;
  interface BluetoothAdapterState {
    /**
     * 蓝牙适配器是否可用
     */
    available: boolean;
    /**
     * 蓝牙适配器是否处于搜索状态
     */
    discovering: boolean;
  }
  interface BluetoothAdapterStateData extends ErrMsgResponse {
    /**
     * 蓝牙适配器信息
     */
    adapterState: BluetoothAdapterState;
  }
  interface GetBluetoothAdapterStateOptions extends BaseOptions {
    success(res: BluetoothAdapterStateData): void;
  }
  /**
   * 获取本机蓝牙适配器状态
   * @version 1.1.0
   */
  function getBluetoothAdapterState(options: GetBluetoothAdapterStateOptions): void;
  /**
   * 监听蓝牙适配器状态变化事件
   * @version 1.1.0
   */
  function onBluetoothAdapterStateChange(callback: (res: BluetoothAdapterState) => void): void;
  interface StartBluetoothDevicesDiscoveryOptions extends BaseOptions {
    success(res: ErrMsgResponse): void;
    /**
     * 蓝牙设备主 service 的 uuid 列表
     * 某些蓝牙设备会广播自己的主 service 的 uuid。如果这里传入该数组，那么根据该 uuid 列表，只搜索有这个主服务的设备。
     */
    services?: string[];
  }
  /**
   * 开始搜寻附近的蓝牙外围设备。
   * 注意，该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。
   * @example
   * // 以微信硬件平台的蓝牙智能灯为例，主服务的 UUID 是 FEE7。传入这个参数，只搜索主服务 UUID 为 FEE7 的设备
   * wx.startBluetoothDevicesDiscovery({
   *   services: ['FEE7'],
   *   success: function (res) {
   *     console.log(res)
   *   }
   * });
   */
  function startBluetoothDevicesDiscovery(options: StartBluetoothDevicesDiscoveryOptions): void;
  interface StopBluetoothDevicesDiscoveryOptions extends BaseOptions {
    success(res: ErrMsgResponse): void;
  }
  /**
   * 停止搜寻附近的蓝牙外围设备。请在确保找到需要连接的设备后调用该方法停止搜索。
   * @version 1.1.0
   */
  function stopBluetoothDevicesDiscovery(options: StopBluetoothDevicesDiscoveryOptions): void;
  /**
   * 蓝牙设备信息
   */
  interface BluetoothDevice {
    /**
     * 蓝牙设备名称，某些设备可能没有
     */
    name: string;
    /**
     * 用于区分设备的 id
     */
    deviceId: string;
    /**
     * int 当前蓝牙设备的信号强度
     */
    RSSI: number;
    /**
     * 当前蓝牙设备的广播内容
     */
    advertisData: ArrayBuffer;
  }
  interface GetBluetoothDevicesOptions extends BaseOptions {
    success(res: {
      devices: BluetoothDevice[];
    } & ErrMsgResponse): void;
  }
  /**
   * 获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
   */
  function getBluetoothDevices(options: GetBluetoothDevicesOptions): void;
  /**
   * 监听寻找到新设备的事件
   * @version 1.1.0
   */
  function onBluetoothDeviceFound(callback: (res: {
    devices: BluetoothDevice[]
  }) => void): void;
  interface GetConnectedBluetoothDevicesOptions extends BaseOptions {
    services: string[];
    success(res: {
      devices: BluetoothDevice[]
    } & ErrMsgResponse): void;
  }
  /**
   * 根据 uuid 获取处于已连接状态的设备
   * @version 1.1.0
   */
  function getConnectedBluetoothDevices(options: GetConnectedBluetoothDevicesOptions): void;
  interface CreateBLEConnectionOptions extends BaseOptions {
    success(res: ErrMsgResponse): void;
  }
  /**
   * 低功耗蓝牙接口
   * @version 1.1.0
   */
  function createBLEConnection(options: CreateBLEConnectionOptions): void;
  interface CloseBLEConnectionOptions extends BaseOptions {
    /**
     * 蓝牙设备 id，参考 getDevices 接口
     */
    deviceId: string;
    success(res: ErrMsgResponse): void;
  }
  /**
   * 断开与低功耗蓝牙设备的连接
   * @version 1.1.0
   */
  function closeBLEConnection(options: CloseBLEConnectionOptions): void;
  interface GetBLEDeviceServicesOptions extends BaseOptions {
    /**
     * 蓝牙设备 id，参考 getDevices 接口
     */
    deviceId: string;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success(res: {
      services: Array<{
        uuid: string;
        isPrimary: boolean;
      }>;
    } & ErrMsgResponse): void;
  }
  /**
   * 获取蓝牙设备所有 service（服务）
   */
  function getBLEDeviceServices(options: GetBLEDeviceServicesOptions): void;
  interface GetBLEDeviceCharacteristicsOptions extends BaseOptions {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string;
    /**
     * 蓝牙服务 uuid
     */
    serviceId: string;
    /**
     * 成功则返回本机蓝牙适配器状态
     */
    success(res: {
      characteristics: Array<{
        uuid: string;
        properties: Array<{
          /**
           * 该特征值是否支持 read 操作
           */
          read: boolean;
          /**
           * 该特征值是否支持 write 操作
           */
          write: boolean;
          /**
           * 该特征值是否支持 notify 操作
           */
          notify: boolean;
          /**
           * 该特征值是否支持 indicate 操作
           */
          indicate: boolean;
        }>;
      }>;
    } & ErrMsgResponse): void;
  }
  /**
   * 获取蓝牙设备所有 characteristic（特征值）
   */
  function getBLEDeviceCharacteristics(options: GetBLEDeviceCharacteristicsOptions): void;
  interface BLECharacteristicValueOptions extends BaseOptions {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string;
    /**
     * 蓝牙特征值对应服务的 uuid
     */
    serviceId: string;
    /**
     * 蓝牙特征值的 uuid
     */
    characteristicId: string;
    success(res: {
      characteristic: {
        /**
         * 蓝牙设备特征值的 uuid
         */
        characteristicId: string;
        /**
         * 蓝牙设备特征值对应服务的 uuid
         */
        serviceId: string;
        /**
         * 蓝牙设备特征值对应的二进制值
         */
        value: ArrayBuffer;
      };
    } & ErrMsgResponse): void;
  }
  /**
   * 读取低功耗蓝牙设备的特征值的二进制数据值。
   * 注意：必须设备的特征值支持read才可以成功调用，具体参照 characteristic 的 properties 属性
   */
  function readBLECharacteristicValue(options: BLECharacteristicValueOptions): void;
  /**
   * 向低功耗蓝牙设备特征值中写入二进制数据。
   * 注意：必须设备的特征值支持write才可以成功调用，具体参照 characteristic 的 properties 属性
   * tips: 并行调用多次读写接口存在读写失败的可能性
   */
  function writeBLECharacteristicValue(options: BLECharacteristicValueOptions): void;
  /**
   * 启用低功耗蓝牙设备特征值变化时的 notify 功能。
   * 注意：必须设备的特征值支持notify才可以成功调用，具体参照 characteristic 的 properties 属性
   * 另外，必须先启用notify才能监听到设备 characteristicValueChange 事件
   */
  function notifyBLECharacteristicValueChanged(options: BLECharacteristicValueOptions): void;
  /**
   * 监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等等。
   */
  function onBLEConnectionStateChanged(callback: (res: {
    /**
     * 蓝牙设备 id，参考 device 对象
     */
    deviceId: string;
    /**
     * 连接目前的状态
     */
    connected: boolean;
  }) => void): void;
  /**
   * 监听低功耗蓝牙设备的特征值变化。必须先启用notify接口才能接收到设备推送的notification。
   */
  function onBLECharacteristicValueChange(callback: (
    res: {
      /**
       * 蓝牙设备 id，参考 device 对象
       */
      deviceId: string;
      /**
       * 特征值所属服务 uuid
       */
      serviceId: string;
      /**
       * 特征值 uuid
       */
      characteristicId: string;
      /**
       * 特征值最新的值
       */
      value: ArrayBuffer;
    }
  ) => void): void;
  // #region iBeacon
  interface BeaconDiscoveryOptions extends BaseOptions {
    /**
     * iBeacon设备广播的 uuids
     */
    uuids: string | string[];
    success?(errMsg: string): void;
  }
  /**
   * 开始搜索附近的iBeacon设备
   * @version 1.2.0
   */
  function startBeaconDiscovery(options: BeaconDiscoveryOptions): void;
  /**
   * 停止搜索附近的iBeacon设备
   * @version 1.2.0
   */
  function stopBeaconDiscovery(options: BeaconDiscoveryOptions): void;
  interface Beacon {
    /** iBeacon 设备广播的 uuid */
    uuid: string;
    /** iBeacon 设备的主 id */
    major: string;
    /** iBeacon 设备的次 id */
    minor: string;
    /** 表示设备距离的枚举值 */
    proximity: number;
    /** iBeacon 设备的距离 */
    accuracy: number;
    /** 表示设备的信号强度 */
    rssi: number;
  }
  interface GetBeaconsSuccess {
    beacons: Beacon[];
    errMsg: string;
  }
  interface GetBeaconsOptions extends BaseOptions {
    success?(options: GetBeaconsSuccess): void;
  }
  /**
   * 获取所有已搜索到的iBeacon设备
   * @version 1.2.0
   */
  function getBeacons(options: GetBeaconsOptions): void;
  /**
   * 监听 iBeacon 设备的更新事件
   * @version 1.2.0
   */
  function onBeaconUpdate(callback?: (beacons: Beacon[]) => void): void;
  /**
   * 监听 iBeacon 服务的状态变化
   * @version 1.2.0
   */
  function onBeaconServiceChange(callback?: (available?: boolean, discovering?: boolean) => void): void;
  // #endregion
  // 设备-----屏幕亮度
  interface SetScreenBrightnessOptions {
    /** 屏幕亮度值，范围 0~1，0 最暗，1 最亮 */
    value: number;
  }
  /**
   * 设置屏幕亮度
   * @version 1.2.0
   */
  function setScreenBrightness(options: SetScreenBrightnessOptions): void;
  interface GetScreenBrightnessOptions extends BaseOptions {
    /** 屏幕亮度值，范围 0~1，0 最暗，1 最亮 */
    success(value: number): void;
  }
  /**
   * 获取屏幕亮度
   * @version 1.2.0
   */
  function getScreenBrightness(options?: GetScreenBrightnessOptions): void;
  interface SetKeepScreenOnOptions extends BaseOptions {
    /** 是否保持屏幕常亮 */
    keepScreenOn: boolean;
    success?(errMsg: string): void;
  }
  /**
   * 设置是否保持常亮状态。
   * 仅在当前小程序生效，离开小程序后设置失效。
   * @version 1.4.0
   */
  function setKeepScreenOn(options?: SetKeepScreenOnOptions): void;
  // 设备-----震动
  /**
   * 使手机发生较长时间的振动（400ms）
   * @version 1.2.0
   */
  function vibrateLong(options?: BaseOptions): void;
  /**
   * 使手机发生较短时间的振动（15ms）
   * @version 1.2.0
   */
  function vibrateShort(options?: BaseOptions): void;
  /**
   * 监听用户主动截屏事件，用户使用系统截屏按键截屏时触发此事件
   * @version 1.4.0
   */
  function onUserCaptureScreen(callback?: (res: any) => void): void;
  // 设备-----手机联系人
  interface PhoneContact extends BaseOptions {
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
  /**
   * 增加 手机联系人
   * 调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式
   * 写入手机系统通讯录
   * 完成手机通讯录联系人和联系方式的增加。
   * @version 1.2.0
   */
  function addPhoneContact(options: PhoneContact): void;
  // 设备-----Wi-Fi
  /**
   * 初始化 Wi-Fi 模块。
   * @version 1.6.0
   */
  function startWifi(options?: BaseOptions): void;
  /**
   * 关闭 Wi-Fi 模块。
   * @version 1.6.0
   */
  function stopWifi(options?: BaseOptions): void;
  interface ConnectWiFiOptions extends BaseOptions {
    /** Wi-Fi 设备ssid */
    SSID: string;
    /** Wi-Fi 设备bssid */
    BSSID: string;
    /** Wi-Fi 设备密码 */
    password?: string;
  }
  /**
   * 连接 Wi-Fi。
   * 若已知 Wi-Fi 信息，可以直接利用该接口连接。
   * 仅 Android 与 iOS 11 以上版本支持。
   * @version 1.6.0
   */
  function connectWifi(options?: ConnectWiFiOptions): void;
  /**
   * 请求获取 Wi-Fi 列表
   * 在 onGetWifiList 注册的回调中返回 wifiList 数据。
   * iOS 将跳转到系统的 Wi-Fi 界面，Android 不会跳转。
   * iOS 11.0 及 iOS 11.1 两个版本因系统问题，该方法失效。但在 iOS 11.2 中已修复。
   * @version 1.6.0
   */
  function getWifiList(options?: BaseOptions): void;
  interface WiFi {
    /** Wi-Fi 的SSID */
    SSID: string;
    /** Wi-Fi 的BSSID */
    BSSID: string;
    /** Wi-Fi 是否安全 */
    secure: boolean;
    /** Wi-Fi 信号强度 */
    signalStrength: number;
  }
  interface GetWifiListOptions {
    /** Wi-Fi 列表数据 */
    wifiList: WiFi[];
  }
  /**
   * 监听在获取到 Wi-Fi 列表数据时的事件，在回调中将返回 wifiList。
   * @version 1.6.0
   */
  function onGetWifiList(callback?: (res: GetWifiListOptions) => void): void;
  interface SetWifiList {
    /** Wi-Fi 设备ssid */
    SSID: string;
    /** Wi-Fi 设备bssid */
    BSSID: string;
    /** Wi-Fi 设备密码 */
    password: string;
  }
  interface SetWifiListOptions extends BaseOptions {
    /** 提供预设的 Wi-Fi 信息列表 */
    wifiList: SetWifiList[];
  }
  /**
   * iOS特有接口 在 onGetWifiList 回调后，利用接口设置 wifiList 中 AP 的相关信息。
   * 注意：
   * + 该接口只能在 onGetWifiList 回调之后才能调用。
   * + 此时客户端会挂起，等待小程序设置 Wi-Fi 信息，请务必尽快调用该接口，若无数据请传入一个空数组。
   * + 有可能随着周边 Wi-Fi 列表的刷新，单个流程内收到多次带有存在重复的 Wi-Fi 列表的回调。
   * @version 1.6.0
   */
  function setWifiList(options: SetWifiListOptions): void;
  /**
   * 监听连接上 Wi-Fi 的事件。
   * @version 1.6.0
   */
  function onWifiConnected(callback?: (wifi: WiFi) => void): void;
  interface GetConnectedWifiOptions extends BaseOptions {
    success(wifi: WiFi): void;
  }
  /**
   * 获取已连接中的 Wi-Fi 信息
   * @version 1.6.0
   */
  function getConnectedWifi(options?: GetConnectedWifiOptions): void;
  // #endregion
  // #region 界面API列表
  interface ToastOptions extends BaseOptions {
    /**
     * 提示的内容
     */
    title: string;
    /**
     * 图标，只支持"success"、"loading"
     */
    icon?: 'success' | 'loading';
    /**
     * 自定义图标的本地路径，image 的优先级高于 icon
     */
    image?: string;
    /**
     * 提示的延迟时间，单位毫秒，默认：1500
     */
    duration?: number;
    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean;
  }
  /**
   * 显示消息提示框
   */
  function showToast(options: ToastOptions): void;
  function hideToast(): void;
  interface LoadingOptions extends BaseOptions {
    /**
     * 提示的内容
     */
    title: string;
    /**
     * 是否显示透明蒙层，防止触摸穿透，默认：false
     */
    mask?: boolean;
  }
  /**
   * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
   */
  function showLoading(options: LoadingOptions): void;
  /**
   * 隐藏消息提示框
   */
  function hideLoading(): void;
  interface ModalOptions extends BaseOptions {
    /**
     * 提示的标题
     */
    title: string;
    /**
     * 提示的内容
     */
    content: string;
    /**
     * 是否显示取消按钮，默认为 true
     */
    showCancel?: boolean;
    /**
     * 取消按钮的文字，默认为"取消"，最多 4 个字符
     */
    cancelText?: string;
    /**
     * 取消按钮的文字颜色，默认为"#000000"
     */
    cancelColor?: string;
    /**
     * 确定按钮的文字，默认为"确定"，最多 4 个字符
     */
    confirmText?: string;
    /**
     * 确定按钮的文字颜色，默认为"#3CC51F"
     */
    confirmColor?: string;
    success?(res: {
      /**
       * 为 true 时，表示用户点击了确定按钮
       */
      confirm: boolean;
      /**
       * 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）
       */
      cancel: boolean;
    }): void;
  }
  /**
   * 显示模态弹窗
   */
  function showModal(options: ModalOptions): void;
  interface ActionSheetOptions extends BaseOptions {
    /**
     * 按钮的文字数组，数组长度最大为6个
     */
    itemList: string[];
    /**
     * 按钮的文字颜色，默认为"#000000"
     */
    itemColor?: string;
    /**
     * 接口调用成功的回调函数
     */
    success?(res: {
      /**
       * 用户点击的按钮，从上到下的顺序，从0开始
       */
      tapIndex: number;
    }): void;
  }
  /**
   * 显示操作菜单
   */
  function showActionSheet(options: ActionSheetOptions): void;
  // 界面-----设置置顶信息
  interface SetTopBarTextOptions extends BaseOptions {
    /**
     * 置顶栏文字内容
     */
    text: string;
  }
  /**
   * 动态设置置顶栏文字内容
   * 只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效
   * 只有在用户将这个小程序置顶后才换上设置的文字内容。
   * 注意：调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调
   * fail，errMsg："setTopBarText: fail invoke too frequently"
   * @version 1.4.3
   */
  function setTopBarText(options?: SetTopBarTextOptions): void;
  // 界面-----设置导航条
  interface SetNavigationBarTitleOptions extends BaseOptions {
    /** 页面标题 */
    title: string;
  }
  /**
   * 动态设置当前页面的标题。
   * @version 1.4.3
   */
  function setNavigationBarTitle(options: SetNavigationBarTitleOptions): void;
  /**
   * 在当前页面显示导航条加载动画。
   * @version 1.4.3
   */
  function showNavigationBarLoading(): void;
  /**
   * 隐藏导航条加载动画。
   * @version 1.4.3
   */
  function hideNavigationBarLoading(): void;
  interface SetTabBarBadgeOptions extends BaseOptions {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
    /**
     * 显示的文本，超过 3 个字符则显示成“…”
     */
    text: string;
  }
  // 界面-----设置tabBar
  /**
   * 为 tabBar 某一项的右上角添加文本
   * @version 1.9.0
   */
  function setTabBarBadge(options: SetTabBarBadgeOptions): void;
  interface TabBarBadgeOptions extends BaseOptions {
    /**
     * tabBar的哪一项，从左边算起
     */
    index: number;
  }
  /**
   * 移除 tabBar 某一项右上角的文本
   * @version 1.9.0
   */
  function removeTabBarBadge(options: TabBarBadgeOptions): void;
  /**
   * 显示 tabBar 某一项的右上角的红点
   * @version 1.9.0
   */
  function showTabBarRedDot(option: TabBarBadgeOptions): void;
  /**
   * 隐藏 tabBar 某一项的右上角的红点
   * @version 1.9.0
   */
  function hideTabBarRedDot(option: TabBarBadgeOptions): void;
  interface SetTabBarStyleOptions extends BaseOptions {
    /** tab 上的文字默认颜色 */
    color: string;
    /** tab 上的文字选中时的颜色 */
    selectedColor: string;
    /** tab 的背景色 */
    backgroundColor: string;
    /** tabbar上边框的颜色， 仅支持 black/white */
    borderStyle: string;
  }
  /**
   * 动态设置 tabBar 的整体样式
   * @version 1.9.0
   */
  function setTabBarStyle(options: SetTabBarStyleOptions): void;
  interface SetTabBarItemOptions extends BaseOptions {
    /** tabBar 的哪一项，从左边算起 */
    index: number;
    /** tab 上按钮文字 */
    text?: string;
    /**
     * 图片路径, icon 大小限制为40kb
     * 建议尺寸为 81px * 81px
     * 当 postion 为 top 时，此参数无效，不支持网络图片
     */
    iconPath?: string;
    /**
     * 选中时的图片路径
     * icon 大小限制为40kb，建议尺寸为 81px * 81px
     * 当 postion 为 top
     */
    selectedIconPath?: string;
  }
  /**
   * 动态设置 tabBar 某一项的内容
   * @version 1.9.0
   */
  function setTabBarItem(options: SetTabBarItemOptions): void;
  interface ShowTabBarOptions extends BaseOptions {
    /** 是否需要动画效果，默认无 */
    aniamtion?: boolean;
  }
  /**
   * 显示 tabBar
   * @version 1.9.0
   */
  function showTabBar(options: ShowTabBarOptions): void;
  /**
   * 隐藏 tabBar
   * @version 1.9.0
   */
  function hideTabBar(options: ShowTabBarOptions): void;
  // 界面-----导航
  interface NavigateToOptions extends BaseOptions {
    /** 需要跳转的应用内页面的路径 */
    url: string;
  }
  /**
   * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
   *
   * 注意：为了不让用户在使用小程序时造成困扰，
   * 我们规定页面路径只能是五层，请尽量避免多层级的交互方式。
   */
  function navigateTo(options: NavigateToOptions): void;
  interface SwitchTabOptions extends BaseOptions {
    /**
     * 需要跳转的 tabBar 页面的路径
     * （需在 app.json 的 tabBar 字段定义的页面），路径后不能带参数
     */
    url: string;
  }
  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   */
  function switchTab(options: SwitchTabOptions): void;
  interface RedirectToOptions extends BaseOptions {
    /** 需要跳转的应用内页面的路径 */
    url: string;
  }
  /**
   * 关闭当前页面，跳转到应用内的某个页面。
   */
  function redirectTo(options: RedirectToOptions): void;
  interface NavigateBackOptions {
    /** 返回的页面数，如果 delta 大于现有页面数，则返回到首页。 */
    delta: number;
  }
  /**
   * 关闭当前页面，回退前一页面。
   */
  function navigateBack(options?: NavigateBackOptions): void;
  interface ReLaunchOptions extends BaseOptions {
    /**
     * 需要跳转的应用内页面路径 , 路径后可以带参数。
     * 参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔
     * 如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数
     */
    url: string;
  }
  /**
   * 关闭所有页面，打开到应用内的某个页面。
   * @version 1.1.0
   */
  function reLaunch(options?: ReLaunchOptions): void;
  // 界面-----动画
  type TimingFunction = 'linear' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'step-start' | 'step-end';
  interface CreateAnimationOptions {
    /** 动画持续时间，单位ms，默认值 400 */
    duration?: number;
    /** 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end" */
    timingFunction?: TimingFunction;
    /** 动画持续时间，单位 ms，默认值 0 */
    delay?: number;
    /** 设置transform-origin，默认为"50% 50% 0" */
    transformOrigin?: string;
  }
  interface Animator {
    actions: AnimationAction[];
  }
  interface AnimationAction {
    animates: Animate[];
    option: AnimationActionOption;
  }
  interface AnimationActionOption {
    transformOrigin: string;
    transition: AnimationTransition;
  }
  interface AnimationTransition {
    delay: number;
    duration: number;
    timingFunction: TimingFunction;
  }
  interface Animate {
    type: string;
    args: any[];
  }
  /**
   * 创建一个动画实例animation。调用实例的方法来描述动画。
   * 最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
   *
   * 注意: export 方法每次调用后会清掉之前的动画操作
   */
  function createAnimation(options?: CreateAnimationOptions): Animation;
  /** 动画实例可以调用以下方法来描述动画，调用结束后会返回自身，支持链式调用的写法。 */
  interface Animation {
    /**
     * 调用动画操作方法后要调用 step() 来表示一组动画完成，
     * 可以在一组动画中调用任意多个动画方法，
     * 一组动画中的所有动画会同时开始，
     * 一组动画完成后才会进行下一组动画。
     * @param options 指定当前组动画的配置
     */
    step(options?: CreateAnimationOptions): void;
    /**
     * 导出动画操作
     *
     * 注意: export 方法每次调用后会清掉之前的动画操作
     */
    export(): Animator;
    /** 透明度，参数范围 0~1 */
    opacity(value: number): Animation;
    /** 颜色值 */
    backgroundColor(color: string): Animation;
    /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
    width(length: number): Animation;
    /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
    height(length: number): Animation;
    /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
    top(length: number): Animation;
    /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
    left(length: number): Animation;
    /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
    bottom(length: number): Animation;
    /** 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值 */
    right(length: number): Animation;
    /** deg的范围-180~180，从原点顺时针旋转一个deg角度 */
    rotate(deg: number): Animation;
    /** deg的范围-180~180，在X轴旋转一个deg角度 */
    rotateX(deg: number): Animation;
    /** deg的范围-180~180，在Y轴旋转一个deg角度 */
    rotateY(deg: number): Animation;
    /** deg的范围-180~180，在Z轴旋转一个deg角度 */
    rotateZ(deg: number): Animation;
    /** 同transform-function rotate3d */
    rotate3d(x: number, y: number, z: number, deg: number): Animation;
    /**
     * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；
     * 两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
     */
    scale(sx: number, sy?: number): Animation;
    /** 在X轴缩放sx倍数 */
    scaleX(sx: number): Animation;
    /** 在Y轴缩放sy倍数 */
    scaleY(sy: number): Animation;
    /** 在Z轴缩放sy倍数 */
    scaleZ(sz: number): Animation;
    /** 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数 */
    scale3d(sx: number, sy: number, sz: number): Animation;
    /**
     * 一个参数时，表示在X轴偏移tx，单位px；
     * 两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
     */
    translate(tx: number, ty?: number): Animation;
    /**
     * 在X轴偏移tx，单位px
     */
    translateX(tx: number): Animation;
    /**
     * 在Y轴偏移tx，单位px
     */
    translateY(ty: number): Animation;
    /**
     * 在Z轴偏移tx，单位px
     */
    translateZ(tz: number): Animation;
    /**
     * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
     */
    translate3d(tx: number, ty: number, tz: number): Animation;
    /**
     * 参数范围-180~180；
     * 一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；
     * 两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
     */
    skew(ax: number, ay?: number): Animation;
    /** 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度 */
    skewX(ax: number): Animation;
    /** 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度 */
    skewY(ay: number): Animation;
    /**
     * 同transform-function matrix
     */
    matrix(a: number, b: number, c: number, d: number, tx: number, ty: number): Animation;
    /** 同transform-function matrix3d */
    matrix3d(
      a1: number, b1: number, c1: number, d1: number, a2: number,
      b2: number, c2: number, d2: number, a3: number, b3: number,
      c3: number, d3: number, a4: number, b4: number, c4: number,
      d4: number
    ): Animation;
  }
  // #region 位置API
  interface PageScrollToOptions {
    /** 滚动到页面的目标位置（单位px */
    scrollTop: number;
    /** 滚动动画的时长，默认300ms，单位 ms */
    duration?: number;
  }
  function pageScrollTo(options: PageScrollToOptions): void;
  /**
   * 返回一个SelectorQuery对象实例。
   * 可以在这个实例上使用select等方法选择节点，并使用boundingClientRect等方法选择需要查询的信息。
   * @version 1.4.0
   */
  function createSelectorQuery(): SelectorQuery;
  interface NodesRefRect {
    /** 节点的ID */
    id: string;
    /** 节点的dataset */
    dataset: any;
    /** 节点的左边界坐标 */
    left: number;
    /** 节点的右边界坐标 */
    right: number;
    /** 节点的上边界坐标 */
    top: number;
    /** 节点的下边界坐标 */
    bottom: number;
    /** 节点的宽度 */
    width: number;
    /** 节点的高度 */
    height: number;
  }
  interface NodeRefOffset {
    /** 节点的ID */
    id: string;
    /** 节点的dataset */
    dataset: any;
    /** 节点的水平滚动位置 */
    scrollLeft: number;
    /** 节点的竖直滚动位置 */
    scrollTop: number;
  }
  interface NodeRefFieldsOptions {
    /** 是否返回节点id */
    id?: true;
    /** 是否返回节点dataset */
    dataset?: true;
    /** 是否返回节点布局位置（left right top bottom */
    rect?: true;
    /** 是否返回节点尺寸（width height） */
    size?: true;
    /** 是否返回节点的 scrollLeft scrollTop ，节点必须是scroll-view或者viewport */
    scrollOffset?: true;
    /**
     * 指定属性名列表
     * 返回节点对应属性名的当前属性值（只能获得组件文档中标注的常规属性值， id class style 和事件绑定的属性值不可获取
     */
    properties?: string[];
  }
  interface NodeRefFieldsValue {
    id: {
      id: boolean;
    };
    dataset: {
      dataset: string;
    };
    rect: {
      left: number;
      right: number;
      top: number;
      bottom: number;
    };
    size: {
      width: number;
      height: number;
    };
    scrollOffset: {
      scrollLeft: number;
      scrollTop: number;
    };
    properties: {
      properties: any;
    };
  }
  interface NodesRef {
    /**
     * 添加节点的布局位置的查询请求，相对于显示区域，以像素为单位。
     * 其功能类似于DOM的getBoundingClientRect。
     * 返回值是nodesRef对应的selectorQuery。
     * 返回的节点信息中，每个节点的位置用
     * left、right、top、bottom、width、height字段描述。
     * 如果提供了callback回调函数，在执行selectQuery的exec方法后
     * 节点信息会在callback中返回。
     */
    boundingClientRect<T extends NodesRefRect | NodesRefRect[]>(callback?: (rect: T) => void): SelectorQuery;
    /**
     * 添加节点的滚动位置查询请求，以像素为单位。
     * 节点必须是scroll-view或者viewport。
     * 返回值是nodesRef对应的selectorQuery。
     * 返回的节点信息中，每个节点的滚动位置用scrollLeft、scrollHeight字段描述。
     * 如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回。
     */
    scrollOffset(callback?: (rect: NodeRefOffset) => void): SelectorQuery;
    /**
     * 获取节点的相关信息，需要获取的字段在fields中指定。
     * 返回值是nodesRef对应的selectorQuery。
     */
    fields(fields: NodeRefFieldsOptions, callback?: (result: any) => void): SelectorQuery;
  }
  /**
   * SelectorQuery对象实例
   */
  interface SelectorQuery {
    /**
     * 将选择器的选取范围更改为自定义组件component内
     * （初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点
     * @version 1.6.0
     */
    in(component: Component<object>): SelectorQuery;
    /**
     * 在当前页面下选择第一个匹配选择器selector的节点，返回一个NodesRef对象实例，可以用于获取节点信息。
     * selector类似于CSS的选择器，但仅支持下列语法。
     * + ID选择器：#the-id
     * + class选择器（可以连续指定多个）：.a-class.another-class
     * + 子元素选择器：.the-parent > .the-child
     * + 后代选择器：.the-ancestor .the-descendant
     * + 跨自定义组件的后代选择器：.the-ancestor >>> .the-descendant
     * + 多选择器的并集：#a-node, .some-other-nodes
     */
    select(selector: string): NodesRef;
    /**
     * 在当前页面下选择匹配选择器selector的节点，返回一个NodesRef对象实例。
     * 与selectorQuery.selectNode(selector)不同的是，它选择所有匹配选择器的节点。
     */
    selectAll(selector: string): NodesRef;
    /**
     * 选择显示区域，可用于获取显示区域的尺寸、滚动位置等信息
     * 返回一个NodesRef对象实例。
     */
    selectViewport(): NodesRef;
    /**
     * 执行所有的请求
     * 请求结果按请求次序构成数组，在callback的第一个参数中返回。
     */
    exec(callback?: (result: any[]) => void): void;
  }
  // #endregion
  // 界面-----绘图
  interface CanvasAction {
    method: string;
    data: CanvasAction[] | Array<number | string>;
  }
  type LineCapType = 'butt' | 'round' | 'square';
  type LineJoinType = 'bevel' | 'round' | 'miter';
  /**
   * context只是一个记录方法调用的容器，用于生成记录绘制行为的actions数组。context跟<canvas/>不存在对应关系，一个context生成画布的绘制动作数组可以应用于多个<canvas/>。
   */
  interface CanvasContext {
    /** 获取当前context上存储的绘图动作(不推荐使用) */
    getActions(): CanvasAction[];
    /** 清空当前的存储绘图动作(不推荐使用) */
    clearActions(): void;
    /**
     * 对横纵坐标进行缩放
     * 在调用scale方法后，之后创建的路径其横纵坐标会被缩放。
     * 多次调用scale，倍数会相乘。
     *
     * @param scaleWidth 横坐标缩放的倍数
     * @param scaleHeight 纵坐标轴缩放的倍数
     */
    scale(scaleWidth: number, scaleHeight?: number): void;
    /**
     * 对坐标轴进行顺时针旋转
     * 以原点为中心，原点可以用 translate方法修改。
     * 顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加。
     *
     * @param rotate 旋转角度，以弧度计。
     */
    rotate(rotate: number): void;
    /**
     * 对坐标原点进行缩放
     * 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
     *
     * @param x 水平坐标平移量
     * @param y 竖直坐标平移量
     */
    translate(x: number, y: number): void;
    /**
     * 保存当前的绘图上下文。
     */
    save(): void;
    /**
     * 恢复之前保存的绘图上下文。
     */
    restore(): void;
    /**
     * 在给定的矩形区域内，清除画布上的像素
     * 清除画布上在该矩形区域内的内容。
     *
     * @param x 矩形区域左上角的x坐标
     * @param y 矩形区域左上角的y坐标
     * @param width 矩形区域的宽度
     * @param height 矩形区域的高度
     */
    clearRect(x: number, y: number, width: number, height: number): void;
    /**
     * 在画布上绘制被填充的文本
     *
     * @param text 在画布上输出的文本
     * @param x 绘制文本的左上角x坐标位置
     * @param y 绘制文本的左上角y坐标位置
     */
    fillText(text: string, x: number, y: number): void;
    /**
     * 用于设置文字的对齐
     */
    setTextAlign(align: 'left' | 'center' | 'right'): void;
    /**
     * 绘制图像，图像保持原始尺寸。
     *
     * @param imageResource 所要绘制的图片资源。 通过chooseImage得到一个文件路径或者一个项目目录内的图片
     * @param x 图像左上角的x坐标
     * @param y 图像左上角的y坐标
     * @param width 图像宽度
     * @param height 图像高度
     *
     */
    drawImage(imageResource: string, x: number, y: number, width: number, height: number): void;
    /**
     * 设置全局画笔透明度。
     *
     * @param alpha 0~1  透明度，0 表示完全透明，1 表示完全不透明
     *
     */
    setGlobalAlpha(alpha: number): void;
    /**
     * 对当前路径进行填充
     */
    fill(): void;
    /**
     * 对当前路径进行描边
     */
    stroke(): void;
    /**
     * 开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或描边。
     * Tip: 在最开始的时候相当于调用了一次 beginPath()。
     * Tip: 同一个路径内的多次setFillStyle、setStrokeStyle、setLineWidth等设置，
     * 以最后一次设置为准。
     */
    beginPath(): void;
    /**
     * 关闭一个路径
     * Tip: 关闭路径会连接起点和终点。
     * Tip: 如果关闭路径后没有调用 fill() 或者 stroke() 并开启了新的路径，那之前的路径将不会被渲染。
     */
    closePath(): void;
    /**
     * 把路径移动到画布中的指定点，但不创建线条。
     *
     * @param x 目标位置的x坐标
     * @param y 目标位置的y坐标
     */
    moveTo(x: number, y: number): void;
    /**
     * 在当前位置添加一个新点，然后在画布中创建从该点到最后指定点的路径。
     *
     * @param x 目标位置的x坐标
     * @param y 目标位置的y坐标
     */
    lineTo(x: number, y: number): void;
    /**
     * 添加一个矩形路径到当前路径。
     *
     * @param x 矩形路径左上角的x坐标
     * @param y 矩形路径左上角的y坐标
     * @param width 矩形路径的宽度
     * @param height 矩形路径的高度
     */
    rect(x: number, y: number, width: number, height: number): void;
    /**
     * 填充一个矩形。
     * Tip: 用 setFillStyle() 设置矩形的填充色，如果没设置默认是黑色。
     * @param x 矩形路径左上角的x坐标
     * @param y 矩形路径左上角的y坐标
     * @param width 矩形路径的宽度
     * @param height 矩形路径的高度
     *
     */
    fillRect(x: number, y: number, width: number, height: number): void;
    /**
     * 画一个矩形(非填充)。
     * Tip: 用 setFillStroke() 设置矩形线条的颜色，如果没设置默认是黑色。
     * @param x 矩形路径左上角的x坐标
     * @param y 矩形路径左上角的y坐标
     * @param width 矩形路径的宽度
     * @param height 矩形路径的高度
     *
     */
    strokeRect(x: number, y: number, width: number, height: number): void;
    /**
     * 添加一个弧形路径到当前路径，顺时针绘制。
     *
     * @param x 圆的x坐标
     * @param y 圆的y坐标
     * @param radius 圆的半径
     * @param startAngle 起始弧度，单位弧度（在3点钟方向）
     * @param endAngle 终止弧度
     * @param counterclockwise 指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针。
     */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    /**
     * 创建二次方贝塞尔曲线
     *
     * @param cpx 贝塞尔控制点的x坐标
     * @param cpy 贝塞尔控制点的y坐标
     * @param x 结束点的x坐标
     * @param y 结束点的y坐标
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * 创建三次方贝塞尔曲线
     *
     * @param cp1x 第一个贝塞尔控制点的 x 坐标
     * @param cp1y 第一个贝塞尔控制点的 y 坐标
     * @param cp2x 第二个贝塞尔控制点的 x 坐标
     * @param cp2y 第二个贝塞尔控制点的 y 坐标
     * @param x 结束点的x坐标
     * @param y 结束点的y坐标
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * 设置填充样式
     *
     * @param color 设置为填充样式的颜色。'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
     */
    setFillStyle(color: string): void;
    /**
     * 设置线条样式
     *
     * @param color 设置为填充样式的颜色。'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
     */
    setStrokeStyle(color: string): void;
    /**
     * 设置阴影
     *
     * @param offsetX 阴影相对于形状在水平方向的偏移
     * @param offsetY 阴影相对于形状在竖直方向的偏移
     * @param blur 阴影的模糊级别，数值越大越模糊 0~100
     * @param color 阴影的颜色。 'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
     */
    setShadow(offsetX: number, offsetY: number, blur: number, color: string): void;
    /**
     * 创建一个线性的渐变颜色。
     * Tip: 需要使用 addColorStop() 来指定渐变点，至少要两个。
     * @param x0 起点的x坐标
     * @param y0 起点的y坐标
     * @param x1 终点的x坐标
     * @param y1 终点的y坐标
     *
     */
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): void;
    /**
     * 创建一个颜色的渐变点。
     * Tip: 小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。
     * Tip: 需要使用 addColorStop() 来指定渐变点，至少要两个。
     * @param stop (0-1)  表示渐变点在起点和终点中的位置
     * @param color 渐变点的颜色
     *
     */
    addColorStop(stop: number, color: string): void;
    /**
     * 创建一个圆形的渐变颜色。
     *
     * @param x 圆心的x坐标
     * @param y 圆心的y坐标
     * @param r 圆的半径
     *
     */
    createCircularGradient(x: number, y: number, r: number): void;
    /**
     * 设置字体大小
     *
     * @param fontSize 字体的字号
     */
    setFontSize(fontSize: number): void;
    /**
     * 设置线条端点的样式
     *
     * @param lineCap 线条的结束端点样式。 'butt'、'round'、'square'
     */
    setLineCap(lineCap: LineCapType): void;
    /**
     * 设置两线相交处的样式
     *  @param lineJoin 两条线相交时，所创建的拐角类型
     */
    setLineJoin(lineJoin: LineJoinType): void;
    /**
     * 设置线条宽度
     *
     * @param lineWidth 线条的宽度
     */
    setLineWidth(lineWidth: number): void;
    /**
     * 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。
     * 当 setLineJoin为 miter 时才有效。
     * 超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示
     *
     * @param miterLimit 最大斜接长度
     */
    setMiterLimit(miterLimit: number): void;
    /**
     * 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
     * Tip: 绘图上下文需要由 wx.createCanvasContext(canvasId) 来创建。
     * @param [reserve] 非必填。本次绘制是否接着上一次绘制，即reserve参数为false，则在本次调用drawCanvas绘制之前native层应先清空画布再继续绘制；若reserver参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
     *
     */
    draw(reserve?: boolean): void;
  }
  /**
   * 创建并返回绘图上下文context对象。
   * context只是一个记录方法调用的容器，
   * 用于生成记录绘制行为的actions数组。c
   * ontext跟<canvas/>不存在对应关系，
   * 一个context生成画布的绘制动作数组可以应用于多个<canvas/>。
   */
  function createContext(): CanvasContext;
  interface DrawCanvasOptions {
    /** 画布标识，传入 <canvas/> 的 cavas-id */
    canvasId: number | string;
    /**
     * 绘图动作数组，由 wx.createContext 创建的 context，
     * 调用 getActions 方法导出绘图动作数组。
     */
    actions: CanvasAction[];
  }
  /**
   * 绘制画布
   */
  function drawCanvas(options: DrawCanvasOptions): void;
  interface CanvasToTempFilePathOptions extends BaseOptions {
    /**
     * 画布标识，传入 <canvas/> 的 cavas-id
     */
    canvasId: string;
  }
  /**
   * 把当前画布的内容导出生成图片，并返回文件路径
   */
  function canvasToTempFilePath(options: CanvasToTempFilePathOptions): void;
  interface CanvasImageDataOptions extends BaseOptions {
    /** 画布标识，传入 <canvas /> 的 canvas-id  */
    canvasId: string;
    /** 将要被提取的图像数据矩形区域的左上角 x 坐标 */
    x: number;
    /** 将要被提取的图像数据矩形区域的左上角 y 坐标 */
    y: number;
    /** 将要被提取的图像数据矩形区域的宽度 */
    width: number;
    /** 将要被提取的图像数据矩形区域的高度 */
    height: number;
  }
  /**
   * 返回一个数组，用来描述 canvas 区域隐含的像素数据
   * @version 1.9.0
   */
  function canvasGetImageData(options: CanvasImageDataOptions): void;
  /**
   * 将像素数据绘制到画布的方法
   * @version 1.9.0
   */
  function canvasPutImageData(options: CanvasImageDataOptions): void;
  // 页面-----下拉刷新
  /**
   * 开始下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致
   * @version 1.5.0
   */
  function startPullDownRefresh(options?: BaseOptions): void;
  /**
   * 停止当前页面下拉刷新
   * @version 1.5.0
   */
  function stopPullDownRefresh(options?: BaseOptions): void;
  // #endregion
  // #region 第三方平台
  interface ExtConfig {
    /** 第三方平台自定义的数据 */
    extConfig: any;
  }
  interface GetExtConfigOptions extends BaseOptions {
    success(res: {
      /* 调用结果 */
      errMsg: string;
    } & ExtConfig): void;
  }
  /**
   * 获取第三方平台自定义的数据字段。
   * @version 1.1.0
   */
  function getExtConfig(options?: GetExtConfigOptions): void;
  /**
   * 获取第三方平台自定义的数据字段的同步接口。
   * @version 1.1.0
   */
  function getExtConfigSync(): ExtConfig;
  // #endregion
  // #region 开放接口
  // 开放接口-----签名加密
  // [签名加密](https://mp.weixin.qq.com/debug/wxadoc/dev/api/signature.html)
  /**
   * 登录态维护
   * 通过 wx.login() 获取到用户登录态之后，需要维护登录态。
   * 开发者要注意不应该直接把 session_key、openid 等字段作为用户的标识
   * 或者 session 的标识，而应该自己派发一个 session 登录态（请参考登录时序图）。
   * 对于开发者自己生成的 session，应该保证其安全性且不应该设置较长的过期时间。
   * session 派发到小程序客户端之后，可将其存储在 storage ，用于后续通信使用。
   * 通过wx.checkSession() 检测用户登录态是否失效。并决定是否调用wx.login()
   * 重新获取登录态
   */
  interface LoginResponse {
    /** 调用结果 */
    errMsg: string;
    /**
     * 用户允许登录后，回调内容会带上 code（有效期五分钟），
     * 开发者需要将 code 发送到开发者服务器后台，
     * 使用code 换取 session_key api，
     * 将 code 换成 openid 和 session_key
     */
    code: string;
  }
  interface LoginOptions extends BaseOptions {
    /** 接口调用成功的回调函数 */
    success?(res: LoginResponse): void;
  }
  /**
   * 调用接口获取登录凭证（code）进而换取用户登录态信息，
   * 包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。
   * 用户数据的加解密通讯需要依赖会话密钥完成。
   */
  function login(option: LoginOptions): void;
  type CheckSessionOption = BaseOptions;
  /**
   * 检测当前用户登录态是否有效。
   * 通过wx.login获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用wx.checkSession接口检测当前用户登录态是否有效。登录态过期后开发者可以再调用wx.login获取新的用户登录态。
   *
   */
  function checkSession(options: CheckSessionOption): void;
  /**
   * 提前向用户发起授权请求。
   * 调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，
   * 但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
   */
  function authorize(options: AuthSetting): void;
  // 开放接口-----用户信息
  interface UserInfo {
    nickName: string;
    avatarUrl: string;
    gender: number;
    province: string;
    city: string;
    country: string;
  }
  interface UserInfoResponse {
    /** 用户信息对象，不包含 openid 等敏感信息 */
    userInfo: UserInfo;
    /** 不包括敏感信息的原始数据字符串，用于计算签名。 */
    rawData: string;
    /** 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息。 */
    signature: string;
    /** 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法 */
    encryptData: string;
  }
  interface GetUserInfoOptions extends BaseOptions {
    /** 接口调用成功的回调函数 */
    success?(res: UserInfoResponse): void;
  }
  /**
   * 获取用户信息，需要先调用 wx.login 接口。
   */
  function getUserInfo(options: GetUserInfoOptions): void;
  // 开放接口-----微信支付
  type PaymentSignType = 'MD5';
  interface RequestPaymentOptions extends BaseOptions {
    /** 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间 */
    timeStamp: string | number;
    /** 随机字符串，长度为32个字符以下。 */
    nonceStr: string;
    /** 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=* */
    package: string;
    /** 签名算法，暂支持 MD5 */
    signType: PaymentSignType;
    /** 签名,具体签名方案参见微信公众号支付帮助文档; */
    paySign: string;
  }
  /**
   * 发起微信支付。
   */
  function requestPayment(options: RequestPaymentOptions): void;
  // 开放接口-----分享
  interface ShareAppMessage extends BaseOptions {
    /**
     * 分享标题  默认为当前小程序名称
     *
     */
    title?: string;
    /**
     * 分享描述, 默认为当前小程序名称
     */
    desc?: string;
    /**
     * 自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG
     * 不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
     * @version 1.5.0
     */
    imageUrl?: string;
    /**
     * 分享路径  当默认为前页面 path ，
     * 必须是以 / 开头的完整路径
     *
     */
    path?: string;
    success?(res: {
      /** 每一项是一个 shareTicket ，对应一个转发对象 */
      shareTickets: string[];
    }): void;
  }
  type ShareMenuOptions = BaseOptions;
  /**
   * 显示分享按钮
   * @version 1.1.0
   */
  function showShareMenu(options?: ShareMenuOptions): void;
  /**
   * 隐藏分享按钮
   * @version 1.1.0
   */
  function hideShareMenu(options?: ShareMenuOptions): void;
  interface UpdateShareMenuOptions extends BaseOptions {
    /** 是否使用带 shareTicket 的转发详情 */
    withShareTicket?: boolean;
  }
  /**
   * 更新转发属性
   * @version 1.2.0
   */
  function updateShareMenu(options?: UpdateShareMenuOptions): void;
  interface GetShareInfoOptions extends BaseOptions {
    /** shareTicket */
    shareTicket: string;
    success(res: {
      /** 错误信息 */
      errMsg: string;
      /** 包括敏感数据在内的完整转发信息的加密数据，详细见[加密数据解密算法](https://mp.weixin.qq.com/debug/wxadoc/dev/api/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) */
      encryptedData: string;
      /** 加密算法的初始向量，详细见[加密数据解密算法](https://mp.weixin.qq.com/debug/wxadoc/dev/api/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95) */
      iv: string;
    }): void;
  }
  /**
   * 获取转发详细信息
   * @version 1.1.0
   */
  function getShareInfo(options?: GetShareInfoOptions): void;
  // 开放接口-----收货地址
  interface ChooseAddressOptions extends BaseOptions {
    success?(res: {
      /**
       * 调用结果
       *
       */
      errMsg: string;
      /**
       * 收货人姓名
       *
       */
      userName: string;
      /**
       * 邮编
       *
       */
      postalCode: string;
      /**
       * 国标收货地址第一级地址
       *
       */
      provinceName: string;
      /**
       * 国标收货地址第二级地址
       *
       */
      cityName: string;
      /**
       * 国标收货地址第三级地址
       *
       */
      countyName: string;
      /**
       * 详细收货地址信息
       *
       */
      detailInfo: string;
      /**
       * 收货地址国家码
       *
       */
      nationalCode: string;
      /**
       * 收货人手机号码
       *
       */
      telNumber: string;
    }): void;
  }
  function chooseAddress(options: ChooseAddressOptions): void;
  // 开放接口-----卡券
  interface Card {
    cardId: string;
    cardExt: string;
    code: string;
  }
  interface CardOptions extends BaseOptions {
    cardList: Card[];
  }
  /**
   * 批量添加卡券。
   *
   */
  function addCard(options: ChooseAddressOptions): void;
  interface OpenCardOptions extends BaseOptions {
    cardList: Card[];
  }
  /**
   * 查看微信卡包中的卡券。
   *
   */
  function openCard(options: OpenCardOptions): void;
  // 开放接口-----设置
  interface AuthSetting {
    'scope.userInfo': boolean;
    'scope.userLocation': boolean;
    'scope.address': boolean;
    'scope.record': boolean;
  }
  interface OpenSettingOptions extends BaseOptions {
    success?(res: {
      authSetting: AuthSetting
    }): void;
  }
  /**
   * 调起客户端小程序设置界面，返回用户设置的操作结果。
   * 注：设置界面只会出现小程序已经向用户请求过的权限。
   * @version 1.1.0
   */
  function openSetting(options: OpenSettingOptions): void;
  /**
   * 获取用户的当前设置。
   * 注：返回值中只会出现小程序已经向用户请求过的权限。
   * @version 1.2.0
   */
  function getSetting(options: OpenSettingOptions): void;
  // #endregion
  // #region 微信运动
  interface StepInfo {
    /** 时间戳，表示数据对应的时间 */
    timestamp: number;
    /** 微信运动步数 */
    step: number;
  }
  /** 用户过去三十天的微信运动步数 */
  interface StepInfoList {
    stepInfoList: StepInfo[];
  }
  interface WeRunDataOptions extends BaseOptions {
    success(res: {
      /** 调用结果 */
      errMsg: string;
      /** 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法 */
      encryptedData: string | StepInfoList;
      /** 加密算法的初始向量，详细见加密数据解密算法 */
      iv: string;
    }): void;
  }
  /**
   * 获取用户过去三十天微信运动步数
   * 需要先调用 wx.login 接口。
   * 需要用户授权 scope.werun
   */
  function getWeRunData(options?: WeRunDataOptions): void;
  // #endregion
  // #region 拓展接口
  /**
   * 将 ArrayBuffer 数据转成 Base64 字符串
   *
   */
  function arrayBufferToBase64(arrayBuffer: ArrayBuffer): string;
  /**
   * 将 Base64 字符串转成 ArrayBuffer 数据
   *
   */
  function base64ToArrayBuffer(base64: string): ArrayBuffer;
  /**
   * 收起键盘。
   */
  function hideKeyboard(): void;
  interface EventTarget {
    id: string;
    tagName: string;
    dataset: { [name: string]: string; };
  }
  interface BaseEvent {
    type: 'tap' | 'touchstart' | 'touchmove' | 'touchcancel' | 'touchend' | 'tap' | 'longtap';
    timeStamp: number;
    currentTarget: EventTarget;
    target: EventTarget;
  }
  interface InputEvent extends BaseEvent {
    detail: {
      target: EventTarget;
      value: string;
      /**
       * 指定focus时的光标位置
       * @version 1.5.0
       */
      cursor: number;
    };
  }
  interface FormEvent extends BaseEvent {
    detail: {
      target: EventTarget;
      value: { [name: string]: string | boolean | number; };
    };
  }
  interface Touch {
    identifier: number;
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
  }
  interface TouchEvent extends BaseEvent {
    detail: {
      x: number;
      y: number;
    };
    touches: Touch[];
    changedTouches: Touch[];
  }
}
// #endregion
// #region App里的onLaunch、onShow回调参数
interface LaunchOptions {
  /**
   * 打开小程序的路径
   */
  path: string;
  /**
   * 打开小程序的query
   */
  query: object;
  /**
   * 打开小程序的[场景值](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/scene.html)
   */
  scene: number;
  /**
   * shareTicket，详见 获取更多[转发信息](https://mp.weixin.qq.com/debug/wxadoc/dev/api/share.html#获取更多转发信息)
   */
  shareTicket: string;
  /**
   * 当场景为由从另一个小程序或公众号或App打开时，返回此字段
   */
  referrerInfo: object;
  /**
   * 来源小程序或公众号或App的 appId，详见下方说明
   */
  "referrerInfo.appId": string;
  /**
   * 来源小程序传过来的数据，scene=1037或1038时支持
   */
  "referrerInfo.extraData": object;
}
// #endregion
// #region App 函数及参数
/**
 * App 实现的接口对象
 * 开发者可以添加任意的函数或数据到 Object 参数中，用 this 可以访问
 */
interface AppOptions {
  /**
   * 监听小程序初始化。
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 生命周期函数
   */
  onLaunch?: (option: LaunchOptions) => void;
  /**
   * 监听小程序显示。
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 生命周期函数
   */
  onShow?: (option: LaunchOptions) => void;
  /**
   * 监听小程序隐藏。
   * 当小程序从前台进入后台，会触发 onHide
   * 生命周期函数
   */
  onHide?: () => void;
  /**
   * 错误监听函数
   * 当小程序发生脚本错误或者 api 调用失败时
   * 会触发 onError 并带上错误信息
   */
  onError?: (msg: string) => void;
  /**
   * 小程序退出时触发
   */
  onUnlaunch?: () => void;
  /**
   * 全局Data
   */
  globalData?: object;
}
interface App {
  /**
   * 获取当前页面
   */
  getCurrentPage(): Page;
}
/**
 * App() 函数用来注册一个小程序。
 * 接受一个 object 参数，其指定小程序的生命周期函数等。
 */
declare function App<T extends AppOptions>(app: T & ThisType<T & App>): void;
/**
 * 获取小程序实例
 */
declare function getApp(): App;
// #endregion
// #region Compontent组件
type DefaultData<V> = object | ((this: V) => object);
type DefaultProps = Record<string, any>;
type ExtendedComponent<Instance extends Component<Data>, Data, Methods, Options, Props> = CombinedInstance<Instance, Data, Methods, Options, Props> & Component<Data>;
type CombinedInstance<Instance extends Component<Data>, Data, Methods, Options, Props> = Data & Methods & Options & Props & Instance;
type Prop<T> = (() => T) | { new(...args: any[]): T & object };
type PropValidator<T> = PropOptions<T> | Prop<T> | Array<Prop<T>>;
interface DefaultMethods<V> {
  [key: string]: (this: V, ...args: any[]) => any;
}
interface PropOptions<T = any> {
  type?: Prop<T> | Array<Prop<T>>;
  value?: T | null | (() => object);
  observer?(value: T, old: T): void;
}
type RecordPropsDefinition<T> = {
  [K in keyof T]: PropValidator<T[K]>
};
type ArrayPropsDefinition<T> = Array<keyof T>;
type PropsDefinition<T> = ArrayPropsDefinition<T> | RecordPropsDefinition<T>;
type ThisTypedComponentOptionsWithRecordProps<V extends Component<Data>, Data, Methods, Options, Props> =
  object &
  ComponentOptions<V, Data | ((this: Readonly<Props> & V) => Data), Methods, Options, PropsDefinition<Props>> &
  ThisType<CombinedInstance<V, Data, Methods, Options, Readonly<Props>>>;

interface ComponentRelation {
  /** 目标组件的相对关系，可选的值为 parent 、 child 、 ancestor 、 descendant */
  type: string;
  /** 如果这一项被设置，则它表示关联的目标节点所应具有的behavior，所有拥有这一behavior的组件节点都会被关联 */
  target?: string;
  /** 关系生命周期函数，当关系被建立在页面节点树中时触发，触发时机在组件attached生命周期之后 */
  linked?: (...args: any[]) => void;
  /** 关系生命周期函数，当关系在页面节点树中发生改变时触发，触发时机在组件moved生命周期之后 */
  linkChanged?: (...args: any[]) => void;
  /** 关系生命周期函数，当关系脱离页面节点树时触发，触发时机在组件detached生命周期之后 */
  unlinked?: (...args: any[]) => void;
}
/**
 * Component组件参数
 */
interface ComponentOptions<
  Instance extends Component<Data>,
  Data = DefaultData<Instance>,
  Methods = DefaultMethods<Instance>,
  Options = object,
  Props = PropsDefinition<DefaultProps>> {
  /**
   * 组件的对外属性，是属性名到属性设置的映射表
   * 属性设置中可包含三个字段:
   * type 表示属性类型、 value 表示属性初始值、 observer 表示属性值被更改时的响应函数
   */
  properties?: Props;
  /**
   * 组件的内部数据，和 properties 一同用于组件的模版渲染
   */
  data?: Data;
  /**
   * 组件的方法，包括事件响应函数和任意的自定义方法
   * 关于事件响应函数的使用
   * 参见[组件事件](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/events.html)
   */
  methods?: Methods;
  /**
   * 一些组件选项，请参见文档其他部分的说明
   */
  options?: Options;
  /**
   * 类似于mixins和traits的组件间代码复用机制
   * 参见 [behaviors](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/behaviors.html)
   */
  behaviors?: Array<(ComponentOptions<Component<object>>)>;
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   * 注意此时不能调用 setData
   */
  created?(this: ThisType<ComponentOptions<Instance, Data, Methods, Options, Readonly<Props>>>): void;
  /**
   * 组件生命周期函数，在组件实例进入页面节点树时执行
   */
  attached?(): void;
  /**
   * 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
   * 使用 [SelectorQuery](https://mp.weixin.qq.com/debug/wxadoc/dev/api/wxml-nodes-info.html)
   */
  ready?(): void;
  /**
   * 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
   */
  moved?(): void;
  /**
   * 组件生命周期函数，在组件实例被从页面节点树移除时执行
   */
  detached?(): void;
  /**
   * 组件间关系定义，参见 [组件间关系](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/relations.html)
   */
  relations?: { [key: string]: ComponentRelation };
}
/**
 * Component实例方法
 */
interface Component<T> {
  /**
   * 组件的文件路径
   */
  is: string;
  /**
   * 节点id
   */
  id: string;
  /**
   * 节点dataset
   */
  dataset: string;
  /**
   * 组件数据，包括内部数据和属性值
   */
  data: T;
  /**
   * 设置data并执行视图层渲染
   */
  setData(data: object): void;
  /**
   * 检查组件是否具有 behavior
   * 检查时会递归检查被直接或间接引入的所有behavior
   */
  hasBehavior(behavior: any): void;
  /**
   * 触发事件，参见 [组件事件](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/events.html)
   */
  triggerEvent(name: string): void;
  /**
   * 创建一个 SelectorQuery 对象
   * 选择器选取范围为这个[组件实例](https://mp.weixin.qq.com/debug/wxadoc/dev/api/wxml-nodes-info.html)内
   */
  createSelectorQuery(query: string): void;
  /**
   * 使用选择器选择组件实例节点
   * 返回匹配到的第一个组件实例对象
   */
  selectComponent(selector: string): void;
  /**
   * selector  使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
   */
  selectAllComponents(selector: string): void;
  /**
   * 获取所有这个关系对应的所有关联节点，参见 [组件间关系](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/relations.html)
   */
  getRelationNodes(relationKey: string): void;
}
declare function Component<D, M, O, P>(options?: ThisTypedComponentOptionsWithRecordProps<Component<D>, D, M, O, P>): ExtendedComponent<Component<D>, D, M, O, P>;
/**
 * behaviors 是用于组件间代码共享的特性
 * 类似于一些编程语言中的“mixins”或“traits”
 * 每个 behavior 可以包含一组属性、数据、生命周期函数和方法
 * 组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用
 * 每个组件可以引用多个 behavior
 * behavior 也可以引用其他 behavior
 */
declare function Behavior<D, M, O, P>(options?: ThisTypedComponentOptionsWithRecordProps<Component<D>, D, M, O, P>): ExtendedComponent<Component<D>, D, M, O, P>;
// #endregion
// #region Page
interface PageShareAppMessageOptions {
  /** 转发事件来源。button：页面内转发按钮；menu：右上角转发菜单 */
  from: 'button' | 'menu';
  /** 如果 from 值是 button，则 target 是触发这次转发事件的 button，否则为 undefined */
  target: object | undefined;
}
/**
 * Page 实现的接口对象
 */
interface PageOptions {
  /**
   * 页面的初始数据
   */
  data?: any;
  /**
   * 生命周期函数--监听页面加载
   * @param options 接收页面参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query
   */
  onLoad?: (options: object) => void;
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady?: () => void;
  /**
   * 生命周期函数--监听页面显示
   */
  onShow?: () => void;
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide?: () => void;
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload?: () => void;
  /**
   * 下拉刷新
   * 在 Page 中定义 onPullDownRefresh 处理函数，监听该页面用户下拉刷新事件。
   * 需要在 config 的window选项中开启 enablePullDownRefresh。
   * 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
   */
  onPullDownRefresh?: () => void;
  /**
   * 页面上拉触底事件的处理函数
   * 监听用户上拉触底事件。
   * 可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance。
   * 在触发距离内滑动期间，本事件只会被触发一次。
   */
  onReachBottom?: () => void;
  /**
   * 在 Page 中定义 onShareAppMessage 函数，设置该页面的转发信息。
   * + 只有定义了此事件处理函数，右上角菜单才会显示 “转发” 按
   * + 用户点击转发按钮的时候会调
   * + 此事件需要 return 一个 Object，用于自定义转发内容
   */
  onShareAppMessage?: (options?: PageShareAppMessageOptions) => wx.ShareAppMessage;
  /**
   * 页面滚动触发事件的处理函数
   * 监听用户滑动页面事件。
   * 参数为 Object，包含以下字段：
   */
  onPageScroll?: (option: { scrollTop: number }) => void;
  /**
   * 当前是 tab 页时，点击 tab 时触发
   */
  onTabItemTap?: (item: any) => void;
}
interface Page {
  /**
   * 强制更新
   */
  forceUpdate(): void;
  /**
   * 字段可以获取到当前页面的路径。
   */
  route(): void;
  /**
   * 将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
   * 1. 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致。
   * 2. 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
   * 3. 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题
   * @param data object 以 key，value 的形式表示将 this.data 中的 key 对应的值改变成 value
   * @param [callback] callback 是一个回调函数，在这次setData对界面渲染完毕后调用
   */
  setData(data: { [key: string]: string | number | boolean | symbol | object | null | any[] }, callback?: () => any): void;
  /**
   * 更新
   */
  update(): void;
  /**
   * 将页面滚动到目标位置。
   *
   * scrollTop 滚动到页面的目标位置（单位px）
   * [duration] 滚动动画的时长，默认300ms，单位 ms
   * @version 1.4.0
   */
  pageScrollTo(option?: wx.PageScrollToOptions): void;
}
/**
 * Page() 函数用来注册一个页面。
 * 接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
 */
declare function Page<T extends PageOptions & object>(page: T & ThisType<T & Page>): void;
/**
 * getCurrentPages() 函数用于获取当前页面栈的实例，
 * 以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
 */
declare function getCurrentPages(): Page[];

// #endregion
