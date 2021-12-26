import videojs from 'video.js';
import qualityLevels, { QualityLevel, QualityLevelList, Representation } from 'videojs-contrib-quality-levels';

const video = videojs('id');
let VERSION: string = qualityLevels.VERSION;

function getterSetter(value: boolean): void;
function getterSetter(): boolean;
function getterSetter(value?: boolean): boolean | void {
    if (typeof value === 'undefined') return true;
}

video.ready(function() {
    qualityLevels.call(this);
    qualityLevels.call(this, {});

    ({ VERSION } = video.qualityLevels);
    const list: QualityLevelList = video.qualityLevels();
    const selectedIndex: number = list.selectedIndex;
    const length: number = list.length;

    const level: QualityLevel = list[0];
    const id: string = level.id;
    const label: string = level.label;
    const width: number | undefined = level.width;
    const height: number | undefined = level.height;
    const bitrate: number = level.bitrate;
    const enabled: boolean = level.enabled;

    const representation: Representation = {
        id: 'id',
        width: 1920,
        height: 1080,
        bandwidth: 9999,
        enabled: getterSetter,
    };
    const ql1: QualityLevel = list.addQualityLevel(representation);
    const ql2: QualityLevel | null = list.removeQualityLevel(representation);
    const ql3: QualityLevel | null = list.getQualityLevelById('id');

    list.dispose();
});
