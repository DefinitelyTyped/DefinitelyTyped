const prom1 = new Promise<number>((resolve, reject) => {
	resolve(12);
});

const prom2 = new Promise<string>((resolve, reject) => {
	reject('an error');
}).then((val) => {
  console.log(val);
  return val;
}).catch((err) => {
	console.error(err);
});

Promise.all([prom1, prom2])
.then(result => {
	console.log(result);
}, (exception) => console.error(exception))
.catch((ex) => console.error(ex));