declare namespace pc {

    /**
     * @enum pc.SCALEMODE
     * @name pc.SCALEMODE_NONE
     * @description Always use the application's resolution as the resolution for the {@link pc.ScreenComponent}.
     */
    const SCALEMODE_NONE = "none";
    /**
     * @enum pc.SCALEMODE
     * @name pc.SCALEMODE_BLEND
     * @description Scale the {@link pc.ScreenComponent} when the application's resolution is different than the ScreenComponent's referenceResolution.
     */
    const SCALEMODE_BLEND = "blend";

    /**
     * @component
     * @name pc.ScreenComponent
     * @description Create a new ScreenComponent
     * @class A ScreenComponent enables the Entity to render child {@link pc.ElementComponent}s using anchors and positions in the ScreenComponent's space.
     * @param {pc.ScreenComponentSystem} system The ComponentSystem that created this Component
     * @param {pc.Entity} entity The Entity that this Component is attached to.
     * @extends pc.Component
     * @property {Boolean} screenSpace If true then the ScreenComponent will render its child {@link pc.ElementComponent}s in screen space instead of world space. Enable this to create 2D user interfaces.
     * @property {String} scaleMode Can either be {@link pc.SCALEMODE_NONE} or {@link pc.SCALEMODE_BLEND}. See the description of referenceResolution for more information.
     * @property {Number} scaleBlend A value between 0 and 1 that is used when scaleMode is equal to {@link pc.SCALEMODE_BLEND}. Scales the ScreenComponent with width as a reference (when value is 0), the height as a reference (when value is 1) or anything in between.
     * @property {pc.Vec2} resolution The width and height of the ScreenComponent. When screenSpace is true the resolution will always be equal to {@link pc.GraphicsDevice#width} x {@link pc.GraphicsDevice#height}.
     * @property {pc.Vec2} referenceResolution The resolution that the ScreenComponent is designed for. This is only taken into account when screenSpace is true and scaleMode is {@link pc.SCALEMODE_BLEND}. If the actual resolution is different then the ScreenComponent will be scaled according to the scaleBlend value.
     */
    class ScreenComponent extends pc.Component {
        constructor(system: pc.ScreenComponentSystem, entity: pc.Entity)

        screenSpace: boolean;
        scaleMode: string;
        scaleBlend: number;
        resolution: pc.Vec2;
        referenceResolution: pc.Vec2;

        /**
         * @function
         * @name pc.ScreenComponent#syncDrawOrder
         * @description Set the drawOrder of each child {@link pc.ElementComponent}
         * so that ElementComponents which are last in the hierarchy are rendered on top.
         */
        syncDrawOrder(): void;
    }
}
