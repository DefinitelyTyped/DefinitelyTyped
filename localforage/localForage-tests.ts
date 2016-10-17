

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

    localForage.key(0, (err: any, value: string) => {
        let newError: any = err;
        let newValue: string = value;
    });

    localForage.keys((err: any, keys: Array<string>) => {
        let newError: any = err;
        let newArray: Array<string> = keys;
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