declare namespace Microsoft.ClearScript {

	class HostFunctions {
		constructor();
		newObj(): any;
		newObj<T>(...args: any[]): any;
		newObj(type: any, ...args: any[]): any;
		newObj(target: any, ...args: any[]): any;
		newArr<T>(...lengths: any[]): any;
		newArr(...lengths: any[]): any;
		newVar<T>(initValue?: T): any;
		del<T>(scriptFunc: any): any;
		proc(argCount: number, scriptFunc: any): any;
		func<T>(argCount: number, scriptFunc: any): any;
		func(argCount: number, scriptFunc: any): any;
		typeOf<T>(): any;
		typeOf(value: any): any;
		isType<T>(value: any): boolean;
		asType<T>(value: any): any;
		cast<T>(value: any): any;
		isTypeObj(value: any): boolean;
		isTypeObj<T>(): boolean;
		isNull(value: any): boolean;
		flags<T>(...args: any[]): any;
		toSByte(value: any): any;
		toByte(value: any): any;
		toInt16(value: any): any;
		toUInt16(value: any): any;
		toChar(value: any): any;
		toInt32(value: any): any;
		toUInt32(value: any): any;
		toInt64(value: any): any;
		toUInt64(value: any): any;
		toSingle(value: any): any;
		toDouble(value: any): any;
		toDecimal(value: any): any;
		getProperty(target: any, name: string): any;
		setProperty(target: any, name: string, value: any): any;
		removeProperty(target: any, name: string): boolean;
		getProperty(target: any, name: string): any;
		setProperty(target: any, name: string, value: any): any;
		removeProperty(target: any, name: string): boolean;
		getElement(target: any, ...indices: any[]): any;
		setElement(target: any, value: any, ...indices: any[]): any;
		removeElement(target: any, ...indices: any[]): boolean;
		toStaticType(value: any): any;
		tryCatch(tryFunc: any, catchFunc: any, finallyFunc?: any): boolean;
	}

}
