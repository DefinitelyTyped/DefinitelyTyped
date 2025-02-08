declare function HIDDebug(message: any): void;

type bytes =
    | number[]
    | ArrayBuffer
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array;

/**
 * creates a `DataView` from any ArrayBuffer, TypedArray
 * or plain Array (clamped to 8-bit width).
 * @param {number[] | ArrayBuffer | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array } bufferLike Object that can be represented as a sequence of bytes
 * @returns {DataView} dataview over the bufferLike object
 */
declare function createDataView(bufferLike: bytes): DataView;
/**
 * HID Bit Vector Class
 *
 * Collection of bits in one parsed packet field. These objects are
 * created by HIDPacket addControl and addOutput and should not be
 * created manually.
 */
declare class HIDBitVector {
    /**
     * Number of bitObjects in bits array
     */
    size: number;
    /**
     * Object of bitObjects, referred by a string of group and control name separated by a dot
     */
    bits: {
        [x: string]: bitObject;
    };
    /**
     * Get the index of the least significant bit that is 1 in `bitmask`
     * @param {number} bitmask A bitwise mask of up to 32 bit. All bits set to'1' in this mask are
     *     considered.
     * @returns {number} Index of the least significant bit that is 1 in `bitmask`
     */
    getOffset(bitmask: number): number;
    /**
     * Add a control bitmask to the HIDBitVector
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name e.g. "play"
     * @param {number} bitmask A bitwise mask of up to 32 bit. All bits set to'1' in this mask are
     *     considered.
     */
    addBitMask(group: string, name: string, bitmask: number): void;
    /**
     * Add an output control bitmask to the HIDBitVector
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name e.g. "play"
     * @param {number} bitmask A bitwise mask of up to 32 bit. All bits set to'1' in this mask are
     *     considered.
     */
    addOutputMask(group: string, name: string, bitmask: number): void;
}
/**
 * HID Modifiers object
 *
 * e.g. a shift button can be defined as modifier for the behavior of other controls.
 *
 * Wraps all defined modifiers to one object with uniform API.
 * Don't call directly, this is available as HIDController.modifiers
 */
declare class HIDModifierList {
    /**
     * Actual value of the modifier
     */
    modifiers: {
        [x: string]: boolean;
    };
    /**
     * Function to be called after modifier value changes
     */
    callbacks: {
        [x: string]: modifierCallback;
    };
    /**
     * Add a new modifier to controller.
     * @param {string} name Name of modifier
     */
    add(name: string): void;
    /**
     * Set modifier value
     * @param {string} name Name of modifier
     * @param {boolean} value Value to be set
     */
    set(name: string, value: boolean): void;
    /**
     * Get modifier value
     * @param {string} name Name of modifier
     * @returns {boolean} Value of modifier
     */
    get(name: string): boolean;
    /**
     * Set modifier callback function
     * @param {string} name Name of reference in HIDModifierList
     * @param {modifierCallback} callback Function to be called after modifier value changes
     */
    setCallback(name: string, callback: modifierCallback): void;
}
/**
 * HID Packet object
 *
 * An HIDPacket represents one HID report of type InputReport or OutputReport (FeatureReports are
 * currently not supported)
 *
 * Each HIDPacket must be registered to HIDController.
 */
