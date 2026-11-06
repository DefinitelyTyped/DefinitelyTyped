// Safie SDK APIの型レベル利用例
// グローバル名前空間Safieの各APIをすべて参照することで、index.d.tsの型整合性を検証する

async function testAIApp(): Promise<void> {
    // AI-Appアプリケーション一覧取得（v1.10で追加）
    const applications: Safie.AIApp.QueryApplicationsResult = await Safie.AIApp.queryApplications({
        deviceId: "device",
    });
    applications.list.forEach((application: Safie.AIApp.Application) => {
        const applicationId: number = application.applicationId;
        const applicationName: string = application.name;
        const features: Safie.AIApp.ApplicationFeature[] = application.features;
        console.log(applicationId, applicationName, features);
    });

    // AI-Appアプリケーション利用可能デバイス一覧取得（v1.10で追加）
    const devices: Safie.AIApp.QueryDevicesResult = await Safie.AIApp.queryDevices();
    await Safie.AIApp.queryDevices({ limit: 30, offset: 10, applicationId: 1 });
    const count: number = devices.count;
    const offset: number = devices.offset;
    const total: number = devices.total;
    const hasNext: boolean = devices.hasNext;
    console.log(count, offset, total, hasNext);
    devices.list.forEach((device: Safie.AIApp.ApplicationDevice) => {
        const id: string = device.deviceId;
        const serial: string = device.serial;
        const name: string | undefined = device.setting.name;
        const modelName: string = device.model.description;
        const streaming: boolean = device.status.videoStreaming;
        const connected: boolean = device.status.serverConnecting;
        const capabilities: string[] = device.capabilities;
        console.log(id, serial, name, modelName, streaming, connected, capabilities);

        device.applications.forEach((application: Safie.AIApp.ApplicationInfo) => {
            const applicationId: number = application.applicationId;
            const applicationName: string = application.applicationName;
            console.log(applicationId, applicationName);
        });
    });

    // ジオメトリ設定一覧取得（v1.10で追加）
    const geometryConfigs: Safie.AIApp.QueryGeometryConfigsResult = await Safie.AIApp.queryGeometryConfigs({
        deviceId: "device",
        applicationId: 1,
    });
    geometryConfigs.list.forEach((geometryConfig: Safie.AIApp.GeometryConfig) => {
        const geometryConfigId: number = geometryConfig.geometryConfigId;
        const geometryConfigName: string | null = geometryConfig.name;
        const geometryConfigType: Safie.AIApp.GeometryConfigType = geometryConfig.type;
        const tags: string[] = geometryConfig.tags;
        const duration: number | null = geometryConfig.duration;
        const thresholdHigh: number | null = geometryConfig.thresholdHigh;
        const thresholdLow: number | null = geometryConfig.thresholdLow;
        const color: string | null = geometryConfig.color;
        console.log(
            geometryConfigId,
            geometryConfigName,
            geometryConfigType,
            tags,
            duration,
            thresholdHigh,
            thresholdLow,
            color,
        );

        geometryConfig.points.forEach((point: Safie.AIApp.Point) => {
            const x: number = point.x;
            const y: number = point.y;
            console.log(x, y);
        });
    });

    // ジオメトリ設定作成（v1.10で追加）
    const createdGeometryConfig: Safie.AIApp.CreateGeometryConfigResult = await Safie.AIApp.createGeometryConfig({
        deviceId: "device",
        applicationId: 1,
        name: "area-1",
        type: Safie.AIApp.GeometryConfigType.Polygon,
        points: [
            { x: 0.1, y: 0.1 },
            { x: 0.9, y: 0.1 },
            { x: 0.9, y: 0.9 },
        ],
        tags: ["entrance"],
        duration: 500,
        thresholdHigh: 0.9,
        thresholdLow: 0.1,
        color: "#FF0000",
    });
    const createdGeometryConfigId: number = createdGeometryConfig.geometryConfigId;
    console.log(createdGeometryConfigId);

    // ジオメトリ設定更新（v1.10で追加）
    await Safie.AIApp.updateGeometryConfig({ deviceId: "device", applicationId: 1, geometryConfigId: 1 });
    await Safie.AIApp.updateGeometryConfig({
        deviceId: "device",
        applicationId: 1,
        geometryConfigId: 1,
        name: "area-2",
        type: Safie.AIApp.GeometryConfigType.LineIO,
        points: [
            { x: 0.1, y: 0.1 },
            { x: 0.9, y: 0.9 },
        ],
        tags: [],
        duration: 0,
        thresholdHigh: null,
        thresholdLow: null,
        color: null,
    });

    // ジオメトリ設定削除（v1.10で追加）
    await Safie.AIApp.deleteGeometryConfig({ deviceId: "device", applicationId: 1, geometryConfigId: 1 });

    // 通知設定一覧取得（v1.10で追加）
    const notificationConfigs: Safie.AIApp.QueryNotificationConfigsResult = await Safie.AIApp.queryNotificationConfigs({
        deviceId: "device",
        applicationId: 1,
    });
    notificationConfigs.list.forEach((notificationConfig: Safie.AIApp.NotificationConfig) => {
        const notificationConfigId: number = notificationConfig.notificationConfigId;
        const targetType: string | null = notificationConfig.targetType;
        const configName: string | null = notificationConfig.name;
        const description: string | null = notificationConfig.description;
        const tags: string[] | null = notificationConfig.tags;
        const method: Safie.AIApp.NotificationMethod = notificationConfig.method;
        const options: Safie.AIApp.NotificationConfigOptions = notificationConfig.options;
        const targetDaysOfWeek: Safie.AIApp.DayOfWeek[] | null = notificationConfig.targetDaysOfWeek;
        const daysOfWeekTimezone: string | null = notificationConfig.daysOfWeekTimezone;
        console.log(notificationConfigId, targetType, configName, description, tags);
        console.log(method, options, targetDaysOfWeek, daysOfWeekTimezone);

        notificationConfig.targetTimesUtc?.forEach((targetTime: Safie.AIApp.NotificationTimeRange) => {
            const start: string = targetTime.start;
            const end: string = targetTime.end;
            console.log(start, end);
        });
    });

    // 通知設定作成（v1.10で追加）
    const createdNotificationConfig: Safie.AIApp.CreateNotificationConfigResult = await Safie.AIApp
        .createNotificationConfig({
            deviceId: "device",
            applicationId: 1,
            method: Safie.AIApp.NotificationMethod.Webhook,
            options: { url: "https://example.com/webhook", token: "token" },
            targetType: "detect.*",
            name: "webhook-1",
            description: "description",
            tags: ["entrance"],
            targetTimesUtc: [{ start: "10:00:00", end: "11:00:00" }],
            targetDaysOfWeek: [Safie.AIApp.DayOfWeek.Monday, Safie.AIApp.DayOfWeek.Tuesday],
            daysOfWeekTimezone: "Asia/Tokyo",
            createSubscription: true,
        });
    console.log(createdNotificationConfig.notificationConfigId);

    // 通知設定更新（v1.10で追加）
    await Safie.AIApp.updateNotificationConfig({ deviceId: "device", applicationId: 1, notificationConfigId: 1 });
    await Safie.AIApp.updateNotificationConfig({
        deviceId: "device",
        applicationId: 1,
        notificationConfigId: 1,
        method: Safie.AIApp.NotificationMethod.Mail,
        // 空文字・空配列・空オブジェクトは設定値の削除を表す
        options: {},
        targetType: "",
        name: "",
        description: "",
        tags: [],
        targetTimesUtc: [],
        targetDaysOfWeek: [],
        daysOfWeekTimezone: "UTC",
        updateSubscription: false,
    });

    // 通知設定削除（v1.10で追加）
    await Safie.AIApp.deleteNotificationConfig({ deviceId: "device", applicationId: 1, notificationConfigId: 1 });
    await Safie.AIApp.deleteNotificationConfig({
        deviceId: "device",
        applicationId: 1,
        notificationConfigId: 1,
        deleteSubscription: true,
    });

    // 通知受信設定の取得・更新（v1.10で追加）
    const notificationSubscription: Safie.AIApp.QueryNotificationSubscriptionResult = await Safie.AIApp
        .queryNotificationSubscription({ deviceId: "device", applicationId: 1 });
    const subscribesMail: boolean = notificationSubscription.mail;
    const subscribesMobilePush: boolean = notificationSubscription.mobilePush;
    const subscribesWebPush: boolean = notificationSubscription.webPush;
    console.log(subscribesMail, subscribesMobilePush, subscribesWebPush);
    await Safie.AIApp.updateNotificationSubscription({
        deviceId: "device",
        applicationId: 1,
        mail: true,
        mobilePush: false,
        webPush: true,
    });

    // ユーザー設定の取得・更新（v1.10で追加）
    const userConfigResult: Safie.AIApp.QueryUserConfigResult = await Safie.AIApp.queryUserConfig({
        deviceId: "device",
        applicationId: 1,
    });
    const userConfig: Safie.AIApp.UserConfig | undefined = userConfigResult.userConfig;
    const snapshotIntervalSec: number | undefined = userConfigResult.snapshotIntervalSec;
    console.log(userConfig?.analyzer, snapshotIntervalSec);
    await Safie.AIApp.updateUserConfig({ deviceId: "device", applicationId: 1 });
    await Safie.AIApp.updateUserConfig({
        deviceId: "device",
        applicationId: 1,
        userConfig: { analyzer: { threshold: 0.5 } },
        snapshotIntervalSec: 60,
    });

    // オブジェクト一覧取得（v1.10で追加）
    const objects: Safie.AIApp.QueryObjectsResult = await Safie.AIApp.queryObjects({
        deviceId: "device",
        applicationId: 1,
    });
    await Safie.AIApp.queryObjects({
        deviceId: "device",
        applicationId: 1,
        start: 1704034800000,
        end: 1704121200000,
        scoreGte: 0.1,
        scoreLt: 0.9,
        type: "person",
        geometryConfigIds: [1, 2],
        geometryConfigTags: ["entrance"],
        labels: ["hat"],
        sortOrder: Safie.AIApp.ObjectSortOrder.StartTimestampAsc,
        offset: 10,
        limit: 30,
    });
    console.log(objects.count, objects.offset, objects.total, objects.hasNext);
    objects.list.forEach((detectedObject: Safie.AIApp.DetectedObject) => {
        const objectId: string = detectedObject.objectId;
        const start: number = detectedObject.start;
        const end: number | undefined = detectedObject.end;
        const objectType: string = detectedObject.type;
        const labels: string[] | undefined = detectedObject.labels;
        const score: number | undefined = detectedObject.score;
        const pictureLabels: string[] | undefined = detectedObject.pictureLabels;
        const geometryConfigIds: number[] | undefined = detectedObject.geometryConfigIds;
        console.log(objectId, start, end, objectType, labels, score, pictureLabels, geometryConfigIds);
    });

    // オブジェクト詳細取得（v1.10で追加）
    const objectDetail: Safie.AIApp.QueryObjectDetailResult = await Safie.AIApp.queryObjectDetail({
        deviceId: "device",
        applicationId: 1,
        objectId: "object",
    });
    const objectDuration: number | undefined = objectDetail.duration;
    const objectData: Record<string, unknown> | undefined = objectDetail.data;
    const hasExtraData: boolean = objectDetail.hasExtraData;
    console.log(objectDuration, objectData, hasExtraData);

    // オブジェクト画像取得・付与データ取得（v1.10で追加）
    const objectPicture: Blob = await Safie.AIApp.queryObjectPicture({
        deviceId: "device",
        applicationId: 1,
        objectId: "object",
        pictureLabel: "face",
    });
    const extraData: Blob = await Safie.AIApp.queryObjectData({
        deviceId: "device",
        applicationId: 1,
        objectId: "object",
    });
    console.log(objectPicture.size, extraData.size);

    // イベント一覧取得（v1.10で追加）
    const events: Safie.AIApp.QueryEventsResult = await Safie.AIApp.queryEvents({
        deviceId: "device",
        applicationId: 1,
    });
    await Safie.AIApp.queryEvents({
        deviceId: "device",
        applicationId: 1,
        start: 1704034800000,
        end: 1704121200000,
        scoreGte: 0.1,
        scoreLt: 0.9,
        type: "motion",
        geometryConfigIds: [1, 2],
        geometryConfigTags: ["entrance"],
        labels: ["car"],
        offset: 10,
        limit: 30,
    });
    console.log(events.count, events.offset, events.total, events.hasNext);
    events.list.forEach((detectedEvent: Safie.AIApp.DetectedEvent) => {
        const eventId: string = detectedEvent.eventId;
        const timestamp: number = detectedEvent.timestamp;
        const eventType: string = detectedEvent.type;
        const score: number | null = detectedEvent.score;
        const labels: string[] | null = detectedEvent.labels;
        const hasPicture: boolean = detectedEvent.hasPicture;
        const geometryConfigIds: number[] | null = detectedEvent.geometryConfigIds;
        console.log(eventId, timestamp, eventType, score, labels, hasPicture, geometryConfigIds);
    });

    // イベント詳細取得・画像取得（v1.10で追加）
    const eventDetail: Safie.AIApp.QueryEventDetailResult = await Safie.AIApp.queryEventDetail({
        deviceId: "device",
        applicationId: 1,
        eventId: "event",
    });
    const eventData: Record<string, unknown> | null = eventDetail.data;
    const eventPicture: Blob = await Safie.AIApp.queryEventPicture({
        deviceId: "device",
        applicationId: 1,
        eventId: "event",
    });
    console.log(eventData, eventPicture.size);

    // メトリクス一覧取得（v1.10で追加）
    const metrics: Safie.AIApp.QueryMetricsResult = await Safie.AIApp.queryMetrics({
        deviceId: "device",
        applicationId: 1,
        unit: Safie.AIApp.MetricUnit.FiveMinutes,
    });
    await Safie.AIApp.queryMetrics({
        deviceId: "device",
        applicationId: 1,
        unit: Safie.AIApp.MetricUnit.Daily,
        start: 1704034800000,
        end: 1704121200000,
        labels: ["car"],
        stats: [Safie.AIApp.MetricStat.Sum],
        offset: 10,
        limit: 500,
    });
    console.log(metrics.count, metrics.offset, metrics.total, metrics.hasNext);
    metrics.list.forEach((metric: Safie.AIApp.Metric) => {
        const metricTimestamp: number = metric.timestamp;
        const label: string = metric.label;
        const metricCount: number | undefined = metric.count;
        const sum: number | undefined = metric.sum;
        const avg: number | undefined = metric.avg;
        const avg0: number | undefined = metric.avg0;
        const min: number | undefined = metric.min;
        const max: number | undefined = metric.max;
        console.log(metricTimestamp, label, metricCount, sum, avg, avg0, min, max);
    });

    // デバイスステータス一覧取得（v1.10で追加）
    const deviceStatuses: Safie.AIApp.QueryDeviceStatusesResult = await Safie.AIApp.queryDeviceStatuses({
        deviceId: "device",
        applicationId: 1,
    });
    await Safie.AIApp.queryDeviceStatuses({
        deviceId: "device",
        applicationId: 1,
        label: "temperature",
        geometryConfigIds: [1, 2],
        statusUpdatedOnGte: 1704034800000,
    });
    console.log(deviceStatuses.total);
    deviceStatuses.list.forEach((deviceStatus: Safie.AIApp.DeviceStatus) => {
        const deviceStatusId: number = deviceStatus.deviceStatusId;
        const statusLabel: string = deviceStatus.label;
        const status: string = deviceStatus.status;
        const statusScore: number | null = deviceStatus.score;
        const geometryConfigIds: number[] = deviceStatus.geometryConfigIds;
        const updatedOn: number = deviceStatus.updatedOn;
        console.log(deviceStatusId, statusLabel, status, statusScore, geometryConfigIds, updatedOn);
    });

    // 通知イベント一覧取得（v1.10で追加）
    const notificationEvents: Safie.AIApp.QueryNotificationEventsResult = await Safie.AIApp.queryNotificationEvents({
        deviceId: "device",
        applicationId: 1,
    });
    await Safie.AIApp.queryNotificationEvents({
        deviceId: "device",
        applicationId: 1,
        start: 1704034800000,
        end: 1704121200000,
        type: "detect",
        notificationMethods: [Safie.AIApp.NotificationMethod.Mail],
        offset: 10,
        limit: 30,
    });
    console.log(notificationEvents.offset, notificationEvents.total);
    notificationEvents.list.forEach((notificationEvent: Safie.AIApp.NotificationEvent) => {
        const notificationEventId: number = notificationEvent.notificationEventId;
        const eventDeviceId: string = notificationEvent.deviceId;
        const objectId: string | null = notificationEvent.objectId;
        const eventId: string | null = notificationEvent.eventId;
        const eventType: string | null = notificationEvent.type;
        const methods: Safie.AIApp.NotificationMethod[] = notificationEvent.methods;
        const score: number | null = notificationEvent.score;
        const eventTimestamp: number = notificationEvent.timestamp;
        console.log(notificationEventId, eventDeviceId, objectId, eventId, eventType, methods, score, eventTimestamp);

        notificationEvent.geometryConfigs?.forEach((geometryConfig: Safie.AIApp.NotificationEventGeometryConfig) => {
            const geometryConfigId: number = geometryConfig.geometryConfigId;
            const geometryConfigName: string | null = geometryConfig.geometryConfigName;
            console.log(geometryConfigId, geometryConfigName);
        });
    });

    // enum値の網羅
    const applicationFeatures: Safie.AIApp.ApplicationFeature[] = [
        Safie.AIApp.ApplicationFeature.Event,
        Safie.AIApp.ApplicationFeature.Object,
        Safie.AIApp.ApplicationFeature.DeviceStatus,
        Safie.AIApp.ApplicationFeature.Metrics,
        Safie.AIApp.ApplicationFeature.GeometryConfig,
    ];
    const geometryConfigTypes: Safie.AIApp.GeometryConfigType[] = [
        Safie.AIApp.GeometryConfigType.All,
        Safie.AIApp.GeometryConfigType.Line,
        Safie.AIApp.GeometryConfigType.LineIO,
        Safie.AIApp.GeometryConfigType.Polygon,
    ];
    const metricUnits: Safie.AIApp.MetricUnit[] = [
        Safie.AIApp.MetricUnit.FiveMinutes,
        Safie.AIApp.MetricUnit.Hourly,
        Safie.AIApp.MetricUnit.Daily,
    ];
    const metricStats: Safie.AIApp.MetricStat[] = [
        Safie.AIApp.MetricStat.Count,
        Safie.AIApp.MetricStat.Sum,
        Safie.AIApp.MetricStat.Avg,
        Safie.AIApp.MetricStat.Avg0,
        Safie.AIApp.MetricStat.Min,
        Safie.AIApp.MetricStat.Max,
    ];
    const notificationMethods: Safie.AIApp.NotificationMethod[] = [
        Safie.AIApp.NotificationMethod.Mail,
        Safie.AIApp.NotificationMethod.Webhook,
        Safie.AIApp.NotificationMethod.MobilePush,
        Safie.AIApp.NotificationMethod.WebPush,
    ];
    const daysOfWeek: Safie.AIApp.DayOfWeek[] = [
        Safie.AIApp.DayOfWeek.Monday,
        Safie.AIApp.DayOfWeek.Tuesday,
        Safie.AIApp.DayOfWeek.Wednesday,
        Safie.AIApp.DayOfWeek.Thursday,
        Safie.AIApp.DayOfWeek.Friday,
        Safie.AIApp.DayOfWeek.Saturday,
        Safie.AIApp.DayOfWeek.Sunday,
    ];
    const objectSortOrders: Safie.AIApp.ObjectSortOrder[] = [
        Safie.AIApp.ObjectSortOrder.StartTimestampDesc,
        Safie.AIApp.ObjectSortOrder.StartTimestampAsc,
    ];
    console.log(applicationFeatures, geometryConfigTypes, metricUnits, metricStats);
    console.log(notificationMethods, daysOfWeek, objectSortOrders);
}

