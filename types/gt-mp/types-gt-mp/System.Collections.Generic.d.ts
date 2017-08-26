declare namespace System.Collections.Generic {

	class Dictionary<TKey, TValue> implements System.Collections.IDictionary {
		readonly Comparer: any;
		readonly Count: number;
		readonly Keys: any;
		readonly Values: any;
		Item: any;
		constructor();
		constructor(capacity: number);
		constructor(comparer: any);
		constructor(capacity: number, comparer: any);
		constructor(dictionary: any);
		constructor(dictionary: any, comparer: any);
		Add(key: TKey, value: TValue): void;
		Clear(): void;
		ContainsKey(key: TKey): boolean;
		ContainsValue(value: TValue): boolean;
		GetEnumerator(): any;
		GetObjectData(info: any, context: any): void;
		OnDeserialization(sender: any): void;
		Remove(key: TKey): boolean;
		TryGetValue(key: TKey, value: any): boolean;
	}

	interface IEnumerable<T> {
		GetEnumerator(): any;
	}

	class List<T> implements System.Collections.IList {
		Capacity: number;
		readonly Count: number;
		Item: any;
		constructor();
		constructor(capacity: number);
		constructor(collection: System.Collections.Generic.IEnumerable<T>);
		Add(item: T): void;
		AddRange(collection: System.Collections.Generic.IEnumerable<T>): void;
		AsReadOnly(): any;
		BinarySearch(index: number, count: number, item: T, comparer: any): number;
		BinarySearch(item: T): number;
		BinarySearch(item: T, comparer: any): number;
		Clear(): void;
		Contains(item: T): boolean;
		ConvertAll<TOutput>(converter: any): System.Collections.Generic.List<TOutput>;
		CopyTo(array: any[]): void;
		CopyTo(index: number, array: any[], arrayIndex: number, count: number): void;
		CopyTo(array: any[], arrayIndex: number): void;
		Exists(match: any): boolean;
		Find(match: any): any;
		FindAll(match: any): System.Collections.Generic.List<T>;
		FindIndex(match: any): number;
		FindIndex(startIndex: number, match: any): number;
		FindIndex(startIndex: number, count: number, match: any): number;
		FindLast(match: any): any;
		FindLastIndex(match: any): number;
		FindLastIndex(startIndex: number, match: any): number;
		FindLastIndex(startIndex: number, count: number, match: any): number;
		ForEach(action: any): void;
		GetEnumerator(): any;
		GetRange(index: number, count: number): System.Collections.Generic.List<T>;
		IndexOf(item: T): number;
		IndexOf(item: T, index: number): number;
		IndexOf(item: T, index: number, count: number): number;
		Insert(index: number, item: T): void;
		InsertRange(index: number, collection: System.Collections.Generic.IEnumerable<T>): void;
		LastIndexOf(item: T): number;
		LastIndexOf(item: T, index: number): number;
		LastIndexOf(item: T, index: number, count: number): number;
		Remove(item: T): boolean;
		RemoveAll(match: any): number;
		RemoveAt(index: number): void;
		RemoveRange(index: number, count: number): void;
		Reverse(): void;
		Reverse(index: number, count: number): void;
		Sort(): void;
		Sort(comparer: any): void;
		Sort(index: number, count: number, comparer: any): void;
		Sort(comparison: any): void;
		ToArray(): any[];
		TrimExcess(): void;
		TrueForAll(match: any): boolean;
	}

}
