// Type definitions react-leaflet-fullscreen-plugin 1.0.1
// Project: https://github.com/elangobharathi/react-leaflet-fullscreen-plugin
// Definitions by: Adil Echcharafi <https://github.com/didokun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { LeafletEvent, ControlOptions } from 'leaflet';
import { VoidFunctionComponent } from 'react';

export type FullscreenProps = ControlOptions & {
title?: string;
titleCancel?: string;
content?: string;
forceSeparateButton?: boolean;
forcePseudoFullscreen?: boolean;
fullscreenElement?: boolean;
eventHandlers?:
    | { enterFullscreen: (event: LeafletEvent) => void }
    | { exitFullscreen: (event: LeafletEvent) => void };
};

export const Fullscreen: VoidFunctionComponent<FullscreenProps>;
export default Fullscreen;
