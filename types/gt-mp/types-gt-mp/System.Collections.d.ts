declare namespace System.Collections {

	interface IDictionary {
		Item: any;
		readonly Keys: any;
		readonly Values: any;
		readonly IsReadOnly: boolean;
		readonly IsFixedSize: boolean;
		Contains(key: any): boolean;
		Add(key: any, value: any): void;
		Clear(): void;
		GetEnumerator(): any;
		Remove(key: any): void;
	}

	interface IList {
		Item: any;
		readonly IsReadOnly: boolean;
		readonly IsFixedSize: boolean;
		Add(value: any): number;
		Contains(value: any): boolean;
		Clear(): void;
		IndexOf(value: any): number;
		Insert(index: number, value: any): void;
		Remove(value: any): void;
		RemoveAt(index: number): void;
	}

}
