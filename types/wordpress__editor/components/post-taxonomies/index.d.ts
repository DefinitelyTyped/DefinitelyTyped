import { Schema } from '@wordpress/core-data';
import { ComponentType, ReactNode } from 'react';

declare namespace PostTaxonomies {
    interface Props {
        children?: never;
        taxonomyWrapper?(content: ReactNode, taxonomy: Schema.Taxonomy<'edit'>): JSX.Element;
    }
}
declare const PostTaxonomies: ComponentType<PostTaxonomies.Props>;

export default PostTaxonomies;
