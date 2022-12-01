// Type definitions for trtc-js-sdk 4.9
// Project: https://github.com/tencentyun/TRTCSDK#readme
// Definitions by: yokots <https://github.com/yokots>
//                 Wang KaiLing <https://github.com/wkl007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace TRTC;

// utils types
export type Nullable<T> = T | null;
export type Callback<T = any> = (event: T) => void;
export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/** 提供日志设置方法，包括设置日志输出等级、打开或关闭日志上传。 */
export namespace Logger {
    const LogLevel: LogLevel;
    /** 日志输出等级 */
    interface LogLevel {
        /** 输出所有日志 */
        TRACE: 0;
        /** 输出 DEBUG、INFO、WARN、ERROR 等级日志 */
        DEBUG: 1;
        /** 输出 INFO、WARN、ERROR 等级日志 */
        INFO: 2;
        /** 输出 WARN、ERROR 等级日志 */
        WARN: 3;
        /** 输出 ERROR 等级日志 */
        ERROR: 4;
        /**
         * 不输出任何日志
         * **注意： 关闭日之后我们将无法帮助您定位线上问题，建议至少保留 WARN 日志等级！**
         */
        NONE: 5;
    }

    /**
     * 设置日志输出等级
     * @example
     * ```javascript
     * // 输出INFO以上日志等级
     * TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.INFO);
     * ```
     */
    function setLogLevel(level: 0 | 1 | 2 | 3 | 4 | 5): void;

    /** 打开日志上传 */
    function enableUploadLog(): void;

    /** 关闭日志上传 */
    function disableUploadLog(): void;
}

/** TRTC Web SDK 版本号 */
export const VERSION: string;

/** 检测浏览器是否兼容 TRTC Web SDK */
export function checkSystemRequirements(): Promise<CheckResult>;

/** 检测浏览器是否支持屏幕分享 */
export function isScreenShareSupported(): boolean;

/**
 * 返回媒体输入输出设备列表
 *
 * 出于安全的考虑，在用户未授权摄像头或麦克风访问权限前，label 及 deviceId 字段可能都是空的。因此建议在用户授权访问后 再调用该接口获取设备详情，比如在 initialize() 后再调用此接口获取设备详情。
 */
export function getDevices(): Promise<MediaDeviceInfo[]>;

/** 返回摄像头设备列表 */
export function getCameras(): Promise<MediaDeviceInfo[]>;

/** 返回麦克风设备列表 */
export function getMicrophones(): Promise<MediaDeviceInfo[]>;

/** 返回扬声器设备列表 */
export function getSpeakers(): Promise<MediaDeviceInfo[]>;

/**
 * 创建一个实时音视频通话的客户端对象，在每次会话中仅需要调用一次。
 *
 * 通常一个客户端对象跟一个用户 ID(userId) 绑定，同一个页面中可以有多个不同的客户端对象， 每个客户端对象跟不同的用户ID绑定，比如，你可以使用一个客户端对象负责推送本地音视频流和接收 远端流，同时使用另外一个客户端对象负责推送屏幕分享流，但是不接收远端流。
 */
export function createClient(config: ClientConfig): Client;

/**
 * 创建一个本地流 Stream 对象，本地流 Stream 对象通过 `publish()` 方法发布本地音视频流。
 *
 * **注意:** *一个音视频流 Stream 中最多只能包含一个音频 track 和一个视频*track。
 *
 * 本地音视频流可以:
 * - 从摄像头和麦克风采集获得，适用于一般的音视频通话。
 * - 从屏幕分享源采集获得，适用于进行屏幕分享。
 * - 从开发者通过 audioSource/videoSource 指定的 MediaStreamTrack 获得， 使用这种方式业务层可先对音视频进行前处理，比如，对音频进行混音，或者对视频进行美颜处理，亦或者通过这种方式向远端用户推送一个正在播放的音视频文件。
 *
 * @example
 * ```javascript
 * // 从麦克风和摄像头采集本地音视频流
 * const localStream = TRTC.createStream({ audio: true, video: true });
 * localStream.initialize().catch(error => {
 *   console.error('failed initialize localStream ' + error);
 * }).then(() => {
 *   console.log('initialize localStream success');
 *   // 本地流初始化成功，可通过Client.publish(localStream)发布本地音视频流
 * });
 * ```
 *
 * @example
 * ```javascript
 * // 从屏幕分享源采集,仅采集屏幕分享视频流
 * const localStream = TRTC.createStream({ audio: false, screen: true });
 *
 * // 采集麦克风及屏幕分享视频流
 * // const localStream = TRTC.createStream({ audio: true, screen: true });
 *
 * localStream.initialize().catch(error => {
 *   console.error('failed initialize localStream ' + error);
 * }).then(() => {
 *   console.log('initialize localStream success');
 *   // 本地流初始化成功，可通过Client.publish(localStream)发布本地音视频流
 * });
 * ```
 * @example
 * ```javascript
 * // 从外部App指定的音视频源创建本地音视频流
 * navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
 *  const audioTrack = stream.getAudioTracks()[0];
 *  const videoTrack = stream.getVideoTracks()[0];
 *
 *   // 对audioTrack和videoTrack处理之后，
 *
 *   const localStream = TRTC.createStream({ audioSource: audioTrack, videoSource: videoTrack });
 *   localStream.initialize().catch(error => {
 *     console.error('failed initialize localStream ' + error);
 *   }).then(() => {
 *     console.log('initialize localStream success');
 *     // 本地流初始化成功，可通过Client.publish(localStream)发布本地音视频流
 *   });
 * });
 * ```
 */