async function testAuth(): Promise<void> {
    const initResult: Safie.Auth.InitializeResult = await Safie.Auth.initialize();
    const tokenType: Safie.Auth.TokenType = initResult.tokenType;
    const idToken: string | undefined = initResult.idToken;
    console.log(tokenType, idToken);

    // Public Client(PKCE)としての認可（v1.10で追加）
    const initializeOptions: Safie.Auth.InitializeOptions = { clientId: "client" };
    await Safie.Auth.initialize(initializeOptions);
    await Safie.Auth.initialize({});

    const authorizeOptions: Safie.Auth.AuthorizeOptions = {
        clientId: "client",
        redirectUri: "https://example.com/",
        scope: "safie-api openid",
        rememberMe: true,
        enableTokenRefresh: true,
    };
    await Safie.Auth.authorize(authorizeOptions);
    await Safie.Auth.authorize({ clientId: "client", redirectUri: "https://example.com/", scope: "safie-api" });

    await Safie.Auth.setToken("token", Safie.Auth.TokenType.APIKey);
    await Safie.Auth.setToken("token", Safie.Auth.TokenType.AccessToken, true);
    await Safie.Auth.removeToken();
}

function testConfig(): void {
    // SDK全体のテーマ設定（v1.9で追加）
    const themeTypes: Safie.Config.Theme.ThemeType[] = ["light", "dark", "system"];
    themeTypes.forEach(theme => {
        Safie.Config.Theme.set(theme);
    });
    const currentTheme: Safie.Config.Theme.ThemeType = Safie.Config.Theme.get();
    console.log(currentTheme);
}

