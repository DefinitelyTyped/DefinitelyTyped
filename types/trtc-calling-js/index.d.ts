export as namespace TRTCCalling;

export default TRTCCalling;

export const CALL_TYPE: 1;

interface Options {
    SDKAppID: number;
}

interface LoginOptions {
    userID: string;
    userSig: string;
}

interface CallOptions {
    userID: string;
    type: 1 | 2;
    timeout: number;
}

interface GroupCallOptions {
    userIDList: string[];
    type: 1 | 2;
    groupID?: string;
}

interface AcceptOptions {
    inviteID: string;
    roomID: number;
    callType: 1 | 2;
}

interface RejectOptions {
    inviteID: string;
    isBusy: boolean;
    callType: 1 | 2;
}

interface ViewOptions {
    userID: string;
    videoViewDomID: string;
}

interface RtcError {
    error: string;
}

/** 事件 */
interface EventMap {
    'onError': RtcError
}

declare class TRTCCalling {
    constructor (options: Options);

    /** 通话类型 */
    static CALL_TYPE: {
        0: 'UNKNOWN';
        1: 'AUDIO_CALL';
        2: 'VIDEO_CALL';
        UNKNOWN: 0;
        AUDIO_CALL: 1;
        VIDEO_CALL: 2;
    };

    /** 监听事件类型 */
    static EVENT: {
        /** 错误 */
        ERROR: 'onError';
        /** 被邀用户拒绝通话 */
        REJECT: 'onReject';
        /** 被邀用户超时无应答 */
        NO_RESP: 'onNoResp';
        /** 被邀用户正在通话中，忙线 */
        LINE_BUSY: 'onLineBusy';
        /** 收到了邀请通知 */
        INVITED: 'onInvited';
        /** 本次通话被取消了 */
        CALLING_CANCEL: 'onCallingCancel';
        /** 本次通话超时未应答 */
        CALLING_TIMEOUT: 'onCallingTimeout';
        /** 用户进房 */
        USER_ENTER: 'onUserEnter';
        /** 用户退出房间 */
        USER_LEAVE: 'onUserLeave';
        /** 本次通话结束 */
        CALL_END: 'onCallEnd';
        /** 重复登录，被踢出房间 */
        KICKED_OUT: 'onKickedOut';
        /** 远端用户开启/关闭了摄像头 */
        USER_VIDEO_AVAILABLE: 'onUserVideoAvailable';
        /** 远端用户开启/关闭了麦克风 */
        USER_AUDIO_AVAILABLE: 'onUserAudioAvailable';
    };

    /** 登录接口 */
    login (options: LoginOptions): void;

    /** 登出接口 */
    logout (): void;

    /** 1对1通话邀请 */
    call (options: CallOptions): void;

    /** 群组通话邀请 */
    groupCall (options: GroupCallOptions): void;

    /** 接受当前的邀请 */
    accept (options: AcceptOptions): void;

    /** 拒绝当前的邀请 */
    reject (options: RejectOptions): void;

    /**
     * 1.当您处于通话中，可以调用该函数结束通话。
     * 2.当未拨通时, 可用来取消通话。
     */
    hangup (): void;

    /** 将远端用户的摄像头数据渲染到指定的 DOM ID 节点里 */
    startRemoteView (options: ViewOptions): void;

    /** 将远端用户的摄像头数据渲染的 DOM 节点删除 */
    stopRemoteView (options: ViewOptions): void;

    /** 将本地用户的摄像头数据渲染到指定的 DOM ID 节点里 */
    startLocalView (options: ViewOptions): void;

    /** 将本地用户的摄像头数据渲染的 DOM 节点删除 */
    stopLocalView (options: ViewOptions): void;

    /** 开启本地摄像头 */
    openCamera (): void;

    /** 关闭摄像头 */
    closeCamera (): void;

    /** 开启/关闭麦克风 */
    setMicMute (isMute: boolean): void;
}
