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

import { HmsLocalNotification, HmsPushEvent, HmsPushMessaging, RNRemoteMessage } from "@hmscore/react-native-hms-push";

HmsPushEvent.onNotificationOpenedApp(result => {
    console.log("onNotificationOpenedApp", result);
});

HmsPushMessaging.setBackgroundMessageHandler(dataMessage => {
    HmsLocalNotification.localNotification({
        [HmsLocalNotification.Attr.title]: "[Headless] DataMessage Received",
        [HmsLocalNotification.Attr.message]: new RNRemoteMessage(dataMessage).getDataOfMap(), // $ExpectType string
    })
        .then(result => {
            console.log("[Headless] DataMessage Received", result);
        })
        .catch(err => {
            console.log("[LocalNotification Default] Error/Exception: " + JSON.stringify(err));
        });

    return Promise.resolve();
});