async function testDevices(): Promise<void> {
    const devicesAll: Safie.Devices.QueryDevicesResult = await Safie.Devices.queryDevices();
    await Safie.Devices.queryDevices({ limit: 30, offset: 10, itemId: 1 });
    // デバイスIDによる絞り込み（v1.9で追加）
    await Safie.Devices.queryDevices({ deviceIds: ["device1", "device2"] });
    devicesAll.list.forEach((device: Safie.Devices.Device) => {
        const id: string = device.deviceId;
        const modelName: string = device.model.description;
        const serial: string = device.serial;
        const name: string = device.setting.name;
        const streaming: boolean = device.status.videoStreaming;
        const connected: boolean = device.status.serverConnecting;
        // デバイスの機能情報のリスト
        const capabilities: string[] = device.capabilities;
        console.log(id, modelName, serial, name, streaming, connected, capabilities);
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

    // ErrorTypeリテラルの網羅（Recordで網羅性を強制し、種別の追加漏れをコンパイルエラーで検出する）
    const errorTypes: Record<Safie.ErrorType, true> = {
        invalid_params: true,
        unauthorized: true,
        authorization_required: true,
        authorization_failed: true,
        forbidden: true,
        too_many_requests: true,
        service_unavailable: true,
        network_error: true,
        resource_exhausted: true,
    };
    console.log(errorTypes);
}

// 全テスト関数を参照することで未使用警告を抑止する
testAIApp();
testAuth();
testConfig();
testDevices();
testPlayer();
testTimeline();
testUsers();
testErrorHandling({ type: "invalid_params", message: "sample" });
