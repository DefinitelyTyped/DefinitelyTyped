import hasbin = require("hasbin");

hasbin("node", (result: boolean) => {});
hasbin.async("node", (result: boolean) => {});
hasbin.some(["node", "ls"], (result: boolean) => {});
hasbin.all(["node", "ls"], (result: boolean) => {});
hasbin.first(["node", "ls"], (first: string | false) => {});

const first = hasbin.first.sync(["node", "ls"]); // $ExpectType string | false
if (first !== false) {
    const file: string = first;
}

hasbin.sync("node"); // $ExpectType boolean
hasbin.some.sync(["node", "ls"]); // $ExpectType boolean
hasbin.all.sync(["node", "ls"]); // $ExpectType boolean
