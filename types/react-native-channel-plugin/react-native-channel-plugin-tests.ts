import { BootConfig, ChannelIO, UserData } from "react-native-channel-plugin";

ChannelIO.boot({ pluginKey: "YOUR_PLUGIN_KEY" });
ChannelIO.boot({ pluginKey: "YOUR_PLUGIN_KEY" }).then(result => {
    if (result.status === "SUCCESS") {
        // SUCCESS
    } else {
        // ERROR
    }
});

const config: BootConfig = {
    pluginKey: "YOUR_PLUGIN_KEY",
    memberId: "MEMBER_ID",
    memberHash: "MEMBER_HASH",
    profile: {
        name: "NAME",
        email: "EMAIL",
        mobileNumber: "+821012345678",
        profileUrl: "PROFILE_URL",
        STRING_VALUE: "STRING_VALUE",
        NUMBER_VALUE: 1,
        BOOLEAN_VALUE: true,
    },
    language: "ko",
    unsubscribeEmail: false,
    unsubscribeTexting: false,
    hidePopup: false,
    channelButtonOption: {
        xMargin: 16,
        yMargin: 16,
        position: "left",
    },
    bubbleOption: {
        yMargin: 30,
        position: "bottom",
    },
};

ChannelIO.boot(config).then(() => {});

ChannelIO.sleep();
ChannelIO.shutdown();
ChannelIO.showChannelButton();
ChannelIO.hideChannelButton();
ChannelIO.showMessenger();
ChannelIO.hideMessenger();

// Open chat id is '123'
ChannelIO.openChat("123", null);

// Same as ChannelIO.openChat("123", null);
// When chat id parameter is not null, message parameter is ignored.
ChannelIO.openChat("123", "asd");

// Open new chat like click start new chat in lounge
ChannelIO.openChat(null, null);

// Open new chat with "123" in input box.
// If support bot is enabled, open support bot instead.
ChannelIO.openChat(null, "123");

// Only send event name
ChannelIO.track("EVENT_NAME");

// Send event with properties
ChannelIO.track("EVENT_NAME", {
    PROPERTY_KEY_1: "STRING_VALUE",
    PROPERTY_KEY_2: 12345,
});

const user: UserData = {
    language: "en",
    tags: ["1", "2", "3"],
    profile: {
        name: "NAME",
        email: "EMAIL",
        mobileNumber: "+~~~",
        avatarUrl: "AVATAR_URL",
        STRING_VALUE: "STRING_VALUE",
        NUMBER_VALUE: 1,
        BOOLEAN_VALUE: true,
    },
    profileOnce: {},
    unsubscribeEmail: false,
    unsubscribeTexting: false,
};
ChannelIO.updateUser(user).then(result => {
    if (result.error) {
        // ERROR
    } else {
        // SUCCESS
    }
});

ChannelIO.addTags(["1", "2", "3"]).then(result => {
    if (result.error) {
        // ERROR
    } else {
        // SUCCESS
    }
});

ChannelIO.removeTags(["1", "2", "3"]).then(result => {
    if (result.error) {
        // ERROR
    } else {
        // SUCCESS
    }
});

ChannelIO.setPage();
ChannelIO.setPage("https://example.com");

ChannelIO.resetPage();

ChannelIO.initPushToken("PUSH_TOKEN");

ChannelIO.isChannelPushNotification({}).then(result => {
    if (result) {
        // Channel push notification
    } else {
        // Your FCM code
    }
});

ChannelIO.receivePushNotification({}).then(() => {});

ChannelIO.hasStoredPushNotification().then(result => {
    if (result) {
        // Has stored push notification
    } else {
        // No stored push notification
    }
});

ChannelIO.openStoredPushNotification();

ChannelIO.isBooted().then(result => {
    if (result) {
        // Channel is booted
    } else {
        // Channel is not booted
    }
});

ChannelIO.setDebugMode(true);

ChannelIO.onShowMessenger();
ChannelIO.onShowMessenger(() => {});

ChannelIO.onHideMessenger();
ChannelIO.onHideMessenger(() => {});

ChannelIO.onChatCreated();
ChannelIO.onChatCreated((chatId: string) => {});

ChannelIO.onBadgeChanged();
ChannelIO.onBadgeChanged((count: number) => {});

ChannelIO.onFollowUpChanged();
ChannelIO.onFollowUpChanged(data => {});

ChannelIO.onUrlClicked();
ChannelIO.onUrlClicked((url: string, next: () => void) => {
    if (url.startsWith("https://example.com/")) {
        // Do something
        next();
    }
});

ChannelIO.onPopupDataReceived();
ChannelIO.onPopupDataReceived(data => {});

ChannelIO.onPushNotificationClicked();
ChannelIO.onPushNotificationClicked((chatId: string, next: () => void) => {
    if (chatId === "123") {
        // Do something
        next();
    }
});
