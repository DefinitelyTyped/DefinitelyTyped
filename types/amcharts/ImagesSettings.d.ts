/**
 * ImagesSettings is a class which holds common settings of all MapImage objects.
 */
export default class ImagesSettings {
    /**
     * Opacity of the image.
     * @default 1
     */
    alpha: number;
    /**
     * Text which is displayed in a roll-over balloon. You can use the following tags:
     * [[title]], [[description]], [[value]] and [[percent]]. [[title]]
     */
    balloonText: string;
    /**
     * Specifies if the image's center should be placed in the provided coordinates.
     * If false, top-left corner will be at provided coordinates.
     * @default true
     */
    centered: boolean;
    /**
     * Color of image.
     * This will affect only predefined images (with "type" property set) and images with svgPath set.
     * This property won't affect bitmap images and loaded SVG images.
     * @default "#000000"
     */
    color: string;
    /**
     * Height of a description window.
     */
    descriptionWindowHeight: number;
    /**
     * Width of a description window.
     * @default 250
     */
    descriptionWindowWidth: number;
    /**
     * X position of a description window.
     */
    descriptionWindowX: number;
    /**
     * Y position of a description window.
     */
    descriptionWindowY: number;
    /**
     * Label color. #000000
     */
    labelColor: string;
    /**
     * Font size of a label.
     * @default 11
     */
    labelfontSize: string;
    /**
     * Position of the label. Allowed values are: left, right, top, bottom and middle. right
     */
    labelPosition: string;
    /**
     * Label roll-over color. #00CC00
     */
    labelRollOverColor: string;
    /**
     * Opacity of image outline.
     * This will affect only predefined images (with "type" property set) and images with svgPath set.
     * This property won't affect bitmap images and loaded SVG images.
     */
    outlineAlpha: number;
    /**
     * Color of image outline.
     * This will affect only predefined images (with "type" property set) and images with svgPath set.
     * This property won't affect bitmap images and loaded SVG images.
     */
    outlineColor: string;
    /**
     * Thickness of image outline.
     * This will affect only predefined images (with "type" property set) and images with svgPath set.
     * This property won't affect bitmap images and loaded SVG images.
     * @default 1
     */
    outlineThickness: number;
    /**
     * Color of image when hovered.
     * This will affect only predefined images (with "type" property set) and images with svgPath set.
     * This property won't affect bitmap images and loaded SVG images.
     */
    rollOverColor: string;
    /**
     * Scale of the image when hovered. Use value like 1.5 - 2 to enlarge image when user rolls-over it.
     * @default 1
     */
    rollOverScale: number;
    /**
     * Scale of the image if it is selected. Use value like 1.5 - 2 to enlarge selected image.
     * @default 1
     */
    selectedScale: number;
}
