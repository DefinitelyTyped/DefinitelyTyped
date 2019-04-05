export interface Interaction {
  __count: number;
  id: number;
  name: string;
  timestamp: number;
}

export interface Subscriber {
  /**
   * A new interaction has been created via the trace() method.
   */
  onInteractionTraced: (interaction: Interaction) => void;

  /**
   * All scheduled async work for an interaction has finished.
   */
  onInteractionScheduledWorkCompleted: (interaction: Interaction) => void;

  /**
   * New async work has been scheduled for a set of interactions.
   * When this work is later run, onWorkStarted/onWorkStopped will be called.
   * A batch of async/yieldy work may be scheduled multiple times before completing.
   * In that case, onWorkScheduled may be called more than once before onWorkStopped.
   * Work is scheduled by a "thread" which is identified by a unique ID.
   */
  onWorkScheduled: (interactions: Set<Interaction>, threadID: number) => void;

  /**
   * A batch of scheduled work has been canceled.
   * Work is done by a "thread" which is identified by a unique ID.
   */
  onWorkCanceled: (interactions: Set<Interaction>, threadID: number) => void;

  /**
   * A batch of work has started for a set of interactions.
   * When this work is complete, onWorkStopped will be called.
   * Work is not always completed synchronously; yielding may occur in between.
   * A batch of async/yieldy work may also be re-started before completing.
   * In that case, onWorkStarted may be called more than once before onWorkStopped.
   * Work is done by a "thread" which is identified by a unique ID.
   */
  onWorkStarted: (interactions: Set<Interaction>, threadID: number) => void;

  /**
   * A batch of work has completed for a set of interactions.
   * Work is done by a "thread" which is identified by a unique ID.
   */
  onWorkStopped: (interactions: Set<Interaction>, threadID: number) => void;
}

export interface InteractionsRef {
  current: Set<Interaction>;
}

export interface SubscriberRef {
  current: Subscriber | null;
}

export const __interactionsRef: InteractionsRef;
export const __subscriberRef: SubscriberRef;

export function unstable_clear<T>(callback: () => T): T;

export function unstable_getCurrent(): Set<Interaction> | null;

export function unstable_getThreadID(): number;

export function unstable_trace<T>(
  name: string,
  timestamp: number,
  callback: () => T,
  threadID?: number
): T;

export type WrappedFunction<T extends (...args: any[]) => any> = T & {
  cancel: () => void;
};

/**
 * The callback is immediately returned if the enableSchedulerTracing is disabled.
 * It is unclear for which bundles this is the case.
 *
 * @param callback
 * @param threadID
 */
export function unstable_wrap<T extends (...args: any[]) => any>(
  callback: T,
  threadID?: number
): WrappedFunction<T>;

export function unstable_subscribe(subscriber: Subscriber): void;

export function unstable_unsubscribe(subscriber: Subscriber): void;
