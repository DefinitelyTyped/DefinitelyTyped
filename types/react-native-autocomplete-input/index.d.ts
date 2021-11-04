// Type definitions for react-native-autocomplete-input 5.0
// Project: https://github.com/l-urence/react-native-autocomplete-input#readme
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 joleb <https://github.com/joleb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { FC, ReactNode } from 'react';
import {
    GestureResponderHandlers,
    StyleProp,
    ViewStyle,
    FlatListProps,
    TextInputProps,
    ListViewProps,
} from 'react-native';

export interface AutocompleteProps<T> extends TextInputProps {
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
     * An array with suggestion items to be rendered in renderItem({ item, index }). Any array with length > 0 will open the suggestion list and any array with length < 1 will hide the list.
     */
    data: T[];

    /**
     * object
     * Props to pass on to the underlying FlatList.
     */
    flatListProps?: Partial<FlatListProps<T>> | undefined;

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
    onStartShouldSetResponderCapture?: GestureResponderHandlers['onStartShouldSetResponderCapture'] | undefined;

    /**
     * function
     * render custom TextInput. All props passed to this function.
     */
    renderTextInput?(props: TextInputProps): ReactNode;

    /**
     * string | bool
     * Set `keyboardShouldPersistTaps` to true if RN version is <= 0.39.
     */
    renderSeparator?: ListViewProps['renderSeparator'] | undefined;

    keyboardShouldPersistTaps?: 'always' | 'handeld' | 'never' | boolean;
}
export const AutocompleteInput: FC<AutocompleteProps<any>>;

export default AutocompleteInput;
