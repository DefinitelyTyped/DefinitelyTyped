import videojs from 'video.js';
import { Representation } from '../';
import QualityLevel from './quality-level';

export default class QualityLevelList extends videojs.EventTarget implements ArrayLike<QualityLevel> {
    readonly selectedIndex: number;

    readonly length: number;

    readonly [index: number]: QualityLevel;

    addQualityLevel(representation: Representation): QualityLevel;

    removeQualityLevel(representation: Representation): QualityLevel | null;

    getQualityLevelById(id: string): QualityLevel | null;

    dispose(): void;
}
