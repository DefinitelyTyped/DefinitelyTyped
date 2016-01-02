/// <reference path="object-assign.d.ts" />
import objectAssign = require("object-assign");

function assign1() {
  var result = objectAssign({hello: "world"});
  return result;
}

function assign2() {
  var result = objectAssign({hello: "world"}, {hello: "worlds", second: "extra"});
  return result;
}

function assign3() {
  var result = objectAssign({hello: "world"}, {hello: "worlds", second: "extra"}, {hello: "stop", the: "spinning"});
  return result;
}
