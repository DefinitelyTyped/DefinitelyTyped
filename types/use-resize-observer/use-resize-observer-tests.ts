import * as React from 'react';
import useResizeObserver, { ObserverDefaults, ObserverRefSize } from 'use-resize-observer';
import usePolyfilledResizeObserver from 'use-resize-observer/polyfilled';

const ref: React.RefObject<HTMLEmbedElement> = undefined as any;
const onResize = (newSize: ObserverRefSize) => undefined;
const defaultWidth = 42;
const defaultHeight = 1024;

// default
useResizeObserver(); // $ExpectType ObserverResultWithSize<HTMLElement>

// without resize handler
useResizeObserver({ }); // $ExpectType ObserverResultWithSize<HTMLElement>
useResizeObserver({ ref }); // $ExpectType ObserverResultWithSize<HTMLEmbedElement>

// with resize handler
useResizeObserver({ onResize }); // $ExpectType ObserverResultForResizeHandler<HTMLElement>
useResizeObserver({ ref, onResize }); // $ExpectType ObserverResultForResizeHandler<HTMLEmbedElement>

// ObserverDefaults
const o01: ObserverDefaults = { };
const o02: ObserverDefaults = { ref };
const o03: ObserverDefaults = { ref, onResize };
const o05: ObserverDefaults = { onResize };

// default
usePolyfilledResizeObserver(); // $ExpectType ObserverResultWithSize<HTMLElement>

// without resize handler
usePolyfilledResizeObserver({ }); // $ExpectType ObserverResultWithSize<HTMLElement>
usePolyfilledResizeObserver({ ref }); // $ExpectType ObserverResultWithSize<HTMLEmbedElement>

// with resize handler
useResizeObserver({ onResize }); // $ExpectType ObserverResultForResizeHandler<HTMLElement>
usePolyfilledResizeObserver({ ref, onResize }); // $ExpectType ObserverResultForResizeHandler<HTMLEmbedElement>
