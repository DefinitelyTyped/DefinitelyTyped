/// <reference types="node" />

import { EventEmitter } from "events";
import { PNG } from "pngjs";

declare namespace ATEM {
    /** 0-indexed, so ME1 = 0, ..., ME4 = 3 */
    type MixEffect = 0 | 1 | 2 | 3;

    /**
     * - 0: Black
     * - 1-40: Physical SDI/HDMI inputs
     * - 1000: Color Bars (test pattern)
     * - 2001: Color 1
     * - 2002: Color 2
     * - 3010: Media Player 1
     * - 3011: Media Player 1 Key
     * - 3020: Media Player 2
     * - 3021: Media Player 2 Key
     * - 4010: Key 1 Mask
     * - 4020: Key 2 Mask
     * - 4030: Key 3 Mask
     * - 4040: Key 4 Mask
     * - 5010: DSK 1 Mask
     * - 5020: DSK 2 Mask
     * - 6000: Supersource
     * - 7001: Clean Feed 1
     * - 7002: Clean Feed 2
     * - 8001-8006: Aux 1-6
     * - 11001: Camera 1 direct
     * - 10010: ME1 Program
     * - 10011: ME1 Preview
     * - 10020: ME2 Program
     * - 10021: ME2 Preview
     * - 10030: ME3 Program
     * - 10031: ME3 Preview
     * - 10040: ME4 Program
     * - 10041: ME4 Preview
     */
    type VisionChannelNumber = number;

    /**
     * - 1-20: Audio channels 1-20
     * - 1101: AES/EBU
     * - 1201: RCA
     * - 2001: Media Player 1
     * - 2002: Media Player 2
     */
    type AudioChannelNumber = number;

    /**
     * - 1-6: Aux Output 1-6
     */
    type AuxChannelNumber = number;

    interface VisionChannel {
        name: string;
        label: string;
    }

    interface AudioChannel {
        leftLevel: number;
        rightLevel: number;
        /** whether the channel is ON (as opposed to AFV) */
        on: boolean;
        /** whether audio-follows-video is enabled */
        afv: boolean;
        gain: number;
        rawGain: number;
        rawPan: number;
    }

    /** the current state of a Mix Effect */
    interface MixEffectState {
        /** the currently selected transition style */
        transitionStyle: TransitionStyle;
        /** whether the next transition will fade the BKGD */
        upstreamKeyNextBackground: boolean;
        /** the number of USKs */
        numberOfKeyers: number;
        /** whether the next transition will fade the USKs */
        upstreamKeyNextState: {
            [_: number]: boolean;
        };
        /** the current state (active/inactive) of each USK */
        upstreamKeyState: {
            [_: number]: boolean;
        };
        /** whether FTB is currently active */
        fadeToBlack?: boolean;
        /** current position of the T-bar */
        transitionPosition: number;
        /** whether PREV TRANS is active */
        transitionPreview: boolean;
        /** the current input being sent to the preview bus */
        previewInput: VisionChannelNumber;
        /** the current input being sent to the pgram bus */
        programInput: VisionChannelNumber;
        /** the current transition speed, in frames */
        transitionFrameCount: number;
    }

    /** the current state of the vision mixer */
    interface State {
        topology: {
            numberOfMEs: number | null;
            numberOfSources: number | null;
            numberOfColorGenerators: number | null;
            numberOfAUXs: number | null;
            numberOfDownstreamKeys: number | null;
            numberOfStingers: number | null;
            numberOfDVEs: number | null;
            numberOfSuperSources: number | null;
        };
        tallys: {
            [tallyNumber: number]: TallyState;
        };
        channels: {
            [channelNumber: number]: VisionChannel;
        };
        video: {
            ME: {
                [meNumber: number]: MixEffectState;
            };
            downstreamKeyOn: {
                [dskNumber: number]: boolean;
            };
            downstreamKeyTie: {
                [dskNumber: number]: boolean;
            };
            auxs: {
                [channelNumber: number]: AuxChannelNumber;
            };
        };
        audio: {
            /** whether the mixer has a physical 3.5mm jack for monitoring audio */
            hasMonitor: boolean | null;
            numberOfChannels: number | null;
            channels: {
                [channelNumber: number]: AudioChannel;
            };
            master?: AudioChannel;
        };

        /** a number representing the vision mixer model */
        model: number;

        /** a string representing the vision mixer model */
        _pin: string;
    }

    interface Options {
        /** set forceOldStyle if you upgraded this library from from `0.1.x`. state returns extract 1ME stats. */
        forceOldStyle?: boolean;

        /** a random port will be used if not specified */
        localPort?: number;
    }

    class FileUploader {
        constructor(atem: ATEM);
        uploadFromPNGFile(path: string): void;
        uploadFromPNGBuffer(pngBuffer: Buffer, bankIndex?: number, frameIndex?: number): PNG;
        convertPNGToYUV422(width: number, height: number, data: number[]): Buffer;
    }

    enum Model {
        TVS = 0x01,
        "1ME" = 0x02,
        "2ME" = 0x03,
        PS4K = 0x04,
        "1ME4K" = 0x05,
        "2ME4K" = 0x06,
        "2MEBS4K" = 0x07,
    }

