//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

import { Azure } from 'azure-sb';
import Dictionary = Azure.ServiceBus.Dictionary;

export namespace Azure.ServiceBus.Results {
    export interface QueueProperties {
        DeadLetteringOnMessageExpiration: string;
        DefaultMessageTimeToLive: string;
        DuplicateDetectionHistoryTimeWindow: string;
        EnableBatchedOperations: boolean;
        EnablePartitioning: boolean;
        LockDuration: string;
        MaxDeliveryCount: number;
        MaxSizeInMegabytes: number;
        MessageCount: number;
        RequiresDuplicateDetection: boolean;
        RequiresSession: boolean;
        SizeInBytes: number;
    }

    export interface QueueResult {
        serialize(resource: QueueProperties): string;

        parse(xml: object): object | object[];
    }
}
