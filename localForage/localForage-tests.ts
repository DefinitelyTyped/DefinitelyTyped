/// <reference path="localForage.d.ts" />

interface IType {
  value : string;
}

interface IOtherType {
  value : number;
}

// IPromise typing check.

var voidPromise      : lf.IPromise<void>,
    typePromise      : lf.IPromise<IType>,
    otherTypePromise : lf.IPromise<IOtherType>;

voidPromise = typePromise.then((value : IType) => {});
voidPromise = typePromise.then((value : IType) => {}, (reason : any) => {});

typePromise = typePromise.then((value : IType) => { return value; });

otherTypePromise = typePromise
    .then(function(value : IType) { var otherValue : IOtherType; return otherValue; });

otherTypePromise = typePromise
    .then(function(value : IType) { var otherValue : IOtherType; return otherValue; }, (reason : any) => {});

voidPromise = typePromise.catch((reason : any) => {});

otherTypePromise = typePromise.catch((reason : any) => { var otherValue : IOtherType; return otherValue; });

// IOptions typing check.

var num                 : number,
    str                 : string,
    val                 : IType,
    numberPromise       : lf.IPromise<number>,
    stringPromise       : lf.IPromise<string>,
    stringArrayPromise  : lf.IPromise<Array<string>>,
    LocalForage         : lf.ILocalForage<IType>,
    localForageInstance : lf.ILocalForageInstance<IType>,
    options             : lf.IOptions;

options = { driver : LocalForage.INDEXEDDB };
options = { driver : [LocalForage.LOCALSTORAGE, LocalForage.WEBSQL, LocalForage.INDEXEDDB ]};

options = { name : 'LOCAL_FORAGE' };

options = { version : '1.0.0' };

options = { size : 16777216 };

options = { storeName : 'TEST' };

options = { description : 'Declarations testing.' };

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
