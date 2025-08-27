export interface RemoteDataMessageObject {
    msg: {
        BadgeNumber: string;
        ChannelId: string | null;
        ClickAction: string | null;
        Color: string | null;
        ImageUrl: string;
        Importance: string;
        LightSettings: string;
        Link: string;
        NotifyId: string;
        Sound: string | null;
        Tag: string | null;
        Ticker: string | null;
        When: string;
        analyticInfo: null;
        analyticInfoMap: string;
        body: string | null;
        bodyLocalizationArgs: string;
        bodyLocalizationKey: string | null;
        collapseKey: null;
        contents: string;
        data: string;
        dataOfMap: string;
        from: string | null;
        icon: string | null;
        intentUri: string | null;
        isAutoCancel: string;
        isDefaultLight: string;
        isDefaultSound: string;
        isDefaultVibrate: string;
        isLocalOnly: string;
        messageId: string | null;
        messageType: string | null;
        originalUrgency: string;
        receiptMode: string;
        sendMode: string;
        sentTime: string;
        title: string | null;
        titleLocalizationArgs: string;
        titleLocalizationKey: string | null;
        to: string | null;
        token: string;
        ttl: string;
        urgency: string;
        vibrateConfig: string;
        visibility: string;
    };
}

export interface RemoteDataMessageWithExtras {
    extras: {
        notification: {
            data?: any;
            id?: string;
            largeIcon?: string;
            message?: string;
            smallIcon?: string;
            title?: string;
            userInteraction?: boolean;
            [x: string]: any;
        };
    };
    remoteMessage: RemoteDataMessageObject["msg"];
}

export type BackgroundRemoteMessage = RemoteDataMessageObject["msg"];
