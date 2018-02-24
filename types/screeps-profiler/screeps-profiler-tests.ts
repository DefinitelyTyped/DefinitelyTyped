import profiler = require("screeps-profiler");

function testFunction() {
}

class TestClass {
    private readonly dummy: string;
}

const testObj = {
    foo() {
    },
};

profiler.enable();
profiler.wrap(testFunction);
profiler.registerClass(TestClass, "TestClass");
profiler.registerObject(testObj, "testObj");
profiler.registerFN(testFunction);
profiler.registerFN(testFunction, "testFunction");

const ticks = 100;
const filterName = "test";

Game.profiler.profile(ticks);
Game.profiler.profile(ticks, filterName);

Game.profiler.stream(ticks);
Game.profiler.stream(ticks, filterName);

Game.profiler.email(ticks);
Game.profiler.email(ticks, filterName);

Game.profiler.background();
Game.profiler.background(filterName);

Game.profiler.output();
Game.profiler.output(100);

Game.profiler.reset();

Game.profiler.restart();
