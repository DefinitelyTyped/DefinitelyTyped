// Type definitions for jsTimezoneDetect
// Project: https://bitbucket.org/pellepim/jstimezonedetect
// Definitions by: Olivier Lamothe <https://github.com/olamothe/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface JsTimezoneDetect {
    determine: ()=> {
        name: ()=> string;
    }
}

declare var jstimezonedetect: JsTimezoneDetect;

declare module "jstimezonedetect" {
    export = jstimezonedetect;
}
