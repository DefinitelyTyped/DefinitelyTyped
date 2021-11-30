import * as BCore2dFast from 'bcore-2d-fast';

const applicationConfig = new BCore2dFast.Application.Application2DConfig();
const application = new BCore2dFast.Application.Application2D(applicationConfig);

const viewerConfig = new BCore2dFast.Viewer.Viewer2DConfig();
const viewer = new BCore2dFast.Viewer.Viewer2D(viewerConfig);

application.addViewer2D(viewer);
viewer.initViewer2D('token');

const annotationConfig = new BCore2dFast.Extension2D.AnnotationConfig(viewer);
const annotation = new BCore2dFast.Extension2D.Annotation(annotationConfig);
annotation.beginPostil();
