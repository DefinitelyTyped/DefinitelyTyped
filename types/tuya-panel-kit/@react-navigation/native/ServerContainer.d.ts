import * as React from 'react';
import { ServerContextType } from './ServerContext';
import type { ServerContainerRef } from './types';
declare const _default: React.ForwardRefExoticComponent<ServerContextType & {
    children: React.ReactNode;
} & React.RefAttributes<ServerContainerRef>>;
/**
 * Container component for server rendering.
 *
 * @param props.location Location object to base the initial URL for SSR.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which contains helper methods.
 */
export default _default;
