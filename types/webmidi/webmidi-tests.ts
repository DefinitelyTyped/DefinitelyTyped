const onFulfilled = (item: WebMidi.MIDIAccess) => {
    this._midiPort = item;

    item.onstatechange = (event: WebMidi.MIDIConnectionEvent) => {
        console.log("onstatechange");
        console.log(event);
    };

    console.log("sysexenabled");
    console.log(item.sysexEnabled);

    const inputs = this._midiPort.inputs.values();

    for (const o of inputs) {
        this._inputs.push(o);
        console.log(o);
    }

    const outputs = item.outputs.values();
    for (const op of outputs) {
        this._outputs.push(op);
        op.send([ 0x90, 0x45, 0x7f ] );
    }

    for (const input of this._inputs) {
        input.onmidimessage = (event: WebMidi.MIDIMessageEvent) => {
            this.onMidiMessage(event.data);
        };
    }
};

const onRejected = (e: Error) => { console.error(e); };

if (navigator.requestMIDIAccess !== undefined) {
    navigator.requestMIDIAccess().then(onFulfilled, onRejected);
}
