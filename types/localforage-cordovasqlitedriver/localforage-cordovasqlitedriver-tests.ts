declare const cordovaSQLiteDriver: LocalForageDriver;

() => {
    const driverName: string = cordovaSQLiteDriver._driver;

    const config = {
        driver: driverName,
        name: 'localforage'
    };

    cordovaSQLiteDriver._initStorage(config);

    cordovaSQLiteDriver.clear((err: any) => {
        const newError: any = err;
    });

    cordovaSQLiteDriver.length((err: any, num: number) => {
        const newError: any = err;
        const newNumber: number = num;
    });

    cordovaSQLiteDriver.key(0, (err: any, value: string) => {
        const newError: any = err;
        const newValue: string = value;
    });

    cordovaSQLiteDriver.keys((err: any, keys: string[]) => {
        const newError: any = err;
        const newArray: string[] = keys;
    });

    cordovaSQLiteDriver.getItem("key", (err: any, str: string) => {
        const newError: any = err;
        const newStr: string = str;
    });

    cordovaSQLiteDriver.setItem("key", "value", (err: any, str: string) => {
        const newError: any = err;
        const newStr: string = str;
    });

    cordovaSQLiteDriver.setItem("key", "value", (str: string) => {
        const newStr: string = str;
    });

    cordovaSQLiteDriver.removeItem("key", (err: any) => {
        const newError: any = err;
    });

    cordovaSQLiteDriver.removeItem("key", (err: any) => {
        const newError: any = err;
    });
};
