/**
 * An object literal can be constructed with any of the following properties and passed to [[LayerComps.add]].
 * As a type, `LayerCompCreateOptions` can be used in Typescript development.
 *
 * ```javascript
 * const options = { name: "mockup", comment: "First attempt", visibility: true };
 * await require('photoshop').app.activeDocument.layerComps.add(options);
 * ```
 *
 * @targetfolder objects/createoptions
 * @optionobject
 * @minVersion
 */
export interface LayerCompCreateOptions {
    /**
     * The name shown in the Layer Comps panel. If no value is provided,
     * then a name will be generated following the template, "Layer Comp #".
     * @default -
     * @minVersion 24.0
     */
    name?: string;
    /**
     * The comment appears in the Layer Comp Options dialog.
     * @default null
     * @minVersion 24.0
     */
    comment?: string;
    /**
     * Record the state of the layers' visibility.
     * @default false
     * @minVersion 24.0
     */
    visibility?: boolean;
    /**
     * Record the state of the layers' position.
     * @default true
     * @minVersion 24.0
     */
    position?: boolean;
    /**
     * Record the state of the layers' effects.
     * @default false
     * @minVersion 24.0
     */
    appearance?: boolean;
    /**
     * Record the state of any Layer Comps contained in the recorded layers' Smart Objects.
     * @default false
     * @minVersion 24.0
     */
    childComp?: boolean;
}
/**
 * An object literal can be constructed with any of the following properties and passed to [[LayerComp.recapture]].
 * As a type, `LayerCompRecaptureOptions` can be used in Typescript development.
 *
 * ```javascript
 * const options = { visibility: true, position: true };
 * await require('photoshop').app.activeDocument.layerComps.add(options);
 * ```
 *
 * @targetfolder objects/options
 * @optionobject
 * @minVersion 24.0
 */
export interface LayerCompRecaptureOptions {
    /**
     * Update the recorded state of the layers' visibility.
     * @default false
     * @minVersion 24.0
     */
    visibility?: boolean;
    /**
     * Update the recorded state of the layers' position.
     * @default false
     * @minVersion 24.0
     */
    position?: boolean;
    /**
     * Update the recorded state of the layers' effects.
     * @default false
     * @minVersion 24.0
     */
    appearance?: boolean;
    /**
     * Update the recorded state of any Layer Comps contained in the recorded layers' Smart Objects.
     * @default false
     * @minVersion 24.0
     */
    childComp?: boolean;
}
