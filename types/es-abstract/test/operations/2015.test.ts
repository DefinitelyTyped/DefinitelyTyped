import ES5 = require('es-abstract/es5');
import ES2015 = require('es-abstract/es2015');
import ES2015Operations = require('es-abstract/operations/2015');

// Attempting to use `$ExpectType` in this file leads to intermittent dtslint failures
import { expectType } from '../index.test';

declare function keyof<T>(target: T): keyof T;

expectType<ExpectedKeys>(keyof(ES2015Operations));
expectType<keyof ES2015Operations>(ExpectedKeys);

expectType<AddedKeys>(AddedKeysActual);
expectType<typeof AddedKeysActual>(AddedKeys);

expectType<AllAddedKeys>(AllAddedKeysActual);
expectType<typeof AllAddedKeysActual>(AllAddedKeys);

expectType<RemovedKeys>(RemovedKeysActual);
expectType<typeof RemovedKeysActual>(RemovedKeys);

expectType<AddedKeys>(UnimplementedKeysActual);
expectType<typeof UnimplementedKeysActual>(AddedKeys);

declare const ExpectedKeys: ExpectedKeys;

declare const AddedKeysActual: Exclude<keyof ES2015Operations, keyof ES5 | keyof ES2015>;
declare const UnimplementedKeysActual: Exclude<keyof ES2015Operations, keyof ES2015>;
export declare const AddedKeys: AddedKeys;

declare const AllAddedKeysActual: Exclude<keyof ES2015Operations, keyof ES5>;
export declare const AllAddedKeys: AllAddedKeys;

declare const RemovedKeysActual: Exclude<keyof ES5, keyof ES2015Operations>;
export declare const RemovedKeys: RemovedKeys;

// ## Long types:
//#region RemovedKeys
export type RemovedKeys = 'CheckObjectCoercible';
//#endregion

//#region AddedKeys
export type AddedKeys =
    | 'Construct'
    | 'CreateArrayFromList'
    | 'CreateListIterator'
    | 'NormalCompletion'
    | 'RegExpBuiltinExec';

export type AllAddedKeys =
    | AddedKeys
    | 'AdvanceStringIndex'
    | 'ArrayCreate'
    | 'ArraySetLength'
    | 'ArraySpeciesCreate'
    | 'Call'
    | 'CanonicalNumericIndexString'
    | 'CompletePropertyDescriptor'
    | 'CreateDataProperty'
    | 'CreateDataPropertyOrThrow'
    | 'CreateHTML'
    | 'CreateIterResultObject'
    | 'CreateListFromArrayLike'
    | 'CreateMethodProperty'
    | 'DefinePropertyOrThrow'
    | 'DeletePropertyOrThrow'
    | 'EnumerableOwnNames'
    | 'Get'
    | 'GetIterator'
    | 'GetMethod'
    | 'GetOwnPropertyKeys'
    | 'GetPrototypeFromConstructor'
    | 'GetSubstitution'
    | 'GetV'
    | 'HasOwnProperty'
    | 'HasProperty'
    | 'InstanceofOperator'
    | 'Invoke'
    | 'IsArray'
    | 'IsConcatSpreadable'
    | 'IsConstructor'
    | 'IsExtensible'
    | 'IsInteger'
    | 'IsPromise'
    | 'IsPropertyKey'
    | 'IsRegExp'
    | 'IteratorClose'
    | 'IteratorComplete'
    | 'IteratorNext'
    | 'IteratorStep'
    | 'IteratorValue'
    | 'ObjectCreate'
    | 'OrdinaryDefineOwnProperty'
    | 'OrdinaryGetOwnProperty'
    | 'OrdinaryHasInstance'
    | 'OrdinaryHasProperty'
    | 'RegExpExec'
    | 'RequireObjectCoercible'
    | 'SameValueZero'
    | 'Set'
    | 'SetFunctionName'
    | 'SetIntegrityLevel'
    | 'SpeciesConstructor'
    | 'SymbolDescriptiveString'
    | 'TestIntegrityLevel'
    | 'ToDateString'
    | 'ToInt16'
    | 'ToInt8'
    | 'ToLength'
    | 'ToPropertyKey'
    | 'ToUint8'
    | 'ToUint8Clamp'
    | 'ValidateAndApplyPropertyDescriptor'
    | 'thisBooleanValue'
    | 'thisNumberValue'
    | 'thisStringValue'
    | 'thisTimeValue';
