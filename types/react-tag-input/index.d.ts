// Type definitions for React-Tags (react-tag-input) 4.7.2
// Project: https://github.com/prakhar1989/react-tags
// Definitions by: Ogglas <https://stackoverflow.com/users/3850405/ogglas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export interface ReactTagsProps {
    tags?: TagItem[];
    suggestions?: string[];
    handleDelete: ((i: number) => void);
    handleAddition: ((tag: string) => void);
    handleDrag?: ((tag: TagItem, currPos: number, newPos: number) => void);
    placeholder?: string;
}

export interface TagItem {
    id: number;
    text: string;
}

export class WithContext extends React.Component<ReactTagsProps, {}> { }

export default WithContext;
