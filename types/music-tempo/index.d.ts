// Type definitions for react-native-dotenv 0.2
// Project: https://github.com/zetachang/react-native-dotenv
// Definitions by: hmajid2301 <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export class Agent {
    constructor(tempo: number, firstBeatTime: number, firsteventScore: number, agentList: any[], params?: {
        expiryTime?: number,
        toleranceWndInner?: number,
        toleranceWndPre?: number,
        toleranceWndPost?: number,
        correctionFactor?: number,
        maxChange?: number,
        penaltyFactor?: number
    })

    considerEvent(eventTime: number, eventScore: number): boolean;
    acceptEvent(eventTime: number, eventScore: number, err: number, beatCount: number): void;
    fillBeats(): void;


    expiryTime: number;
    toleranceWndInner: number;
    toleranceWndPre: number;
    toleranceWndPost: number;
    correctionFactor: number;
    maxChange: number;
    penaltyFactor: number;
    beatInterval: number;
    initialBeatInterval: number;
    beatTime: number;
    totalBeatCount: number;
    events: number[];
    score: number;
    agentListRef: Agent[];
}

export interface BeatTrackingParams {
    initPeriod?: number;
    thresholdBI?: number;
    thresholdBT?: number;
    expiryTime?: number;
    toleranceWndInner?: number;
    toleranceWndPre?: number;
    toleranceWndPost?: number;
    correctionFactor?: number;
    maxChange?: number;
    penaltyFactor?: number;
}

export class BeatTracking {
    static trackBeat(events: number[], eventsScores: number[], tempoList: number[], params?: BeatTrackingParams): Agent[];
}

export class FFT {
    static getHammingWindow(bufferSize: number): number[];
    static getSpectrum(re: any[], im: any[]): void;
}

export interface FindPeaksParams {
    decayRate?: number;
    peakFindingsWindow?: number;
    meanWndMultiplier?: number;
    peakThreshold?: number;
}

export class OnsetDetection {
    static calculateSF(audioData: Float32Array, fft: FFT, params?: { bufferSize?: number, hopSize?: number}): number[];
    static normalize(data: any[]): void;
    static findPeaks(spectralFlux: number[], params?: FindPeaksParams): number[]
}

export interface Clusters {
    clIntervals: number[];
    clSizes: number[];
    clScores?: number[];
    clScoresIdxs?: number[];
}

export interface ScoreIndex {
    score: number;
    idx: number;
}

export interface IntervalScores {
    clScores: number[];
    clScoresIdxs: ScoreIndex[];
}

export class TempoInduction {
    static processRhythmicEvents(events: number[], params?: {
        widthTreshold?: number,
        maxIOI?: number,
        minIOI?: number
    }): Clusters;

    static mergeClusters(clusters: Clusters, params?: { widthTreshold?: number}): Clusters;
    static calculateScore(clusters: Clusters, params?: { widthTreshold?: number, maxTempos?: number}): IntervalScores;
    static createTempoList(clusters: Clusters, params?: { widthTreshold?: number, minBeatInterval?: number, maxBeatInterval?: number}): number[];
}

export interface MusicTempoParams {
    bufferSize?: number;
    hopSize?: number;
    decayRate?: number;
    peakFindingWindow?: number;
    widthTreshold?: number;
    maxIOI?: number;
    minIOI?: number;
    maxTempos?: number;
    minBeatInterval?: number;
    maxBeatInterval?: number;
    initPeriod?: number;
    thresholdBI?: number;
    thresholdBT?: number;
    expiryTime?: number;
    toleranceWndInner?: number;
    toleranceWndPre?: number;
    toleranceWndPost?: number;
    correctionFactor?: number;
    maxChange?: number;
    penaltyFactor?: number;
}

export default class MusicTempo {
    constructor(audioData: Float32Array, params?: MusicTempoParams);

    spectralFlux: number[];
    peaks: number[];
    events: number[];
    tempoList: number[];
    agents: Agent[];
    tempo: number;
    beats: number[];
    beatInterval: number;
}

