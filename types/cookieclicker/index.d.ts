// Type definitions for non-npm package cookieclicker 2.031
// Project: https://orteil.dashnet.org/cookieclicker/
// Definitions by: Lubomir <https://github.com/TheGLander>
//                 Bob <https://github.com/MasterOfBob777>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.6

declare function AddEvent(htmlElement: HTMLElement, eventName: string, eventFunction: (e: Event) => void): void;
declare function l(name: string): HTMLElement;
declare function PlaySound(url: string, volume?: number, pitch?: number): void;
/**
 * Floors or ceils randomly, biased by the decimal value
 */
declare function randomFloor(x: number): number;
declare function shuffle<T>(array: T[]): T[];

/**
 * Returns a random member of an array, has a very slight chance to return `undefined` (When the seeded Math.random() is 1)
 * @param array The array to pick a member of
 */
declare function choose<T>(array: T[]): T;
/**
 * An extended toFixed, which converts any number to an e-less string
 */
declare function toFixed(x: number): string;
/**
 * Beautifies a number
 * @param val The number to beautify
 * @param floats The amount of decimals to show
 */
declare function Beautify(val: number, floats?: number): string;

interface Math {
    /**
     * Changes `Math.random` to output numbers based on the seed
     */
    seedrandom(seed: string): void;
}

interface CanvasRenderingContext2D {
    /**
     * Fills a pattern of images
     * @param img The image to use
     * @param X  X of the top left corner of the pattern
     * @param Y Y of the top left corner of the pattern
     * @param W Width of the pattern
     * @param H Height of the pattern
     * @param iW Width of the image
     * @param iH Height of the image
     * @param offX X offset of the images
     * @param offY Y offset of the images
     */
    fillPattern(
        img: CanvasImageSource,
        X: number,
        Y: number,
        W: number,
        H: number,
        iW: number,
        iH: number,
        offX?: number,
        offY?: number,
    ): void;
}

declare class Loader {
    constructor();
    /**
     * The amount of loading assets
     */
    loadingN: number;
    /**
     * Total amount of assets, both loading and loaded
     */
    assetsN: number;
    assets: undefined[] & Record<string, HTMLImageElement>;
    /**
     * Names of the assets that are currently loading
     */
    assetsLoading: string[];
    /**
     * Names of the assets that have been loaded
     */
    assetsLoaded: string[];
    /**
     * The prefix to all assets
     */
    domain: string;
    /**
     * A callback to when all assets is loaded
     */
    loaded: Game.PseudoNull | (() => void);
    /**
     * A pseudoboolean, is true when all assets are loaded for the first time
     */
    doneLoading: Game.PseudoBoolean;
    /**
     * An empty 8x8 canvas element, used in the `Pic` constructor
     */
    blank: HTMLCanvasElement & { width: 8; height: 8; alt: 'blank' };
    /**
     * Loads assets
     * @param assets The iterable of strings to get asset names from
     */
    Load: (assets: string[]) => void;
    /**
     * Replaces an asset if the original asset exists
     * @param old The name of the old asset
     * @param newer The name of the new asset, isn't prefixed by `this.prefix` if it has `http` in the name
     */
    Replace: (old: string, newer: string) => void;
    /**
     * Unused @deprecated
     */
    onLoadReplace: () => void;
    /**
     * An internal callback function
     */
    onLoad: (e: Event) => void;
    /**
     * Returns the progress of loading all assets
     */
    getProgress: () => number;
}

declare namespace Game {
    /**
     * The icon type used in Cookie Clicker
     */
    export type Icon = [number, number, string?];
    /**
     * A boolean represented by a number
     */
    export type PseudoBoolean = 0 | 1;
    /**
     *  A pseudo null represented by a 0
     */
    export type PseudoNull = 0;
    /**
     * Fool object used in Cookie Clicker
     */
    export interface FoolBuilding {
        name: string;
        desc: string;
        icon: [number, number];
    }

    /**
     * Defines basic functions (`Game.Init`, etc.)
     */
    export function Launch(): void;
    export let version: number;
    export let beta: PseudoBoolean;
    export let https: boolean;
    /** @deprecated */
    export let mobile: PseudoBoolean;
    export let touchEvents: PseudoBoolean;
    /**
     * The season active if season switcher is not active
     */
    export let baseSeason: string;
    /**
     * The entirety of the Info tab, in html text
     */
    export let updateLog: string;
    /**
     * Pseudo boolean enabled by running `Game.Init`
     */
    export let ready: PseudoBoolean;
    /**
     * Callback for `window.onload`, loads an empty 8x8 image via `Game.Loader`, and adds `Game.Init` on the load callback (Connectivity test)
     */
    export function Load(): void;
    /**
     * Sets the error of `#javascriptError` to a message about the game being in an iframe. (Doesn't change display style, so is invisible after load)
     */
    export function ErrorFrame(): void;
    export let timedout: boolean;

    export function Timeout(): void;

    export function Resume(): void;

    export function Init(): void;

    export function Logic(): void;

    export function Draw(): void;

    export function Loop(): void;

    export let Loader: Loader;
    export let T: number;
    export let drawT: number;
    export let loopT: number;
    export let fps: number;
    export let season: string;
    /**
     * The main div where all the game is contained
     */
    export let l: HTMLDivElement;
    /**
     * The rectangle of `Game.l`
     */
    export let bounds: DOMRect;
    export let clickStr: string;
    export let SaveTo: string;
    export let lastActivity: number;
    export let time: number;
    export let accumulatedDelay: number;
    export let delayTimeouts: number;
    export let catchupLogic: number;
    export let fpsStartTime: number;
    export let frameNumber: number;
    export let currentFps: number;
    export let previousFps: number;

    export function getFps(): number;
    export let cookiesEarned: number;
    export let cookies: number;
    export let cookiesd: number;
    export let cookiesPs: number;
    export let cookiesReset: number;
    export let cookieClicks: number;
    export let goldenClicks: number;
    export let goldenClicksLocal: number;
    export let missedGoldenClicks: number;
    export let handmadeCookies: number;
    export let milkProgress: number;
    export let milkH: number;
    export let milkHd: number;
    export let milkType: number;
    export let bgType: number;
    export let chimeType: number;
    export let prestige: number;
    export let heavenlyChips: number;
    export let heavenlyChipsDisplayed: number;
    export let heavenlyChipsSpent: number;
    export let heavenlyCookies: number;

    export let permanentUpgrades: number[];
    export let ascensionMode: number;
    export let resets: number;
    export let lumps: number;
    export let lumpsTotal: number;
    export let lumpT: number;
    export let lumpRefill: number;
    /**
     * Generates a 5 length string, consisting of a-z characters
     */
    export function makeSeed(): string;
    export let seed: string;
    export let volume: number;
    export let elderWrath: number;
    export let elderWrathOld: number;
    export let elderWrathD: number;
    export let pledges: number;
    export let pledgeT: number;
    export let researchT: number;
    export let nextResearch: number;
    export let cookiesSucked: number;
    export let cpsSucked: number;
    export let wrinklersPopped: number;
    export let santaLevel: number;
    export let reindeerClicked: number;
    export let seasonT: number;
    export let seasonUses: number;
    export let dragonLevel: number;
    export let dragonAura: number;
    export let dragonAura2: number;
    /**
     * A pseudoboolean which is true when the golden cookie fortune has been collected
     */
    export let fortuneGC: PseudoBoolean;
    /**
     * A pseudoboolean which is true when the CpS bonus fortune has been collected
     */
    export let fortuneCPS: PseudoBoolean;
    export let blendModesOn: boolean;
    /**
     * The current background
     */
    export let bg: string;
    /**
     * The background the current background is fading to
     */
    export let bgFade: string;
    /**
     * The ratio between the current and target background, 0 is not faded, 1 is fully faded
     */
    export let bgR: number;
    export let bgRd: number;
    export let windowW: number;
    export let windowH: number;
    export let startDate: number;
    export let fullDate: number;
    export let lastDate: number;
    export interface Prefs {
        particles: PseudoBoolean;
        numbers: PseudoBoolean;
        autosave: PseudoBoolean;
        autoupdate: PseudoBoolean;
        milk: PseudoBoolean;
        fancy: PseudoBoolean;
        warn: PseudoBoolean;
        cursors: PseudoBoolean;
        focus: PseudoBoolean;
        popups: PseudoBoolean;
        format: PseudoBoolean;
        notifs: PseudoBoolean;
        animate: PseudoBoolean;
        wobbly: PseudoBoolean;
        monospace: PseudoBoolean;
        filters: PseudoBoolean;
        altDraw: PseudoBoolean;
        showBackupWarning: PseudoBoolean;
        extraButtons: PseudoBoolean;
        askLumps: PseudoBoolean;
        customGrandmas: PseudoBoolean;
        timeout: PseudoBoolean;
    }
    export let prefs: undefined[] & Prefs;
    /**
     * Sets the default options
     */
    export function DefaultPrefs(): void;
    /**
     * Toggles mobile mode
     */
    export function Mobile(): void;
    export function showBackupWarning(): void;
    /**
     * Loads and runs a JS file by a URL, requires the correct header
     */
    export function LoadMod(url: string): void;
    /**
     * Makes up a random bakery name
     */
    export function RandomBakeryName(): string;
    /**
     * Returns a `RandomBakeryName` output
     */
    export function GetBakeryName(): string;
    export let bakeryName: string;
    /**
     * The bakery
     */
    export let bakeryNameL: HTMLDivElement;
    /**
     * Filters the bakery name to only have valid characters
     */
    export function bakeryNameSet(): void;
    /**
     * Updates the displayed bakery name and does some bakery name lofic
     */
    export function bakeryNameRefresh(): void;
    /**
     * Creates the bakery name prompt
     */
    export function bakeryNamePrompt(): void;
    /**
     * Updates the bakery name prompt input space to be a random name
     */
    export function bakeryNamePromptRandom(): string;
    export type TooltipOrigins = 'store' | 'left' | 'bottom-right' | 'bottom' | 'left' | 'this' | undefined;
    export interface Tooltip {
        /**
         * The html text the tooltip should have
         */
        text: (() => string) | string;
        /**
         * The element where the tooltip is going from
         */
        from: HTMLElement;
        /**
         * The mode for the tooltip, where should it go
         */
        origin: TooltipOrigins;
        /**
         * Indicates if the tooltip is currently showing
         */
        on: PseudoBoolean;
        /**
         * Indicates if the tooltip should be hidden, usually set on by `mouseout`
         */
        shouldHide: PseudoBoolean;
        /**
         * If true, the tooltip content will be updated constantly, otherwise, it will be static
         */
        dynamic: PseudoBoolean;
        /**
         * Unused @deprecated
         */
        x: number;
        /**
         * Unused @deprecated
         */
        y: number;
        /**
         * Draws the tooltip
         * @param from The element the tooltip is going from
         * @param text The text (or the text function) to use in the tooltip
         * @param origin The mode of position of the tooltip
         */
        draw(from: HTMLElement, text: (() => string) | string, origin: TooltipOrigins): void;
        /**
         * Updates the tooltip position and contents
         */
        update(): void;
        /**
         * Hides the tooltip
         */
        hide(): void;
        /**
         * Does nothing @deprecated
         */
        wobble(): void;
    }
    export let tooltip: Tooltip;
    /**
     * Creates the needed tooltip properties for a static tooltip
     * @param text The text to display on the tooltip
     * @returns The properties to include in the html tag
     */
    export function getTooltip(text: string, origin?: TooltipOrigins, isCrate?: PseudoBoolean | boolean): string;

