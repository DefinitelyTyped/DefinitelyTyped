/// <reference path="localForage.d.ts" />

<<<<<<< HEAD
import {default as localForage} from "localforage";
=======
declare var localForage: LocalForage;
>>>>>>> 5f480287834a2615274eea31574b713e64decf17

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
        var newArray:  Array<string> = keys;
    });

    localForage.getItem("key",(err: any, str: string) => {
        var newError: any = err;
        var newStr: string = str
    });

<<<<<<< HEAD
    localForage.getItem<string>("key").then((value) => {        
        var newStr: string = value
    }); 

    localForage.getItem<number>("keyNumber").then((value) => {        
        var newValue: number = value
=======
    localForage.getItem<string>("key").then((str: string) => {
        var newStr: string = str;
>>>>>>> 5f480287834a2615274eea31574b713e64decf17
    });
  
    localForage.setItem("key", "value",(err: any, str: string) => {
        var newError: any = err;
        var newStr: string = str
  });
 
    localForage.setItem("key", "value").then((value) => {
        var v: string = value;
    });

<<<<<<< HEAD
    localForage.setItem("keyNumber", 1337).then((value) => {
        var v: number = value;
=======
    localForage.setItem("key", "value").then((str: string) => {
        var newStr: string = str;
>>>>>>> 5f480287834a2615274eea31574b713e64decf17
    });
  
  localForage.removeItem("key",(err: any) => {
        var newError: any = err; 
    });
    
    localForage.removeItem("key")
        .then( () => {
            
        });

<<<<<<< HEAD
    var config = localForage.config({
        name: "testyo",
        driver: localForage.LOCALSTORAGE
    });
    
    var store = localForage.createInstance({
        name: "da instance",
        driver: localForage.LOCALSTORAGE
=======
    localForage.removeItem("key").then(() => {
>>>>>>> 5f480287834a2615274eea31574b713e64decf17
    });
}
