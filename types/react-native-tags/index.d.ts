import * as React from "react";
import { TextStyle, ViewStyle } from "react-native";

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
    initialText?: string | undefined;
    /**
     * Initial tags
     * ```javascript
     * initialTags={["dog", "cat", "chicken"]}
     * ```
     */
    initialTags?: string[] | undefined;
    /**
     * Triggers new tag creation
     */
    createTagOnString?: string[] | undefined;
    createTagOnReturn?: boolean | undefined;
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
    readonly?: boolean | undefined;
    /**
     * The max number of tags that can be entered
     */
    maxNumberOfTags?: number | undefined;
    /**
     * Remove the tag when pressed
     */
    deleteTagOnPress?: boolean | undefined;
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
    onTagPress?: ((index: number, tagLabel: string, event: any, deleted: boolean) => void) | undefined;
    /**
     * Forward props to the textInput
     * ```javascript
     * textInputProps={{
     *   placeholder: "Any type of animal"
     * }}
     * ```
     */
    textInputProps?: TextInputProps | undefined;
    containerStyle?: ViewStyle | undefined;
    style?: ViewStyle | undefined;
    inputContainerStyle?: TextStyle | undefined;
    inputStyle?: TextStyle | undefined;
    tagContainerStyle?: ViewStyle | undefined;
    tagTextStyle?: TextStyle | undefined;
}

export {};
export default class Tags extends React.Component<TagsProps> {}
