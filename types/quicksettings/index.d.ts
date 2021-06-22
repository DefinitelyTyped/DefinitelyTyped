// Type definitions for quicksettings 3.0
// Project: https://github.com/bit101/quicksettings
// Definitions by: janizde <https://github.com/janizde>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

export type ChangeHandler<T> = (value: T) => void;
export type AnyModel = Record<string, any>;

/**
 * Mapped type picking only the properties of the type `M` whose value declaration extends `V`
 */
type KeyWhereType<M, V> = {
    [K in keyof M]: M[K] extends V ? K : never;
}[keyof M];

/**
 * Represents the type of object passed to a change callback of a DropDown
 */
export interface DropDownSelection<T> {
    index: number;
    label: string;
    value: T;
}

/**
 * Represents an option passed into `addDropDown` or `bindDropDown`
 */
export interface DropDownOption<T> {
    label: string | number;
    value: T;
}

/**
 * Represents the type of options that can be passed into an `addDropDown` or `bindDropDown` call.
 * string and number can be directly passed as values whereas other types have to be wrapped in
 * a `DropDownOption`
 *
 * @template    T     The type of the dropdown options' values
 */
export type DropDownItems<T> = Array<(T & (string | number)) | DropDownOption<T>>;

/**
 * Represents a Panel of quick settings. The interface is parametrized with a model type
 * and a literal type describing the controls that do not attach a value to the model (e.g., buttons).
 * Both of the types are optional and default to a permissive counterpart.
 *
 * @example
 * ```ts
 * const permissive = new QuickSettings();
 * permissive.addText('foo', 'value', (nextValue: string) => console.log(nextValue)); // Ok
 * permissive.addButton('anybutton', () => console.log('any button clicked')); // Ok
 *
 * interface Model {
 *  bar: string;
 * }
 *
 * const restrictive = new QuickSettings<Model, 'mybutton'>();
 * permissive.addText('foo', 'value', (nextValue: string) => console.log(nextValue)); // Error, must be 'bar'
 * permissive.addButton('anybutton', () => console.log('any button clicked')); // Error, must be 'mybutton'
 * ```
 *
 * @template    M     The type of the model that is being managed by the quick settings.
 * @template    S     Type of names of controls that do not attach to the model (e.g., button or element)
 */
export interface QuickSettingsPanel<M = AnyModel, S = string> {
    destroy(): void;
    getValuesAsJSON(asString: true): string;
    getValuesAsJSON(asString?: false): M;
    setValuesFromJSON(json: M | string): this;
    saveInLocalStorage(name: string): this;
    clearLocalStorage(name: string): this;
    setPosition(x: number, y: number): this;
    setSize(w: number, h: number): this;
    setWidth(w: number): this;
    setHeight(h: number): this;
    setDraggable(draggable: boolean): this;
    setGlobalChangeHandler(handler: ChangeHandler<M>): this;
    hide(): this;
    show(): this;
    toggleVisibility(): this;
    setCollapsible(collapsible: boolean): this;
    collapse(): this;
    expand(): this;
    toggleCollapsed(): this;
    setKey(char: string): this;
    removeControl(title: keyof M | S): this;
    enableControl(title: keyof M | S): this;
    disableControl(title: keyof M | S): this;
    hideControl(title: keyof M | S): this;
    showControl(title: keyof M | S): this;
    overrideStyle(title: keyof M | S, style: string, value: string): this;
    hideTitle(title: keyof M | S): this;
    showTitle(title: keyof M | S): this;
    hideAllTitles(): this;
    showAllTitles(): this;

    getValue<K extends keyof M>(title: K): M[K];
    setValue<K extends keyof M>(title: K, value: M[K]): this;

    addBoolean(title: KeyWhereType<M, boolean>, value: boolean, callback?: ChangeHandler<boolean>): this;
    bindBoolean<K extends KeyWhereType<M, boolean>>(title: K, value: boolean, object: Record<K, boolean>): this;

    addColor(title: KeyWhereType<M, string>, color: string, callback?: ChangeHandler<string>): this;
    bindColor<K extends KeyWhereType<M, string>>(title: K, color: string, object: Record<K, string>): this;

