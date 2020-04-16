// Type definitions for smpte-timecode 1.2
// Project: https://github.com/CrystalComputerCorp/smpte-timecode
// Definitions by: DoYoung Ha <https://github.com/hados99>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const Timecode: {
  (timecode?: Timecode.TIMECODE, frameRate?: Timecode.FRAMERATE, dropFrame?: boolean): Timecode.TimecodeInstance;
  new (timecode?: Timecode.TIMECODE, frameRate?: Timecode.FRAMERATE, dropFrame?: boolean): Timecode.TimecodeInstance;
};

declare namespace Timecode {
  type TIMECODE = number | string | Date | TimecodeObject;
  type FRAMERATE = 23.976 | 24 | 25 | 29.97 | 30 | 50 | 59.94 | 60;

  interface TimecodeObject {
    hours: number;
    minutes: number;
    seconds: number;
    frames: number;
  }

  interface TimecodeInstance {
    add(timecode: TIMECODE, negative?: boolean, rollOverMaxHours?: number): TimecodeInstance;
    subtract(timecode: TIMECODE, rollOverMaxHours?: number): TimecodeInstance;
    toDate(): Date;
    toString(options?: string): string;
    valueOf(): number;

    hours: number;
    minutes: number;
    seconds: number;
    frames: number;
    dropFrame: boolean;
    frameCount: number;
    frameRate: number;
  }
}

export = Timecode;
