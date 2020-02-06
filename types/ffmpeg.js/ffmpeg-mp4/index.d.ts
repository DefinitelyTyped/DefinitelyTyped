// Project: https://github.com/Kagami/ffmpeg.js
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Interfaces from '../index';

export declare namespace ffmpeg {
    export import Options = Interfaces.Options;
    export import Opts = Interfaces.Opts;
    export import Mount = Interfaces.Mount;
    export import Result = Interfaces.Result;
    export import Video = Interfaces.Video;
}

export declare function ffmpeg(options: ffmpeg.Options): ffmpeg.Result;
