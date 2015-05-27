/// <reference path="webmidi.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />

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

    /*
     console.log(item.inputs.get("701435409"));
     console.log(item.inputs.has("701435409"));
     console.log(item.inputs.keys());
     console.log(item.inputs.keys().next());
     console.log(item.inputs.values());
     var inputs = this._midiPort.inputs.values();
     console.log(this._midiPort.inputs.entries().next());
     console.log(this._midiPort.inputs.entries().next().done);
     */

    var inputs = this._midiPort.inputs.values();

    /*
     console.log(item.outputs.get("384570428"));
     console.log(item.outputs.has("384570428"));
     console.log(item.outputs.keys());
     console.log(item.outputs.keys().next());
     console.log(item.outputs.values());
     console.log(this._midiPort.outputs.entries().next());
     console.log(this._midiPort.outputs.entries().next().done);
     */

    for(var o = inputs.next(); !o.done; o = inputs.next()){
        this._inputs.push(o.value);
        console.log(o.value);
    }

    var outputs = item.outputs.values();
    for(var op = outputs.next(); !op.done; op = outputs.next()){
        this._outputs.push(op.value);
        op.value.send([ 0x90, 0x45, 0x7f ] );
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
