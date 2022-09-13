import {
    FetchDidFailCallback,
    WorkboxPlugin,
} from "workbox-core/types/WorkboxPlugin";

import { QueueOptions } from "./Queue";

export class Plugin implements WorkboxPlugin {
    constructor(name: string, options?: QueueOptions);
    fetchDidFail: FetchDidFailCallback;
}
