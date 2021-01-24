// Type definitions for pretty-proptypes 1.1
// Project: https://github.com/atlassian/extract-react-types#readme
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react";

export interface Components {
    Indent: React.ComponentType<any>;
    Outline: React.ComponentType<any>;
    Required: React.ComponentType<any>;
    Type: React.ComponentType<any>;
    StringType: React.ComponentType<any>;
    TypeMeta: React.ComponentType<any>;
    Description: React.ComponentType<any>;
    Button: React.ComponentType<any>;
    FunctionType: React.ComponentType<any>;
}

export const components: Components;

export type Kind = any;

export interface CommonProps {
    defaultValue?: string;
    description?: string;
    required: boolean;
    name: string;
    typeValue: Kind;
    type: string;
    shouldCollapse?: boolean;
    components: Components;
}

export interface PropProps extends CommonProps {
    shapeComponent: React.ComponentType<CommonProps>;
}

export class Prop extends React.Component<PropProps> {}

export interface Obj {
    kind: 'object';
    members: any[];
}

export interface Gen {
    kind: 'generic';
    value: any;
}

export interface Inter {
    kind: 'intersection';
    types: Array<Obj | Gen>;
}

export interface DynamicPropsProps {
    components?: Partial<Components>;
    heading?: string;
    shouldCollapseProps?: boolean;
    overrides?: {
        [key: string]: React.ComponentType<CommonProps>;
    };
    props: {
        component?: Obj | Inter;
    };
}

export default class Props extends React.Component<DynamicPropsProps> {}
