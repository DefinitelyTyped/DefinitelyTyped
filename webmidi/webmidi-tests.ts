/// <reference path="webmidi.d.ts" />

if (navigator.requestMIDIAccess !== undefined) {
    navigator.requestMIDIAccess().then(onSuccessCallback, onErrorCallback);
}

var onSuccessCallback = (item: WebMidi.MIDIAccess)=>{
    this._midiPort = item;

    item.onconnect = (event: WebMidi.MIDIConnectionEvent)=>{
        console.log("onconnect");
        console.log(event);
    };

    item.ondisconnect = (event: WebMidi.MIDIConnectionEvent)=>{
        console.log("ondisconnect");
        console.log(event);
    };

    console.log("sysexenabled");
    console.log(item.sysexEnabled);

    var inputs = this._midiPort.inputs.values();

    for(const o of inputs){
        this._inputs.push(o);
        console.log(o);
    }

    var outputs = item.outputs.values();
    for(const op of outputs){
        this._outputs.push(op);
        op.send([ 0x90, 0x45, 0x7f ] );
    }

    for(var cnt = 0; cnt < this._inputs.length; cnt++){
        this._inputs[cnt].onmidimessage = (event: WebMidi.MIDIMessageEvent)=>{
            this.onMidiMessage(event.data);
        };
    }
};

var onErrorCallback = (access: Error)=>{ };

var onMidiMessage = (event: Uint8Array)=>{
    console.log(event);
};
