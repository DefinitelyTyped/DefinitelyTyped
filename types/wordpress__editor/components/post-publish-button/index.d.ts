import { ComponentType } from "react";

declare namespace PostPublishButton {
    interface BaseProps {
        children?: never | undefined;
        focusOnMount?: boolean | undefined;
        forceIsDirty?: boolean | undefined;
        forceIsSaving?: boolean | undefined;
        isOpen?: boolean | undefined;
    }
    interface SubmitProps extends BaseProps {
        isToggle?: false | undefined;
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
