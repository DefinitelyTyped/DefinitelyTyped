// Type definitions for @google-cloud/tasks 0.2
// Project: https://github.com/googleapis/nodejs-tasks
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from "stream";
import {
  GoogleAuthOptions,
  GoogleError,
  CallOptions,
  GoogleAuth
} from "google-gax";

export interface CloudTasksConfig extends GoogleAuthOptions {
  key?: string;
  autoRetry?: boolean;
  maxRetries?: number;
  libName?: string;
  libVersion?: string;
  promise?: PromiseConstructor;
}

export interface AppEngineHttpQueue {
  appEngineRoutingOverride: AppEngineRouting;
}

export interface AppEngineHttpRequest {
  appEngineRouting?: AppEngineRouting;
  body: string;
  headers?: {
    [key: string]: string;
  };
  httpMethod: string;
  relativeUri: string;
}

export interface AppEngineRouting {
  host: string;
  instance: string;
  service: string;
  version: string;
}

export interface Attempt {
  dispatchTime: string;
  responseStatus: Status;
  responseTime: string;
  scheduleTime: string;
}

export interface Binding {
  condition: Expr;
  members: string[];
  role: string;
}

export interface CreateTaskRequest {
  responseView?: View;
  parent: string;
  task: Partial<Task>;
}

export interface Expr {
  description: string;
  expression: string;
  location: string;
  title: string;
}

export interface ListLocationsResponse {
  locations: Location[];
  nextPageToken?: string;
}

export interface ListQueuesResponse {
  nextPageToken?: string;
  queues: Queue[];
}

export interface ListTasksResponse {
  nextPageToken?: string;
  tasks: Task[];
}

export interface Location {
  displayName: string;
  labels: {
    [key: string]: string;
  };
  locationId: string;
  metadata: object;
  name: string;
}

export interface Policy {
  bindings: Binding[];
  etag: string;
  version: number;
}

export interface Queue {
  appEngineHttpQueue: AppEngineHttpQueue;
  name: string;
  purgeTime: string;
  rateLimits: RateLimits;
  retryConfig: RetryConfig;
  state: string;
}

export interface RateLimits {
  maxBurstSize: number;
  maxConcurrentDispatches: number;
  maxDispatchesPerSecond: number;
}

export interface RetryConfig {
  maxAttempts: number;
  maxBackoff: string;
  maxDoublings: number;
  maxRetryDuration: string;
  minBackoff: string;
}

export interface RunTaskRequest {
  responseView?: View;
}

export interface SetIamPolicyRequest {
  policy: Partial<Policy>;
}

export interface Status {
  code: number;
  details: object[];
  message: string;
}

/**
 * `VIEW_UNSPECIFIED = 0;`
 * When Unspecified. Defaults to the behaviour of BASIC.
 *
 * `BASIC = 1;`
 * The basic view omits fields which can be large or can contain
 * sensitive data.
 * This view does not include the
 * ([payload in AppEngineHttpRequest][google.cloud.tasks.v2beta2.AppEngineHttpRequest] and
 * [payload in PullMessage][google.cloud.tasks.v2beta2.PullMessage.payload]). These payloads are
 * desirable to return only when needed, because they can be large
 * and because of the sensitivity of the data that you choose to
 * store in it.
 *
 * `FULL = 2;`
 * All information is returned.
 *
 * Authorization for [FULL][google.cloud.tasks.v2beta2.Task.View.FULL] requires
 * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
 * permission on the [Queue][google.cloud.tasks.v2beta2.Queue] resource.
 */
export type View = 0 | 1 | 2;

export interface Task {
  appEngineHttpRequest: AppEngineHttpRequest;
  createTime: string;
  dispatchCount: number;
  firstAttempt: Attempt;
  lastAttempt: Attempt;
  name: string;
  responseCount: number;
  scheduleTime: string;
  view: View;
}

export interface TestIamPermissionsRequest {
  permissions?: string[];
}

export interface TestIamPermissionsResponse {
  permissions?: string[];
}

export interface PromiseLike<T> extends Promise<T> {
  /**
   * Cancel the ongoing promise
   */
  cancel(): void;
}

export type Keys<T> = keyof T;

export type EnhancedPick<
  T,
  Req extends keyof T,
  Opt extends keyof T
