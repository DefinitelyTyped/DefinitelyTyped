() => {
	if ( !Detector.canvas || !Detector.webgl || !Detector.workers || !Detector.fileapi ){
		var errorElement = Detector.getWebGLErrorMessage();
		Detector.addGetWebGLMessage();
	}
}