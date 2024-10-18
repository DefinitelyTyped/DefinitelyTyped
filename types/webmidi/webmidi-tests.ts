const onFulfilled = (item: WebMidi.MIDIAccess) => {
    const midiPort = item;

    // @ts-expect-error inputs property is read-only
    midiPort.inputs = new Map<string, WebMidi.MIDIInput>();
    // @ts-expect-error outputs property is read-only
    midiPort.outputs = new Map<string, WebMidi.MIDIOutput>();
    // @ts-expect-error sysexEnabled is read-only
    midiPort.sysexEnabled = true;

    midiPort.onstatechange = event => {
        console.log("onstatechange");
        console.log(event);
    };
    midiPort.onstatechange = null;

    const onStateChange = (event: WebMidi.MIDIConnectionEvent) => {
        console.log(event.port);

        // @ts-expect-error port is read-only
        event.port = null;
    };
    midiPort.addEventListener("statechange", onStateChange);
    midiPort.removeEventListener("statechange", onStateChange);

    console.log("sysexenabled");
    console.log(item.sysexEnabled);

    const outputs = item.outputs.values();
    for (const output of outputs) {
        // @ts-expect-error id is read-only
        output.id = "123";
        // @ts-expect-error manufacturer is read-only
        output.manufacturer = "456";
        // @ts-expect-error name is read-only
        output.name = "789";
        // @ts-expect-error type is read-only and has to be "output"
        output.type = "input";
        // @ts-expect-error version is read-only
        output.version = "1.0";
        // @ts-expect-error state is read-only
        output.state = "connected";
        // @ts-expect-error connection is read-only
        output.connection = "closed";

        output.send([0x90, 0x45, 0x7f]);
        output.send(new Uint8Array([0x90, 0x45, 0x7f]));
    }

    const onMidiMessage = (event: WebMidi.MIDIMessageEvent) => {
        console.log(event.data);
        // @ts-expect-error receivedTime is not present in the spec
        console.log(event.receivedTime);
        // @ts-expect-error data is read-only
        event.data = [];
    };

    const inputs = midiPort.inputs.values();
    for (const input of inputs) {
        // @ts-expect-error id is read-only
        input.id = "123";
        // @ts-expect-error manufacturer is read-only
        input.manufacturer = "456";
        // @ts-expect-error name is read-only
        input.name = "789";
        // @ts-expect-error type is read-only and has to be "input"
        input.type = "output";
        // @ts-expect-error version is read-only
        input.version = "1.0";
        // @ts-expect-error state is read-only
        input.state = "connected";
        // @ts-expect-error connection is read-only
        input.connection = "closed";

        input.onmidimessage = event => {
            console.log(event.data);
        };
        input.onmidimessage = null;

        input.addEventListener("midimessage", onMidiMessage);
        input.removeEventListener("midimessage", onMidiMessage);
    }

    const inputOrOutput = [...inputs, ...outputs][0];
    if (inputOrOutput.type === "output") {
        // 'send' only available on outputs
        inputOrOutput.send([12345]);
    }

    // @ts-expect-error MidiInputMap is read-only
    item.inputs.clear();
    // @ts-expect-error MidiOutputMap is read-only
    item.outputs.clear();
};

const onRejected = (e: Error) => {
    console.error(e);
};

const midiOptions: WebMidi.MIDIOptions = {
    sysex: true,
    software: false,
};

if (navigator.requestMIDIAccess !== undefined) {
    navigator.requestMIDIAccess(midiOptions).then(onFulfilled, onRejected);
}
