// Type definitions for react-inspector 3.0
// Project: http://formatjs.io/react/, https://github.com/yahoo/react-intl
// Definitions by: Roger Clotet <https://github.com/rogerclotet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

type nodeRenderer = (params: {
    depth: number;
    name: string;
    data: any;
    isNonEnumerable: boolean;
    expanded: boolean;
}) => React.ReactNode;

interface Theme {
    BASE_FONT_FAMILY: string;
    BASE_FONT_SIZE: string;
    BASE_LINE_HEIGHT: number;

    BASE_BACKGROUND_COLOR: string;
    BASE_COLOR: string;

    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: number;
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: number;
    OBJECT_NAME_COLOR: string;
    OBJECT_VALUE_NULL_COLOR: string;
    OBJECT_VALUE_UNDEFINED_COLOR: string;
    OBJECT_VALUE_REGEXP_COLOR: string;
    OBJECT_VALUE_STRING_COLOR: string;
    OBJECT_VALUE_SYMBOL_COLOR: string;
    OBJECT_VALUE_NUMBER_COLOR: string;
    OBJECT_VALUE_BOOLEAN_COLOR: string;
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: string;

    HTML_TAG_COLOR: string;
    HTML_TAGNAME_COLOR: string;
    HTML_TAGNAME_TEXT_TRANSFORM: string;
    HTML_ATTRIBUTE_NAME_COLOR: string;
    HTML_ATTRIBUTE_VALUE_COLOR: string;
    HTML_COMMENT_COLOR: string;
    HTML_DOCTYPE_COLOR: string;

    ARROW_COLOR: string;
    ARROW_MARGIN_RIGHT: number;
    ARROW_FONT_SIZE: number;
    ARROW_ANIMATION_DURATION: string;

    TREENODE_FONT_FAMILY: string;
    TREENODE_FONT_SIZE: string;
    TREENODE_LINE_HEIGHT: number;
    TREENODE_PADDING_LEFT: number;

    TABLE_BORDER_COLOR: string;
    TABLE_TH_BACKGROUND_COLOR: string;
    TABLE_TH_HOVER_COLOR: string;
    TABLE_SORT_ICON_COLOR: string;
    TABLE_DATA_BACKGROUND_IMAGE: string;
    TABLE_DATA_BACKGROUND_SIZE: string;
}

interface InspectorProps {
    data: any;
    name?: string;
    columns?: ReadonlyArray<string>;
    expandLevel?: number;
    expandPaths?: string | ReadonlyArray<string>;
    showNonenumerable?: boolean;
    sortObjectKeys?: boolean | ((a: any, b: any) => number);
    nodeRenderer?: nodeRenderer;
    theme?: 'chromeLight' | 'chromeDark' | Theme;
}

export class Inspector extends React.Component<InspectorProps & { table?: boolean }> {}
export class ObjectInspector extends React.Component<InspectorProps> {}
export class TableInspector extends React.Component<InspectorProps> {}

interface DomInspectorProps {
    data: object;
    name?: string;
    columns?: ReadonlyArray<string>;
    expandLevel?: number;
    expandPaths?: string | ReadonlyArray<string>;
    showNonenumerable?: boolean;
    sortObjectKeys?: boolean | ((a: any, b: any) => number);
    nodeRenderer?: nodeRenderer;
    theme?: 'chromeLight' | 'chromeDark' | Theme;
}

export class DomInspector extends React.Component<DomInspectorProps> {}

export default Inspector;
