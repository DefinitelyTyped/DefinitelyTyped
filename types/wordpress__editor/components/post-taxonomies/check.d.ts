import { ComponentType, ReactNode } from '@wordpress/element';

declare namespace PostTaxonomiesCheck {
    interface Props {
        children: ReactNode;
    }
}
declare const PostTaxonomiesCheck: ComponentType<PostTaxonomiesCheck.Props>;

export default PostTaxonomiesCheck;
