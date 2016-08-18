
/// <reference path="simple-assign.d.ts" />
import * as assign from "simple-assign";

function assign1() {
  return assign({hello: "world"});
}

function assign2() {
  return assign({hello: "world"}, {hello: "worlds", second: "extra"});
}

function assign3() {
  return assign({hello: "world"}, {hello: "worlds", second: "extra"}, {hello: "stop", the: "spinning"});
}
