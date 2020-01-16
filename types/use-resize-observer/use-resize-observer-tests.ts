import * as React from 'react';
import useResizeObserver, { ObserverDefaults } from 'use-resize-observer';

const ref: React.RefObject<HTMLEmbedElement> = undefined as any;
const defaultWidth = 42;
const defaultHeight = 1024;

// default
useResizeObserver(); // $ExpectType ObserverResultWithDefaultSize<HTMLElement>

// without default size
useResizeObserver({ }); // $ExpectType ObserverResultWithoutDefaultSize<HTMLElement>
useResizeObserver({ ref }); // $ExpectType ObserverResultWithoutDefaultSize<HTMLEmbedElement>
useResizeObserver({ ref, useDefaults: false }); // $ExpectType ObserverResultWithoutDefaultSize<HTMLEmbedElement>
useResizeObserver({ useDefaults: true }); // $ExpectError
useResizeObserver({ ref, useDefaults: true }); // $ExpectError

// with width only
useResizeObserver({ defaultWidth }); // $ExpectType ObserverResultWithDefaultWidthOnly<HTMLElement>
useResizeObserver({ defaultWidth, ref }); // $ExpectType ObserverResultWithDefaultWidthOnly<HTMLEmbedElement>
useResizeObserver({ defaultWidth, ref, useDefaults: true }); // $ExpectType ObserverResultWithDefaultWidthOnly<HTMLEmbedElement>
useResizeObserver({ defaultWidth, useDefaults: false }); // $ExpectError
useResizeObserver({ defaultWidth, ref, useDefaults: false }); // $ExpectError

// with height only
useResizeObserver({ defaultHeight }); // $ExpectType ObserverResultWithDefaultHeightOnly<HTMLElement>
useResizeObserver({ defaultHeight, ref }); // $ExpectType ObserverResultWithDefaultHeightOnly<HTMLEmbedElement>
useResizeObserver({ defaultHeight, ref, useDefaults: true }); // $ExpectType ObserverResultWithDefaultHeightOnly<HTMLEmbedElement>
useResizeObserver({ defaultHeight, useDefaults: false }); // $ExpectError
useResizeObserver({ defaultHeight, ref, useDefaults: false }); // $ExpectError

// with default size
useResizeObserver({ defaultWidth, defaultHeight }); // $ExpectType ObserverResultWithDefaultSize<HTMLElement>
useResizeObserver({ defaultWidth, defaultHeight, ref }); // $ExpectType ObserverResultWithDefaultSize<HTMLEmbedElement>
useResizeObserver({ defaultWidth, defaultHeight, ref, useDefaults: true }); // $ExpectType ObserverResultWithDefaultSize<HTMLEmbedElement>
useResizeObserver({ defaultWidth, defaultHeight, useDefaults: false }); // $ExpectError
useResizeObserver({ defaultWidth, defaultHeight, ref, useDefaults: false }); // $ExpectError

// ObserverDefaults
const o01: ObserverDefaults = { };
const o02: ObserverDefaults = { ref };
const o03: ObserverDefaults = { ref, useDefaults: false };
const o04: ObserverDefaults = { useDefaults: true }; // $ExpectError
const o05: ObserverDefaults = { ref, useDefaults: true }; // $ExpectError
const o06: ObserverDefaults = { defaultWidth };
const o07: ObserverDefaults = { defaultWidth, ref };
const o08: ObserverDefaults = { defaultWidth, ref, useDefaults: true };
const o09: ObserverDefaults = { defaultWidth, useDefaults: false }; // $ExpectError
const o10: ObserverDefaults = { defaultWidth, ref, useDefaults: false }; // $ExpectError
const o11: ObserverDefaults = { defaultHeight };
const o12: ObserverDefaults = { defaultHeight, ref };
const o13: ObserverDefaults = { defaultHeight, ref, useDefaults: true };
const o14: ObserverDefaults = { defaultHeight, useDefaults: false }; // $ExpectError
const o15: ObserverDefaults = { defaultHeight, ref, useDefaults: false }; // $ExpectError
const o16: ObserverDefaults = { defaultWidth, defaultHeight };
const o17: ObserverDefaults = { defaultWidth, defaultHeight, ref };
const o18: ObserverDefaults = { defaultWidth, defaultHeight, ref, useDefaults: true };
const o19: ObserverDefaults = { defaultWidth, defaultHeight, useDefaults: false }; // $ExpectError
const o20: ObserverDefaults = { defaultWidth, defaultHeight, ref, useDefaults: false }; // $ExpectError
