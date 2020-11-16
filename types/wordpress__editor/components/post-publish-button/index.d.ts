import { ComponentType } from 'react';

declare namespace PostPublishButton {
    interface BaseProps {
        children?: never;
        focusOnMount?: boolean;
        forceIsDirty?: boolean;
        forceIsSaving?: boolean;
        isOpen?: boolean;
    }
    interface SubmitProps extends BaseProps {
        isToggle?: false;
        onSubmit?(): void;
    }
    interface ToggleProps extends BaseProps {
        isToggle: true;
        onToggle(): void;
    }
    type Props = SubmitProps | ToggleProps;
}
declare const PostPublishButton: ComponentType<PostPublishButton.Props>;

export default PostPublishButton;
