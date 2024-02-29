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

import * as React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import { HmsLocalNotification } from "@hmscore/react-native-hms-push";

const defaultNotification = {
    [HmsLocalNotification.Attr.title]: "Notification Title",
    [HmsLocalNotification.Attr.message]: "Notification Message", // (required)
    [HmsLocalNotification.Attr.ticker]: "Optional Ticker",
    [HmsLocalNotification.Attr.showWhen]: true,
    // [HmsLocalNotification.Attr.largeIconUrl]: 'https://developer.huawei.com/Enexport/sites/default/images/en/Develop/hms/push/push2-tuidedao.png', //
    [HmsLocalNotification.Attr.largeIcon]: "ic_launcher",
    [HmsLocalNotification.Attr.smallIcon]: "ic_notification",
    [HmsLocalNotification.Attr.bigText]: "This is a bigText",
    [HmsLocalNotification.Attr.subText]: "This is a subText",
    [HmsLocalNotification.Attr.color]: "white",
    [HmsLocalNotification.Attr.vibrate]: false,
    [HmsLocalNotification.Attr.vibrateDuration]: 1000,
    [HmsLocalNotification.Attr.tag]: "hms_tag",
    [HmsLocalNotification.Attr.groupSummary]: false,
    [HmsLocalNotification.Attr.ongoing]: false,
    [HmsLocalNotification.Attr.importance]: HmsLocalNotification.Importance.max,
    [HmsLocalNotification.Attr.dontNotifyInForeground]: false,
    [HmsLocalNotification.Attr.autoCancel]: false, // for Custom Actions, it should be false
    [HmsLocalNotification.Attr.actions]: "[\"Yes\", \"No\"]",
    [HmsLocalNotification.Attr.invokeApp]: false,
    // [HmsLocalNotification.Attr.channelId]: 'huawei-hms-rn-push-channel-id', // Please read the documentation before using this param
};

interface State {
    title: string;
    message: string;
    bigText: string;
    subText: string;
    tag: string | undefined;
    [k: string]: unknown;
}

