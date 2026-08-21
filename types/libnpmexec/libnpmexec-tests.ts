import libnpmexec = require("libnpmexec");

(async () => {
    // From package documentation.
    await libnpmexec({
        args: ["yosay", "Bom dia!"],
        cache: "~/.npm/_cacache",
        npxCache: "~/.npm/_npx",
        yes: true,
    });

    // Minimal.
    await libnpmexec({
        args: ["yosay", "Bom dia!"],
    });

    // Minimal log.
    await libnpmexec({
        args: ["yosay", "Bom dia!"],
        log: {
            warn(title: string, message: string) {},
        },
    });

    // All filled out.
    await libnpmexec({
        args: ["yosay", "Bom dia!"],
        cache: "~/.npm/_cacache",
        npxCache: "~/.npm/_npx",
        yes: true,
        call: "Test Call",
        color: true,
        localBin: "Test Local Bin",
        locationMsg: "Test Location Msg",
        log: {
            disableProgress() {},
            enableProgress() {},
            warn(title: string, message: string) {},
        },
        globalBin: "Test Global Bin",
        output: (message: string) => {},
        packages: ["Test Package A", "Test Package B"],
        path: "Test Path",
        runPath: "Test Run Path",
        scriptShell: "Test Script Shell",
        registry: "Test Registry",
    });
});
