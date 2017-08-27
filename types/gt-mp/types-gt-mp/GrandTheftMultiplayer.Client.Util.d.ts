declare namespace GrandTheftMultiplayer.Client.Util {

	enum HandleType {
		GameHandle = 0,
		LocalHandle = 1,
		NetHandle = 2
	}

	class LocalHandle {
		readonly IsNull: boolean;
		readonly Raw: number;
		readonly Value: number;
		constructor(handle: number);
		constructor(handle: number, localId: GrandTheftMultiplayer.Client.Util.HandleType);
		Equals(obj: any): boolean;
		GetHashCode(): number;
		Properties<T>(): any;
		ToString(): string;
	}

}