    /**
     * Creates the needed tooltip properties for a dynamic tooltip
     * @param func The text function name or string to display on the tooltip
     * @returns The properties to include in the html tag
     */
    export function getDynamicTooltip(func: string, origin?: TooltipOrigins, isCrate?: PseudoBoolean | boolean): string;
    /**
     * Attaches the tooltip properties to an element
     * @param el The element to attach properties to
     * @param func The text function (or text) to show in the tooltip
     */
    export function attachTooltip(el: HTMLElement, func: string | (() => string), origin: TooltipOrigins): void;
    export function CheckUpdates(): void;
    export function CheckUpdatesResponse(response: string): void;
    export let externalDataLoaded: boolean;

    export let grandmaNames: string[];

    export let customGrandmaNames: string[];
    export let heralds: number;
    export function GrabData(): void;
    export function GrabDataResponse(response: string): void;
    export let useLocalStorage: number;
    /**
     * Calls localStorage.getItem
     */
    export function localStorageGet(key: string): string;
    /**
     * Calls localStorage.setItem
     */
    export function localStorageSet(key: string, str: string): void;

    export function ExportSave(): void;

    export function ImportSave(): void;

    export function ImportSaveCode(save: string): void;

    export function FileSave(): void;
    export function FileLoad(e: InputEvent): void;
    export let toSave: boolean;
    /**
     * @param type none is default, 1=return string only, 2=return uncompressed string, 3=return uncompressed, commented string
     */
    export function WriteSave(type?: number): string;

    export function salvageSave(): void;

    export function LoadSave(data?: string): boolean;

    export function Reset(hard: boolean): void;
    /**
     * Completely wipes the save, bypass is the amount of confirmation has been done
     */
    export function HardReset(bypass: 0 | 1 | 2): void;
    export let onCrate: number;

    export function setOnCrate(what: number): void;

    export function crate(
        me: Upgrade | Achievement,
        context: 'store' | 'ascend' | 'stats' | undefined,
        forceClickStr: string,
        id: string,
    ): string;

    export function crateTooltip(me: Upgrade | Achievement, context: 'store' | 'ascend' | 'stats' | undefined): string;

    export function costDetails(cost: number): void;
    export let HCfactor: number;

    export function HowMuchPrestige(cookies: number): number;

    export function HowManyCookiesReset(chips: number): number;
    export let gainedPrestige: number;

    export function EarnHeavenlyChips(cookiesForfeited: number): void;

    export function GetHeavenlyMultiplier(): number;
    /**
     * An object representing a challenge mode, in game, there is currently 2 challenge modes:
     * None and Born again.
     */
    export interface AscensionMode {
        name: string;
        desc: string;
        icon: Icon;
    }
    export let ascensionModes: Record<number, AscensionMode>;
    export let ascendMeterPercent: number;
    export let ascendMeterPercentT: number;
    export let ascendMeterLevel: number;
    export let nextAscensionMode: number;

    export function UpdateAscensionModePrompt(): void;

    export function PickAscensionMode(): void;

    export function UpdateLegacyPrompt(): void;
    export let ascendl: object;
    export let ascendContentl: object;
    export let ascendZoomablel: object;
    export let ascendUpgradesl: object;
    export let OnAscend: number;
    export let AscendTimer: number;
    export let AscendDuration: number;
    export let AscendBreakpoint: number;

    export function UpdateAscendIntro(): void;
    export let ReincarnateTimer: number;
    export let ReincarnateDuration: number;

    export function UpdateReincarnateIntro(): void;

    export function Reincarnate(bypass: boolean): void;

    export function GiveUpAscend(bypass: boolean): void;
    export function Ascend(bypass: boolean): void;
    export let DebuggingPrestige: number;
    export let AscendDragX: number;
    export let AscendDragY: number;
    export let AscendOffX: number;
    export let AscendOffY: number;
    export let AscendZoom: number;
    export let AscendOffXT: number;
    export let AscendOffYT: number;
    export let AscendZoomT: number;
    export let AscendDragging: number;
    export let AscendGridSnap: number;
    export let heavenlyBounds: object;

    export function UpdateAscend(): void;

    export function AscendRefocus(): void;
    export let SelectedHeavenlyUpgrade: number;

    export function PurchaseHeavenlyUpgrade(what: Upgrade): void;

    export function BuildAscendTree(): void;
    export let lumpMatureAge: number;
    export let lumpRipeAge: number;
    export let lumpOverripeAge: number;
    export let lumpCurrentType: number;

    export function lumpTooltip(): string;

    export function computeLumpTimes(): void;

    export function loadLumps(time?: any): void;

    export function gainLumps(total: number): void;

    export function clickLump(): void;

    export function harvestLumps(amount: number, silent: boolean): void;

    export function computeLumpType(): boolean;

    export function canLumps(): boolean;

    export function getLumpRefillMax(): number;

    export function getLumpRefillRemaining(): number;

    export function canRefillLump(): boolean;

    export function refillLump(n: number, func: () => void): void;

    export function spendLump(n: number, str: string, func: () => void): () => void;

    export function doLumps(): void;

    export function Earn(howmuch: number): void;

    export function Spend(howmuch: number): void;

    export function Dissolve(howmuch: number): void;

    export function mouseCps(): number;
    export let computedMouseCps: number;
    export let globalCpsMult: number;
    export let unbuffedCps: number;
    export let lastClick: number;
    export let CanClick: number;
    export let autoclickerDetected: number;
    export let BigCookieState: number;
    export let BigCookieSize: number;
    export let BigCookieSizeD: number;
    export let BigCookieSizeT: number;
    export let cookieClickSound: number;

    export function playCookieClickSound(): void;
    export function ClickCookie(e: MouseEvent, amount: number): void;
    export let mouseX: number;
    export let mouseY: number;
    export let mouseX2: number;
    export let mouseY2: number;
    export let mouseMoved: number;

    export function GetMouseCoords(e: MouseEvent): void;
    export let Click: number;
    export let lastClickedEl: object;
    export let clickFrom: number;
    export let Scroll: number;
    export let mouseDown: number;

    export function handleScroll(e: MouseEvent): void;

    export let keys: number[];
    export let heavenlyPower: number;
    export let recalculateGains: number;
    export let cookiesPsByType: object;
    export let cookiesMultByType: object;
    export interface Effects {
        cps: number;
        click: number;
        cursorCps: number;
        grandmaCps: number;
        goldenCookieGain: number;
        goldenCookieFreq: number;
        goldenCookieDur: number;
        goldenCookieEffDur: number;
        wrathCookieGain: number;
        wrathCookieFreq: number;
        wrathCookieDur: number;
        wrathCookieEffDur: number;
        reindeerGain: number;
        reindeerFreq: number;
        reindeerDur: number;
        itemDrops: number;
        milk: number;
        wrinklerSpawn: number;
        wrinklerEat: number;
        upgradeCost: number;
        buildingCost: number;
    }
    export let effs: Effects;

    export function eff(name: string, def: string): Effects;

    export function CalculateGains(): void;

    export function dropRateMult(): number;
    export class Shimmer<N extends string = keyof typeof shimmerTypes, C extends object = {}> {
        /**
         * Creates a new shimmer
         * @param type The type of the shimmer, must be a key of `shimmerTypes`
         * @param obj The configuration object
         * @param noCount True if to not count the shimmer in `shimmersN`
         */
        constructor(type: N, obj?: C, noCount?: boolean);
        type: N;
        l: HTMLElement;
        x: number;
        y: number;
        id: number;
        forceObj: C;
        noCount: boolean;
        init: () => void;
        update: () => void;
        pop: (event: MouseEvent) => void;
        die: () => void;
        spawnLead: number;
    }

    export let shimmersL: HTMLDivElement;

    export let shimmers: Shimmer[];
    export let shimmersN: number;

    export function updateShimmers(): void;
    export function killShimmers(): void;
    /**
     * The functions of a shimmer
     */
    export interface ShimmerType {
        reset: () => void;
        initFunc: (this: this, me: Shimmer) => void;
        updateFunc: (this: this, me: Shimmer) => void;
        popFunc: (this: this, me: Shimmer) => void;
        missFunc: (this: this, me: Shimmer) => void;
        getMinTime: (me: Shimmer) => void;
        minTime: number;
        getMaxTime: (me: Shimmer) => void;
        maxTime: number;
        time: number;
        spawnsOnTimer: boolean;
        spawnConditions: () => boolean;
        spawned: boolean | PseudoBoolean;
    }
    export let shimmerTypes: Record<string, ShimmerType>;

