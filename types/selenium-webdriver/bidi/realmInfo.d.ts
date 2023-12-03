// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

declare type RealmType = {
    AUDIO_WORKLET: "audio-worklet";
    DEDICATED_WORKER: "dedicated-worker";
    PAINT_WORKLET: "paint-worklet";
    SERVICE_WORKED: "service-worker";
    SHARED_WORKED: "shared-worker";
    WINDOW: "window";
    WORKER: "worker";
    WORKLET: "worklet";

    findByName(name):
        | "audio-worklet"
        | "dedicated-worker"
        | "paint-worklet"
        | "service-worker"
        | "shared-worker"
        | "window"
        | "worker"
        | "worklet"
        | null;
};

declare class RealmInfo {
    constructor(realmId: string, origin: string, realmType: RealmType);

    static fromJson(input: any): RealmInfo;
}

declare class WindowRealmInfo extends RealmInfo {
    constructor(realmId: string, origin: string, realmType: RealmType, browsingContext: any, sandbox: boolean);
}

export { RealmInfo, RealmType };