export function createStream(config: StreamConfig): LocalStream;

export interface RtcError extends Error {
    /** 获取错误码, 详细错误码列表参见 [ErrorCode](https://trtc-1252463788.file.myqcloud.com/web/docs/module-ErrorCode.html) */
    getCode(): string;
}

/** 音视频通话客户端对象 */
export interface Client {
    /**
     * 设置代理服务器。该方法适用于企业自己部署代理服务器，如 ngnix+coturn 方案。
     *
     * **注意** 该方法需要在 join() 之前调用。
     */
    setProxyServer(url: string): void;

    /**
     * 设置 TURN 服务器，该方法配合 setProxyServer() 使用，适用于企业自己部署代理服务器和 TURN 中转。
     *
     * **注意** 该方法需要在 join() 之前调用。
     */
    setTurnServer(config: TurnServerConfig): void;

    /**
     * 加入一个音视频通话房间。
     *
     * 进房代表开始一个音视频通话会话，这时候 SDK 会监听远端用户进房退房情况，若有远端用户进房并且发布流，本地会收到 'stream-added' 事件。
     *
     * 进房后用户可以通过 publish() 发布本地流，本地流发布成功后远端用户就会收到相应 'stream-added' 事件通知从而完成一个双向的音视频通话连接。
     */
    join(options: JoinOptions): Promise<void>;

    /** 退出当前音视频通话房间，结束一次音视频通话会话。 */
    leave(): Promise<void>;

    /**
     * 发布本地音视频流。
     * - 该方法需要在 join() 进房后调用，一次音视频会话中只能发布一个本地流。若想发布另外一个本地流，可先通过 unpublish() 取消发布当前本地流后再发布新的本地流。
     * - 在发布本地流后，可通过 removeTrack()、addTrack()、 replaceTrack() 来更新本地流中的某个音频或视频流。
     * - 发布本地流后远端会收到 ‘stream-added’ 事件通知。
     */
    publish(stream: LocalStream): Promise<void>;

    /** 取消发布本地流。 取消发布本地流后远端会收到 'stream-removed' 事件通知。 */
    unpublish(stream: LocalStream): Promise<void>;

    /**
     * 订阅远端流
     * @param stream 远端流，通过监听 'stream-added' 事件获得。
     *
     * @param options
     * @example
     * ```javascript
     * // 监听远端流订阅成功事件
     * client.on('stream-subscribed', event => {
     *  const remoteStream = event.stream;
     *  // 远端流订阅成功，播放远端音视频流
     *  remoteStream.play('remote_stream');
     * });
     * // 监听远端流增加事件
     * client.on('stream-added', event => {
     *  const remoteStream = event.stream;
     *  // 订阅远端音频和视频流
     *  client.subscribe(remoteStream, { audio: true, video: true });
     *
     *  // 仅订阅音频数据
     *  // client.subscribe(remoteStream, { audio: true, video: false });
     * });
     * ```
     */
    subscribe(
        stream: RemoteStream,
        options?: { audio?: boolean | undefined; video?: boolean | undefined },
    ): Promise<void>;

    /**
     * 取消订阅远端流
     * @param stream 远端流，通过监听 'stream-added' 事件获得。
     */
    unsubscribe(stream: RemoteStream): Promise<void>;

    /** 切换用户角色 */
    switchRole(role: Role): Promise<void>;

