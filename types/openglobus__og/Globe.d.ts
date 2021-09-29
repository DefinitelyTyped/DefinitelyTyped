/**
 * Creates a WebGL context with globe.
 * @class
 *
 * @example <caption>Basic initialization</caption>
 * globus = new og.Globe({
 *     'atmosphere': false,
 *     'target': 'globus',
 *     'name': 'Earth',
 *     'controls': [
 *          new og.control.MouseNavigation({ autoActivate: true }),
 *          new og.control.KeyboardNavigation({ autoActivate: true }),
 *          new og.control.EarthCoordinates({ autoActivate: true, center: false }),
 *          new og.control.LayerSwitcher({ autoActivate: true }),
 *          new og.control.ZoomControl({ autoActivate: true }),
 *          new og.control.TouchNavigation({ autoActivate: true }),
 *          new og.control.Sun({ autoActivate: true })
 *      ],
 *     'terrain': new og.terrain.GlobusTerrain(),
 *     'layers': [
 *          new og.layer.XYZ("OpenStreetMap", { isBaseLayer: true, url: "http://b.tile.openstreetmap.org/{z}/{x}/{y}.png", visibility: true, attribution: 'Data @ <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="http://www.openstreetmap.org/copyright">ODbL</a>' })
 *      ],
 *     'autoActivate': true
 * });
 *
 * @param {object} options - Options:
 * @param {string} options.target - HTML element id where planet canvas have to be created.
 * @param {og.scene.RenderNode} [options.skybox] - Render skybox. null - default.
 * @param {string} [options.name] - Planet name. Default is unic identifier.
 * @param {og.terrain.Terrain} [options.terrain] - Terrain provider. Default no terrain - og.terrain.EmptyTerrain.
 * @param {Array.<og.control.Control>} [options.controls] - Renderer controls array.
 * @param {Array.<og.Layer>} [options.layers] - Planet layers.
 * @param {og.Extent} [options.viewExtent] - Viewable starting extent.
 * @param {boolean} [options.autoActivate] - Globe rendering auto activation flag. True is default.
 * @param {DOMElement} [options.attributionContainer] - Container for attribution list.
 * @param {Number} [options.maxGridSize] = Maximal segment grid size. 128 is default
 * @param {boolean} [options.useSpecularTexture] - use specular water mask
 * @param {boolean} [options.useNightTexture] - show night cities
 */
export class Globe {
    static set _staticCounter(arg: any);
    static get _staticCounter(): any;
    constructor(options: any);
    _canvas: HTMLCanvasElement;
    /**
     * Dom element where WebGL canvas creates
     * @public
     * @type {Element}
     */
    public div: Element;
    /**
     * Interface for the renderer context(events, input states, renderer nodes etc.)
     * @public
     * @type {og.Renderer}
     */
    public renderer: any;
    /**
     * Planet node name. Access with this.renderer.<name>
     * @private
     * @type {String}
     */
    private _planetName;
    planet: Planet;
    sun: any;
    _opacityCounter: number;
    _fadeHandler: any;
    _stopHandler: any;
    /**
     * Starts screen brightness fading in effect by the duration time.
     * @public
     */
    public fadeIn(): void;
    /**
     * Starts screen brightness fading out effect by the duration time.
     * @public
     * @param {number} duration - Fadeout duration time.
     */
    public fadeOut(): void;
}
import { Planet } from "./scene/Planet.js";
