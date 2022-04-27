import { SimpleAudioAPI } from "./audio";
import { ConfigAPI } from "./config";
import { EngineAPI } from "./engine";
import { MacroAPI } from "./macro";
import { SaveAPI } from "./save";
import { ScriptingAPI } from "./scripting";
import { SettingsAPI } from "./settings";
import { StateAPI } from "./state";
import { StoryAPI } from "./story";
import { DialogAPI, FullscreenAPI, UIAPI, UIBarAPI } from "./ui";
import { SugarCubeSettingVariables, SugarCubeSetupObject } from "./userdata";
import { WikifierAPI } from "./wiki";

export interface SugarCubeObject {
    readonly Browser: {
        readonly userAgent: string;
        readonly isMobile: {
            readonly Android: boolean;
            readonly BlackBerry: boolean;
            readonly iOS: boolean;
            readonly Opera: boolean;
            readonly Windows: boolean;
            any: () => boolean;
        },
        readonly  isGecko: boolean;
        readonly isIE: boolean;
        readonly ieVersion: number | null;
        readonly isOpera: boolean;
        readonly operaVersion: number | null;
        readonly isVivaldi: boolean;
    };
    readonly Config: ConfigAPI;
    readonly Dialog: DialogAPI;
    readonly Engine: EngineAPI;
    readonly Fullscreen: FullscreenAPI;
    readonly Has: {
        readonly audio: boolean;
        readonly fileAPI: boolean;
        readonly geolocation: boolean;
        readonly mutationObserver: boolean;
        readonly performance: boolean;
        readonly touch: boolean;
        readonly transitionEndEvent: string;
    };
    readonly Macro: MacroAPI;
    readonly Save: SaveAPI;
    readonly Scripting: ScriptingAPI;
    readonly Setting: SettingsAPI;
    readonly SimpleAudio: SimpleAudioAPI;
    readonly State: StateAPI;
    readonly Story: StoryAPI;
    readonly UI: UIAPI;
    readonly UIBar: UIBarAPI;
    readonly Wikifier: WikifierAPI;
    /**
     * Player settings object, set up by the author/developer. See Setting API for more information.
     * @since 2.0.0
     */
    readonly  settings: SugarCubeSettingVariables;
    /**
     * Object that authors/developers may use to set up various bits of static data.
     *
     * Generally, you would use this for data that does not change and should not be stored
     * within story variables, which would make it part of the history.
     * @since 2.0.0
     */
    readonly setup: SugarCubeSetupObject;
    readonly storage: any;
    readonly session: any;
    readonly version: {
        readonly title: string;
        readonly major: number;
        readonly minor: number;
        readonly patch: number;
        readonly prerelease: string | null;
        readonly build: number;
        readonly date: Date;
        toString(): string;
    };
}

export {};
