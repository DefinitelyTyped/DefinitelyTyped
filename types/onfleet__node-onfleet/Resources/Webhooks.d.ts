declare class Webhook {
    create(webhook: Webhook.OnfleetWebhook): Promise<Webhook.WebhookResult>;
    deleteOne(id: string): Promise<void>;
    get(): Promise<Webhook.GetWebhookResult[]>;
}

declare namespace Webhook {
    interface OnfleetWebhook {
        trigger: WebhookTriggerType["triggerId"];
        url: string;
        name?: string;
        threshold?: number | undefined;
    }

    interface WebhookResult {
        count: number;
        id: string;
        trigger: WebhookTriggerType["triggerId"];
        url: string;
    }

    interface GetWebhookResult extends WebhookResult {
        isEnabled: boolean;
    }

    enum WebhookTriggerName {
        SmsRecipientResponseMissed = "smsRecipientResponseMissed",
        TaskArrival = "taskArrival",
        TaskAssigned = "taskAssigned",
        TaskCloned = "taskCloned",
        TaskCompleted = "taskCompleted",
        TaskCreated = "taskCreated",
        TaskDelayed = "taskDelayed",
        TaskDeleted = "taskDeleted",
        TaskEta = "taskEta",
        TaskFailed = "taskFailed",
        TaskStarted = "taskStarted",
        TaskUnassigned = "taskUnassigned",
        TaskUpdated = "taskUpdated",
        WorkerDuty = "workerDuty",
    }

    type WebhookTriggerType =
        | { triggerId: 0; triggerName: WebhookTriggerName.TaskStarted }
        | { triggerId: 1; triggerName: WebhookTriggerName.TaskEta }
        | { triggerId: 2; triggerName: WebhookTriggerName.TaskArrival }
        | { triggerId: 3; triggerName: WebhookTriggerName.TaskCompleted }
        | { triggerId: 4; triggerName: WebhookTriggerName.TaskFailed }
        | { triggerId: 5; triggerName: WebhookTriggerName.WorkerDuty }
        | { triggerId: 6; triggerName: WebhookTriggerName.TaskCreated }
        | { triggerId: 7; triggerName: WebhookTriggerName.TaskUpdated }
        | { triggerId: 8; triggerName: WebhookTriggerName.TaskDeleted }
        | { triggerId: 9; triggerName: WebhookTriggerName.TaskAssigned }
        | { triggerId: 10; triggerName: WebhookTriggerName.TaskUnassigned }
        | { triggerId: 12; triggerName: WebhookTriggerName.TaskDelayed }
        | { triggerId: 13; triggerName: WebhookTriggerName.TaskCloned }
        | { triggerId: 14; triggerName: WebhookTriggerName.SmsRecipientResponseMissed };

    namespace Payload {
        interface ActionContext {
            id: string;
            type: string;
            apiKeyScopeId?: string | undefined;
        }

        interface WebhookPayload {
            actionContext: ActionContext | null;
            adminId: string | null;
            taskId: string | null;
            time: number;
            triggerId: number;
            triggerName: string;
            workerId: string | null;
        }

        interface TaskCreatedPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
            };
        }

        interface TaskUpdatedPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
                worker?: { [key: string]: unknown } | undefined;
            };
        }

        interface TaskClonedPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
            };
        }

        interface TaskAssignedPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
                worker: { [key: string]: unknown };
            };
        }

        interface TaskUnassignedPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
            };
        }

        interface TaskDeletedPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
            };
        }

        interface TaskStartedPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
            };
        }

        interface TaskFailedPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
            };
        }

        interface TaskCompletedPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
            };
        }

        interface TaskDelayedPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
            };
            delay: number;
        }

        interface TaskETAPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
            };
            etaSeconds: number;
        }

        interface TaskArrivalPayload extends WebhookPayload {
            data: {
                task: { [key: string]: unknown };
            };
            distance: number;
        }

        interface WorkerCreatedPayload extends WebhookPayload {
            data: {
                worker: { [key: string]: unknown };
            };
        }

        interface WorkerDeletedPayload extends WebhookPayload {
            data: {
                worker: { [key: string]: unknown };
            };
        }

        interface WorkerDutyPayload extends WebhookPayload {
            data: {
                worker: { [key: string]: unknown };
            };
            status: number;
        }

        interface SMSRecipientOptOutPayload extends WebhookPayload {
            recipient: {
                id: string;
                name: string;
                phone: string;
            };
            timestamp: number;
            SMS: string;
            data: {};
        }

        interface AutoDispatchJobCompletedPayload extends WebhookPayload {
            data: {
                dispatch: { [key: string]: unknown };
            };
            dispatchId: string;
        }

        interface TaskBatchCreateJobCompletedPayload extends WebhookPayload {
            jobId: string;
            status: string;
            tasksReceived: number;
            tasksCreated: number;
            tasksErrored: number;
            errors: Array<{
                statusCode: number;
                errorCode: number;
                message: string;
                cause: string;
                taskData: { [key: string]: unknown };
            }>;
            failedTasks: Array<{ [key: string]: unknown }>;
            newTasks: Array<{ [key: string]: unknown }>;
            newTasksWithWarnings: Array<{ [key: string]: unknown }>;
            data: {};
        }
    }
}

export = Webhook;
