/// <reference path="localForage.d.ts" />

declare var localForage: LocalForage;

() => {
    localForage.clear((err: any) => {
        var newError: any = err;
    });

    localForage.iterate((str: string, key: string, num: number) => {
        var newStr: string = str;
        var newKey: string = key;
        var newNum: number = num;
    });

    localForage.length((err: any, num: number) => {
        var newError: any = err;
        var newNumber: number = num;
    });

    localForage.key(0, (err: any, value: string) => {
        var newError: any = err;
        var newValue: string = value;
    });

    localForage.keys((err: any, keys: Array<string>) => {
        var newError: any = err;
        var newArray: Array<string> = keys;
    });

    localForage.getItem("key",(err: any, str: string) => {
        var newError: any = err;
        var newStr: string = str
    });

    localForage.getItem<string>("key").then((str: string) => {
        var newStr: string = str;
    });
  
    localForage.setItem("key", "value",(err: any, str: string) => {
        var newError: any = err;
        var newStr: string = str
    });

    localForage.setItem("key", "value").then((str: string) => {
        var newStr: string = str;
    });
  
    localForage.removeItem("key",(err: any) => {
        var newError: any = err;
    });

    localForage.removeItem("key").then(() => {
    });
    
    var config = localForage.config({
        name: "testyo",
        driver: localForage.LOCALSTORAGE
    });
    
    var store = localForage.createInstance({
        name: "da instance",
        driver: localForage.LOCALSTORAGE
    });
}