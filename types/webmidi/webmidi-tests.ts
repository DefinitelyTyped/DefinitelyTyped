const onFulfilled = (item: WebMidi.MIDIAccess) => {
    const midiPort = item;

    midiPort.onstatechange = event => {
        console.log('onstatechange');
        console.log(event);
    };
    midiPort.addEventListener('statechange', event => {
        console.log(event.port);
    });

    console.log('sysexenabled');
    console.log(item.sysexEnabled);

    const outputs = item.outputs.values();
    for (const op of outputs) {
        op.send([0x90, 0x45, 0x7f]);
        op.send(new Uint8Array([0x90, 0x45, 0x7f]));
    }

    const inputs = midiPort.inputs.values();
    for (const input of inputs) {
        input.onmidimessage = event => {
            console.log(event.data);
        };
        input.addEventListener('midimessage', event => {
            console.log(event.data);
        });
    }

    const inputOrOutput = [...inputs, ...outputs][0];
    if (inputOrOutput.type === 'output') {
        // 'send' only available on outputs
        inputOrOutput.send([12345]);
    }
};

const onRejected = (e: Error) => {
    console.error(e);
};

if (navigator.requestMIDIAccess !== undefined) {
    navigator.requestMIDIAccess().then(onFulfilled, onRejected);
}
