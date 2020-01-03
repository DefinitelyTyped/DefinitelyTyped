import { OnfleetDestination, CreateDestinationProps } from './Destinations';
import { OnfleetMetadata } from '../metadata';
import { OnfleetRecipient, CreateRecipientProps } from './Recipients';

declare class Task {
  autoAssign(tasks: Task.OnfleetTask[]): Promise<any>; // TODO need to confirm response
  batchCreate(tasks: Task.CreateTaskProps[]): Promise<Task.OnfleetTask[]>;
  clone(id: string): Promise<Task.OnfleetTask>;
  create(task: Task.CreateTaskProps): Promise<Task.OnfleetTask>;
  deleteOne(id: string): Promise<number>;
  forceComplete(id: string): Promise<void>;
  get(queryOrId: string, queryKey?: Task.TaskQueryKey): Promise<Task.OnfleetTask>;
  get(queryParams?: Task.TaskQueryParam): Promise<Task.OnfleetTask[]>;
  update(id: string, task: Partial<Task.CreateTaskProps>): Promise<Task.UpdateTaskResult>;
}

declare namespace Task {
  type TaskQueryKey = 'shortId';

  interface OnfleetTask {
    completeAfter: number;
    completeBefore: number;
    completionDetails: {
      failureNotes: string;
      failureReason: string;
      events: any[];
      actions: any[];
      time: number | null;
      firstLocation: any[];
      lastLocation: any[];
      unavailableAttachments: any[];
    };
    container: {
      organization: string;
      type: string;
    };
    creator: string;
    dependencies: string[];
    destination: OnfleetDestination;
    didAutoAssign: boolean;
    executor: string;
    feedback: any[];
    id: string;
    identity: {
      failedScanCount: number;
      checksum: null;
    };
    merchant: string;
    metadata: OnfleetMetadata[];
    notes: string;
    organization: string;
    overrides: {
      recipientName: string | null;
      recipientNotes: string | null;
      recipientSkipSMSNotifications: string | null;
      useMerchantForProxy: string | null;
    };
    pickupTask: boolean;
    quantity: number;
    recipients: OnfleetRecipient[];
    serviceTime: number;
    shortId: string;
    state: number;
    timeCreated: number;
    timeLastModified: number;
    trackingURL: string;
    trackingViewed: boolean;
    worker: string | null;
  }

  interface CreateTaskProps {
    destination: string | CreateDestinationProps;
    recipients: string[] | CreateRecipientProps[];
    autoAssign?: TaskAutoAssign;
    capacity?: number;
    completeAfter?: number;
    completeBefore?: number;
    dependencies?: string[];
    executor?: string;
    metadata?: OnfleetMetadata[];
    merchant?: string;
    notes?: string;
    pickupTask?: boolean;
    quantity?: number;
    recipientName?: string;
    recipientNotes?: string;
    recipientSkipSMSNotifications?: boolean;
    requirements?: TaskCompletionRequirements;
  }
  interface TaskAutoAssign {
    mode: string;
    considerDependencies?: boolean;
    excludeWorkerIds?: string[];
    maxAssignedTaskCount?: number;
    team?: string;
  }

  interface TaskCompletionRequirements {
    minimumAge?: number;
    notes?: boolean;
    photo?: boolean;
    signature?: boolean;
  }

  interface TaskQueryParam {
    from: number;
    completeAfterAfter?: number;
    completeBeforeBefore?: number;
    dependencies?: string;
    lastId?: string;
    state?: number;
    to?: number;
    worker?: string;
  }

  interface CloneTaskOptions {
    includeBarCodes: boolean;
    includeDependencies: boolean;
    includeMetadata: boolean;
    overrides?: {
      completeAfter?: number;
      completeBefore?: number;
      destination?: string | CreateDestinationProps;
      metadata?: OnfleetMetadata[];
      notes?: string;
      pickupTask?: boolean;
      recipients?: OnfleetRecipient | OnfleetRecipient[];
      serviceTime?: number;
    };
  }

  interface UpdateTaskResult extends OnfleetTask {
    estimatedArrivalTime: number | null;
    estimatedCompletionTime: number | null;
    eta: number;
    trackingViewed: boolean;
  }
}

export = Task;
