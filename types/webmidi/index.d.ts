interface Navigator {
    /**
     * When invoked, returns a Promise object representing a request for access to MIDI
     * devices on the user's system.
     */
    requestMIDIAccess(options?: WebMidi.MIDIOptions): Promise<WebMidi.MIDIAccess>;
}

declare namespace WebMidi {
    interface MIDIOptions {
        /**
         * This member informs the system whether the ability to send and receive system
         * exclusive messages is requested or allowed on a given MIDIAccess object.
         */
        sysex: boolean;
    }

    /**
     * This is a maplike interface whose value is a MIDIInput instance and key is its
     * ID.
     */
    type MIDIInputMap = ReadonlyMap<string, MIDIInput>;

    /**
     * This is a maplike interface whose value is a MIDIOutput instance and key is its
     * ID.
     */
    type MIDIOutputMap = ReadonlyMap<string, MIDIOutput>;

    interface MIDIAccess extends EventTarget {
        /**
         * The MIDI input ports available to the system.
         */
        inputs: MIDIInputMap;

        /**
         * The MIDI output ports available to the system.
         */
        outputs: MIDIOutputMap;

        /**
         * The handler called when a new port is connected or an existing port changes the
         * state attribute.
         */
        onstatechange(e: MIDIConnectionEvent): void;

        addEventListener(
            type: "statechange",
            listener: (this: this, e: MIDIConnectionEvent) => any,
            options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions,
        ): void;

        /**
         * This attribute informs the user whether system exclusive support is enabled on
         * this MIDIAccess.
         */
        sysexEnabled: boolean;
    }

    type MIDIPortType = "input" | "output";

    type MIDIPortDeviceState = "disconnected" | "connected";

    type MIDIPortConnectionState = "open" | "closed" | "pending";

    interface MIDIPort extends EventTarget {
        /**
         * A unique ID of the port. This can be used by developers to remember ports the
         * user has chosen for their application.
         */
        id: string;

        /**
         * The manufacturer of the port.
         */
        manufacturer?: string | undefined;

        /**
         * The system name of the port.
         */
        name?: string | undefined;

        /**
         * A descriptor property to distinguish whether the port is an input or an output
         * port.
         */
        type: MIDIPortType;

        /**
         * The version of the port.
         */
        version?: string | undefined;

        /**
         * The state of the device.
         */
        state: MIDIPortDeviceState;

        /**
         * The state of the connection to the device.
         */
        connection: MIDIPortConnectionState;

        /**
         * The handler called when an existing port changes its state or connection
         * attributes.
         */
        onstatechange(e: MIDIConnectionEvent): void;

        addEventListener(
            type: "statechange",
            listener: (this: this, e: MIDIConnectionEvent) => any,
            options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions,
        ): void;

        /**
         * Makes the MIDI device corresponding to the MIDIPort explicitly available. Note
         * that this call is NOT required in order to use the MIDIPort - calling send() on
         * a MIDIOutput or attaching a MIDIMessageEvent handler on a MIDIInputPort will
         * cause an implicit open().
         *
         * When invoked, this method returns a Promise object representing a request for
         * access to the given MIDI port on the user's system.
         */
        open(): Promise<MIDIPort>;

        /**
         * Makes the MIDI device corresponding to the MIDIPort
         * explicitly unavailable (subsequently changing the state from "open" to
         * "connected"). Note that successful invocation of this method will result in MIDI
         * messages no longer being delivered to MIDIMessageEvent handlers on a
         * MIDIInputPort (although setting a new handler will cause an implicit open()).
         *
         * When invoked, this method returns a Promise object representing a request for
         * access to the given MIDI port on the user's system. When the port has been
         * closed (and therefore, in exclusive access systems, the port is available to
         * other applications), the vended Promise is resolved. If the port is
         * disconnected, the Promise is rejected.
         */
        close(): Promise<MIDIPort>;
    }

    interface MIDIInput extends MIDIPort {
        type: "input";
        onmidimessage(e: MIDIMessageEvent): void;

        addEventListener(
            type: "midimessage",
            listener: (this: this, e: MIDIMessageEvent) => any,
            options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
            type: "statechange",
            listener: (this: this, e: MIDIConnectionEvent) => any,
            options?: boolean | AddEventListenerOptions,
        ): void;
        addEventListener(
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions,
        ): void;
    }

    interface MIDIOutput extends MIDIPort {
        type: "output";

        /**
         * Enqueues the message to be sent to the corresponding MIDI port.
         * @param data The data to be enqueued, with each sequence entry representing a single byte of data.
         * @param timestamp The time at which to begin sending the data to the port. If timestamp is set
         * to zero (or another time in the past), the data is to be sent as soon as
         * possible.
         */
        send(data: number[] | Uint8Array, timestamp?: number): void;

        /**
         * Clears any pending send data that has not yet been sent from the MIDIOutput 's
         * queue. The implementation will need to ensure the MIDI stream is left in a good
         * state, so if the output port is in the middle of a sysex message, a sysex
         * termination byte (0xf7) should be sent.
         */
        clear(): void;
    }

    interface MIDIMessageEvent extends Event {
        /**
         * A timestamp specifying when the event occurred.
         */
        receivedTime: number;

        /**
         * A Uint8Array containing the MIDI data bytes of a single MIDI message.
         */
        data: Uint8Array;
    }

    interface MIDIMessageEventInit extends EventInit {
        /**
         * A timestamp specifying when the event occurred.
         */
        receivedTime: number;

        /**
         * A Uint8Array containing the MIDI data bytes of a single MIDI message.
         */
        data: Uint8Array;
    }

    interface MIDIConnectionEvent extends Event {
        /**
         * The port that has been connected or disconnected.
         */
        port: MIDIPort;
    }

    interface MIDIConnectionEventInit extends EventInit {
        /**
         * The port that has been connected or disconnected.
         */
        port: MIDIPort;
    }
}