    export let goldenCookieChoices: string[];
    export let goldenCookieBuildingBuffs: Record<keyof typeof Objects, [string, string]>;

    interface Particle {
        life: number;
        x: number;
        y: number;
        xd: number;
        yd: number;
        size: number;
        dur: number;
        z: number;
        picId: number;
        pic: string;
        picPos: [number, number];
        text: string | number;
        l?: HTMLElement;
    }

    export let particles: Particle[];

    export function particlesUpdate(): void;

    export function particleAdd(
        x: number,
        y: number,
        xd: number,
        yd: number,
        size: number,
        dur: number,
        z: number,
        pic: string,
        text: string,
    ): Particle | object;

    export function particlesDraw(z: number): void;

    export let textParticles: Particle[];
    export let textParticlesY: number;

    export function textParticlesUpdate(): void;
    export function textParticlesAdd(text: string, el: undefined | 0, posX: number, posY: number): Particle;
    export let popups: number;

    export function Popup(text: string, x: number, y: number): void;
    export let sparkles: object;
    export let sparklesT: number;
    export let sparklesFrames: number;

    export function SparkleAt(x: number, y: number): void;

    export function SparkleOn(el: HTMLElement): void;

    export let Notes: Note[];

    export let NotesById: Note[];
    export let noteId: number;
    export let noteL: HTMLDivElement;

    export class Note {
        constructor(title: string, desc?: string, pic?: Icon, quick?: number);
        title: string;
        desc: string;
        pic: Icon | '';
        id: number;
        date: number;
        quick: number;
        life: number;
        l: HTMLDivElement | PseudoNull;
        height: number;
    }

    export function CloseNote(id: number): void;

    export function CloseNotes(): void;

    export function UpdateNotes(): void;

    export function NotesLogic(): void;

    export function NotesDraw(): void;

    export function Notify(title: string, desc?: string, pic?: Icon, quick?: number, noLog?: boolean): void;
    export let darkenL: object;
    export let promptL: object;
    export let promptAnchorL: object;
    export let promptWrapL: object;
    export let promptConfirm: string;
    export let promptOn: number;
    export let promptUpdateFunc: number;

    export function UpdatePrompt(): void;
    /**
     * Creates a prompt to the user
     * @param content The content in HTML text
     * @param options The list of options, `"br"` for a new line,
     *  a string for a button that just closes the prompt,
     * array of two strings for a custom button, where the first string is the label, and the second string is the code to execute
     * @param updateFunc The function to call to update the prompt, the function itself must update the prompt element
     * @param style The name of a class (classes) to include in the prompt element
     */
    export function Prompt(
        content: string,
        options: Array<string | [string, string]>,
        updateFunc?: () => void,
        style?: string,
    ): void;

    export function ClosePrompt(): void;

    export function ConfirmPrompt(): void;

    export let cssClasses: string[];

    export function addClass(what: string): void;
    function removeClass(what: string): void;

    export function updateClasses(): void;
    /**
     * Generates an HTML string for a button
     * @param prefName The name of a setting
     * @param button The html id for the button
     * @param on The string to use when the button is on
     * @param off The string to use when the button is off
     * @param callback The code to execute, in a string
     * @param invert To invert the displayed button state or not
     */
    export function WriteButton(
        prefName: keyof Prefs,
        button: string,
        on: string,
        off: string,
        callback: string,
        invert?: PseudoBoolean,
    ): string;
    /**
     * Registers a change of button click
     * @param prefName The name of a setting
     * @param button The html id for the button
     * @param on The string to use when the button is on
     * @param off The string to use when the button is off
     * @param invert To invert the displayed button state or not
     */
    export function Toggle(
        prefName: keyof Prefs,
        button: string,
        on: string,
        off: string,
        invert?: PseudoBoolean,
    ): void;

    export function ToggleFancy(): void;

    export function ToggleFilters(): void;

    export function ToggleExtraButtons(): void;

    export function WriteSlider(
        slider: string,
        leftText: string,
        rightText: string,
        startValueFunction: () => number,
        callback: string,
    ): void;
    export let onPanel: string;

    export function ShowPanel(what: string): void;
    export let onMenu: string;

    export function ShowMenu(what: string): void;

    export function sayTime(time: number, detail: -1 | 1 | 2 | 3 | 4): string;

    export function tinyCookie(): string;

    export function ClickTinyCookie(): void;

    export function setVolume(what: number): void;

    export function UpdateMenu(): void;
    export let ascendMeter: object;
    export let ascendNumber: object;
    export let lastPanel: string;
    export let Ticker: string;
    export let TickerAge: number;
    /**
     * A generic modification of the news ticker, used when the ticker is clicked
     */
    export interface TickerEffectClass {
        type: string;
    }
    /**
     * The only in-game ticker modification
     */
    export interface FortuneTickerEffect extends TickerEffectClass {
        type: 'fortune';
        /**
         * The fortune subtype itself
         */
        sub: GenericTieredUpgrade<'fortune'> | 'fortuneGC' | 'fortuneCPS';
    }
    export let TickerEffect: PseudoNull | TickerEffectClass;
    export let TickerN: number;
    export let TickerClicks: number;

    export function UpdateTicker(): void;

    export function getNewTicker(manual: boolean): void;
    export let tickerL: HTMLElement;
    export let tickerBelowL: HTMLElement;
    export let tickerCompactL: HTMLElement;

    export function TickerDraw(): void;

    export let Log: string[];

    export function AddToLog(what: string): void;
    export let vanilla: PseudoBoolean;
    export let last: GameObject | Upgrade | Achievement;
    export let storeToRefresh: number;
    export let priceIncrease: number;
    export let buyBulk: number;
    export let buyMode: number;
    export let buyBulkOld: number;
    export let buyBulkShortcut: number;

    export interface GardenPlant {
        /**
         * The minimum amount of life ticks to go through on tick
         */
        ageTick: number;
        /**
         * The amount of additional ticks of life to go through on tick.
         * A part of the number is added to the age, part amount chosen randomly.
         */
        ageTickR: number;
        /**
         * The names of plants which are displayed to be the plants it mutate to
         */
        children: string[];
        /**
         * The chance of contaminating a neighbor plant
         */
        contam?: number;
        /**
         * The cost of the plant, in second of CpS
         */
        cost: number;
        /**
         * The minimum cost of the plant
         */
        costM: number;
        /**
         * An additional description for the plant, eg. "Immortal"
         */
        detailsStr?: string;
        /**
         * The HTML string of the effects of the plant
         */
        effsStr: string;
        /**
         * True if the plant is a fungus
         */
        fungus?: boolean;
        /**
         * The icon row for the plant in the plant sheet
         */
        icon: number;
        id: number;
        /**
         * True if the plant should never go past the mature stage
         */
        immortal?: PseudoBoolean | boolean;
        /**
         * The internal name of the plant
         */
        key: string;
        /**
         * The displayed name of the plant
         */
        name: string;
        /**
         * The seed icon element
         */
        l: HTMLDivElement;
        /**
         * The amount of ticks required to pass to mature, without effects
         */
        matureBase: number;
        /**
         * The amount of ticks required to pass to mature, with effects
         */
        mature: number;
        /**
         * If true, the plant can't be contaminated
         */
        noContam?: boolean;
        /**
         * Called when the plant has died due to natural causes
         */
        onDie?: (x: number, y: number) => void;
        /**
         * Called when the plant has been harvested
         */
        onHarvest?: (x: number, y: number, age: number) => void;
        /**
         * Called when the plant has been harvested or freezed to death
         */
        onKill?: (x: number, y: number, age: number) => void;

        plantable: boolean;
        /**
         * The flavour text of the upgrade
         */
        q: string;

        unlocked: PseudoBoolean | boolean;
        /**
         * True if the plant is a weed
         */
        weed: boolean;
    }

    export interface GardenSoil {
        /**
         * The multiplier of garden effects
         */
        effMult: number;
        /**
         * The HTML string describing the effects of the soil
         */
        effsStr: string;
        /**
         * The soil icon column in the plant icon sheet
         */
        icon: number;
        id: number;
        /**
         * The internal name of the soil
         */
        key: string;
        /**
         * The displayed name of the soil
         */
        name: string;
        /**
         * The flavour text of the soil
         */
        q: string;
        /**
         * The amount of farms required to unlock the soil
         */
        req: number;
        /**
         * The amount of minutes per tick
         */
        tick: number;
        /**
         * The multiplier of weed amount
         */
        weedMult: number;
    }

    export interface GardenTool {
        /**
         * An HTML string which describes the tool
         */
        desc: string;
        /**
         * A function which generates the description for the tool
         */
        descFunc?: () => string;
        /**
         * Function which is called on usage of the tool
         */
        func: () => void;
        /**
         * The icon column of the tool in the plant icon sheet
         */
        icon: number;
        id: number;
        /**
         * Determines if the tool should be displayed
         */
        isDisplayed?: () => boolean;
        /**
         * Determines if the tool should be displayed as currently in use
         */
        isOn?: () => boolean;
        /**
         * The internal name of the tool
         */
        key: string;
        /**
         * The displayed name of the tool
         */
        name: string;
    }

