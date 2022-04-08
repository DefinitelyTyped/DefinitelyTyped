// Type definitions for react-scrollbar-size 2.1
// Project: https://github.com/STORIS/react-scrollbar-size#readme
// Definitions by: Alex Bukurov <https://github.com/abukurov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface Measurement {
  scrollbarWidth: number;
  scrollbarHeight: number;
}

export interface ScrollbarSizeProps {
  onLoad?: (measurement: Measurement) => void;
  onChange?: (measurement: Measurement) => void;
}

export default class ScrollbarSize extends React.Component<ScrollbarSizeProps> {
}
