import ES2024 = require("./es2024");

interface ES2025 {
    readonly AddEntriesFromIterable: typeof import("./2025/AddEntriesFromIterable");
    readonly AdvanceStringIndex: typeof import("./2025/AdvanceStringIndex");
    readonly ArrayCreate: typeof import("./2025/ArrayCreate");
    readonly ArraySetLength: typeof import("./2025/ArraySetLength");
    readonly ArraySpeciesCreate: typeof import("./2025/ArraySpeciesCreate");
    readonly BigIntBitwiseOp: typeof import("./2025/BigIntBitwiseOp");
    readonly BinaryAnd: typeof import("./2025/BinaryAnd");
    readonly BinaryOr: typeof import("./2025/BinaryOr");
    readonly BinaryXor: typeof import("./2025/BinaryXor");
    readonly Call: typeof import("./2025/Call");
    readonly CanBeHeldWeakly: typeof import("./2025/CanBeHeldWeakly");
    readonly CanonicalNumericIndexString: typeof import("./2025/CanonicalNumericIndexString");
    readonly clamp: typeof import("./2025/clamp");
    readonly CodePointAt: typeof import("./2025/CodePointAt");
    readonly CodePointsToString: typeof import("./2025/CodePointsToString");
    readonly CompletePropertyDescriptor: typeof import("./2025/CompletePropertyDescriptor");
    readonly CopyDataProperties: typeof import("./2025/CopyDataProperties");
    readonly CreateDataProperty: typeof import("./2025/CreateDataProperty");
    readonly CreateDataPropertyOrThrow: typeof import("./2025/CreateDataPropertyOrThrow");
    readonly CreateHTML: typeof import("./2025/CreateHTML");
    readonly CreateIteratorResultObject: typeof import("./2025/CreateIteratorResultObject");
    readonly CreateListFromArrayLike: typeof import("./2025/CreateListFromArrayLike");
    readonly CreateNonEnumerableDataPropertyOrThrow: typeof import("./2025/CreateNonEnumerableDataPropertyOrThrow");
    readonly CreateRegExpStringIterator: typeof import("./2025/CreateRegExpStringIterator");
    readonly DateFromTime: typeof import("./2025/DateFromTime");
    readonly DateString: typeof import("./2025/DateString");
    readonly Day: typeof import("./2025/Day");
    readonly DayFromYear: typeof import("./2025/DayFromYear");
    readonly DaysInYear: typeof import("./2025/DaysInYear");
    readonly DayWithinYear: typeof import("./2025/DayWithinYear");
    readonly DefineMethodProperty: typeof import("./2025/DefineMethodProperty");
    readonly DefinePropertyOrThrow: typeof import("./2025/DefinePropertyOrThrow");
    readonly DeletePropertyOrThrow: typeof import("./2025/DeletePropertyOrThrow");
    readonly FlattenIntoArray: typeof import("./2025/FlattenIntoArray");
    readonly FromPropertyDescriptor: typeof import("./2025/FromPropertyDescriptor");
    readonly Get: typeof import("./2025/Get");
    readonly GetIterator: typeof import("./2025/GetIterator");
    readonly GetMethod: typeof import("./2025/GetMethod");
    readonly GetOwnPropertyKeys: typeof import("./2025/GetOwnPropertyKeys");
    readonly GetPrototypeFromConstructor: typeof import("./2025/GetPrototypeFromConstructor");
    readonly GetSubstitution: typeof import("./2025/GetSubstitution");
    readonly GetV: typeof import("./2025/GetV");
    readonly HasOwnProperty: typeof import("./2025/HasOwnProperty");
    readonly HasProperty: typeof import("./2025/HasProperty");
    readonly HourFromTime: typeof import("./2025/HourFromTime");
    readonly InLeapYear: typeof import("./2025/InLeapYear");
    readonly InstanceofOperator: typeof import("./2025/InstanceofOperator");
    readonly Invoke: typeof import("./2025/Invoke");
    readonly IsAccessorDescriptor: typeof import("./2025/IsAccessorDescriptor");
    readonly IsArray: typeof import("./2025/IsArray");
    readonly IsCallable: typeof import("./2025/IsCallable");
    readonly IsConcatSpreadable: typeof import("./2025/IsConcatSpreadable");
    readonly IsConstructor: typeof import("./2025/IsConstructor");
    readonly IsDataDescriptor: typeof import("./2025/IsDataDescriptor");
    readonly IsExtensible: typeof import("./2025/IsExtensible");
    readonly IsGenericDescriptor: typeof import("./2025/IsGenericDescriptor");
    readonly IsLessThan: typeof import("./2025/IsLessThan");
    readonly IsLooselyEqual: typeof import("./2025/IsLooselyEqual");
    readonly IsPromise: typeof import("./2025/IsPromise");
    readonly IsRegExp: typeof import("./2025/IsRegExp");
    readonly IsStrictlyEqual: typeof import("./2025/IsStrictlyEqual");
    readonly IteratorClose: typeof import("./2025/IteratorClose");
    readonly IteratorComplete: typeof import("./2025/IteratorComplete");
    readonly IteratorNext: typeof import("./2025/IteratorNext");
    readonly IteratorStep: typeof import("./2025/IteratorStep");
    readonly IteratorValue: typeof import("./2025/IteratorValue");
    readonly LengthOfArrayLike: typeof import("./2025/LengthOfArrayLike");
    readonly MakeDate: typeof import("./2025/MakeDate");
    readonly MakeDay: typeof import("./2025/MakeDay");
    readonly MakeTime: typeof import("./2025/MakeTime");
    readonly MinFromTime: typeof import("./2025/MinFromTime");
    readonly modulo: typeof import("./2025/modulo");
    readonly MonthFromTime: typeof import("./2025/MonthFromTime");
    readonly msFromTime: typeof import("./2025/msFromTime");
    readonly NumberBitwiseOp: typeof import("./2025/NumberBitwiseOp");
    readonly NumberToBigInt: typeof import("./2025/NumberToBigInt");
    readonly OrdinaryDefineOwnProperty: typeof import("./2025/OrdinaryDefineOwnProperty");
    readonly OrdinaryGetOwnProperty: typeof import("./2025/OrdinaryGetOwnProperty");
    readonly OrdinaryGetPrototypeOf: typeof import("./2025/OrdinaryGetPrototypeOf");
    readonly OrdinaryHasInstance: typeof import("./2025/OrdinaryHasInstance");
    readonly OrdinaryHasProperty: typeof import("./2025/OrdinaryHasProperty");
    readonly OrdinaryObjectCreate: typeof import("./2025/OrdinaryObjectCreate");
    readonly OrdinarySetPrototypeOf: typeof import("./2025/OrdinarySetPrototypeOf");
    readonly PromiseResolve: typeof import("./2025/PromiseResolve");
    readonly RegExpExec: typeof import("./2025/RegExpExec");
    readonly RequireObjectCoercible: typeof import("./2025/RequireObjectCoercible");
    readonly SameValue: typeof import("./2025/SameValue");
    readonly SameValueNonNumber: typeof import("./2025/SameValueNonNumber");
    readonly SameValueZero: typeof import("./2025/SameValueZero");
    readonly SecFromTime: typeof import("./2025/SecFromTime");
    readonly Set: typeof import("./2025/Set");
    readonly SetFunctionName: typeof import("./2025/SetFunctionName");
    readonly SetIntegrityLevel: typeof import("./2025/SetIntegrityLevel");
    readonly SpeciesConstructor: typeof import("./2025/SpeciesConstructor");
    readonly StringIndexOf: typeof import("./2025/StringIndexOf");
    readonly StringPad: typeof import("./2025/StringPad");
    readonly StringToBigInt: typeof import("./2025/StringToBigInt");
    readonly StringToCodePoints: typeof import("./2025/StringToCodePoints");
    readonly StringToNumber: typeof import("./2025/StringToNumber");
    readonly substring: typeof import("./2025/substring");
    readonly SymbolDescriptiveString: typeof import("./2025/SymbolDescriptiveString");
    readonly TestIntegrityLevel: typeof import("./2025/TestIntegrityLevel");
    readonly TimeClip: typeof import("./2025/TimeClip");
    readonly TimeFromYear: typeof import("./2025/TimeFromYear");
    readonly TimeString: typeof import("./2025/TimeString");
    readonly TimeWithinDay: typeof import("./2025/TimeWithinDay");
    readonly ToBigInt: typeof import("./2025/ToBigInt");
    readonly ToBigInt64: typeof import("./2025/ToBigInt64");
    readonly ToBigUint64: typeof import("./2025/ToBigUint64");
    readonly ToBoolean: typeof import("./2025/ToBoolean");
    readonly ToDateString: typeof import("./2025/ToDateString");
    readonly ToIndex: typeof import("./2025/ToIndex");
    readonly ToInt16: typeof import("./2025/ToInt16");
    readonly ToInt32: typeof import("./2025/ToInt32");
    readonly ToInt8: typeof import("./2025/ToInt8");
    readonly ToIntegerOrInfinity: typeof import("./2025/ToIntegerOrInfinity");
    readonly ToLength: typeof import("./2025/ToLength");
    readonly ToNumber: typeof import("./2025/ToNumber");
    readonly ToNumeric: typeof import("./2025/ToNumeric");
    readonly ToObject: typeof import("./2025/ToObject");
    readonly ToPrimitive: typeof import("./2025/ToPrimitive");
    readonly ToPropertyDescriptor: typeof import("./2025/ToPropertyDescriptor");
    readonly ToPropertyKey: typeof import("./2025/ToPropertyKey");
    readonly ToString: typeof import("./2025/ToString");
    readonly ToUint16: typeof import("./2025/ToUint16");
    readonly ToUint32: typeof import("./2025/ToUint32");
    readonly ToUint8: typeof import("./2025/ToUint8");
    readonly ToUint8Clamp: typeof import("./2025/ToUint8Clamp");
    readonly TrimString: typeof import("./2025/TrimString");
    readonly truncate: typeof import("./2025/truncate");
    readonly ValidateAndApplyPropertyDescriptor: typeof import("./2025/ValidateAndApplyPropertyDescriptor");
    readonly WeekDay: typeof import("./2025/WeekDay");
    readonly YearFromTime: typeof import("./2025/YearFromTime");
}

declare namespace ES2025 {
    // Re-export types from previous versions
    // - ES2015:
    type PropertyKey = ES2024.PropertyKey;

    // - ES5:
    type GenericDescriptor = ES2024.GenericDescriptor;
    type AccessorDescriptor<T = unknown> = ES2024.AccessorDescriptor<T>;
    type DataDescriptor<T = unknown> = ES2024.DataDescriptor<T>;
    type PropertyDescriptor<T = unknown> = ES2024.PropertyDescriptor<T>;

    // ES2025 types:
    interface IteratorResultObject<T> {
        value: T;
        done: boolean;
    }
}

declare const ES2025: ES2025;
export = ES2025;
