// Type definitions for dom-helpers 3.4
// Project: https://github.com/react-bootstrap/dom-helpers
// Definitions by: Konstantin Vasiliev <https://github.com/mctep>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { default as events } from "./events";
import { default as query } from "./query";
import * as style from "./style";
import * as activeElement from "./activeElement";
import * as ownerDocument from "./ownerDocument";
import * as ownerWindow from "./ownerWindow";
import * as requestAnimationFrame from "./util/requestAnimationFrame";

declare const _default: typeof events &
    typeof query & {
        style: typeof style;
        activeElement: typeof activeElement;
        ownerDocument: typeof ownerDocument;
        ownerWindow: typeof ownerWindow;
        requestAnimationFrame: typeof requestAnimationFrame;
    };

declare const _export: {
    style: typeof style;
    activeElement: typeof activeElement;
    ownerDocument: typeof ownerDocument;
    ownerWindow: typeof ownerWindow;
    requestAnimationFrame: typeof requestAnimationFrame;

    default: typeof _default;
};

export = _export;
