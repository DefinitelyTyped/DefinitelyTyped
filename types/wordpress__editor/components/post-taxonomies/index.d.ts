import { Taxonomy } from "@wordpress/core-data";
import { ComponentType, ReactNode, JSX } from "react";

declare namespace PostTaxonomies {
    interface Props {
        children?: never | undefined;
        taxonomyWrapper?(content: ReactNode, taxonomy: Taxonomy): JSX.Element;
    }
}
declare const PostTaxonomies: ComponentType<PostTaxonomies.Props>;

export default PostTaxonomies;
