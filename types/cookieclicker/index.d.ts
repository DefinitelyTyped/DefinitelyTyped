// Type definitions for non-npm package cookieclicker 2.029
// Project: https://orteil.dashnet.org/cookieclicker/
// Definitions by: Lubomir <https://github.com/TheGLander>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The Game object, generated automatically
 */

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
    Load: (assets: IterableIterator<string>) => void;
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
    export function Timeout(): DOTHIS;
    export function Resume(): DOTHIS;
    export function Init(): DOTHIS;
    export function Logic(): DOTHIS;
    export function Draw(): DOTHIS;
    export function Loop(): DOTHIS;
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
    export function getFps(): DOTHIS;
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
    export let permanentUpgrades: Array<any> & DOTHIS2;
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
    export let customChecks: (() => void)[];
    export let customInit: (() => void)[];
    export let customLogic: (() => void)[];
    export let customDraw: (() => void)[];
    /**
     *Is called on *all* save type, so it's unreliable to save via this
     */
    export let customSave: (() => void)[];
    export let customLoad: (() => void)[];
    export let customReset: (() => void)[];
    /**
     * Functions must return iterables of strings, so they can be added to the news ticker pool
     */
    export let customTickers: (() => IterableIterator<string>)[];
    /**
     * Function must return a multiplicative multiplier to CpS
     */
    export let customCps: (() => number)[];
    /**
     * Function must return a multiplicative multiplier to CpS
     */
    export let customCpsMult: (() => number)[];
    /**
     * Function must return an additive multiplier to the mouse
     */
    export let customMouseCps: (() => number)[];
    /**
     * Function must return a multiplicative multiplier to the mouse
     */
    export let customMouseCpsMult: (() => number)[];
    export let customCookieClicks: (() => void)[];
    /**
     * Is triggered when the game is loaded for the first time, useless @deprecated
     */
    export let customCreate: (() => void)[];
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
    export function bakeryNamePromptRandom(): DOTHIS;
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
    export let grandmaNames: Array<any> & DOTHIS2;
    export let customGrandmaNames: Array<any> & DOTHIS2;
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
    export function ExportSave(): DOTHIS;
    export function ImportSave(): DOTHIS;
    export function ImportSaveCode(): DOTHIS;
    export function FileSave(): DOTHIS;
    export function FileLoad(): DOTHIS;
    export let toSave: boolean;
    export function WriteSave(): DOTHIS;
    export function salvageSave(): DOTHIS;
    export function LoadSave(): DOTHIS;
    export function Reset(): DOTHIS;
    export function HardReset(): DOTHIS;
    export let onCrate: number;
    export function setOnCrate(): DOTHIS;
    export function crate(): DOTHIS;
    export function crateTooltip(): DOTHIS;
    export function costDetails(): DOTHIS;
    export let HCfactor: number;
    export function HowMuchPrestige(): DOTHIS;
    export function HowManyCookiesReset(): DOTHIS;
    export let gainedPrestige: number;
    export function EarnHeavenlyChips(): DOTHIS;
    export function GetHeavenlyMultiplier(): DOTHIS;
    export let ascensionModes: object;
    export let ascendMeterPercent: number;
    export let ascendMeterPercentT: number;
    export let ascendMeterLevel: number;
    export let nextAscensionMode: number;
    export function UpdateAscensionModePrompt(): DOTHIS;
    export function PickAscensionMode(): DOTHIS;
    export function UpdateLegacyPrompt(): DOTHIS;
    export let ascendl: object;
    export let ascendContentl: object;
    export let ascendZoomablel: object;
    export let ascendUpgradesl: object;
    export let OnAscend: number;
    export let AscendTimer: number;
    export let AscendDuration: number;
    export let AscendBreakpoint: number;
    export function UpdateAscendIntro(): DOTHIS;
    export let ReincarnateTimer: number;
    export let ReincarnateDuration: number;
    export function UpdateReincarnateIntro(): DOTHIS;
    export function Reincarnate(): DOTHIS;
    export function GiveUpAscend(): DOTHIS;
    export function Ascend(): DOTHIS;
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
    export function UpdateAscend(): DOTHIS;
    export function AscendRefocus(): DOTHIS;
    export let SelectedHeavenlyUpgrade: number;
    export function PurchaseHeavenlyUpgrade(): DOTHIS;
    export function BuildAscendTree(): DOTHIS;
    export let lumpMatureAge: number;
    export let lumpRipeAge: number;
    export let lumpOverripeAge: number;
    export let lumpCurrentType: number;
    export function lumpTooltip(): DOTHIS;
    export function computeLumpTimes(): DOTHIS;
    export function loadLumps(): DOTHIS;
    export function gainLumps(): DOTHIS;
    export function clickLump(): DOTHIS;
    export function harvestLumps(): DOTHIS;
    export function computeLumpType(): DOTHIS;
    export function canLumps(): DOTHIS;
    export function getLumpRefillMax(): DOTHIS;
    export function getLumpRefillRemaining(): DOTHIS;
    export function canRefillLump(): DOTHIS;
    export function refillLump(): DOTHIS;
    export function spendLump(): DOTHIS;
    export function doLumps(): DOTHIS;
    export function Earn(): DOTHIS;
    export function Spend(): DOTHIS;
    export function Dissolve(): DOTHIS;
    export function mouseCps(): DOTHIS;
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
    export function playCookieClickSound(): DOTHIS;
    export function ClickCookie(): DOTHIS;
    export let mouseX: number;
    export let mouseY: number;
    export let mouseX2: number;
    export let mouseY2: number;
    export let mouseMoved: number;
    export function GetMouseCoords(): DOTHIS;
    export let Click: number;
    export let lastClickedEl: object;
    export let clickFrom: number;
    export let Scroll: number;
    export let mouseDown: number;
    export function handleScroll(): DOTHIS;
    export let keys: Array<any> & DOTHIS2;
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
    export function eff(): DOTHIS;
    export function CalculateGains(): DOTHIS;
    export function dropRateMult(): DOTHIS;
    export let shimmersL: object;
    export let shimmers: Array<any> & DOTHIS2;
    export let shimmersN: number;
    export function shimmer(): DOTHIS;
    export function updateShimmers(): DOTHIS;
    export function killShimmers(): DOTHIS;
    export let shimmerTypes: object;
    export let goldenCookieChoices: Array<any> & DOTHIS2;
    export let goldenCookieBuildingBuffs: object;
    export let particles: Array<any> & DOTHIS2;
    export function particlesUpdate(): DOTHIS;
    export function particleAdd(): DOTHIS;
    export function particlesDraw(): DOTHIS;
    export let textParticles: Array<any> & DOTHIS2;
    export let textParticlesY: number;
    export function textParticlesUpdate(): DOTHIS;
    export function textParticlesAdd(): DOTHIS;
    export let popups: number;
    export function Popup(): DOTHIS;
    export let sparkles: object;
    export let sparklesT: number;
    export let sparklesFrames: number;
    export function SparkleAt(): DOTHIS;
    export function SparkleOn(): DOTHIS;
    export let Notes: Array<any> & DOTHIS2;
    export let NotesById: Array<any> & DOTHIS2;
    export let noteId: number;
    export let noteL: object;
    export function Note(): DOTHIS;
    export function CloseNote(): DOTHIS;
    export function CloseNotes(): DOTHIS;
    export function UpdateNotes(): DOTHIS;
    export function NotesLogic(): DOTHIS;
    export function NotesDraw(): DOTHIS;
    export function Notify(): DOTHIS;
    export let darkenL: object;
    export let promptL: object;
    export let promptAnchorL: object;
    export let promptWrapL: object;
    export let promptConfirm: string;
    export let promptOn: number;
    export let promptUpdateFunc: number;
    export function UpdatePrompt(): DOTHIS;
    export function Prompt(): DOTHIS;
    export function ClosePrompt(): DOTHIS;
    export function ConfirmPrompt(): DOTHIS;
    export let cssClasses: Array<any> & DOTHIS2;
    export function addClass(): DOTHIS;
    export function removeClass(): DOTHIS;
    export function updateClasses(): DOTHIS;
    export function WriteButton(): DOTHIS;
    export function Toggle(): DOTHIS;
    export function ToggleFancy(): DOTHIS;
    export function ToggleFilters(): DOTHIS;
    export function ToggleExtraButtons(): DOTHIS;
    export function WriteSlider(): DOTHIS;
    export let onPanel: string;
    export function ShowPanel(): DOTHIS;
    export let onMenu: string;
    export function ShowMenu(): DOTHIS;
    export function sayTime(): DOTHIS;
    export function tinyCookie(): DOTHIS;
    export function ClickTinyCookie(): DOTHIS;
    export function setVolume(): DOTHIS;
    export function UpdateMenu(): DOTHIS;
    export let ascendMeter: object;
    export let ascendNumber: object;
    export let lastPanel: string;
    export let Ticker: string;
    export let TickerAge: number;
    export let TickerEffect: number;
    export let TickerN: number;
    export let TickerClicks: number;
    export function UpdateTicker(): DOTHIS;
    export function getNewTicker(): DOTHIS;
    export let tickerL: object;
    export let tickerBelowL: object;
    export let tickerCompactL: object;
    export function TickerDraw(): DOTHIS;
    export let Log: Array<any> & DOTHIS2;
    export function AddToLog(): DOTHIS;
    export let vanilla: PseudoBoolean;
    export let last: GameObject | Upgrade | Achievement;
    export let storeToRefresh: number;
    export let priceIncrease: number;
    export let buyBulk: number;
    export let buyMode: number;
    export let buyBulkOld: number;
    export let buyBulkShortcut: number;
    export let Objects: Record<string, GameObject>;
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
        onResize?(): void;
        /**
         * @returns The save string, can't contain `;` `|` or `,`, it's recommended to not use letters
         */
        save(): string;
        load(save: string): void;
        launch(): void;
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
         * @param icon Icon column for the building
         * @param bigIcon Big icon (that shows up in store)'s row
         * @param art Building's art
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
         * @param amount The amount of buildings to sacrifice
         */
        sacrafice(amount: number): void;
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
        //fortune: TieredUpgradeClass<'fortune'> | PseudoNull;
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

        levelUp(): void;
        /**
         * If the building is visually locked, is considered unlocked after CBTA is higher than the base cost
         */
        locked: number;

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
        pics: {
            frame: number;
            id: number;
            pic: string;
            x: number;
            y: number;
            z: number;
        }[];
        single: string;
        plural: string;

        price: number;

        productionAchievs: Achievement[];
        /**
         * Amount of CpS a building produces (as of 2.027, `this.cps` * level bonus)
         */
        storedCps: number;
        /**
         *  Amount of CpS a building produces, multiplied by amount (as of 2.027, `this.cps` * level bonus)
         */
        storedTotalCps: number;

        grandma?: GrandmaSynergyClass;

        synergies: SynergyUpgradeClass<string>[];

        //tieredAchievs: TieredAchievementClass<number>[];

        tieredUpgrades: TieredUpgradeClass<number>[];
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
    export function DrawBuildings(): DOTHIS;
    export function sortSprites(): DOTHIS;
    export function sortSpritesById(): DOTHIS;
    export function modifyBuildingPrice(): DOTHIS;
    export function storeBulkButton(): DOTHIS;
    export function BuildStore(): DOTHIS;
    export function RefreshStore(): DOTHIS;
    export function ComputeCps(): DOTHIS;
    export function isMinigameReady(): DOTHIS;
    export let scriptBindings: Array<any> & DOTHIS2;
    export function LoadMinigames(): DOTHIS;
    export function scriptLoaded(): DOTHIS;
    export function magicCpS(): DOTHIS;
    export let SpecialGrandmaUnlock: number;
    export let foolObjects: FoolBuilding[];
    export function ClickProduct(): DOTHIS;
    export function mutedBuildingTooltip(): DOTHIS;
    export let upgradesToRebuild: number;
    export let Upgrades: undefined[] & Record<string, Upgrade>;
    export let UpgradesById: Upgrade[];
    export let UpgradesN: number;
    export let UpgradesInStore: Upgrade[];
    export let UpgradesOwned: number;
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
         * 	The price of the upgrade without the cost multipliers
         */
        basePrice: number;

        bought: PseudoBoolean | boolean;

        /**
         * The building tie for a tiered upgrade, is (pseudo) null in non-tiered upgrades
         */
        buildingTie: GameObject | PseudoNull;
        /**
         * The function that gets triggered on buy
         */
        buyFunction: (() => void) | undefined;

        icon: Icon;

        iconFunction: (() => Icon) | PseudoNull;

        id: number;

        name: string;
        /**
         * The order the upgrade appears in the upgrade list, higher ids have priorities
         */
        order: number;

        parents: HeavenlyUpgrade[];
        /**
         * The type of the upgrade, "prestigeDecor" and "unused" are unused, "" is the default
         */
        pool: '' | 'prestige' | 'tech' | 'cookie' | 'debug' | 'toggle' | 'prestigeDecor' | 'unused';
    }
    export function storeBuyAll(): DOTHIS;
    export let vault: Array<any> & DOTHIS2;
    export function CountsAsUpgradeOwned(): DOTHIS;
    export function RequiresConfirmation(): DOTHIS;
    export function Unlock(): DOTHIS;
    export function Lock(): DOTHIS;
    export function Has(): DOTHIS;
    export function HasUnlocked(): DOTHIS;
    export function RebuildUpgrades(): DOTHIS;
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
         * The cookie required to unlock the cookie
         */
        require: string;
        /**
         * The season required to unlock the cookie
         */
        season: string;
    }
    export let UnlockAt: UnlockRequirement[];
    export function NewUpgradeCookie(): DOTHIS;
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
        req: string;

        /**
         * If true, Upgrades with this tier won't count towards tiered CpS multiplier
         */
        special: PseudoBoolean | boolean;
        upgrades: TieredUpgradeClass<this['name']>[];
    }
    export let Tiers: Record<string, Tier>;
    export function GetIcon(type: string, tier: string | number): Icon;
    /**
     * Sets the last created achievement/upgrade tier and building tie
     * @param building The building name to associate the achievement/upgrade with
     * @param tier The tier to use
     */
    export function SetTier(building: string, tier: string | number): void;
    export function MakeTiered(upgrade: Upgrade, tier: number | string, col: number): void;
    export interface TieredUpgradeClass<Tier extends string | number = string | number> extends Upgrade {
        buildingTie1: GameObject;
        buildingTie: GameObject;
        tier: Tier;
    }
    /**
     * Creates a tiered upgrade based on the building
     * @factory
     * @param name The name of the upgrade to be created
     * @param desc The (full) description for the upgrade
     * @param building The building name to use
     * @param tier The tier to use
     */
    function TieredUpgradeFactory<Tier extends string | number>(
        name: string,
        desc: string,
        building: string,
        tier: Tier,
    ): TieredUpgradeClass<Tier>;
    export { TieredUpgradeFactory as TieredUpgrade };
    export interface SynergyUpgradeClass<Tier extends string | number> extends Upgrade {
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
    function SynergyUpgradeFactory<Tier extends string | number>(
        name: string,
        desc: string,
        building1: string,
        building2: string,
        tier: Tier,
    ): SynergyUpgradeClass<Tier>;
    export { SynergyUpgradeFactory as SynergyUpgrade };
    /**
     * Computes the multiplier for the building from the upgrades
     */
    export function GetTieredCpsMult(me: GameObject): number;
    export function UnlockTiered(): DOTHIS;
    /**
     * The list of the names of grandma synergies
     */
    export let GrandmaSynergies: string[];
    export interface GrandmaSynergyClass extends Upgrade {
        buildingTie: GameObject;
    }
    /**
     * Creates a grandma upgrade based on the building
     * @factory
     * @param name The name of the upgrade to be created
     * @param desc The quote(not the full description, it's generated automatically) to include in the upgrade
     * @param building The building name to use
     */
    function GrandmaSynergyFactory(name: string, desc: string, building: string): GrandmaSynergyClass;
    export { GrandmaSynergyFactory as GrandmaSynergy };
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
    export function DropEgg(): DOTHIS;
    export function PermanentSlotIcon(): DOTHIS;
    export function AssignPermanentSlot(): DOTHIS;
    export let SelectingPermanentUpgrade: number;
    export function PutUpgradeInPermanentSlot(): DOTHIS;
    export let MilksByChoice: object;
    export let BGsByChoice: object;
    export function loseShimmeringVeil(): DOTHIS;
    export let seasons: object;
    export function listTinyOwnedUpgrades(): DOTHIS;
    export let santaDrops: Array<any> & DOTHIS2;
    export function GetHowManySantaDrops(): DOTHIS;
    export let reindeerDrops: Array<any> & DOTHIS2;
    export function GetHowManyReindeerDrops(): DOTHIS;
    export let seasonDrops: Array<any> & DOTHIS2;
    export function saySeasonSwitchUses(): DOTHIS;
    export function computeSeasonPrices(): DOTHIS;
    export function computeSeasons(): DOTHIS;
    export function getSeasonDuration(): DOTHIS;
    export let UpgradesByPool: Array<any> & DOTHIS2;
    export interface HeavenlyUpgrade extends Upgrade {
        pool: 'prestige';
        posX: number;
        posY: number;
    }
    export let PrestigeUpgrades: Array<any> & DOTHIS2;
    export let goldenCookieUpgrades: Array<any> & DOTHIS2;
    export let cookieUpgrades: Array<any> & DOTHIS2;
    export let UpgradePositions: object;
    export let Achievements: Array<any> & DOTHIS2;
    export let AchievementsById: Array<any> & DOTHIS2;
    export let AchievementsN: number;
    export let AchievementsOwned: number;
    export class Achievement {}
    export function Win(): DOTHIS;
    export function RemoveAchiev(): DOTHIS;
    export function CountsAsAchievementOwned(): DOTHIS;
    export function HasAchiev(): DOTHIS;
    export function TieredAchievement(): DOTHIS;
    export function ProductionAchievement(): DOTHIS;
    export let thresholdIcons: Array<any> & DOTHIS2;
    export let BankAchievements: Array<any> & DOTHIS2;
    export function BankAchievement(): DOTHIS;
    export let CpsAchievements: Array<any> & DOTHIS2;
    export function CpsAchievement(): DOTHIS;
    export let buffs: Array<any> & DOTHIS2;
    export let buffsN: number;
    export let buffsL: object;
    export function gainBuff(): DOTHIS;
    export function hasBuff(): DOTHIS;
    export function updateBuffs(): DOTHIS;
    export function killBuff(): DOTHIS;
    export function killBuffs(): DOTHIS;
    export let buffTypes: Array<any> & DOTHIS2;
    export let buffTypesByName: Array<any> & DOTHIS2;
    export let buffTypesN: number;
    export function buffType(): DOTHIS;
    export function UpdateGrandmapocalypse(): DOTHIS;
    export let wrinklerHP: number;
    export let wrinklers: Array<any> & DOTHIS2;
    export function getWrinklersMax(): DOTHIS;
    export function ResetWrinklers(): DOTHIS;
    export function CollectWrinklers(): DOTHIS;
    export let wrinklerSquishSound: number;
    export function playWrinklerSquishSound(): DOTHIS;
    export function SpawnWrinkler(): DOTHIS;
    export function PopRandomWrinkler(): DOTHIS;
    export function UpdateWrinklers(): DOTHIS;
    export function DrawWrinklers(): DOTHIS;
    export function SaveWrinklers(): DOTHIS;
    export function LoadWrinklers(): DOTHIS;
    export let specialTab: string;
    export let specialTabHovered: string;
    export let specialTabs: Array<any> & DOTHIS2;
    export function UpdateSpecial(): DOTHIS;
    export let santaLevels: Array<any> & DOTHIS2;
    export function UpgradeSanta(): DOTHIS;
    export let dragonLevels: Array<any> & DOTHIS2;
    export let dragonAuras: object;
    export function hasAura(): DOTHIS;
    export function auraMult(): DOTHIS;
    export function SelectDragonAura(): DOTHIS;
    export let SelectingDragonAura: number;
    export function SetDragonAura(): DOTHIS;
    export function DescribeDragonAura(): DOTHIS;
    export function UpgradeDragon(): DOTHIS;
    export function ToggleSpecialMenu(): DOTHIS;
    export function DrawSpecial(): DOTHIS;
    export let Milks: Array<any> & DOTHIS2;
    export let Milk: object;
    export let mousePointer: number;
    export let cookieOriginX: number;
    export let cookieOriginY: number;
    export function DrawBackground(): DOTHIS;
    export function RuinTheFun(): DOTHIS;
    export function SetAllUpgrades(): DOTHIS;
    export function SetAllAchievs(): DOTHIS;
    export function GetAllDebugs(): DOTHIS;
    export function MaxSpecials(): DOTHIS;
    export function SesameReset(): DOTHIS;
    export let debugTimersOn: number;
    export let sesame: number;
    export function OpenSesame(): DOTHIS;
    export function EditAscend(): DOTHIS;
    export let debuggedUpgradeCpS: Array<any> & DOTHIS2;
    export let debuggedUpgradeCpClick: Array<any> & DOTHIS2;
    export let debugColors: Array<any> & DOTHIS2;
    export function DebugUpgradeCpS(): DOTHIS;
    export let Background: object;
    export let LeftBackground: object;
    export let defaultBg: string;
    export let choiceSelectorOn: number;
}
