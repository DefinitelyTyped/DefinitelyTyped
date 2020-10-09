// This contextual profiler can be used to wrap a react sub-tree. It will bind
// the RelayProfiler during the render phase of these components. Allows
// collecting metrics for a specific part of your application.

import type { Context } from 'react';

export type ProfilerContextType = {
    wrapPrepareQueryResource: <T>(cb: () => T) => T
};

export const ProfilerContext: Context<ProfilerContextType>;