    /** 监听客户端对象事件 */
    on<K extends keyof ClientEventMap>(event: K, handler: Callback<ClientEventMap[K]>): void;

    /** 取消事件绑定 */
    off<K extends keyof ClientEventMap>(event: K, handler: Callback<ClientEventMap[K]>): void;

    /** 取消所有事件绑定 */
    off(event: '*'): void;

    /** 获取当前房间内远端用户音视频 mute 状态列表。 */
    getRemoteMutedState(): RemoteMutedState[];

    /** 获取当前网络传输状况统计数据, 该方法需要在 `publish()` 后调用 */
    getTransportStats(): Promise<TransportStats>;

    /** 获取当前已发布本地流的音频统计数据 */
    getLocalAudioStats(): Promise<LocalAudioStatsMap>;

    /** 获取当前已发布本地流的视频统计数据 */
    getLocalVideoStats(): Promise<LocalVideoStatsMap>;

    /** 获取当前所有远端流的音频统计数据 */
    getRemoteAudioStats(): Promise<RemoteAudioStatsMap>;

    /** 获取当前所有远端流的视频统计数据 */
    getRemoteVideoStats(): Promise<RemoteVideoStatsMap>;

    /** 开始混流转码 */
    startMixTranscode(config: MixTranscodeConfig): Promise<void>;

    /** 停止混流转码 */
    stopMixTranscode(): Promise<void>;
}

/** 客户端配置项 */
export interface ClientConfig {
    /** 应用的 sdkAppId */
    sdkAppId: number;
    /** 用户ID */
    userId: string;
    /** 用户签名 */
    userSig: string;
    /**
     * 应用场景,目前支持以下两种场景:
     * - `rtc` 实时通话模式
     * - `live` 互动直播模式
     */
    mode: 'rtc' | 'live';
    /** 是否使用 String 类型的 roomId，支持 v4.3.0+ 版本。 */
    useStringRoomId?: boolean | undefined;
    /** 绑定腾讯云直播 CDN 流 ID，设置之后，您就可以在腾讯云直播 CDN 上通过标准直播方案（FLV|HLS）播放该用户的音视频流。 */
    streamId?: string | undefined;
    /** 设置云端录制完成后的回调消息中的 "userdefinerecordid" 字段内容，便于您更方便的识别录制回调。 */
    userDefineRecordId?: string | undefined;
    /**
     * 纯音频推流模式,需要旁路直播和录制时需要带上此参数:
     * - 1 表示本次是纯音频推流，不需要录制 MP3 文件
     * - 2 表示本次是纯音频推流，录制文件为 MP3
     */
    pureAudioPushMode?: 1 | 2 | undefined;
    /**
     * autoSubscribe flag instead of deprecated Client.setDefaultMuteRemoteStreams
     * default: true
     */
    autoSubscribe?: boolean;
}

/** 客户端事件 */
export interface ClientEventMap {
    /** 远端流添加事件，当远端用户发布流后会收到该通知。 */
    'stream-added': RemoteStreamInfo;
    /** 远端流移除事件，当远端用户取消发布流后会收到该通知。  */
    'stream-removed': RemoteStreamInfo;
    /** 远端流更新事件，当远端用户添加、移除或更换音视频轨道后会收到该通知。 */
    'stream-updated': RemoteStreamInfo;
    /** 远端流订阅成功事件，调用 subscribe() 成功后会触发该事件。 */
    'stream-subscribed': RemoteStreamInfo;
    /** 信令通道连接状态变化事件 */
    'connection-state-changed': {
        prevState: ConnectionState;
        state: ConnectionState;
    };
    /** 远端用户进房通知，只有主动推流的远端用户进房才会收到该通知。 */
    'peer-join': RemoteUserInfo;
    /** 远端用户退房通知，只有主动推流的远端用户退房才会收到该通知。 */
    'peer-leave': RemoteUserInfo;
    /** 远端用户禁用音频通知。 */
    'mute-audio': RemoteUserInfo;
    /** 远端用户禁用视频通知。 */
    'mute-video': RemoteUserInfo;
    /** 远端用户启用音频通知。 */
    'unmute-audio': RemoteUserInfo;
    /** 远端用户启用视频通知。 */
    'unmute-video': RemoteUserInfo;
    /**
     * 用户被踢出房间通知，被踢原因有：
     *  - 同名用户登录，注意：同名用户同时登陆是不允许的行为，可能会导致双方音视频通话异常，此乃应用业务逻辑错误！
     *  - 被账户管理员主动踢出房间
     */
    'client-banned': RtcError;
    /** 网络质量统计数据事件，进房后开始统计，每两秒触发一次，包括上行（uplinkNetworkQuality）和下行（downlinkNetworkQuality）的质量统计数据。 */
    'network-quality': NetworkQuality;
    /** 客户端错误事件 */
    error: RtcError;
}

