/// <reference types="node" />

interface ParsedRTPPacket {
    version: number;
    padding: number;
    extension: number;
    csrcCount: number;
    marker: number;
    payload: Buffer;
    payloadType: number;
    sequenceNumber: number;
    timestamp: number;
    ssrc: number;
    csrc: number[];
}

declare function parseRtpPacket(buf: Buffer): ParsedRTPPacket;

declare const FIXED_HEADER_LENGTH: 12;

interface PayloadTypesHash {
    0: { name: "PCMU"; mediaType: "A"; clockRate: 8000; channels: 1 };
    1: { name: "reserved"; mediaType: "A" };
    2: { name: "reserved"; mediaType: "A" };
    3: { name: "GSM"; mediaType: "A"; clockRate: 8000; channels: 1 };
    4: { name: "G723"; mediaType: "A"; clockRate: 8000; channels: 1 };
    5: { name: "DVI4"; mediaType: "A"; clockRate: 8000; channels: 1 };
    6: { name: "DVI4"; mediaType: "A"; clockRate: 16000; channels: 1 };
    7: { name: "LPC"; mediaType: "A"; clockRate: 8000; channels: 1 };
    8: { name: "PCMA"; mediaType: "A"; clockRate: 8000; channels: 1 };
    9: { name: "G722"; mediaType: "A"; clockRate: 8000; channels: 1 };
    10: { name: "L16"; mediaType: "A"; clockRate: 44100; channels: 2 };
    11: { name: "L16"; mediaType: "A"; clockRate: 44100; channels: 1 };
    12: { name: "QCELP"; mediaType: "A"; clockRate: 8000; channels: 1 };
    13: { name: "CN"; mediaType: "A"; clockRate: 8000; channels: 1 };
    14: { name: "MPA"; mediaType: "A"; clockRate: 90000 };
    15: { name: "G728"; mediaType: "A"; clockRate: 8000; channels: 1 };
    16: { name: "DVI4"; mediaType: "A"; clockRate: 11025; channels: 1 };
    17: { name: "DVI4"; mediaType: "A"; clockRate: 22050; channels: 1 };
    18: { name: "G729"; mediaType: "A"; clockRate: 8000; channels: 1 };
    19: { name: "reserved"; mediaType: "A" };
    20: { name: "unassigned"; mediaType: "A" };
    21: { name: "unassigned"; mediaType: "A" };
    22: { name: "unassigned"; mediaType: "A" };
    23: { name: "unassigned"; mediaType: "A" };
    24: { name: "unassigned"; mediaType: "V" };
    25: { name: "CelB"; mediaType: "V"; clockRate: 90000 };
    26: { name: "JPEG"; mediaType: "V"; clockRate: 90000 };
    27: { name: "unassigned"; mediaType: "V" };
    28: { name: "nv"; mediaType: "V"; clockRate: 90000 };
    29: { name: "unassigned"; mediaType: "V" };
    30: { name: "unassigned"; mediaType: "V" };
    31: { name: "H261"; mediaType: "V"; clockRate: 90000 };
    32: { name: "MPV"; mediaType: "V"; clockRate: 90000 };
    33: { name: "MP2T"; mediaType: "AV"; clockRate: 90000 };
    34: { name: "H263"; mediaType: "V"; clockRate: 90000 };
    35: { name: "unassigned" };
    36: { name: "unassigned" };
    37: { name: "unassigned" };
    38: { name: "unassigned" };
    39: { name: "unassigned" };
    40: { name: "unassigned" };
    41: { name: "unassigned" };
    42: { name: "unassigned" };
    43: { name: "unassigned" };
    44: { name: "unassigned" };
    45: { name: "unassigned" };
    46: { name: "unassigned" };
    47: { name: "unassigned" };
    48: { name: "unassigned" };
    49: { name: "unassigned" };
    50: { name: "unassigned" };
    51: { name: "unassigned" };
    52: { name: "unassigned" };
    53: { name: "unassigned" };
    54: { name: "unassigned" };
    55: { name: "unassigned" };
    56: { name: "unassigned" };
    57: { name: "unassigned" };
    58: { name: "unassigned" };
    59: { name: "unassigned" };
    60: { name: "unassigned" };
    61: { name: "unassigned" };
    62: { name: "unassigned" };
    63: { name: "unassigned" };
    64: { name: "unassigned" };
    65: { name: "unassigned" };
    66: { name: "unassigned" };
    67: { name: "unassigned" };
    68: { name: "unassigned" };
    69: { name: "unassigned" };
    70: { name: "unassigned" };
    71: { name: "unassigned" };
    72: { name: "reserved" };
    73: { name: "reserved" };
    74: { name: "reserved" };
    75: { name: "reserved" };
    76: { name: "reserved" };
    77: { name: "unassigned" };
    78: { name: "unassigned" };
    79: { name: "unassigned" };
    80: { name: "unassigned" };
    81: { name: "unassigned" };
    82: { name: "unassigned" };
    83: { name: "unassigned" };
    84: { name: "unassigned" };
    85: { name: "unassigned" };
    86: { name: "unassigned" };
    87: { name: "unassigned" };
    88: { name: "unassigned" };
    89: { name: "unassigned" };
    90: { name: "unassigned" };
    91: { name: "unassigned" };
    92: { name: "unassigned" };
    93: { name: "unassigned" };
    94: { name: "unassigned" };
    95: { name: "unassigned" };
    96: { name: "dynamic" };
    97: { name: "dynamic" };
    98: { name: "dynamic" };
    99: { name: "dynamic" };
    100: { name: "dynamic" };
    101: { name: "dynamic" };
    102: { name: "dynamic" };
    103: { name: "dynamic" };
    104: { name: "dynamic" };
    105: { name: "dynamic" };
    106: { name: "dynamic" };
    107: { name: "dynamic" };
    108: { name: "dynamic" };
    109: { name: "dynamic" };
    110: { name: "dynamic" };
    111: { name: "dynamic" };
    112: { name: "dynamic" };
    113: { name: "dynamic" };
    114: { name: "dynamic" };
    115: { name: "dynamic" };
    116: { name: "dynamic" };
    117: { name: "dynamic" };
    118: { name: "dynamic" };
    119: { name: "dynamic" };
    120: { name: "dynamic" };
    121: { name: "dynamic" };
    122: { name: "dynamic" };
    123: { name: "dynamic" };
    124: { name: "dynamic" };
    125: { name: "dynamic" };
    126: { name: "dynamic" };
    127: { name: "dynamic" };
}
export const payloadTypesHash: PayloadTypesHash;
type PayloadType = keyof PayloadTypesHash;

