import {Path} from "pathjs";

Path.map("/test/:id")
.to(()=>{ });

Path.listen();

//History
Path.history.listen(() =>{
	
});

var initial = Path.history.initial;

//Core
var route = new Path.core.route("/test/:id");

function test1() {
	
}

route.enter(test1);

function test2() {
	
}

var funs = new Array<Function>();

funs.push(test1);
funs.push(test2);

route.enter(funs);