//#endregion

//#region ExpectedKeys
type ExpectedKeys =
    | 'IsPropertyDescriptor'
    | 'Abstract Equality Comparison'
    | 'Abstract Relational Comparison'
    | 'Strict Equality Comparison'
    | 'AdvanceStringIndex'
    | 'ArrayCreate'
    | 'ArraySetLength'
    | 'ArraySpeciesCreate'
    | 'Call'
    | 'CanonicalNumericIndexString'
    | 'CompletePropertyDescriptor'
    | 'Construct'
    | 'CreateArrayFromList'
    | 'CreateDataProperty'
    | 'CreateDataPropertyOrThrow'
    | 'CreateHTML'
    | 'CreateIterResultObject'
    | 'CreateListFromArrayLike'
    | 'CreateListIterator'
    | 'CreateMethodProperty'
    | 'DateFromTime'
    | 'Day'
    | 'DayFromYear'
    | 'DaysInYear'
    | 'DayWithinYear'
    | 'DefinePropertyOrThrow'
    | 'DeletePropertyOrThrow'
    | 'EnumerableOwnNames'
    | 'FromPropertyDescriptor'
    | 'Get'
    | 'GetIterator'
    | 'GetMethod'
    | 'GetOwnPropertyKeys'
    | 'GetPrototypeFromConstructor'
    | 'GetSubstitution'
    | 'GetV'
    | 'HasOwnProperty'
    | 'HasProperty'
    | 'HourFromTime'
    | 'InLeapYear'
    | 'InstanceofOperator'
    | 'Invoke'
    | 'IsAccessorDescriptor'
    | 'IsArray'
    | 'IsCallable'
    | 'IsConcatSpreadable'
    | 'IsConstructor'
    | 'IsDataDescriptor'
    | 'IsExtensible'
    | 'IsGenericDescriptor'
    | 'IsInteger'
    | 'IsPromise'
    | 'IsPropertyKey'
    | 'IsRegExp'
    | 'IteratorClose'
    | 'IteratorComplete'
    | 'IteratorNext'
    | 'IteratorStep'
    | 'IteratorValue'
    | 'MakeDate'
    | 'MakeDay'
    | 'MakeTime'
    | 'MinFromTime'
    | 'modulo'
    | 'MonthFromTime'
    | 'msFromTime'
    | 'NormalCompletion'
    | 'ObjectCreate'
    | 'OrdinaryDefineOwnProperty'
    | 'OrdinaryGetOwnProperty'
    | 'OrdinaryHasInstance'
    | 'OrdinaryHasProperty'
    | 'RegExpBuiltinExec'
    | 'RegExpExec'
    | 'RequireObjectCoercible'
    | 'SameValue'
    | 'SameValueZero'
    | 'SecFromTime'
    | 'Set'
    | 'SetFunctionName'
    | 'SetIntegrityLevel'
    | 'SpeciesConstructor'
    | 'SymbolDescriptiveString'
    | 'TestIntegrityLevel'
    | 'thisBooleanValue'
    | 'thisNumberValue'
    | 'thisStringValue'
    | 'thisTimeValue'
    | 'TimeClip'
    | 'TimeFromYear'
    | 'TimeWithinDay'
    | 'ToBoolean'
    | 'ToDateString'
    | 'ToInt16'
    | 'ToInt32'
    | 'ToInt8'
    | 'ToInteger'
    | 'ToLength'
    | 'ToNumber'
    | 'ToObject'
    | 'ToPrimitive'
    | 'ToPropertyDescriptor'
    | 'ToPropertyKey'
    | 'ToString'
    | 'ToUint16'
    | 'ToUint32'
    | 'ToUint8'
    | 'ToUint8Clamp'
    | 'Type'
    | 'ValidateAndApplyPropertyDescriptor'
    | 'WeekDay'
    | 'YearFromTime';
//#endregion
