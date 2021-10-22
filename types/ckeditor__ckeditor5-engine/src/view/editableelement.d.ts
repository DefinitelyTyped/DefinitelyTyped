import ContainerElement from "./containerelement";

export default class EditableElement extends ContainerElement {
    readonly isFocused: boolean;
    readonly isReadOnly: boolean;
}