/**
 * Stream 音视频流，一个 Stream 中最多只能同时包含一个音频 track 和一个视频 track。
 *
 * Stream 类是本地流 LocalStream 和远端流 RemoteStream 的基类，它包含本地流和远端流通用的方法。
 */
export interface Stream {
    /**
     * 播放该音视频流
     * @param elementId HTML <div> 标签ID，该方法内部自动创建的音视频标签将被添加到该容器中。
     * @param options 播放选项
     */
    play(elementId: HTMLDivElement['id'] | HTMLDivElement, options?: PlayOptions): Promise<void>;

    /** 停止播放音视频流,该方法还会将由 `play()` 创建的音视频标签从 HTML 页面中删除。 */
    stop(): void;

    /**
     * 恢复播放音视频
     * **注意** 在某些版本浏览器上移动传入 `play()` 的 div 容器可能会导致音视频播放器进入 `PAUSED` 状态，此时 需要调用该接口继续进行播放。
     * @example
     * ```javascript
     * stream.on('player-state-changed', event => {
     *   if (event.state === 'PAUSED') {
     *     // resume audio/video playback
     *     stream.resume();
     *   }
     * });
     * ```
     */
    resume(): Promise<void>;

    /** 关闭音视频流,对于本地流，该方法会关闭摄像头并释放摄像头和麦克风访问权限。 */
    close(): void;

    /**
     * 禁用音频轨道
     * - 对于本地流，调用该方法会停止发送音频，远端会触发 `Client.on('mute-audio')` 事件。
     * - 对于远端流，调用该方法会停止播放音频，但是仍然接收音频数据。
     * @returns `true` 禁用音频轨道成功; `false` 禁用音频轨道失败，因为没有音频轨道。
     */
    muteAudio(): boolean;

    /**
     * 禁用视频轨道
     * - 对于本地流，调用该方法会停止发送视频，远端会触发 `Client.on('mute-video')` 事件。如果视频是从摄像头采集，此时摄像头灯仍然是亮着的。若想完全禁用视频轨道(即关闭摄像头)，可以使用 `removeTrack()` 删除视频轨道然后调用 `MediaStreamTrack.stop()` 关闭视频轨道（关闭摄像头）。
     * - 对于远端流，调用该方法会停止播放视频，但是仍然接收视频数据
     * @returns `true` 禁用视频轨道成功; `false` 禁用视频轨道失败，因为没有视频轨道。
     */
    muteVideo(): boolean;

    /**
     * 启用音频轨道
     * - 对于本地流，调用该方法会触发远端 `Client.on('unmute-audio')` 事件。
     * - 音频轨道默认是开启的，若你调用 `muteAudio()` 后可用该方法重新启用音频。
     * @returns `true` 启用音频轨道成功; `false` 启用音频轨道失败，因为没有音频轨道。
     */
    unmuteAudio(): boolean;

    /**
     * 启用视频轨道
     * - 对于本地流，调用该方法会触发远端 `Client.on('unmute-video')` 事件。
     * - 视频轨道默认是开启的，若你调用 `muteVideo()` 后可用该方法重新启用视频。
     * @returns `true` 启用视频轨道成功; `false` 启用视频轨道失败，因为没有视频轨道。
     */
    unmuteVideo(): boolean;

    /** 获取 Stream 唯一标识ID */
    getId(): string;

    /** 获取该流所属的用户ID */
    getUserId(): string;

    /**
     * 设置声音输出设备
     * @param deviceId 设备标识，通过 `getSpeakers()` 获取
     */
    setAudioOutput(deviceId: string): Promise<void>;

    /**
     * 设置音量大小,主要用于调节远端流的音量大小。
     * @param volume 音量大小，取值在 `0.0 (静音) 到 1.0 (最大音量)` 之间。
     */
    setAudioVolume(volume: number): void;

    /**
     * 获取当前音量大小,只有当本地流或远端流中有音频数据才有效。
     * @returns 音量大小,返回值在`(0.0, 1.0)`之间，通常认为值大于`0.1`为用户正在说话。
     */
    getAudioLevel(): number;

    /** 是否包含音频轨道 */
    hasAudio(): boolean;

    /** 是否包含视频轨道 */
    hasVideo(): boolean;

