declare module 'ol/render/EventType' {

  enum EventType {
    POSTCOMPOSE = 'postcompose',
    PRECOMPOSE = 'precompose',
    RENDER = 'render',
    RENDERCOMPLETE = 'rendercomplete',
  }

  export default EventType;

}
