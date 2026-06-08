// Safie SDK APIの型レベル利用例
// グローバル名前空間Safieの各APIをすべて参照することで、index.d.tsの型整合性を検証する

async function testAuth(): Promise<void> {
    const initResult: Safie.Auth.InitializeResult = await Safie.Auth.initialize();
    const tokenType: Safie.Auth.TokenType = initResult.tokenType;
    console.log(tokenType);

    await Safie.Auth.setToken("token", Safie.Auth.TokenType.APIKey);
    await Safie.Auth.setToken("token", Safie.Auth.TokenType.AccessToken, true);
    await Safie.Auth.removeToken();
}

async function testDevices(): Promise<void> {
    const devicesAll: Safie.Devices.QueryDevicesResult = await Safie.Devices.queryDevices();
    await Safie.Devices.queryDevices({ limit: 30, offset: 10, itemId: 1 });
    devicesAll.list.forEach((device: Safie.Devices.Device) => {
        const id: string = device.deviceId;
        const modelName: string = device.model.description;
        const serial: string = device.serial;
        const name: string = device.setting.name;
        const streaming: boolean = device.status.videoStreaming;
        const connected: boolean = device.status.serverConnecting;
        console.log(id, modelName, serial, name, streaming, connected);
    });

    const thumbnail: Blob = await Safie.Devices.queryThumbnail({ deviceId: "device" });
    // v1.0以前の文字列直接渡し（@deprecated だが互換のため受け入れる）
    const thumbnailLegacy: Blob = await Safie.Devices.queryThumbnail("device");
    console.log(thumbnail, thumbnailLegacy);

    const image: Blob = await Safie.Devices.queryImage({ deviceId: "device" });
    await Safie.Devices.queryImage({ deviceId: "device", timestamp: 1595981532000 });
    console.log(image);

    const stillCapture: Blob = await Safie.Devices.queryStillCapture({ deviceId: "device" });
    console.log(stillCapture);

    const media: Safie.Devices.QueryMediaResult = await Safie.Devices.queryMedia({
        deviceId: "device",
        start: 1597823820000,
        end: 1597910220000,
    });
    media.list.forEach(item => {
        const ts: number = item.timestamp;
        const dur: number = item.duration;
        console.log(ts, dur);
    });

    const events: Safie.Devices.QueryStandardEventsResult = await Safie.Devices.queryStandardEvents({
        deviceId: "device",
        start: 1597823820000,
        end: 1597910220000,
        types: [
            Safie.Devices.StandardEvent.Connected,
            Safie.Devices.StandardEvent.Disconnected,
            Safie.Devices.StandardEvent.Motion,
            Safie.Devices.StandardEvent.Sound,
            Safie.Devices.StandardEvent.Person,
        ],
        limit: 30,
        offset: 10,
        sort: Safie.Devices.EventSort.Ascending,
    });
    events.list.forEach(event => {
        const type: Safie.Devices.StandardEvent = event.type;
        const ts: number = event.timestamp;
        console.log(type, ts);
    });
    console.log(events.offset, events.total);

    const location: Safie.Devices.QueryLocationResult = await Safie.Devices.queryLocation({
        deviceId: "device",
    });
    const gpsStatus: Safie.Devices.GPSStatus = location.gpsStatus;
    const lat: number = location.location.latitude;
    const lng: number = location.location.longitude;
    console.log(gpsStatus, lat, lng);

    const recording: Safie.Devices.QueryLocalRecordingStateResult = await Safie.Devices.queryLocalRecordingState({
        deviceId: "device",
    });
    if (recording.localRecording) {
        const localMode: boolean = recording.localRecording.localMode;
        const isRecording: boolean = recording.localRecording.recording;
        console.log(localMode, isRecording);
    }

    // enum値の網羅
    const sortOrders: Safie.Devices.EventSort[] = [
        Safie.Devices.EventSort.Ascending,
        Safie.Devices.EventSort.Descending,
    ];
    const gpsStates: Safie.Devices.GPSStatus[] = [
        Safie.Devices.GPSStatus.Off,
        Safie.Devices.GPSStatus.On,
        Safie.Devices.GPSStatus.Active,
    ];
    console.log(sortOrders, gpsStates);
}

