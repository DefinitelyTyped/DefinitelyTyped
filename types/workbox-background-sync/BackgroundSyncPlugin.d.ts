import { FetchDidFailCallback, WorkboxPlugin } from "workbox-core/types/WorkboxPlugin";

import { QueueOptions } from "./Queue";

export class BackgroundSyncPlugin implements WorkboxPlugin {
    constructor(name: string, options?: QueueOptions);
    fetchDidFail: FetchDidFailCallback;
}
