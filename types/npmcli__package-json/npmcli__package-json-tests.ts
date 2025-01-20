import PackageJson = require("@npmcli/package-json");

(async () => {
    const pkgJson = await PackageJson.load("./");

    pkgJson.update({
        dependencies: {
            a: "^1.0.0",
            b: "^1.2.3",
        },
        workspaces: ["./new-workspace"],
        packageManager: "pnpm@8.6.1",
    });

    await pkgJson.save();

    const pkgJson2 = new PackageJson();

    pkgJson2.fromJSON("{\"name\": \"foo\"}");
})();
