// Type definitions for dragster 0.1
// Project: https://github.com/bensmithett/dragster
// Definitions by: Zsolt Kovacs <https://github.com/zskovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Type definitions for dragster 0.1
// Project: https://github.com/bensmithett/dragster
// Definitions by: Zsolt Kovacs <https://github.com/zskovacs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Dragster {
    interface Dragster {
        removeListeners(): void;
        reset(): void;
    }

    interface DragsterStatic {
        (elem: HTMLElement): Dragster;
        new (elem: HTMLElement): Dragster;
    }
}

// window.Dragster
declare var Dragster: Dragster.DragsterStatic;

// import Dragster = require('dragster');
declare module 'dragster' {
    interface ExportedDragster extends Dragster.Dragster {
        (elem: HTMLElement): Dragster.Dragster;
        new (elem: HTMLElement): Dragster.Dragster;
    }
    var Dragster: ExportedDragster;
    export = Dragster;
}