    enum TransitionStyle {
        MIX = 0x00,
        DIP = 0x01,
        WIPE = 0x02,
        DVE = 0x03,
        STING = 0x04,
    }

    enum TallyState {
        None = 0x00,
        Program = 0x01,
        Preview = 0x02,
        // TODO: 3 is also a valid option
    }

    enum ConnectionState {
        None = 0x00,
        SynSent = 0x01,
        Established = 0x02,
        Closed = 0x03,
    }

    enum PacketFlag {
        Sync = 0x01,
        Connect = 0x02,
        Repeat = 0x04,
        Error = 0x08,
        Ack = 0x16,
    }
}

declare class ATEM {
    constructor(options?: ATEM.Options);

    /**
     * @param address - the IP address or hostname
     * @param port - optional: the port, if a custom one is used. Defaults to 9910
     * @param localPort - optional: a custom local port
     */
    connect(address: string, port?: number, localPort?: number): void;

    /** the current state of the vision mixer */
    state: ATEM.State;

    connectionState: ATEM.ConnectionState;
    localPackedId: number;
    sessionId: number[];
    remotePacketId: number[];

    event: EventEmitter;

    //
    // switching
    //

    /** Route the specified input channel to the program bus for that Mix Effect (the LIVE output) */
    changeProgramInput(channel: ATEM.VisionChannelNumber, me?: ATEM.MixEffect): void;

    /** Route the specified input channel to the preview bus for that Mix Effect */
    changePreviewInput(channel: ATEM.VisionChannelNumber, me?: ATEM.MixEffect): void;

    /** Changes the input channel that routes to the specified aux bus */
    changeAuxInput(aux: number, input: ATEM.VisionChannelNumber): void;

    /** equivilant of pressing AUTO on the mixer */
    autoTransition(me?: ATEM.MixEffect): void;

    /** equivilant of pressing CUT on the mixer */
    cutTransition(me?: ATEM.MixEffect): void;

    /** equivilant of pressing FTB on the mixer */
    fadeToBlack(me?: ATEM.MixEffect): void;

    //
    // transitions
    //

    /** equivilant to moving the T-bar on the mixer */
    changeTransitionPosition(position: number, me?: ATEM.MixEffect): void;
    /** equivilant of pressing PREV TRNS on the mixer */
    changeTransitionPreview(me?: ATEM.MixEffect): void;

    changeTransitionType(type: ATEM.TransitionStyle, me?: ATEM.MixEffect): void;

    //
    // USK
    //

    /** equivilant of pressing ON AIR on the mixer (for that USK) */
    changeUpstreamKeyState(uskNum: number, onAir: boolean, me?: ATEM.MixEffect): void;

    /** if true: the next transition will fade the BKGD */
    changeUpstreamKeyNextBackground(nextTransFadesBkgd: boolean, me?: ATEM.MixEffect): void;

    /** if true: the next transition will fade this USK */
    changeUpstreamKeyNextState(uskNum: number, nextTransFadesUSK: boolean, me?: ATEM.MixEffect): void;

    //
    // DSK
    //

    /** equivilant of pressing ON AIR on the mixer (for that DSK) */
    changeDownstreamKeyOn(dskNum: number, onAir: boolean): void;

    /** equivilant of pressing TIE on the mixer */
    changeDownstreamKeyTie(dskNum: number, tie: boolean): void;

    /** fades in the DSK */
    autoDownstreamKey(dskNum: number): void;

    //
    // audio
    //

    changeAudioMasterGain(gain: number): void;
    changeAudioChannelGain(channel: ATEM.AudioChannelNumber, gain: number): void;
    changeAudioChannelState(channel: ATEM.AudioChannelNumber, status: boolean): void;
    sendAudioLevelNumber(enable?: boolean): void;

    //
    // macros
    //

    startRecordMacro(macroId: number, name?: string, description?: string): void;
    stopRecordMacro(): void;
    runMacro(macroId: number): void;
    deleteMacro(macroId: number): void;

    //
    // Media Player
    //

    lockMediaPool(bankIndex: number, frameIndex: number): void;
    unlockMediaPool(bankIndex: number): void;

    /** @deprecated use `ATEM.FileUploader` */
    fileSendNotice(id: [unknown, unknown], bankIndex: number, frameIndex: number, size: number, mode?: number): void;

    /** @deprecated use `ATEM.FileUploader` */
    sendFileData(id: [unknown, unknown], buffer: Buffer): void;

    /** @deprecated use `ATEM.FileUploader` */
    sendFileDescription(id: [unknown, unknown], name: string, hash: Buffer): void;

    //
    // event listeners
    //

    on: {
        /** called when a state packet is received from the ATEM */
        (event: "stateChanged", callback: (error?: Error, state?: ATEM.State) => void): void;

        /** called when a ping packet is received from the ATEM at an interval of one second */
        (event: "ping", callback: () => void): void;

        /** called when the first ping packet is received from the ATEM. */
        (event: "connect", callback: (error: null) => void): void;

        /** called when we detect that we cannot communicate to the ATEM within `RECONNECT_INTERVAL` seconds */
        (event: "disconnect", callback: (error: null, state: null) => void): void;
    };
    once: ATEM["on"];
}

export = ATEM;
