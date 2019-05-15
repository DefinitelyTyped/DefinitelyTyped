import objectAssign = require('object-assign');

interface Target {
  hellow: string;
}

interface Source1 {
  source1: string;
}

interface Result extends Target, Source1 {

}

interface Source2 {
  source2: string;
}

interface Result2 extends Result, Source2 {

}

interface Source3 {
  source3: string;
}

interface Result3 extends Result2, Source3 {

}

interface Source4 {
  source4: string;
}

interface Result4 extends Result3, Source4 {

}

interface Source5 {
  source5: string;
}

interface Result5 extends Result4, Source5 {

}

function assign1(): Result {
  return objectAssign({hellow: "world"}, {source1: "U"});
}

function assign2(): Result2 {
  return objectAssign({hellow: "world"}, {source1: "U"}, {source2: "V"});
}

function assign3(): Result3 {
  return objectAssign({hellow: "world"}, {source1: "U"}, {source2: "V"}, {source3: "W"});
}

function assign4(): Result4 {
  return objectAssign({hellow: "world"}, {source1: "U"}, {source2: "V"}, {source3: "W"}, {source4: "Q"});
}

function assign5(): Result5 {
  return objectAssign({hellow: "world"}, {source1: "U"}, {source2: "V"}, {source3: "W"}, {source4: "Q"}, {source5: "R"});
}

function assign() {
  return objectAssign({hellow: "world"}, {source1: "U"}, {source2: "V"}, {source3: "W"}, {source4: "Q"}, {source5: "R"}, {
    hellow: "hellow",
    source1: "source1",
    source2: "source2",
    source3: "source3",
    source4: "source4",
    source5: "source5",
    generic: "any"
  });
}