    addDate<K extends KeyWhereType<M, string | Date>, V extends M[K]>(
        title: K,
        date: V,
        callback?: ChangeHandler<V>,
    ): this;
    bindDate<K extends KeyWhereType<M, string | Date>, V extends M[K]>(title: K, date: V, object: Record<K, V>): this;

    addTime<K extends KeyWhereType<M, string | Date>, V extends M[K]>(
        title: K,
        date: V,
        callback?: ChangeHandler<V>,
    ): this;
    bindTime<K extends KeyWhereType<M, string | Date>, V extends M[K]>(title: K, date: V, object: Record<K, V>): this;

    addDropDown<K extends keyof M>(
        title: K,
        items: DropDownItems<M[K]>,
        callback?: ChangeHandler<DropDownSelection<M[K]>>,
    ): this;
    bindDropDown<K extends keyof M>(title: K, items: DropDownItems<M[K]>, object: Pick<M, K>): this;

    addButton(title: S, callback?: () => void): this;
    addElement(title: S, element: HTMLElement): this;

    addFileChooser(
        title: KeyWhereType<M, File>,
        labelStr: string,
        filter: string,
        callback?: ChangeHandler<File>,
    ): this;
    addHTML(title: KeyWhereType<M, string>, html: string): this;
    addImage(title: KeyWhereType<M, string>, imageUrl: string, callback?: ChangeHandler<string>): this;

    addRange(
        title: KeyWhereType<M, number>,
        min: number,
        max: number,
        value: number,
        step: number,
        callback?: ChangeHandler<number>,
    ): this;
    bindRange<K extends KeyWhereType<M, number>>(
        title: K,
        min: number,
        max: number,
        value: number,
        step: number,
        object: Record<K, number>,
    ): this;
    setRangeParameters(title: KeyWhereType<M, number>, min: number, max: number, step: number): this;

    addNumber(
        title: KeyWhereType<M, number>,
        min: number,
        max: number,
        value: number,
        step: number,
        callback?: ChangeHandler<number>,
    ): this;
    bindNumber<K extends KeyWhereType<M, number>>(
        title: K,
        min: number,
        max: number,
        value: number,
        step: number,
        object: Record<K, number>,
    ): this;
    setNumberParameters(title: KeyWhereType<M, number>, min: number, max: number, step: number): this;

    addPassword(title: KeyWhereType<M, string>, text: string, callback?: ChangeHandler<string>): this;
    bindPassword<K extends KeyWhereType<M, string>>(title: K, text: string, object: Record<K, string>): this;

    addProgressBar(title: string, max: number, value: number, valueDisplay?: 'numbers' | 'percent'): this;
    setProgressMax(title: string, max: number): this;

    addText(title: KeyWhereType<M, string>, text: string, callback?: ChangeHandler<string>): this;
    bindText<K extends KeyWhereType<M, string>>(title: K, text: string, object: Record<K, string>): this;

    addTextArea(title: KeyWhereType<M, string>, text: string, callback?: ChangeHandler<string>): this;
    bindTextArea<K extends KeyWhereType<M, string>>(title: K, text: string, object: Record<K, string>): this;
    setTextAreaRows(title: KeyWhereType<M, string>, rows: number): this;
}

interface QuickSettings {
    /**
     * Creates a QuickSettingsPanel with the provided parameters.
     *
     * @template    M           The type of the model that is being managed by the quick settings.
     * @template    S           Type of names of controls that do not attach to the model (e.g., button or element)
     * @param       x           x position of panel (default 0)
     * @param       y           y position of panel (default 0)
     * @param       panelTitle  title of panel (default "QuickSettings")
     * @param       parent      title of panel (default "QuickSettings")
     * @returns                 New QuickSettings Panel
     */
    create<M = AnyModel, S = string>(
        x?: number,
        y?: number,
        panelTitle?: string,
        parent?: HTMLElement,
    ): QuickSettingsPanel<M, S>; // tslint:disable-line no-unnecessary-generics
    useExtStyleSheet(): void;
}

declare const QuickSettings: QuickSettings;
export default QuickSettings;
