import type { PropertyDescriptor } from '../index';

declare function assertRecord<K extends string>(
    ES: K extends keyof assertRecord.Predicates ? Parameters<assertRecord.Predicates[K]>[0] : object,
    recordType: K,
    argumentName: string,
    value: K extends keyof assertRecord.Predicates ? Parameters<assertRecord.Predicates[K]>[1] : unknown,
): void;

declare namespace assertRecord {
    interface Predicates {
        'Property Descriptor': (
            ES: {
                Type(o: unknown): string | undefined;
            },
            Desc: PropertyDescriptor,
        ) => boolean;
    }
}

export = assertRecord;
