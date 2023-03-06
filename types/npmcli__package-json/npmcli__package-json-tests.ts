import PackageJson = require('@npmcli/package-json');

(async () => {
    const pkgJson = await PackageJson.load('./');

    pkgJson.update({
        dependencies: {
            a: '^1.0.0',
            b: '^1.2.3',
        },
        workspaces: ['./new-workspace'],
    });

    await pkgJson.save();
})();