> = Required<Pick<T, Req>> & Partial<Pick<T, Req>>;

export type ProjectIdCallback = (
  err?: Error | null,
  projectId?: string | null
) => void;

export type APICallback<T = any> = (
  err: GoogleError | null,
  response?: T
) => void;

export type APIPaginatedCallback<T = any, U = any, V = any> = (
  err: GoogleError | null,
  response?: T,
  next?: U | null,
  rawResponse?: V
) => void;

export interface CallOptionsWithPagination extends CallOptions {
  autoPaginate: false;
}

export interface MethodOverload<T, R> {
  (data: T, options?: CallOptions): PromiseLike<[R]>;
  (data: T, options: CallOptions, callback: APICallback<R>): void;
  (data: T, callback: APICallback<R>): void;
}

export interface PaginatedMethodOverload<T, R, U, V = T> {
  (data: T, options: CallOptionsWithPagination): PromiseLike<[R, V, U]>;
  (data: T, options?: CallOptions): PromiseLike<[R]>;
  (data: T, options: CallOptions, callback: APICallback<R>): void;
  (
    data: T,
    options: CallOptionsWithPagination,
    callback: APIPaginatedCallback<R, V, U>
  ): void;
  (data: T, callback: APICallback<R>): void;
}

export interface ParentRequest {
  /**
   * The location name. For example: projects/PROJECT_ID/locations/LOCATION_ID
   */
  parent: string;
}

export interface ResourceRequest {
  /**
   * The resource for which the policy is being requested. resource is usually specified as a path. For example, a Project resource is specified as projects/{project}.
   */
  resource: string;
}

export interface ListRequestObject extends ParentRequest {
  /**
   * `filter` can be used to specify a subset of queues. Any Queue field can be used as a filter and several operators as supported.
   * For example: <=, <, >=, >, !=, =, :. The filter syntax is the same as described in Stackdriver's Advanced Logs Filters.
   * Sample filter "state: PAUSED".
   * Note that using filters might cause fewer queues than the requested page_size to be returned.
   */
  filter?: string;

  /**
   * The maximum number of resources contained in the underlying API response. If page streaming is performed per-resource,
   * this parameter does not affect the return value. If page streaming is performed per-page, this determines the maximum number of resources in a page.
   */
  pageSize?: number;
}

export interface NamedRequest {
  /**
   * The resource name of the queue. For example: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
   */
  name: string;
}

export type CreateNamedRequest<N extends string, T> = ParentRequest &
  { [P in N]: T };
export type UpdateNamedRequest<N extends string, T> = ParentRequest &
  { [P in N]: T };

/**
 * Cloud Tasks allows developers to manage the execution of background
 * work in their applications.
 */
export default class CloudTasksClient {
  /**
   * The DNS address for this API service.
   * @default 'cloudtasks.googleapis.com'
   */
  static readonly servicePath: string;

  /**
   * The port for this API service.
   * @default 443
   */
  static readonly port: number;

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @default ["https://www.googleapis.com/auth/cloud-platform"]
   */
  static readonlyscopes: string;

  auth: GoogleAuth;

  /**
   * Construct an instance of CloudTasksClient.
   *
   * @param [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param [options.credentials] - Credentials object.
   * @param [options.credentials.client_email]
   * @param [options.credentials.private_key]
   * @param [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param [options.port] - The port on which to connect to
   *     the remote host.
   * @param [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param [options.servicePath] - The domain name of the
   *     API remote host.
   */
  constructor(config: CloudTasksConfig);