declare class HIDPacket {
    /**
     * @param {string} name Name of packet (it makes sense to refer the HID report type and HID
     * ReportID here e.g. 'InputReport_0x02' or 'OutputReport_0x81')
     * @param {number} reportId ReportID of the packet. If the device does not use ReportIDs this
     * must be 0. [default = 0]
     * @param {packetCallback} callback function to call when the packet type represents an InputReport,
     * and a new report is received. If packet callback is set, the packet is not parsed by delta
     * functions. Note, that a callback is not meaningful for output packets.
     * @param {number[]} header (optional) List of bytes to match from beginning of packet.
     * Do NOT put the report ID in this - use the reportId parameter instead.
     */
    constructor(name: string, reportId?: number, callback?: packetCallback, header?: number[]);
    /**
     * Name of packet
     */
    name: string;
    /**
     * ReportID of the packet. If the device does not use ReportIDs this must be 0.
     */
    reportId: number;
    /**
     * Function to call when the packet type represents an InputReport, and a new report is received.
     */
    callback: packetCallback;
    /**
     * List of bytes to match from beginning of packet
     */
    header: number[];
    /**
     * Object of groups, referred by the group string
     */
    groups: {
        [x: string]: {
            [x: string]: any;
        };
    };
    /**
     * Length of packet in bytes
     */
    length: number;
    /**
     * Size of the 'pack' types in bytes
     */
    packSizes: {
        [x: string]: number;
    };
    signedPackFormats: string[];
    /**
     * Pack a field value to the packet.
     * Can only pack bits and byte values, patches welcome.
     * @todo Implement multi byte bit vector outputs
     * @param {Uint8Array} data Data to be send as OutputReport to the device
     * @param {packetField} field Object that describes a field inside of a packet, which can often
     *     mapped to a Mixxx control.
     */
    pack(data: Uint8Array, field: packetField): void;
    /**
     * Parse and return field value matching the 'pack' field from field attributes.
     * Valid field packing types are:
     * - b       signed byte
     * - B       unsigned byte
     * - h       signed short
     * - H       unsigned short
     * - i       signed integer
     * - I       unsigned integer
     * @param {number[] | ArrayBuffer | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array} data Data received as InputReport from the device
     * @param {packetField} field Object that describes a field inside of a packet, which can often
     *     mapped to a Mixxx control.
     * @returns {number} Value for the field in data, represented according the fields packing type
     */
    unpack(
        data:
            | number[]
            | ArrayBuffer
            | Int8Array
            | Uint8Array
            | Uint8ClampedArray
            | Int16Array
            | Uint16Array
            | Int32Array
            | Uint32Array,
        field: packetField,
    ): number;
    /**
     * Find HID packet group matching name.
     * Create group if create is true
     * @param {string} name Name of the group
     * @param {boolean} [create] If true, group will be created
       @returns {any} Group Returns group or undefined, when group is not existing and create is set
         to false
     */
    getGroup(name: string, create?: boolean): any;
    /**
     * Lookup HID packet field matching given offset and pack type
     * @param {number} offset The field's offset from the start of the packet in bytes:
     *                        - For HID devices which don't use ReportIDs, the data bytes starts at
     * position 0
     *                        - For HID devices which use ReportIDs to enumerate the reports, the
     * data bytes starts at position 1
     * @param {string} pack Is one of the field packing types:
     *              - b       signed byte       (Int8)
     *              - B       unsigned byte     (Uint8)
     *              - h       signed short      (Int16  Little-Endian)
     *              - H       unsigned short    (Uint16 Little-Endian)
     *              - i       signed integer    (Int32  Little-Endian)
     *              - I       unsigned integer  (Uint32 Little-Endian)
     * @returns {packetField} Returns matching field or undefined if no matching field can be found.
     */
    getFieldByOffset(offset: number, pack: string): packetField;
    /**
     * Return a field by group and name from the packet,
     * Returns undefined if field could not be found
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name e.g. "play"
     * @returns {packetField} Field
     */
    getField(group: string, name: string): packetField;
    /**
     * Return reference to a bit in a bitvector field
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name e.g. "play"
     * @returns {bitObject} Reference to a bit in a bitvector field
     */
    lookupBit(group: string, name: string): bitObject;
    /**
     * Remove a control registered. Normally not needed
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name e.g. "play"
     */
    removeControl(group: string, name: string): void;
    /**
     * Register a numeric value to parse from input packet
     *
     * 'group' and 'name' form the ID of the field, if it matches a valid Mixxx control name,
     * the system attempts to attach it directly to the correct field.
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name e.g. "play"
     * @param {number} offset The field's offset from the start of the packet in bytes:
     *                        - For HID devices which don't use ReportIDs, the data bytes starts at
     * position 0
     *                        - For HID devices which use ReportIDs to enumerate the reports, the
     * data bytes starts at position 1
     * @param {string} pack Is one of the field packing types:
     *              - b       signed byte       (Int8)
     *              - B       unsigned byte     (Uint8)
     *              - h       signed short      (Int16  Little-Endian)
     *              - H       unsigned short    (Uint16 Little-Endian)
     *              - i       signed integer    (Int32  Little-Endian)
     *              - I       unsigned integer  (Uint32 Little-Endian)
     * @param {number} [bitmask]  A bitwise mask of up to 32 bit. All bits set to'1' in this mask are
     *     considered.
     *           Note: For controls that use full bytes (8bit, 16bit, ...), you can set this to
     * undefined NOTE: Parsing bitmask with multiple bits is not supported yet.
     * @param {boolean} [isEncoder] indicates if this is an encoder which should be wrapped and delta
     *     reported
     * @param {fieldChangeCallback} [callback] Callback function for the control
     */
    addControl(
        group: string,
        name: string,
        offset: number,
        pack: string,
        bitmask?: number,
        isEncoder?: boolean,
        callback?: fieldChangeCallback,
    ): void;
    /**
     * Register a Output control field or Output control bit to output packet
     * Output control field:
     * Output field with no bitmask, controls Output with multiple values
     * Output control bit:
     * Output with with bitmask, controls Output with a single bit
     *
     * It is recommended to define callbacks after packet creation with
     * setCallback instead of adding it directly here. But you can do it.
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name "vu_meter"
     * @param {number} offset The field's offset from the start of the packet in bytes:
     *                        - For HID devices which don't use ReportIDs, the data bytes starts at
     * position 0
     *                        - For HID devices which use ReportIDs to enumerate the reports, the
     * data bytes starts at position 1
     * @param {string} pack Is one of the field packing types:
     *              - b       signed byte       (Int8)
     *              - B       unsigned byte     (Uint8)
     *              - h       signed short      (Int16  Little-Endian)
     *              - H       unsigned short    (Uint16 Little-Endian)
     *              - i       signed integer    (Int32  Little-Endian)
     *              - I       unsigned integer  (Uint32 Little-Endian)
     * @param {number} [bitmask] A bitwise mask of up to 32 bit. All bits set to'1' in this mask are
     *     considered.
     * @param {fieldChangeCallback} [callback] Callback function for the control
     */
    addOutput(
        group: string,
        name: string,
        offset: number,
        pack: string,
        bitmask?: number,
        callback?: fieldChangeCallback,
    ): void;
    /**
     * Register a callback to field or a bit vector bit.
     * Does not make sense for Output fields but you can do that.
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name e.g. "play"
     * @param {fieldChangeCallback} callback Callback function for the control
     */
    setCallback(group: string, name: string, callback: fieldChangeCallback): void;
    /**
     * This function can be set in script code to ignore a field you don't want to be processed but
     * still wanted to define, to make packet format complete from specifications. If field is
     * ignored, it is not reported in 'delta' objects.
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name "pregain"
     * @param {boolean} ignored 'ignored' flag for field to given value (true or false)
     */
    setIgnored(group: string, name: string, ignored: boolean): void;
    /**
     * Adjust field's minimum delta value.
     * Input value changes smaller than this are not reported in delta
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name "pregain"
     * @param {number} mindelta Minimum delta value.
     */
    setMinDelta(group: string, name: string, mindelta: number): void;
    /**
     * Parse bitvector field values, returning object with the named bits set.
     * @param {packetField} field Object that describes a field inside of a packet, which can often
     *     mapped to a Mixxx control.
     * @param {number} value Value must be a valid unsigned byte to parse, with enough bits.
     * @returns {Object.<string, bitObject>} List of modified bits (delta),
     *                                       referred by a string of group and control name separated by a dot
     */
    parseBitVector(field: packetField, value: number): {
        [x: string]: bitObject;
    };
    /**
     * Parse input packet fields from data.
     * Data is expected to be a Packet() received from HID device.
     * BitVectors are returned as bits you can iterate separately.
     * @param {number[] | ArrayBuffer | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array} data Data received as InputReport from the device
     * @returns {Object.<string, packetField | bitObject>} List of changed fields with new value.
     */
    parse(
        data:
            | number[]
            | ArrayBuffer
            | Int8Array
            | Uint8Array
            | Uint8ClampedArray
            | Int16Array
            | Uint16Array
            | Int32Array
            | Uint32Array,
    ): {
        [x: string]: bitObject | packetField;
    };
    /**
     * Send this HID packet to device.
     * First the header bytes are copied to beginning of packet, then
     * field object values are packed to the HID packet according to the
     * field type.
     * @param {boolean} [debug] Enables debug output to console
     */
    send(debug?: boolean): void;
}
/**
 * HID Controller Class with packet parser
 */
