import * as React from "react";
import Tagify = require("@yaireo/tagify");
import Tags = require("@yaireo/tagify/dist/react.tagify");
import { MixedTags } from "@yaireo/tagify/dist/react.tagify";

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