function testPlayer(): void {
    const element = document.getElementById("player") as HTMLElement;
    const player: Safie.Player.StreamingPlayer = new Safie.Player.StreamingPlayer(element, {
        deviceId: "device",
        volume: 50,
        muted: false,
        userInteractions: true,
        liveBroadcastMode: "hls",
    });
    new Safie.Player.StreamingPlayer(element);
    new Safie.Player.StreamingPlayer(element, { liveBroadcastMode: "webrtc" });

    const instanceId: string = player.instanceId;
    player.deviceId = "newDevice";
    // deviceId はデバイス未設定時 null を返す
    const deviceId: string | null = player.deviceId;
    player.volume = 75;
    const volume: number = player.volume;
    player.muted = true;
    const muted: boolean = player.muted;
    player.userInteractions = false;
    const userInteractions: boolean = player.userInteractions;
    const liveMode: "hls" | "webrtc" = player.liveBroadcastMode;
    const status: Safie.Player.PlayerStatus = player.status;
    // playTime は再生中でない場合 null を返す
    const playTime: number | null = player.playTime;
    const streamingMode: Safie.Player.StreamingMode = player.streamingMode;
    console.log(instanceId, deviceId, volume, muted, userInteractions, liveMode, status, playTime, streamingMode);

    player.play();
    player.play(1595981532000);
    player.play(1595981532000, 2);
    player.stop();
    player.pause();
    player.unpause();

    const onPlayTimeChange: Safie.Player.EventListeners[Safie.Player.PlayerEvent.PLAY_TIME_CHANGE] = (
        timestamp: number,
    ) => {
        console.log(timestamp);
    };
    const onStatusChange: Safie.Player.EventListeners[Safie.Player.PlayerEvent.STATUS_CHANGE] = (
        { status: s, context },
    ) => {
        const playerStatus: Safie.Player.PlayerStatus = s;
        console.log(playerStatus);
        if (context) {
            const playerContext: Safie.Player.PlayerStatusContext = context;
            if ("streamingMode" in playerContext) {
                const mode: Safie.Player.StreamingMode = playerContext.streamingMode;
                console.log(mode);
            }
            if ("error" in playerContext) {
                const errorDetail: Safie.ErrorDetail = playerContext.error;
                console.log(errorDetail);
            }
        }
    };
    player.on(Safie.Player.PlayerEvent.PLAY_TIME_CHANGE, onPlayTimeChange);
    player.on(Safie.Player.PlayerEvent.STATUS_CHANGE, onStatusChange);
    // 文字列リテラルでのイベント名指定もサポート
    player.on("playTimeChange", onPlayTimeChange);
    player.on("statusChange", onStatusChange);
    player.off(Safie.Player.PlayerEvent.PLAY_TIME_CHANGE, onPlayTimeChange);
    player.off(Safie.Player.PlayerEvent.PLAY_TIME_CHANGE);
    player.off(Safie.Player.PlayerEvent.STATUS_CHANGE);
    player.off("playTimeChange");
    player.off("statusChange");

    player.startPTZ();
    player.startPTZ({ centeringOnly: true });
    player.finishPTZ();
    player.dispose();

    // enum値の網羅
    const playerStatuses: Safie.Player.PlayerStatus[] = [
        Safie.Player.PlayerStatus.NotLoaded,
        Safie.Player.PlayerStatus.Loading,
        Safie.Player.PlayerStatus.Streaming,
        Safie.Player.PlayerStatus.Paused,
        Safie.Player.PlayerStatus.Error,
        Safie.Player.PlayerStatus.Retrying,
    ];
    const streamingModes: Safie.Player.StreamingMode[] = [
        Safie.Player.StreamingMode.None,
        Safie.Player.StreamingMode.Vod,
        Safie.Player.StreamingMode.Live,
    ];
    console.log(playerStatuses, streamingModes);
}

