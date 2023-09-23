import mapWorkspaces = require("@npmcli/map-workspaces");
async function tests() {
    const cwd = "cwd";
    await mapWorkspaces({
        cwd,
        pkg: {
            workspaces: {
                packages: ["a", "b"],
            },
        },
    });
}
