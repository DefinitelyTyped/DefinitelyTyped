let typedArray: AV.TypedArray = Int8Array.from([]);
typedArray = Uint8Array.from([]);
typedArray = Uint8ClampedArray.from([]);
typedArray = Int16Array.from([]);
typedArray = Uint16Array.from([]);
typedArray = Int32Array.from([]);
typedArray = Uint32Array.from([]);
typedArray = Float32Array.from([]);
typedArray = Float64Array.from([]);

let buffer: AV.Buffer = AV.Buffer.allocate(100);
buffer = new AV.Buffer(typedArray);

const bufferList = new AV.BufferList();
bufferList.append(buffer);

let source: AV.Source = new AV.HTTPSource("http://example.org/");
source = new AV.HTTPSource("http://example.org/", { length: 10 });
source = new AV.FileSource(new File([], "test-file"));
source = new AV.BufferSource(typedArray);
source = new AV.BufferSource(buffer);
source = new AV.BufferSource(new ArrayBuffer(10));
source = new AV.BufferSource(bufferList);
source.start();
source.on("data", (buffer) => {
	console.log(buffer.length);
});

let asset: AV.Asset = AV.Asset.fromURL("http://example.org/");
asset = AV.Asset.fromURL("http://example.org/", { length: 10 });
asset = AV.Asset.fromFile(new File([], "test-file"));
asset = AV.Asset.fromBuffer(typedArray);
asset = new AV.Asset(source);
asset.start();
asset.get("format", (format) => {
	console.log(format.formatID);
});
asset.get("metadata", (metadata) => {
	console.log(metadata.asdf);
});
asset.on("error", (error) => {
	console.log(error.stack);
});

let player: AV.Player = AV.Player.fromURL("http://example.org/");
player = AV.Player.fromURL("http://example.org/", { length: 10 });
player = AV.Player.fromFile(new File([], "test-file"));
player = AV.Player.fromBuffer(typedArray);
player = new AV.Player(asset);
player.play();
player.on("error", (error) => {
	console.log(error.stack);
});

class MyAudioDevice extends AV.EventEmitter implements AV.Device {
	supported = true;

	constructor(sampleRate: number, number: number) {
		super();
	}

	getDeviceTime() {
		return 0;
	}

	destroy() {
	}
}
AV.AudioDevice.register(MyAudioDevice);

const device: AV.Device | null = AV.AudioDevice.create(12345, 2);

const audioDevice = new AV.AudioDevice(12345, 2);
console.log(audioDevice.playing);
audioDevice.seek(10);
audioDevice.once("refill", (buffer) => {
	console.log(buffer.length);
});

let stream: AV.Stream = AV.Stream.fromBuffer(buffer);
stream = new AV.Stream(bufferList);
console.log(stream.offset);
console.log(stream.readString(10));
console.log(stream.readString(10, "utf8"));

const bitstream = new AV.Bitstream(stream);
console.log(bitstream.read(1));
console.log(bitstream.read(1, true));

class MyDecoder extends AV.Decoder {
	init() {
	}

	readChunk() {
		return typedArray;
	}
}
AV.Decoder.register("mp3", MyDecoder);
const decoder: AV.Decoder | null = AV.Decoder.find("mp3");
if (decoder) {
	decoder.on("error", (error) => {
		console.log(error.stack);
	});
}

class MyDemuxer extends AV.Demuxer {
	static probe(stream: AV.Stream) {
		return true;
	}

	readChunk() {
	}
}
AV.Demuxer.register(MyDemuxer);
const demuxer: AV.Demuxer | null = AV.Demuxer.find(buffer);
if (demuxer) {
	demuxer.on("error", (error) => {
		console.log(error.stack);
	});
}

class MyFilter extends AV.Filter {
	process(buffer: AV.TypedArray) {
		console.log(buffer.length);
	}
}

let filter: AV.Filter = new MyFilter({}, "test");
filter = new AV.VolumeFilter({}, "volume");
filter = new AV.BalanceFilter([], "balance");

const eventEmitter = new AV.EventEmitter();
eventEmitter.on("test", (param1: string, param2: number, param3: boolean) => {});
eventEmitter.emit("test", "test", 2, "test");
