import { Component, ReactNode } from "react";
import { GestureResponderHandlers, ListViewProperties, StyleProp, TextInputProperties, ViewStyle } from "react-native";

export interface AutocompleteProps<T> extends TextInputProperties {
    /**
     * style
     * These styles will be applied to the container which surrounds the autocomplete component.
     */
    containerStyle?: StyleProp<ViewStyle> | undefined;

    /**
     * bool
     * Set to true to hide the suggestion list.
     */
    hideResults?: boolean | undefined;

    /**
     * array
     * An array with suggestion items to be rendered in renderItem(item). Any array with length > 0 will open the suggestion list and any array with length < 1 will hide the list.
     */
    data: T[];

    /**
     * style
     * These styles will be applied to the container which surrounds the textInput component.
     */
    inputContainerStyle?: StyleProp<ViewStyle> | undefined;

    /**
     * style
     * These styles will be applied to the container which surrounds the result list.
     */
    listContainerStyle?: StyleProp<ViewStyle> | undefined;

    /**
     * style
     * These style will be applied to the result list.
     */
    listStyle?: StyleProp<ViewStyle> | undefined;

    /**
     * function
     * onShowResult will be called when the autocomplete suggestions appear or disappear.
     */
    onShowResult?(showResults: boolean): void;

    /**
     * function
     * onStartShouldSetResponderCapture will be passed to the result list view container (onStartShouldSetResponderCapture).
     */
    onStartShouldSetResponderCapture?: GestureResponderHandlers["onStartShouldSetResponderCapture"] | undefined;

    /**
     * function
     * renderItem will be called to render the data objects which will be displayed in the result view below the text input.
     */
    renderItem(item: T): ReactNode;

    /**
     * function
     * renderSeparator will be called to render the list separators which will be displayed between the list elements in the result view below the text input.
     */
    renderSeparator?: ListViewProperties["renderSeparator"] | undefined;

    /**
     * function
     * render custom TextInput. All props passed to this function.
     */
    renderTextInput?(props: TextInputProperties): ReactNode;
}

export default class Autocomplete<T> extends Component<AutocompleteProps<T>> {}
