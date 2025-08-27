import parents = require("parents");

function test(): string[] {
    const res1 = parents("root/user/projects/ts");
    const res2 = parents("root\\user\\projects\\ts", { platform: "win" });
    const res3 = parents();
    const res4 = parents(undefined);
    return res1 || res2 || res3 || res4;
}