declare class HIDController {
    /**
     * Fast loop implementation over object
     *
     * Don't use 'continue' and 'break' don't work as in normal loops,
     * because body is a function
     * 'return' statements in the body function behaves as 'continue' in normal loops
     * @param {Object.<string, any>} object
     * @param {function (string):void } body
     */
    static fastForIn(object: {
        [x: string]: any;
    }, body: (arg0: string) => void): void;
    /**
     * - By default 'false'
     * - Should be set 'true', when controller is found and everything is OK
     */
    initialized: boolean;
    /** */
    activeDeck: number;
    /**
     * HIDPackets representing HID InputReports, by packet name
     */
    InputPackets: {
        [x: string]: HIDPacket;
    };
    /**
     * HIDPackets representing HID OutputReports, by packet name
     */
    OutputPackets: {
        [x: string]: HIDPacket;
    };
    /**
     * A map to determine the output Bit or bytewise field by group and name,
     * across all OutputPackets
     */
    OutputFieldLookup: Map<string, bitObject | packetField>;
    /**
     * Default input packet name: can be modified for controllers
     * which can swap modes (wiimote for example)
     */
    defaultPacket: string;
    disconnectDeck: any;
    connectDeck: any;
    /**
     * Set to true, when button 'jog_touch' is active
     */
    isScratchEnabled: boolean;
    /**
     * The resolution of the jogwheel HID control (in intervals per revolution)
     * - Default is 128
     */
    scratchintervalsPerRev: number;
    /**
     * The speed of the imaginary record at 0% pitch - in revolutions per minute (RPM)
     * - Default 33+1/3 - adjust for comfort
     */
    scratchRPM: number;
    /**
     * The alpha coefficient of the filter
     * - Default is 1/8 (0.125) - start tune from there
     */
    scratchAlpha: number;
    /**
     * The beta coefficient of the filter
     * - Default is scratchAlpha/32 - start tune from there
     */
    scratchBeta: number;
    /**
     * - Set 'true' to ramp the deck speed down.
     * - Set 'false' to stop instantly (default)
     */
    scratchRampOnEnable: boolean;
    /**
     * - Set 'true' to ramp the deck speed up.
     * - Set 'false' to jump to normal play speed instantly (default)
     */
    scratchRampOnDisable: boolean;
    /**
     * Callback function to call when, jog wheel scratching got enabled or disabled
     */
    enableScratchCallback: scratchingCallback;
    /**
     * List of valid state values for buttons, should contain fields:
     * - 'released' (default 0)
     * - 'pressed' (default 1)
     */
    buttonStates: {
        released: number;
        pressed: number;
    };
    /**
     * List of named output colors to send
     * - must contain 'off' value
     */
    LEDColors: {
        off: number;
        on: number;
    };
    /**
     * List of button names you wish to act as 'toggle'
     *
     * i.e. pressing the button and releasing toggles state of the control and doesn't set it off again when released.
     */
    toggleButtons: string[];
    /**
     * List of colors to use for each deck
     * - Default is 'on' for first four decks.
     *
     * Override to set specific colors for multicolor button output per deck:
     * - Values are like {1: 'red', 2: 'green' } and must reference valid OutputColors fields.
     */
    deckOutputColors: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    /**
     * Used to map the virtual deck names 'deck', 'deck1' or 'deck2' to actual [ChannelX]
     */
    virtualDecks: string[];
    /**
     * Mapping of automatic deck switching with switchDeck function
     */
    deckSwitchMap: {
        1: number;
        2: number;
        3: number;
        4: number;
        undefined: number;
    };
    /**
     * Set to value in ms to update Outputs periodically
     * - By default undefined.
     * - If set, it's a value for timer executed every n ms to update Outputs with updateOutputs()
     * @deprecated This is unused and updateOutputs() doesn't exist - Remove?
     */
    OutputUpdateInterval: number;
    /**
     * Reference to HIDModifierList object
     */
    modifiers: HIDModifierList;
    /**
     * Object of scaling function callbacks by name
     */
    scalers: {
        [x: string]: scalingCallback;
    };
    /**
     * Object of engine timer IDs of running auto repeat timers
     * Key is a user specified timer_id.
     * Used only in the controller.startAutoRepeatTimer code stubs of Sony-SixxAxis.js and Nintendo-Wiimote.js.
     */
    timers: {
        [x: number]: number;
    };
    /**
     * Auto repeat interval default for fields, where not specified individual (in milliseconds)
     * @default 100
     */
    auto_repeat_interval: number;
    /**
     * @deprecated Use {@link postProcessDelta} instead
     * (not used in any official mapping)
     */
    processDelta: packetCallback;
    /**
     * Callback that is executed after parsing incoming packet
     * (see Traktor-Kontrol-F1-scripts.js for an example)
     */
    postProcessDelta: packetCallback;
    /** Function to close the controller object cleanly */
    close(): void;
    /**
     * Return deck number from deck name. Deck name can't be virtual deck name
     * in this function call.
     * @param {string} group Control group name e.g. "[Channel1]"
     * @returns {number} Number of deck
     */
    resolveDeck(group: string): number;
    /**
     * Return the group name from given deck number.
     * @param {number} deck Number of deck
     * @returns {string} Group name of the deck (e.g. Channel2 for deck number 2)
     */
    resolveDeckGroup(deck: number): string;
    /**
     * Map virtual deck names ("deck, "deck1", "deck2") to real deck group. If group is already a
     * real mixxx group value, just return it as it without mapping.
     * @param {string} group Control group name e.g. "[Channel1]" or "deck" or "deck1".
     * @returns {string} Channel
     */
    resolveGroup(group: string): string;
    /**
     * Find Output control matching give group and name
     * @param {string} m_group Mapped group, must be a valid Mixxx control group name e.g. "[Channel1]"
     * @param {string} m_name Name of mapped control, must be a valid Mixxx control name "vu_meter"
     * @returns {bitObject|packetField} Bit or bytewise field - Returns undefined if output field
     *     can't be found.
     */
    getOutputField(m_group: string, m_name: string): bitObject | packetField;
    /**
     * Find input packet matching given name.
     * Returns undefined if input packet name is not registered.
     * @param {string} name Name of packet (it makes sense to refer the HID report type and HID
     *     Report-ID here e.g. 'InputReport_0x02')
     * @returns {HIDPacket} The input packet
     */
    getInputPacket(name: string): HIDPacket;
    /**
     * Find output packet matching given name
     * Returns undefined if output packet name is not registered.
     * @param {string} name Name of packet (it makes sense to refer the HID report type and HID
     *     Report-ID here e.g. 'OutputReport_0x81')
     * @returns {HIDPacket} The output packet
     */
    getOutputPacket(name: string): HIDPacket;
    /**
     * Set input packet callback afterwards
     * @param {string} packet The name of the input packet e.g. 'InputReport_0x02'
     * @param {packetCallback} callback Callback function for the control
     */
    setPacketCallback(packet: string, callback: packetCallback): void;
    /**
     * Register packet field's callback.
     * If packet has callback, it is still parsed but no field processing is done,
     * callback is called directly after unpacking fields from packet.
     * @param {string} packet The name of the input packet e.g. 'InputReport_0x02'
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name "pregain"
     * @param {fieldChangeCallback} callback Callback function for the control
     */
    setCallback(packet: string, group: string, name: string, callback: fieldChangeCallback): void;
    /**
     * Register scaling function for a control name
     * This does not check if given control name is valid
     * @param {string} name Reference of the scaling function in scalers list of HIDController
     * @param {scalingCallback} callback Scaling function
     */
    setScaler(name: string, callback: scalingCallback): void;
    /**
     * Lookup scaling function for control
     * @param {string} name Reference of the scaling function in scalers list of HIDController
     * @param {any} _callback Unused
     * @returns {scalingCallback} Scaling function. Returns undefined if function is not
     *     registered.
     */
    getScaler(name: string, _callback?: any): scalingCallback;
    /**
     * Change type of a previously defined field to modifier and register it
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name
     * @param {string} modifier Name of the modifier e.g. 'shiftbutton'
     */
    linkModifier(group: string, name: string, modifier: string): void;
    /**
     * @todo Implement unlinking of modifiers
     * @param {string} _group Unused
     * @param {string} _name Unused
     * @param {string} _modifier Unused
     */
    unlinkModifier(_group: string, _name: string, _modifier: string): void;
    /**
     * Link a previously declared HID control to actual mixxx control
     * @param {string} group Control group name
     * @param {string} name Control name
     * @param {string} m_group Mapped group, must be a valid Mixxx control group name e.g. "[Channel1]"
     * @param {string} m_name Name of mapped control, must be a valid Mixxx control name "pregain"
     * @param {fieldChangeCallback} callback Callback function for the control
     */
    linkControl(group: string, name: string, m_group: string, m_name: string, callback: fieldChangeCallback): void;
    /**
     * @todo Implement unlinking of controls
     * @param {string} _group Mixxx control group name e.g. "[Channel1]"
     * @param {string} _name  Mixxx control name "pregain"
     */
    unlinkControl(_group: string, _name: string): void;
    /**
     * Register HID input packet type to controller.
     * Input packets can be responses from device to queries, or control
     * data details. The default control data packet must be named in
     * variable this.defaultPacket to allow automatic processing.
     * @param {HIDPacket} packet The input packet to register
     */
    registerInputPacket(packet: HIDPacket): void;
    /**
     * Register HID output packet type to controller
     * There are no special Output control output packets, just register Outputs to any
     * valid packet and we detect them here.
     * This module only supports sending bitvector values and byte fields to device.
     * If you need other data structures, patches are welcome, or you can just do it
     * manually in your script without registering the packet.
     * @param {HIDPacket} packet The output packet to register
     */
    registerOutputPacket(packet: HIDPacket): void;
    /**
     * Parse a packet representing an HID InputReport, and processes each field with "unpack":
     * - Calls packet callback and returns, if packet callback was defined
     * - Calls processIncomingPacket and processes automated events there.
     * - If defined, calls postProcessDelta for results after processing automated fields
     * @param {number[] | ArrayBuffer | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array} data The data received from an HID InputReport.
     *                        In case of HID devices, which use ReportIDs to enumerate the reports,
     * the ReportID is stored in the first byte and the data start at the second byte
     * @param {number} [length] Length of the data array in bytes
     */
    parsePacket(
        data:
            | number[]
            | ArrayBuffer
            | Int8Array
            | Uint8Array
            | Uint8ClampedArray
            | Int16Array
            | Uint16Array
            | Int32Array
            | Uint32Array,
        length?: number,
    ): void;
    /**
     * Process the modified field values (delta) from input packet fields for
     * input control packet, if packet name is in this.defaultPacket.
     *
     * Button (Boolean value) field processing:
     * - Sets modifiers from buttons
     * - Calls button callbacks, if defined
     * - Finally tries to run matching engine.setValue() function for buttons
     * in default mixxx groups, honoring toggleButtons and other button
     * details. Not done if a callback was defined for button.
     *
     * Control (Numeric value) field processing
     * - Calls scaling functions for control fields, if defined for field.
     * Scaling function for encoders (isEncoder attribute is true) scales
     * field delta instead of raw value.
     * - Calls callback functions for control fields, if defined for field
     * - Finally tries run matching engine.setValue() function for control
     * fields in default mixxx groups. Not done if a callback was defined.
     * @param {any} packet Unused
     * @param {Object.<string, packetField | bitObject>} delta
     */
    processIncomingPacket(packet: any, delta: {
        [x: string]: bitObject | packetField;
    }): void;
    /**
     * Get active group for this field
     * @param {packetField|bitObject} field Object that describes a field inside of a packet, which can often
     *     mapped to a Mixxx control.
     * @returns {string} Group
     */
    getActiveFieldGroup(field: packetField | bitObject): string;
    /**
     * Get active control name from field
     * @param {packetField|bitObject} field Object that describes a field inside of a packet, which can often
     *     mapped to a Mixxx control.
     * @returns {string} Name of field
     */
    getActiveFieldControl(field: packetField | bitObject): string;
    /**
     * Process given button field, triggering events
     * @param {bitObject} field Object that describes a field inside of a packet, which can often
     *     mapped to a Mixxx control.
     */
    processButton(field: bitObject): void;
    /**
     * Process given control field, triggering events
     * @param {packetField} field Object that describes a field inside of a packet, which can often
     *     mapped to a Mixxx control.
     */
    processControl(field: packetField): void;
    /**
     * Toggle control state from toggle button
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} control Name of the control (button)
     * @param {number} value Value defined in this.buttonStates
     */
    toggle(group: string, control: string, value: number): void;
    /**
     * Toggle play/pause state
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {packetField} field Object that describes a field inside of a packet, which can often
     *     mapped to a Mixxx control.
     */
    togglePlay(group: string, field: packetField): void;
    /**
     * Processing of the 'jog_touch' special button name, which is used to detect
     * when scratching should be enabled.
     * Deck is resolved from group with 'resolveDeck'
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {boolean} status Enable or Disable scratching:
     * - true enables scratching (press 'jog_touch' button)
     * Sets the internal 'isScratchEnabled' attribute to true, and calls scratchEnable
     * with the scratch attributes (see class definition)
     *
     * - false disables scratching (release 'jog_touch' button)
     * Sets the internal 'isScratchEnabled attribute to false, and calls scratchDisable
     * to end scratching mode
     */
    enableScratch(group: string, status: boolean): void;
    /**
     * Default jog scratching function. Used to handle jog move events from special
     * input control field called 'jog_wheel'. Handles both 'scratch' and 'jog' mixxx
     * functions, depending on isScratchEnabled value above (see enableScratch())
     *
     * Since most controllers require value scaling for jog and scratch functions,
     * you are warned if following scaling function names are not registered:
     *
     * jog
     * Scaling function from 'jog_wheel' for rate bend events with mixxx 'jog'
     * function. Should return value range suitable for 'jog', whatever you
     * wish it to do.
     * jog_scratch
     * Scaling function from 'jog_wheel' for scratch movements with mixxx
     * 'scratchTick' function. Should return -1,0,1 or small ranges of integers
     * both negative and positive values.
     * @param {packetField} field Object that describes a field inside of a packet, which can often
     *     mapped to a Mixxx control.
     */
    jog_wheel(field: packetField): void;
    /**
     * Stops the specified auto repeat timer
     * @param {string} timer_id Reference of the timer to stop
     */
    stopAutoRepeatTimer(timer_id: string): void;
    /**
     * Toggle field autorepeat on or off
     * @param {string} group
     * @param {string} name
     * @param {fieldChangeCallback} callback Callback function for the control
     * @param {number} interval
     */
    setAutoRepeat(group: string, name: string, callback: fieldChangeCallback, interval: number): void;
    /**
     * Callback for auto repeat timer to send again the values for
     * buttons and controls marked as 'auto_repeat'
     * Timer must be defined from actual controller side, because of
     * callback call namespaces and 'this' reference
     */
    autorepeatTimer(): void;
    /**
     * Toggle active deck and update virtual output field control mappings
     * @param {number} deck Number of deck
     */
    switchDeck(deck: number): void;
    /**
     * Link a virtual HID Output to mixxx control
     * @param {string} group Control group name
     * @param {string} name  Control name
     * @param {string} m_group Mapped group, must be a valid Mixxx control group name e.g. "[Channel1]"
     * @param {string} m_name Name of mapped control, must be a valid Mixxx control name "vu_meter"
     * @param {controlCallback} callback Callback function for the control
     */
    linkOutput(group: string, name: string, m_group: string, m_name: string, callback: controlCallback): void;
    /**
     * Unlink a virtual HID Output from mixxx control
     * @param {string} group Mixxx control group name e.g. "[Channel1]"
     * @param {string} name Mixxx control name "vu_meter"
     * @param {controlCallback} callback Callback function for the control
     */
    unlinkOutput(group: string, name: string, callback: controlCallback): void;
    /**
     * Set output state to given value
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name "cue_indicator"
     * @param {number|boolean} value Value to set as new output state of the control
     * @param {boolean} [send_packet] If true, the packet (an HID OutputReport) is send
     *     immediately
     */
    setOutput(group: string, name: string, value: number | boolean, send_packet?: boolean): void;
    /**
     * Set Output to toggle between two values. Reset with setOutput(name,'off')
     * @param {string} group Control group name e.g. "[Channel1]"
     * @param {string} name Control name "cue_indicator"
     * @param toggle_value
     */
    setOutputToggle(group: string, name: string, toggle_value: any): void;
}
interface packetDelta {
    [x: string]: bitObject | packetField;
}
/**
 * Callback function to call when, the packet represents an HID InputReport, and new data for this
 * InputReport are received. If a packet callback is defined and the data for the InputReport are
 * received, the complete report data are sent to the callback function after field values are
 * parsed, without calling any packet field parsing functions.
 */
