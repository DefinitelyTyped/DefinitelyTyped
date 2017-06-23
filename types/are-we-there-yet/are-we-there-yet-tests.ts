import { Tracker, TrackerStream, TrackerGroup } from "are-we-there-yet";

let simple = new Tracker("simple");
simple.addListener("change", (name, completed, tracker) => {
    console.log(`name: ${name}, completed: ${completed}`);
});
simple.addWork(10);
simple.completeWork(1);
console.log(simple.completed() < 1);

let group = new TrackerGroup("group");
group.addUnit(simple);

let subgroup = group.newGroup("subgroup");
console.log(group.completed());

let stream = new TrackerStream("stream", 100, { encoding: "utf8" });
subgroup.addUnit(stream);

stream.addListener("change", (name, completed, tracker) => {
    console.log(`name: ${name}, completed: ${completed}`);
});

simple.finish();
console.log(group.debug());
