// Type definitions for non-npm package wegame 2.7
// Project: https://developers.weixin.qq.com/minigame/dev/index.html
// Definitions by: J.C <https://github.com/jcyuan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 * IOS及安卓不支持：
 *     globalCompositeOperation不支持以下值：source-in source-out destination-atop lighter copy
 *     isPointInPath 不支持
 */
declare class WxRenderingContext extends CanvasRenderingContext2D {
}

/**
 * IOS及安卓不支持：
 *     pixelStorei 当第一个参数是 gl.UNPACK_COLORSPACE_CONVERSION_WEBGL 时不支持
 *     compressedTexImage2D不支持
 *     compressedTexSubImage2D不支持
 * 安卓不支持：
 *     getExtension
 *     getSupportedExtensions
 */
declare class WxWebGLRenderingContext extends WebGLRenderingContext {
    /**
     * 将一个Canvas对应的Texture绑定到WebGL上下文。(目前该方法仅支持 iOS 6.6.6 以上版本，Android/开发者工具暂不支持。)
     *   示例：gl.wxBindCanvasTexture(gl.TEXTURE_2D, canvas)
     * @param texture WebGL的纹理类型枚举值
     * @param canvas 需要绑定为Texture的Canvas
     */
    wxBindCanvasTexture(texture: number, canvas: Canvas): void;
}

declare class WxPerformance {
    /**
     * 时间戳
     */
    now(): number;
}

declare class Canvas {
    /**
     * 画布的宽度
     */
    width: number;
    /**
     * 画布的高度
     */
    height: number;
    /**
     * 将当前 Canvas 保存为一个临时文件，并生成相应的临时文件路径。
     */
    toTempFilePath(p: wx.types.ToTempFileParams): void;
    /**
     * toTempFilePath 的同步版本
     */
    toTempFilePathSync(p: wx.types.ToTempFileSyncParams): string;
    /**
     * 获取画布对象的绘图上下文
     * @param contextType 上下文类型
     * @param contextAttributes webgl 上下文属性，仅当 contextType 为 webgl 时有效
     */
    getContext(contextType: "2d" | "webgl", contextAttributes?: wx.types.RenderingContextConfig): WxRenderingContext | WxWebGLRenderingContext;
    /**
     * 把画布上的绘制内容以一个 data URI 的格式返回
     */
    toDataURL(): string;
}

declare class Stats {
    /**
     * 文件的类型和存取的权限，对应 POSIX stat.st_mode
     */
    mode: string;
    /**
     * 文件大小，单位：B，对应 POSIX stat.st_size
     */
    size: number;
    /**
     * 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime
     */
    lastAccessedTime: number;
    /**
     * 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime
     */
    lastModifiedTime: number;

    /**
     * 判断当前文件是否一个目录
     */
    isDirectory(): boolean;
    /**
     * 判断当前文件是否一个普通文件
     */
    isFile(): boolean;
}

/**
 * 日志管理类，最多保存5M的日志内容，超过5M后，旧的日志内容会被删除。
 * 对于小程序，用户可以通过使用 button 组件的 open-type="feedback" 来上传打印的日志。
 * 对于小游戏，用户可以通过使用 wx.createFeedbackButton 来创建上传打印的日志的按钮。
 * 开发者可以通过小程序管理后台左侧菜单“反馈管理”页面查看相关打印日志。
 * 基础库默认会把 App、Page 的生命周期函数和 wx 命名空间下的函数调用写入日志。
 */
declare class LogManager {
    /**
     * 写debug日志
     * @param args 要记录的日志内容
     */
    debug(... args: unknown[]): void;

    /**
     * 写info日志
     * @param args 要记录的日志内容
     */
    info(... args: unknown[]): void;

    /**
     * 写log日志
     * @param args 要记录的日志内容
     */
    log(... args: unknown[]): void;

    /**
     * 写warn日志
     * @param args 要记录的日志内容
     */
    warn(... args: unknown[]): void;
}

declare class FileSystemManager {
    /**
     * 重命名文件，可以把文件从 oldPath 移动到 newPath
     */
    rename(param: wx.types.RenameParams): void;
    /**
     * FileSystemManager.rename 的同步版本
     * @param oldPath 源文件路径，可以是普通文件或目录
     * @param newPath 新文件路径
     * @throws 指定源文件或目标文件没有写权限
     * @throws 源文件不存在，或目标文件路径的上层目录不存在
     */
    renameSync(oldPath: string, newPath: string): void;

    /**
     * 删除目录
     */
    rmdir(param: wx.types.RmdirParams): void;
    /**
     * rmdir 的同步版本
     * @param dirPath 要删除的目录路径
     * @param recursive 是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。
     * @throws 目录不存在, 目录不为空, 指定的 dirPath 路径没有写权限
     */
    rmdirSync(dirPath: string, recursive?: boolean): void;

    /**
     * 读取目录内文件列表
     */
    readdir(param: wx.types.ReaddirParams): void;
    /**
     * readdir的同步版本
     * @param dirPath 要读取的目录路径
     * @throws 目录不存在
     * @throws dirPath 不是目录
     * @throws 指定的 filePath 路径没有读权限
     */
    readdirSync(dirPath: string): ReadonlyArray<string>;

    /**
     * 创建目录
     */
    mkdir(param: wx.types.MkdirParams): void;
    /**
     * mkdir 的同步版本
     * @param dirPath 创建的目录路径
     * @param recursive 是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。如 dirPath 为 a/b/c/d 且 recursive 为 true，将创建 a 目录，再在 a 目录下创建 b 目录，以此类推直至创建 a/b/c 目录下的 d 目录。
     * @throws 上级目录不存在
     * @throws 指定的 filePath 路径没有写权限
     * @throws 有同名文件或目录
     */
    mkdirSync(dirPath: string, recursive?: boolean): void;

    /**
     * 解链文件
     */
    unlink(param: wx.types.UnlinkParams): void;
    /**
     * unlink 的同步版本
     * @param filePath 要解链的文件路径
     * @throws 指定的 path 路径没有读权限
     * @throws 文件不存在
     * @throws 传入的 filePath 是一个目录
     */
    unlinkSync(filePath: string): void;

    /**
     * 解压文件
     */
    unzip(param: wx.types.UnzipParams): void;

    /**
     * 读取本地文件内容
     */
    readFile(param: wx.types.ReadfileParams): void;
    /**
     * readFile 的同步版本，读取并返回指定路径的文件的原始二进制内容
     * @param filePath 要读取的文件的路径
     * @throws 指定的 filePath 所在目录不存在
     * @throws 指定的 filePath 路径没有读权限
     */
    readFileSync(filePath: string): ArrayBuffer;
    /**
     * readFile 的同步版本，读取并按指定字符编码返回字符串
     * @param filePath 要读取的文件的路径
     * @param encoding 指定读取文件的字符编码
     * @throws 指定的 filePath 所在目录不存在
     * @throws 指定的 filePath 路径没有读权限
     */
    readFileSync(filePath: string, encoding: wx.types.FileContentEncoding): string;

    /**
     * 获取文件 Stats 对象
     */
    stat(param: wx.types.StatParams): void;
    /**
     * stat 的同步版本
     * @param path 文件/目录路径
     * @throws 指定的 path 路径没有读权限
     * @throws 文件不存在
     */
    statSync(path: string): Stats;

    /**
     * 写文件
     */
    writeFile(param: wx.types.WritefileParams): void;
    /**
     * writeFile 的同步版本，写入二进制原始文件数据
     * @param filePath 要写入的文件路径
     * @param data 要写入的二进制数据
     * @throws 指定的 filePath 所在目录不存在
     * @throws 指定的 filePath 路径没有写权限
     */
    writeFileSync(filePath: string, data: ArrayBuffer): void;
    /**
     * writeFile 的同步版本，写入文本字符串数据至文件
     * @param filePath 要写入的文件路径
     * @param data 要写入的文本内容
     * @param encoding 指定写入的文本的字符编码格式
     * @throws 指定的 filePath 所在目录不存在
     * @throws 指定的 filePath 路径没有写权限
     */
    writeFileSync(filePath: string, data: string, encoding: wx.types.FileContentEncoding): void;

    /**
     * 判断文件/目录是否存在
     */
    access(param: wx.types.AccessfileParams): void;
    /**
     * access的同步版本
     * @param path 要判断是否存在的文件/目录路径
     * @throws 文件/目录不存在
     */
    accessSync(path: string): void;

    /**
     * 复制文件
     */
    copyFile(param: wx.types.CopyfileParams): void;
    /**
     * copyFile 的同步版本
     * @param srcPath 源文件路径，只可以是普通文件
     * @param destPath 目标文件路径
     * @throws 指定目标文件路径没有写权限
     * @throws 源文件不存在，或目标文件路径的上层目录不存在
     */
    copyFileSync(srcPath: string, destPath: string): void;

    /**
     * 获取该小程序下已保存的本地缓存文件列表
     * @param res.fileList.filePath 本地路径
     * @param res.fileList.size 本地文件大小，以字节为单位
     * @param res.fileList.createTime 文件创建时间
     */
    getSavedFileList(param: wx.types.CallbacksWithType<wx.types.SavedfileList>): void;

    /**
     * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息
     */
    getFileInfo(param: wx.types.FileinfoParams): void;

    /**
     * 删除该小程序下已保存的本地缓存文件（新版本应使用unlink）
     */
    removeSavedFile(param: wx.types.RemovefileParams): void;

    /**
     * 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath 将不可用。
     */
    saveFile(param: wx.types.SavefileParams): void;
    /**
     * saveFile的同步版本
     * @param tempFilePath 临时存储文件路径
     * @param filePath 要存储的文件路径
     * @throws 指定的 tempFilePath 找不到文件
     * @throws 指定的 filePath 路径没有写权限
     * @throws 上级目录不存在
     */
    saveFileSync(tempFilePath: string, filePath?: string): string;

    /**
     * 在文件结尾追加内容
     */
    appendFile(param: wx.types.AppendfileParams): void;
    /**
     * appendFile的同步版本
     * @param filePath 要追加内容的文件路径
     * @param data 要追加的文本或二进制数据
     * @param encoding 指定写入文件的字符编码
     * @throws 指定的 filePath 文件不存在
     * @throws 指定的 filePath 是一个已经存在的目录
     * @throws 指定的 filePath 路径没有写权限
     * @throws 指定的 filePath 是一个已经存在的目录
     */
    appendFileSync(filePath: string, data: string | ArrayBuffer, encoding: wx.types.FileContentEncoding): void;
}

declare class DownloadTask {
    /**
     * 中断下载任务
     */
    abort(): void;
    /**
     * 监听下载进度变化事件
     * @param res.progress 下载进度百分比，值为0至100
     * @param res.totalBytesWritten 已经下载的数据长度，单位 Bytes
     * @param res.totalBytesExpectedToWrite 预期需要下载的数据总长度，单位 Bytes
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesWritten: number, totalBytesExpectedToWrite: number }) => void): void;
}

declare class RequestTask {
    /**
     * 中断请求任务
     */
    abort(): void;
}

declare class SocketTask {
    /**
     * 通过WebSocket发送数据
     */
    send(param: wx.types.SocketSendParams): void;
    /**
     * 关闭WebSocket连接
     */
    close(param: wx.types.SocketCloseParams): void;
    /**
     * 监听WebSocket 连接打开事件
     */
    onOpen(callback: wx.types.SocketOpenCallback): void;
    /**
     * 监听WebSocket 连接关闭事件
     */
    onClose(callback: () => void): void;
    /**
     * 监听WebSocket 错误事件
     */
    onError(callback: wx.types.SocketErrorCallback): void;
    /**
     * 监听WebSocket 接受到服务器的消息事件
     */
    onMessage(callback: wx.types.SocketMessageCallback): void;
}

/**
 * 一个 UDP Socket 实例，默认使用 IPv4 协议。
 * 错误码：
 *    -1  系统错误
 *    -2  socket接口错误
 *    -3  发送失败，无接口权限
 *     1  发送失败，参数错误，address不合法
 *     2  发送失败，参数错误，port不合法
 */
declare class UDPSocket {
    /**
     * 绑定一个系统随机分配的可用端口，或绑定一个指定的端口号
     * @param port 需要绑定的端口号，不指定时使用随机端口
     * @returns 绑定成功的端口号
     */
    bind(port?: number): number;

    /**
     * 向指定的 IP 和 port 发送消息
     */
    send(param: wx.types.UDPSendParams): void;

    /**
     * 关闭 UDP Socket 实例，相当于销毁。 在关闭之后，UDP Socket 实例不能再发送消息，每次调用 UDPSocket.send 将会触发错误事件，
     * 并且 message 事件回调函数也不会再执行。在 UDPSocket 实例被创建后将被 Native 强引用，保证其不被 GC。在 UDPSocket.close 后
     * 将解除对其的强引用，让 UDPSocket 实例遵从 GC。
     */
    close(): void;

    /**
     * 设置监听关闭事件回调
     * @param callback 关闭事件的回调函数
     */
    onClose(callback: () => void): void;

