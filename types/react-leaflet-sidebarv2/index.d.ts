// Type definitions for react-leaflet-sidebarv2 0.6
// Project: https://github.com/condense/react-leaflet-sidebarv2
// Definitions by: Vikram Pareddy <https://github.com/vikram-gsu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

type Icon = string | React.ReactElement;
type Anchor = 'top' | 'bottom';
type Position = 'left' | 'right';

interface TabProps {
  children?: React.ReactNode;
  id: string;
  header: string;
  icon: Icon;
  anchor?: Anchor | undefined;
  disabled?: boolean | undefined;
  onClose?: (() => void) | undefined;
  closeIcon?: Icon | undefined;
  position?: Position | undefined;
  active?: boolean | undefined;
}

declare class Tab extends React.Component<TabProps, any> {}

type TabType = React.ReactElement<Tab> | Array<React.ReactElement<Tab>>;

interface SidebarProps {
  id: string;
  collapsed: boolean;
  position: Position;
  selected: string;
  closeIcon?: Icon | undefined;
  onClose?: (() => void) | undefined;
  onOpen?: ((id: string) => void) | undefined;
  children: TabType;
}

declare class Sidebar extends React.Component<SidebarProps, any> {}

export { Tab, Sidebar };
