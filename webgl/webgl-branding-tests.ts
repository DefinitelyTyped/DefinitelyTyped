/// <reference path="webgl-branding.d.ts" />

// This test uses overload resolution rules to ensure that the types are considered 'different' by TypeScript.
// If you remove the above header, the usages of _1, _2, etc will cause errors since all the types are equivalent. 

var overloadCheck: {
  (o: WebGLBuffer): { _2: any }
  (o: WebGLFramebuffer): { _3: any }
  (o: WebGLProgram): { _4: any }
  (o: WebGLRenderbuffer): { _5: any }
  (o: WebGLShader): { _6: any }
  (o: WebGLTexture): { _7: any }
  (o: WebGLUniformLocation): { _8: any }
  
  (o: WebGLQuery): { _9: any }
  (o: WebGLSampler): { _10: any }
  (o: WebGLSync): { _11: any }
  (o: WebGLTransformFeedback): { _12: any }
  (o: WebGLVertexArrayObject): { _13: any }
  
  (o: WebGLObject): { _1: any }
}

overloadCheck(null as WebGLObject)._1;
overloadCheck(null as WebGLBuffer)._2;
overloadCheck(null as WebGLFramebuffer)._3;
overloadCheck(null as WebGLProgram)._4;
overloadCheck(null as WebGLRenderbuffer)._5;
overloadCheck(null as WebGLShader)._6;
overloadCheck(null as WebGLTexture)._7;
overloadCheck(null as WebGLUniformLocation)._8;
overloadCheck(null as WebGLQuery)._9;
overloadCheck(null as WebGLSampler)._10;
overloadCheck(null as WebGLSync)._11;
overloadCheck(null as WebGLTransformFeedback)._12;
overloadCheck(null as WebGLVertexArrayObject)._13;
