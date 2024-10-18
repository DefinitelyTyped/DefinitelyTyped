import TRTCCalling, { InvitedInfo, UserAudioInfo, UserInfo, UserVideoInfo } from "trtc-calling-js";

// 创建 TRTCCalling 组件实例
const options = {
    SDKAppID: 0, // 接入时需要将0替换为您的即时通信IM应用的 SDKAppID
};
const trtcCalling = new TRTCCalling(options);

// 设置日志输出等级
trtcCalling.setLogLevel(0);

// 登录
trtcCalling.login({ userID: "1", userSig: "2" });

// 登出
trtcCalling.logout();

// 视频通话
trtcCalling.call({ userID: "1", type: TRTCCalling.CALL_TYPE.VIDEO_CALL, timeout: 30 });

// 群组视频通话
trtcCalling.groupCall({ userIDList: ["1", "2"], type: TRTCCalling.CALL_TYPE.VIDEO_CALL });

// 接受视频通话
trtcCalling.accept({ inviteID: "1", roomID: 2, callType: TRTCCalling.CALL_TYPE.VIDEO_CALL });

// 拒绝视频通话
trtcCalling.reject({ inviteID: "1", isBusy: true, callType: TRTCCalling.CALL_TYPE.VIDEO_CALL });

// 结束/取消通话
trtcCalling.hangup();

// 将远端用户的摄像头数据渲染到指定的 DOM ID 节点里
trtcCalling.startRemoteView({ userID: "1", videoViewDomID: "video" });

// 将远端用户的摄像头数据渲染的 DOM 节点删除
trtcCalling.stopRemoteView({ userID: "1", videoViewDomID: "video" });

// 将本地用户的摄像头数据渲染到指定的 DOM ID 节点里
trtcCalling.startLocalView({ userID: "2", videoViewDomID: "video" });

// 将本地用户的摄像头数据渲染的 DOM 节点删除
trtcCalling.stopLocalView({ userID: "2", videoViewDomID: "video" });

// 开启本地摄像头
trtcCalling.openCamera();

// 关闭摄像头
trtcCalling.closeCamera();

// 开启/关闭麦克风
trtcCalling.setMicMute(true);

trtcCalling.on(TRTCCalling.EVENT.ERROR, handleError);
trtcCalling.on(TRTCCalling.EVENT.INVITED, handleInvited);
trtcCalling.on(TRTCCalling.EVENT.USER_ENTER, handleUserEnter);
trtcCalling.on(TRTCCalling.EVENT.USER_LEAVE, handleUserLeave);
trtcCalling.on(TRTCCalling.EVENT.REJECT, handleEject);
trtcCalling.on(TRTCCalling.EVENT.LINE_BUSY, handleLineBusy);
trtcCalling.on(TRTCCalling.EVENT.CALLING_CANCEL, handleCallingCancel);
trtcCalling.on(TRTCCalling.EVENT.KICKED_OUT, handleKickedOut);
trtcCalling.on(TRTCCalling.EVENT.CALLING_TIMEOUT, handleCallingTimeout);
trtcCalling.on(TRTCCalling.EVENT.NO_RESP, handleNoResp);
trtcCalling.on(TRTCCalling.EVENT.CALL_END, handleCallEnd);
trtcCalling.on(TRTCCalling.EVENT.USER_VIDEO_AVAILABLE, handleUserVideoChange);
trtcCalling.on(TRTCCalling.EVENT.USER_AUDIO_AVAILABLE, handleUserAudioChange);

trtcCalling.off(TRTCCalling.EVENT.ERROR, handleError);
trtcCalling.off(TRTCCalling.EVENT.INVITED, handleInvited);
trtcCalling.off(TRTCCalling.EVENT.USER_ENTER, handleUserEnter);
trtcCalling.off(TRTCCalling.EVENT.USER_LEAVE, handleUserLeave);
trtcCalling.off(TRTCCalling.EVENT.REJECT, handleEject);
trtcCalling.off(TRTCCalling.EVENT.LINE_BUSY, handleLineBusy);
trtcCalling.off(TRTCCalling.EVENT.CALLING_CANCEL, handleCallingCancel);
trtcCalling.off(TRTCCalling.EVENT.KICKED_OUT, handleKickedOut);
trtcCalling.off(TRTCCalling.EVENT.CALLING_TIMEOUT, handleCallingTimeout);
trtcCalling.off(TRTCCalling.EVENT.NO_RESP, handleNoResp);
trtcCalling.off(TRTCCalling.EVENT.CALL_END, handleCallEnd);
trtcCalling.off(TRTCCalling.EVENT.USER_VIDEO_AVAILABLE, handleUserVideoChange);
trtcCalling.off(TRTCCalling.EVENT.USER_AUDIO_AVAILABLE, handleUserAudioChange);

// 错误
function handleError(error: any) {
    console.log(error);
}

// 收到了邀请通知
function handleInvited({ sponsor, userIDList, isFromGroup, inviteData, inviteID }: InvitedInfo) {}

// 用户进房
function handleUserEnter({ userID }: UserInfo) {}

// 用户退出房间
function handleUserLeave({ userID }: UserInfo) {}

// 被邀用户拒绝通话
function handleEject({ userID }: UserInfo) {}

// 被邀用户正在通话中，忙线
function handleLineBusy({ userID }: UserInfo) {}

// 本次通话被取消了
function handleCallingCancel() {}

// 重复登录，被踢出房间
function handleKickedOut() {}

// 本次通话超时未应答
function handleCallingTimeout() {}

// 被邀用户超时无应答
function handleNoResp({ userID }: UserInfo) {}

// 本次通话结束
function handleCallEnd() {}

// 远端用户开启/关闭了摄像头
function handleUserVideoChange({ userID, isVideoAvailable }: UserVideoInfo) {}

// 远端用户开启/关闭了麦克风
function handleUserAudioChange({ userID, isAudioAvailable }: UserAudioInfo) {}
