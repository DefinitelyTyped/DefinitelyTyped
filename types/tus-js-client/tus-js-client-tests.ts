import * as Tus from 'tus-js-client';

const isSupported = Tus.isSupported;
const canStoreURLs = Tus.canStoreURLs;
const defaultChunkSize = Tus.defaultOptions.chunkSize;

const file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});

const upload = new Tus.Upload(file, {
    endpoint: "",
    fingerprint: (file: File) => file.name,
    resume: true,
    metadata: {
        filename: "foo.txt"
    },
    onProgress: (bytesSent: number, bytesTotal: number) => {
        const percentage = (bytesSent / bytesTotal * 100).toFixed(2);
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
    retryDelays: [10, 20, 50],
    removeFingerprintOnSuccess: true
});

upload.start();

upload.abort();
upload.abort(true);
upload.abort(true, (err?: Error) => {
    console.log("Failed because: " + err);
});

const upload2 = new Tus.Upload(file, {
	endpoint: ""
});

const reader = {
    read: () => Promise.resolve({ done: true, value: '' }),
};
const upload3 = new Tus.Upload(reader, {
    endpoint: '',
    uploadLengthDeferred: true,
});

Tus.Upload.terminate('https://myurl.com', {
	endpoint: ""
});
