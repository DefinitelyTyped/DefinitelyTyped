import ffmpeg from 'ffmpeg.js/ffmpeg-mp4';
import Worker from 'ffmpeg.js/ffmpeg-worker-webm';
import OnMessageOptions = Worker.OnMessageOptions;

// test data
let stdout = "";
let stderr = "";
const worker = new Worker();
const testData = new Uint8Array(0);

// test cases
ffmpeg({
    arguments: ["-version"],
    print: (data: string) => { stdout += data + "\n"; },
    printErr: (data: string) => { stderr += data + "\n"; },
    onExit: () => {},
});

ffmpeg({
    MEMFS: [],
    TOTAL_MEMORY: 512 * 1024 * 1024,
    arguments: ['-framerate'],
    stdin: () => {},
    print: () => {},
    printErr: () => {},
    onExit: (c: number) => (c)
});

ffmpeg({
    MEMFS: [{name: "test.webm", data: testData}],
    arguments: ["-i", "test.webm", "-c:v", "libvpx", "-an", "out.webm"],
    stdin: () => {},
});

ffmpeg({
    mounts: [{type: "NODEFS", opts: {root: "."}, mountpoint: "/data"}],
    arguments: ["-i", "/data/test.webm", "-c:v", "libvpx", "-an", "/data/out.webm"],
    stdin: () => {},
});

worker.onmessage = (e: OnMessageOptions) => {
    const msg = e.data;
    switch (msg.type) {
        case "ready":
            worker.postMessage({type: "run", arguments: ["-version"]});
            break;
        case "stdout":
            stdout += msg.data + "\n";
            break;
        case "stderr":
            stderr += msg.data + "\n";
            break;
        case "exit":
            worker.terminate();
            break;
    }
};
