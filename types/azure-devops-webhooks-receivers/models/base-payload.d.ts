import { PayloadMessage } from "./payload-message";
import { PayloadResourceContainers } from "./payload-resource-containers";

export interface BasePayload<T> {
    subscriptionId: string;
    notificationId: number;
    id: string;
    eventType: string;
    publisherId: string;
    message: PayloadMessage;
    detailedMessage: PayloadMessage;
    resource: T;
    resourceVersion: string;
    resourceContainers: PayloadResourceContainers;
    createdDate: string;
}