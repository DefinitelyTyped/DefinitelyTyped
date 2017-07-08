// Type definitions for Microsoft.Maps.Traffic 7.0
// Project: http://msdn.microsoft.com/en-us/library/hh312840.aspx
// Definitions by: Eric Todd <https://github.com/ericrtodd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Microsoft.Maps.Traffic {

    export class TrafficManager {

        constructor(map: Map);

        hide(): void;
        hideFlow(): void;
        hideIncidents(): void;
        hideLegend(): void;
        show(): void;
        showFlow(): void;
        showIncidents(): void;
        showLegend():void;
    }

}
