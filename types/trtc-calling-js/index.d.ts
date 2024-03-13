export as namespace TRTCCalling;

export = TRTCCalling;

/**
 * 定义 TRTCCalling 命名空间，方便导出用到的变量类型给外部引用
 */
declare namespace TRTCCalling {
    /** 日志输出等级 */
    type LogLevel = 0 | 1 | 2 | 3 | 4;

    /** callback回调事件类型 */
    type Callback<T = any> = (eventName: T) => void;

    /** 实例化参数类型 */
    interface Options {
        SDKAppID: number;
    }

    /** 共有参数类型 */
    interface UserInfo {
        userID: string;
    }

    /** 登录参数类型 */
    interface LoginOptions extends UserInfo {
        userSig: string;
    }

    /** 1对1通话邀请参数类型 */
    interface CallOptions extends UserInfo {
        type: 1 | 2;
        timeout: number;
    }

    /** 群组通话邀请参数类型 */
    interface GroupCallOptions {
        userIDList: string[];
        type: 1 | 2;
        groupID?: string | undefined;
    }

    /** 接受当前的邀请参数类型 */
    interface AcceptOptions {
        inviteID: string;
        roomID: number;
        callType: 1 | 2;
    }

    /** 拒绝当前的邀请参数类型 */
    interface RejectOptions {
        inviteID: string;
        isBusy: boolean;
        callType: 1 | 2;
    }

    /** 摄像头渲染相关类型 */
    interface ViewOptions extends UserInfo {
        videoViewDomID: string;
    }

    /** 远端用户开启/关闭了摄像头返回参数类型 */
    interface UserVideoInfo extends UserInfo {
        isVideoAvailable: boolean;
    }

    /** 远端用户开启/关闭了麦克风返回参数类型 */
    interface UserAudioInfo extends UserInfo {
        isAudioAvailable: boolean;
    }

    /** 收到了邀请通知返回参数类型 */
    interface InvitedInfo {
        sponsor: string;
        userIDList: string[];
        isFromGroup: boolean;
        inviteData: {
            version: string;
            callType: 1 | 2;
            roomID?: number | undefined;
            callEnd?: boolean | undefined;
        };
        inviteID: string;
    }

    /** 事件 */
    interface EventMap {
        onReject: UserInfo;
        onNoResp: UserInfo;
        onLineBusy: UserInfo;
        onUserEnter: UserInfo;
        onUserLeave: UserInfo;
        onInvited: InvitedInfo;
        onUserVideoAvailable: UserVideoInfo;
        onUserAudioAvailable: UserAudioInfo;
        onCallingCancel: undefined;
        onCallingTimeout: undefined;
        onCallEnd: undefined;
        onKickedOut: undefined;
        onError: any;
    }
}

/**
 * TRTCCalling 类，创建该类的实例可用于调用 TRTCCalling API
 * @see https://webim-1252463788.cos.ap-shanghai.myqcloud.com/trtc-calling/doc/TRTCCalling.html
 */
declare class TRTCCalling {
    constructor(options: TRTCCalling.Options);

    /** 通话类型 */
    static CALL_TYPE: {
        0: "UNKNOWN";
        1: "AUDIO_CALL";
        2: "VIDEO_CALL";
        UNKNOWN: 0;
        AUDIO_CALL: 1;
        VIDEO_CALL: 2;
    };

    /** 监听事件类型 */
    static EVENT: {
        /** 错误 */
        ERROR: "onError";
        /** 被邀用户拒绝通话 */
        REJECT: "onReject";
        /** 被邀用户超时无应答 */
        NO_RESP: "onNoResp";
        /** 被邀用户正在通话中，忙线 */
        LINE_BUSY: "onLineBusy";
        /** 收到了邀请通知 */
        INVITED: "onInvited";
        /** 本次通话被取消了 */
        CALLING_CANCEL: "onCallingCancel";
        /** 本次通话超时未应答 */
        CALLING_TIMEOUT: "onCallingTimeout";
        /** 用户进房 */
        USER_ENTER: "onUserEnter";
        /** 用户退出房间 */
        USER_LEAVE: "onUserLeave";
        /** 本次通话结束 */
        CALL_END: "onCallEnd";
        /** 重复登录，被踢出房间 */
        KICKED_OUT: "onKickedOut";
        /** 远端用户开启/关闭了摄像头 */
        USER_VIDEO_AVAILABLE: "onUserVideoAvailable";
        /** 远端用户开启/关闭了麦克风 */
        USER_AUDIO_AVAILABLE: "onUserAudioAvailable";
    };

    /**
     * 设置日志输出等级
     * 0 普通级别，日志量较多，接入时建议使用
     * 1 release级别，SDK 输出关键信息，生产环境时建议使用
     * 2 告警级别，SDK 只输出告警和错误级别的日志
     * 3 错误级别，SDK 只输出错误级别的日志
     * 4 无日志级别，SDK 将不打印任何日志
     */
    setLogLevel(level: TRTCCalling.LogLevel): void;

    /** 登录接口 */
    login(options: TRTCCalling.LoginOptions): Promise<void>;

    /** 登出接口 */
    logout(): Promise<void>;

    /** 1对1通话邀请 */
    call(options: TRTCCalling.CallOptions): Promise<void>;

    /** 群组通话邀请 */
    groupCall(options: TRTCCalling.GroupCallOptions): Promise<void>;

    /** 接受当前的邀请 */
    accept(options: TRTCCalling.AcceptOptions): Promise<void>;

    /** 拒绝当前的邀请 */
    reject(options: TRTCCalling.RejectOptions): void;

    /**
     * 1.当您处于通话中，可以调用该函数结束通话。
     * 2.当未拨通时, 可用来取消通话。
     */
    hangup(): void;

    /** 将远端用户的摄像头数据渲染到指定的 DOM ID 节点里 */
    startRemoteView(options: TRTCCalling.ViewOptions): Promise<void>;

    /** 将远端用户的摄像头数据渲染的 DOM 节点删除 */
    stopRemoteView(options: TRTCCalling.ViewOptions): void;

    /** 将本地用户的摄像头数据渲染到指定的 DOM ID 节点里 */
    startLocalView(options: TRTCCalling.ViewOptions): Promise<void>;

    /** 将本地用户的摄像头数据渲染的 DOM 节点删除 */
    stopLocalView(options: TRTCCalling.ViewOptions): void;

    /** 开启本地摄像头 */
    openCamera(): void;

    /** 关闭摄像头 */
    closeCamera(): void;

    /** 开启/关闭麦克风 */
    setMicMute(isMute: boolean): void;

    /** 用于监听组件派发的事件 */
    on<K extends keyof TRTCCalling.EventMap>(
        eventName: K,
        callback: TRTCCalling.Callback<TRTCCalling.EventMap[K]>,
        context?: any,
    ): void;

    /** 用于取消事件监听 */
    off<K extends keyof TRTCCalling.EventMap>(
        eventName: K,
        callback: TRTCCalling.Callback<TRTCCalling.EventMap[K]>,
        context?: any,
    ): void;
}
