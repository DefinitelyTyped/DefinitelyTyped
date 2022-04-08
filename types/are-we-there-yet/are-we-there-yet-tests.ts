import { Tracker, TrackerStream, TrackerGroup } from "are-we-there-yet";

const simple = new Tracker("simple");
simple.addListener("change", (name, completed, tracker) => {
    console.log(`name: ${name}, completed: ${completed}`);
});
simple.addWork(10);
simple.completeWork(1);
console.log(simple.completed() < 1);

const group = new TrackerGroup("group");
group.addUnit(simple);

const subgroup = group.newGroup("subgroup");
console.log(group.completed());

const stream = new TrackerStream("stream", 100, { encoding: "utf8" });
subgroup.addUnit(stream);

stream.addListener("change", (name, completed, tracker) => {
    console.log(`name: ${name}, completed: ${completed}`);
});

simple.finish();
console.log(group.debug());
