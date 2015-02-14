/// <reference path="localForage.d.ts" />

declare var localForage: lf.ILocalForage<string>
declare var callback: lf.ICallback<string>
declare var promise: lf.IPromise<string>

() => {

  localForage.setDriver(lf.LOCALSTORAGE);
  localForage.setDriver([lf.WEBSQL, lf.INDEXEDDB]);

  localForage.config({
      driver: lf.LOCALSTORAGE,
      name: 'lf',
      size: 1000000,
      storeName: 'name',
      version: 1.0,
      description: 'desc'
  });
  localForage.config({driver: [lf.WEBSQL, lf.INDEXEDDB]});

  localForage.clear()
  localForage.length
  localForage.key(0)

  localForage.getItem("key", (str: string) => {
    var newStr: string = str
  })
  localForage.getItem("key").then((str: string) => {
    var newStr: string = str
  })

  localForage.setItem("key", "value", (str: string) => {
    var newStr: string = str
  })
  localForage.setItem("key", "value").then((str: string) => {
    var newStr: string = str
  })

  localForage.removeItem("key", (str: string) => {
    var newStr: string = str
  })
  localForage.removeItem("key").then((str: string) => {
    var newStr: string = str
  })

  promise.then(callback)
}
