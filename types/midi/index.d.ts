// Type definitions for midi 2.0
// Project: https://github.com/justinlatimer/node-midi
// Definitions by: Ryan Price <https://github.com/ryprice>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace MIDI {
    type MIDIMessage = [number, number, number];

    type MIDIMessageHandler = (
        deltaTime: number,
        // [status, data1, data2]
        message: MIDIMessage,
    ) => void;

    interface MIDIInput {
        getPortCount(): number;
        getPortName(port: number): string;
        on(type: 'message', handler: MIDIMessageHandler): void;
        openPort(port: number): void;
        ignoreTypes(filterSysex: boolean, filterTiming: boolean, filterSensing: boolean): void;
    }

    interface MIDIInputConstructor {
        new (): MIDIInput;
    }

    interface MIDIOutput {
        getPortCount(): number;
        getPortName(port: number): string;
        openPort(port: number): void;
        sendMessage(message: MIDIMessage): void;
        closePort(): void;
    }

    interface MIDIOutputConstructor {
        new(): MIDIOutput;
    }

    interface MIDIStatic {
        Input: MIDIInputConstructor;
        Output: MIDIOutputConstructor;
    }

    const MIDIStatic: MIDIStatic;
}

export = MIDI.MIDIStatic;
