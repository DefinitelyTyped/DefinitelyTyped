import { OnfleetDestination, CreateDestinationProps } from './Destinations';
import { OnfleetMetadata, MatchMetadata } from '../metadata';
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
  matchMetadata: MatchMetadata<Task.OnfleetTask['metadata']>;
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
    container: TaskContainer;
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
    barcodes?: {
      /** The requested barcodes */
      required: Barcode[];
      /** Once a task is completed for which barcodes have been captured, the capture details can be found here */
      captured: CapturedBarcode[];
    } | undefined;
  }

  interface CreateTaskProps {
    destination: string | CreateDestinationProps;
    recipients: string[] | CreateRecipientProps[];
    autoAssign?: TaskAutoAssign | undefined;
    capacity?: number | undefined;
    container?: TaskContainer | undefined;
    completeAfter?: number | undefined;
    completeBefore?: number | undefined;
    dependencies?: string[] | undefined;
    executor?: string | undefined;
    metadata?: OnfleetMetadata[] | undefined;
    merchant?: string | undefined;
    notes?: string | undefined;
    pickupTask?: boolean | undefined;
    quantity?: number | undefined;
    recipientName?: string | undefined;
    recipientNotes?: string | undefined;
    recipientSkipSMSNotifications?: boolean | undefined;
    requirements?: TaskCompletionRequirements | undefined;
    barcodes?: Barcode[] | undefined;
  }
  interface TaskAutoAssign {
    mode: string;
    considerDependencies?: boolean | undefined;
    excludeWorkerIds?: string[] | undefined;
    maxAssignedTaskCount?: number | undefined;
    team?: string | undefined;
  }

  interface Barcode {
    /** Whether the worker must capture this data prior to task completion, defaults to false */
    blockCompletion?: boolean | undefined;
    /** Base64 representation of the data encoded within the barcode to be captured, max length of 500 characters */
    data?: string | undefined;
  }

  interface CapturedBarcode {
    /** The ID of the captured barcode */
    id: string;
    /** The symbology that was captured */
    symbology: string;
    /** The base64 string of the data contained in the captured barcode */
    data: Barcode['data'];
    /** The [ lon, lat ] coordinates where the barcode capture took place */
    location: [number, number];
    /** The time at which the barcode capture happened */
    time: number;
    /** Whether the barcode was captured as a result of a barcode request */
    wasRequested: boolean;
  }

  interface TaskCompletionRequirements {
    minimumAge?: number | undefined;
    notes?: boolean | undefined;
    photo?: boolean | undefined;
    signature?: boolean | undefined;
  }

  interface TaskQueryParam {
    from: number;
    completeAfterAfter?: number | undefined;
    completeBeforeBefore?: number | undefined;
    dependencies?: string | undefined;
    lastId?: string | undefined;
    state?: number | undefined;
    to?: number | undefined;
    worker?: string | undefined;
  }

  interface CloneTaskOptions {
    includeBarCodes: boolean;
    includeDependencies: boolean;
    includeMetadata: boolean;
    overrides?: {
      completeAfter?: number | undefined;
      completeBefore?: number | undefined;
      destination?: string | CreateDestinationProps | undefined;
      metadata?: OnfleetMetadata[] | undefined;
      notes?: string | undefined;
      pickupTask?: boolean | undefined;
      recipients?: OnfleetRecipient | OnfleetRecipient[] | undefined;
      serviceTime?: number | undefined;
    } | undefined;
  }

  interface UpdateTaskResult extends OnfleetTask {
    estimatedArrivalTime: number | null;
    estimatedCompletionTime: number | null;
    eta: number;
    trackingViewed: boolean;
  }

  interface WorkerTaskContainer {
    type: 'WORKER';
    worker: string;
  }

  interface OrganizationTaskContainer {
    type: 'ORGANIZATION';
    organization: string;
  }

  interface TeamTaskContainer {
    type: 'TEAM';
    team: string;
  }

  type TaskContainer = WorkerTaskContainer | OrganizationTaskContainer | TeamTaskContainer;
}

export = Task;
