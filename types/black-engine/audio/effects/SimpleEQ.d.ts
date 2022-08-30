export class SimpleEQ extends SoundEffect {
    constructor(...frequencies: number[]);
    private mFilters;
    private mMaxGainLevel;
    private mPresets;
    private __createFilter;
    setLevelByIndex(freqIndex: number, value: number): void;
    setLevelByFrequency(freq: number, value: number): void;
    addPreset(name: string, ...values: number[]): void;
    savePreset(name: string): void;
    applyPreset(name: string): void;
}
import { SoundEffect } from '../SoundEffect';
