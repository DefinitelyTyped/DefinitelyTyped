export type LayerRenderEventTypes = 'postrender' | 'prerender';
export type MapRenderEventTypes = 'postrender' | 'precompose' | 'postcompose' | 'rendercomplete';
declare enum EventType {
    PRERENDER = 'prerender',
    POSTRENDER = 'postrender',
    PRECOMPOSE = 'precompose',
    POSTCOMPOSE = 'postcompose',
    RENDERCOMPLETE = 'rendercomplete',
}

export default EventType;
