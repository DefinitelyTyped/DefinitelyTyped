declare class Webhook {
  create(webhook: Webhook.OnfleetWebhook): Promise<Webhook.WebhookResult>;
  deleteOne(id: string): Promise<void>;
  get(): Promise<Webhook.GetWebhookResult[]>;
}

declare namespace Webhook {
  interface OnfleetWebhook {
    trigger: WebhookTriggerType['triggerId'];
    url: string;
    threshold?: number;
  }

  interface WebhookResult {
    count: number;
    id: string;
    trigger: WebhookTriggerType['triggerId'];
    url: string;
  }

  interface GetWebhookResult extends WebhookResult {
    isEnabled: boolean;
  }

  enum WebhookTriggerName {
    SmsRecipientResponseMissed = 'smsRecipientResponseMissed',
    TaskArrival = 'taskArrival',
    TaskAssigned = 'taskAssigned',
    TaskCloned = 'taskCloned',
    TaskCompleted = 'taskCompleted',
    TaskCreated = 'taskCreated',
    TaskDelayed = 'taskDelayed',
    TaskDeleted = 'taskDeleted',
    TaskEta = 'taskEta',
    TaskFailed = 'taskFailed',
    TaskStarted = 'taskStarted',
    TaskUnassigned = 'taskUnassigned',
    TaskUpdated = 'taskUpdated',
    WorkerDuty = 'workerDuty',
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
}

export = Webhook;
