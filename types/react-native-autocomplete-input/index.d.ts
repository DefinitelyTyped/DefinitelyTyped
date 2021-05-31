// Type definitions for react-native-autocomplete-input 5.0
// Project: https://github.com/l-urence/react-native-autocomplete-input#readme
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 joleb <https://github.com/joleb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactNode } from 'react';
import {
    GestureResponderHandlers,
    StyleProp,
    ViewStyle,
    FlatListProps,
    TextInputProps,
} from 'react-native';

export interface AutocompleteProps<T> extends TextInputProps {
    /**
     * style
     * These styles will be applied to the container which surrounds the autocomplete component.
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * bool
     * Set to true to hide the suggestion list.
     */
    hideResults?: boolean;

    /**
     * array
     * An array with suggestion items to be rendered in renderItem({ item, index }). Any array with length > 0 will open the suggestion list and any array with length < 1 will hide the list.
     */
    data: T[];

    /**
     * object
     * Props to pass on to the underlying FlatList.
     */
    flatListProps?: Partial<FlatListProps<T>>;

    /**
     * style
     * These styles will be applied to the container which surrounds the textInput component.
     */
    inputContainerStyle?: StyleProp<ViewStyle>;

    /**
     * style
     * These styles will be applied to the container which surrounds the result list.
     */
    listContainerStyle?: StyleProp<ViewStyle>;

    /**
     * function
     * onShowResult will be called when the autocomplete suggestions appear or disappear.
     */
    onShowResult?(showResults: boolean): void;

    /**
     * function
     * onStartShouldSetResponderCapture will be passed to the result list view container (onStartShouldSetResponderCapture).
     */
    onStartShouldSetResponderCapture?: GestureResponderHandlers['onStartShouldSetResponderCapture'];

    /**
     * function
     * render custom TextInput. All props passed to this function.
     */
    renderTextInput?(props: TextInputProps): ReactNode;

    /**
     * string | bool
     * Set `keyboardShouldPersistTaps` to true if RN version is <= 0.39.
     */

    keyboardShouldPersistTaps?: 'always' | 'handeld' | 'never' | boolean;
}

export default class Autocomplete<T> extends Component<AutocompleteProps<T>> {}