  /**
   * Return the project ID used by this class.
   * @param callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(): PromiseLike<string>;
  getProjectId(callback: ProjectIdCallback): void;

  // -------------------
  // -- Service calls --
  // -------------------

  /**
   * Lists queues.
   *
   * Queues are returned in lexicographical order.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.parent
   *   Required.
   *
   *   The location name.
   *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
   * @param [request.filter]
   *   `filter` can be used to specify a subset of queues. Any Queue
   *   field can be used as a filter and several operators as supported.
   *   For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as
   *   described in
   *   [Stackdriver's Advanced Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
   *
   *   Sample filter "state: PAUSED".
   *
   *   Note that using filters might cause fewer queues than the
   *   requested page_size to be returned.
   * @param [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListQueuesResponse]{@link google.cloud.tasks.v2beta3.ListQueuesResponse}.
   *   The first element of the array is Array of [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Queue]{@link google.cloud.tasks.v2beta3.Queue} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListQueuesResponse]{@link google.cloud.tasks.v2beta3.ListQueuesResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   * client.listQueues({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listQueues(nextRequest, options).then(callback);
   *   }
   * }
   * client.listQueues({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listQueues: PaginatedMethodOverload<
    ListRequestObject,
    Queue[],
    ListQueuesResponse
  >;

  /**
   * Equivalent to {@link listQueues}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listQueues} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param request
   *   The request object that will be sent.
   * @param request.parent
   *   Required.
   *
   *   The location name.
   *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
   * @param [request.filter]
   *   `filter` can be used to specify a subset of queues. Any Queue
   *   field can be used as a filter and several operators as supported.
   *   For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as
   *   described in
   *   [Stackdriver's Advanced Logs Filters](https://cloud.google.com/logging/docs/view/advanced_filters).
   *
   *   Sample filter "state: PAUSED".
   *
   *   Note that using filters might cause fewer queues than the
   *   requested page_size to be returned.
   * @param [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   *   An object stream which emits an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue} on 'data' event.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * client.listQueuesStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listQueuesStream(
    request: ListRequestObject,
    options?: CallOptions
  ): Transform;

  /**
   * Gets a queue.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.name
   *   Required.
   *
   *   The resource name of the queue. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.getQueue({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getQueue: MethodOverload<NamedRequest, Queue>;

  /**
   * Creates a queue.
   *
   * Queues created with this method allow tasks to live for a maximum of 31
   * days. After a task is 31 days old, the task will be deleted regardless of whether
   * it was dispatched or not.
   *
   * WARNING: Using this method may have unintended side effects if you are
   * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
   * Read
   * [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml)
   * before using this method.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.parent
   *   Required.
   *
   *   The location name in which the queue will be created.
   *   For example: `projects/PROJECT_ID/locations/LOCATION_ID`
   *
   *   The list of allowed locations can be obtained by calling Cloud
   *   Tasks' implementation of
   *   ListLocations.
   * @param request.queue
   *   Required.
   *
   *   The queue to create.
   *
   *   Queue's name cannot be the same as an existing queue.
   *
   *   This object should have the same structure as [Queue]{@link google.cloud.tasks.v2beta3.Queue}
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.locationPath('[PROJECT]', '[LOCATION]');
   * const queue = {};
   * const request = {
   *   parent: formattedParent,
   *   queue: queue,
   * };
   * client.createQueue(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createQueue: MethodOverload<
    CreateNamedRequest<"queue", Partial<Queue>>,
    Queue
  >;

  /**
   * Updates a queue.
   *
   * This method creates the queue if it does not exist and updates
   * the queue if it does exist.
   *
   * Queues created with this method allow tasks to live for a maximum of 31
   * days. After a task is 31 days old, the task will be deleted regardless of whether
   * it was dispatched or not.
   *
   * WARNING: Using this method may have unintended side effects if you are
   * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
   * Read
   * [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml)
   * before using this method.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.queue
   *   Required.
   *
   *   The queue to create or update.
   *
   *   The queue's name must be specified.
   *
   *   Output only fields cannot be modified using UpdateQueue.
   *   Any value specified for an output only field will be ignored.
   *   The queue's name cannot be changed.
   *
   *   This object should have the same structure as [Queue]{@link google.cloud.tasks.v2beta3.Queue}
   * @param [request.updateMask]
   *   A mask used to specify which fields of the queue are being updated.
   *
   *   If empty, then all fields will be updated.
   *
   *   This object should have the same structure as [FieldMask]{@link google.protobuf.FieldMask}
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const queue = {};
   * client.updateQueue({queue: queue})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  updateQueue: MethodOverload<
    UpdateNamedRequest<
      "queue",
      EnhancedPick<
        Queue,
        "name",
        "appEngineHttpQueue" | "rateLimits" | "retryConfig"
      >
    >,
    Queue
  >;

  /**
   * Deletes a queue.
   *
   * This command will delete the queue even if it has tasks in it.
   *
   * Note: If you delete a queue, a queue with the same name can't be created
   * for 7 days.
   *
   * WARNING: Using this method may have unintended side effects if you are
   * using an App Engine `queue.yaml` or `queue.xml` file to manage your queues.
   * Read
   * [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml)
   * before using this method.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.name
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.deleteQueue({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteQueue: MethodOverload<NamedRequest, void>;

  /**
   * Purges a queue by deleting all of its tasks.
   *
   * All tasks created before this method is called are permanently deleted.
   *
   * Purge operations can take up to one minute to take effect. Tasks
   * might be dispatched before the purge takes effect. A purge is irreversible.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.name
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.purgeQueue({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  purgeQueue: MethodOverload<NamedRequest, Queue>;

  /**
   * Pauses the queue.
   *
   * If a queue is paused then the system will stop dispatching tasks
   * until the queue is resumed via
   * ResumeQueue. Tasks can still be added
   * when the queue is paused. A queue is paused if its
   * state is PAUSED.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.name
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.pauseQueue({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  pauseQueue: MethodOverload<NamedRequest, Queue>;

  /**
   * Resume a queue.
   *
   * This method resumes a queue after it has been
   * PAUSED or
   * DISABLED. The state of a queue is stored
   * in the queue's state; after calling this method it
   * will be set to RUNNING.
   *
   * WARNING: Resuming many high-QPS queues at the same time can
   * lead to target overloading. If you are resuming high-QPS
   * queues, follow the 500/50/5 pattern described in
   * [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
   *
   * @param request
   *   The request object that will be sent.
   * @param request.name
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The first element of the array is an object representing [Queue]{@link google.cloud.tasks.v2beta3.Queue}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.resumeQueue({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  resumeQueue: MethodOverload<NamedRequest, Queue>;

  /**
   * Gets the access control policy for a Queue.
   * Returns an empty policy if the resource exists and does not have a policy
   * set.
   *
   * Authorization requires the following
   * [Google IAM](https://cloud.google.com/iam) permission on the specified
   * resource parent:
   *
   * * `cloudtasks.queues.getIamPolicy`
   *
   * @param request
   *   The request object that will be sent.
   * @param request.resource
   *   REQUIRED: The resource for which the policy is being requested.
   *   `resource` is usually specified as a path. For example, a Project
   *   resource is specified as `projects/{project}`.
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.getIamPolicy({resource: formattedResource})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getIamPolicy: MethodOverload<ResourceRequest, Policy>;

  /**
   * Sets the access control policy for a Queue. Replaces any existing
   * policy.
   *
   * Note: The Cloud Console does not check queue-level IAM permissions yet.
   * Project-level permissions are required to use the Cloud Console.
   *
   * Authorization requires the following
   * [Google IAM](https://cloud.google.com/iam) permission on the specified
   * resource parent:
   *
   * * `cloudtasks.queues.setIamPolicy`
   *
   * @param request
   *   The request object that will be sent.
   * @param request.resource
   *   REQUIRED: The resource for which the policy is being specified.
   *   `resource` is usually specified as a path. For example, a Project
   *   resource is specified as `projects/{project}`.
   * @param request.policy
   *   REQUIRED: The complete policy to be applied to the `resource`. The size of
   *   the policy is limited to a few 10s of KB. An empty policy is a
   *   valid policy but certain Cloud Platform services (such as Projects)
   *   might reject them.
   *
   *   This object should have the same structure as [Policy]{@link google.iam.v1.Policy}
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The first element of the array is an object representing [Policy]{@link google.iam.v1.Policy}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * const policy = {};
   * const request = {
   *   resource: formattedResource,
   *   policy: policy,
   * };
   * client.setIamPolicy(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  setIamPolicy: MethodOverload<ResourceRequest & SetIamPolicyRequest, Policy>;

  /**
   * Returns permissions that a caller has on a Queue.
   * If the resource does not exist, this will return an empty set of
   * permissions, not a NOT_FOUND error.
   *
   * Note: This operation is designed to be used for building permission-aware
   * UIs and command-line tools, not for authorization checking. This operation
   * may "fail open" without warning.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.resource
   *   REQUIRED: The resource for which the policy detail is being requested.
   *   `resource` is usually specified as a path. For example, a Project
   *   resource is specified as `projects/{project}`.
   * @param request.permissions
   *   The set of permissions to check for the `resource`. Permissions with
   *   wildcards (such as '*' or 'storage.*') are not allowed. For more
   *   information see
   *   [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   *   The first element of the array is an object representing [TestIamPermissionsResponse]{@link google.iam.v1.TestIamPermissionsResponse}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedResource = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * const permissions = [];
   * const request = {
   *   resource: formattedResource,
   *   permissions: permissions,
   * };
   * client.testIamPermissions(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  testIamPermissions: MethodOverload<
    ResourceRequest & TestIamPermissionsRequest,
    TestIamPermissionsResponse
  >;

  /**
   * Lists the tasks in a queue.
   *
   * By default, only the BASIC view is retrieved
   * due to performance considerations;
   * response_view controls the
   * subset of information which is returned.
   *
   * The tasks may be returned in any order. The ordering may change at any
   * time.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.parent
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
   *   permission on the Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta3.View}
   * @param [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is Array of [Task]{@link google.cloud.tasks.v2beta3.Task}.
   *
   *   When autoPaginate: false is specified through options, it contains the result
   *   in a single response. If the response indicates the next page exists, the third
   *   parameter is set to be used for the next request object. The fourth parameter keeps
   *   the raw response object of an object representing [ListTasksResponse]{@link google.cloud.tasks.v2beta3.ListTasksResponse}.
   *   The first element of the array is Array of [Task]{@link google.cloud.tasks.v2beta3.Task}.
   *
   *   When autoPaginate: false is specified through options, the array has three elements.
   *   The first element is Array of [Task]{@link google.cloud.tasks.v2beta3.Task} in a single response.
   *   The second element is the next request object if the response
   *   indicates the next page exists, or null. The third element is
   *   an object representing [ListTasksResponse]{@link google.cloud.tasks.v2beta3.ListTasksResponse}.
   *
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * // Iterate over all elements.
   * const formattedParent = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   *
   * client.listTasks({parent: formattedParent})
   *   .then(responses => {
   *     const resources = responses[0];
   *     for (let i = 0; i < resources.length; i += 1) {
   *       // doThingsWith(resources[i])
   *     }
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   *
   * // Or obtain the paged response.
   * const formattedParent = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   *
   *
   * const options = {autoPaginate: false};
   * const callback = responses => {
   *   // The actual resources in a response.
   *   const resources = responses[0];
   *   // The next request if the response shows that there are more responses.
   *   const nextRequest = responses[1];
   *   // The actual response object, if necessary.
   *   // const rawResponse = responses[2];
   *   for (let i = 0; i < resources.length; i += 1) {
   *     // doThingsWith(resources[i]);
   *   }
   *   if (nextRequest) {
   *     // Fetch the next page.
   *     return client.listTasks(nextRequest, options).then(callback);
   *   }
   * }
   * client.listTasks({parent: formattedParent}, options)
   *   .then(callback)
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  listTasks: PaginatedMethodOverload<
    ListRequestObject & RunTaskRequest,
    Task[],
    ListTasksResponse
  >;

  /**
   * Equivalent to {@link listTasks}, but returns a NodeJS Stream object.
   *
   * This fetches the paged responses for {@link listTasks} continuously
   * and invokes the callback registered for 'data' event for each element in the
   * responses.
   *
   * The returned object has 'end' method when no more elements are required.
   *
   * autoPaginate option will be ignored.
   *
   * @see {@link https://nodejs.org/api/stream.html}
   *
   * @param request
   *   The request object that will be sent.
   * @param request.parent
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   * @param [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
   *   permission on the Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta3.View}
   * @param [request.pageSize]
   *   The maximum number of resources contained in the underlying API
   *   response. If page streaming is performed per-resource, this
   *   parameter does not affect the return value. If page streaming is
   *   performed per-page, this determines the maximum number of
   *   resources in a page.
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   *   An object stream which emits an object representing [Task]{@link google.cloud.tasks.v2beta3.Task} on 'data' event.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * client.listTasksStream({parent: formattedParent})
   *   .on('data', element => {
   *     // doThingsWith(element)
   *   }).on('error', err => {
   *     console.log(err);
   *   });
   */
  listTasksStream(
    request: ListRequestObject & RunTaskRequest,
    options?: CallOptions
  ): Transform;

