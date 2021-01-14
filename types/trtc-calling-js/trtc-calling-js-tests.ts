import TRTCCalling from 'trtc-calling-js';

// 创建 TRTCCalling 组件实例
const options = {
    SDKAppID: 0, // 接入时需要将0替换为您的即时通信IM应用的 SDKAppID
};
const trtcCalling = new TRTCCalling(options);

// 登录
trtcCalling.login({ userID: '1', userSig: '2' });

// 登出
trtcCalling.logout();

// 视频通话
trtcCalling.call({ userID: '1', type: TRTCCalling.CALL_TYPE.VIDEO_CALL, timeout: 30 });

// 群组视频通话
trtcCalling.groupCall({ userIDList: ['1', '2'], type: TRTCCalling.CALL_TYPE.VIDEO_CALL });

// 接受视频通话
trtcCalling.accept({ inviteID: '1', roomID: 2, callType: TRTCCalling.CALL_TYPE.VIDEO_CALL });

// 拒绝视频通话
trtcCalling.reject({ inviteID: '1', isBusy: true, callType: TRTCCalling.CALL_TYPE.VIDEO_CALL });

// 结束/取消通话
trtcCalling.hangup();

