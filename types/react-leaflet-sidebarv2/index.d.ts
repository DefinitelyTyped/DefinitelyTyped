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
  id: string;
  header: string;
  icon: Icon;
  anchor?: Anchor;
  disabled?: boolean;
  onClose?: () => void;
  closeIcon?: Icon;
  position?: Position;
  active?: boolean;
}

declare class Tab extends React.Component<TabProps, any> {}

type TabType = React.ReactElement<Tab> | Array<React.ReactElement<Tab>>;

interface SidebarProps {
  id: string;
  collapsed: boolean;
  position: Position;
  selected: string;
  closeIcon?: Icon;
  onClose?: () => void;
  onOpen?: (id: string) => void;
  children: TabType;
}

declare class Sidebar extends React.Component<SidebarProps, any> {}

export { Tab, Sidebar };
