declare namespace System {

	class Array<T> implements System.Collections.IList {
		readonly Length: number;
		readonly LongLength: number;
		readonly Rank: number;
		readonly SyncRoot: any;
		readonly IsReadOnly: boolean;
		readonly IsFixedSize: boolean;
		readonly IsSynchronized: boolean;
		AsReadOnly<T>(array: any[]): any;
		Resize<T>(array: any, newSize: number): void;
		CreateInstance(elementType: any, length: number): System.Array<T>;
		CreateInstance(elementType: any, length1: number, length2: number): System.Array<T>;
		CreateInstance(elementType: any, length1: number, length2: number, length3: number): System.Array<T>;
		CreateInstance(elementType: any, ...lengths: any[]): System.Array<T>;
		CreateInstance(elementType: any, ...lengths: any[]): System.Array<T>;
		CreateInstance(elementType: any, lengths: any[], lowerBounds: any[]): System.Array<T>;
		Copy(sourceArray: System.Array<T>, destinationArray: System.Array<T>, length: number): void;
		Copy(sourceArray: System.Array<T>, sourceIndex: number, destinationArray: System.Array<T>, destinationIndex: number, length: number): void;
		ConstrainedCopy(sourceArray: System.Array<T>, sourceIndex: number, destinationArray: System.Array<T>, destinationIndex: number, length: number): void;
		Copy(sourceArray: System.Array<T>, destinationArray: System.Array<T>, length: number): void;
		Copy(sourceArray: System.Array<T>, sourceIndex: number, destinationArray: System.Array<T>, destinationIndex: number, length: number): void;
		Clear(array: System.Array<T>, index: number, length: number): void;
		GetValue(...indices: any[]): any;
		GetValue(index: number): any;
		GetValue(index1: number, index2: number): any;
		GetValue(index1: number, index2: number, index3: number): any;
		GetValue(index: number): any;
		GetValue(index1: number, index2: number): any;
		GetValue(index1: number, index2: number, index3: number): any;
		GetValue(...indices: any[]): any;
		SetValue(value: any, index: number): void;
		SetValue(value: any, index1: number, index2: number): void;
		SetValue(value: any, index1: number, index2: number, index3: number): void;
		SetValue(value: any, ...indices: any[]): void;
		SetValue(value: any, index: number): void;
		SetValue(value: any, index1: number, index2: number): void;
		SetValue(value: any, index1: number, index2: number, index3: number): void;
		SetValue(value: any, ...indices: any[]): void;
		GetLength(dimension: number): number;
		GetLongLength(dimension: number): number;
		GetUpperBound(dimension: number): number;
		GetLowerBound(dimension: number): number;
		Clone(): any;
		BinarySearch(array: System.Array<T>, value: any): number;
		BinarySearch(array: System.Array<T>, index: number, length: number, value: any): number;
		BinarySearch(array: System.Array<T>, value: any, comparer: any): number;
		BinarySearch(array: System.Array<T>, index: number, length: number, value: any, comparer: any): number;
		BinarySearch<T>(array: any[], value: T): number;
		BinarySearch<T>(array: any[], value: T, comparer: any): number;
		BinarySearch<T>(array: any[], index: number, length: number, value: T): number;
		BinarySearch<T>(array: any[], index: number, length: number, value: T, comparer: any): number;
		ConvertAll<TInput, TOutput>(array: any[], converter: any): any[];
		CopyTo(array: System.Array<T>, index: number): void;
		CopyTo(array: System.Array<T>, index: number): void;
		Empty<T>(): any[];
		Exists<T>(array: any[], match: any): boolean;
		Find<T>(array: any[], match: any): any;
		FindAll<T>(array: any[], match: any): any[];
		FindIndex<T>(array: any[], match: any): number;
		FindIndex<T>(array: any[], startIndex: number, match: any): number;
		FindIndex<T>(array: any[], startIndex: number, count: number, match: any): number;
		FindLast<T>(array: any[], match: any): any;
		FindLastIndex<T>(array: any[], match: any): number;
		FindLastIndex<T>(array: any[], startIndex: number, match: any): number;
		FindLastIndex<T>(array: any[], startIndex: number, count: number, match: any): number;
		ForEach<T>(array: any[], action: any): void;
		GetEnumerator(): any;
		IndexOf(array: System.Array<T>, value: any): number;
		IndexOf(array: System.Array<T>, value: any, startIndex: number): number;
		IndexOf(array: System.Array<T>, value: any, startIndex: number, count: number): number;
		IndexOf<T>(array: any[], value: T): number;
		IndexOf<T>(array: any[], value: T, startIndex: number): number;
		IndexOf<T>(array: any[], value: T, startIndex: number, count: number): number;
		LastIndexOf(array: System.Array<T>, value: any): number;
		LastIndexOf(array: System.Array<T>, value: any, startIndex: number): number;
		LastIndexOf(array: System.Array<T>, value: any, startIndex: number, count: number): number;
		LastIndexOf<T>(array: any[], value: T): number;
		LastIndexOf<T>(array: any[], value: T, startIndex: number): number;
		LastIndexOf<T>(array: any[], value: T, startIndex: number, count: number): number;
		Reverse(array: System.Array<T>): void;
		Reverse(array: System.Array<T>, index: number, length: number): void;
		Sort(array: System.Array<T>): void;
		Sort(keys: System.Array<T>, items: System.Array<T>): void;
		Sort(array: System.Array<T>, index: number, length: number): void;
		Sort(keys: System.Array<T>, items: System.Array<T>, index: number, length: number): void;
		Sort(array: System.Array<T>, comparer: any): void;
		Sort(keys: System.Array<T>, items: System.Array<T>, comparer: any): void;
		Sort(array: System.Array<T>, index: number, length: number, comparer: any): void;
		Sort(keys: System.Array<T>, items: System.Array<T>, index: number, length: number, comparer: any): void;
		Sort<T>(array: any[]): void;
		Sort<TKey, TValue>(keys: any[], items: any[]): void;
		Sort<T>(array: any[], index: number, length: number): void;
		Sort<TKey, TValue>(keys: any[], items: any[], index: number, length: number): void;
		Sort<T>(array: any[], comparer: any): void;
		Sort<TKey, TValue>(keys: any[], items: any[], comparer: any): void;
		Sort<T>(array: any[], index: number, length: number, comparer: any): void;
		Sort<TKey, TValue>(keys: any[], items: any[], index: number, length: number, comparer: any): void;
		Sort<T>(array: any[], comparison: any): void;
		TrueForAll<T>(array: any[], match: any): boolean;
		Initialize(): void;
	}