    /** 获取音频轨道 */
    getAudioTrack(): Nullable<MediaStreamTrack>;

    /** 获取视频轨道 */
    getVideoTrack(): Nullable<MediaStreamTrack>;

    /**
     * 获取当前视频帧
     * **注意** 该方法需要在 play() 后调用，并且 Stream 中有视频流才有效
     * @example
     * ```javascript
     * // 截取当前视频帧
     * const frame = stream.getVideoFrame();
     * if (frame) {
     *   const img = document.createElement('img');
     *   img.src = frame;
     * }
     * ```
     */
    getVideoFrame(): Nullable<string>;

    /** 监听Stream事件 */
    on<K extends keyof StreamEventMap>(event: K, handler: Callback<StreamEventMap[K]>): void;
}

export interface LocalStream extends Stream {
    /** 初始化本地音视频流对象, 初始化失败的错误信息请参考 [getUserMedia异常](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia#%E8%AF%AD%E6%B3%95)。 */
    initialize(): Promise<void>;

    /**
     * 设置音频 Profile,该方法需要在调用 `initialize()` 之前调用。
     * @param profile 音频 Profile, 默认 `standard`
     * - `standard` 采样率：48000，声道：单声道，码率：40kbps
     * - `high` 采样率：48000，声道：单声道，码率：128kbps
     */
    setAudioProfile(profile: 'standard' | 'high'): void;

    /**
     * 设置视频 Profile,该方法需要在调用 `initialize()` 之前调用。
     * @example
     * ```javascript
     * // 使用预定义Profile设置
     * localStream.setVideoProfile('480p');
     * localStream.initialize().then(() => {
     *   // local stream was initialized successfully.
     * });
     *
     * // 使用自定义视频Profile设置
     * localStream.setVideoProfile({
     *   width: 360, // 视频宽度
     *   height: 360, // 视频高度
     *   frameRate: 10, // 帧率
     *   bitrate: 400 // 比特率 kbps
     * });
     * localStream.initialize().then(() => {
     *   // local stream was initialized successfully.
     * });
     * ```
     */
    setVideoProfile(profile: VideoProfileString | Profile): void;

    /** 设置屏幕分享 Profile,该方法需要在调用 `initialize()` 之前调用。 */
    setScreenProfile(profile: ScreenProfileString | Profile): void;

    /**
     * 设置视频内容提示，主要用于提升在不同场景下的视频编码质量。该方法需要在调用 `initialize()` 成功之后调用。
     * @param hint 内容提示，参考 [MediaStreamTrack.contentHint](https://www.w3.org/TR/mst-content-hint/)
     * - `motion`：本地流视频内容为从摄像头采集的内容、电影或者视频游戏等。
     * - `detail`：本地视频内容为 ppt、带有文本内容、绘画或艺术线条的网页。一般屏幕分享默认使用这个提示。
     * - `text`：本地视频内容主要是含有文本的 ppt 或网页等。
     */
    setVideoContentHint(hint: 'motion' | 'detail' | 'text'): void;

    /**
     * 切换本地流的媒体输入设备,该方法仅适用于从摄像头和麦克风采集音视频的本地流。
     *
     * 若该本地流已经被发布，该方法会自动更新发往远端的音视频流，此时，远端会收到 `Client.on('stream-updated')` 事件通知。
     * @param type 媒体类型
     * - `audio` 音频
     * - `video` 视频
     * @param deviceId 设备标识
     * - 摄像头设备标识通过 getCameras() 获取。在移动设备上，可以通过设置 deviceId 为 'user' 和 'environment' 来切换前置和后置摄像头。
     * - 麦克风设备标识通过 getMicrophones() 获取。
     */
    switchDevice(type: 'audio' | 'video', deviceId: string): Promise<void>;

