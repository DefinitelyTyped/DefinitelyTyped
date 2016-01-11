/// <reference path="promise.d.ts"/>

var prom = new Promise<Boolean>((resolve, reject) => {
	resolve(true);
});

var prom2 = new Promise<Boolean>((resolve, reject) => {
	resolve(true);
});

prom.then((val) => {
  console.log(val);
}).catch(() => {

});

var prom3 = Promise.all([prom, prom2]);

prom3.then((resolve: Array<any>) => {

});
