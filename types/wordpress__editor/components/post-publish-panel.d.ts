import { ComponentType, HTMLProps } from '@wordpress/element';

declare namespace PostPublishPanel {
    interface Props extends HTMLProps<HTMLDivElement> {
        children?: never;
        onClose(): void;
        forceIsDirty?: boolean;
        forceIsSaving?: boolean;
        PostPublishExtension?: ComponentType;
        PrePublishExtension?: ComponentType;
    }
}
declare const PostPublishPanel: ComponentType<PostPublishPanel.Props>;

export default PostPublishPanel;