    /**
     * 清除监听关闭事件回调
     * @param callback 之前监听的函数
     */
    offClose(callback: () => void): void;

    /**
     * 监听错误事件
     * @param callback 错误回调函数
     */
    onError(callback: (res: {
        /**
         * 错误信息
         */
        errMsg: string;
    }) => void): void;

    /**
     * 取消监听错误事件
     * @param callback 之前设置的错误回调函数
     */
    offError(callback: (res: {
        /**
         * 错误信息
         */
        errMsg: string;
    }) => void): void;

    /**
     * 监听开始监听数据包消息的事件
     * @param callback 回调函数
     */
    onListening(callback: () => void): void;

    /**
     * 取消监听开始监听数据包消息的事件
     * @param callback 之前设置的回调函数
     */
    offListening(callback: () => void): void;

    /**
     * 监听收到消息的事件
     * @param callback 回调函数
     */
    onMessage(callback: (res: wx.types.UDPMessage) => void): void;

    /**
     * 取消监听收到消息的事件
     * @param callback 之前设置的回调函数
     */
    offMessage(callback: (res: wx.types.UDPMessage) => void): void;
}

declare class UploadTask {
    /**
     * 中断上传任务
     */
    abort(): void;
    /**
     * 监听上传进度变化事件
     * @param callback.res.progress 上传进度百分比
     * @param callback.res.totalBytesSent 已经上传的数据长度，单位 Bytes
     * @param callback.res.totalBytesExpectedToSend 预期需要上传的数据总长度，单位 Bytes
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesSent: number, totalBytesExpectedToSend: number }) => void): void;
}

declare class KVData {
    key: string;
    value: string;
}

declare class UserGameData {
    /**
     * 用户的微信头像 url
     */
    avatarUrl: string;
    /**
     * 用户的微信昵称
     */
    nickname: string;
    /**
     * 用户的openid
     */
    openid: string;
    /**
     * 用户的托管 KV 数据列表
     */
    KVDataList: ReadonlyArray<KVData>;
}

declare class CreatedButton {
    type: wx.types.ButtonType;
    text: string;
    image: string;
    style: wx.types.ButtonStyle;
    show(): void;
    hide(): void;
    onTap(callback: (res?: any) => void): void;   // res参数会被具体按钮的API定义覆盖为具体信息
    offTap(callback: (res?: any) => void): void;
    destroy(): void;
}
declare class UserInfoButton extends CreatedButton {
    onTap(callback: (res: {
        /**
         * 用户信息对象，不包含 openid 等敏感信息
         */
        userInfo: wx.types.UserInfo,
        /**
         * 不包括敏感信息的原始数据字符串，用于计算签名
         */
        rawData: string,
        /**
         * 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，参考文档signature(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/http-signature.html?t=201822)
         */
        signature: string,
        /**
         * 包括敏感数据在内的完整用户信息的加密数据，详见加密数据解密算法(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/signature.html?t=201822)
         */
        encryptedData: string,
        /**
         * 加密算法的初始向量，详见加密数据解密算法(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/signature.html?t=201822)
         */
        iv: string,
        errMsg: string
    }) => void): void;
}
declare class OpenSettingButton extends CreatedButton {
    onTap(callback: () => void): void;
    offTap(callback: () => void): void;
}
declare class GameClubButton extends CreatedButton {
    icon: wx.types.GameClubButtonIcon;
    onTap(callback: (res: {
        errMsg: string;
    }) => void): void;
}
declare class FeedbackButton extends CreatedButton {
    onTap(callback: (res: {
        errMsg: string;
    }) => void): void;
}

declare class OpenDataContext {
    /**
     * 开放数据域和主域共享的 sharedCanvas，注意在开放数据域内时getContext只能使用2d模式
     */
    canvas: Canvas;
    /**
     * 向开放数据域发送消息
     * @param message 要发送的消息，message 中及嵌套对象中 key 的 value 只能是 primitive value。即 number、string、boolean、null、undefined。
     */
    postMessage(message: any): void;
}

declare class LoadSubpackageTask {
    /**
     * 监听分包加载进度变化事件
     * @param callback.res.progress 分包下载进度百分比
     * @param callback.res.totalBytesWritten 已经下载的数据长度，单位 Bytes
     * @param callback.res.totalBytesExpectedToWrite 预期需要下载的数据总长度，单位 Bytes
     */
    onProgressUpdate(callback: (res: { progress: number, totalBytesWritten: number, totalBytesExpectedToWrite: number }) => void): void;
}

declare class UpdateManager {
    /**
     * 应用更新包并重启
     */
    applyUpdate(): void;
    /**
     * 监听检查更新结果回调
     */
    onCheckForUpdate(callback: () => void): void;
    /**
     * 监听更新包下载成功回调
     */
    onUpdateReady(callback: () => void): void;
    /**
     * 监听更新包下载失败回调
     */
    onUpdateFailed(callback: () => void): void;
}

declare class WxWorker {
    /**
     * 向主线程或Worker线程发送的消息。
     * @param message 需要发送的消息，必须是一个可序列化的 JavaScript 对象。
     */
    postMessage(message: any): void;
    /**
     * 结束当前 worker 线程，仅限在主线程 worker 对象上调用。
     */
    terminate(): void;
    /**
     * 监听接收主线程/Worker 线程向当前线程发送的消息
     * @param callback.res.message 接收主线程/Worker 线程向当前线程发送的消息
     */
    onMessage(callback: (res: { message: any }) => void): void;
}

/**
 * InnerAudioContext 实例，可通过 wx.createInnerAudioContext 接口获取实例。
 */
declare class InnerAudioContext {
    /**
     * 音频资源的地址
     */
    src: string;
    /**
     * 是否自动播放
     */
    autoplay: boolean;
    /**
     * 是否循环播放
     */
    loop: boolean;
    /**
     * 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音
     */
    obeyMuteSwitch: boolean;
    /**
     * 当前音频的长度，单位 s。只有在当前有合法的 src 时返回
     */
    readonly duration: number;
    /**
     * 当前音频的播放位置，单位 s。只有在当前有合法的 src 时返回，时间不取整，保留小数点后 6 位
     */
    readonly currentTime: number;
    /**
     * 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放
     */
    paused: boolean;
    /**
     * 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲
     */
    readonly buffered: number;
    /**
     * 音量。范围 0~1。
     */
    volume: number;

    /**
     * 播放
     */
    play(): void;
    /**
     * 暂停。暂停后的音频再播放会从暂停处开始播放
     */
    pause(): void;
    /**
     * 停止。停止后的音频再播放会从头开始播放。
     */
    stop(): void;
    /**
     * 跳转到指定位置，单位 s
     * @param position 跳转的时间
     */
    seek(position: number): void;
    /**
     * 销毁当前实例
     */
    destroy(): void;
    /**
     * 监听音频进入可以播放状态的事件
     */
    onCanplay(callback: () => void): void;
    /**
     * 取消监听音频进入可以播放状态的事件
     */
    offCanplay(callback: () => void): void;
    /**
     * 监听音频播放事件
     */
    onPlay(callback: () => void): void;
    /**
     * 取消监听音频播放事件
     */
    offPlay(callback: () => void): void;
    /**
     * 监听音频暂停事件
     */
    onPause(callback: () => void): void;
    /**
     * 取消监听音频暂停事件
     */
    offPause(callback: () => void): void;
    /**
     * 监听音频停止事件
     */
    onStop(callback: () => void): void;
    /**
     * 取消监听音频停止事件
     */
    offStop(callback: () => void): void;
    /**
     * 监听音频自然播放至结束的事件
     */
    onEnded(callback: () => void): void;
    /**
     * 取消监听音频自然播放至结束的事件
     */
    offEnded(callback: () => void): void;
    /**
     * 监听音频播放进度更新事件
     */
    onTimeUpdate(callback: () => void): void;
    /**
     * 取消监听音频播放进度更新事件
     */
    offTimeUpdate(callback: () => void): void;
    /**
     * 监听音频播放错误事件
     */
    onError(callback: () => void): void;
    /**
     * 取消监听音频播放错误事件
     */
    offError(callback: () => void): void;
    /**
     * 监听音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
     */
    onWaiting(callback: () => void): void;
    /**
     * 取消监听音频加载中事件，当音频因为数据不足，需要停下来加载时会触发
     */
    offWaiting(callback: () => void): void;
    /**
     * 监听音频进行跳转操作的事件
     */
    onSeeking(callback: () => void): void;
    /**
     * 取消监听音频进行跳转操作的事件
     */
    offSeeking(callback: () => void): void;
    /**
     * 监听音频完成跳转操作的事件
     */
    onSeeked(callback: () => void): void;
    /**
     * 取消监听音频完成跳转操作的事件
     */
    offSeeked(callback: () => void): void;
}

declare class RecorderManager {
    /**
     * 开始录音
     */
    start(param: {
        /**
         * 录音的时长，单位 ms，最大值 600000（10 分钟），默认值60000（1 分钟）
         */
        duration?: number,
        /**
         * 采样率
         */
        sampleRate: 8000 | 11025 | 12000 | 16000 | 22050 | 24000 | 32000 | 44100 | 48000,
        /**
         * 录音通道数
         */
        numberOfChannels: 1 | 2,
        /**
         * 编码码率
         */
        encodeBitRate: number,
        /**
         * 音频格式
         */
        format: "mp3" | "aac",
        /**
         * 指定帧大小，单位 KB。传入 frameSize 后，每录制指定帧大小的内容后，会回调录制的文件内容，不指定则不会回调
         */
        frameSize: number,
        /**
         * 指定录音的音频源，可通过 wx.getAvailableAudioSources() 获取当前可用的音频源，默认值auto
         */
        audioSource?: wx.types.AudioSourceType
    }): void;
    /**
     * 暂停录音
     */
    pause(): void;
    /**
     * 继续录音
     */
    resume(): void;
    /**
     * 停止录音
     */
    stop(): void;
    /**
     * 监听录音开始事件
     */
    onStart(callback: () => void): void;
    /**
     * 监听录音继续事件
     */
    onResume(callback: () => void): void;
    /**
     * 监听录音暂停事件
     */
    onPause(callback: () => void): void;
    /**
     * 监听录音结束事件
     * @param callback.res.tempFilePath 录音文件的临时路径
     */
    onStop(callback: (res: { tempFilePath: string }) => void): void;
    /**
     * 监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件。
     * @param callback.res.frameBuffer 录音分片数据
     * @param callback.res.isLastFrame 当前帧是否正常录音结束前的最后一帧
     */
    onFrameRecorded(callback: (res: { frameBuffer: ArrayBuffer, isLastFrame: boolean }) => void): void;
    /**
     * 监听录音错误事件
     */
    onError(callback: (res: { errMsg: string }) => void): void;
}

declare class ImageFile {
    /**
     * 本地文件路径
     */
    path: string;
    /**
     * 本地文件大小，单位 B
     */
    size: number;
}

declare class Video {
    /**
     * 视频的左上角横坐标
     */
    x: number;
    /**
     * 视频的左上角纵坐标
     */
    y: number;
    /**
     * 视频的宽度，默认值300
     */
    width: number;
    /**
     * 默认值150
     */
    height: number;
    /**
     * 视频的资源地址
     */
    src: string;
    /**
     * 视频的封面
     */
    poster: string;
    /**
     * 视频的初始播放位置，单位为 s 秒，默认值0
     */
    initialTime: number;
    /**
     * 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5默认值1.0
     */
    playbackRate: number;
    /**
     * 视频是否为直播，默认值0
     */
    live?: number;
    /**
     * 视频的缩放模式
     * fill - 填充，视频拉伸填满整个容器，不保证保持原有长宽比例
     * contain - 包含，保持原有长宽比例。保证视频尺寸一定可以在容器里面放得下。因此，可能会有部分空白
     * cover - 覆盖，保持原有长宽比例。保证视频尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，视频有部分会看不见
     */
    objectFit: "contain" | "cover" | "fill";
    /**
     * 视频是否显示控件，默认true
     */
    controls: boolean;
    /**
     * 视频是否自动播放，默认false
     */
    autoplay: boolean;
    /**
     * 视频是否是否循环播放，默认值false
     */
    loop: boolean;
    /**
     * 视频是否禁音播放，默认值false
     */
    muted: boolean;

    /**
     * 视频开始缓冲时触发的回调函数
     */
    onwaiting: () => void;
    /**
     * 视频开始播放时触发的回调函数
     */
    onplay: () => void;
    /**
     * 视频暂停时触发的回调函数
     */
    onpause: () => void;
    /**
     * 视频播放到末尾时触发的回调函数
     */
    onended: () => void;
    /**
     * 每当视频播放进度更新时触发的回调函数
     */
    ontimeupdate: () => void;
    /**
     * 视频发生错误时触发的回调函数
     */
    onerror: () => void;

    /**
     * 销毁视频
     */
    destroy(): void;
    /**
     * 监听视频缓冲事件
     */
    onWaiting(callback: () => void): void;
    /**
     * 取消监听视频缓冲事件
     */
    offWaiting(callback: () => void): void;

