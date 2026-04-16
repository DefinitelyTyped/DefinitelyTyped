import { EventDispatcher } from "../../../../src/core/EventDispatcher.js";

export interface TabEventMap {}

export class Tab<TEventMap extends TabEventMap = TabEventMap> extends EventDispatcher<TEventMap> {
    constructor(title: string);
}
