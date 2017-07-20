import * as Tus from 'tus-js-client';

let file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});

let upload = new Tus.Upload(file, {
    endpoint: "",
    fingerprint: "fingerprint",
    resume: true,
    onProgress: (bytesSent: number, bytesTotal: number) => {
        let percentage = (bytesSent / bytesTotal * 100).toFixed(2);
        console.log(bytesSent, bytesTotal, percentage + "%");
    },
    onChunkComplete: (chunkSize: number, bytesAccepted: number) => {},
    onSuccess: () => {
    	console.log("Download from %s complete", upload.url);
    },
    onError: (error: Error) => {
    	console.log("Failed because: " + error);
    },
    headers: {TestHeader: 'TestValue'},
    chunkSize: 100,
    withCredentials: true,
    uploadUrl: "",
    uploadSize: 50,
    overridePatchMethod: true,
    retryDelays: [10, 20, 50]
});

upload.start();

upload.abort();

let upload2 = new Tus.Upload(file, {
	endpoint: ""
});
