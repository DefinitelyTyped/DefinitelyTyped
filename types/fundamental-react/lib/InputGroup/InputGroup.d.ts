import * as React from "react";

export type InputGroupAddonPosition = "before" | "after";

export type InputGroupTypes = "text" | "number" | "search";

export interface InputGroupAddonProps {
    className?: string;
    /* Set to **true** if add-on is a button. */
    isButton?: boolean;
}

export type InputGroupProps = {
    /* Set to **true** to enable an input with actions. Actions can be shown with a text label or icon. */
    actions?: boolean;
    /* The value of the add-on. */
    addon?: string;
    /* Location of the add-on relative to the input. */
    addonPos?: InputGroupAddonPosition;
    className?: string;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    compact?: boolean;
    glyph?: string;
    /* CSS class(es) to add to the `<input>` element. */
    inputClassName?: string;
    /* Value for the `id` attribute on the `<input>` element. */
    inputId?: string;
    /* Value for the `name` attribute on the `<input>` element. */
    inputName?: string;
    /* Value for the `placeholder` attribute on the `<input>` element. */
    inputPlaceholder?: string;
    inputProps?: { [x: string]: any };
    /* Value for the `type` attribute on the `<input>` element. */
    inputType?: InputGroupTypes;
    /* Value for the `value` attribute on the `<input>` element. */
    inputValue?: any;
    localizedText?: {
        /* Value for aria-label on the clear <button> element. */
        clear: string;
        /* Value for aria-label on the down <button> element. */
        down: string;
        /* Value for aria-label on the up <button> element. */
        up: string;
    };
    /* Additional props to be spread to the down `<button>` element (for inputType='number'). */
    numberDownButtonProps?: { [x: string]: any };
    /* Additional props to be spread to the up `<button>` element (for inputType='number'). */
    numberUpButtonProps?: { [x: string]: any };
    /* Additional props to be spread to the `<button>` element. */
    searchButtonProps?: { [x: string]: any };
} & { [x: string]: any };

declare class InputGroup extends React.Component<InputGroupProps> {
    static displayName: "InputGroup";
    static Addon: React.FunctionComponent<InputGroupAddonProps> & {displayName: "InputGroup.Addon"};
}

export default InputGroup;
