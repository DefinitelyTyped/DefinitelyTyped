import { BuildCompletedDrop } from "./build-completed-drop";
import { BuildCompletedLog } from "./build-completed-log";
import { ResourceUser } from "./resource-user";
import { BuildCompletedDefinition } from "./build-completed-definition";
import { BuildCompletedQueueDefinition } from "./build-completed-queue-definition";
import { BuildCompletedRequest } from "./build-completed-request";
import { BaseResource } from "./base-resource";

export interface BuildCompletedResource extends BaseResource {
    uri: string;
    id: number;
    buildNumber: string;
    url: string;
    startTime: string;
    finishTime: string;
    reason: string;
    status: string;
    dropLocation: string;
    drop: BuildCompletedDrop;
    log: BuildCompletedLog;
    sourceGetVersion: string;
    lastChangedBy: ResourceUser;
    retainIndefinitely: boolean;
    hasDiagnostics: boolean;
    definition: BuildCompletedDefinition;
    queue: BuildCompletedQueueDefinition;
    requests: BuildCompletedRequest[];
}