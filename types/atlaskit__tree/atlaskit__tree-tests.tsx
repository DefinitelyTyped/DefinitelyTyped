import Tree from "@atlaskit/tree";

import * as React from "react";
import { render } from "react-dom";

declare const container: Element;

render(
    <Tree
        tree={{
            rootId: 1,
            items: {
                1: {
                    id: 1,
                    children: []
                },
                "string-id": {
                    id: "string-id",
                    children: [1, "another"],
                    hasChildren: true,
                    isExpanded: false,
                    isChildrenLoading: false,
                    data: {
                        myVar: "this can be anything"
                    }
                }
            }
        }}
        renderItem={() => <div />}
        onExpand={() => {}}
        onCollapse={() => {}}
        onDragStart={() => {}}
        onDragEnd={() => {}}
        offsetPerLevel={20}
        isDragEnabled
        isNestingEnabled
    />,
    container
);

// Check that default props work too.
render(<Tree renderItem={() => <div />} />, container);
