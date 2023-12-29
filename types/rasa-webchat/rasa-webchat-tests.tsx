import RasaWebchat, { RasaWebchatProps } from "rasa-webchat";
import * as React from "react";

const validProps: RasaWebchatProps = {
    title: "Welcome",
    customData: {},
    inputTextFieldHint: "Type a message...",
    connectingText: "Waiting for server...",
    fullScreenMode: false,
    hideWhenNotConnected: true,
    autoClearCache: false,
    connectOn: "mount",
    onSocketEvent: {},
    protocol: "socketio",
    socketUrl: "http://localhost",
    protocolOptions: {},
    badge: 0,
    embedded: false,
    params: {
        storage: "local",
    },
    docViewer: false,
    showCloseButton: true,
    showFullScreenButton: false,
    displayUnreadCount: false,
    showMessageDate: false,
    customMessageDelay: message => {
        let delay = message.length * 30;
        if (delay > 3 * 1000) delay = 3 * 1000;
        if (delay < 800) delay = 800;
        return delay;
    },
    tooltipPayload: null,
    tooltipDelay: 500,
    onWidgetEvent: {
        onChatOpen: () => {},
        onChatClose: () => {},
        onChatVisible: () => {},
        onChatHidden: () => {},
    },
    disableTooltips: false,
    mainColor: "",
    withRules: true,
    rules: null,
    triggerEventListenerUpdateRate: 500,
    conversationBackgroundColor: "",
    userTextColor: "",
    userBackgroundColor: "",
    assistTextColor: "",
    assistBackgoundColor: "",
};

<RasaWebchat {...validProps} />;
