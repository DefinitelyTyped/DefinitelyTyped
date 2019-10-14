import { OnfleetRecipient, RecipientResult } from './Recipient';
import { OnfleetDestination, DestinationResult } from './Destination';
import { OnfleetMetadata } from '../metadata';

export class Task {
  autoAssign(tasks: OnfleetTask[]): Promise<any>; // TODO need to confirm response
  batch(tasks: OnfleetTask[]): Promise<TaskResult[]>;
  clone(id: string, options?: CloneTaskOptions): Promise<TaskResult>;
  create(task: OnfleetTask): Promise<TaskResult>;
  deleteOne(id: string): Promise<number>;
  forceComplete(id: string): Promise<any>; // TODO need to confirm response
  get(): Promise<TaskResult[]>;
  get(id: string): Promise<TaskResult>;
  get(queryParams: TaskQueryParam): Promise<TaskResult[]>;
  get(queryValue: string, queryKey: TaskQueryKey): Promise<TaskResult>;
  update(id: string, task: Partial<OnfleetTask>): Promise<UpdateTaskResult>;
}

export type TaskQueryKey = 'shortId';

export interface OnfleetTask {
  destination: string | OnfleetDestination;
  recipients: string[] | OnfleetRecipient[];
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

export interface TaskAutoAssign {
  mode: string;
  considerDependencies?: boolean;
  excludeWorkerIds?: string[];
  maxAssignedTaskCount?: number;
  team?: string;
}

export interface TaskCompletionRequirements {
  minimumAge?: number;
  notes?: boolean;
  photo?: boolean;
  signature?: boolean;
}

export interface TaskQueryParam {
  from: number;
  completeAfterAfter?: number;
  completeBeforeBefore?: number;
  dependencies?: string;
  lastId?: string;
  state?: number;
  to?: number;
  worker?: string;
}

export interface CloneTaskOptions {
  includeBarCodes: boolean;
  includeDependencies: boolean;
  includeMetadata: boolean;
  overrides?: {
    completeAfter?: number;
    completeBefore?: number;
    destination?: string | OnfleetDestination;
    metadata?: OnfleetMetadata[];
    notes?: string;
    pickupTask?: boolean;
    recipients?: OnfleetRecipient | OnfleetRecipient[];
    serviceTime?: number;
  };
}

export interface TaskResult {
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
  destination: DestinationResult;
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
  recipients: RecipientResult[];
  serviceTime: number;
  shortId: string;
  state: number;
  timeCreated: number;
  timeLastModified: number;
  trackingURL: string;
  trackingViewed: boolean;
  worker: string | null;
}

export interface UpdateTaskResult extends TaskResult {
  estimatedArrivalTime: number | null;
  estimatedCompletionTime: number | null;
  eta: number;
  trackingViewed: boolean;
}