    /**
     * 监听视频播放事件
     */
    onPlay(callback: () => void): void;
    /**
     * 取消监听视频播放事件
     */
    offPlay(callback: () => void): void;
    /**
     * 监听视频暂停事件
     */
    onPause(callback: () => void): void;
    /**
     * 取消监听视频暂停事件
     */
    offPause(callback: () => void): void;
    /**
     * 监听视频播放到末尾事件
     */
    onEnded(callback: () => void): void;
    /**
     * 取消监听视频播放到末尾事件
     */
    offEnded(callback: () => void): void;
    /**
     * 监听视频播放进度更新事件
     * @param callback.res.position 当前的播放位置，单位为秒
     * @param callback.res.duration 视频的总时长，单位为秒
     */
    onTimeUpdate(callback: (res: { position: number, duration: number }) => void): void;
    /**
     * 取消监听视频播放进度更新事件
     */
    offTimeUpdate(callback: (res: { position: number, duration: number }) => void): void;
    /**
     * 监听视频错误事件
     * @param callback.res.errMsg 错误信息，有如下值
     *                            MEDIA_ERR_NETWORK - 当下载时发生错误
     *                            MEDIA_ERR_DECODE  - 当解码时发生错误
     *                            MEDIA_ERR_SRC_NOT_SUPPORTED - video 的 src 属性是不支持的资源类型
     */
    onError(callback: (res: { errMsg: string }) => void): void;
    /**
     * 取消监听视频错误事件
     */
    offError(callback: (res: { errMsg: string }) => void): void;

    /**
     * 播放视频
     */
    play(): Promise<void>;
    /**
     * 暂停视频
     */
    pause(): Promise<void>;
    /**
     * 停止视频
     */
    stop(): Promise<void>;
    /**
     * 视频跳转
     * @param time 视频跳转到指定位置，单位为 s 秒
     */
    seek(time: number): Promise<void>;

    /**
     * 视频全屏
     */
    requestFullScreen(): Promise<void>;

    /**
     * 视频退出全屏
     */
    exitFullScreen(): Promise<void>;
}

/**
 * 相机对象
 */
declare class Camera {
    /**
     * 相机的左上角横坐标
     */
    x: number;

    /**
     * 相机的左上角纵坐标
     */
    y: number;

    /**
     * 相机的宽度
     */
    width: number;

    /**
     * 相机的高度
     */
    height: number;

    /**
     * 摄像头朝向
     */
    devicePosition: "front" | "back";

    /**
     * 闪光灯状态
     */
    flash: "auto" | "on" | "off";

    /**
     * 帧数据图像尺寸
     */
    size: "small" | "medium" | "large";

    /**
     * 拍照，可指定质量，成功则返回图片
     * @param quality 图片质量
     */
    takePhoto(quality?: "high" | "normal" | "low"): Promise<{
        /**
         * 临时图片路径
         */
        tempImagePath: string,
        /**
         * 图片宽度
         */
        width: string,
        /**
         * 图片高度
         */
        height: string
    }>;

    /**
     * 开始录像
     */
    startRecord(): Promise<void>;

    /**
     * 结束录像，成功则返回封面与视频
     * @param compressed 是否压缩录制视频
     */
    stopRecord(compressed: boolean): Promise<{
        /**
         * 临时视频路径
         */
        tempThumbPath: string,
        /**
         * 临时封面路径
         */
        tempVideoPath: string
    }>;

    /**
     * 监听用户不允许授权使用摄像头的情况
     * @param callback 回调函数
     */
    onAuthCancel(callback: () => void): void;

    /**
     * 监听摄像头非正常终止事件，如退出后台等情况
     * @param callback 回调函数
     */
    onStop(callback: () => void): void;

    /**
     * 监听摄像头实时帧数据
     */
    onCameraFrame(callback: (res: {
        /**
         * 图像数据矩形的宽度
         */
        width: number,
        /**
         * 图像数据矩形的高度
         */
        height: number,
        /**
         * 图像像素点数据，一维数组，每四项表示一个像素点的 rgba
         */
        data: ArrayBuffer
    }) => void): void;

    /**
     * 开启监听帧数据
     */
    listenFrameChange(): void;

    /**
     * 关闭监听帧数据
     */
    closeFrameChange(): void;

    /**
     * 销毁相机
     */
    destroy(): void;
}

/**
 * banner 广告组件。banner 广告组件是一个原生组件，层级比上屏 Canvas 高，会覆盖在上屏 Canvas 上。banner 广告组件默认是隐藏的，需要调用 BannerAd.show() 将其显示。banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的尺寸将通过 BannerAd.onResize() 事件中提供。
 */
declare class BannerAd {
    /**
     * 广告单元 id
     */
    adUnitId: string;
    /**
     * banner 广告组件的样式。style 上的属性的值仅为开发者设置的值，banner 广告会根据开发者设置的宽度进行等比缩放，缩放后的真实尺寸需要通过 BannerAd.onResize() 事件获得。
     */
    style: wx.types.AdStyle;

    /**
     * 显示 banner 广告。
     */
    show(): Promise<void>;
    /**
     * 隐藏 banner 广告
     */
    hide(): void;
    /**
     * 销毁 banner 广告
     */
    destroy(): void;
    /**
     * 监听 banner 广告缩放
     */
    onResize(callback: (res: { width: number, height: number }) => void): void;
    /**
     * 取消监听隐藏 banner 广告缩放
     */
    offResize(callback: (res: { width: number, height: number }) => void): void;
    /**
     * 监听banner 广告加载事件
     */
    onLoad(callback: () => void): void;
    /**
     * 取消监听banner 广告加载事件
     */
    offLoad(callback: () => void): void;
    /**
     * 监听banner 广告错误事件
     */
    onError(callback: (res: { errMsg: string }) => void): void;
    /**
     * 取消监听banner 广告错误事件
     */
    offError(callback: (res: { errMsg: string }) => void): void;
}

declare class InterstitialAd extends BannerAd {
    /**
     * 加载视频广告
     */
    load(): Promise<void>;
    /**
     * 监听用户点击 关闭广告 按钮的事件
     */
    onClose(callback: (res: { isEnded: boolean }) => void): void;
    /**
     * 监听用户点击 关闭广告 按钮的事件
     */
    offClose(callback: (res: { isEnded: boolean }) => void): void;
}

declare class RewardedVideoAd extends InterstitialAd {
}

// --定时器
declare function clearTimeout(timeoutID: number): void;
declare function clearInterval(intervalID: number): void;
declare function setTimeout(fn: () => void, delay: number, ...rest: any[]): number;
declare function setInterval(fn: () => void, delay: number, ...rest: any[]): number;

// --渲染
declare function cancelAnimationFrame(requestID: number): void;
declare function requestAnimationFrame(callback: () => void): number;

declare namespace wx {
    namespace types {
        interface Callbacks {
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
        }

        interface CallbacksWithType<T> {
            success?: (res: T) => void;
            fail?: () => void;
            complete?: () => void;
        }

        interface CallbacksWithType2<T, F> {
            success?: (res: T) => void;
            fail?: (res: F) => void;
            complete?: () => void;
        }

        interface RenderingContextConfig {
            /**
             * 表示是否抗锯齿
             */
            antialias?: boolean;
            /**
             * 表示是否绘图完成后是否保留绘图缓冲区
             */
            preserveDrawingBuffer?: boolean;
            /**
             * 抗锯齿样本数。最小值为 2，最大不超过系统限制数量，仅 iOS 支持
             */
            antialiasSamples?: number;
        }

        interface ToTempFileSyncParams {
            /**
             * 截取 canvas 的左上角横坐标
             */
            x?: number;
            /**
             * 截取 canvas 的左上角纵坐标
             */
            y?: number;
            /**
             * 截取 canvas 的宽度
             */
            width?: number;
            /**
             * 截取 canvas 的高度
             */
            height?: number;
            /**
             * 目标文件的宽度，会将截取的部分拉伸或压缩至该数值
             */
            destWidth?: number;
            /**
             * 目标文件的高度，会将截取的部分拉伸或压缩至该数值
             */
            destHeight?: number;
            /**
             * 目标文件的类型
             */
            fileType?: "jpg" | "png";
            /**
             * jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0
             */
            quality?: number;
        }

        interface ToTempFileParams extends ToTempFileSyncParams {
            success?: (res: { tempFilePath: string }) => void;
            fail?: () => void;
            complete?: () => void;
        }