interface ParsedRTPType {
    name:
        | "PCMU"
        | "GSM"
        | "G723"
        | "DVI4"
        | "DVI4"
        | "LPC"
        | "PCMA"
        | "G722"
        | "L16"
        | "L16"
        | "QCELP"
        | "CN"
        | "MPA"
        | "G728"
        | "DVI4"
        | "DVI4"
        | "G729"
        | "CelB"
        | "JPEG"
        | "nv"
        | "H261"
        | "MPV"
        | "MP2T"
        | "H263"
        | "reserved"
        | "unassigned"
        | "dynamic";
    mediaType?: "A" | "AV" | "V" | undefined;
    clockRate?: 8000 | 16000 | 44100 | 90000 | 11025 | 22050 | undefined;
    channels?: 1 | 2 | undefined;
}

declare function parseRtpPayloadType(payloadType: 0): { name: "PCMU"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 1 | 2 | 19): { name: "reserved"; mediaType: "A" };
declare function parseRtpPayloadType(payloadType: 3): { name: "GSM"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 4): { name: "G723"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 5): { name: "DVI4"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 6): { name: "DVI4"; mediaType: "A"; clockRate: 16000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 7): { name: "LPC"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 8): { name: "PCMA"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 9): { name: "G722"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 10): { name: "L16"; mediaType: "A"; clockRate: 44100; channels: 2 };
declare function parseRtpPayloadType(payloadType: 11): { name: "L16"; mediaType: "A"; clockRate: 44100; channels: 1 };
declare function parseRtpPayloadType(payloadType: 12): { name: "QCELP"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 13): { name: "CN"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 14): { name: "MPA"; mediaType: "A"; clockRate: 90000 };
declare function parseRtpPayloadType(payloadType: 15): { name: "G728"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 16): { name: "DVI4"; mediaType: "A"; clockRate: 11025; channels: 1 };
declare function parseRtpPayloadType(payloadType: 17): { name: "DVI4"; mediaType: "A"; clockRate: 22050; channels: 1 };
declare function parseRtpPayloadType(payloadType: 18): { name: "G729"; mediaType: "A"; clockRate: 8000; channels: 1 };
declare function parseRtpPayloadType(payloadType: 20 | 21 | 22 | 23): { name: "unassigned"; mediaType: "A" };
declare function parseRtpPayloadType(payloadType: 24 | 27 | 29 | 30): { name: "unassigned"; mediaType: "V" };
declare function parseRtpPayloadType(payloadType: 25): { name: "CelB"; mediaType: "V"; clockRate: 90000 };
declare function parseRtpPayloadType(payloadType: 26): { name: "JPEG"; mediaType: "V"; clockRate: 90000 };
declare function parseRtpPayloadType(payloadType: 28): { name: "nv"; mediaType: "V"; clockRate: 90000 };
declare function parseRtpPayloadType(payloadType: 31): { name: "H261"; mediaType: "V"; clockRate: 90000 };
declare function parseRtpPayloadType(payloadType: 32): { name: "MPV"; mediaType: "V"; clockRate: 90000 };
declare function parseRtpPayloadType(payloadType: 33): { name: "MP2T"; mediaType: "AV"; clockRate: 90000 };
declare function parseRtpPayloadType(payloadType: 34): { name: "H263"; mediaType: "V"; clockRate: 90000 };
declare function parseRtpPayloadType(
    payloadType:
        | 35
        | 36
        | 37
        | 38
        | 39
        | 40
        | 41
        | 42
        | 43
        | 44
        | 45
        | 46
        | 47
        | 48
        | 49
        | 50
        | 51
        | 52
        | 53
        | 54
        | 55
        | 56
        | 57
        | 58
        | 59
        | 60
        | 61
        | 62
        | 63
        | 64
        | 65
        | 66
        | 67
        | 68
        | 69
        | 70
        | 71
        | 77
        | 78
        | 79
        | 80
        | 81
        | 82
        | 83
        | 84
        | 85
        | 86
        | 87
        | 88
        | 89
        | 90
        | 91
        | 92
        | 93
        | 94
        | 95,
): { name: "unassigned" };
declare function parseRtpPayloadType(payloadType: 72 | 73 | 74 | 75 | 76): { name: "reserved" };
declare function parseRtpPayloadType(
    payloadType:
        | 96
        | 97
        | 98
        | 99
        | 100
        | 101
        | 102
        | 103
        | 104
        | 105
        | 106
        | 107
        | 108
        | 109
        | 110
        | 111
        | 112
        | 113
        | 114
        | 115
        | 116
        | 117
        | 118
        | 119
        | 120
        | 121
        | 122
        | 123
        | 124
        | 125
        | 126
        | 127,
): { name: "dynamic" };
declare function parseRtpPayloadType(payloadType: number): ParsedRTPType;

export { FIXED_HEADER_LENGTH, parseRtpPacket, parseRtpPayloadType, PayloadType };
