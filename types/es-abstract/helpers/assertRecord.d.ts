import { PropertyDescriptor as ESPropertyDescriptor } from '../index';

declare function assertRecord<K extends keyof assertRecord.Predicates>(
	ES: Parameters<assertRecord.Predicates[K]>[0],
	recordType: K,
	argumentName: string,
	value: Parameters<assertRecord.Predicates[K]>[1],
): void;
declare function assertRecord(ES: object, recordType: string, argumentName: string, value: unknown): void;

declare namespace assertRecord {
	interface Predicates {
		'Property Descriptor': (
			ES: {
				Type(o: unknown): string | undefined;
			},
			Desc: ESPropertyDescriptor,
		) => boolean;
	}
}

export = assertRecord;
