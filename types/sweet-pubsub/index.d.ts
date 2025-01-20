interface SweetPubsub {
    on<CBFn extends (...args: any[]) => unknown>(
        topic: string,
        unsubscribeLabel: string,
        callback: CBFn,
        priority?: number,
    ): CBFn;
    on<CBFn extends (...args: any[]) => unknown>(topic: string, callback: CBFn, priority?: number): CBFn;
    sub<CBFn extends (...args: any[]) => unknown>(
        topic: string,
        unsubscribeLabel: string,
        callback: CBFn,
        priority?: number,
    ): CBFn;
    sub<CBFn extends (...args: any[]) => unknown>(topic: string, callback: CBFn, priority?: number): CBFn;
    once<CBFn extends (...args: any[]) => unknown>(
        topic: string,
        unsubscribeLabel: string,
        callback: CBFn,
        priority?: number,
    ): CBFn;
    once<CBFn extends (...args: any[]) => unknown>(topic: string, callback: CBFn, priority?: number): CBFn;
    subOnce<CBFn extends (...args: any[]) => unknown>(
        topic: string,
        unsubscribeLabel: string,
        callback: CBFn,
        priority?: number,
    ): CBFn;
    subOnce<CBFn extends (...args: any[]) => unknown>(
        topic: string,
        callback: CBFn,
        priority?: number,
    ): CBFn;
    emit(topic: string, ...arguments: any[]): unknown;
    pub(topic: string, ...arguments: any[]): unknown;
    emits(topic: string, ...arguments: any[]): unknown;
    pubs(topic: string, ...arguments: any[]): unknown;
    off(callback: (...args: any[]) => unknown): unknown[];
    off(topicOrUnsubscribeLabel: string, callback?: (...args: any[]) => unknown): unknown[];
    off(topic: string, unsubscribeLabel: string): unknown[];
    unsub(callback: (...args: any[]) => unknown): unknown[];
    unsub(topicOrUnsubscribeLabel: string, callback?: (...args: any[]) => unknown): unknown[];
    unsub(topic: string, unsubscribeLabel: string): unknown[];
}

declare const sweetPubsub: SweetPubsub;

export = sweetPubsub;
