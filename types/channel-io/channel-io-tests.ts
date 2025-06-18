// https://developers.channel.io/docs/web-channel-io#boot
ChannelIO("boot", {
    pluginKey: "YOUR_PLUGIN_KEY",
}, function onBoot(error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log("boot success", user);
    }
});

// https://developers.channel.io/docs/web-channel-io#shutdown
ChannelIO("shutdown");

// https://developers.channel.io/docs/web-channel-io#showmessenger
ChannelIO("showMessenger");

// https://developers.channel.io/docs/web-channel-io#hidemessenger
ChannelIO("hideMessenger");

// https://developers.channel.io/docs/web-channel-io#openchat
ChannelIO("openChat");
ChannelIO("openChat", undefined, "Text here");
ChannelIO("openChat", "123");

// https://developers.channel.io/docs/web-channelio#opensupportbot
ChannelIO("openSupportBot", "123");
ChannelIO("openSupportBot", "123", "Text here");

// https://developers.channel.io/docs/web-channel-io#track
ChannelIO("track", "OrderRequest");
ChannelIO("track", "Order", {
    "price": 100,
    "currency": "USD",
});

// https://developers.channel.io/docs/web-channel-io#onshowmessenger
ChannelIO("onShowMessenger", function onShowMessenger() {
    console.log("Messenger is shown.");
});

// https://developers.channel.io/docs/web-channel-io#onhidemessenger
ChannelIO("onHideMessenger", function onHideMessenger() {
    console.log("Messenger is hidden.");
});

// https://developers.channel.io/docs/web-channel-io#onbadgechanged
ChannelIO("onBadgeChanged", function onBadgeChanged(unread, alert) {
    console.log(`Unread count: ${unread}, Alert count: ${alert}.`);
});

// https://developers.channel.io/docs/web-channel-io#onchatcreated
ChannelIO("onChatCreated", () => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#onfollowupchanged
ChannelIO("onFollowUpChanged", profile => {
    // YOUR CODE...
});

// https://developers.channel.io/docs/web-channel-io#oncreatechat
ChannelIO("onChatCreated", function onChatCreated() {
    console.log("New Chat is created.");
});

// https://developers.channel.io/docs/web-channelio#onfollowupchanged
ChannelIO("onFollowUpChanged", function onFollowUpChanged(profile) {
    console.log("User changed profile", profile);
});

// https://developers.channel.io/docs/web-channel-io#onurlclicked
ChannelIO("onUrlClicked", function onUrlClicked(url) {
    console.log(`User clicked URL: ${url}`);
});

// https://developers.channel.io/docs/web-channel-io#clearcallbacks
ChannelIO("clearCallbacks");

// https://developers.channel.io/docs/web-channel-io#updateuser
const userObject = {
    language: "ko",
    tags: ["a", "b"] as const,
    profile: {
        email: "test@email.com",
        mobileNumber: "+821012345678",
        name: "test name",
    },
    profileOnce: {
        customerType: "vip",
        registeredAt: "2022-11-22",
    },
    unsubscribeEmail: false,
    unsubscribeTexting: true,
};

ChannelIO("updateUser", userObject, function onUpdateUser(error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log("updateUser success", user);
    }
});

// https://developers.channel.io/docs/web-channel-io#addtags
ChannelIO("addTags", ["tag1", "tag2"], function onAddTags(error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log("addTags success", user);
    }
});

// https://developers.channel.io/docs/web-channel-io#removetags
ChannelIO("removeTags", ["tag1", "tag2"], function onRemoveTags(error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log("removeTags success", user);
    }
});

// https://developers.channel.io/docs/web-channel-io#setpage
ChannelIO("setPage", "https://example.com/product");

// https://developers.channel.io/docs/web-channel-io#resetpage
ChannelIO("resetPage");

// https://developers.channel.io/docs/web-channel-io#showchannelbutton
ChannelIO("showChannelButton");

// https://developers.channel.io/docs/web-channel-io#hidechannelbutton
ChannelIO("hideChannelButton");

// https://developers.channel.io/docs/web-channelio#setappearance
ChannelIO("setAppearance", "dark");

// https://developers.channel.io/docs/web-user-object#example
const user: ChannelIO.User = {
    "id": "USER_ID",
    "memberId": "MEMBER_ID",
    "name": "USER_NAME",
    "avatarUrl": "AVATAR_URL",
    "unread": 5,
    "alert": 3,
    "profile": {
        "name": "USER_NAME",
        "email": "USER_EMAIL",
        "mobileNumber": "+821012345678",
        "CUSTOM_VALUE_1": "VALUE_1",
        "CUSTOM_VALUE_2": "VALUE_2",
    },
    "unsubscribeEmail": true,
    "unsubscribeTexting": true,
    "tags": ["tag1", "tag2"],
    "language": "ko",
};
