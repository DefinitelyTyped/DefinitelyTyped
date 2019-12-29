import { ComponentType } from '@wordpress/element';

declare namespace PostPublishButtonLabel {
    interface Props {
        children?: never;
        forceIsSaving?: boolean;
    }
}
declare const PostPublishButtonLabel: ComponentType<PostPublishButtonLabel.Props>;

export default PostPublishButtonLabel;
