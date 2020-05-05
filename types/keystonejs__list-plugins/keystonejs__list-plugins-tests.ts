import { atTracking, byTracking } from '@keystonejs/list-plugins';

export const pluginWoOptions = atTracking();

export const atTrackingPluginWithOptions = atTracking({
    access: {},
    createdAtField: 'field',
});

export const byTrackingPluginWithOptions = byTracking({
    access: {},
    createdAtField: 'field',
    ref: 'User',
});
`z`;
