import * as React from "react";
import Alert from "react-s-alert";

<Alert />;

<Alert
    position="top"
    offset={100}
    stack={{
        limit: 3,
        spacing: 50,
    }}
    effect="genie"
    beep={{
        info: "beep.mp3",
        error: "beep.mp3",
        warning: "beep.mp3",
        success: "beep.mp3",
    }}
    timeout={1000}
    html={true}
    onClose={() => {}}
    onShow={() => {}}
    customFields={{}}
    contentTemplate={() => null}
    preserveContext={true}
    message="message"
/>;

Alert.info("I am a info message.", {});
Alert.info("I am a info message.", {
    position: "top",
    offset: 100,
    stack: {
        limit: 3,
        spacing: 50,
    },
    effect: "genie",
    beep: {
        info: "beep.mp3",
        error: "beep.mp3",
        warning: "beep.mp3",
        success: "beep.mp3",
    },
    timeout: 1000,
    html: true,
    onClose: () => {},
    onShow: () => {},
    customFields: {},
    contentTemplate: () => null,
    preserveContext: true,
});

Alert.error("I am a info message.", {});
Alert.error("I am a info message.", {
    position: "top",
    offset: 100,
    stack: {
        limit: 3,
        spacing: 50,
    },
    effect: "genie",
    beep: {
        info: "beep.mp3",
        error: "beep.mp3",
        warning: "beep.mp3",
        success: "beep.mp3",
    },
    timeout: 1000,
    html: true,
    onClose: () => {},
    onShow: () => {},
    customFields: {},
    contentTemplate: () => null,
    preserveContext: true,
});

Alert.warning("I am a info message.", {});
Alert.warning("I am a info message.", {
    position: "top",
    offset: 100,
    stack: {
        limit: 3,
        spacing: 50,
    },
    effect: "genie",
    beep: {
        info: "beep.mp3",
        error: "beep.mp3",
        warning: "beep.mp3",
        success: "beep.mp3",
    },
    timeout: 1000,
    html: true,
    onClose: () => {},
    onShow: () => {},
    customFields: {},
    contentTemplate: () => null,
    preserveContext: true,
});

Alert.success("I am a info message.", {});
Alert.success("I am a info message.", {
    position: "top",
    offset: 100,
    stack: {
        limit: 3,
        spacing: 50,
    },
    effect: "genie",
    beep: {
        info: "beep.mp3",
        error: "beep.mp3",
        warning: "beep.mp3",
        success: "beep.mp3",
    },
    timeout: 1000,
    html: true,
    onClose: () => {},
    onShow: () => {},
    customFields: {},
    contentTemplate: () => null,
    preserveContext: true,
});

const index = Alert.info("Hello");
Alert.close(index);

Alert.closeAll();
