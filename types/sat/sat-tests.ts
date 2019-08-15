import SAT = require("sat");

class SatTest{
	public vectorTest(){
		let v1: SAT.Vector = new SAT.Vector(10, 10);
		console.log("def: v1 - " + v1.x.toString() + v1.y.toString());
		let v2: SAT.Vector = new SAT.Vector(20,20);
		console.log("def: v2 - " + v2.x.toString() + v1.y.toString());
		let v3: SAT.Vector = new SAT.Vector(30,30);
		console.log("def: v3 -" + v3.x.toString() + v1.y.toString());
		v2.copy(v1);
		console.log("copy: v2 - " + v2.x.toString() + v2.y.toString());
		v3 = v1.clone();
		console.log("clone: v3 - " + v3.x.toString() + v3.y.toString());
		v3.perp();
		console.log("perp: v3 - " + v3.x.toString() + v3.y.toString());

	}
	
}

let test = new SatTest;

test.vectorTest();