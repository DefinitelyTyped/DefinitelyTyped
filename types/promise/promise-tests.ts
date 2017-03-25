var prom = new Promise<boolean>((resolve, reject) => {
	resolve(true);
});

var prom2 = new Promise<boolean>((resolve, reject) => {
	resolve(true);
});

prom.then((val) => {
  const b: boolean = val;
}).catch(() => {

});

var prom3 = Promise.all([prom, prom2]);

prom3.then((resolve: Array<any>) => {

});

function withCallback(arg: any, cb: (e: Error, result: any) => void): void {
	cb(null, arg);
}
var prom4 = Promise.denodeify(withCallback);
prom4('test').then(result => result);
