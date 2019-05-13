declare module 'ol/webgl/Vertex' {

  import WebGLShader from 'ol/webgl/Shader';

  export default class WebGLVertex extends WebGLShader {
    constructor(source: string);
  }

}
