// require flake-idgen
import FlakeId = require('flake-idgen');
let flakeIdGen1 = new FlakeId({datacenter: 9, worker: 7});

// create flake IDs
console.log(flakeIdGen1.next());
console.log(flakeIdGen1.next());
console.log(flakeIdGen1.next());

// create flake IDs using a callback
flakeIdGen1.next((err, id) => {
	console.info(id);
});

flakeIdGen1.next((err, id) => {
	console.info(id);
});

let flakeIdGen2 = new FlakeId();
let flakeIdGen3 = new FlakeId({datacenter: 9, worker: 7});
let flakeIdGen4 = new FlakeId({epoch: 1300000000000})
console.info(flakeIdGen2.next());
console.info(flakeIdGen3.next());
console.info(flakeIdGen4.next());

