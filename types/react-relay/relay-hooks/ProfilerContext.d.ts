// This contextual profiler can be used to wrap a react sub-tree. It will bind
// the RelayProfiler during the render phase of these components. Allows
// collecting metrics for a specific part of your application.

import { Context } from 'react';

export interface ProfilerContextType {
    wrapPrepareQueryResource: <T>(cb: () => T) => T;
}

export const ProfilerContext: Context<ProfilerContextType>;
