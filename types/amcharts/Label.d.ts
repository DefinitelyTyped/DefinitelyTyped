/**
 * Creates a label on the chart which can be placed anywhere, multiple can be assigned.
 */
export default class Label {
    /**
     * @Default 'left'
     */
    align: string;
    /**
     * @Default 1
     */
    alpha: number;
    /**
     * Specifies if label is bold or not.
     */
    bold: boolean;
    /**
     * Color of a label
     */
    color: string;
    /**
     * Unique id of a Label. You don't need to set it, unless you want to.
     */
    id: string;
    /**
     * Rotation angle.
     */
    rotation: number;
    /**
     * Text size
     */
    size: number;
    /**
     * Text of a label
     */
    text: string;
    /**
     * URL which will be access if user clicks on a label.
     */
    url: string;
    /**
     * X position of a label.
     */
    x: number | string;
    /**
     * y position of a label.
     */
    y: number | string;
}
