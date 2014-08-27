/// <reference path="localForage.d.ts" />

declare var localForage: lf.ILocalForage<string>
declare var callback: lf.ICallback<string> 
declare var promise: lf.IPromise<string> 

() => {
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
