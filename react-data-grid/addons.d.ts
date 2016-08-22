// Type definitions for react-data-grid 1.0.4
// Project: https://github.com/adazzle/react-data-grid.git
// Definitions by: Simon Gellis <https://github.com/SupernaviX>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />

import React = require("react");
import addons = require("./addons");

// TODO: refine types for these addons
export namespace Editors {
    export class AutoComplete extends React.Component<any, {}> { }
    export class DropDownEditor extends React.Component<any, {}> { }
    export class SimpleTextEditor extends React.Component<any, {}> { }
    export class CheckboxEditor extends React.Component<any, {}> { }
}

export namespace Formatters {
    export class ImageFormatter extends React.Component<any, {}> { }
}

export class Toolbar extends React.Component<any, any> {}

// TODO: re-export the react-contextmenu typings once those exist
// https://github.com/vkbansal/react-contextmenu/issues/10
export namespace Menu {
    export class ContextMenu extends React.Component<any, {}> { }
    export class MenuHeader extends React.Component<any, {}> { }
    export class MenuItem extends React.Component<any, {}> { }
    export class SubMenu extends React.Component<any, {}> { }
    export const monitor: {
        getItem(): any
        getPosition(): any
        hideMenu(): void
    };
    export function connect(Menu: any): any;
    export function ContextMenuLayer(
        identifier: any,
        configure?: (props: any) => any
    ): (Component: any) => any
}

export as namespace ReactDataGridPlugins;