// Type definitions for wavesurfer.js 5.0
// Project: https://github.com/katspaugh/wavesurfer.js
// Definitions by: Yusuke Higuchi <https://github.com/higuri>
//                 Egor Gorbachev <https://github.com/kubk>
//                 Ben Nordstrom <https://github.com/bennordgengo>
//                 Claas Augner <https://github.com/caugner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import WaveSurfer from "./src/wavesurfer";

export default WaveSurfer;

import absMax from "./src/util/absMax";
import clamp from "./src/util/clamp";
import fetchFile from "./src/util/fetch";
import frame from "./src/util/frame";
import getId from "./src/util/get-id";
import max from "./src/util/max";
import min from "./src/util/min";
import Observer from "./src/util/observer";
import withOrientation from "./src/util/orientation";
import preventClick from "./src/util/prevent-click";
import requestAnimationFrame from "./src/util/request-animation-frame";
import style from "./src/util/style";

export {
    absMax,
    clamp,
    fetchFile,
    frame,
    getId,
    max,
    min,
    Observer,
    withOrientation,
    preventClick,
    requestAnimationFrame,
    style,
};
