// Type definitions for react-inspector 4.0
// Project: http://formatjs.io/react/, https://github.com/yahoo/react-intl
// Definitions by: Roger Clotet <https://github.com/rogerclotet>
//                 Xinyan Chen <https://github.com/chenxinyanc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import * as CSS from 'csstype';

export interface InspectorNodeParams {
    depth: number;
    name: string;
    data: any;
    isNonenumerable: boolean;
    expanded: boolean;
}

export type InspectorNodeRenderer = (params: InspectorNodeParams) => React.ReactNode;

export interface InspectorThemeDefinition {
    BASE_FONT_FAMILY: CSS.Properties['fontFamily'];
    BASE_FONT_SIZE: CSS.Properties['fontSize'];
    BASE_LINE_HEIGHT: CSS.Properties['lineHeight'];

    BASE_BACKGROUND_COLOR: CSS.Properties['backgroundColor'];
    BASE_COLOR: CSS.Properties['color'];

    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: number;
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: number;
    OBJECT_NAME_COLOR: CSS.Properties['color'];
    OBJECT_VALUE_NULL_COLOR: CSS.Properties['color'];
    OBJECT_VALUE_UNDEFINED_COLOR: CSS.Properties['color'];
    OBJECT_VALUE_REGEXP_COLOR: CSS.Properties['color'];
    OBJECT_VALUE_STRING_COLOR: CSS.Properties['color'];
    OBJECT_VALUE_SYMBOL_COLOR: CSS.Properties['color'];
    OBJECT_VALUE_NUMBER_COLOR: CSS.Properties['color'];
    OBJECT_VALUE_BOOLEAN_COLOR: CSS.Properties['color'];
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: CSS.Properties['color'];

    HTML_TAG_COLOR: CSS.Properties['color'];
    HTML_TAGNAME_COLOR: CSS.Properties['color'];
    HTML_TAGNAME_TEXT_TRANSFORM: CSS.Properties['textTransform'];
    HTML_ATTRIBUTE_NAME_COLOR: CSS.Properties['color'];
    HTML_ATTRIBUTE_VALUE_COLOR: CSS.Properties['color'];
    HTML_COMMENT_COLOR: CSS.Properties['color'];
    HTML_DOCTYPE_COLOR: CSS.Properties['color'];

    ARROW_COLOR: CSS.Properties['color'];
    ARROW_MARGIN_RIGHT: CSS.Properties['marginRight'];
    ARROW_FONT_SIZE: CSS.Properties['fontSize'];
    ARROW_ANIMATION_DURATION: string;

    TREENODE_FONT_FAMILY: CSS.Properties['fontFamily'];
    TREENODE_FONT_SIZE: CSS.Properties['fontSize'];
    TREENODE_LINE_HEIGHT: CSS.Properties['lineHeight'];
    TREENODE_PADDING_LEFT: CSS.Properties['paddingLeft'];

    TABLE_BORDER_COLOR: CSS.Properties['borderColor'];
    TABLE_TH_BACKGROUND_COLOR: CSS.Properties['backgroundColor'];
    TABLE_TH_HOVER_COLOR: CSS.Properties['color'];
    TABLE_SORT_ICON_COLOR: CSS.Properties['color'];
    TABLE_DATA_BACKGROUND_IMAGE: CSS.Properties['backgroundImage'];
    TABLE_DATA_BACKGROUND_SIZE: CSS.Properties['backgroundSize'];
}

export type InspectorTheme = 'chromeLight' | 'chromeDark' | InspectorThemeDefinition;

export interface ThemedComponentProps {
    theme?: InspectorTheme;
}

interface TreeViewProps {
    name?: string;
    /**
     * Not required prop because we also allow undefined value.
     */
    data?: any;
    /**
     * Provide a custom nodeRenderer.
     */
    nodeRenderer?: InspectorNodeRenderer;
    /**
     * An integer specifying to which level the tree should be initially expanded.
     */
    expandLevel?: number;
    /**
     * An array containing all the paths that should be expanded when the component is initialized, or a string of just one path.
     */
    expandPaths?: string | ReadonlyArray<string>;
}

export interface TableInspectorProps extends ThemedComponentProps {
    data?: any;
    columns?: ReadonlyArray<string>;
}

export interface ObjectInspectorProps extends TreeViewProps, ThemedComponentProps {
    /**
     * Show non-enumerable properties.
     */
    showNonenumerable?: boolean;
    /**
     * Sort object keys with optional compare function.
     */
    sortObjectKeys?: boolean | ((a: any, b: any) => number);
}

export interface DOMInspectorProps extends TreeViewProps, ThemedComponentProps {
    data: object;
}

export interface InspectorBaseProps {
    /**
     * Whether to inspect `data` in a table.
     */
    table?: boolean;
}

export interface InspectorAsTableProps extends InspectorBaseProps, TableInspectorProps {
    table: true;
}

export interface InspectorAsTreeProps extends InspectorBaseProps, ObjectInspectorProps, DOMInspectorProps {
    table?: false;
    data: any;
}

export type InspectorProps = InspectorAsTableProps | InspectorAsTreeProps;

export interface ObjectLabelProps {
    name?: string;
    data?: any;
    isNonenumerable?: boolean;
}

export interface ObjectRootLabelProps {
    name?: string;
    data?: any;
}

export interface ObjectNameProps {
    name?: string;
    dimmed?: boolean;
    styles?: object;
}

export interface ObjectValueProps {
    /**
     * The object to describe.
     */
    object?: any;
    styles?: object;
}

export const chromeLight: InspectorThemeDefinition;
export const chromeDark: InspectorThemeDefinition;

export const ObjectInspector: React.ExoticComponent<ObjectInspectorProps>;
export const TableInspector: React.ExoticComponent<TableInspectorProps>;
export const DOMInspector: React.ExoticComponent<DOMInspectorProps>;

export const ObjectLabel: React.ExoticComponent<ObjectLabelProps>;
export const ObjectRootLabel: React.ExoticComponent<ObjectRootLabelProps>;

export const ObjectValue: React.ExoticComponent<ObjectValueProps>;
export const ObjectName: React.ExoticComponent<ObjectNameProps>;

export const Inspector: React.ExoticComponent<InspectorProps>;

export default Inspector;
