// Type definitions for react-offcanvas 0.4
// Project: https://github.com/vutran/react-offcanvas#readme
// Definitions by: Alex Bukurov <https://github.com/abukurov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface OffCanvasProps {
  width?: number;
  transitionDuration?: number;
  isMenuOpened?: boolean;
  position?: "left" | "right";
  effect?: "push" | "overlay" | "parallax";
  children: React.ReactNode;
}

export class OffCanvas extends React.Component<OffCanvasProps> {}

export interface OffCanvasBodyProps {
  width?: number;
  transitionDuration?: number;
  isMenuOpened?: boolean;
  position?: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export class OffCanvasBody extends React.Component<OffCanvasBodyProps> {}

export interface OffCanvasMenuProps {
  width?: number;
  transitionDuration?: number;
  isMenuOpened?: boolean;
  position?: "left" | "right";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export class OffCanvasMenu extends React.Component<OffCanvasMenuProps> {}