    /**
     * 添加音频或视频轨道
     *
     * 调用该方法将音频或视频轨道添加到本地流，若该本地流已经被发布，则会自动更新发往远端的音视频流，此时远端会收到 `Client.on('stream-updated')` 事件通知。
     *
     * 新的音视频轨道可以通过 `createStream()` | `getAudioTrack()` | `getVideoTrack()` 获取，
     * 或者直接通过 [getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)、
     * [captureStream()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream) 获取。
     *
     * **注意**
     * - 一个 Stream 对象中最多只能同时包含一路音频轨道和一路视频轨道。如果你想要更换同类型的轨道，请使用 `replaceTrack()`。
     * - 在增加视频轨道时，要求视频分辨率跟 `setVideoProfile()` 设置保持一致，否则会抛出异常。
     *
     * @example
     * ```javascript
     * const localStream = TRTC.createStream({ userId, audio: true, video: false });
     * localStream.initialize().then(() => {
     *   // 分布本地流（只有从麦克风采集的音频流）
     *   client.publish(localStream);
     * });
     *
     * // ...
     *
     * // 开启视频通话
     * const videoStream = TRTC.createStream({ userId, audio: false, video: true });
     * videoStream.initialize().then(() => {
     *   const videoTrack = videoStream.getVideoTrack();
     *   // 将从摄像头采集的视频轨道插入当前已发布的本地流对象LocalStream
     *   localStream.addTrack(videoTrack).then(() => {
     *     // 视频通话开启成功，远端流将会收到‘stream-updated’通知
     *   });
     * });
     * ```
     */
    addTrack(track: MediaStreamTrack): Promise<void>;

    /**
     * 移除视频轨道
     *
     * 调用该方法会移除本地流中的视频轨道，若本地流已经被发布，则会自动更新发往远端的视频流，此时远端会收到 `Client.on('stream-updated')` 事件通知。
     *
     * **注意**
     * - 一个已经发布的Stream对象中至少要有一个媒体轨道，如果你想完全删除本地流中的音视频轨道，请直接通过 `unpublish()` 取消发布， 然后再通过 `close()` 关闭本地流。
     * - 目前尚不支持移除音频轨道，若想禁用音频，可通过调用 `muteAudio()` 实现。
     *
     * @example
     * ```javascript
     * // 关闭视频通话示例，对应addTrack接口的开启视频通话示例
     * const videoTrack = localStream.getVideoTrack();
     * if (videoTrack) {
     *   localStream.removeTrack(videoTrack).then(() => {
     *     // 关闭视频通话成功，停止videoTrack并释放摄像头资源
     *     videoTrack.stop();
     *   });
     * }
     * ```
     */
    removeTrack(track: MediaStreamTrack): Promise<void>;

    /**
     * 更换音频或视频轨道
     *
     * 调用该方法更换本地流中的同类型轨道，若本地流已经被发布，该方法会自动更新发往远端的音视频流，此时远端会收到 `Client.on('stream-updated')` 事件通知。
     *
     * 新的音视频轨道可以通过 `createStream()` | `getAudioTrack()` | `getVideoTrack()` 获取，
     * 或者直接通过 [getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)、
     * [captureStream()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream) 获取。
     *
     * **注意**
     * - 如果需要更换媒体输入设备，推荐使用 `switchDevice()`。
     * - 在更换视频轨道时，要求视频分辨率跟 `setVideoProfile()` 设置保持一致，否则会抛出异常。
     * - 支持 Chrome 65+、Safari 浏览器。
     */
    replaceTrack(track: MediaStreamTrack): Promise<void>;
}

export interface RemoteStream extends Stream {
    /**
     * 获取远端流类型,主要用于判断一个远端流是主音视频流还是辅路视频流，辅路视频流通常是一个屏幕分享流。
     * @returns 远端流类型
     * - `main` 主音视频流
     * - `auxiliary` 辅助视频流，通常是一个屏幕分享流
     */
    getType(): 'main' | 'auxiliary';
}

export interface StreamConfig {
    /** 用户ID */
    userId: string;
    /** 是否从麦克风采集音频 */
    audio: boolean;
    /** 是否从摄像头采集视频 */
    video: boolean;
    /** 音频源 */
    audioSource?: MediaStreamTrack | undefined;
    /** 视频源 */
    videoSource?: MediaStreamTrack | undefined;
    /** 麦克风设备 deviceId，通过 getMicrophones() 获取 */
    microphoneId?: string | undefined;
    /** 摄像头设备 deviceId，通过 getCameras() 获取 */
    cameraId?: string | undefined;
    /**
     * 在移动设备上，可通过该参数选择使用前置或后置摄像头：
     * - `user`：前置摄像头
     * - `environment`：后置摄像头
     *
     * **注意** 请勿同时使用 cameraId 和 facingMode 参数。
     */
    facingMode?: 'user' | 'environment' | undefined;
    /** 是否采集屏幕分享流 */
    screen?: boolean | undefined;
    /**
     * 是否采集系统音频
     * 请勿同时设置 audio 和 screenAudio 为 true。
     * 采集系统声音只支持 Chrome M74+ ，在 Windows 和 Chrome OS 上，可以捕获整个系统的音频，在 Linux 和 Mac 上，只能捕获选项卡的音频。其它 Chrome 版本、其它系统、其它浏览器均不支持。
     * 屏幕分享获取指引：https://trtc-1252463788.file.myqcloud.com/web/docs/tutorial-06-advanced-screencast.html。
     */
    screenAudio?: boolean | undefined;
    /** 视频显示是否为镜像，默认为 true。建议在使用前置摄像头时开启，使用后置摄像头时关闭。镜像设置不适用于屏幕分享。 */
    mirror?: boolean | undefined;
}

