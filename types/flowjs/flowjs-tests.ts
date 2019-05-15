

// flow object
var flowObject: flowjs.IFlow;
var bool: boolean = flowObject.support;
bool = flowObject.supportDirectory;
var flowOpts: flowjs.IFlowOptions = flowObject.opts;
var flowFileArray: flowjs.IFlowFile[] = flowObject.files;

flowObject.assignBrowse(<HTMLElement[]> [], false, false, {});
flowObject.assignDrop(<HTMLElement[]> []);
flowObject.unAssignDrop(<HTMLElement[]> []);
flowObject.on("", () => {});
flowObject.off("", () => {});
flowObject.upload();
flowObject.pause();
flowObject.resume();
flowObject.cancel();
flowObject.progress();
bool = flowObject.isUploading();
flowObject.addFile(<File> {});
flowObject.removeFile(<flowjs.IFlowFile> {});
var flowFile: flowjs.IFlowFile = flowObject.getFromUniqueIdentifier("");
var num: number = flowObject.getSize();
num = flowObject.sizeUploaded();
num = flowObject.timeRemaining();

// flow options
var flowOptions: flowjs.IFlowOptions = {};
flowOptions.target = "";
flowOptions.singleFile = true;
flowOptions.chunkSize= 0;
flowOptions.forceChunkSize = true;
flowOptions.simultaneousUploads= 0;
flowOptions.fileParameterName = "";
flowOptions.query = {};
flowOptions.headers = {};
flowOptions.withCredentials = true;
flowOptions.method = "";
flowOptions.testMethod = "";
flowOptions.uploadMethod = "";
flowOptions.allowDuplicateUploads = true;
flowOptions.prioritizeFirstAndLastChunk = true;
flowOptions.testChunks = true;
flowOptions.preprocess = () => {};
flowOptions.initFileFn = () => {};
flowOptions.generateUniqueIdentifier = () => {};
flowOptions.maxChunkRetries= 0;
flowOptions.chunkRetryInterval= 0;
flowOptions.progressCallbacksInterval= 0;
flowOptions.speedSmoothingFactor= 0;
flowOptions.successStatuses = [""];
flowOptions.permanentErrors = [""];

// flow file
flowObject = flowFile.flowObj;
var htmlFile: File = flowFile.file;
var str: string = flowFile.name;
str = flowFile.relativePath;
num = flowFile.size;
str = flowFile.uniqueIdentifier;
num = flowFile.averageSpeed;
num = flowFile.currentSpeed;
var anyArray: any[] = flowFile.chunks;
bool = flowFile.paused;
bool = flowFile.error;
num = flowFile.progress(true);
flowFile.pause();
flowFile.resume();
flowFile.cancel();
flowFile.retry();
flowFile.bootstrap();
bool = flowFile.isUploading();
bool = flowFile.isComplete();
num = flowFile.sizeUploaded();
num = flowFile.timeRemaining();
str = flowFile.getExtension();
str = flowFile.getType();
