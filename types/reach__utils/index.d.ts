// Type definitions for @reach/utils 0.2
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export function checkStyles(pkg: string): () => void;
export function wrapEvent(
  handler: React.ReactEventHandler | undefined,
  cb: React.ReactEventHandler
): React.ReactEventHandler;
export function assignRef(ref?: React.Ref<any>, value?: React.ReactNode): void;