function testTimeline(): void {
    const playerElement = document.getElementById("player") as HTMLElement;
    const player1 = new Safie.Player.StreamingPlayer(playerElement);
    const player2 = new Safie.Player.StreamingPlayer(playerElement);

    const timelineElement = document.getElementById("timeline") as HTMLElement;
    const timeline: Safie.UIControl.Timeline = new Safie.UIControl.Timeline(timelineElement, {
        players: [player1, player2],
        filterEventTypes: ["motion", "sound"],
    });
    new Safie.UIControl.Timeline(timelineElement, { players: [player1] });
    new Safie.UIControl.Timeline(timelineElement, { players: [player1], filterEventTypes: null });

    const status: Safie.UIControl.TimelineStatus = timeline.status;
    // playTime は再生中でない場合 null を返す
    const playTime: number | null = timeline.playTime;
    timeline.filterEventTypes = ["motion"];
    timeline.filterEventTypes = null;
    const filterEventTypes: string[] | null = timeline.filterEventTypes;
    console.log(status, playTime, filterEventTypes);

    timeline.play();
    timeline.play(1595981532000);
    timeline.play(1595981532000, 2);
    timeline.pause();
    timeline.unpause();
    timeline.stop();

    const onPlayTimeChange: Safie.UIControl.EventListeners[Safie.UIControl.TimelineEvent.PLAY_TIME_CHANGE] = (
        timestamp: number,
    ) => {
        console.log(timestamp);
    };
    const onStatusChange: Safie.UIControl.EventListeners[Safie.UIControl.TimelineEvent.STATUS_CHANGE] = (
        { status: s, context },
    ) => {
        const timelineStatus: Safie.UIControl.TimelineStatus = s;
        console.log(timelineStatus);
        if (context) {
            const errorDetail: Safie.ErrorDetail = context.error;
            console.log(errorDetail);
        }
    };
    timeline.on(Safie.UIControl.TimelineEvent.PLAY_TIME_CHANGE, onPlayTimeChange);
    timeline.on(Safie.UIControl.TimelineEvent.STATUS_CHANGE, onStatusChange);
    // 文字列リテラルでのイベント名指定もサポート
    timeline.on("playTimeChange", onPlayTimeChange);
    timeline.on("statusChange", onStatusChange);
    timeline.off(Safie.UIControl.TimelineEvent.PLAY_TIME_CHANGE, onPlayTimeChange);
    timeline.off(Safie.UIControl.TimelineEvent.PLAY_TIME_CHANGE);
    timeline.off(Safie.UIControl.TimelineEvent.STATUS_CHANGE);
    timeline.off("playTimeChange");
    timeline.off("statusChange");

    timeline.dispose();

    // enum値の網羅
    const timelineStatuses: Safie.UIControl.TimelineStatus[] = [
        Safie.UIControl.TimelineStatus.Stopped,
        Safie.UIControl.TimelineStatus.Loading,
        Safie.UIControl.TimelineStatus.Paused,
        Safie.UIControl.TimelineStatus.Playing,
    ];
    console.log(timelineStatuses);
}

async function testUsers(): Promise<void> {
    const info: Safie.Users.QueryInformationResult = await Safie.Users.queryInformation();
    const userName: string = info.userName;
    const mailAddress: string = info.mailAddress;
    console.log(userName, mailAddress);
    if (info.corporation) {
        const account: string = info.corporation.account;
        const name: string = info.corporation.name;
        const roleName: string = info.corporation.corporationRole.name;
        const roleCategory: string = info.corporation.corporationRole.category;
        console.log(account, name, roleName, roleCategory);
    }
}

function testErrorHandling(error: Safie.ErrorDetail): void {
    const type: Safie.ErrorType = error.type;
    const message: string = error.message;
    console.log(type, message);

    // ErrorTypeリテラルの網羅
    const errorTypes: Safie.ErrorType[] = [
        "invalid_params",
        "unauthorized",
        "forbidden",
        "too_many_requests",
        "service_unavailable",
        "network_error",
        "resource_exhausted",
    ];
    console.log(errorTypes);
}

// 全テスト関数を参照することで未使用警告を抑止する
testAuth();
testDevices();
testPlayer();
testTimeline();
testUsers();
testErrorHandling({ type: "invalid_params", message: "sample" });