    interface GardenMinigame extends Minigame {
        name: 'Garden';
        plants: Record<string, GardenPlant>;
        plantsById: GardenPlant[];
        plantsN: number;
        plantsUnlockedN: number;
        /**
         * Counts and returns the amount of unlocked plants
         */
        getUnlockedN(): number;
        /**
         * Randomly unlocks an upgrade based on the rate, affected by seedless to nay
         */
        dropUpgrade(upgrade: string, rate: number): void;
        /**
         * Updates the mature times of plants, affected by seedless to nay
         */
        computeMatures(): void;
        plantContam: object;
        /**
         * Computes the avaliable mutations for a tile
         * @param neighs The amount of neighbors for each plant
         * @param neighsM The amount of mature neighbors for each plant
         * @returns An array of possible mutations, first value is the name of the plant, the second on is the raw chance
         */
        getMuts(neighs: Record<string, number>, neighsM: Record<string, number>): Array<[string, number]>;
        /**
         * Updates the age, power and weed boosts of plant tiles
         */
        computeBoostPlot(): void;
        /**
         * Updates the effects of garden
         */
        computeEffs(): void;
        soils: Record<string, GardenSoil>;
        soilsById: GardenSoil[];
        tools: Record<string, GardenTool>;
        toolsById: GardenTool[];
        /**
         * The whole tilegrid of the garden, first number is plant id, second is the age of the plant
         */
        plot: Array<Array<[number, number]>>;
        /**
         * The tilegrid of garden boosts, first number is age multiplier, second is effect power multiplier, third being the weed multiplier
         */
        plotBoost: Array<Array<[number, number, number]>>;
        /**
         * The size of a tile
         */
        tileSize: 40;
        /**
         * The id of the currently held seed
         */
        seedSelected: number;
        /**
         * The id of the current soil
         */
        soil: number;
        /**
         * The next time the soil can be switched
         */
        nextSoil: number;
        /**
         * The amount of time in seconds before next tick
         */
        stepT: number;
        /**
         * The next time a step will be executed
         */
        nextStep: number;
        /**
         * The amount of harvested plants this ascension
         */
        harvests: number;
        /**
         * The amount of harvested plants all time
         */
        harvestsTotal: number;
        /**
         * The amount of times to attempt mutation
         */
        loopsMult: number;
        /**
         * If true, the plot will be rebuilt next draw
         */
        toRebuild: boolean;
        /**
         * If true, the garden bonuses will be recalculated next logic step
         */
        toCompute: boolean;
        freeze: PseudoBoolean;
        /**
         * Unused @deprecated
         */
        nextFreeze: number;
        /**
         *  Calculates the cost to plant the plant
         */
        getCost(me: GardenPlant): number;
        /**
         * Generates the description of the plant as an HTML string
         */
        getPlantDesc(me: GardenPlant): string;
        /**
         * Determines if the plant can be bought
         */
        canPlant(me: GardenPlant): boolean;
        cursor: PseudoBoolean;
        /**
         * Hides the currently selected seed
         */
        hideCursor(): void;
        /**
         * Shows the currently selected seed
         */
        showCursor(): void;
        /**
         * Generates the tooltip for a soil
         */
        soilTooltip(id: number): () => string;
        /**
         * Generates the tooltip for a seed
         */
        seedTooltip(id: number): () => string;
        /**
         * Generates the tooltip for a tool
         */
        toolTooltip(id: number): () => string;
        /**
         * Generates the tooltip for a tile
         */
        tileTooltip(x: number, y: number): () => string;
        /**
         * Returns the HTML string for the refill tooltip
         */
        refillTooltip(): string;
        buildPanel(): void;
        buildPlot(): void;
        /**
         * Executed when a tile is clicked, responsible dor deselecting the current seed
         */
        clickTile(x: number, y: number): void;
        /**
         * Harvests or plants on the tile
         * @param what The seed to use for planting
         */
        useTool(what: number, x: number, y: number): boolean;
        /**
         * Gets the plot tile under the coordinates, with some sanity checks
         */
        getTile(x: number, y: number): [number, number];
        /**
         * The boundaries of the plot at different levels, the tuple values are
         * Start X, Start Y, End X, End Y
         * Just adding new entries to this won't add new plot sized, since the plot is only drawn up to [6,6]
         */
        plotLimits: Array<[number, number, number, number]>;
        /**
         * Determines if the tile is unlocked
         */
        isTileUnlocked(x: number, y: number): boolean;
        /**
         * Updates `stepT`
         */
        computeStepT(): void;
        /**
         * The amount of times the garden has been sacrificed
         */
        convertTimes: number;
        /**
         * Creates a dialogue which asks if the user wants to sacrifice their garden
         */
        askConvert(): void;
        /**
         * Sacrifices the garden, by locking all the seeds, wiping the plot and giving 10 lumps
         */
        convert(): void;
        /**
         * Harvests all plants
         * @param type If set and not null, filters to only harvesting that type of plant
         * @param mature If set and true, filters to only harvesting mature plants
         * @param mortal If set and true, filters to only harvesting mortal plants
         */
        harvestAll(type?: GardenPlant | null | PseudoNull, mature?: boolean, mortal?: boolean): void;
        /**
         * Harvests a plot space
         * @param manual Unused
         * @returns If the operation was successful
         */
        harvest(x: number, y: number, manual: undefined): boolean;
        /**
         * Unlocks a seed
         * @returns If the operation was successful
         */
        unlockSeed(me: GardenPlant): boolean;
        /**
         * Locks a seed
         * @returns Always true, due to a bug in the code
         */
        lockSeed(me: GardenPlant): true;
        cursorL: HTMLDivElement;
        lumpRefill: HTMLDivElement;
    }

    export interface PantheonSpirit {
        /**
         * Additional description which is only shown if the spirit is slotted
         */
        activeDescFunc?: () => string;
        /**
         * The description of the effects of having the spirit in the first slot in HTML text
         */
        desc1?: string;
        /**
         * The description of the effects of having the spirit in the second slot in HTML text
         */
        desc2?: string;
        /**
         * The description of the effects of having the spirit in the third slot in HTLM text
         */
        desc3?: string;
        /**
         * The text to display after all other descriptions
         */
        descAfter?: string;
        /**
         * The text to display before all other descriptions
         */
        descBefore?: string;

        icon: Icon;

        id: number;

        name: string;

        /**
         * The flavour text of the spirit
         */
        quote: string;
        /**
         * The current slot the spirit is in
         */
        slot: -1 | 0 | 1 | 2;
    }

    interface PantheonMinigame extends Minigame {
        name: 'Pantheon';

        gods: Record<string, PantheonSpirit>;
        godsById: PantheonSpirit[];
        /**
         * A tuple of the current slots, -1 for nothing
         */
        slot: [number, number, number];
        /**
         * Names of the slot gems
         */
        slotNames: string[];
        /**
         * The amount of swaps left
         */
        swaps: number;
        /**
         * The last time a spirit was slotted
         */
        swapT: number;
        /**
         * The amount of frames between the last swap
         */
        lastSwapT: number;
        /**
         * Generates the tooltip function for a spirit
         */
        godTooltip(id: number): () => string;
        /**
         * Generates the tooltip function for a slot
         */
        slotTooltip(id: number): () => string;
        /**
         * Uses up an amount of swaps
         * @param n The amount of swaps to use
         */
        useSwap(n: number): void;
        /**
         * Slots a spirit in
         * @returns If the operation was successful
         */
        slotGod(god: PantheonSpirit, slot: -1 | 0 | 1 | 2): boolean;
        /**
         * The currently dragged spirit
         */
        dragging: PantheonSpirit | false;

        dragGod(what: PantheonSpirit): void;
        dropGod(): void;
        /**
         * The currently hovered slot
         */
        slotHovered: -1 | 0 | 1 | 2;
        hoverSlot(what: -1 | 0 | 1 | 2): void;
        swapsL: HTMLDivElement;
        lumpRefill: HTMLDivElement;
        /**
         * Generates the lump refill tooltip
         */
        refillTooltip(): string;
    }

    export let useSwap: PantheonMinigame['useSwap'] | undefined;
    /**
     * Determines if the pantheon has a god currently equipped
     * @param what The internal name of the god
     */
    export let hasGod: ((what: string) => 1 | 2 | 3 | false) | undefined;

    /**
     * Forcefully unslots a god
     * @param god The internal name of the god
     * @returns If the operation succeeded
     */
    export let forceUnslotGod: ((god: string) => boolean) | undefined;

    export interface GrimoireSpell {
        /**
         * The minimum cost of the spell, in mana
         */
        costMin: number;
        /**
         * The cost of the spell, in raw multiplier of max mana
         */
        costPercent?: number;
        /**
         * The description of the positive effect of the spell, in HTML text
         */
        desc: string;
        /**
         * Called when the spell succeeds, always called if no fail function
         */
        win: () => -1 | void;
        /**
         * The description of the negative effect of the spell, in HTML text
         */
        failDesc?: string;
        /**
         * Called when the spell fails
         */
        fail?: () => -1 | void;
        id: number;
        icon: Icon;
        /**
         * The displayed name for the spell
         */
        name: string;
    }

    interface GrimoireMinigame extends Minigame {
        name: 'Grimoire';
        spells: Record<string, GrimoireSpell>;
        spellsById: GrimoireSpell[];
        /**
         * Updates maximum mana
         */
        computeMagicM(): void;
        /**
         * Computes the fail chance for  aspell
         */
        getFailChance(spell: GrimoireSpell): number;
        /**
         * Casts a spell
         * @param spell The spell to cats
         * @param obj The additional options for the spell
         * @returns If the operation was successful
         */
        castSpell(
            spell: GrimoireSpell,
            obj?: {
                /**
                 * The overridden cost of the spell
                 */
                cost?: number;
                /**
                 * The overridden fail chance of the spell
                 */
                failChanceSet?: number;
                /**
                 * The additional fail chance of the spell
                 */
                failChanceAdd?: number;
                /**
                 * The multiplier of the fail chance of the spell
                 */
                failChanceMult?: number;
                /**
                 * The minimum the fail chance of the spell
                 */
                failChanceMax?: number;
                /**
                 * If true, the spell isn't counted towards the spell count
                 */
                passthrough?: boolean;
            },
        ): boolean;
        /**
         * Calculates the cost of a spell
         */
        getSpellCost(spell: GrimoireSpell): number;
        /**
         * Generates the description of the spell cost
         */
        getSpellCostBreakdown(spell: GrimoireSpell): string;
        /**
         * Generates the tooltip for a spell
         */
        spellTooltip(id: number): () => string;
        magicBarL: HTMLDivElement;
        magicBarFullL: HTMLDivElement;
        magicBarTextL: HTMLDivElement;
        lumpRefill: HTMLDivElement;
        infoL: HTMLDivElement;
        /**
         * Generates and returns the tooltip contents for the lump refill
         */
        refillTooltip(): string;
        magicM: number;
        magic: number;
        spellsCast: number;
        spellsCastTotal: number;
        magicPS: number;
    }

