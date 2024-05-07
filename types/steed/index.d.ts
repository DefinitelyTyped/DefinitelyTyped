declare namespace steed {
    interface Dictionary<T> {
        [key: string]: T;
    }
    type ErrorCallback<T> = (err?: T) => void;

    type SteedResultCallback<T, E> = (err: E, result: T) => void;
    type SteedResultArrayCallback<T, E> = (err: E, results: T[]) => void;
    type SteedResultObjectCallback<T, E> = (err: E, results: Dictionary<T>) => void;

    type SteedWorker<T, E> = (task: T, callback: ErrorCallback<E>) => void;
    type SteedIterator<T, E> = (item: T, callback: ErrorCallback<E>) => void;
    type SteedResultIterator<T, R, E> = (item: T, callback: SteedResultCallback<R, E>) => void;
    type SteedFunction<T, E> = (callback: (err?: E, result?: T) => void) => void;

    interface SteedQueue<T> {
        push<E>(task: T | T[], callback?: SteedResultCallback<T, E>): void;
        unshift<E>(task: T | T[], callback?: ErrorCallback<E>): void;
        pause(): void;
        resume(): void;
        idle(): boolean;
        length(): number;
        kill(): void;
        concurrency: number;
        drain(): any;
        empty(): any;
        saturated(): any;
    }

    interface Steed {
        parallel<T, E>(tasks: Array<SteedFunction<T, E>>, callback?: SteedResultArrayCallback<T, E>): void;
        parallel<T, E>(tasks: Dictionary<SteedFunction<T, E>>, callback?: SteedResultObjectCallback<T, E>): void;
        series<T, E>(tasks: Array<SteedFunction<T, E>>, callback?: SteedResultArrayCallback<T, E>): void;
        series<T, E>(tasks: Dictionary<SteedFunction<T, E>>, callback?: SteedResultObjectCallback<T, E>): void;
        waterfall<T, E>(tasks: Function[], callback?: SteedResultCallback<T, E>): void;
        each<T, E>(arr: T[] | Dictionary<T>, iterator: SteedIterator<T, E>, callback?: ErrorCallback<E>): void;
        eachSeries: typeof steed.each;
        map<T, R, E>(
            arr: T[] | Dictionary<T>,
            iterator: SteedResultIterator<T, R, E>,
            callback?: SteedResultArrayCallback<R, E>,
        ): void;
        mapSeries: typeof steed.map;
        queue<T, E>(worker: SteedWorker<T, E>, concurrency?: number): SteedQueue<T>;
        queue<T, R, E>(worker: SteedResultIterator<T, R, E>, concurrency?: number): SteedQueue<T>;
    }
}

declare const steed: steed.Steed;

export = steed;