  /**
   * Gets a task.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.name
   *   Required.
   *
   *   The task name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
   *   permission on the Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta3.View}
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Task]{@link google.cloud.tasks.v2beta3.Task}.
   *   The first element of the array is an object representing [Task]{@link google.cloud.tasks.v2beta3.Task}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.taskPath('[PROJECT]', '[LOCATION]', '[QUEUE]', '[TASK]');
   * client.getTask({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  getTask: MethodOverload<NamedRequest & RunTaskRequest, Task>;
  /**
   * Creates a task and adds it to a queue.
   *
   * Tasks cannot be updated after creation; there is no UpdateTask command.
   *
   * * For App Engine queues, the maximum task size is
   *   100KB.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.parent
   *   Required.
   *
   *   The queue name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   *
   *   The queue must already exist.
   * @param request.task
   *   Required.
   *
   *   The task to add.
   *
   *   Task names have the following format:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`.
   *   The user can optionally specify a task name. If a
   *   name is not specified then the system will generate a random
   *   unique task id, which will be set in the task returned in the
   *   response.
   *
   *   If schedule_time is not set or is in the
   *   past then Cloud Tasks will set it to the current time.
   *
   *   Task De-duplication:
   *
   *   Explicitly specifying a task ID enables task de-duplication.  If
   *   a task's ID is identical to that of an existing task or a task
   *   that was deleted or executed recently then the call will fail
   *   with ALREADY_EXISTS.
   *   If the task's queue was created using Cloud Tasks, then another task with
   *   the same name can't be created for ~1hour after the original task was
   *   deleted or executed. If the task's queue was created using queue.yaml or
   *   queue.xml, then another task with the same name can't be created
   *   for ~9days after the original task was deleted or executed.
   *
   *   Because there is an extra lookup cost to identify duplicate task
   *   names, these CreateTask calls have significantly
   *   increased latency. Using hashed strings for the task id or for
   *   the prefix of the task id is recommended. Choosing task ids that
   *   are sequential or have sequential prefixes, for example using a
   *   timestamp, causes an increase in latency and error rates in all
   *   task commands. The infrastructure relies on an approximately
   *   uniform distribution of task ids to store and serve tasks
   *   efficiently.
   *
   *   This object should have the same structure as [Task]{@link google.cloud.tasks.v2beta3.Task}
   * @param [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
   *   permission on the Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta3.View}
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Task]{@link google.cloud.tasks.v2beta3.Task}.
   *   The first element of the array is an object representing [Task]{@link google.cloud.tasks.v2beta3.Task}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedParent = client.queuePath('[PROJECT]', '[LOCATION]', '[QUEUE]');
   * const task = {};
   * const request = {
   *   parent: formattedParent,
   *   task: task,
   * };
   * client.createTask(request)
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  createTask: MethodOverload<CreateTaskRequest, Task>;

  /**
   * Deletes a task.
   *
   * A task can be deleted if it is scheduled or dispatched. A task
   * cannot be deleted if it has executed successfully or permanently
   * failed.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.name
   *   Required.
   *
   *   The task name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.taskPath('[PROJECT]', '[LOCATION]', '[QUEUE]', '[TASK]');
   * client.deleteTask({name: formattedName}).catch(err => {
   *   console.error(err);
   * });
   */
  deleteTask: MethodOverload<NamedRequest, void>;