	class AsyncCallback {
		constructor(object: any, method: any);
		Invoke(ar: System.IAsyncResult): void;
		BeginInvoke(ar: System.IAsyncResult, callback: System.AsyncCallback, object: any): System.IAsyncResult;
		EndInvoke(result: System.IAsyncResult): void;
	}

	class EventArgs {
		constructor();
	}

	interface IAsyncResult {
		readonly IsCompleted: boolean;
		readonly AsyncWaitHandle: any;
		readonly AsyncState: any;
		readonly CompletedSynchronously: boolean;
	}

	class TimeSpan {
		readonly Ticks: number;
		readonly Days: number;
		readonly Hours: number;
		readonly Milliseconds: number;
		readonly Minutes: number;
		readonly Seconds: number;
		readonly TotalDays: number;
		readonly TotalHours: number;
		readonly TotalMilliseconds: number;
		readonly TotalMinutes: number;
		readonly TotalSeconds: number;
		readonly LegacyMode: boolean;
		constructor(ticks: number);
		constructor(hours: number, minutes: number, seconds: number);
		constructor(days: number, hours: number, minutes: number, seconds: number);
		constructor(days: number, hours: number, minutes: number, seconds: number, milliseconds: number);
		Add(ts: System.TimeSpan): System.TimeSpan;
		Compare(t1: System.TimeSpan, t2: System.TimeSpan): number;
		CompareTo(value: any): number;
		CompareTo(value: System.TimeSpan): number;
		FromDays(value: number): System.TimeSpan;
		Duration(): System.TimeSpan;
		Equals(value: any): boolean;
		Equals(obj: System.TimeSpan): boolean;
		Equals(t1: System.TimeSpan, t2: System.TimeSpan): boolean;
		GetHashCode(): number;
		FromHours(value: number): System.TimeSpan;
		FromMilliseconds(value: number): System.TimeSpan;
		FromMinutes(value: number): System.TimeSpan;
		Negate(): System.TimeSpan;
		FromSeconds(value: number): System.TimeSpan;
		Subtract(ts: System.TimeSpan): System.TimeSpan;
		FromTicks(value: number): System.TimeSpan;
		Parse(s: string): System.TimeSpan;
		Parse(input: string, formatProvider: any): System.TimeSpan;
		ParseExact(input: string, format: string, formatProvider: any): System.TimeSpan;
		ParseExact(input: string, formats: any[], formatProvider: any): System.TimeSpan;
		ParseExact(input: string, format: string, formatProvider: any, styles: any): System.TimeSpan;
		ParseExact(input: string, formats: any[], formatProvider: any, styles: any): System.TimeSpan;
		TryParse(s: string, result: any): boolean;
		TryParse(input: string, formatProvider: any, result: any): boolean;
		TryParseExact(input: string, format: string, formatProvider: any, result: any): boolean;
		TryParseExact(input: string, formats: any[], formatProvider: any, result: any): boolean;
		TryParseExact(input: string, format: string, formatProvider: any, styles: any, result: any): boolean;
		TryParseExact(input: string, formats: any[], formatProvider: any, styles: any, result: any): boolean;
		ToString(): string;
		ToString(format: string): string;
		ToString(format: string, formatProvider: any): string;
	}

}
