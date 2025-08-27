import appdynamics = require("appdynamics");

// $ExpectType void
appdynamics.profile({
    controllerHostName: "host-name",
    controllerPort: 443,
    controllerSslEnabled: true,
    tierName: "tier-name",
    nodeName: "node-name",
    accountName: "account-name",
    accountAccessKey: "account-key",
    applicationName: "your_app_name",
    noNodeNameSuffix: false,
    alwaysAddEumMetadataInHttpHeaders: true,
    btEntryPointDelayDisabled: false,
    debug: true,
    logging: {
        logfiles: [
            {
                root_directory: "/some/root/path",
                filename: "somename.log",
                level: "INFO",
                max_size: 123456,
                max_file: 5,
                outputType: "console",
            },
        ],
    },
    maxProcessSnapshotsPerPeriod: 10,
    processSnapshotPeriodInSeconds: 60,
    autoSnapshotDurationSeconds: 30,
    rootTmpDir: "/some/root/temp/path",
    tmpDir: "/some/tmp/path",
    reuseNode: true,
    reuseNodePrefix: "some-prefix",
    certificateFile: "/some/certificate/path",
    uniqueHostId: "unique-host-id",
});