    export interface StocksColors {
        /**
         * The background color of the graph
         */
        bg: string;
        /**
         * The big lines in the background of the graph
         */
        line1: string;
        /**
         * The small lines in the background of the graph
         */
        line2: string;
        /**
         * The stock line when the value goes down
         */
        low: string;
        /**
         * The stock line when the value goes up
         */
        high: string;
        /**
         * The stock line when the it's hovered over
         */
        hightlight: string;
    }

    export interface StocksGood {
        /**
         * True if at least one of the building is owned
         */
        active: boolean;
        /**
         * The building the good is tied to
         */
        building: GameObject;
        /**
         * Name of the company which manages the stock (flavour text)
         */
        company: string;
        /**
         * The current delta of the stock
         */
        d: number;
        /**
         * The description of the stock
         */
        desc: string;
        /**
         * Ticks left until next mode
         */
        dur: number;
        graphIconL: HTMLDivElement;
        /**
         * True if the stock was hidden by the player or it's not active yet
         */
        hidden: boolean;
        icon: Icon;
        id: number;
        l: HTMLDivElement;
        /**
         * The last action done on the stock
         */
        last: number;
        /**
         * The mode of the stock
         */
        mode: number;
        /**
         * The displayed name of the stock
         */
        name: string;
        /**
         * The amount of stocks bought of the good
         */
        stock: number;
        stockBoxL: HTMLDivElement;
        stockL: HTMLSpanElement;
        stockMaxL: HTMLSpanElement;
        /**
         * Name of the stock in 3 letters
         */
        symbol: string;
        symbolNumL: HTMLSpanElement;
        /**
         * The current value of the stock
         */
        val: number;
        /**
         * History of the stock values
         */
        vals: number[];
        viewHideL: HTMLDivElement;
    }

    export interface StocksOffice {
        name: string;
        icon: Icon;
        /**
         * The cost to upgrade the office, first value being the cursor amount,
         * Second one being, cursor level
         */
        cost: [number, number] | PseudoNull;
        /**
         * The description of the office, in HTML text
         */
        desc: string;
    }

    interface StocksMinigame extends Minigame {
        profit: number;
        /**
         * Ticks passed since minigame load
         */
        ticks: number;
        /**
         * The last tick that was drawn
         */
        lastTickDrawn: number;
        /**
         * The amount of seconds per tick
         */
        secondsPerTick: number;
        /**
         * Updates the stock prices
         */
        tick(): void;
        /**
         * The amount of frames since last tick
         */
        tickT: number;
        /**
         * The currently hovered good
         */
        hoverOnGood: number;
        /**
         * A contant which represents the amount of units a vertical pixels represents
         */
        graphScale: number;
        /**
         * Mode of the graph display, 0 for lines, 1 for candles
         */
        graphLines: number;
        /**
         * The color mode of the graph, 0 for white, 1 for black
         */
        graphCols: number;
        /**
         * Updates the graph vertical size
         */
        checkGraphScale(): void;
        colBases: StocksColors[];
        /**
         * Updates the colors of the graph
         */
        setCols(): void;
        cols: StocksColors;
        /**
         * Redraws the graph
         * @param full If set, completely redraws the graph
         */
        drawGraph(full?: boolean): void;
        goods: Record<string, StocksGood>;
        goodsById: StocksGood[];
        /**
         * Generates the tooltip function for a good
         */
        goodTooltip(id: number): () => string;
        /**
         * Generates the tooltip function for a buy/sell button
         */
        tradeTooltip(id: number, n: number): () => string;
        /**
         * Calculates the delta for the stock, in %
         * @param id The id of the stock
         * @param back The degree of age of the stock delta
         */
        goodDelta(id: number, back?: number): number;
        /**
         * Calculates the maximum stock for a good
         */
        getGoodMaxStock(good: StocksGood): number;
        /**
         * Calculates the price for a good
         */
        getGoodPrice(good: StocksGood): number;
        /**
         * Buys a good by id
         * @returns If the operation has succeeded
         */
        buyGood(id: number, n: number): boolean;
        /**
         * Sells a good by id
         * @returns If the operation has succeeded
         */
        sellGood(id: number, n: number): boolean;
        /**
         * Calculates the resting value for a stock
         */
        getRestingVal(id: number): number;
        /**
         * Updates the styles of a good
         */
        updateGoodStyle(id: number): void;
        officeLevel: number;
        offices: StocksOffice[];
        /**
         * Generates the tooltip function for the office
         */
        officeTooltip(): () => string;
        /**
         * The amount of brokers
         */
        brokers: number;
        /**
         * Calculates the maximum amount of brokers
         */
        getMaxBrokers(): number;
        /**
         * Calculates the price of brokers
         */
        getBrokerPrice(): number;
        /**
         * Generates the tooltip functions for brokers
         */
        brokersTooltip(): () => string;
        /**
         * The types of loans, tuple describing the loan type:
         * Loan name, Loan power, Load duration, Loan payback power,
         * Loan payback duration, downpayement (mult of bank) and the quote (flavour text)
         */
        loanTypes: Array<[string, number, number, number, number, number, string]>;
        /**
         * Generates the tooltip function for loans
         */
        loanTooltip(): () => string;
        /**
         * Applies a loan to the player
         * @param interest If true, the interest debuff is applied
         */
        takeLoan(id: number, interest?: boolean): void;
        /** @deprecated */
        getOppSlots(): number;
        /** @deprecated */
        oppTooltip(): () => string;
        /** @deprecated */
        refillTooltip(): string;
        graph: HTMLCanvasElement;
        graphCtx: CanvasRenderingContext2D;
        toRedraw: PseudoBoolean;
    }

    export let Objects: Record<string, GameObject> & {
        Farm: MinigameObject<GardenMinigame>;
        Temple: MinigameObject<PantheonMinigame>;
        'Wizard tower': MinigameObject<GrimoireMinigame>;
        Bank: MinigameObject<StocksMinigame>;
    };
    export let ObjectsById: GameObject[];
    export let ObjectsN: number;
    export let BuildingsOwned: number;
    interface BaselessArt {
        xV?: number;
        yV?: number;
        w?: number;
        h?: number;
        rows?: number;
        x?: number;
        y?: number;
        pic: string | ((building: GameObject, i: number) => string);
        bg: string | ((building: GameObject, ctx: CanvasRenderingContext2D) => void);
        frames?: number;
    }

    interface BaseArt {
        base: string;
        xV?: number;
        yV?: number;
        w?: number;
        h?: number;
        rows?: number;
        x?: number;
        y?: number;
        pic?: string | ((building: GameObject, i: number) => string);
        bg?: string | ((building: GameObject, ctx: CanvasRenderingContext2D) => void);
        frames?: number;
    }

    export type Art = BaselessArt | BaseArt;

    export interface Minigame {
        parent: GameObject;
        /**
         * The name of the minigame
         */
        name: string;
        onResize?(): void;
        /**
         * @returns The save string, can't contain `;` `|` or `,`, it's recommended to not use letters
         */
        save(): string;
        load(save: string): void;
        /**
         * Ran on load, never after
         */
        launch(): void;
        init(div: HTMLDivElement): void;
        effs?: Effects;
        onLevel?(): void;
        onRuinTheFun?(): void;
        draw?(): void;
        logic?(): void;
    }

