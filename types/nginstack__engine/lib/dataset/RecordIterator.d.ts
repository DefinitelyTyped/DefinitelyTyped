export = RecordIterator;
declare function RecordIterator(): void;
declare class RecordIterator {
    next(): {
        done: boolean;
        value: Record<string, string | number | boolean | Date>;
    };
}
