import { SimpleAudioAPI } from "./audio";
import { ConfigAPI } from "./config";
import { EngineAPI } from "./engine";
import { MacroAPI } from "./macro";
import { SaveAPI } from "./save";
import { ScriptingAPI } from "./scripting";
import { SettingsAPI } from "./settings";
import { StateAPI } from "./state";
import { StoryAPI } from "./story";
import { SugarCubeObject } from "./sugarcube";
import { TemplateAPI } from "./template";
import { DialogAPI, FullscreenAPI, LoadScreenAPI, UIAPI, UIBarAPI } from "./ui";
import { SugarCubeSettingVariables, SugarCubeSetupObject } from "./userdata";
import { WikifierAPI } from "./wiki";

declare global {
    const SugarCube: SugarCubeObject;

    /**
     * Configuration API.
     * @since 2.0.0
     */
    const Config: ConfigAPI;

    /**
     * Dialog API.
     * @since 2.0.0
     */
    const Dialog: DialogAPI;

    /**
     * Engine API.
     */
    const Engine: EngineAPI;
    /**
     * Macro API.
     * @since 2.0.0
     */
    const Macro: MacroAPI;
    /**
     *
     * @since 2.28.0
     */
    const SimpleAudio: SimpleAudioAPI;

    /**
     * Template API.
     * @since 2.29.0
     */
    const Template: TemplateAPI;

    /**
     * Strings localization object.
     * @since 2.10.0
     */
    const l10nStrings: {[x: string]: string};

    /**
     * Object that authors/developers may use to set up various bits of static data. Generally, you would use this for data that
     * does not change and should not be stored within story variables, which would make it part of the history.
     * @since 2.0.0
     */
    const setup: SugarCubeSetupObject;
    /**
     * A prototype-less generic object whose properties and values are defined by the Setting.addToggle(),
     * Setting.addList(), and Setting.addRange() methods.
     *
     * Normally, the values of its properties are automatically managed by their associated Settings dialog
     * control. If necessary, however, you may manually change their values—n.b. you'll need to call the
     * Setting.save() after having done so.
     * @since 2.0.0
     */
    const settings: SugarCubeSettingVariables;

    const Fullscreen: FullscreenAPI;
    const LoadScreen: LoadScreenAPI;

    const Save: SaveAPI;
    const Scripting: ScriptingAPI;
    const Setting: SettingsAPI;
    const State: StateAPI;
    const Story: StoryAPI;

    const UI: UIAPI;
    const UIBar: UIBarAPI;

    const Wikifier: WikifierAPI;
}

export {};
