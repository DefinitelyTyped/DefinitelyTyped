/// <reference path="localForage.d.ts" />

declare let localForage: LocalForage;

namespace LocalForageTest {
    localForage.clear((err: any) => {
        let newError: any = err;
    });

    localForage.iterate((str: string, key: string, num: number) => {
        let newStr: string = str;
        let newKey: string = key;
        let newNum: number = num;
    });

    localForage.length((err: any, num: number) => {
        let newError: any = err;
        let newNumber: number = num;
    });

    localForage.length().then((num: number) => {
        var newNumber: number = num;
    });

    localForage.key(0, (err: any, value: string) => {
        let newError: any = err;
        let newValue: string = value;
    });

    localForage.keys((err: any, keys: Array<string>) => {
        let newError: any = err;
        let newArray: Array<string> = keys;
    });

    localForage.keys().then((keys: Array<string>) => {
        var newArray: Array<string> = keys;
    });

    localForage.getItem("key",(err: any, str: string) => {
        let newError: any = err;
        let newStr: string = str
    });

    localForage.getItem<string>("key").then((str: string) => {
        let newStr: string = str;
    });

    localForage.setItem("key", "value",(err: any, str: string) => {
        let newError: any = err;
        let newStr: string = str
    });

    localForage.setItem("key", "value").then((str: string) => {
        let newStr: string = str;
    });

    localForage.removeItem("key",(err: any) => {
        let newError: any = err;
    });

    localForage.removeItem("key").then(() => {
    });

    localForage.getDriver("CustomDriver").then((result: LocalForageDriver) => {
        var driver: LocalForageDriver = result;
        // we need to use a variable for proper type guards before TS 2.0
        var _support = driver._support;
        if (typeof _support === "function") {
            // _support = _support.bind(driver);
            _support().then((result: boolean) => {
                let doesSupport: boolean = result;
            });
        } else if (typeof _support === "boolean") {
            let doesSupport: boolean = _support;
        }
    });

    {
        let config: boolean;

        config = localForage.config({
            name: "testyo",
            driver: localForage.LOCALSTORAGE
        });
    }

    {
        let store: LocalForage;

        store = localForage.createInstance({
            name: "da instance",
            driver: localForage.LOCALSTORAGE
        });
    }

    {
        let testSerializer: LocalForageSerializer;

        localForage.getSerializer()
        .then((serializer: LocalForageSerializer) => {
            testSerializer = serializer;
        });

        localForage.getSerializer((serializer: LocalForageSerializer) => {
            testSerializer = serializer;
        });
    }
}