  /**
   * Forces a task to run now.
   *
   * When this method is called, Cloud Tasks will dispatch the task, even if
   * the task is already running, the queue has reached its RateLimits or
   * is PAUSED.
   *
   * This command is meant to be used for manual debugging. For
   * example, RunTask can be used to retry a failed
   * task after a fix has been made or to manually force a task to be
   * dispatched now.
   *
   * The dispatched task is returned. That is, the task that is returned
   * contains the status after the task is dispatched but
   * before the task is received by its target.
   *
   * If Cloud Tasks receives a successful response from the task's
   * target, then the task will be deleted; otherwise the task's
   * schedule_time will be reset to the time that
   * RunTask was called plus the retry delay specified
   * in the queue's RetryConfig.
   *
   * RunTask returns
   * NOT_FOUND when it is called on a
   * task that has already succeeded or permanently failed.
   *
   * @param request
   *   The request object that will be sent.
   * @param request.name
   *   Required.
   *
   *   The task name. For example:
   *   `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
   * @param [request.responseView]
   *   The response_view specifies which subset of the Task will be
   *   returned.
   *
   *   By default response_view is BASIC; not all
   *   information is retrieved by default because some data, such as
   *   payloads, might be desirable to return only when needed because
   *   of its large size or because of the sensitivity of data that it
   *   contains.
   *
   *   Authorization for FULL requires
   *   `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/)
   *   permission on the Task resource.
   *
   *   The number should be among the values of [View]{@link google.cloud.tasks.v2beta3.View}
   * @param [options]
   *   Optional parameters. You can override the default settings for this call, e.g, timeout,
   *   retries, paginations, etc. See [gax.CallOptions]{@link https://googleapis.github.io/gax-nodejs/global.html#CallOptions} for the details.
   * @param [callback]
   *   The function which will be called with the result of the API call.
   *
   *   The second parameter to the callback is an object representing [Task]{@link google.cloud.tasks.v2beta3.Task}.
   *   The first element of the array is an object representing [Task]{@link google.cloud.tasks.v2beta3.Task}.
   *   The promise has a method named "cancel" which cancels the ongoing API call.
   *
   * @example
   *
   * import CloudTasks from '@google-cloud/tasks';
   *
   * const client = new tasks.v2beta3.CloudTasksClient({
   *   // optional auth parameters.
   * });
   *
   * const formattedName = client.taskPath('[PROJECT]', '[LOCATION]', '[QUEUE]', '[TASK]');
   * client.runTask({name: formattedName})
   *   .then(responses => {
   *     const response = responses[0];
   *     // doThingsWith(response)
   *   })
   *   .catch(err => {
   *     console.error(err);
   *   });
   */
  runTask: MethodOverload<NamedRequest & RunTaskRequest, Task>;

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param project
   */
  projectPath(project: string): string;

