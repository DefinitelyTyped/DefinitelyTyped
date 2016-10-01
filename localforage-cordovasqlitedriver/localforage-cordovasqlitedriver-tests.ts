/// <reference path="localforage-cordovasqlitedriver.d.ts" />

declare var cordovaSQLiteDriver: LocalForageDriver;

() => {

    var driverName: string = cordovaSQLiteDriver._driver;

    var config = {
        driver: driverName,
        name: 'localforage'
    };

    cordovaSQLiteDriver._initStorage(config);

    cordovaSQLiteDriver.clear((err: any) => {
        var newError: any = err;
    });

    cordovaSQLiteDriver.length((err: any, num: number) => {
        var newError: any = err;
        var newNumber: number = num;
    });

    cordovaSQLiteDriver.key(0, (err: any, value: string) => {
        var newError: any = err;
        var newValue: string = value;
    });

    cordovaSQLiteDriver.keys((err: any, keys: Array<string>) => {
        var newError: any = err;
        var newArray: Array<string> = keys;
    });

    cordovaSQLiteDriver.getItem("key",(err: any, str: string) => {
        var newError: any = err;
        var newStr: string = str
    });
  
    cordovaSQLiteDriver.setItem("key", "value", (err: any, str: string) => {
        var newError: any = err;
        var newStr: string = str
    });

    cordovaSQLiteDriver.setItem("key", "value", (str: string) => {
        var newStr: string = str;
    });
  
    cordovaSQLiteDriver.removeItem("key",(err: any) => {
        var newError: any = err;
    });

    cordovaSQLiteDriver.removeItem("key", (err: any) => {
        var newError: any = err;
    });
}