        interface RenameParams {
            oldPath: string;
            newPath: string;
            success?: () => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface RmdirParams {
            dirPath: string;
            recursive?: boolean;
            success?: () => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface ReaddirParams {
            dirPath: string;
            success?: (res: { files: ReadonlyArray<string> }) => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface MkdirParams {
            dirPath: string;
            recursive?: boolean;
            success?: () => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        type FileContentEncoding = "ascii" | "base64" | "binary" | "hex" | "ucs2" | "ucs-2" | "utf16le" | "utf-16le" | "utf-8" | "utf8" | "latin1";

        interface ReadfileParams {
            filePath: string;
            encoding?: FileContentEncoding;
            success?: (res: { data: string | ArrayBuffer }) => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface StatParams {
            path: string;
            success?: (res: { stat: Stats }) => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface WritefileParams {
            filePath: string;
            data: string | ArrayBuffer;
            encoding?: FileContentEncoding;
            success?: () => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface UnlinkParams {
            filePath: string;
            success?: () => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface UnzipParams {
            zipFilePath: string;
            targetPath: string;
            success?: () => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface AccessfileParams {
            path: string;
            success?: () => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface SavedfileList {
            fileList: {
                filePath: string;
                size: number;
                createTime: number;
            };
        }

        interface CopyfileParams {
            srcPath: string;
            destPath: string;
            success?: () => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface FileinfoParams {
            filePath: string;
            success?: (res: { size: number, digest: string }) => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface RemovefileParams {
            filePath: string;
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
        }

        interface SavefileParams {
            tempFilePath: string;
            filePath?: string;
            success?: (res: { savedFilePath: string }) => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface AppendfileParams {
            filePath: string;
            data: string | ArrayBuffer;
            encoding?: FileContentEncoding;
            success?: () => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        interface LineHeightParams {
            fontStyle?: "normal" | "italic";
            fontWeight?: "normal" | "bold";
            fontSize?: number;
            fontFamily: string;
            text: string;
            success?: (res: { lineHeight: number }) => void;
            fail?: () => void;
            complete?: () => void;
        }

        interface Image {
            src: string;
            width: number;
            height: number;
            onload: () => void;
            onerror: (e?: any) => void;
        }

        // --启动参数
        interface LaunchOption {
            /**
             * 场景值
             */
            scene: number;
            /**
             * 启动参数
             */
            query: any;
            /**
             * 当前小游戏是否被显示在聊天顶部
             */
            isSticky: boolean;
            /**
             * 票据
             */
            shareTicket: string;
        }

        // --系统信息
        interface SystemInfo {
            /**
             * 手机品牌
             */
            brand: string;
            /**
             * 手机型号
             */
            model: string;
            /**
             * 设备像素比
             */
            pixelRatio: number;
            /**
             * 屏幕宽度
             */
            screenWidth: number;
            /**
             * 屏幕高度
             */
            screenHeight: number;
            /**
             * 可使用窗口宽度
             */
            windowWidth: number;
            /**
             * 可使用窗口高度
             */
            windowHeight: number;
            /**
             * 微信设置的语言
             */
            language: string;
            /**
             * 微信版本号
             */
            version: string;
            /**
             * 操作系统版本
             */
            system: string;
            /**
             * 客户端平台
             */
            platform: string;
            /**
             * 用户字体大小设置。以“我-设置-通用-字体大小”中的设置为准，单位 px。
             */
            fontSizeSetting: string;
            /**
             * 客户端基础库版本
             */
            SDKVersion: string;
            /**
             * 性能等级
             */
            benchmarkLevel: number;
            /**
             * 电量，范围 1 - 100
             */
            battery: number;
            /**
             * wifi 信号强度，范围 0 - 4
             */
            wifiSignal: number;
        }

        // --触摸对象
        interface Touch {
            /**
             * Touch 对象的唯一标识符，只读属性。一次触摸动作(我们值的是手指的触摸)在平面上移动的整个过程中, 该标识符不变。可以根据它来判断跟踪的是否是同一次触摸过程。
             */
            identifier: number;
            /**
             * 触点相对于整体页面的 X 轴距离。
             */
            pageX: number;
            /**
             * 触点相对于整体页面的 Y 轴距离。
             */
            pageY: number;
            /**
             * 触点相对于游戏窗口的 X 轴距离。
             */
            clientX: number;
            /**
             * 触点相对于游戏窗口的 Y 轴距离。
             */
            clientY: number;
        }

        interface TouchData {
            /**
             * 当前事件的类型
             */
            type: string;
            /**
             * 当前所有触摸点的列表
             */
            touches: ReadonlyArray<Touch>;
            /**
             * 触发此次事件的触摸点列表
             */
            changedTouches: ReadonlyArray<Touch>;
            /**
             * 事件触发时的时间戳
             */
            timeStamp: number;
        }

        // --iBeacon（TODO）
        /**
         * 停止搜索附近的 iBeacon 设备
         */
        function stopBeaconDiscovery(param: unknown): void;
        /**
         * 开始搜索附近的 iBeacon 设备
         */
        function startBeaconDiscovery(param: unknown): void;
        /**
         * 监听 iBeacon 设备更新事件，仅能注册一个监听
         */
        function onBeaconUpdate(callback: unknown): void;
        /**
         * 监听 iBeacon 服务状态变化事件，仅能注册一个监听
         */
        function onBeaconServiceChange(callback: unknown): void;
        /**
         * 取消监听 iBeacon 设备更新事件
         */
        function offBeaconUpdate(callback: unknown): void;
        /**
         * 取消监听 iBeacon 服务状态变化事件
         */
        function offBeaconServiceChange(callback: unknown): void;
        /**
         * 获取所有已搜索到的 iBeacon 设备
         */
        function getBeacons(param: unknown): void;
        /*
        IBeaconInfo
        属性
        string uuid
        iBeacon 设备广播的 uuid

        string major
        iBeacon 设备的主 id

        string minor
        iBeacon 设备的次 id

        number proximity
        表示设备距离的枚举值

        number accuracy
        iBeacon 设备的距离

        number rssi
        表示设备的信号强度
        */

        // --低功耗蓝牙（TODO）
        function writeBLECharacteristicValue(): void;
        function readBLECharacteristicValue(): void;
        function onBLEConnectionStateChange(): void;
        function onBLECharacteristicValueChange(): void;
        function notifyBLECharacteristicValueChange(): void;
        function getBLEDeviceServices(): void;
        function getBLEDeviceCharacteristics(): void;
        function createBLEConnection(): void;
        function closeBLEConnection(): void;

        // --蓝牙（TODO）
        function stopBluetoothDevicesDiscovery(): void;
        function startBluetoothDevicesDiscovery(): void;
        function openBluetoothAdapter(): void;
        function onBluetoothDeviceFound(): void;
        function onBluetoothAdapterStateChange(): void;
        function getConnectedBluetoothDevices(): void;
        function getBluetoothDevices(): void;
        function getBluetoothAdapterState(): void;
        function closeBluetoothAdapter(): void;

        // --电量
        interface BatteryInfo {
            /**
             * 设备电量，范围 1 - 100
             */
            level: string;
            /**
             * 是否正在充电
             */
            isCharging: boolean;
        }

        // --剪切板
        interface ClipboardData {
            data: string;
        }

        interface SetClipboardDataParams {
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
            data: string;
        }

        interface SetKeepScreenOnParams {
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
            keepScreenOn: boolean;
        }

        interface SetScreenBrightnessParams {
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
            /**
             * 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮
             */
            value: number;
        }

        interface DownfileParams {
            url: string;
            /**
             * 在指定filePath之后success回调中将不会有res.tempFilePath路径值，下载的文件会直接写入filePath指定的路径（有写入权限的情况下，根目录请使用wx.env.USER_DATA_PATH，路径文件夹必须存在，否则写入失败）
             */
            filePath?: string;
            /**
             *     HTTP 请求的 Header，Header 中不能设置 Referer
             */
            header?: { [key: string]: string };
            /**
             * res.tempFilePath 临时文件路径。如果没传入 filePath 指定文件存储路径，则下载后的文件会存储到一个临时文件
             * res.statusCode 开发者服务器返回的 HTTP 状态码
             */
            success?: (res: { tempFilePath?: string, statusCode: number }) => void;
            fail?: (res: { errMsg: string }) => void;
            complete?: () => void;
        }

        type NetworkType = "wifi" | "2g" | "3g" | "4g" | "unknown" | "none";

        type RequestMethod = "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";

        interface RequestParams {
            /**
             * 开发者服务器接口地址
             */
            url: string;
            /**
             * 请求的参数
             */
            data?: string | { [key: string]: any };
            /**
             * 设置请求的 header，header 中不能设置 Referer
             */
            header?: { [name: string]: string };
            /**
             * HTTP 请求方法
             */
            method?: RequestMethod;
            /**
             * 返回的数据格式
             */
            dataType?: "json" | "arraybuffer";
            /**
             * res.data usually can be string or ArrayBuffer
             */
            success?: (res: { data: any, statusCode: number, header?: { [key: string]: string } }) => void;
            fail?: () => void;
            complete?: () => void;
        }

        interface SocketSendParams {
            data: string | ArrayBuffer;
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
        }
        interface SocketConnectParams {
            url: string;
            protocols?: string[];
            header?: { [key: string]: string };
            method?: RequestMethod;
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
        }
        interface SocketCloseParams {
            /**
             * 一个数字值表示关闭连接的状态号，表示连接被关闭的原因。如果这个参数没有被指定，默认的取值是1000 （表示正常连接关闭）
             */
            code?: number;
            /**
             * 一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于123字节的UTF-8 文本（不是字符）
             */
            reason?: string;
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
        }

        type SocketOpenCallback = (res: { header?: { [key: string]: string } }) => void;
        type SocketMessageCallback = (res: { data: string | ArrayBuffer }) => void;
        type SocketErrorCallback = (res: { errMsg: string }) => void;

        interface UDPSendParams {
            /**
             * 要发消息的地址。可以是一个和本机同网段的 IP 地址，也可以是在安全域名列表内的域名地址
             */
            address: string;
            /**
             * 要发送消息的端口号
             */
            port: number;
            /**
             * 要发送的数据
             */
            message: string | ArrayBuffer;
            /**
             * 发送数据的偏移量，仅当 message 为 ArrayBuffer 类型时有效，默认值0
             */
            offset?: number;
            /**
             * 发送数据的长度，仅当 message 为 ArrayBuffer 类型时有效，默认值message.byteLength
             */
            length?: number;
        }
        interface UDPMessage {
            /**
             * 收到的消息
             */
            message: ArrayBuffer;
            /**
             * 消息来源的结构化信息
             */
            remoteInfo: {
                /**
                 * 发送消息的 socket 的地址
                 */
                address: string;
                /**
                 * 使用的协议族，为 IPv4 或者 IPv6
                 */
                family: string;
                /**
                 * 端口号
                 */
                port: number;
                /**
                 * message 的大小，单位：字节
                 */
                size: number;
            };
        }

        /**
         * wx.getUserInfo的旧版本API参数，随时会被删除，不推荐使用
         */
        interface OldUserInfoParam {
            /**
             * 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
             */
            withCredentials?: boolean;
            /**
             * 显示用户信息的语言
             */
            lang?: "en" | "zh_CN" | "zh_TW";
            success?: (res: {
                /**
                 * 用户信息对象，不包含 openid 等敏感信息
                 */
                userInfo: UserInfo,
                /**
                 * 不包括敏感信息的原始数据字符串，用于计算签名
                 */
                rawData: string,
                /**
                 * 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，参考文档signature(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/http-signature.html?t=201822)
                 */
                signature: string,
                /**
                 * 包括敏感数据在内的完整用户信息的加密数据，详见加密数据解密算法(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/signature.html?t=201822)
                 */
                encryptedData: string,
                /**
                 * 加密算法的初始向量，详见加密数据解密算法(https://mp.weixin.qq.com/debug/wxagame/dev/tutorial/open-ability/signature.html?t=201822)
                 */
                iv: string,
                errMsg: string
            }) => void;
            fail?: () => void;
            complete?: () => void;
        }

        /**
         * 新版本wx.getUserInfo的参数，需要在开放数据域内调用
         */
        interface NewUserInfoParam {
            /**
             * 要获取信息的用户的 openId 数组，如果要获取当前用户信息，则将数组中的一个元素设为 'selfOpenId'
             */
            openIdList?: string[];
            /**
             * 显示用户信息的语言
             */
            lang?: "en" | "zh_CN" | "zh_TW";
            success?: (res: { data: ReadonlyArray<UserInfo> }) => void;
            fail?: () => void;
            complete?: () => void;
        }

        interface UserInfo {
            language: string;
            nickName: string;
            avatarUrl: string;
            /**
             * 0：未知、1：男、2：女
             */
            gender: 0 | 1 | 2;
            country: string;
            province: string;
            city: string;
        }

        type ButtonType = "text" | "image";
        interface ButtonStyle {
            left?: number;
            top?: number;
            width?: number;
            height?: number;
            /**
             * 格式#ff0000
             */
            backgroundColor?: string;
            /**
             * 格式#ff0000
             */
            borderColor?: string;
            borderWidth?: number;
            borderRadius?: number;
            textAlign?: "left" | "center" | "right";
            fontSize?: number;
            lineHeight?: number;
        }

        type GameClubButtonIcon = "green" | "white" | "dark" | "light";

        // --设置
        interface AuthSetting {
            /**
             * 用户信息，对应接口 wx.getUserInfo
             */
            "scope.userInfo"?: boolean;
            /**
             * 地理位置，对应接口 wx.getLocation wx.chooseLocation
             */
            "scope.userLocation"?: boolean;
            /**
             * 通讯地址，对应接口 wx.chooseAddress
             */
            "scope.address"?: boolean;
            /**
             * 发票抬头，对应接口 wx.chooseInvoiceTitle
             */
            "scope.invoiceTitle"?: boolean;
            /**
             * 微信运动步数，对应接口 wx.getWeRunData
             */
            "scope.werun"?: boolean;
            /**
             * 录音功能，对应接口 wx.startRecord
             */
            "scope.record"?: boolean;
            /**
             * 保存到相册 wx.saveImageToPhotosAlbum, wx.saveVideoToPhotosAlbum
             */
            "scope.writePhotosAlbum"?: boolean;
            /**
             * 摄像头 wx.camera
             */
            "scope.camera"?: boolean;
        }

        interface SetStorageParams {
            key: string;
            data: any;
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
        }
        interface RemoveStorageParams {
            key: string;
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
        }
        interface GetStorageParams {
            key: string;
            success?: (res: { data: any }) => void;
            fail?: () => void;
            complete?: () => void;
        }

        interface StorageInfo {
            /**
             * 当前 storage 中所有的 key
             */
            keys: ReadonlyArray<string>;
            /**
             * 当前占用的空间大小, 单位 KB
             */
            currentSize: number;
            /**
             * 限制的空间大小，单位 KB
             */
            limitSize: number;
        }

        interface ShareOption {
            /**
             * 转发标题，不传则默认使用当前小游戏的昵称。
             */
            title?: string;
            /**
             * 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4
             */
            imageUrl?: string;
            /**
             * 查询字符串，必须是 key1=val1&key2=val2 的格式。从这条转发消息进入后，可通过 wx.getLaunchOptionsSync() 或 wx.onShow 获取启动参数中的 query。
             */
            query?: string;
        }

        interface AccelerometerParams {
            interval: "game" | "ui" | "normal";
            success?: () => void;
            fail?: () => void;
            complete?: () => void;
        }

        type AudioSourceType = "auto" | "buildInMic" | "headsetMic" | "mic" | "camcorder";

        interface AdStyle {
            /**
             * 广告组件的左上角横坐标
             */
            left: number;
            /**
             * banner 广告组件的左上角纵坐标
             */
            top: number;
            /**
             * banner 广告组件的宽度。最小 300，最大至 屏幕宽度（屏幕宽度可以通过 wx.getSystemInfoSync() 获取）。
             */
            width: number;
            /**
             * banner 广告组件的高度
             */
            height: number;
            /**
             * banner 广告组件经过缩放后真实的宽度
             */
            realWidth: number;
            /**
             * banner 广告组件经过缩放后真实的高度
             */
            realHeight: number;
        }
    }

    /**
     * 创建一个画布对象。首次调用创建的是显示在屏幕上的画布，之后调用创建的都是离屏画布。
     */
    function createCanvas(): Canvas;

    /**
     * 只有开放数据域能调用，获取主域和开放数据域共享的 sharedCanvas
     */
    function getSharedCanvas(): Canvas;

    /**
     * 创建一个图片对象
     */
    function createImage(): types.Image;

    /**
     * 获取一行文本的行高
     * @param p 字体参数
     */
    function getTextLineHeight(p: types.LineHeightParams): number;

    /**
     * 加载自定义字体文件
     * @param path 字体文件路径。可以是代码包文件路径，也可以是 wxfile:// 协议的本地文件路径。
     */
    function loadFont(path: string): string;

    /**
     * 可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。
     * @param fps 帧率，有效范围 1 - 60。
     */
    function setPreferredFramesPerSecond(fps: number): void;

    // --生命周期
    function exitMiniProgram(cb?: types.Callbacks): void;
    function getLaunchOptionsSync(): types.LaunchOption;
    function onHide(cb: () => void): void;
    function offHide(cb: () => void): void;
    function onShow(cb: (res: { scene: string, query: any, shareTicket: string }) => void): void;
    function offShow(cb: (res: { scene: string, query: any, shareTicket: string }) => void): void;

    // --系统信息
    function getSystemInfo(cb: types.CallbacksWithType<types.SystemInfo>): void;
    function getSystemInfoSync(): types.SystemInfo;

    /**
     * 监听音频中断结束，在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
     */
    function onAudioInterruptionEnd(cb: () => void): void;
    /**
     * 取消监听音频中断结束，在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
     */
    function offAudioInterruptionEnd(cb: () => void): void;
    /**
     * 监听音频因为受到系统占用而被中断开始，以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
     */
    function onAudioInterruptionBegin(cb: () => void): void;
    /**
     * 取消监听音频因为受到系统占用而被中断开始，以下场景会触发此事件：闹钟、电话、FaceTime 通话、微信语音聊天、微信视频聊天。此事件触发后，小程序内所有音频会暂停。
     */
    function offAudioInterruptionBegin(cb: () => void): void;
    /**
     * 监听全局错误事件
     */
    function onError(cb: (res: { message: string, stack: string }) => void): void;
    function offError(cb: (res: { message: string, stack: string }) => void): void;

    // --触摸事件
    /**
     * 监听开始始触摸事件
     */
    function onTouchStart(cb: (res: types.TouchData) => void): void;
    function offTouchStart(cb: (res: types.TouchData) => void): void;
    /**
     * 监听触点移动事件
     */
    function onTouchMove(cb: (res: types.TouchData) => void): void;
    function offTouchMove(cb: (res: types.TouchData) => void): void;
    /**
     * 监听触摸结束事件
     */
    function onTouchEnd(cb: (res: types.TouchData) => void): void;
    function offTouchEnd(cb: (res: types.TouchData) => void): void;
    /**
     * 监听触点失效事件
     */
    function onTouchCancel(cb: (res: types.TouchData) => void): void;
    function offTouchCancel(cb: (res: types.TouchData) => void): void;

    // --加速计
    /**
     * 监听加速度数据，频率：5次/秒，接口调用后会自动开始监听，可使用 wx.stopAccelerometer 停止监听。
     */
    function onAccelerometerChange(cb: (res: { x: number, y: number, z: number }) => void): void;
    /**
     * 开始监听加速度数据。
     */
    function startAccelerometer(cb: types.AccelerometerParams): void;
    /**
     * 停止监听加速度数据。
     */
    function stopAccelerometer(cb?: types.Callbacks): void;

    // --电量
    /**
     * 获取设备电量。同步 API wx.getBatteryInfoSync 在 iOS 上不可用。
     */
    function getBatteryInfo(cb: types.CallbacksWithType<types.BatteryInfo>): void;
    /**
     * IOS上这个同步API无法使用
     */
    function getBatteryInfoSync(): types.BatteryInfo;

    // --剪贴板
    /**
     * 取得系统剪贴板的内容
     */
    function getClipboardData(cb: types.CallbacksWithType<types.ClipboardData>): void;
    /**
     * 设置系统剪贴板的内容
     */
    function setClipboardData(p: types.SetClipboardDataParams): void;

    // --罗盘
    /**
     * 监听罗盘数据，频率：5 次/秒，接口调用后会自动开始监听，可使用 wx.stopCompass 停止监听。
     * @param cb.res.direction 面对的方向度数
     */
    function onCompassChange(cb: (res: { direction: number }) => void): void;
    /**
     * 开始监听罗盘数据
     */
    function startCompass(cb?: types.Callbacks): void;
    /**
     * 停止监听罗盘数据
     */
    function stopCompass(cb?: types.Callbacks): void;

    // --网络
    /**
     * 获取网络类型
     */
    function getNetworkType(cb: types.CallbacksWithType<{ isConnected: boolean, networkType: types.NetworkType }>): void;
    /**
     * 监听网络状态变化事件
     */
    function onNetworkStatusChange(cb: (res: {
        /**
         * 当前是否有网络链接
         */
        isConnected: boolean,
        /**
         * none - 无网络, unknown - Android 下不常见的网络类型
         */
        networkType: types.NetworkType
    }) => void): void;

    // --屏幕
    /**
     * 获取屏幕亮度
     */
    function getScreenBrightness(cb: types.CallbacksWithType<{ value: number }>): void;
    /**
     * 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
     */
    function setKeepScreenOn(p: types.SetKeepScreenOnParams): void;
    /**
     * 设置屏幕亮度
     */
    function setScreenBrightness(p: types.SetScreenBrightnessParams): void;

    // --转屏
    /**
     * 监听横竖屏切换事件
     */
    function onDeviceOrientationChange(callback: (res: { value: string }) => void): void;
    /**
     * 取消监听横竖屏切换事件
     */
    function offDeviceOrientationChange(callback: (res: { value: string }) => void): void;

    // --设备方向
    /**
     * 停止监听设备方向的变化。
     */
    function stopDeviceMotionListening(cb?: types.Callbacks): void;
    /**
     * 开始监听设备方向的变化
     */
    function startDeviceMotionListening(param: {
        /**
         * 开始监听设备方向的变化。默认值normal，
         * game - 适用于更新游戏的回调频率，在 20ms/次 左右
         * ui - 适用于更新 UI 的回调频率，在 60ms/次 左右
         * normal - 普通的回调频率，在 200ms/次 左右
         */
        interval: "game" | "ui" | "normal"
    } & types.Callbacks): void;
    /**
     * 监听设备方向变化事件。频率根据 wx.startDeviceMotionListening() 的 interval 参数。可以使用 wx.stopDeviceMotionListening() 停止监听。
     */
    function onDeviceMotionChange(callback: (res: {
        /**
         * 当 手机坐标 X/Y 和 地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha，范围值为 [0, 2*PI)。逆时针转动为正。
         */
        alpha: number,
        /**
         * 当手机坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。范围值为 [-1*PI, PI) 。顶部朝着地球表面转动为正。也有可能朝着用户为正。
         */
        beta: number,
        /**
         * 当手机 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。范围值为 [-1*PI/2, PI/2)。右边朝着地球表面转动为正。
         */
        gamma: number
    }) => void): void;
    /**
     * 取消监听设备方向变化事件，参数为空，则取消所有的事件监听。
     * @param callback 之前添加过的监听回调函数，如果不指定，则清空所有
     */
    function offDeviceMotionChange(callback?: unknown): void;

    // --陀螺仪
    /**
     * 停止监听陀螺仪数据
     */
    function stopGyroscope(cb?: types.Callbacks): void;
    /**
     * 开始监听陀螺仪数据。
     */
    function startGyroscope(param: {
        /**
         * 开始监听设备方向的变化。默认值normal，
         * game - 适用于更新游戏的回调频率，在 20ms/次 左右
         * ui - 适用于更新 UI 的回调频率，在 60ms/次 左右
         * normal - 普通的回调频率，在 200ms/次 左右
         */
        interval: "game" | "ui" | "normal"
    } & types.Callbacks): void;
    /**
     * 监听陀螺仪数据变化事件。频率根据 wx.startGyroscope() 的 interval 参数。可以使用 wx.stopGyroscope() 停止监听。
     * @param callback 监听函数
     */
    function onGyroscopeChange(callback: (res: {
        /**
         * x 轴的角速度
         */
        x: number,
        /**
         * y 轴的角速度
         */
        y: number,
        /**
         * z 轴的角速度
         */
        z: number
    }) => void): void;
    /**
     * 取消监听陀螺仪数据变化事件。
     * @param callback 之前监听的回调函数
     */
    function offGyroscopeChange(callback: unknown): void;

    // --振动
    /**
     * 使手机发生较短时间的振动（15 ms）
     */
    function vibrateShort(cb?: types.Callbacks): void;
    /**
     * 使手机发生较长时间的振动（400 ms)
     */
    function vibrateLong(cb?: types.Callbacks): void;

    // --文件系统
    function getFileSystemManager(): FileSystemManager;

    // --推荐弹窗
    /**
     * 创建小游戏推荐弹窗组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号 >= 2.7.5 后再使用该 API。每次调用该方法都会返回一个全新的实例。
     */
    function createGamePortal(param: {
        /**
         * 推荐单元 id
         */
        adUnitId: string
    }): unknown /* GamePortal */;  // TODO: GamePortal
    /**
     * 创建小游戏推荐icon组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号 >= 2.8.2 后再使用该 API。每次调用该方法都会返回一个全新的实例。
     */
    function createGameIcon(param: {
        /**
         * 推荐单元 id
         */
        adUnitId: string,
        /**
         * 游戏icon的数量，请注意，正式版下面渲染出来的icon数量会小于等于count，请注册做好样式兼容
         */
        count: number,
        /**
         * 数组的每一项可以针对对应的icon设置位置和样式等信息，style的每一项称为styleItem
         */
        style: ReadonlyArray<{
            /**
             * 游戏名称是否隐藏
             */
            appNameHidden: boolean,
            /**
             * 游戏名称的颜色色值
             */
            color: string,
            /**
             * 游戏icon的宽高值
             */
            size: number,
            /**
             * 游戏icon的border尺寸
             */
            borderWidth: number,
            /**
             * 游戏icon的border颜色色值
             */
            borderColor: string,
            /**
             * 游戏icon的X轴坐标
             */
            left: number,
            /**
             * 游戏icon的Y轴坐标
             */
            top: number
        }>
    }): unknown /* GameIcon */;  // TODO: GameIcon
    /**
     * 创建小游戏推荐banner组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号 >= 2.7.5 后再使用该 API。每次调用该方法都会返回一个全新的实例。
     */
    function createGameBanner(param: {
        /**
         * 推荐单元 id
         */
        adUnitId: string,
        /**
         * 小游戏推荐banner组件样式
         */
        style: {
            /**
             * 小游戏推荐banner组件左上角横坐标
             */
            left: number,
            /**
             * 小游戏推荐banner组件左上角纵坐标
             */
            top: number
        }
    }): unknown /* GameBanner */; // TODO: GameBanner

    // --游戏对局回放
    /**
     * 获取全局唯一的游戏画面录制对象
     */
    function getGameRecorder(): unknown /* GameRecorder */;  // TODO: GameRecorder
    /**
     * 创建游戏对局回放分享按钮，返回一个单例对象。按钮在被用户点击后会发起对最近一次录制完成的游戏对局回放的分享。
     */
    function createGameRecorderShareButton(): unknown /* GameRecorderShareButton */;  // TODO: GameRecorderShareButton

    // --第三方平台
    /**
     * 获取第三方平台自定义的数据字段。
     * Tips: 本接口暂时无法通过 wx.canIUse 判断是否兼容，开发者需要自行判断 wx.getExtConfig 是否存在来兼容，示例：
     *       if (wx.getExtConfig) {
     *          wx.getExtConfig({
     *              success (res) {
     *                  console.log(res.extConfig)
     *              }
     *         })
     *       }
     */
    function getExtConfig(callbacks: types.CallbacksWithType<{
        /**
         * 第三方平台自定义的数据
         */
        extConfig: unknown
    }>): void;
    /**
     * wx.getExtConfig 的同步版本。
     */
    function getExtConfigSync(): unknown;

    /**
     * 系统环境变量
     */
    const env: {
        /**
         * 用户下载数据根目录
         */
        USER_DATA_PATH: string
    };

    // --位置
    /**
     * 获取当前的地理位置、速度。当用户离开小程序后，此接口无法调用；当用户点击“显示在聊天顶部”时，此接口可继续调用。
     */
    function getLocation(param: {
        /**
         * wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
         */
        type?: "wgs84" | "gcj02",
        /**
         * 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度    >= 1.6.0
         */
        altitude?: boolean,
        success?: (res: {
            /**
             * 纬度，范围为 -90~90，负数表示南纬
             */
            latitude: number,
            /**
             * 经度，范围为 -180~180，负数表示西经
             */
            longitude: number,
            /**
             * 速度，单位 m/s
             */
            speed: number,
            /**
             * 位置的精确度
             */
            accuracy: number,
            /**
             * 高度，单位 m
             */
            altitude: number,
            /**
             * 垂直精度，单位 m（Android 无法获取，返回 0）
             */
            verticalAccuracy: number,
            /**
             * 水平精度，单位 m
             */
            horizontalAccuracy: number
        }) => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    // --网络
    /**
     * 下载文件
     */
    function downloadFile(param: types.DownfileParams): DownloadTask;

    // --发起请求
    function request(param: types.RequestParams): RequestTask;

    // --websocket
    /**
     * 创建一个 WebSocket 连接。最多同时存在 5 个 WebSocket 连接。
     */
    function connectSocket(param: types.SocketConnectParams): SocketTask;
    /**
     * 关闭WebSocket
     */
    function closeSocket(param: types.SocketCloseParams): void;
    /**
     * 监听WebSocket 连接打开事件
     */
    function onSocketOpen(callback: types.SocketOpenCallback): void;
    /**
     * 监听WebSocket 连接关闭事件
     */
    function onSocketClose(callback: () => void): void;
    /**
     * 监听WebSocket 接受到服务器的消息事件
     */
    function onSocketMessage(callback: types.SocketMessageCallback): void;
    /**
     * 监听WebSocket 错误事件
     */
    function onSocketError(callback: types.SocketErrorCallback): void;
    /**
     * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
     */
    function sendSocketMessage(param: types.SocketSendParams): void;

    // --UDP通信
    /**
     * 创建一个 UDP Socket 实例
     */
    function createUDPSocket(): UDPSocket;

    // --上传
    function uploadFile(param: {
        /**
         * 开发者服务器地址
         */
        url: string,
        /**
         * 要上传文件资源的路径
         */
        filePath: string,
        /**
         * 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
         */
        name: string,
        /**
         * HTTP 请求 Header，Header 中不能设置 Referer
         */
        header?: { [key: string]: string },
        /**
         * HTTP 请求中其他额外的 form data
         */
        formData?: { [key: string]: any },
        success?: (res: { data: string, statusCode: number }) => void,
        fail?: () => void,
        complete?: () => void
    }): UploadTask;

    // --开放数据
    /**
     * 拉取当前用户所有同玩好友的托管数据。该接口只可在开放数据域下使用
     */
    function getFriendCloudStorage(param: {
        /**
         * 要拉取的 key 列表
         */
        keyList: string[],
        success?: (res: { data: ReadonlyArray<UserGameData> }) => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 获取当前用户托管数据当中对应 key 的数据。该接口只可在开放数据域下使用
     */
    function getUserCloudStorage(param: {
        /**
         * 要拉取的 key 列表
         */
        keyList: string[],
        success?: (res: { KVDataList: ReadonlyArray<KVData> }) => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    /**
     * 在无须用户授权的情况下，批量获取用户信息。该接口只在开放数据域下可用
     * 请注意！！旧版本的该接口已过期，微信不允许主动弹出授权框，旧版本API会被逐渐作废，请使用wx.createUserInfoButton或在隔离数据区取得用户信息
     * 如使用旧接口取得用户信息，withCredentials 为 true 时需要先调用 wx.login 接口。需要用户授权 scope.userInfo
     */
    function getUserInfo(param: types.NewUserInfoParam | types.OldUserInfoParam): void;
    /**
     * 在小游戏是通过群分享卡片打开的情况下，可以通过调用该接口获取群同玩成员的游戏数据。该接口只可在开放数据域下使用。
     */
    function getGroupCloudStorage(param: {
        /**
         * 群分享对应的 shareTicket
         */
        shareTicket: string,
        /**
         * 要拉取的 key 列表
         */
        keyList: string[],
        success?: (res: { data: ReadonlyArray<UserGameData> }) => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 删除用户托管数据当中对应 key 的数据。
     */
    function removeUserCloudStorage(param: {
        /**
         * 要删除掉 key 列表
         */
        keyList: string[],
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 对用户托管数据进行写数据操作，允许同时写多组 KV 数据。
     * 托管数据的限制
     *      > 每个openid所标识的微信用户在每个游戏上托管的数据不能超过128个key-value对。
     *      > 上报的key-value列表当中每一项的key+value长度都不能超过1K(1024)字节。
     *      > 上报的key-value列表当中每一个key长度都不能超过128字节。
     */
    function setUserCloudStorage(param: {
        /**
         * 要修改的 KV 数据列表
         */
        KVDataList: ReadonlyArray<KVData>,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用
     * @param callback 事件发生的回调函数，只有一个参数为 wx.modifyFriendInteractiveStorage 传入的 key
     */
    function onInteractiveStorageModified(callback: (key: string) => void): void;
    /**
     * 修改好友的互动型托管数据，该接口只可在开放数据域下使用，示例代码：
     * wx.modifyFriendInteractiveStorage({
     *     key: '1',
     *     opNum: 1,
     *     operation: 'add',
     *     toUser: '', // 好友的 openId
     *     title: '送你 10 个金币，赶快打开游戏看看吧', // 2.9.0 支持
     *     imageUrl: 'image/xxx' // 2.9.0 支持
     * });
     *
     * 赠送动作的校验：
     *     调用该接口需要上传 JSServer 函数 "checkInteractiveData"，该函数可用于执行赠送动作的校验逻辑，校验通过后返回结果表示本次赠送是否合法。只有 checkInteractiveData 返回了 {ret: true}，此次修改才会成功。
     *
     * 使用模板规则进行交互：
     *     每次调用该接口会弹窗询问用户是否确认执行该操作，2.9.0 之后版本，需要在 game.json 中设置 modifyFriendInteractiveStorageTemplates 来定制交互的文案。
     *     modifyFriendInteractiveStorageTemplates是一个模板数组，每一个模板需要有 key, action, object 参数，还有一个可选参数 ratio，详细说明见示例配置：
     *         {
     *             "modifyFriendInteractiveStorageTemplates": [
     *                  {
     *                      "key": "1", // 这个 key 与接口中同名参数相对应，不同的 key 对应不同的模板
     *                      "action": "赠送", // 互动行为
     *                      "object": "金币", // 互动物品
     *                      "ratio": 10 // 物品比率，opNum * ratio 代表物品个数
     *                  }
     *              ]
     *          }
     *     最后生成的文案为 "确认 ${action} ${nickname} ${object}？"，或者 "确认 ${action} ${nickname} ${object} x ${opNum * ratio}？"
     *
     * 使用自定义文案进行交互：
     *     2.7.7 之后，2.9.0 之前的版本，文案通过 game.json 的 modifyFriendInteractiveStorageConfirmWording 字段配置。 配置内容可包含 nickname 变量，用 ${nickname} 表示，实际调用时会被替换成好友的昵称。示例配置：
     *         {
     *             "modifyFriendInteractiveStorageConfirmWording": "确认送给${nickname}一个体力？"
     *         }
     *     2.9.0 之后，在 modifyFriendInteractiveStorageTemplates 和 modifyFriendInteractiveStorageConfirmWording 都存在的情况下，会优先使用前者。
     */
    function modifyFriendInteractiveStorage(param: {
        /**
         * 需要修改的数据的 key，目前可以为 '1' - '50'
         */
        key: string,
        /**
         * 需要修改的数值，目前只能为 1
         */
        opNum: number,
        /**
         * 修改类型
         */
        operation: "add",
        /**
         * 目标好友的 openId
         */
        toUser?: string
        /**
         * 分享标题，如果设置了这个值，则在交互成功后自动询问用户是否分享给好友（需要配置模板规则）
         */
        title?: string
        /**
         * 分享图片地址，详见 wx.shareMessageToFriend 同名参数（需要配置模板规则）
         */
        imageUrl?: string,
        /**
         * 分享图片 ID，详见 wx.shareMessageToFriend 同名参数（需要配置模板规则）
         */
        imageUrlId?: string,
        /**
         * 是否静默修改（不弹框），静默修改需要用户通过快捷分享消息卡片进入才有效，代表分享反馈操作，无需填写 toUser，直接修改分享者与被分享者交互数据
         * 默认值false
         */
        quiet?: boolean,
        success?: () => void;
        fail?: (res: {
            /**
             * 错误信息
             */
            errMsg: string,
            /**
             * 错误码
             *     -17006    非好友关系
             *     -17007    非法的 toUser openId
             *     -17008    非法的 key
             *     -17009    非法的 operation
             *     -17010    非法的操作数
             *     -17011    JSServer 校验写操作失败
             */
            errCode: number
        }) => void;
        complete?: () => void;
    }): void;
    /**
     * 获取当前用户互动型托管数据对应 key 的数据
     */
    function getUserInteractiveStorage(param: {
        /**
         * 要获取的 key 列表
         */
        keyList: string[]
    } & types.CallbacksWithType2<{
        /**
         * 加密数据，包含互动型托管数据的值。解密后的结果为一个 KVDataList，每一项为一个 KVData。 用户数据的签名验证和加解密
         */
        encryptedData: string,
        /**
         * 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据，详细见云调用直接获取开放数据
         */
        cloudID: string
    }, {
        /**
         * 错误信息
         */
        errMsg: string,
        /**
         * 错误码
         *     -17008 非法的 key
         */
        errCode: number
    }>): void;
    /**
     * 获取可能对游戏感兴趣的未注册的好友名单。每次调用最多可获得 5 个好友，此接口只能在开放数据域中使用
     */
    function getPotentialFriendList(callback: types.CallbacksWithType<{
        /**
         * 可能对游戏感兴趣的未注册好友名单
         */
        list: ReadonlyArray<{
            /**
             * 用户的微信头像 url
             */
            avatarUrl: string,
            /**
             * 用户的微信昵称
             */
            nickname: string,
            /**
             * 用户 openid
             */
            openid: string
        }>
    }>): void;

    // --登录
    /**
     * 通过 wx.login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由微信维护，对开发者透明。开发者只需要调用 wx.checkSession 接口检测当前用户登录态是否有效。登录态过期后开发者可以再调用 wx.login 获取新的用户登录态。
     */
    function checkSession(cb: types.Callbacks): void;
    /**
     * 调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。
     */
    function login(cb: types.CallbacksWithType<{
        /**
         * 用户登录凭证（有效期五分钟）。开发者需要在开发者服务器后台调用 code2accessToken，使用 code 换取 openid 和 session_key 等信息
         */
        code: string
    }>): void;

    // --防沉迷
    /**
     * 根据用户当天游戏时间判断用户是否需要休息
     */
    function checkIsUserAdvisedToRest(param: {
        /**
         * 今天已经玩游戏的时间，单位：秒
         */
        todayPlayedTime: number,
        success?: (res: {
            /**
             * 是否建议用户休息
             */
            result: boolean
        }) => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    // --小程序跳转
    /**
     * 打开另一个小程序
     * @param param 跳转参数
     */
    function navigateToMiniProgram(param: {
        /**
         * 要打开的小程序 appId
         */
        appId: string,
        /**
         * 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 App.onLaunch、App.onShow
         * 和 Page.onLoad 的回调函数或小游戏的 wx.onShow 回调函数、wx.getLaunchOptionsSync 中可以获取到 query 数据。
         * 对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar"。
         */
        path?: string,
        /**
         * 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据。如果跳转的是小游戏，可以在 wx.onShow、wx.getLaunchOptionsSync 中可以获取到这份数据数据。
         */
        extraData?: unknown,
        /**
         * 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版。默认值release
         * develop    开发版
         * trial    体验版
         * release    正式版
         */
        envVersion?: "develop" | "trial" | "release"
    } & types.Callbacks): void;

    // --用户信息
    function createUserInfoButton(param: {
        /**
         * 按钮类型
         */
        type: types.ButtonType,
        /**
         * 按钮上的文本，仅当 type 为 text 时有效
         */
        text?: string,
        /**
         * 按钮的背景图片，仅当 type 为 image 时有效
         */
        image?: string,
        /**
         * 按钮的样式
         */
        style?: types.ButtonStyle,
        /**
         * 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息。
         */
        withCredentials?: boolean,
        lang?: "en" | "zh_CN" | "zh_TW"
    }): UserInfoButton;

    // --设置
    /**
     * 创建打开设置页面的按钮
     */
    function createOpenSettingButton(param: {
        /**
         * 按钮类型
         */
        type: types.ButtonType,
        /**
         * 按钮上的文本，仅当 type 为 text 时有效
         */
        text?: string,
        /**
         * 按钮的背景图片，仅当 type 为 image 时有效
         */
        image?: string,
        /**
         * 按钮的样式
         */
        style?: types.ButtonStyle
    }): OpenSettingButton;
    /**
     * 获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限。
     */
    function getSetting(p: types.CallbacksWithType<{ authSetting: types.AuthSetting }>): void;
    /**
     * 调起客户端小程序设置界面，返回用户设置的操作结果。设置界面只会出现小程序已经向用户请求过的权限。
     * @deprecated
     */
    function openSetting(p: types.CallbacksWithType<{ authSetting: types.AuthSetting }>): void;

    // --微信运动
    /**
     * 获取用户过去三十天微信运动步数，需要先调用 wx.login 接口。需要用户授权 scope.werun。
     */
    function getWeRunData(p: types.CallbacksWithType<{
        /**
         * 包括敏感数据在内的完整用户信息的加密数据，详细见加密数据解密算法
         */
        encryptedData: string,
        /**
         * 加密算法的初始向量
         */
        iv: string
    }>): void;

    // --卡券
    /**
     * 查看微信卡包中的卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用。更多文档请参考：微信卡券接口文档（https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2）
     */
    function openCard(param: {
        /**
         * 需要打开的卡券列表
         */
        cardList: ReadonlyArray<{
            /**
             * 卡券 ID
             */
            cardId: string,
            /**
             * 由 wx.addCard 的返回对象中的加密 code 通过解密后得到，解密请参照：code 解码接口（https://developers.weixin.qq.com/doc/offiaccount/Cards_and_Offer/Coupons-Mini_Program_Start_Up.html）
             */
            code: string
        }>
    } & types.CallbacksWithType<unknown>): void;  // TODO: success回调里的res的结构官方文档没写
    /**
     * 批量添加卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用。更多文档请参考 微信卡券接口文档（https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1490190158&version=1&lang=zh_CN&platform=2）。
     */
    function addCard(param: {
        /**
         * 需要添加的卡券列表
         */
        cardList: ReadonlyArray<{
            /**
             * 卡券 ID
             */
            cardId: string,
            /**
             * 卡券的扩展参数。需将 CardExt 对象 JSON 序列化为字符串传入
             */
            cardExt: string
        }>
    } & types.CallbacksWithType<{
        /**
         * 卡券添加结果列表
         */
        cardList: ReadonlyArray<{
            /**
             * 加密 code，为用户领取到卡券的code加密后的字符串，解密请参照：code 解码接口
             */
            code: string,
            /**
             * 用户领取到卡券的 ID
             */
            cardId: string,
            /**
             * 卡券的扩展参数，值为一个 JSON 字符串
             */
            cardExt: string,
            /**
             * 是否成功
             */
            isSuccess: boolean
        }>
    }>): void;

    // --授权
    /**
     * 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
     */
    function authorize(param: {
        /**
         * 需要获取权限的 scope
         */
        scope: string,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    // --游戏圈
    /**
     * 创建游戏圈按钮。游戏圈按钮被点击后会跳转到小游戏的游戏圈。更多关于游戏圈的信息见 游戏圈使用指南
     */
    function createGameClubButton(param: {
        type: types.ButtonType,
        text?: string,
        image?: string,
        style?: types.ButtonStyle,
        /**
         * 游戏圈按钮的图标，仅当 object.type 参数为 image 时有效
         */
        icon?: types.GameClubButtonIcon
    }): GameClubButton;

    // --意见反馈
    /**
     * 用户点击后打开意见反馈页面的按钮
     */
    function createFeedbackButton(param: {
        type: types.ButtonType,
        text?: string,
        image?: string,
        style?: types.ButtonStyle
    }): FeedbackButton;

    // --客服消息
    /**
     * 进入客服会话，要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致，详见 客服消息接入
     */
    function openCustomerServiceConversation(param: {
        /**
         * 会话来源
         */
        sessionFrom?: string,
        /**
         * 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话之后会收到一个消息卡片，通过以下三个参数设置卡片的内容
         */
        showMessageCard?: boolean,
        /**
         * 会话内消息卡片标题
         */
        sendMessageTitle?: string,
        /**
         * 会话内消息卡片路径
         */
        sendMessagePath?: string,
        /**
         * 会话内消息卡片图片路径
         */
        sendMessageImg?: string,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    // --开放数据域
    /**
     * 获取开放数据域
     */
    function getOpenDataContext(): OpenDataContext;
    /**
     * 监听主域发送的消息
     */
    function onMessage(callback: (data: any) => void): void;

    // --转发
    /**
     * 获取转发详细信息
     */
    function getShareInfo(param: {
        shareTicket: string,
        success?: (res: {
            /**
             * 错误信息
             */
            errMsg: string,
            /**
             * 包括敏感数据在内的完整转发信息的加密数据
             */
            encryptedData: string,
            /**
             * 加密算法的初始向量
             */
            iv: string
        }) => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 隐藏转发按钮
     */
    function hideShareMenu(cb?: types.Callbacks): void;
    /**
     * 监听用户点击右上角菜单的“转发”按钮时触发的事件
     */
    function onShareAppMessage(cb: () => types.ShareOption): void;
    /**
     * 取消监听用户点击右上角菜单的“转发”按钮时触发的事件
     */
    function offShareAppMessage(cb: () => types.ShareOption): void;
    /**
     * 显示当前页面的转发按钮
     */
    function showShareMenu(param?: {
        /**
         * 是否使用带 shareTicket 的转发
         */
        withShareTicket: boolean,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 主动拉起转发，进入选择通讯录界面。
     */
    function shareAppMessage(param: types.ShareOption): void;
    /**
     * 设置 wx.shareMessageToFriend 接口 query 字段的值
     * @param param 设置参数
     * @returns 是否设置成功
     */
    function setMessageToFriendQuery(param: {
        /**
         * 需要传递的代表场景的数字，需要在 0 - 50 之间
         */
        shareMessageToFriendScene: number;
    }): boolean;
    /**
     * 给指定的好友分享游戏信息，该接口只可在开放数据域下使用
     * 定向分享不允许直接在开放数据域设置 query 参数 需要设置时请参见游戏域 wx.setMessageToFriendQuery 接口
     * @param param 分享参数
     */
    function shareMessageToFriend(param: {
        /**
         * 发送对象的 openId
         */
        openId: string,
        /**
         * 转发标题，不传则默认使用当前小游戏的昵称。
         */
        title?: string,
        /**
         * 转发显示图片的链接，可以是网络图片路径或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4
         */
        imageUrl?: string
        /**
         * 审核通过的图片 ID，详见 使用审核通过的转发图片（https://developers.weixin.qq.com/minigame/dev/guide/open-ability/sh
         * are/share.html#%E4%BD%BF%E7%94%A8%E5%AE%A1%E6%A0%B8%E9%80%9A%E8%BF%87%E7%9A%84%E8%BD%AC%E5%8F%91%E5%9B%BE%E7%89%87）
         */
        imageUrlId?: string
    }): void;
    /**
     * 更新转发属性
     */
    function updateShareMenu(param: {
        /**
         * 是否使用带 shareTicket 的转发详情
         */
        withShareTicket: boolean,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    // --性能
    /**
     * 获取性能管理器
     */
    function getPerformance(): WxPerformance;
    /**
     * 加快触发 JavaScriptCore Garbage Collection（垃圾回收），GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
     */
    function triggerGC(): void;
    /**
     * 监听内存不足告警
     * @param callback.res.level 内存告警等级，只有 Android 才有，对应系统宏定义:
     *                           10 TRIM_MEMORY_RUNNING_LOW
     *                           15 TRIM_MEMORY_RUNNING_CRITICAL
     */
    function onMemoryWarning(callback: (res: { level: number }) => void): void;

    /**
     * 标记自定义场景
     * @param sceneId 在管理后台配置过的场景ID
     */
    function markScene(sceneId: number): void;

    // --调试
    function setEnableDebug(p: {
        enableDebug: boolean,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    /**
     * 获取日志管理器对象
     * @param param 初始化时的参数
     */
    function getLogManager(param?: {
        /**
         * 取值为0或1，取值为0时会把 App、Page 的生命周期函数和 wx 命名空间下的函数调用写入日志，取值为1则不会。
         * 默认值是 0
         */
        level?: 0 | 1
    }): LogManager;

    // --数据上报
    /**
     * 自定义业务数据监控上报接口。
     * 使用前，需要在「小程序管理后台-运维中心-性能监控-业务数据监控」中新建监控事件，配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。
     * @param name 监控ID，在「小程序管理后台」新建数据指标后获得
     * @param value 上报数值，经处理后会在「小程序管理后台」上展示每分钟的上报总量
     */
    function reportMonitor(name: string, value: number): void;

    // --订阅消息
    /**
     * 调起小游戏订阅消息界面，返回用户订阅消息的操作结果。（需要在 touchend 事件的回调中调用）
     */
    function requestSubscribeMessage(param: {
        /**
         * 需要订阅的消息模板的id的集合（注意：iOS客户端7.0.6版本、Android客户端7.0.7版本之后的一次订阅才支持多个模板消息，iOS客户端7.0.5版本、Android客户端7.0.6版本之前的一次订阅
         * 只支持一个模板消息）消息模板id在[微信公众平台(mp.weixin.qq.com)-功能-订阅消息]中配置
         */
        tmplIds: ReadonlyArray<string>;
    } & types.CallbacksWithType2<{
        /**
         * 接口调用成功时errMsg值为'requestSubscribeMessage:ok'
         */
        errMsg: string;
        /**
         * [TEMPLATE_ID]是动态的键，即模板id，值包括'accept'、'reject'、'ban'。'accept'表示用户同意订阅该条id对应的模板消息，'reject'表示用户拒绝订阅该条id对应的模板消息，'ban'表示
         * 已被后台封禁。例如 { errMsg: "requestSubscribeMessage:ok", zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE: "accept"} 表示用户同意订阅zun-LzcQyW-edafCVvzPkK4de2Rllr1fFpw2A_x0oXE这条消息
         */
        [TEMPLATE_ID: string]: 'accept' | 'reject' | 'ban' | string;
    }, {
        /**
         * 接口调用失败错误信息
         */
        errMsg: string;
        /**
         * 接口调用失败错误码
         */
        errCode: number;
    }>): void;

    // --数据缓存
    /**
     * 清理本地数据缓存
     */
    function clearStorage(param: types.Callbacks): void;
    /**
     * clearStorage的同步版本
     */
    function clearStorageSync(): void;
    /**
     * 从本地缓存中异步获取指定 key 的内容
     */
    function getStorage(param: types.GetStorageParams): void;
    /**
     * getStorage 的同步版本
     */
    function getStorageSync(key: string): any;
    /**
     * 异步获取当前storage的相关信息
     */
    function getStorageInfo(param: types.CallbacksWithType<types.StorageInfo>): void;
    /**
     * getStorageInfo 的同步版本
     */
    function getStorageInfoSync(): types.StorageInfo;
    /**
     * 从本地缓存中移除指定 key
     */
    function removeStorage(param: types.RemoveStorageParams): void;
    /**
     * removeStorage 的同步版本
     * @param key 本地缓存中指定的 key
     */
    function removeStorageSync(key: string): void;
    /**
     * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容。
     */
    function setStorage(param: types.SetStorageParams): void;
    /**
     * setStorage 的同步版本
     * @param key 本地缓存中指定的 key
     * @param data 需要存储的内容
     */
    function setStorageSync(key: string, data: any): void;

    // --分包加载
    /**
     * 触发分包加载，详见 分包加载
     */
    function loadSubpackage(param: {
        /**
         * 分包的名字，可以填 name 或者 root
         */
        name: string,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): LoadSubpackageTask;

    // --菜单
    /**
     * 获取菜单按钮的布局置信息
     */
    function getMenuButtonBoundingClientRect(): {
        /**
         * 宽度
         */
        width: number,
        /**
         * 高度
         */
        height: number,
        /**
         * 上边界坐标
         */
        top: number,
        /**
         * 右边界坐标
         */
        right: number,
        /**
         * 下边界坐标
         */
        bottom: number,
        /**
         * 左边界坐标
         */
        left: number
    };
    function setMenuStyle(param: {
        /**
         * 样式风格
         */
        style: "light" | "dark",
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    // --交互
    /**
     * 显示消息提示框
     */
    function showToast(param: {
        /**
         * 提示的内容
         */
        title?: string,
        /**
         * 图标
         */
        icon?: "success" | "loading",
        /**
         * 自定义图标的本地路径，image 的优先级高于 icon
         */
        image?: string,
        /**
         * 提示的延迟时间
         */
        duration?: number,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 隐藏消息提示框
     */
    function hideToast(cb?: types.Callbacks): void;
    /**
     * 显示模态对话框
     */
    function showModal(param: {
        /**
         * 提示的标题
         */
        title?: string,
        /**
         * 提示的内容
         */
        content?: string,
        /**
         * 是否显示取消按钮，默认true
         */
        showCancel?: boolean,
        /**
         * 取消按钮的文字，最多 4 个字符串
         */
        cancelText?: string,
        /**
         * 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串，默认值#000000
         */
        cancelColor?: string,
        /**
         * 确认按钮的文字，最多 4 个字符串
         */
        confirmText?: string,
        /**
         * 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串，默认值#3cc51f
         */
        confirmColor?: string,
        success?: (res: { confirm?: boolean, cancel?: boolean }) => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
     */
    function showLoading(prms?: {
        /**
         * 提示的内容
         */
        title?: string,
        /**
         * 是否显示透明蒙层
         */
        mask?: boolean,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 隐藏 loading 提示框
     */
    function hideLoading(cb?: types.Callbacks): void;
    /**
     * 显示选择器
     */
    function showActionSheet(params: {
        /**
         * 按钮的文字数组，数组长度最大为 6
         */
        itemList: string[],
        /**
         * 按钮的文字颜色，默认值#000000
         */
        itemColor?: string,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    // --键盘
    function hideKeyboard(): void;
    /**
     * 监听键盘输入事件
     * @param callback.res.value 键盘输入的当前值
     */
    function onKeyboardInput(callback: (res: { value: string }) => void): void;
    /**
     * 取消监听键盘输入事件
     */
    function offKeyboardInput(callback: (res: { value: string }) => void): void;
    /**
     * 监听用户点击键盘 Confirm 按钮时的事件
     * @param callback.res.value 键盘输入的当前值
     */
    function onKeyboardConfirm(callback: (res: { value: string }) => void): void;
    /**
     * 取消监听用户点击键盘 Confirm 按钮时的事件
     */
    function offKeyboardConfirm(callback: (res: { value: string }) => void): void;
    /**
     * 监听监听键盘收起的事件
     * @param callback.res.value 键盘输入的当前值
     */
    function onKeyboardComplete(callback: (res: { value: string }) => void): void;
    /**
     * 取消监听监听键盘收起的事件
     */
    function offKeyboardComplete(callback: (res: { value: string }) => void): void;
    /**
     * 显示键盘
     */
    function showKeyboard(param: {
        /**
         * 键盘输入框显示的默认值
         */
        defaultValue: string,
        /**
         * 键盘中文本的最大长度
         */
        maxLength?: number,
        /**
         * 是否为多行输入
         */
        multiple?: boolean,
        /**
         * 当点击完成时键盘是否收起
         */
        confirmHold?: boolean,
        /**
         * 键盘右下角 confirm 按钮的类型，只影响按钮的文本内容
         */
        confirmType?: "done" | "next" | "search" | "go" | "send"
    }): void;
    /**
     * 更新键盘，只有当键盘处于拉起状态时才会产生效果
     */
    function updateKeyboard(param: {
        /**
         * 键盘输入框的当前值
         */
        value: string,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    // --状态栏
    /**
     * 当在配置中设置 showStatusBarStyle 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。
     */
    function setStatusBarStyle(param: {
        style: "white" | "black",
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    // --窗口
    /**
     * 监听窗口尺寸变化事件
     */
    function onWindowResize(cb: (res: { windowWidth: number, windowHeight: number }) => void): void;
    /**
     * 取消监听窗口尺寸变化事件
     */
    function offWindowResize(cb: (res: { windowWidth: number, windowHeight: number }) => void): void;

    // --更新
    function getUpdateManager(): UpdateManager;

    // --Worker
    /**
     * 创建一个 Worker 线程，目前限制最多只能创建一个 Worker，创建下一个 Worker 前请调用 Worker.terminate
     */
    function createWorker(): WxWorker;

    // --音频
    /**
     * 创建一个 InnerAudioContext 实例
     */
    function createInnerAudioContext(): InnerAudioContext;
    /**
     * 获取当前支持的音频输入源
     */
    function getAvailableAudioSources(param: types.CallbacksWithType<{
        /**
         * 音频输入源，每一项对应一种音频输入源
         */
        audioSources: ReadonlyArray<types.AudioSourceType>
    }>): void;

    // --录音
    function getRecorderManager(): RecorderManager;

    // --图片
    /**
     * 从本地相册选择图片或使用相机拍照。
     */
    function chooseImage(param: {
        count: number,
        /**
         * 所选的图片的尺寸
         */
        sizeType: ['original'] | ['compressed'] | ['original', 'compressed'],
        /**
         * 选择图片的来源
         */
        sourceType: ['album'] | ['camera'] | ['album', 'camera'],
        success?: (res: { tempFilePaths: ReadonlyArray<string>, tempFiles: ReadonlyArray<ImageFile> }) => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 预览图片，调用之后会在新打开的页面中全屏预览传入的图片，预览的过程中用户可以进行保存图片、发送给朋友等操作
     */
    function previewImage(param: {
        /**
         * 需要预览的图片链接列表
         */
        urls: string[],
        /**
         * 当前显示图片的链接，默认为urls的第一张
         */
        current?: string,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;
    /**
     * 保存图片到系统相册。需要用户授权 scope.writePhotosAlbum
     */
    function saveImageToPhotosAlbum(param: {
        /**
         * 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
         */
        filePath: string,
        success?: () => void,
        fail?: () => void,
        complete?: () => void
    }): void;

    // --视频
    function createVideo(param: {
        /**
         * 视频的左上角横坐标
         */
        x?: number,
        /**
         * 视频的左上角纵坐标
         */
        y?: number,
        /**
         * 视频的宽度，默认值300
         */
        width?: number,
        /**
         * 默认值150
         */
        height?: number,
        /**
         * 视频的资源地址
         */
        src: string,
        /**
         * 视频的封面
         */
        poster?: string,
        /**
         * 视频的初始播放位置，单位为 s 秒，默认值0
         */
        initialTime?: number,
        /**
         * 视频的播放速率，有效值有 0.5、0.8、1.0、1.25、1.5默认值1.0
         */
        playbackRate?: number,
        /**
         * 视频是否为直播，默认值0
         */
        live?: number,
        /**
         * 视频的缩放模式
         * fill - 填充，视频拉伸填满整个容器，不保证保持原有长宽比例
         * contain - 包含，保持原有长宽比例。保证视频尺寸一定可以在容器里面放得下。因此，可能会有部分空白
         * cover - 覆盖，保持原有长宽比例。保证视频尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，视频有部分会看不见
         */
        objectFit?: "contain" | "cover" | "fill",
        /**
         * 视频是否显示控件，默认true
         */
        controls?: boolean,
        /**
         * 视频是否自动播放，默认false
         */
        autoplay?: boolean,
        /**
         * 视频是否是否循环播放，默认值false
         */
        loop?: boolean,
        /**
         * 视频是否禁音播放，默认值false
         */
        muted?: boolean
    }): Video;

    // --相机
    /**
     * 创建相机
     * @param param 创建相机所需的初始化信息
     */
    function createCamera(param?: types.Callbacks & {
        /**
         * 相机的左上角横坐标，默认值0
         */
        x?: number;
        /**
         * 相机的左上角纵坐标，默认值0
         */
        y?: number;
        /**
         * 相机的宽度，默认值300
         */
        width?: number;
        /**
         * 相机的高度，默认值150
         */
        height?: number;
        /**
         * 摄像头朝向，值为 front, back，默认值back
         */
        devicePosition?: "front" | "back";
        /**
         * 闪光灯，值为 auto, on, off，默认值auto
         */
        flash?: "auto" | "on" | "off";
        /**
         * 帧数据图像尺寸，值为 small, medium, large，默认值small
         */
        size?: "small" | "medium" | "large";
    }): Camera;

    // -- VoIP
    /**
     * 更新实时语音静音设置
     * @param param 静音设置
     */
    function updateVoIPChatMuteConfig(param: types.Callbacks & {
        /**
         * 静音设置
         */
        muteConfig: {
            /**
             * 是否静音麦克风，默认值false
             */
            muteMicrophone?: boolean,
            /**
             * 是否静音耳机，默认值false
             */
            muteEarphone?: boolean
        }
    }): void;
    /**
     * 监听实时语音通话成员通话状态变化事件。有成员开始/停止说话时触发回调
     * @param callback 实时语音通话成员通话状态变化事件的回调函数
     */
    function onVoIPChatSpeakersChanged(callback: (res: {
        /**
         * 还在实时语音通话中的成员 openId 名单
         */
        openIdList: ReadonlyArray<string>,
        /**
         * 错误码
         */
        errCode: number,
        /**
         * 调用结果（错误原因）
         */
        errMsg: string
    }) => void): void;
    /**
     * 取消监听实时语音通话成员通话状态变化事件。
     * @param callback 之前监听的回调函数
     */
    function offVoIPChatSpeakersChanged(callback: unknown): void;
    /**
     * 监听实时语音通话成员在线状态变化事件。有成员加入/退出通话时触发回调
     * @param callback 实时语音通话成员在线状态变化事件的回调函数
     */
    function onVoIPChatMembersChanged(callback: (res: {
        /**
         * 还在实时语音通话中的成员 openId 名单
         */
        openIdList: ReadonlyArray<string>,
        /**
         * 错误码
         */
        errCode: number,
        /**
         * 调用结果（错误原因）
         */
        errMsg: string
    }) => void): void;
    /**
     * 取消监听实时语音通话成员在线状态变化事件。
     * @param callback 之前监听的回调函数
     */
    function offVoIPChatMembersChanged(callback: unknown): void;
    /**
     * 监听被动断开实时语音通话事件。包括小游戏切入后端时断开
     * @param callback 被动断开实时语音通话事件的回调函数
     */
    function onVoIPChatInterrupted(callback: (res: {
        /**
         * 错误码
         */
        errCode: number,
        /**
         * 调用结果（错误原因）
         */
        errMsg: string
    }) => void): void;
    /**
     * 取消监听被动断开实时语音通话事件。
     * @param callback 之前监听的回调函数
     */
    function offVoIPChatInterrupted(callback: unknown): void;
    /**
     * 加入 (创建) 实时语音通话，更多信息可见：实时语音指南（https://developers.weixin.qq.com/minigame/dev/guide/open-ability/voip-chat.html）
     * 错误码
     *    -1    当前已在房间内
     *    -2    录音设备被占用，可能是当前正在使用微信内语音通话或系统通话
     *    -3    加入会话期间退出（可能是用户主动退出，或者退后台、来电等原因），因此加入失败
     *    -1000 系统错误
     * @param param 加入语音聊天时的初始化参数
     */
    function joinVoIPChat(param: types.CallbacksWithType<{
        /**
         * 在此通话中的成员 openId 名单
         */
        openIdList: ReadonlyArray<string>,
        /**
         * 错误码
         */
        errCode: number,
        /**
         * 调用结果
         */
        errMsg: string
    }> & {
        /**
         * 签名，用于验证小游戏的身份
         */
        signature: string,
        /**
         * 验证所需的随机字符串
         */
        nonceStr: string,
        /**
         * 验证所需的时间戳
         */
        timeStamp: number,
        /**
         * 小游戏内此房间/群聊的 ID。同一时刻传入相同 groupId 的用户会进入到同个实时语音房间。
         */
        groupId: string,
        /**
         * 静音设置
         */
        muteConfig?: {
            /**
             * 是否静音麦克风，默认值false
             */
            muteMicrophone?: boolean,
            /**
             * 是否静音耳机，默认值false
             */
            muteEarphone?: boolean
        }
    }): void;
    /**
     * 退出（销毁）实时语音通话
     */
    function exitVoIPChat(callbacks?: types.Callbacks): void;

    // --广告
    /**
     * 创建 banner 广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号 >= 2.0.4 后再使用该 API。同时，开发者工具上暂不支持调试该 API，请直接在真机上进行调试。
     */
    function createBannerAd(param: {
        /**
         * 广告单元 id
         */
        adUnitId: string,
        /**
         * banner 广告组件的样式
         */
        style: types.AdStyle
    }): BannerAd;
    /**
     * 创建激励视频广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号 >= 2.0.4 后再使用该 API。同时，开发者工具上暂不支持调试该 API，请直接在真机上进行调试。
     */
    function createRewardedVideoAd(param: {
        /**
         * 广告单元 id
         */
        adUnitId: string
    }): RewardedVideoAd;
    /**
     * 创建插屏广告组件。请通过 wx.getSystemInfoSync() 返回对象的 SDKVersion 判断基础库版本号后再使用该 API。每次调用该方法创建插屏广告都会返回一个全新的实例（小程序端的插屏广告实例不允许跨页面使用）。
     */
    function createInterstitialAd(param: {
        /**
         * 广告单元 id
         */
        adUnitId: string
    }): InterstitialAd;

    // --虚拟支付
    /**
     * 发起米大师支付
     */
    function requestMidasPayment(param: {
        /**
         * 支付的类型，不同的支付类型有各自额外要传的附加参数。
         *   game - 购买游戏币
         */
        mode: "game",
        /**
         * 环境配置，默认值0
         *   0 - 米大师正式环境
         *   1 - 米大师沙箱环境
         */
        env?: 0 | 1,
        /**
         * 在米大师侧申请的应用 id
         */
        offerId: string,
        /**
         * 币种
         */
        currencyType: "CNY",
        /**
         * 申请接入时的平台，platform 与应用id有关。
         */
        platform?: "android",
        /**
         * 购买数量。mode=game 时必填。购买数量。详见 buyQuantity 限制说明。
         * mode为game（购买游戏币）时，buyQuantity不可任意填写。需满足 buyQuantity * 游戏币单价 = 限定的价格等级。如：游戏币单价为 0.1 元，一次购买最少数量是 10。
         * 有效价格等级如下：
         *       价格等级（单位：人民币）
         *       1
         *       3
         *       6
         *       8
         *       12
         *       18
         *       25
         *       30
         *       40
         *       45
         *       50
         *       60
         *       68
         *       73
         *       78
         *       88
         *       98
         *       108
         *       118
         *       128
         *       148
         *       168
         *       188
         *       198
         *       328
         *       648
         */
        buyQuantity?: number,
        /**
         * 分区 ID
         */
        zoneId?: string,
        success?: () => void,
        /**
         * @param res.errCode 有如下值：
         *      -1    系统失败
         *      -2    支付取消
         *      -15001    虚拟支付接口错误码，缺少参数
         *      -15002    虚拟支付接口错误码，参数不合法
         *      -15003    虚拟支付接口错误码，订单重复
         *      -15004    虚拟支付接口错误码，后台错误
         *      -15006    虚拟支付接口错误码，appId 权限被封禁
         *      -15006    虚拟支付接口错误码，货币类型不支持
         *      -15007    虚拟支付接口错误码，订单已支付
         *       1    虚拟支付接口错误码，用户取消支付
         *       2    虚拟支付接口错误码，客户端错误, 判断到小程序在用户处于支付中时,又发起了一笔支付请求
         *       3    虚拟支付接口错误码，Android 独有错误：用户使用 Google Play 支付，而手机未安装 Google Play
         *       4    虚拟支付接口错误码，用户操作系统支付状态异常
         *       5    虚拟支付接口错误码，操作系统错误
         *       6    虚拟支付接口错误码，其他错误
         *       1000    参数错误
         *       1003    米大师 Portal 错误
         */
        fail?: (res: { errMsg: string, errCode: number }) => void,
        complete?: () => void
    }): void;
}
