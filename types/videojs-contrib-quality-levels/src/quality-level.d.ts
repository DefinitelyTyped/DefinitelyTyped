import { Representation } from '../';

export default class QualityLevel {
    readonly id: string;

    readonly label: string;

    readonly width?: number;

    readonly height?: number;

    readonly bitrate: number;

    enabled: boolean;

    constructor(representation: Representation);
}
