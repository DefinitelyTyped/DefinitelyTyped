declare module 'ol/webgl/Fragment' {

  import WebGLShader from 'ol/webgl/Shader';

  export default class WebGLFragment extends WebGLShader {
    constructor(source: string);
  }

}
