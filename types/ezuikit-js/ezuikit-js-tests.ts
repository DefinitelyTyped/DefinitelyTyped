import EZUIKit from "ezuikit-js";

var player = new EZUIKit.EZUIKitPlayer({
    id: "video-container", // 视频容器ID
    accessToken: "at.3bvmj4ycamlgdwgw1ig1jruma0wpohl6-48zifyb39c-13t5am6-yukyi86mz",
    url: "ezopen://open.ys7.com/G39444019/1.live",
    width: 600,
    height: 400,
    handleError: (err) => {
        if (err.type === "handleRunTimeInfoError" && err.data.nErrorCode === 5) {
            // 加密设备密码错误
        }
    },
});

// 执行播放
player.play();

// or
player.play().then(() => {});

// 关闭播放
player.stop();

// or
player.stop().then(() => {});

player.stopTalk();

player.capturePicture("file-1");

player.capturePicture("file-1", args => {});

player.getOSDTime();

player.changePlayUrl({
    type: "rec",
    deviceSerial: "foobarvz",
    channelNo: 1,
});
