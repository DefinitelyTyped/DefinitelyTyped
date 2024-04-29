/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { Component } from "react";
import { NativeEventSubscription } from "react-native";

import {
    HmsLocalNotification,
    HmsPushEvent,
    HmsPushInstanceId,
    HmsPushMessaging,
    HmsPushOpenDevice,
    HmsPushProfile,
    HmsPushResultCode,
    RemoteMessageBuilder,
    RNRemoteMessage,
} from "@hmscore/react-native-hms-push";

interface State {
    topic: string;
    subjectId: string;
}

export default class App extends Component<{}, State> {
    onRemoteMessageReceivedListener: NativeEventSubscription;
    onTokenReceivedListener: NativeEventSubscription;
    onTokenErrorListener: NativeEventSubscription;
    onMultiSenderTokenReceivedListener: NativeEventSubscription;
    onMultiSenderTokenErrorListener: NativeEventSubscription;
    onPushMessageSentListener: NativeEventSubscription;
    onMessageSentErrorListener: NativeEventSubscription;
    onMessageSentDeliveredListener: NativeEventSubscription;
    onLocalNotificationActionListener: NativeEventSubscription;
    onNotificationOpenedAppListener: NativeEventSubscription;

    constructor(props: {}) {
        super(props);

        this.state = {
            topic: "",
            subjectId: "<project_id>",
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.onRemoteMessageReceivedListener = HmsPushEvent.onRemoteMessageReceived(result => {
            const RNRemoteMessageObj = new RNRemoteMessage(result.msg);

            HmsLocalNotification.localNotification({
                [HmsLocalNotification.Attr.title]: "DataMessage Received",
                [HmsLocalNotification.Attr.message]: RNRemoteMessageObj.getDataOfMap(),
            });

            console.log("onRemoteMessageReceived", result);
        });

        this.onTokenReceivedListener = HmsPushEvent.onTokenReceived(result => {
            console.log("onTokenReceived", result);
        });

        this.onTokenErrorListener = HmsPushEvent.onTokenError(result => {
            console.log("onTokenError", result);
            if (result.result_code === HmsPushResultCode.ERROR_CLIENT_API_INVALID) {
                console.log("Invalid Client");
            }
        });

        this.onMultiSenderTokenReceivedListener = HmsPushEvent.onMultiSenderTokenReceived(result => {
            console.log("onMultiSenderTokenReceived", result);
        });

        this.onMultiSenderTokenErrorListener = HmsPushEvent.onMultiSenderTokenError(result => {
            console.log("onMultiSenderTokenError", result);
        });

        this.onPushMessageSentListener = HmsPushEvent.onPushMessageSent(result => {
            console.log("onPushMessageSent", result);
        });

        this.onMessageSentErrorListener = HmsPushEvent.onPushMessageSentError(result => {
            console.log("onMessageSentError", result);
        });

        this.onMessageSentDeliveredListener = HmsPushEvent.onPushMessageSentDelivered(result => {
            console.log("onMessageSentDelivered", result);
        });

        this.onLocalNotificationActionListener = HmsPushEvent.onLocalNotificationAction(result => {
            console.log("onLocalNotificationAction", result);

            const notification = JSON.parse(result.dataJSON);
            if (notification.action === "Yes") {
                HmsLocalNotification.cancelNotificationsWithId([notification.id]);
            }
            console.log("onLocalNotificationAction-Clicked", notification.action);
        });

        this.onNotificationOpenedAppListener = HmsPushEvent.onNotificationOpenedApp(result => {
            console.log("onNotificationOpenedApp", result);
        });
    }

    componentWillUnmount() {
        this.onRemoteMessageReceivedListener.remove();
        this.onTokenReceivedListener.remove();
        this.onTokenErrorListener.remove();
        this.onMultiSenderTokenReceivedListener.remove();
        this.onMultiSenderTokenErrorListener.remove();
        this.onPushMessageSentListener.remove();
        this.onMessageSentErrorListener.remove();
        this.onMessageSentDeliveredListener.remove();
        this.onLocalNotificationActionListener.remove();
        this.onNotificationOpenedAppListener.remove();
    }

    onChangeTopic(inputData: string) {
        this.setState({
            topic: inputData,
        });
    }

    turnOnPush() {
        HmsPushMessaging.turnOnPush()
            .then(result => {
                console.log("turnOnPush", result);
            })
            .catch(err => {
                console.log("[turnOnPush] Error/Exception: " + JSON.stringify(err));
            });
    }

    turnOffPush() {
        HmsPushMessaging.turnOffPush()
            .then(result => {
                console.log("turnOffPush", result);
            })
            .catch(err => {
                console.log("[turnOffPush] Error/Exception: " + JSON.stringify(err));
            });
    }

    getID() {
        HmsPushInstanceId.getId()
            .then(result => {
                console.log("getId", result);
            })
            .catch(err => {
                console.log("[getID] Error/Exception: " + JSON.stringify(err));
            });
    }

    getAAID() {
        HmsPushInstanceId.getAAID()
            .then(result => {
                console.log("getAAID", result);
            })
            .catch(err => {
                console.log("[getAAID] Error/Exception: " + JSON.stringify(err));
            });
    }
    getOdid() {
        HmsPushOpenDevice.getOdid()
            .then(result => {
                console.log("getOdid", result);
            })
            .catch(err => {
                console.log("[getOdid] Error/Exception: " + JSON.stringify(err));
            });
    }

    getToken() {
        HmsPushInstanceId.getToken("")
            .then(result => {
                console.log("getToken", result);
            })
            .catch(err => {
                console.log("[getToken] Error/Exception: " + JSON.stringify(err));
            });
    }

    getTokenWithSubjectId() {
        HmsPushInstanceId.getTokenWithSubjectId(this.state.subjectId)
            .then(result => {
                console.log("getTokenWithSubjectId", result);
            })
            .catch(err => {
                console.log("[getTokenWithSubjectId] Error/Exception: " + JSON.stringify(err));
            });
    }

    getCreationTime() {
        HmsPushInstanceId.getCreationTime()
            .then(result => {
                console.log("getCreationTime", result);
            })
            .catch(err => {
                console.log("[getCreationTime] Error/Exception: " + JSON.stringify(err));
            });
    }

    deleteAAID() {
        HmsPushInstanceId.deleteAAID()
            .then(result => {
                console.log("deleteAAID", result);
            })
            .catch(err => {
                console.log("[deleteAAID] Error/Exception: " + JSON.stringify(err));
            });
    }

    deleteToken() {
        HmsPushInstanceId.deleteToken("")
            .then(result => {
                console.log("deleteToken", result);
            })
            .catch(err => {
                console.log("[deleteToken] Error/Exception: " + JSON.stringify(err));
            });
    }

    deleteTokenWithSubjectId() {
        HmsPushInstanceId.deleteTokenWithSubjectId(this.state.subjectId)
            .then(result => {
                console.log("deleteTokenWithSubjectId", result);
            })
            .catch(err => {
                console.log("[deleteTokenWithSubjectId] Error/Exception: " + JSON.stringify(err));
            });
    }

    subscribe() {
        HmsPushMessaging.subscribe(this.state.topic)
            .then(result => {
                console.log("subscribe", result);
            })
            .catch(err => {
                console.log(JSON.stringify(err));
                console.log("[subscribe] Error/Exception: " + JSON.stringify(err));
            });
    }

    unsubscribe() {
        HmsPushMessaging.unsubscribe(this.state.topic)
            .then(result => {
                console.log("unsubscribe", result);
            })
            .catch(err => {
                console.log("[unsubscribe] Error/Exception: " + JSON.stringify(err));
            });
    }

    sendRemoteMessage() {
        HmsPushMessaging.sendRemoteMessage({
            [RemoteMessageBuilder.TO]: "",
            // [RemoteMessageBuilder.MESSAGE_ID]: '', // Auto generated
            [RemoteMessageBuilder.MESSAGE_TYPE]: "hms",
            [RemoteMessageBuilder.COLLAPSE_KEY]: "-1",
            [RemoteMessageBuilder.TTL]: 120,
            [RemoteMessageBuilder.RECEIPT_MODE]: 1,
            [RemoteMessageBuilder.SEND_MODE]: 1,
            [RemoteMessageBuilder.DATA]: { key1: "test", message: "huawei-test" },
        })
            .then(result => {
                console.log("sendRemoteMessage", result);
            })
            .catch(err => {
                console.log("[sendRemoteMessage] Error/Exception: " + JSON.stringify(err));
            });
    }

    isAutoInitEnabled() {
        HmsPushMessaging.isAutoInitEnabled()
            .then(result => {
                console.log("isAutoInitEnabled", result);
            })
            .catch(err => {
                console.log("[isAutoInitEnabled] Error/Exception: " + JSON.stringify(err));
            });
    }
    setAutoInitEnabled(value: boolean) {
        HmsPushMessaging.setAutoInitEnabled(value)
            .then(result => {
                console.log("setAutoInitEnabled", result);
            })
            .catch(err => {
                console.log("[setAutoInitEnabled] Error/Exception: " + JSON.stringify(err));
            });
    }

    getInitialNotification() {
        HmsPushMessaging.getInitialNotification()
            .then(result => {
                console.log("getInitialNotification", result);
            })
            .catch(err => {
                console.log("[getInitialNotification] Error/Exception: " + JSON.stringify(err));
            });
    }

    isSupportProfile() {
        HmsPushProfile.isSupportProfile()
            .then(result => {
                console.log("isSupportProfile", result);
            })
            .catch(err => {
                console.log("[isSupportProfile] Error/Exception: " + JSON.stringify(err));
            });
    }

    addProfile() {
        HmsPushProfile.addProfile(HmsPushProfile.Type.HUAWEI_PROFILE, "profileId")
            .then(result => {
                console.log("addProfile", result);
            })
            .catch(err => {
                console.log("[addProfile] Error/Exception: " + JSON.stringify(err));
            });
    }

    addProfileWithSubjectId() {
        HmsPushProfile.addProfileWithSubjectId("<subject_Id>", HmsPushProfile.Type.HUAWEI_PROFILE, "<profileId>")
            .then(result => {
                console.log("addProfileWithSubjectId", result);
            })
            .catch(err => {
                console.log("[addProfileWithSubjectId] Error/Exception: " + JSON.stringify(err));
            });
    }

    deleteProfile() {
        HmsPushProfile.deleteProfile("<profile_Id>")
            .then(result => {
                console.log("deleteProfile", result);
            })
            .catch(err => {
                console.log("[deleteProfile] Error/Exception: " + JSON.stringify(err));
            });
    }

    deleteProfileWithSubjectId() {
        HmsPushProfile.deleteProfileWithSubjectId("<subject_Id>", "<profile_Id>")
            .then(result => {
                console.log("deleteProfileWithSubjectId", result);
            })
            .catch(err => {
                console.log("[deleteProfileWithSubjectId] Error/Exception: " + JSON.stringify(err));
            });
    }

    render() {
        return null;
    }
}
