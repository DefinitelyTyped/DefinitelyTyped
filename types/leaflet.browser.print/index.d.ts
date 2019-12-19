// Type definitions for leaflet.browser.print 1.0
// Project: https://github.com/Igor-Vladyka/leaflet.browser.print
// Definitions by: Benjamin Ihrig <https://github.com/ihrigb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import * as leaflet from 'leaflet';

declare module 'leaflet' {
    namespace control {
        interface BrowserPrintControlOptions extends ControlOptions {
            title?: string;
            documentTitle?: string;
            printLayer?: L.TileLayer;
            printModes?: Control.BrowserPrint.Mode[];
            closePopupsOnPrint?: boolean;
            contentSelector?: string;
            pageSelector?: string;
            manualMode?: boolean;
            customPrintStyle?: L.PolylineOptions;
        }

        function browserPrint(options?: BrowserPrintControlOptions): Control.BrowserPrint;

        type LandscapeModeType = 'Landscape';
        type PortraitModeType = 'Portrait';
        type AutoModeType = 'Auto';
        type CustomModeType = 'Custom';

        type ModeType = LandscapeModeType | PortraitModeType | AutoModeType | CustomModeType;

        namespace browserPrint {
            function mode(mode: ModeType, title?: string, pageSize?: string): Control.BrowserPrint.Mode;

            namespace mode {
                function portrait(title?: string, pageSize?: string, action?: any): Control.BrowserPrint.Mode;
                function landscape(title?: string, pageSize?: string, action?: any): Control.BrowserPrint.Mode;
                function auto(title?: string, pageSize?: string, action?: any): Control.BrowserPrint.Mode;
                function custom(title?: string, pageSize?: string, action?: any): Control.BrowserPrint.Mode;
            }
        }
    }

    namespace Control {
        interface BrowserPrint {
            addTo(map: L.Map): HTMLDivElement;
        }

        namespace BrowserPrint {
            class Mode { }

            type LandscapeModeType = 'Landscape';
            type PortraitModeType = 'Portrait';
            type AutoModeType = 'Auto';
            type CustomModeType = 'Custom';

            type ModeType = LandscapeModeType | PortraitModeType | AutoModeType | CustomModeType;

            namespace Mode {
                type Landscape = LandscapeModeType;
                type Portrait = PortraitModeType;
                type Auto = AutoModeType;
                type Custom = CustomModeType;
            }

            function Mode(mode: ModeType, title?: string, pageSize?: string): any;

            namespace Size {
                interface SizeDefinition {
                    Width: number;
                    Height: number;
                }

                const A: SizeDefinition;
                const B: SizeDefinition;
                const C: SizeDefinition;
                const D: SizeDefinition;
                const LETTER: SizeDefinition;
                const HALFLETTER: SizeDefinition;
                const LEGAL: SizeDefinition;
                const JUNIORLEGAL: SizeDefinition;
                const TABLOID: SizeDefinition;
                const LEDGER: SizeDefinition;
            }

            namespace Event {
                const PrintInit: 'browser-print-init';
                const PrePrint: 'browser-pre-print';
                const PrintStart: 'browser-print-start';
                const Print: 'browser-print';
                const PrintEnd: 'browser-print-end';
            }
        }
    }
}
