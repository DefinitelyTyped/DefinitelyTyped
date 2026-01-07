import * as React from "react";

import ServerSideRender, {
    rendererPath,
    removeBlockSupportAttributes,
    EmptyResponsePlaceholderProps,
    ErrorResponsePlaceholderProps,
    LoadingResponsePlaceholderProps,
} from "@wordpress/server-side-render";

<ServerSideRender block="core/archives" />;

<ServerSideRender
    block="core/latest-posts"
    attributes={{ postsToShow: 5, displayPostDate: true }}
    urlQueryArgs={{ per_page: 5 }}
    httpMethod="GET"
    skipBlockSupportAttributes={false}
/>;

const MyLoading: React.ComponentType<LoadingResponsePlaceholderProps> = ({ children }) => (
    <div>Loading... {children}</div>
);

const MyEmpty: React.ComponentType<EmptyResponsePlaceholderProps> = ({ className }) => (
    <div className={className}>No content</div>
);

const MyError: React.ComponentType<ErrorResponsePlaceholderProps> = ({ response }) => (
    <div>Error: {response?.errorMsg ?? "Unknown"}</div>
);

<ServerSideRender
    block="core/search"
    LoadingResponsePlaceholder={MyLoading}
    EmptyResponsePlaceholder={MyEmpty}
    ErrorResponsePlaceholder={MyError}
    attributes={{}}
/>;

const path1: string = rendererPath("core/paragraph");
const path2: string = rendererPath("core/image", { id: 123 }, { preview: true });

const cleanedAttrs = removeBlockSupportAttributes({
    align: "wide",
    someRealAttr: "value",
    lock: { move: false },
});