    class GameObject {
        /**
         * Creates a new building
         * @param name Name of the building
         * @param commonName Additional string for the building, split by |:
         * the name of the building,
         * then in plural,
         * how the building produced the cookies,
         * the effect from sugar lumps,
         * then in plural
         * @param desc Description of the building
         * @param icon Big icon (that shows up in store)'s row
         * @param iconColumn Icon column for the building
         * @param art Building's art
         * @param price Unused
         * @param cpsFunc The function to calculate CPS
         * @param buyFunction The function which gets called when it's bought
         */
        constructor(
            name: string,
            commonName: string,
            desc: string,
            icon: number,
            iconColumn: number,
            art: Art,
            price: number,
            cps: (me: GameObject) => number,
            buyFunction: (this: GameObject) => void,
        );
        /**
         * The way the building makes cookies
         */
        actionName: string;
        /**
         * The amount of buildings owned, including free ones
         */
        amount: number;
        /**
         * The art the building uses
         */
        art: Art;
        /**
         * The CpS the building generates without any boosts
         */
        baseCps: number;
        /**
         * The price the building generates without any boosts
         */
        basePrice: number;
        /**
         * The amount of times a building has been bought, including free buys
         */
        bought: number;
        /**
         * The current price displayed in store
         */
        bulkPrice: number;
        /**
         * Buys a building
         * @param amount Amount of buildings to buy, defaults to `Game.buyBulk`
         */
        buy(amount: number): void | 0;
        /**
         * Buys a building for free, while increasing the price
         * @param amount Amount of buildings to buy
         */
        buyFree(amount: number): void;
        /**
         * Buys a building for free, while *not* increasing the price
         * @param amount Amount of buildings to get
         */
        getFree(amount: number): void;
        /**
         * Sells buildings and refunds a part of the cost, see `getSellMultiplier` for the exact multiplier
         * @param amount The amount of buildings to sell
         */
        sell(amount: number, bypass: undefined): void;
        /**
         * Sells buildings without refunding the cookies
         * @param amount The amount of buildings to sacrifice
         */
        sacrafice(amount: number): void;
        /**
         * The function that gets called on buy
         */
        buyFunction: (this: GameObject) => void;
        /**
         * The canvas for art
         */
        canvas: HTMLCanvasElement;
        /**
         * The context from canvas for the art
         */
        ctx: CanvasRenderingContext2D;
        /**
         * The function to calculate CPS
         * @param me The building itself
         */
        cps: (me: GameObject) => number;
        /**
         * The visual description for the building
         */
        desc: string;
        /**
         * The visual name for the building(an html string)
         */
        displayName: string;
        /**
         * Redraws the art
         */
        draw(): void | false;
        /**
         * Resets `this.pics`, see `draw` for actual redrawing
         */
        redraw(): void;
        /**
         * Updates store listing and art buttons
         */
        rebuild(): void;
        /**
         * Updates price, bulk price and art appearance, calls `rebuild`
         */
        refresh(): void;
        /**
         * The function to get called, well, each frame
         */
        eachFrame: (() => void) | PseudoNull;
        /**
         * The description of how the level changes the building, used for one lump, where [X] is the level
         */
        extraName: string;
        /**
         * The description of how the level changes the building, used for multiple lumps, where [X] is the level
         */
        extraPlural: string;
        /**
         * The fortune upgrade tied with the building
         */
        fortune: TieredUpgradeClass<'fortune'> | PseudoNull;
        /**
         * The amount of buildings gotten for free
         */
        free: number;
        /**
         * Convert buildings to free buildings
         * @param amount The amount of buildings to convert
         */
        getFreeRanks(amount: number): void;
        /**
         * Get the current price of building
         * @param n Unused parameter
         */
        getPrice(n: number): number;
        /**
         * Get the price of buying an amount of buildings
         * @param amount The amount of buildings to buy
         */
        getSumPrice(amount: number): number;
        /**
         * Get the cookies gained by selling an amount of buildings
         * @param amount The amount of buildings to sell
         */
        getReverseSumPrice(amount: number): number;
        /**
         * Gets the sell multiplier and returns it
         * As of 2.029, the multiplier is 25% * (1 + aura multiplier of Earth Shatterer)
         */
        getSellMultiplier(): number;
        /**
         * The highest amount of buildings owned this run
         */
        highest: number;
        /**
         * The row to be used in the big icon
         */
        icon: number;
        /**
         * The column to be used for the icon (Tier upgrade icons are derived from this)
         */
        iconColumn: number;
        /**
         * The function that determines the buildings big icon, overridden by business day
         */
        iconFunc?: (type: undefined) => [number, number];
        /**
         * Buildings id, 0 based
         */
        id: number;

        /**
         * Buildings listing in store
         */
        l: HTMLDivElement;

        level: number;

        levelAchiev10: Achievement;

        levelTooltip(): string;

        levelUp(): () => void;
        /**
         * If the building is visually locked, is considered unlocked after CBTA is higher than the base cost
         */
        locked: PseudoBoolean;

        minigame?: Minigame;

        minigameLoaded: boolean;

        minigameLoading?: boolean;

        minigameSave: string;

        minigameName: string;

        minigameUrl: string;

        onMinigame: number;

        switchMinigame(on: number): void;

        mouseOn: boolean;

        mousePos: [number, number];
        /**
         * Mutes or unmutes the building, depending on `val`
         * @param val The new muted status, 0 for unmuted, 1 for muted
         */
        mute(val: number): void;
        muted: number;

        /**
         * Same as id
         */
        n: number;

        name: string;

        /**
         * The singular pictures used in the art
         */
        pics: Array<{
            frame: number;
            id: number;
            pic: string;
            x: number;
            y: number;
            z: number;
        }>;
        single: string;
        plural: string;

        price: number;

        productionAchievs: ProductionAchievementRequirement[];
        /**
         * Amount of CpS a building produces (as of 2.031, `this.cps` * level bonus)
         */
        storedCps: number;
        /**
         *  Amount of CpS a building produces, multiplied by amount (as of 2.027, `this.cps` * level bonus)
         */
        storedTotalCps: number;

        grandma?: GrandmaSynergyClass;

        synergies: Array<SynergyUpgradeClass<string>>;

        tieredAchievs: Record<string | number, TieredAchievementClass>;

        tieredUpgrades: Record<string | number, TieredUpgradeClass>;
        /**
         * Generates a tooltip to show on the shop listing.
         * @return A string with the html elements
         */
        tooltip: () => string;
        /**
         * Total cookies produced by the building
         */
        totalCookies: number;

        vanilla: PseudoBoolean;
    }
    export { GameObject as Object };

    export interface MinigameObject<T extends Minigame> extends GameObject {
        minigame: T;
    }

    export function DrawBuildings(): void;
    export function sortSprites(a: any, b: any): number;
    export function sortSpritesById(a: any, b: any): number;

    export function modifyBuildingPrice(building: string, price: number): number;

    export function storeBulkButton(id: number): void;

    export function BuildStore(): void;

    export function RefreshStore(): void;

    export function ComputeCps(base: number, mult: number, bonus: number): number;
    export function isMinigameReady(me: GameObject): void;
    export let scriptBindings: undefined[] & Record<string, GameObject>;

    export function LoadMinigames(): void;

    export function scriptLoaded(who: GameObject, script: string): void;

    export function magicCpS(what: unknown): number;
    export let SpecialGrandmaUnlock: number;
    export let foolObjects: FoolBuilding[];

    export function ClickProduct(what: GameObject): void;

    export function mutedBuildingTooltip(id: number): () => string;
    export let upgradesToRebuild: number;
    export let Upgrades: undefined[] & Record<string, Upgrade>;
    export let UpgradesById: Upgrade[];
    export let UpgradesN: number;
    export let UpgradesInStore: Upgrade[];
    export let UpgradesOwned: number;

    export type UpgradePool = '' | 'prestige' | 'tech' | 'cookie' | 'debug' | 'toggle' | 'prestigeDecor' | 'unused';
    export class Upgrade {
        /**
         * Creates a new generic upgrade
         * @param name The name of the upgrade
         * @param desc The description of the upgrade
         * @param price The price in cookies for the upgrade
         * @param icon The Icon to use for the upgrade
         * @param buyFunction The function which gets called when the upgrade bought
         */
        constructor(name: string, desc: string, price: number, icon: Icon, buyFunction?: () => void);

        /**
         * The description of the upgrade without auto-adjusted text
         */
        baseDesc: string;
        /**
         * The description of the upgrade with auto-adjusted text
         */
        desc: string;
        /**
         * The function to generate the upgrade descroption
         */
        descFunc?: () => string;
        /**
         * The price of the upgrade without the cost multipliers
         */
        basePrice: number;

        unlocked: PseudoBoolean | boolean;

        bought: PseudoBoolean | boolean;

        /**
         * The building tie for a tiered upgrade, is (pseudo) null in non-tiered upgrades
         */
        buildingTie: GameObject | PseudoNull;

        icon: Icon;

        iconFunction: (() => Icon) | PseudoNull;

        id: number;

        name: string;
        /**
         * The order the upgrade appears in the upgrade list, higher ids have priorities
         */
        order: number;
        /**
         * The parents of the heavenly upgrade, present on all upgrades
         */
        parents: Upgrade[];
        /**
         * The type of the upgrade, "prestigeDecor" and "unused" are unused, "" is the default
         */
        pool: UpgradePool;
        /**
         * The power of a cookie upgrade, present as `0` on Non-cookie upgrades
         */
        power: number | ((me: this) => number);
        /**
         * The price of the upgrade, this is visual only, so the lump spending must be manually implemented
         */
        priceLumps: number;

        /** @deprecated */
        techUnlock: undefined[];

        tier: string | number;

        type: 'upgrade';

        unlockAt: UnlockRequirement | PseudoNull;

        vanilla: PseudoBoolean;

        /**
         * If true, it is considered a pseudo cookie
         * A pseudo cookie upgrade which represents an upgrade which doesn't have to be in the cookie pool but its power is calculated in cookie CpS bonuses
         */
        pseudoCookie?: PseudoBoolean | boolean;
        /**
         * If true, the upgrade is always unlocked, across ascensions
         */
        lasting?: PseudoBoolean | boolean;
        /**
         * If true, the upgrade cannot be put inside a permanent slot
         */
        noPerm?: PseudoBoolean | boolean;
        /**
         * The function that gets triggered on click, vaults or buys the upgrade
         */
        click(e: MouseEvent): void;
        /**
         * Buys the upgrade and opens the selector if the upgrade is a selector switch
         * @param bypass If true, ignores `clickFunction`
         */
        buy(bypass: PseudoBoolean | boolean): PseudoBoolean;
        /**
         * Function triggered when the upgrade is attempted to be bought, return value specifies if the upgrade is allowed to be bough
         */
        clickFunction?: () => boolean;
        /**
         * Called everytime the upgrade is attempted to be bought, originally designed for permaslots
         */
        activateFunction?: () => void;
        /**
         * The function that gets triggered on buy
         */
        buyFunction: (() => void) | undefined;

        /**
         * Calculates the price for the upgrade
         */
        getPrice(): number;
        priceFunc?: () => number;

        canBuy(): boolean;
        canBuyFunc?: () => boolean;

        isVaulted(): boolean;
        vault(): void;
        unvault(): void;
        /**
         * Gives the upgrade for free
         */
        earn(): void;
        /**
         * Takes the upgrade away, but doesn't lock it
         */
        unearn(): void;
        /**
         * Takes away the upgrade and locks it
         */
        lose(): void;
        /**
         * Toggles the state of the upgrade
         */
        toggle(): void;
    }

    export function storeBuyAll(): void | false;

    export let vault: number[];

    export function CountsAsUpgradeOwned(pool: string): boolean;

