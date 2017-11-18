// examples from the project README.MD

import RuleReactor = require("rule-reactor");
var reactor = new RuleReactor();

class Patient {
    fever: string;
    spots: boolean;
    innoculated: boolean;
    diagnosis?: Diagnosis;
    treatment?: Treatment;
}
class Diagnosis {
    constructor(a: string, b: string) {}
}
class Treatment {
    constructor(a: string) {}
}

reactor.createRule("Measles",0,{p: Patient},
	function(p) {
		return p.fever=="high" && p.spots==true && p.innoculated==false;
	},
	function(p) {
		p.diagnosis = new Diagnosis("measles","High temp, spots, and no innoculation for measles.");
	});
	
reactor.createRule("Penicillin",0,{p: Patient, d: Diagnosis},
	function(d) {
		return d.name=="measles";
	},
	function(p) {
		p.treatment = new Treatment("penicillin");
	});


var p = new Patient();
p.fever = "high";
p.spots = true;
p.innoculated = false;
reactor.assert(p);

reactor.trace(0);
reactor.run(Infinity,true,function() { 
	//console.log(JSON.stringify(p)); 
});


reactor.createRule("stop",-100,{},
	function() {
		return true;
	},
	function() {
		reactor.stop();
	});


class Person {
home: any;
}

reactor.declare("Person",Person); // this line required for Node.js
reactor.createRule("homeless",0,{},
	function() {
		return reactor.exists({person: Person},function(person: Person) { return person.home==null; });
	},
	function() {
		//console.log("There are homeless people.");
	});


function assert() { return reactor.assert.apply(reactor,arguments); }
function not() { return reactor.not.apply(reactor,arguments); }
function exists() { return reactor.exists.apply(reactor,arguments); }
function forAll() { return reactor.forAll.apply(reactor,arguments); }