  /**
   * Return a fully-qualified location resource name string.
   *
   * @param project
   * @param location
   */
  locationPath(project: string, location: string): string;

  /**
   * Return a fully-qualified queue resource name string.
   *
   * @param project
   * @param location
   * @param queue
   */
  queuePath(project: string, location: string, queue: string): string;

  /**
   * Return a fully-qualified task resource name string.
   *
   * @param project
   * @param location
   * @param queue
   * @param task
   */
  taskPath(
    project: string,
    location: string,
    queue: string,
    task: string
  ): string;

  /**
   * Parse the projectName from a project resource.
   *
   * @param projectName
   *   A fully-qualified path representing a project resources.
   */
  matchProjectFromProjectName(projectName: string): string;

  /**
   * Parse the locationName from a location resource.
   *
   * @param locationName
   *   A fully-qualified path representing a location resources.
   */
  matchProjectFromLocationName(locationName: string): string;

  /**
   * Parse the locationName from a location resource.
   *
   * @param locationName
   *   A fully-qualified path representing a location resources.
   */
  matchLocationFromLocationName(locationName: string): string;

  /**
   * Parse the queueName from a queue resource.
   *
   * @param queueName
   *   A fully-qualified path representing a queue resources.
   */
  matchProjectFromQueueName(queueName: string): string;

  /**
   * Parse the queueName from a queue resource.
   *
   * @param queueName
   *   A fully-qualified path representing a queue resources.
   */
  matchLocationFromQueueName(queueName: string): string;

  /**
   * Parse the queueName from a queue resource.
   *
   * @param queueName
   *   A fully-qualified path representing a queue resources.
   */
  matchQueueFromQueueName(queueName: string): string;

  /**
   * Parse the taskName from a task resource.
   *
   * @param taskName
   *   A fully-qualified path representing a task resources.
   */
  matchProjectFromTaskName(taskName: string): string;

  /**
   * Parse the taskName from a task resource.
   *
   * @param taskName
   *   A fully-qualified path representing a task resources.
   */
  matchLocationFromTaskName(taskName: string): string;

  /**
   * Parse the taskName from a task resource.
   *
   * @param taskName
   *   A fully-qualified path representing a task resources.
   */
  matchQueueFromTaskName(taskName: string): string;

  /**
   * Parse the taskName from a task resource.
   *
   * @param taskName
   *   A fully-qualified path representing a task resources.
   */
  matchTaskFromTaskName(taskName: string): string;
}
