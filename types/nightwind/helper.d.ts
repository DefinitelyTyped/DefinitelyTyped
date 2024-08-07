/**
 * Nightwind relies on a fixed 'nightwind' class to manage transitions,
 * and a toggled 'dark' class applied on a top level element in the DOM, typically the root element.
 * You can define your own functions to manage the dark mode (or check the examples below),
 * or use the helper functions included in 'nightwind/helper.js' to get started right away.
 * By default, the helper functions prevent the dreaded flicker of light mode and allow the chosen color mode to persist on update.
 *
 * ```
 * import nightwind from "nightwind/helper"
 *
 * export default function Layout() {
 *   return (
 *     <>
 *       <Head>
 *         <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
 *       </Head>
 *       // ...
 *     </>
 *   )
 * }
 * ```
 */
export function init(): string;
/**
 * The beforeTransition function that you can leverage in case you prefer to build your own toggle functions. It prevents unwanted transitions as a side-effect of having nightwind class in the html tag.
 * Check out the toggle function in the Nextjs example for an example of how this could be implemented.
 */
export function beforeTransition(): void;
/**
 * Toggles between dark/light mode
 * See https://github.com/jjranalli/nightwind#examples for a more in-depth example how to use this
 *
 * ```
 * import nightwind from "nightwind/helper"
 *
 * export default function Navbar() {
 *   return (
 *     // ...
 *     <button onClick={() => nightwind.toggle()}></button>
 *     // ...
 *   )
 * }
 * ```
 */
export function toggle(): void;
/**
 * Enables/disables dark/light mode
 * See https://github.com/jjranalli/nightwind#examples for an example how to use this
 *
 * ```
 * import nightwind from "nightwind/helper"
 *
 * export default function Navbar() {
 *   return (
 *     // ...
 *     <button onClick={() => nightwind.enable(true)}></button>
 *     // ...
 *   )
 * }
 * ```
 */
export function enable(dark: boolean): void;
/**
 * Returns if the dark-mode is currently activated
 */
export function checkNightMode(): boolean;
/**
 * Registers a watcher which adds/removes light/darkmode if the `prefers-color-scheme` media query changes
 */
export function watchNightMode(): void;
/**
 * Syncs the nightmode-selector with the media query
 */
export function addNightModeSelector(): void;
/**
 * Adds the class `nightwind` to the document to enable smooth transitions between dark/lightmode
 */
export function addNightTransitions(): void;
/**
 * See `init()` instead
 * @deprecated
 */
export function initNightwind(): void;
/**
 * See `toggle()` instead
 * @deprecated
 */
export function toggleNightMode(): void;
