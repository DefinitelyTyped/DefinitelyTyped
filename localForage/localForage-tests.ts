/// <reference path="localForage.d.ts" />

interface IType {
  value : string;
}

interface IOtherType {
  value : number;
}

var num                 : number,
    str                 : string,
    val                 : IType,
    numberPromise       : Promise<number>,
    stringPromise       : Promise<string>,
    stringArrayPromise  : Promise<Array<string>>,
    voidPromise         : Promise<void>,
    typePromise         : Promise<IType>,
    otherTypePromise    : Promise<IOtherType>,
    LocalForage         : lf.ILocalForage<IType>,
    localForageInstance : lf.ILocalForageInstance<IType>,
    options             : lf.IOptions;

// ILocalForage typing check.

localForageInstance = new LocalForage();
localForageInstance = new LocalForage(options);

// ILocalForageInstance typing check.

localForageInstance = localForageInstance.createInstance();
localForageInstance = localForageInstance.createInstance(options);

localForageInstance.config(options);
options = localForageInstance.config('TEST');

voidPromise = localForageInstance.ready();
voidPromise = localForageInstance.ready((error : any) => {});

voidPromise = localForageInstance.clear();
voidPromise = localForageInstance.clear((error : any) => {});

numberPromise = localForageInstance.length();
numberPromise = localForageInstance.length((error : any, length : number) => {});

stringPromise = localForageInstance.key(num);
stringPromise = localForageInstance.key(num, (error : any, key : string) => {});

stringArrayPromise = localForageInstance.keys();
stringArrayPromise = localForageInstance.keys((error : any, keys : Array<string>) => {});

voidPromise = localForageInstance.iterate(
    (value : IType, key : string, iterationNumber : number) => {});
otherTypePromise = localForageInstance.iterate(
    (value : IType, key : string, iterationNumber : number) => { var otherValue : IOtherType; return otherValue; });
otherTypePromise = localForageInstance.iterate(
    (value : IType, key : string, iterationNumber : number) => { var otherValue : IOtherType; return otherValue; },
    (error : any, value : IOtherType) => {});

typePromise = localForageInstance.getItem(str);
typePromise = localForageInstance.getItem(str , (error : any, value : IType) => {});

typePromise = localForageInstance.setItem(str, val);
typePromise = localForageInstance.setItem(str, val, (error : any, value : IType) => {});

voidPromise = localForageInstance.removeItem(str);
voidPromise = localForageInstance.removeItem(str, (error : any) => {});
