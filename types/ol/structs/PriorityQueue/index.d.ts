declare module 'ol/structs/PriorityQueue' {

  export default class PriorityQueue<T> {
    constructor(priorityFunction: ((param0: T) => number), keyFunction: ((param0: T) => string));
    clear(): void;
    dequeue(): T;
    enqueue(element: T): boolean;
    getCount(): number;
    isEmpty(): boolean;
    isKeyQueued(key: string): boolean;
    isQueued(element: T): boolean;
    reprioritize(): void;
  }

}
