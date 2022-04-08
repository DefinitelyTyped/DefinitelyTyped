import StockGraph from "./StockGraph";

/**
 * StockEvent is object which holds information about event(bullet).
 * Values from StockEventsSettings will be used if not set.
 * Stock event bullet's size depends on it's graphs fontSize.
 * When user rolls - over, clicks or rolls - out of the event bullet, AmStockChart dispatches events.
 */
export default class StockEvent {
    /**
     * Opacity of bullet background.
     * @default 1
     */
    backgroundAlpha: number;
    /**
     * Color of bullet background. #DADADA
     */
    backgroundColor: string;
    /**
     * Opacity of bullet border.
     * @default 1
     */
    borderAlpha: number;
    /**
     * Bullet border color. #888888
     */
    borderColor: string;
    /**
     * The color of the event text. #000000
     */
    color: string;
    /**
     * Date of an event. Must be Date object, not a string.
     */
    date: Date;
    /**
     * graph on which event will be displayed.
     */
    graph: StockGraph;
    /**
     * Roll-over background color. #CC0000
     */
    rollOverColor: string;
    /**
     * Specifies if the event should be displayed on category axis
     */
    showOnAxis: boolean;
    /**
     * Letter which will be displayed on the event. Not all types can display letters.
     * "text" type can display longer texts.
     */
    text: string;
    /**
     * Type of bullet.
     * Possible values are:
     * "flag", "sign", "pin", "triangleUp", "triangleDown", "triangleLeft", "triangleRight", "text",
     * "arrowUp", "arrowDown"
     * @default "sign"
     */
    type: string;
    /**
     * A URL to go to when user clicks the event.
     */
    url: string;
    /**
     * target of url, "_blank" for example.
     */
    urlTarget: string;
}
