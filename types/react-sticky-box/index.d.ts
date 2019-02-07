// Type definitions for react-sticky-box 0.7
// Project: https://github.com/codecks-io/react-sticky-box
// Definitions by: Konstantin Lebedev <https://github.com/koss-lebedev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

declare namespace ReactStickyBox {
  type StickyBoxMode = 'relative' | 'stickyBottom' | 'stickyTop';

  interface StickyBoxProps {
    bottom?: boolean;
    offsetTop?: number;
    offsetBottom?: number;
    onChangeMode?: (oldMode: StickyBoxMode, newMode: StickyBoxMode) => void;
  }
}

declare const ReactStickyBox: React.ComponentClass<ReactStickyBox.StickyBoxProps>;

export = ReactStickyBox;
