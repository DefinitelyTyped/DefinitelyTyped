import { EventsKey } from '../events';
import BaseEvent from '../events/Event';
import MapEvent from '../MapEvent';
import { ObjectEvent } from '../Object';
import Control from './Control';

export interface Options {
    className?: string;
    minWidth?: number;
    render?: (p0: MapEvent) => void;
    target?: HTMLElement | string;
    units?: Units | string;
    bar?: boolean;
    steps?: number;
    text?: boolean;
    dpi?: number;
}
/**
 * Units for the scale line. Supported values are 'degrees', 'imperial',
 * 'nautical', 'metric', 'us'.
 */
export enum Units {
    DEGREES = 'degrees',
    IMPERIAL = 'imperial',
    NAUTICAL = 'nautical',
    METRIC = 'metric',
    US = 'us',
}
export default class ScaleLine extends Control {
    constructor(opt_options?: Options);
    /**
     * Creates a marker at given position
     */
    createMarker(position: string, i: number): string;
    /**
     * Creates the label for a marker marker at given position
     */
    createStepText(i: number, width: number, isLast: boolean, scale: number, suffix: string): string;
    /**
     * Returns the appropriate scale for the given resolution and units.
     */
    getScaleForResolution(): number;
    /**
     * Return the units to use in the scale line.
     */
    getUnits(): Units;
    /**
     * Specify the dpi of output device such as printer.
     */
    setDpi(dpi: number | undefined): void;
    /**
     * Set the units to use in the scale line.
     */
    setUnits(units: Units): void;
    on(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    once(type: string | string[], listener: (p0: any) => any): EventsKey | EventsKey[];
    un(type: string | string[], listener: (p0: any) => any): void;
    on(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'change', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'change', listener: (evt: BaseEvent) => void): void;
    on(type: 'change:units', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:units', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:units', listener: (evt: ObjectEvent) => void): void;
    on(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    once(type: 'error', listener: (evt: BaseEvent) => void): EventsKey;
    un(type: 'error', listener: (evt: BaseEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
}
