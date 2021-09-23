/**
 * 播放模式
 */
type PLAY_MODE =
    | 'order' // 顺序播放（同列表循环，到最后一个会切到第一个继续播）
    | 'loop' // 单曲循环播放
    | 'random' // 随机播放（到最后一个会切到第一个继续播）
    | 'single'; // 单个播放（播完即止）

/**
 * 播放器状态
 */
type PLAY_STATE =
    | 'ready' // 初始状态
    | 'loading' // 加载中（1.播放，2.恢复播放，3.seek）引起的声音加载
    | 'playing' // 播放中
    | 'paused' // 暂停
    | 'stoped' // 停止
    | 'error'; // 播放器异常

/**
 * 播放相关事件
 */
type PLAY_EVENT =
    | 'play' // 播放
    | 'canplay' // 进入可播放状态
    | 'pause' // 暂停
    | 'resume' // 续播
    | 'stop' // 停止
    | 'end' // 播放结束
    | 'next' // 点击下一首| 或自动切换下一首
    | 'prev' // 点击上一首
    | 'loading' // 因为加载阻塞播放触发
    | 'timeupdate' // 播放进度更新
    | 'change.sound' // 声音切换
    | 'change.playlist' // 播放列表切换
    | 'change.playState' // 播放状态切换
    | 'change.playMode' // 切换播放模式
    | 'change.playbackRate' // 播放速率切换
    | 'error' // 错误
    | 'error.accessToken' // access_token 过期、失效、不存在事件
    | 'sound.needPay'; // 需要购买

/**
 * 播放器通用声音, 可直接播放(用户传入的第三方声音、喜马声音解析后生成)
 */
interface Sound {
    id: number; // 音频 id
    src: string; // 播放地址（目前支持 m4a, aac, mp3, wav 格式）
    title?: string; // 音频标题, 原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。
    coverImgUrl?: string; // 音频背景图
    epname?: string; // 专辑名称
    singer?: string; // 歌手名
    duration?: number; // 音频时长(单位: 秒)
}

/**
 * 声音集合
 */
interface Sounds<T> {
    [k: number]: T;
}

/**
 * 播放列表
 */
type PlayList = number[];

declare class Event {
    /**
     * 绑定自定义事件
     * @param name 自定义事件名称
     * @param callback 回调函数，接收emit触发所有参数
     * @param ctx 回调函数的执行上下文
     * @returns 返回this，支持链式调用
     */
    on(name: PLAY_EVENT, callback: (...args: any) => void): this;
    /**
     * 绑定自定义事件（仅一次）
     * @param name 自定义事件名称
     * @param callback 回调函数，接收emit触发所有参数
     * @param ctx 回调函数的执行上下文
     * @returns 返回this，支持链式调用
     */
    once(name: PLAY_EVENT, callback: (...args: any) => void): this;
    /**
     * 解除绑定的自定义事件
     *  1.funcInQueue参数缺省时，该自定义事件对应的整个回调队列都会被清空，否则仅移除事件的回调队列中的某一函数；
     *
     * @param name 自定义事件名称
     * @param funcInQueue 自定义事件对应的回调函数队列中某一函数
     * @returns 返回this，支持链式调用
     */
    off(name: PLAY_EVENT, funcInQueue?: (...args: any) => void): this;
    /**
     * 校验是否在指定的事件集合中
     * @param name 事件名
     */
    /**
     * 触发（执行）自定义事件, 尽量避免手动触发播放器事件, 可能会影响到播放器内部运行
     * @param name 自定义事件名称
     * @param args 参数列表，传参示例；obj.emit('eventName', param1, param2, ...)
     * @returns 返回this，支持链式调用
     */
    emit(name: PLAY_EVENT, ...args: any): this;
}

export default class XMplayer extends Event {
    /**
     * 播放
     * @param id 声音 ID | 空
     */
    play(option?: number): Promise<void>;
    /**
     * 预加载声音
     * @param  id 声音id
     */
    preloadSound(id: number): Promise<void>;
    /**
     * 获取当前 sound
     *  - 当前播放器加载的，未必是正在播放
     */
    getSound(): Sound | undefined;
    /**
     * 是否在广告播放中
     */
    isAdvertising(): boolean;
    /**
     * 断点续播
     * 小程序会直接播放，如果只需要恢复数据可手动暂停
     */
    recover(): void;
    /**
     * 续播之前播放的音频
     */
    protected resume(): void;
    /**
     * 按播放列表索引播放
     * @param index 播放列表中的索引
     */
    playByIndex(index: number): void;
    /**
     * 上一个/上一曲
     * （自动切到最后一个）
     */
    prev(): void;
    /**
     * 下一个/下一曲
     * （自动切到第一个）
     */
    next(): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 停止，重新播放会从头播。
     */
    stop(): void;
    /**
     * 获取当前播放声音在播放列表中的索引
     */
    getCurrentIndex(): number;
    /**
     * 跳转到指定播放位置
     *  - 超过总时长会触发 end 事件，随后自动切换播放下一首
     *
     * @param position 指定的播放位置，单位：秒
     */
    seek(position: number): void;
    /**
     * 前进，向后（向结束位置）拖动
     * @param  dif 间距，正数（单位：秒）
     */
    seekForward(dif?: number): void;
    /**
     * 后退，向前（向开始位置）拖动
     * @param  dif 间距，正数（单位：秒）
     */
    seekBack(dif?: number): void;
    /**
     * 设置 sounds
     * @param sounds 声音集合
     */
    setSounds(sounds: Sounds<Sound>): void;
    /**
     * 获取 sounds
     */
    getSounds(): Sounds<Sound>;
    /**
     * 获取当前音频的播放位置，单位：秒
     */
    getCurrentTime(): number;
    /**
     * 获取正在播放音频的总播放时长（单位：秒）
     *  - 只有在有合法 src 时返回
     */
    getDuration(): number;
    /**
     * 获取当前音频已缓冲的时间
     */
    getBuffered(): number;
    /**
     * 设置播放列表
     * @param playlist 播放列表
     */
    setPlaylist(playlist?: PlayList): void;
    /**
     * 获取播放列表
     * @param isCurrent 是否返回当前播放列表，即：是否与播放模式有关
     *  - true：与播放模式有关，例如：随机播放模式，当前的播放列表会乱序，与原始设置的列表数组比较，元素顺序已改变；
     *  - false：与播放模式无关，即：初始化时或setPlaylist()时设置的 playlist；
     */
    getPlaylist(isCurrent?: boolean): PlayList;
    /**
     * 设置播放模式
     * @param playMode 播放模式
     */
    setPlayMode(playMode: PLAY_MODE): void;
    /**
     * 获取播放模式
     */
    getPlayMode(): PLAY_MODE;
    /**
     * 设置播放速度
     *  - 基础库 2.11.0 开始支持
     *  - Android 需要 6 及以上版本
     *  - 切换上一个、下一个音频，倍速会恢复正常的速度
     *
     * @param playbackRate 播放速度（0.5、1、2）
     */
    setPlaybackRate(playbackRate: number): void;
    /**
     * 获取当前播放速度
     */
    getPlaybackRate(): number;
    /**
     * 获取当前播放器状态
     */
    getPlayState(): PLAY_STATE;
    /**
     * 设置自动跳过
     *
     * @param autoskip
     */
    setAutoskip(autoskip: boolean): void;
    /**
     * 销毁播放器
     */
    destroy(): void;
}
