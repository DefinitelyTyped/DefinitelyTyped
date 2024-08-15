import * as React from "react";
import Tagify = require("@yaireo/tagify");
import Tags = require("@yaireo/tagify/react.tagify");
import { MixedTags, TagifyTagsReactProps } from "@yaireo/tagify/react.tagify";

export function TestTagsMinimal(): React.ReactElement {
    return (
        <div>
            <Tags />
        </div>
    );
}

export function TestMixedTagsMinimal(): React.ReactElement {
    return (
        <div>
            <MixedTags />
        </div>
    );
}

export function TestTagsTagifyRef(): React.ReactElement {
    const ref = React.useRef<Tagify>();
    return (
        <div>
            <Tags tagifyRef={ref} />
        </div>
    );
}

export const CrazyTags = () => {
    const [tagifyProps, setTagifyProps] = React.useState<TagifyTagsReactProps>({});
    React.useEffect(() => setTagifyProps({ loading: true }));
    return (
        <div>
            <Tags
                {...tagifyProps}
            />
        </div>
    );
};