type packetCallback = (packet: HIDPacket, changed_data: packetDelta) => any;
/**
 * Callback function to call when, the value of a modifier control changed
 */
type modifierCallback = (Value: boolean) => any;
/**
 * Callback function to call when, data for specified filed in the packet is updated.
 */
type fieldChangeCallback = (Object: packetField | bitObject) => any;
/**
 * Callback function, which will be called every time, the value of the connected control changes.
 */
type controlCallback = (value: number, group: string, name: string) => any;
/**
 * In almost every case, a HID controller sends data values with input fields which are not directly
 * suitable for Mixxx control values. To solve this issue, HIDController contains function to scale
 * the input value to suitable range automatically before calling any field processing functions.
 * Scalers can be registered with HIDController.setScaler.
 *
 * The ScallingCallback function can also have a boolean property .useSetParameter, if:
 * - 'false' or 'undefined', engine.setValue is used
 * - 'true' engine.setParameter is used
 */
type scalingCallback = (group: string, name: string, value: number) => number;
/**
 * Callback function to call when, jog wheel scratching got enabled or disabled by
 * the button with the special name 'jog_touch'
 */
type scratchingCallback = (isScratchEnabled: boolean) => any;
interface packetField {
    packet: HIDPacket;
    /**
     * Group and control name separated by a dot
     */
    id: string;
    group: string;
    name: string;
    /**
     * Mapped group, must be a valid Mixxx control group name e.g. "[Channel1]"
     */
    mapped_group: string;
    /**
     * Name of mapped control, must be a valid Mixxx control name "vu_meter"
     */
    mapped_name: string;
    mapped_callback: controlCallback;
    /**
     * Control packing format for unpack(), one of b/B, h/H, i/I
     */
    pack: string;
    /**
     * Position of the first byte in the packet in bytes (first byte is 0)
     */
    offset: number;
    /**
     * Position of the last byte in the packet in bytes ({@link packetField.offset} + packet size)
     */
    end_offset: number;
    bitmask: number;
    isEncoder: boolean;
    callback: fieldChangeCallback;
    soft_takeover: boolean;
    ignored: boolean;
    auto_repeat: fieldChangeCallback;
    auto_repeat_interval: number;
    min: number;
    max: number;
    /**
     * Must be either:
     * - 'bitvector'       If value is of type HIDBitVector
     * - 'control'         If value is a number
     * - 'output'
     */
    type: "bitvector" | "control" | "output";
    value: HIDBitVector | boolean | number;
    delta: number;
    mindelta: number;
    toggle: number;
}
interface bitObject {
    packet: HIDPacket;
    /**
     * Group and control name separated by a dot
     */
    id: string;
    group: string;
    name: string;
    /**
     * Mapped group, must be a valid Mixxx control group name e.g. "[Channel1]"
     */
    mapped_group: string;
    /**
     * Name of mapped control, must be a valid Mixxx control name "cue_indicator"
     */
    mapped_name: string;
    mapped_callback: controlCallback;
    bitmask: number;
    bit_offset: number;
    callback: fieldChangeCallback;
    auto_repeat: fieldChangeCallback;
    auto_repeat_interval: number;
    /**
     * Must be either:
     * - 'button'
     * - 'output'
     */
    type: "button" | "output";
    value: number;
    toggle: number;
}
