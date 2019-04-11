declare namespace pc {

    /**
     * @enum pc.ELEMENTTYPE
     * @name pc.ELEMENTTYPE_GROUP
     * @description A {@link pc.ElementComponent} that contains child {@link pc.ElementComponent}s.
     */
    const ELEMENTTYPE_GROUP = 'group';
    /**
     * @enum pc.ELEMENTTYPE
     * @name pc.ELEMENTTYPE_IMAGE
     * @description A {@link pc.ElementComponent} that displays an image.
     */
    const ELEMENTTYPE_IMAGE = 'image';
    /**
     * @enum pc.ELEMENTTYPE
     * @name pc.ELEMENTTYPE_TEXT
     * @description A {@link pc.ElementComponent} that displays text.
     */
    const ELEMENTTYPE_TEXT = 'text';

    /**
     * @component
     * @name pc.ElementComponent
     * @extends pc.Component
     * @class Enables an Entity to be positioned using anchors and screen coordinates under a {@link pc.ScreenComponent} or under other ElementComponents.
     * Depending on its type it can be used to render images, text or just as a layout mechanism to build 2D and 3D user interfaces.
     * If the component is a descendant of a {@link pc.ScreenComponent}, then the Entity's {@link pc.Entity.setLocalPosition} is in the {@link pc.ScreenComponent}'s coordinate system.
     * @param {pc.ElementComponentSystem} system The ComponentSystem that created this Component
     * @param {pc.Entity} entity The Entity that this Component is attached to.
     * @property {String} type The type of the ElementComponent. Can be one of the following:
     * <ul>
     *     <li>pc.ELEMENTTYPE_GROUP: The component can be used as a layout mechanism to create groups of ElementComponents e.g. panels.</li>
     *     <li>pc.ELEMENTTYPE_IMAGE: The component will render an image</li>
     *     <li>pc.ELEMENTTYPE_TEXT: The component will render text</li>
     * </ul>
     * @property {pc.Entity} screen The Entity with a {@link pc.ScreenComponent} that this component belongs to. This is automatically set when the component is a child of a ScreenComponent.
     * @property {Number} drawOrder The draw order of the component. A higher value means that the component will be rendered on top of other components.
     * @property {pc.Vec4} anchor Specifies where the left, bottom, right and top edges of the component are anchored relative to its parent. Each value
     * ranges from 0 to 1. E.g. a value of [0,0,0,0] means that the element will be anchored to the bottom left of its parent. A value of [1, 1, 1, 1] means
     * it will be anchored to the top right. A split anchor is when the left-right or top-bottom pairs of the anchor are not equal. In that case the component will be resized to cover that entire area. E.g. a value of [0,0,1,1] will make the component resize exactly as its parent.
     * @property {pc.Vec2} pivot The position of the pivot of the component relative to its anchor. Each value ranges from 0 to 1 where [0,0] is the bottom left and [1,1] is the top right.
     * @property {pc.Vec4} margin The distance from the left, bottom, right and top edges of the anchor. For example if we are using a split anchor like [0,0,1,1] and the margin is [0,0,0,0] then the component will be the same width and height as its parent.
     * @property {Number} left The distance from the left edge of the anchor. Can be used in combination with a split anchor to make the component's left edge always be 'left' units away from the left.
     * @property {Number} right The distance from the right edge of the anchor. Can be used in combination with a split anchor to make the component's right edge always be 'right' units away from the right.
     * @property {Number} bottom The distance from the bottom edge of the anchor. Can be used in combination with a split anchor to make the component's top edge always be 'top' units away from the top.
     * @property {Number} top The distance from the top edge of the anchor. Can be used in combination with a split anchor to make the component's bottom edge always be 'bottom' units away from the bottom.
     * @property {Number} width The width of the element.
     * @property {Number} height The height of the element.
     * @property {pc.Vec3[]} screenCorners An array of 4 {@link pc.Vec3}s that represent the bottom left, bottom right, top right and top left corners of the component relative to its parent {@link pc.ScreenComponent}.
     * @property {pc.Vec3[]} worldCorners An array of 4 {@link pc.Vec3}s that represent the bottom left, bottom right, top right and top left corners of the component in world space. Only works for 3D ElementComponents.
     * @property {pc.Vec2[]} canvasCorners An array of 4 {@link pc.Vec2}s that represent the bottom left, bottom right, top right and top left corners of the component in canvas pixels. Only works for screen space ElementComponents.
     * @property {Boolean} useInput If true then the component will receive Mouse or Touch input events.
     * @property {pc.Color} color The color of the image for {@link pc.ELEMENTTYPE_IMAGE} types or the color of the text for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {Number} opacity The opacity of the image for {@link pc.ELEMENTTYPE_IMAGE} types or the text for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {Number} textWidth The width of the text rendered by the component. Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {Number} textHeight The height of the text rendered by the component. Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {Number} autoWidth Automatically set the width of the component to be the same as the textWidth. Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {Number} autoHeight Automatically set the height of the component to be the same as the textHeight. Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {Number} fontAsset The id of the font asset used for rendering the text. Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {pc.Font} font The font used for rendering the text. Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {Number} fontSize The size of the font. Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {Number} spacing The spacing between the letters of the text. Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {Number} lineHeight The height of each line of text. Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {pc.Vec2} alignment The horizontal and vertical alignment of the text. Values range from 0 to 1 where [0,0] is the bottom left and [1,1] is the top right.  Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {String} text The text to render. Only works for {@link pc.ELEMENTTYPE_TEXT} types.
     * @property {Number} textureAsset The id of the texture asset to render. Only works for {@link pc.ELEMENTTYPE_IMAGE} types.
     * @property {pc.Texture} texture The texture to render. Only works for {@link pc.ELEMENTTYPE_IMAGE} types.
     * @property {Number} materialAsset The id of the material asset to use when rendering an image. Only works for {@link pc.ELEMENTTYPE_IMAGE} types.
     * @property {pc.Material} material The material to use when rendering an image. Only works for {@link pc.ELEMENTTYPE_IMAGE} types.
     * @property {pc.Vec4} rect Specifies which region of the texture to use in order to render an image. Values range from 0 to 1 and indicate u, v, width, height. Only works for {@link pc.ELEMENTTYPE_IMAGE} types.
     * @property {Number} batchGroupId Assign element to a specific batch group (see {@link pc.BatchGroup}). Default value is -1 (no group).
     */
    class ElementComponent extends pc.Component {
        constructor(system: pc.ElementComponentSystem, entity: pc.Entity)

        type: string;
        screen: pc.Entity;
        drawOrder: number;
        anchor: pc.Vec4;
        pivot: pc.Vec2;
        margin: pc.Vec4;
        left: number;
        right: number;
        bottom: number;
        top: number;
        width: number;
        height: number;
        screenCorners: pc.Vec3[];
        worldCorners: pc.Vec3[];
        canvasCorners: pc.Vec2[];
        useInput: boolean;
        color: pc.Color;
        opacity: number;
        textWidth: number;
        textHeight: number;
        autoWidth: number;
        autoHeight: number;
        fontAsset: number;
        font: pc.Font;
        fontSize: number;
        spacing: number;
        lineHeight: number;
        alignment: pc.Vec2;
        text: string;
        textureAsset: number;
        texture: pc.Texture;
        materialAsset: number;
        material: pc.Material;
        rect: pc.Vec4;
        batchGroupId: number;
    }
}