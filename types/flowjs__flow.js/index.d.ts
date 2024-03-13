import flowjs = require("flowjs");

declare class Flow extends flowjs.Flow {}

declare namespace Flow {
    type CatchAllCallbackArguments = flowjs.CatchAllCallbackArguments;
    type CompleteCallbackArguments = flowjs.CompleteCallbackArguments;
    type ErrorCallbackArguments = flowjs.ErrorCallbackArguments;
    type EventName = flowjs.EventName;
    type FileAddedCallbackArguments = flowjs.FileAddedCallbackArguments;
    type FileErrorCallbackArguments = flowjs.FileErrorCallbackArguments;
    type FileProgressCallbackArguments = flowjs.FileProgressCallbackArguments;
    type FileRemovedCallbackArguments = flowjs.FileRemovedCallbackArguments;
    type FileRetryCallbackArguments = flowjs.FileRetryCallbackArguments;
    type FilesAddedCallbackArguments = flowjs.FilesAddedCallbackArguments;
    type FilesSubmittedCallbackArguments = flowjs.FilesSubmittedCallbackArguments;
    type FileSuccessCallbackArguments = flowjs.FileSuccessCallbackArguments;
    type FlowChunk = flowjs.FlowChunk;
    type FlowChunkParams = flowjs.FlowChunkParams;
    type FlowEvent = flowjs.FlowEvent;
    type FlowEventFromEventName<T extends EventName> = flowjs.FlowEventFromEventName<T>;
    type FlowEventMap = flowjs.FlowEventMap;
    type FlowEventTypeFromFlowEvent<T extends FlowEvent> = flowjs.FlowEventTypeFromFlowEvent<T>;
    type FlowFile = flowjs.FlowFile;
    type FlowOptions = flowjs.FlowOptions;
    type ProgressCallbackArguments = flowjs.ProgressCallbackArguments;
    type UploadStartCallbackArguments = flowjs.UploadStartCallbackArguments;
}

export = Flow;
export as namespace Flow;
