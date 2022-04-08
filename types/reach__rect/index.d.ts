// Type definitions for @react/rect 0.2
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface RectProps {
    observe?: boolean;
    onChange?: (rect: DOMRect) => void;
    children?(args: { rect: DOMRect, ref: React.Ref<any> }): React.ReactNode;
}

declare const Rect: React.FC<RectProps>;
export default Rect;

export function useRect(ref: React.Ref<any>, isSelected?: boolean): DOMRect;
