import ffbinaries = require("ffbinaries");

ffbinaries.detectPlatform();
ffbinaries.detectPlatform({ type: 'darwin', arch: 'x64' });
ffbinaries.detectPlatform({ type: 'will return null', arch: 'x64' });

ffbinaries.downloadBinaries(
    ["ffmpeg", "ffprobe", "ffplay", "ffserver"],
    {
        platform: ffbinaries.detectPlatform(),
        destination: "./path/to/download",
        force: true,
        quiet: true,
        tickerFn: ({ progress, filename }) => {
            progress; // $ExpectType number
            filename; // $ExpectType string
        },
        tickerInterval: 1000,
    },
    (error, results) => {
        error; // $ExpectType string | null
        const result = results[0];
        switch (result.code) {
            case "DONE_CLEAN":
                result.filename;
                result.path;
                result.size; // $ExpectType string
                result.status;
                break;
            case "DONE_FROM_CACHE":
                result.filename;
                result.path;
                // @ts-expect-error
                result.size;
                result.status;
                break;
            case "FILE_EXISTS":
                result.filename;
                result.path;
                // @ts-expect-error
                result.size;
                result.status;
                break;
            default:
                const _: never = result;
        }
    }
);

const ffmpegLocated = ffbinaries.locateBinariesSync(["ffmpeg"], { ensureExecutable: true, paths: ["."] });
// @ts-expect-error
ffmpegLocated.ffprobe;
if (ffmpegLocated.ffmpeg.found) {
    ffmpegLocated.ffmpeg.isExecutable; // $ExpectType boolean
    ffmpegLocated.ffmpeg.version; // $ExpectType string
    ffmpegLocated.ffmpeg.path; // $ExpectType string
} else {
    ffmpegLocated.ffmpeg.isExecutable; // $ExpectType false
    ffmpegLocated.ffmpeg.version; // $ExpectType null
    ffmpegLocated.ffmpeg.path; // $ExpectType null
}

const multipleLocated = ffbinaries.locateBinariesSync(["ffmpeg", "ffplay"]);
multipleLocated.ffmpeg;
multipleLocated.ffplay;

// @ts-expect-error
ffbinaries.locateBinariesSync(["ffmpeg", "not a component"]);

ffbinaries.getVersionData("1.2.3", (error, data) => {
    error; // $ExpectType string | null
    data.bin["osx-64"].ffplay; // $ExpectType string | undefined
    data.permalink; // $ExpectType string
    data.version; // $ExpectType string
});

ffbinaries.listVersions((error, versions) => {
    error; // $ExpectType string | null
    versions; // $ExpectType string[]
});

const _: ffbinaries.Platform[] = ffbinaries.listPlatforms();

const __: ffbinaries.Platform | null = ffbinaries.resolvePlatform("macos");

ffbinaries.getBinaryFilename("ffmpeg", "linux-32"); // $ExpectType string

ffbinaries.clearCache(); // $ExpectType void
