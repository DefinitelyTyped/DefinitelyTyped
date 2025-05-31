export const encodings: {
    encodingRaw: 0;
    encodingCopyRect: 1;
    encodingRRE: 2;
    encodingHextile: 5;
    encodingZlib: 6;
    encodingTight: 7;
    encodingZRLE: 16;
    encodingTightPNG: -260;
    encodingJPEG: 21;
    encodingH264: 50;
    pseudoEncodingQualityLevel9: -23;
    pseudoEncodingQualityLevel0: -32;
    pseudoEncodingDesktopSize: -223;
    pseudoEncodingLastRect: -224;
    pseudoEncodingCursor: -239;
    pseudoEncodingQEMUExtendedKeyEvent: -258;
    pseudoEncodingQEMULedEvent: -261,
    pseudoEncodingDesktopName: -307;
    pseudoEncodingExtendedDesktopSize: -308;
    pseudoEncodingXvp: -309;
    pseudoEncodingFence: -312;
    pseudoEncodingContinuousUpdates: -313;
    pseudoEncodingExtendedMouseButtons: -316,
    pseudoEncodingCompressLevel9: -247;
    pseudoEncodingCompressLevel0: -256;
    pseudoEncodingVMwareCursor: 0x574d5664;
    pseudoEncodingExtendedClipboard: 0xc0a1e5ce;
};
export function encodingName(num: number): string;
