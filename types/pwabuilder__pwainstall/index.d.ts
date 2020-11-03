// Type definitions for pwa-install 1.6
// Project: https://github.com/pwa-builder/pwa-install
// Definitions by: The PWABuilder Team
//                  Justin Willis <https://github.com/jgw96>
//                  Judah Himango <https://github.com/JudahGabriel>
//                  Leonardo Lee <https://github.com/lee-leonardo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace PWAInstall;

/*~ Public Attributes
 */
export interface PublicAttributes {
    openmodal: boolean;
    usecustom: boolean;
    manifestpath: string;
    explainer: string;
    featuresheader: string;
    descriptionheader: string;
    installbuttontext: string;
    cancelbuttontext: string;
    iosinstallinfotext: string;
}

/*~ Public Functions
 */
export interface PublicMethods {
    openPrompt(): void;
    closePrompt(): void;
    getInstalledStatus(): boolean;
}

export type Component = PublicAttributes & PublicMethods;