export interface StreamEventMap {
    /** Audio/Video Player 状态变化事件 App 可根据状态变化来更新 UI，比如，通过监听 video player 状态变化来关闭或打开遮板。 */
    'player-state-changed': {
        type: string;
        state: 'PLAYING' | 'PAUSED' | 'STOPPED';
        reason: 'playing' | 'mute' | 'unmute' | 'ended';
    };
    /** 本地屏幕分享停止事件通知，仅对本地屏幕分享流有效。 */
    'screen-sharing-stopped': undefined;
}

export interface TurnServerConfig extends Omit<RTCIceServer, 'urls'> {
    /** TURN 服务器 url */
    url: string;
}

/**
 * 用户角色，仅在 `live` 模式下有意义，目前支持两种角色：
 * - `anchor` 主播
 * - `audience` 观众
 *
 * **注意** 互动直播 live 模式下的观众角色没有发布本地流的权限，只有收看远端流的权限。如果观众想要连麦跟主播互动， 请先通过 switchRole() 切换角色到主播 anchor 后再发布本地流。
 */
export type Role = 'anchor' | 'audience';

export interface JoinOptions {
    /** 房间号 */
    roomId: number | string;
    /** 用户角色 */
    role?: Role | undefined;
    /**
     * @deprecated 进房钥匙，若需要权限控制请携带该参数，因某些局限性目前已不建议使用该参数。
     */
    privateMapKey?: string | undefined;
}

export interface RemoteMutedState {
    /** 远端用户ID */
    userId: string;
    /** 是否有视频 */
    hasAudio: boolean;
    /** 是否有音频 */
    hasVideo: boolean;
    /** 是否静音 */
    audioMuted: boolean;
    /** 是否关闭摄像头 */
    videoMuted: boolean;
}

export interface TransportStats {
    /** SDK 到腾讯视频云的 RTT (Round-Trip Time)，单位 ms */
    rtt: number;
}

export interface VideoStats {
    /** 视频宽度 */
    framesWidth: number;
    /** 视频高度 */
    framesHeight: number;
}

export interface SentMediaStats {
    /** 已发送字节数 */
    bytesSent: number;
    /** 已发送包数 */
    packetsSent: number;
}

/** 本地流音频统计数据 */
export type LocalAudioStats = SentMediaStats;

/** 本地流视频统计数据 */
export interface LocalVideoStats extends SentMediaStats, VideoStats {
    /** 已编码帧数 */
    framesEncoded: number;
    /** 已发送帧数 */
    framesSent: number;
    /** 视频宽度 */
    frameWidth: number;
    /** 视频高度 */
    frameHeight: number;
}

export interface ReceivedMediaStats {
    /** 已接收字节数 */
    bytesReceived: number;
    /** 已接收包数 */
    packetsReceived: number;
    /** 丢包数 */
    packetsLost: number;
}

/** 远端流音频统计数据 */
export type RemoteAudioStats = ReceivedMediaStats;

/** 远端流视频统计数据 */
export interface RemoteVideoStats extends ReceivedMediaStats, VideoStats {
    /** 已解码帧数 */
    framesDecoded: number;
    /** 视频宽度 */
    frameWidth: number;
    /** 视频高度 */
    frameHeight: number;
}

export interface LocalAudioStatsMap {
    [userId: string]: LocalAudioStats;
}

export interface LocalVideoStatsMap {
    [userId: string]: LocalVideoStats;
}

export interface RemoteAudioStatsMap {
    [userId: string]: RemoteAudioStats;
}

export interface RemoteVideoStatsMap {
    [userId: string]: RemoteVideoStats;
}

export interface RemoteStreamInfo {
    stream: RemoteStream;
}

export interface RemoteUserInfo {
    userId: string;
}

/**
 * 信令链接状态
 * - `DISCONNECTED`: 连接断开
 * - `CONNECTING`: 正在连接中
 * - `RECONNECTING`: 自动重连中
 * - `CONNECTED`: 已连接
 */