    export function RequiresConfirmation(upgrade: Upgrade, prompt: string): void;
    /**
     * Unlocks an upgrade
     * @param what The name of the upgrade to unlock
     */
    export function Unlock(what: string | string[]): void;
    /**
     * Locks an upgrade
     * @param what The name of the upgrade to lock
     */
    export function Lock(what: string | string[]): void;
    /**
     * Determines if the upgrade is owned
     * @param what The name of the upgrade
     */
    export function Has(what: string): PseudoBoolean;
    /**
     * Determines if the upgrade is unlocked
     * @param what The name of the upgrade
     */
    export function HasUnlocked(what: string): PseudoBoolean;

    export function RebuildUpgrades(): void;
    export interface UnlockRequirement {
        /**
         * The amount of cookies required to unlock the cookie (usually price/20)
         */
        cookies: number;
        /**
         * The name of the cookie
         */
        name: string;
        /**
         * The name of the upgrade or achievement required to unlock the cookie
         */
        require?: string;
        /**
         * The cookie required to unlock the cookie
         */
        season?: string;
    }
    export let UnlockAt: UnlockRequirement[];
    export interface CookieUpgrade {
        pool: 'cookie';
    }
    export interface CookieUpgradeParameter {
        name: string;
        power: number;
        /**
         * The name of cookie required to unlock the cookie
         */
        require?: string;
        /**
         * The season required to unlock the cookie
         */
        season?: string;
    }
    /**
     * Creates a cookie upgrade
     * @factory
     */
    export function NewUpgradeCookie(obj: CookieUpgradeParameter): CookieUpgrade;
    export interface Tier {
        name: string;
        /**
         * The amount of buildings required to unlock the associated upgrade
         */
        unlock: number;
        /**
         * The amount of buildings required to unlock the associated achievement
         */
        achievUnlock: number;
        /**
         * The hex of the color to use (# required)
         */
        color: string;
        iconRow: number;

        /**
         * The base price of a tiered upgrade, multiplied with building base price for true value
         */
        price: number;
        /**
         * The name of the upgrade to be required to unlock the tier (Only checked for synergy upgrades)
         */
        req?: string;

        /**
         * If true, Upgrades with this tier won't count towards tiered CpS multiplier
         */
        special: PseudoBoolean | boolean;
        upgrades: GenericTieredUpgrade[];
    }
    export let Tiers: Record<string | number, Tier>;
    export function GetIcon(type: string, tier: string | number): Icon;
    /**
     * Sets the last created achievement/upgrade tier and building tie, converting it to a generic tiered upgrade/achievement
     * @param building The building name to associate the achievement/upgrade with
     * @param tier The tier to use
     */
    export function SetTier(building: string, tier: string | number): void;
    export function MakeTiered(upgrade: Upgrade, tier: number | string, col: number): void;
    /**
     * A generic tiered upgrade, which represents any upgrade which has a tier, mouses, cursors, kittens, etc,
     * (Different from `TieredUpgradeClass`, since that interface only applies to building tiered upgrades, names based from the original Cookie Clicker code)
     */
    export interface GenericTieredUpgrade<Tier extends string | number = string | number> extends Upgrade {
        pool: '';
        tier: Tier;
    }
    export interface KittenUpgrade<Tier extends string | number = string | number> extends GenericTieredUpgrade<Tier> {
        // Pseudo-true
        kitten: 1 | true;
    }
    /**
     * A tiered upgrade which represents any upgrade which upgrades a building
     * (Different from `GenericTieredUpgrade`, since that interface applies to all upgrades which are tiered, names based from the original Cookie Clicker code)
     */
    export interface TieredUpgradeClass<Tier extends string | number = string | number>
        extends GenericTieredUpgrade<Tier> {
        buildingTie1: GameObject;
        buildingTie: GameObject;
    }
    /**
     * Creates a tiered upgrade based on the building
     * @factory
     * @param name The name of the upgrade to be created
     * @param desc The (full) description for the upgrade
     * @param building The building name to use
     * @param tier The tier to use
     */
    export function TieredUpgrade<Tier extends string | number>(
        name: string,
        desc: string,
        building: string,
        tier: Tier,
    ): TieredUpgradeClass<Tier>;

    export interface SynergyUpgradeClass<Tier extends string | number> extends Upgrade {
        pool: '';
        buildingTie1: GameObject;
        buildingTie2: GameObject;
        tier: Tier;
    }

    /**
     * Creates a synergy upgrade based on the building
     * @factory
     * @param name The name of the upgrade to be created
     * @param desc The description for the upgrade (Commonly just the quote due to automatically generated first part)
     * @param building1 The first building name to use
     * @param building2 The second building name to use
     * @param tier The tier to be used in the upgrade
     */
    export function SynergyUpgrade<Tier extends string | number>(
        name: string,
        desc: string,
        building1: string,
        building2: string,
        tier: Tier,
    ): SynergyUpgradeClass<Tier>;

    /**
     * Computes the multiplier for the building from the upgrades
     */
    export function GetTieredCpsMult(me: GameObject): number;
    export function UnlockTiered(me: Upgrade): void;
    /**
     * The list of the names of grandma synergies
     */
    export let GrandmaSynergies: string[];
    export interface GrandmaSynergyClass extends Upgrade {
        pool: '';
        buildingTie: GameObject;
    }
    /**
     * Creates a grandma upgrade based on the building
     * @factory
     * @param name The name of the upgrade to be created
     * @param desc The quote(not the full description, it's generated automatically) to include in the upgrade
     * @param building The building name to use
     */
    export function GrandmaSynergy(name: string, desc: string, building: string): GrandmaSynergyClass;
    export interface SelectorSwitchChoice {
        name: string;
        selected?: boolean | PseudoBoolean;
        id?: number;
        order?: number;
        icon: Icon;
        /**
         * True to make a line
         */
        div?: boolean;
    }
    export interface SelectorSwitch extends Upgrade {
        pool: 'toggle';
        choicesFunction: () => SelectorSwitchChoice[];
        choicesPick: (id: number) => void;
    }
    /**
     * A layered switch is a switch which unlocks another upgrade when bought
     */
    export interface LayeredSwitch extends Upgrade {
        pool: 'toggle';
        toggleInto: keyof typeof Upgrades | PseudoNull;
    }

    export interface TimerSwitch extends Upgrade {
        pool: 'toggle';
        /**
         * Required to stay in the store after it's bought
         */
        displayFuncWhenOwned: () => string;
        /**
         * Should return the amount of time left, -1 for no time
         */
        timerDisplay?: () => number;
    }

    export interface SeasonSwitch extends TimerSwitch {
        /**
         * The name of the season to trigger
         */
        season: string;
        buyFunction: () => void;
        clickFunction: () => boolean;
    }

    export let baseResearchTime: number;
    /**
     * Sets the next research
     * @param what The name of the upgrade to research
     * @param time Unused
     */
    export function SetResearch(what: string, time?: never): void;
    export function getPledgeDuration(): number;
    /**
     * The names of all halloween cookies
     */
    export let halloweenDrops: string[];
    /**
     * The amount of halloween cookies bought
     */
    export function GetHowManyHalloweenDrops(): number;
    /**
     * The names of all heart cookies
     */
    export let heartDrops: string[];
    /**
     * The amount of heart cookies bought
     */
    export function GetHowManyHeartDrops(): number;
    export let seasonTriggerBasePrice: number;
    /**
     * The names of all the eggs
     */
    export let easterEggs: string[];
    /**
     * The names of all normal eggs
     */
    export let eggDrops: string[];
    /**
     * The names of all rare eggs
     */
    export let rareEggDrops: string[];
    /**
     * The amount of heart cookies bought
     */
    export function GetHowManyEggs(): number;

    export function DropEgg(failRate: number): void;

    export function PermanentSlotIcon(slot: number): Icon;

    export function AssignPermanentSlot(slot: number): void;
    export let SelectingPermanentUpgrade: number;

    export function PutUpgradeInPermanentSlot(upgrade: Upgrade, slot: number): void;

    /**
     * A generic cosmetic which the game uses, can be chosen by the player
     */
    export interface ChoiceCosmetics {
        /**
         * The picture to use
         */
        pic: string;
    }

    /**
     * Milk selector milks
     */
    export let MilksByChoice: Record<number, ChoiceCosmetics>;
    export let BGsByChoice: Record<number, ChoiceCosmetics>;

    export function loseShimmeringVeil(context: string): void | false;

    export interface Season {
        name: string;
        /**
         * The message to display when the season starts
         */
        start: string;
        /**
         * The message to display when the season ends
         */
        over: string;
        /**
         * The name of the upgrade which triggers the season
         */
        trigger: string;
        /**
         * The upgrade which triggers the season
         */
        triggerUpgrade: SeasonSwitch;
    }

    export let seasons: Record<string, Season>;

    export function listTinyOwnedUpgrades(arr: Upgrade[]): string;

    export let santaDrops: string[];

    export function GetHowManySantaDrops(): number;

    export let reindeerDrops: string[];

    export function GetHowManyReindeerDrops(): number;

    export let seasonDrops: string[];

    export function saySeasonSwitchUses(): string;

    export function computeSeasonPrices(): number;

    export function computeSeasons(): void;

    export function getSeasonDuration(): number;

    export let UpgradesByPool: Record<UpgradePool | 'kitten', Upgrade[]>;
    export interface HeavenlyUpgrade extends Upgrade {
        pool: 'prestige';
        posX: number;
        posY: number;
        /**
         * The function that determines if the heavenly upgrade should be shown
         */
        showIf?: () => boolean;
    }

    export let PrestigeUpgrades: HeavenlyUpgrade[];

    export let goldenCookieUpgrades: string[];

    export let cookieUpgrades: Upgrade[];
    /**
     * An object documenting the positions of heavenly upgrades
     */
    export let UpgradePositions: Record<number, [number, number]>;