export default class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            title: "HMS Push",
            message: "This is Local Notification",
            bigText: "This is a bigText",
            subText: "This is a subText",
            tag: undefined,
        };
    }

    changeNotificationValue(key: string, data: unknown) {
        this.setState({
            [key]: data,
        });
    }

    localNotificationScheduled() {
        HmsLocalNotification.localNotificationSchedule({
            ...defaultNotification,
            [HmsLocalNotification.Attr.title]: this.state.title,
            [HmsLocalNotification.Attr.message]: this.state.message,
            [HmsLocalNotification.Attr.bigText]: this.state.bigText,
            [HmsLocalNotification.Attr.subText]: this.state.subText,
            [HmsLocalNotification.Attr.tag]: this.state.tag,
            [HmsLocalNotification.Attr.fireDate]: new Date(Date.now() + 60 * 1000).getTime(), // in 1 min
            [HmsLocalNotification.Attr.allowWhileIdle]: true,
        })
            .then(result => {
                console.log("LocalNotification Scheduled", result);
            })
            .catch(err => {
                console.log("[LocalNotification Scheduled] Error/Exception: " + JSON.stringify(err));
            });
    }

    localNotification() {
        HmsLocalNotification.localNotification({
            ...defaultNotification,
            [HmsLocalNotification.Attr.title]: this.state.title,
            [HmsLocalNotification.Attr.message]: this.state.message,
            [HmsLocalNotification.Attr.bigText]: this.state.bigText,
            [HmsLocalNotification.Attr.subText]: this.state.subText,
            [HmsLocalNotification.Attr.tag]: this.state.tag,
        })
            .then(result => {
                console.log("LocalNotification Default", result);
            })
            .catch(err => {
                console.log("[LocalNotification Default] Error/Exception: " + JSON.stringify(err));
            });
    }

    localNotificationVibrate() {
        HmsLocalNotification.localNotification({
            ...defaultNotification,
            [HmsLocalNotification.Attr.title]: this.state.title,
            [HmsLocalNotification.Attr.message]: this.state.message,
            [HmsLocalNotification.Attr.bigText]: this.state.bigText,
            [HmsLocalNotification.Attr.subText]: this.state.subText,
            [HmsLocalNotification.Attr.tag]: this.state.tag,
            [HmsLocalNotification.Attr.vibrate]: true,
            [HmsLocalNotification.Attr.vibrateDuration]: 5000,
        })
            .then(result => {
                console.log("LocalNotification Vibrate", result);
            })
            .catch(err => {
                console.log("[LocalNotification Vibrate] Error/Exception: " + JSON.stringify(err));
            });
    }

    localNotificationRepeat() {
        HmsLocalNotification.localNotification({
            ...defaultNotification,
            [HmsLocalNotification.Attr.title]: this.state.title,
            [HmsLocalNotification.Attr.message]: this.state.message,
            [HmsLocalNotification.Attr.bigText]: this.state.bigText,
            [HmsLocalNotification.Attr.subText]: this.state.subText,
            [HmsLocalNotification.Attr.tag]: this.state.tag,
            [HmsLocalNotification.Attr.repeatType]: HmsLocalNotification.RepeatType.minute,
        })
            .then(result => {
                console.log("LocalNotification Repeat", result);
            })
            .catch(err => {
                console.log("[LocalNotification Repeat] Error/Exception: " + JSON.stringify(err));
            });
    }
    localNotificationSound() {
        HmsLocalNotification.localNotification({
            ...defaultNotification,
            [HmsLocalNotification.Attr.title]: this.state.title,
            [HmsLocalNotification.Attr.message]: this.state.message,
            [HmsLocalNotification.Attr.bigText]: this.state.bigText,
            [HmsLocalNotification.Attr.subText]: this.state.subText,
            [HmsLocalNotification.Attr.tag]: this.state.tag,
            [HmsLocalNotification.Attr.playSound]: true,
            [HmsLocalNotification.Attr.soundName]: "huawei_bounce.mp3",
        })
            .then(result => {
                console.log("LocalNotification Sound", result);
            })
            .catch(err => {
                console.log("[LocalNotification Sound] Error/Exception: " + JSON.stringify(err));
            });
    }
    localNotificationPriority() {
        HmsLocalNotification.localNotification({
            ...defaultNotification,
            [HmsLocalNotification.Attr.title]: this.state.title,
            [HmsLocalNotification.Attr.message]: this.state.message,
            [HmsLocalNotification.Attr.bigText]: this.state.bigText,
            [HmsLocalNotification.Attr.subText]: this.state.subText,
            [HmsLocalNotification.Attr.tag]: this.state.tag,
            [HmsLocalNotification.Attr.priority]: HmsLocalNotification.Priority.max,
        })
            .then(result => {
                console.log("LocalNotification Priority", result);
            })
            .catch(err => {
                console.log("[LocalNotification Priority] Error/Exception: " + JSON.stringify(err));
            });
    }

    localNotificationOngoing() {
        HmsLocalNotification.localNotification({
            ...defaultNotification,
            [HmsLocalNotification.Attr.title]: this.state.title,
            [HmsLocalNotification.Attr.message]: this.state.message,
            [HmsLocalNotification.Attr.bigText]: this.state.bigText,
            [HmsLocalNotification.Attr.subText]: this.state.subText,
            [HmsLocalNotification.Attr.tag]: this.state.tag,
            [HmsLocalNotification.Attr.ongoing]: true,
        })
            .then(result => {
                console.log("LocalNotification Ongoing", result);
            })
            .catch(err => {
                console.log("[LocalNotification Ongoing] Error/Exception: " + JSON.stringify(err));
            });
    }
    localNotificationBigImage() {
        HmsLocalNotification.localNotification({
            ...defaultNotification,
            [HmsLocalNotification.Attr.title]: this.state.title,
            [HmsLocalNotification.Attr.message]: this.state.message,
            [HmsLocalNotification.Attr.bigText]: this.state.bigText,
            [HmsLocalNotification.Attr.subText]: this.state.subText,
            [HmsLocalNotification.Attr.tag]: this.state.tag,
            [HmsLocalNotification.Attr.bigPictureUrl]:
                "https://www-file.huawei.com/-/media/corp/home/image/logo_400x200.png",
        })
            .then(result => {
                console.log("LocalNotification BigImage", result);
            })
            .catch(err => {
                console.log("[LocalNotification BigImage] Error/Exception: " + JSON.stringify(err));
            });
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text>Title :</Text>
                    <TextInput
                        value={this.state.title}
                        placeholder="title"
                        onChangeText={e => this.changeNotificationValue("title", e)}
                    />
                    <TextInput
                        value={this.state.tag}
                        placeholder="tag"
                        onChangeText={e => this.changeNotificationValue("tag", e)}
                    />
                </View>
                <View>
                    <Text>Message :</Text>
                    <TextInput
                        value={this.state.message}
                        placeholder="message"
                        onChangeText={e => this.changeNotificationValue("message", e)}
                    />
                </View>
                <View>
                    <Text>BigText :</Text>
                    <TextInput
                        value={this.state.bigText}
                        placeholder="bigText"
                        onChangeText={e => this.changeNotificationValue("bigText", e)}
                    />
                </View>
                <View>
                    <Text>SubText :</Text>
                    <TextInput
                        value={this.state.subText}
                        placeholder="subText"
                        onChangeText={e => this.changeNotificationValue("subText", e)}
                    />
                </View>

                <View>
                    <TouchableOpacity onPress={() => this.localNotification()}>
                        <Text>Local Notification (Default)</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => this.localNotificationOngoing()}>
                        <Text>+ Ongoing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.localNotificationSound()}>
                        <Text>+ Sound</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.localNotificationVibrate()}>
                        <Text>+ Vibrate</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => this.localNotificationBigImage()}>
                        <Text>+ BigImage</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.localNotificationRepeat()}>
                        <Text>+ Repeat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.localNotificationScheduled()}>
                        <Text>+ Scheduled</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => {
                            HmsLocalNotification.cancelAllNotifications()
                                .then(result => {
                                    console.log("cancelAllNotifications", result);
                                })
                                .catch(err => {
                                    console.log("[cancelAllNotifications] Error/Exception: " + JSON.stringify(err));
                                });
                        }}
                    >
                        <Text>cancelAllNotifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            HmsLocalNotification.getNotifications()
                                .then(result => {
                                    console.log("getNotifications", result);
                                })
                                .catch(err => {
                                    console.log("[getNotifications] Error/Exception: " + JSON.stringify(err));
                                });
                        }}
                    >
                        <Text>getNotifications</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            HmsLocalNotification.cancelScheduledNotifications()
                                .then(result => {
                                    console.log("cancelScheduledNotifications", result);
                                })
                                .catch(err => {
                                    console.log(
                                        "[cancelScheduledNotifications] Error/Exception: " + JSON.stringify(err),
                                    );
                                });
                        }}
                    >
                        <Text>cancelScheduledNotifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            HmsLocalNotification.getScheduledNotifications()
                                .then(result => {
                                    console.log("getScheduledNotifications", result);
                                })
                                .catch(err => {
                                    console.log("[getScheduledNotifications] Error/Exception: " + JSON.stringify(err));
                                });
                        }}
                    >
                        <Text>getScheduledLocalNotifications</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            HmsLocalNotification.cancelNotificationsWithTag("tag")
                                .then(result => {
                                    console.log("cancelNotificationsWithTag", result);
                                })
                                .catch(err => {
                                    console.log("[cancelNotificationsWithTag] Error/Exception: " + JSON.stringify(err));
                                });
                        }}
                    >
                        <Text>cancelNotificationsWithTag(tag)</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            HmsLocalNotification.getChannels()
                                .then(result => {
                                    console.log("getChannels", result);
                                })
                                .catch(err => {
                                    console.log("[getChannels] Error/Exception: " + JSON.stringify(err));
                                });
                        }}
                    >
                        <Text>getChannels</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            HmsLocalNotification.cancelNotifications()
                                .then(result => {
                                    console.log("cancelNotifications", result);
                                })
                                .catch(err => {
                                    console.log("[cancelNotifications] Error/Exception: " + JSON.stringify(err));
                                });
                        }}
                    >
                        <Text>cancelNotifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            HmsLocalNotification.deleteChannel("hms-channel-custom")
                                .then(result => {
                                    console.log("deleteChannel", result);
                                })
                                .catch(err => {
                                    console.log("[deleteChannel] Error/Exception: " + JSON.stringify(err));
                                });
                        }}
                    >
                        <Text>deleteChannel</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            HmsLocalNotification.channelBlocked("huawei-hms-rn-push-channel-id")
                                .then(result => {
                                    console.log("channelBlocked", result);
                                })
                                .catch(err => {
                                    console.log("[channelBlocked] Error/Exception: " + JSON.stringify(err));
                                });
                        }}
                    >
                        <Text>channelBlocked</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            HmsLocalNotification.channelExists("huawei-hms-rn-push-channel-id")
                                .then(result => {
                                    console.log("channelExists", result);
                                })
                                .catch(err => {
                                    console.log("[channelExists] Error/Exception: " + JSON.stringify(err));
                                });
                        }}
                    >
                        <Text>channelExists</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