export type ConnectionState = 'DISCONNECTED' | 'CONNECTING' | 'RECONNECTING' | 'CONNECTED';

/** 播放选项 */
export interface PlayOptions {
    /** 视频画面显示模式，参考 [CSS object-fit 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) */
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down' | undefined;
    /** 是否需要 mute 声音，对于本地流通常需要 mute 声音以防止播放从麦克风采集回来的声音。 */
    muted?: boolean | undefined;
}

export interface Profile {
    /** 视频宽度 */
    width: number;
    /** 视频高度 */
    height: number;
    /** 帧率 */
    frameRate: number;
    /** 比特率 kbs */
    bitrate: number;
}

export type VideoProfileString = '120p' | '180p' | '240p' | '360p' | '480p' | '720p' | '1080p' | '1440p' | '4K';

export type ScreenProfileString = '480p' | '480p_2' | '720p' | '720p_2' | '1080p' | '1080p_2';

export interface CheckResult {
    /** 检测结果 */
    result: boolean;
    detail: {
        /** 当前浏览器是否是 SDK 支持的浏览器 */
        isBrowserSupported: boolean;
        /** 当前浏览器是否支持 webRTC */
        isWebRTCSupported: boolean;
        /** 当前浏览器是否支持获取媒体设备及媒体流 */
        isMediaDevicesSupported: boolean;
        /** 当前浏览器是否支持 H264 编码 */
        isH264Supported: boolean;
    };
}

export interface NetworkQuality {
    /** 上行网络质量为 SDK 到腾讯云的上行连接网络质量 */
    uplinkNetworkQuality: 1 | 2 | 3 | 4 | 5 | 6;
    /** 下行网络质量为 腾讯云到 SDK 的所有下行连接的平均网络质量 */
    downlinkNetworkQuality: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface MixTranscodeConfig {
    /** 混流转码后的流 ID，默认值为'' */
    streamId?: string | undefined;
    /** 转码后视频分辨率的宽度（px），转码后视频的宽度设置必须大于等于 0 且能容纳所有混入视频，默认值为 640 */
    videoWidth?: number | undefined;
    /** 转码后视频分辨率的高度（px），转码后视频的高度设置必须大于等于 0 且能容纳所有混入视频，默认值为 480 */
    videoHeight?: number | undefined;
    /** 转码后的视频码率（kbps），如果传入值为 0，码率值将由 videoWidth 和 videoHeight 决定 */
    videoBitrate?: number | undefined;
    /** 转码后的视频帧率（fps），默认值为 15， 取值范围为(0, 30] */
    videoFramerate?: number | undefined;
    /** 转码后的视频关键帧间隔（s），默认值为 2，取值范围为[1, 8] */
    videoGOP?: number | undefined;
    /** 转码后的音频采样率（Hz），默认值为 48000 */
    audioSampleRate?: number | undefined;
    /** 转码后的音频码率（kbps），默认值为 64，取值范围为[32, 192] */
    audioBitrate?: number | undefined;
    /** 转码后的音频声道数， 默认值为 1，取值范围为 1 或 2 */
    audioChannels?: 1 | 2 | undefined;
    /** 混合后画面的背景颜色，格式为十六进制数字，默认值为 0x000000（黑色） */
    backgroundColor?: number | undefined;
    /** 混合后画面的背景图，默认值为 '' */
    backgroundImage?: string | undefined;
    /** 混入用户流的信息列表[必填]，必须包含接口调用者的信息 */
    mixUsers: MixUser[];
}

export interface MixUser {
    /** 用户标识[必填]，该用户的 userId */
    userId: string;
    /** 只混入该用户的音频流, 若该值为true, 则以下视频相关参数不需要传入 */
    pureAudio: boolean;
    /** 该用户流在混流中的宽度（px），必须大于等于0，默认值为 0 */
    width?: number | undefined;
    /** 该用户流在混流中的高度（px），必须大于等于0，默认值为 0 */
    height?: number | undefined;
    /** 以混流左上角为起点，该用户流在混流中的 X 坐标（px），必须大于等于 0，默认值为 0 */
    locationX?: number | undefined;
    /** 以混流左上角为起点，该用户流在混流中的 Y 坐标（px），必须大于等于 0，默认值为 0 */
    locationY?: number | undefined;
    /** 该用户流在混流中的图层层次，取值范围为[1, 15]；若 pureAudio 的值为 false， 则 zOrder 必传，且各混入流的 zOrder 不可重复 */
    zOrder?: number | undefined;
}
