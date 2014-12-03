declare module Microsoft.Maps.Traffic {
    
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