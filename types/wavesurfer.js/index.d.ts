// Type definitions for wavesurfer.js 5.0
// Project: https://github.com/katspaugh/wavesurfer.js
// Definitions by: Yusuke Higuchi <https://github.com/higuri>
//                 Egor Gorbachev <https://github.com/kubk>
//                 Ben Nordstrom <https://github.com/bennordgengo>
//                 Claas Augner <https://github.com/caugner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./backend.d.ts" />
/// <reference path="./canvas.d.ts" />
/// <reference path="./common.d.ts" />
/// <reference path="./plugin.d.ts" />
/// <reference path="./observer.d.ts" />
/// <reference path="./params.d.ts" />
/// <reference path="./util.d.ts" />
/// <reference path="./wavesurfer.d.ts" />

import * as wavesurfer from "./wavesurfer";

export = WaveSurfer;

declare class WaveSurfer extends wavesurfer.WaveSurfer {}

declare namespace WaveSurfer {
    type PluginParams = wavesurfer.PluginParams;
    type PluginDefinition = wavesurfer.PluginDefinition;
}
