import { ComponentClass } from "react";
import { ReactWidgetsCommonProps, AutoFocus } from "./CommonProps";

declare namespace SelectList {
    interface SelectListProps extends ReactWidgetsCommonProps, AutoFocus {
        /**
         * The current value or values of the SelectList. This can be an object (such as a member of
         * the data array) or a primitive value, hinted to by the valueField. The widget value does
         * not need to be in the data array; widgets can have values that are not in their list.
         */
        value?: any | any[] | undefined;
        /**
         * Default Value.
         */
        defaultValue?: any | any[] | undefined;
        /**
         * Change event handler that is called when the value is changed. values will be an array
         * when multiple prop is set.
         */
        onChange?: ((values: any | any[]) => void) | undefined;
        /**
         * Provide an array of possible values for the SelectList. If an array of objects is
         * provided you should use the valueField and textField props, to specify which object
         * properties comprise the value field (such as an id) and the field used to label the item.
         */
        data?: any[] | undefined;
        /**
         * Delay
         * @default 250
         */
        delay?: number | undefined;
        /**
         * A dataItem field name for uniquely identifying items in the data list. A valueField is
         * required when the value prop is not itself a dataItem. A valueField is useful when
         * specifying the selected item, by its id instead of using the model as the value.
         * When a valueField is not provided, the SelectList will use strict equality checks (===)
         * to locate the value in the data list.
         */
        valueField?: string | undefined;
        /**
         * Specify which data item field to display in the SelectList and selected item. The
         * textField prop may also also used as to find an item in the list as you type. Providing
         * an accessor function allows for computed text values.
         */
        textField?: string | ((dataItem: any) => string) | undefined;
        /**
         * Whether or not the SelectList allows multiple selection or not. when false the SelectList
         * will render as a list of radio buttons, and checkboxes when true.
         */
        multiple?: boolean | undefined;
        /**
         * This component is used to render each item in the SelectList. The default component
         * renders the text of the selected item (specified by textfield)
         */
        itemComponent?: React.ElementType | undefined;
        /**
         * Determines how to group the SelectList dropdown list. Providing a string will group the
         * data array by that property. You can also provide a 'function' which should return the
         * group value.
         */
        groupBy?: string | ((dataItem: any) => any) | undefined;
        /**
         * This component is used to render each option group, when groupBy is specified. By default
         * the groupBy value will be used.
         */
        groupComponent?: React.ElementType | undefined;
        /**
         * The native onKeyDown event, called preventDefault will prevent any custom behavior, included keyboard shortcuts.
         */
        onKeyDown?: ((event: KeyboardEvent) => void) | undefined;
        /**
         * The native onKeyPress event, called preventDefault will stop any custom behavior.
         */
        onKeyPress?: ((event: KeyboardEvent) => void) | undefined;
        /**
         * A handler called when focus shifts on the SelectList. Internally this is used to ensure
         * the focused item is in view. If you want to define your own "scrollTo" behavior or just
         * disable the default one specify an onMove handler. The handler is called with the
         * relevant DOM nodes needed to implement scroll behavior: the list element, the element
         * that is currently focused, and a focused value.
         */
        onMove?: ((list: HTMLElement, focusedNode: HTMLElement, focusedItem: any) => void) | undefined;
        /**
         * Mark whether the widget is in a busy or loading state. If true the widget will display a
         * spinner gif, useful when loading data via an ajax call.
         * @default false
         */
        busy?: boolean | undefined;
        /**
         * Object hash containing display text and/or text for screen readers. Use the messages
         * object to localize widget text and increase accessibility.
         */
        messages?: SelectListMessages | undefined;
        /**
         * @default List
         */
        listComponent?: React.ElementType | string | undefined;
        /**
         * An object of props that is passed directly to the underlying List component.
         */
        listProps?: object | undefined;
        /**
         * The HTML name attribute used to group checkboxes and radio buttons together.
         */
        name?: string | undefined;
        /**
         * The HTML tabindex attribute, controls the order in which focus moves via the TAB key
         */
        tabIndex?: number | undefined;
    }
    interface SelectListMessages {
        /**
         * @default: "There are no items in this list"
         */
        emptyList?: string | ((props: SelectListProps) => string) | undefined;
    }
}

interface SelectListClass extends ComponentClass<SelectList.SelectListProps> {}
declare var SelectList: SelectListClass;
export = SelectList;
