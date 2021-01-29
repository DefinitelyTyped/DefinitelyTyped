// Type definitions for react-native-tags 2.2
// Project: https://github.com/peterp/react-native-tags#readme
// Definitions by: IdaszakDaniel <https://github.com/IdaszakDaniel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

interface RenderTag {
    tag: string;
    index: number;
    onPress(): void;
    deleteTagOnPress(): void;
    readonly: boolean;
}

interface TagPress {
    index: number;
    tagLabel: string;
    event(): void;
    deleted: boolean;
}

interface TextInputProps {
    placeholder: string;
}

interface TagsProps {
    /**
     * The input element's text
     */
    initialText?: string;
    /**
     * Initial tags
     * ```javascript
     * initialTags={["dog", "cat", "chicken"]}
     * ```
     */
    initialTags?: string[];
    /**
     * Triggers new tag creation
     */
    createTagOnString?: string[];
    createTagOnReturn?: boolean;
    /**
     * Fires when tags are added or removed
     * ```javascript
     * onChangeTags={(tags) => console.warn(tags)}
     * ```
     */
    onChangeTags?(tags: string[]): void;
    /**
     * Tags cannot be modified
     */
    readonly?: boolean;
    /**
     * The max number of tags that can be entered
     */
    maxNumberOfTags?: number;
    /**
     * Remove the tag when pressed
     */
    deleteTagOnPress?: boolean;
    /**
     * Manage the rendering of your own Tag
     * * tag - text of the tag
     * * index - position in the array of tags
     * * onPress - Removes the tag if deleteTagsOnPress and readonly is false
     * ```javascript
     * renderTag={({ tag, index, onPress }) => (
     *   <TouchableOpacity key={`${tag}-${index}`} onPress={onPress}>
     *     <Text>{tag}</Text>
     *   </TouchableOpacity>
     * )}
     * ```
     */
    renderTag(tag: RenderTag): void;
    /**
     * Fires when tags are pressed
     */
    onTagPress?: (index: number, tagLabel: string, event: any, deleted: boolean) => void;
    /**
     * Forward props to the textInput
     * ```javascript
     * textInputProps={{
     *   placeholder: "Any type of animal"
     * }}
     * ```
     */
    textInputProps?: TextInputProps;
    containerStyle?: ViewStyle;
    style?: ViewStyle;
    inputContainerStyle?: TextStyle;
    inputStyle?: TextStyle;
    tagContainerStyle?: ViewStyle;
    tagTextStyle?: TextStyle;
}

export {};
export default class Tags extends React.Component<TagsProps> {}
