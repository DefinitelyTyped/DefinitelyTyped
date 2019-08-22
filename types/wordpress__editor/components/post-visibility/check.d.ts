import { ComponentType } from '@wordpress/element';

declare namespace PostVisibilityCheck {
    interface RenderProps {
        canEdit: boolean;
    }
    interface Props {
        children?: never;
        render(props: RenderProps): JSX.Element;
    }
}
declare const PostVisibilityCheck: ComponentType<PostVisibilityCheck.Props>;

export default PostVisibilityCheck;
