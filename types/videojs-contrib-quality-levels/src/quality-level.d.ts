import { Representation } from "../";

export default class QualityLevel {
    readonly id: string;

    readonly label: string;

    readonly width?: number | undefined;

    readonly height?: number | undefined;

    readonly bitrate: number;

    enabled: boolean;

    constructor(representation: Representation);
}