    export let Achievements: Achievement[];

    export let AchievementsById: Achievement[];
    export let AchievementsN: number;
    export let AchievementsOwned: number;

    export type AchievementPool = 'normal' | 'shadow' | 'dungeon';

    export class Achievement {
        /**
         * Creates an achievement
         * @param name The name of the achievement
         * @param desc The HTML string of the description
         * @param icon The icon of the achievement
         */
        constructor(name: string, desc: string, icon: Icon);

        id: number;
        name: string;
        /**
         * The description of the upgrade without auto-adjusted text
         */
        baseDesc: string;
        /**
         * The description of the upgrade with auto-adjusted text
         */
        desc: string;
        icon: Icon;
        won: PseudoBoolean;
        /** Unused @deprecated */
        disabled: PseudoBoolean;
        /**
         * The place of the achievement in the achievement list
         */
        order: number;
        pool: AchievementPool;
        vanilla: PseudoBoolean;
        type: 'achievement';
        /**
         * Called when the achievement crate is clicked, calls `clickFunction`
         */
        click: () => void;
        /**
         * Called when the achievement crate is clicked
         */
        clickFunction?: () => void;
        /**
         * Toggles the achievement state
         */
        toggle(): void;
    }

    /**
     * Wins an achievement
     * @param what The name of the achievement to win
     */
    export function Win(what: string | string[]): void;
    /**
     * Loses an achievement
     * @param what The name of the achievement to remove
     */
    export function RemoveAchiev(what: string): void;
    /**
     * Determines if the achievement normal
     */
    export function CountsAsAchievementOwned(pool: AchievementPool): boolean;
    /**
     * Determines if the achievement is won
     * @param what The name of the achievement
     */
    export function HasAchiev(what: string): PseudoBoolean;
    export interface TieredAchievementClass<Tier extends string | number = string | number> extends Achievement {
        tier: Tier;
        buildingTie: GameObject;
    }
    /**
     * Creates a tiered achievement
     * @param name The name of the achievement
     * @param desc The whole description of the achievement
     * @param building The name of the building
     * @param tier The tier of the achievement
     * @factory
     */
    export function TieredAchievement<Tier extends string | number>(
        name: string,
        desc: string,
        building: string,
        tier: Tier,
    ): TieredAchievementClass<Tier>;

    /**
     * The object which defines a production achievement requirement
     */
    export interface ProductionAchievementRequirement {
        /**
         * The amount of cookies required to get the achievement
         */
        pow: number;
        achiev: Achievement;
    }

    /**
     * Creates a production achievement
     * @param name The name of the achievement
     * @param building The name of the building
     * @param tier The production tier of the achievement, 1
     * @param q The quote in the description of the achievement
     * @param mult An additional multiplier to the auto generated requirement
     * @factory
     */
    export function ProductionAchievement(
        name: string,
        building: string,
        tier: number,
        q?: string,
        mult?: number,
    ): Achievement;

    export let thresholdIcons: number[];
    export interface BankAchievementClass extends Achievement {
        /**
         * The amount of cookies required to be baked this ascension to get this achievement
         */
        treshold: number;
    }

    export let BankAchievements: BankAchievementClass[];
    /**
     * Creates a new bank achievement
     * @param name The name of the achievement
     * @param q The quote to use in the achievement description
     */
    export function BankAchievement(name: string, q?: string): BankAchievementClass;

    export interface CpsAchievementClass extends Achievement {
        /**
         * The amount of raw CpS required to get this achievement
         */
        treshold: number;
    }

    export let CpsAchievements: CpsAchievementClass[];
    /**
     * Creates a new cps achievement
     * @param name The name of the achievement
     * @param q The quote to use in the achievement description
     */
    export function CpsAchievement(name: string, q?: string): CpsAchievementClass;

    export interface Buff {
        name: string;
        desc: string;
        icon: Icon;
        /**
         * The amount of time this buff exists for, in frames
         */
        time: number;
        /** @deprecated */
        visible?: boolean;
        /**
         * If true, when a buff it gained when it already exists, adds the buff times together
         */
        add?: boolean;
        /**
         * If true, when a buff it gained when it already exists, use the maximum buff time of the two
         */
        max?: boolean;
        onDie?: () => void;
        multCpS?: number;
        multClick?: number;
        /**
         * If 1, show the good aura, if 2, show the bad aura
         */
        aura?: 1 | 2;
        /**
         * Rarely used, as of v2.031 only Cursed Finger uses this
         */
        pow?: number;
    }
    export let buffs: Buff[];
    export let buffsN: number;
    export let buffsL: HTMLDivElement;

    export function gainBuff(type: string, time: number, arg1: number, arg2: number, arg3: number): Buff;
    /**
     * Returns 0 if there is no buff in effect with this name; else, returns it
     */
    export function hasBuff(what: string): number | Buff;

    export function updateBuffs(): void;
    export function killBuff(what: string): void;

    export function killBuffs(): void;

    export let buffTypes: buffType[];

    export let buffTypesByName: undefined[] & Record<string, buffType>;
    export let buffTypesN: number;
    export class buffType {
        constructor(name: string, func: (time: number, arg1?: number, arg2?: number, arg3?: number) => Buff);
        name: string;
        func: (time: number, arg1?: number, arg2?: number, arg3?: number) => Buff;
        id: number;
        vanilla: PseudoBoolean;
    }

    export function UpdateGrandmapocalypse(): void;
    export let wrinklerHP: number;

    export interface Wrinkler {
        id: number;
        close: number;
        sucked: number;
        phase: number;
        x: number;
        y: number;
        r: number;
        hurt: number;
        hp: number;
        selected: PseudoBoolean;
        type: number;
    }

    export let wrinklers: Wrinkler[];

    export function getWrinklersMax(): number;

    export function ResetWrinklers(): void;

    export function CollectWrinklers(): void;
    export let wrinklerSquishSound: number;

    export function playWrinklerSquishSound(): void;
    export function SpawnWrinkler(me?: Wrinkler): Wrinkler | boolean;
    export function PopRandomWrinkler(): Wrinkler | boolean;

    export function UpdateWrinklers(): void;

    export function DrawWrinklers(): void;

    interface WrinklerSave {
        amount: number;
        number: number;
        shinies: number;
        amountShinies: number;
    }

    export function SaveWrinklers(): WrinklerSave;

    export function LoadWrinklers(amount: number, number: number, shinies: number, amountShinies: number): void;
    export let specialTab: string;
    export let specialTabHovered: string;

    export let specialTabs: string[];

    export function UpdateSpecial(): void;

    export let santaLevels: string[];

    export function UpgradeSanta(): void;

    export interface DragonLevel {
        name: string;
        /**
         * Description of the effects of leveling up the dragon, in HTML text
         */
        action: string;
        /**
         * The picture number in the dragon pictures
         */
        pic: number;
        /**
         * Determines if the level can be bought
         */
        cost: () => boolean;
        /**
         * Does all the spending, spending cookies, sacrificing buildings, etc.
         */
        buy: () => void;
        /**
         * Generates the cost description in HTML text
         */
        costStr: () => string;
    }

    export interface DragonAura {
        name: string;
        /**
         * Description of the aura, in HTML text
         */
        desc: string;
        pic: Icon;
    }

    export let dragonLevels: DragonLevel[];
    // Not an array
    export let dragonAuras: Record<number, DragonAura>;

    export function hasAura(what: string): boolean;

    export function auraMult(what: string): number;

    export function SelectDragonAura(slot: number, update: boolean): void;
    export let SelectingDragonAura: PseudoBoolean;

    export function SetDragonAura(aura: number, slot: number): void;

    export function DescribeDragonAura(aura: number): void;

    export function UpgradeDragon(): void;

    export function ClickSpecialPic(): void;

    export function ToggleSpecialMenu(on: boolean): void;

    export function DrawSpecial(): void;

    interface Milk {
        name: string;
        pic: string;
        icon: [number, number];
    }
    /**
     * Achievement based milks, `pic` is used if milk selector is automatic
     */
    export let Milks: Milk[];
    export let Milk: Milk;
    export let mousePointer: number;
    export let cookieOriginX: number;
    export let cookieOriginY: number;

    export function DrawBackground(): void;

    export function RuinTheFun(silent: boolean): string;

    export function SetAllUpgrades(on: boolean): void;

    export function SetAllAchievs(on: boolean): void;

    export function GetAllDebugs(): void;

    export function MaxSpecials(): void;

    export function SesameReset(): void;
    export let debugTimersOn: number;
    export let sesame: number;

    export function OpenSesame(): void;

    export function EditAscend(): void;

    export let debuggedUpgradeCpS: number[];

    export let debuggedUpgradeCpClick: number[];

    export let debugColors: string[];

    export function DebugUpgradeCpS(): void;
    export let Background: CanvasRenderingContext2D;
    export let LeftBackground: CanvasRenderingContext2D;
    export let defaultBg: string;
    export let choiceSelectorOn: number;
    export let choiceSelectorChoices: SelectorSwitchChoice[];
    export let choiceSelectorSelected: number;

    export interface Mod {
        init?: () => void;
        save?: () => string;
        load?: (data: string) => void;
        id?: number;
    }

    export let mods: Record<string, Mod>;
    export let sortedMods: Mod[];
    export let modSaveData: Record<string, string>;
    export let modHooks: Record<string, Array<() => unknown>>;
    export let modHookNames: string[];

    export function registerMod(id: string, obj: Mod): void;

    export function registerHook(
        hook: 'cps' | 'cookiesPerClick',
        func: ((num: number) => number) | Array<(num: number) => number>,
    ): void;
    export function registerHook(hook: 'reset', func: ((hard: boolean) => void) | Array<(hard: boolean) => void>): void;
    export function registerHook(hook: 'ticker', func: (() => string[]) | Array<() => string[]>): void;
    export function registerHook(hook: string, func: (() => void) | Array<() => void>): void;
}
