
/// <reference types="jquery" />

class CLHException {
    constructor(
        public message: string
        ) { }
}

class PlatformInfo {
    EXTENTION: string;
    NAME: string;
    PROFILE: string;
    VENDOR: string;
    VERSION: string;

    constructor(
        public platform: WEBCL.WebCLPlatform,
        public deviceInfos: DeviceInfo[]= new Array<DeviceInfo>()
        ) {
        this.PROFILE = platform.getInfo(WEBCL.PlatformInfo.PLATFORM_PROFILE);
        this.VERSION = platform.getInfo(WEBCL.PlatformInfo.PLATFORM_VERSION);
        this.NAME = platform.getInfo(WEBCL.PlatformInfo.PLATFORM_NAME);
        this.VENDOR = platform.getInfo(WEBCL.PlatformInfo.PLATFORM_VENDOR);
        this.EXTENTION = platform.getInfo(WEBCL.PlatformInfo.PLATFORM_EXTENSIONS);
    }
}

class DeviceInfo {
    ADDRESS_BITS: number;
    AVAILABLE: boolean;
    COMPILER_AVAILABLE: boolean;
    DRIVER_VERSION: string;
    ENDIAN_LITTLE: boolean;
    ERROR_CORRECTION_SUPPORT: boolean;
    EXECUTION_CAPABILITIES: WEBCL.DeviceExecCapabilitiesBits;
    EXTENSIONS: string;
    GLOBAL_MEM_CACHE_SIZE: number;
    GLOBAL_MEM_CACHE_TYPE: WEBCL.DeviceMemCacheType;
    GLOBAL_MEM_CACHELINE_SIZE: number;
    GLOBAL_MEM_SIZE: number;
    HOST_UNIFIED_MEMORY: boolean;
    IMAGE_SUPPORT: boolean;
    IMAGE2D_MAX_HEIGHT: number;
    IMAGE2D_MAX_WIDTH: number;
    IMAGE3D_MAX_DEPTH: number;
    IMAGE3D_MAX_HEIGHT: number;
    IMAGE3D_MAX_WIDTH: number;
    LOCAL_MEM_SIZE: number;
    LOCAL_MEM_TYPE: WEBCL.DeviceLocalMemType;
    MAX_CLOCK_FREQUENCY: number;
    MAX_COMPUTE_UNITS: number;
    MAX_CONSTANT_ARGS: number;
    MAX_CONSTANT_BUFFER_SIZE: number;
    MAX_MEM_ALLOC_SIZE: number;
    MAX_PARAMETER_SIZE: number;
    MAX_READ_IMAGE_ARGS: number;
    MAX_SAMPLERS: number;
    MAX_WORK_GROUP_SIZE: number;
    MAX_WORK_ITEM_DIMENSIONS: number;
    MAX_WORK_ITEM_SIZES: number;
    MAX_WRITE_IMAGE_ARGS: number;
    MEM_BASE_ADDR_ALIGN: number;
    NAME: string;
    NATIVE_VECTOR_WIDTH_CHAR: number;
    NATIVE_VECTOR_WIDTH_FLOAT: number;
    NATIVE_VECTOR_WIDTH_INT: number;
    NATIVE_VECTOR_WIDTH_LONG: number;
    NATIVE_VECTOR_WIDTH_SHORT: number;
    OPENCL_C_VERSION: string;
    PLATFORM: WEBCL.WebCLPlatform;
    PlatformInfo: PlatformInfo;
    PREFERRED_VECTOR_WIDTH_CHAR: number;
    PREFERRED_VECTOR_WIDTH_FLOAT: number;
    PREFERRED_VECTOR_WIDTH_INT: number;
    PREFERRED_VECTOR_WIDTH_LONG: number;
    PREFERRED_VECTOR_WIDTH_SHORT: number;
    PROFILE: string;
    PROFILING_TIMER_RESOLUTION: number;
    QUEUE_PROPERTIES: WEBCL.CommandQueueProperties;
    SINGLE_FP_CONFIG: WEBCL.DeviceFPConfigBits;
    TYPE: WEBCL.DeviceTypeBits;
    VENDOR: string;
    VENDOR_ID: number;
    VERSION: string;

    constructor(public device: WEBCL.WebCLDevice, platformInfo: PlatformInfo) {
        this.ADDRESS_BITS = device.getInfo(WEBCL.DeviceInfo.DEVICE_ADDRESS_BITS);
        this.AVAILABLE = device.getInfo(WEBCL.DeviceInfo.DEVICE_AVAILABLE);
        this.COMPILER_AVAILABLE = device.getInfo(WEBCL.DeviceInfo.DEVICE_COMPILER_AVAILABLE);
        this.DRIVER_VERSION = device.getInfo(WEBCL.DeviceInfo.DRIVER_VERSION);
        this.ENDIAN_LITTLE = device.getInfo(WEBCL.DeviceInfo.DEVICE_ENDIAN_LITTLE);
        this.ERROR_CORRECTION_SUPPORT = device.getInfo(WEBCL.DeviceInfo.DEVICE_ERROR_CORRECTION_SUPPORT);
        this.EXECUTION_CAPABILITIES = device.getInfo(WEBCL.DeviceInfo.DEVICE_EXECUTION_CAPABILITIES);
        this.EXTENSIONS = device.getInfo(WEBCL.DeviceInfo.DEVICE_EXTENSIONS);
        this.GLOBAL_MEM_CACHE_SIZE = device.getInfo(WEBCL.DeviceInfo.DEVICE_GLOBAL_MEM_CACHE_SIZE);
        this.GLOBAL_MEM_CACHE_TYPE = device.getInfo(WEBCL.DeviceInfo.DEVICE_GLOBAL_MEM_CACHE_TYPE);
        this.GLOBAL_MEM_CACHELINE_SIZE = device.getInfo(WEBCL.DeviceInfo.DEVICE_GLOBAL_MEM_CACHELINE_SIZE);
        this.GLOBAL_MEM_SIZE = device.getInfo(WEBCL.DeviceInfo.DEVICE_GLOBAL_MEM_SIZE);
        this.HOST_UNIFIED_MEMORY = device.getInfo(WEBCL.DeviceInfo.DEVICE_HOST_UNIFIED_MEMORY);
        this.IMAGE_SUPPORT = device.getInfo(WEBCL.DeviceInfo.DEVICE_IMAGE_SUPPORT);
        this.IMAGE2D_MAX_HEIGHT = device.getInfo(WEBCL.DeviceInfo.DEVICE_IMAGE2D_MAX_HEIGHT);
        this.IMAGE2D_MAX_WIDTH = device.getInfo(WEBCL.DeviceInfo.DEVICE_IMAGE2D_MAX_WIDTH);
        this.IMAGE3D_MAX_DEPTH = device.getInfo(WEBCL.DeviceInfo.DEVICE_IMAGE3D_MAX_DEPTH);
        this.IMAGE3D_MAX_HEIGHT = device.getInfo(WEBCL.DeviceInfo.DEVICE_IMAGE3D_MAX_HEIGHT);
        this.IMAGE3D_MAX_WIDTH = device.getInfo(WEBCL.DeviceInfo.DEVICE_IMAGE3D_MAX_WIDTH);
        this.LOCAL_MEM_SIZE = device.getInfo(WEBCL.DeviceInfo.DEVICE_LOCAL_MEM_SIZE);
        this.LOCAL_MEM_TYPE = device.getInfo(WEBCL.DeviceInfo.DEVICE_LOCAL_MEM_TYPE);
        this.MAX_CLOCK_FREQUENCY = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_CLOCK_FREQUENCY);
        this.MAX_COMPUTE_UNITS = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_COMPUTE_UNITS);
        this.MAX_CONSTANT_ARGS = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_CONSTANT_ARGS);
        this.MAX_CONSTANT_BUFFER_SIZE = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_CONSTANT_BUFFER_SIZE);
        this.MAX_MEM_ALLOC_SIZE = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_MEM_ALLOC_SIZE);
        this.MAX_PARAMETER_SIZE = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_PARAMETER_SIZE);
        this.MAX_READ_IMAGE_ARGS = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_READ_IMAGE_ARGS);
        this.MAX_SAMPLERS = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_SAMPLERS);
        this.MAX_WORK_GROUP_SIZE = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_WORK_GROUP_SIZE);
        this.MAX_WORK_ITEM_DIMENSIONS = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_WORK_ITEM_DIMENSIONS);
        this.MAX_WORK_ITEM_SIZES = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_WORK_ITEM_SIZES);
        this.MAX_WRITE_IMAGE_ARGS = device.getInfo(WEBCL.DeviceInfo.DEVICE_MAX_WRITE_IMAGE_ARGS);
        this.MEM_BASE_ADDR_ALIGN = device.getInfo(WEBCL.DeviceInfo.DEVICE_MEM_BASE_ADDR_ALIGN);
        this.NAME = device.getInfo(WEBCL.DeviceInfo.DEVICE_NAME);
        this.NATIVE_VECTOR_WIDTH_CHAR = device.getInfo(WEBCL.DeviceInfo.DEVICE_NATIVE_VECTOR_WIDTH_CHAR);
        this.NATIVE_VECTOR_WIDTH_FLOAT = device.getInfo(WEBCL.DeviceInfo.DEVICE_NATIVE_VECTOR_WIDTH_FLOAT);
        this.NATIVE_VECTOR_WIDTH_INT = device.getInfo(WEBCL.DeviceInfo.DEVICE_NATIVE_VECTOR_WIDTH_INT);
        this.NATIVE_VECTOR_WIDTH_LONG = device.getInfo(WEBCL.DeviceInfo.DEVICE_NATIVE_VECTOR_WIDTH_LONG);
        this.NATIVE_VECTOR_WIDTH_SHORT = device.getInfo(WEBCL.DeviceInfo.DEVICE_NATIVE_VECTOR_WIDTH_SHORT);
        this.OPENCL_C_VERSION = device.getInfo(WEBCL.DeviceInfo.DEVICE_OPENCL_C_VERSION);
        this.PLATFORM = device.getInfo(WEBCL.DeviceInfo.DEVICE_PLATFORM);
        this.PlatformInfo = platformInfo;
        this.PREFERRED_VECTOR_WIDTH_CHAR = device.getInfo(WEBCL.DeviceInfo.DEVICE_PREFERRED_VECTOR_WIDTH_CHAR);
        this.PREFERRED_VECTOR_WIDTH_FLOAT = device.getInfo(WEBCL.DeviceInfo.DEVICE_PREFERRED_VECTOR_WIDTH_FLOAT);
        this.PREFERRED_VECTOR_WIDTH_INT = device.getInfo(WEBCL.DeviceInfo.DEVICE_PREFERRED_VECTOR_WIDTH_INT);
        this.PREFERRED_VECTOR_WIDTH_LONG = device.getInfo(WEBCL.DeviceInfo.DEVICE_PREFERRED_VECTOR_WIDTH_LONG);
        this.PREFERRED_VECTOR_WIDTH_SHORT = device.getInfo(WEBCL.DeviceInfo.DEVICE_PREFERRED_VECTOR_WIDTH_SHORT);
        this.PROFILE = device.getInfo(WEBCL.DeviceInfo.DEVICE_PROFILE);
        this.PROFILING_TIMER_RESOLUTION = device.getInfo(WEBCL.DeviceInfo.DEVICE_PROFILING_TIMER_RESOLUTION);
        this.QUEUE_PROPERTIES = device.getInfo(WEBCL.DeviceInfo.DEVICE_QUEUE_PROPERTIES);
        this.SINGLE_FP_CONFIG = device.getInfo(WEBCL.DeviceInfo.DEVICE_SINGLE_FP_CONFIG);
        this.TYPE = device.getInfo(WEBCL.DeviceInfo.DEVICE_TYPE);
        this.VENDOR = device.getInfo(WEBCL.DeviceInfo.DEVICE_VENDOR);
        this.VENDOR_ID = device.getInfo(WEBCL.DeviceInfo.DEVICE_VENDOR_ID);
        this.VERSION = device.getInfo(WEBCL.DeviceInfo.DEVICE_VERSION);
    }
}

class ContextInfo {
    DEVICES: WEBCL.WebCLDevice[];

    constructor(
        public context: WEBCL.WebCLContext
        ) {
        this.DEVICES = context.getInfo(WEBCL.ContextInfo.CONTEXT_DEVICES);
    }
}

class KernelWorkGroupInfo {
    KERNEL_COMPILE_WORK_GROUP_SIZE: number;
    KERNEL_LOCAL_MEM_SIZE: number;
    KERNEL_PREFERRED_WORK_GROUP_SIZE_MULTIPLE: number;
    KERNEL_PRIVATE_MEM_SIZE: number;
    KERNEL_WORK_GROUP_SIZE: number;

    constructor(kernel: WEBCL.WebCLKernel, device: WEBCL.WebCLDevice) {
        this.KERNEL_COMPILE_WORK_GROUP_SIZE = kernel.getWorkGroupInfo(device, WEBCL.KernelWorkGroupInfo.KERNEL_COMPILE_WORK_GROUP_SIZE);
        this.KERNEL_LOCAL_MEM_SIZE = kernel.getWorkGroupInfo(device, WEBCL.KernelWorkGroupInfo.KERNEL_LOCAL_MEM_SIZE);
        this.KERNEL_PREFERRED_WORK_GROUP_SIZE_MULTIPLE = kernel.getWorkGroupInfo(device, WEBCL.KernelWorkGroupInfo.KERNEL_PREFERRED_WORK_GROUP_SIZE_MULTIPLE);
        this.KERNEL_PRIVATE_MEM_SIZE = kernel.getWorkGroupInfo(device, WEBCL.KernelWorkGroupInfo.KERNEL_PRIVATE_MEM_SIZE);
        this.KERNEL_WORK_GROUP_SIZE = kernel.getWorkGroupInfo(device, WEBCL.KernelWorkGroupInfo.KERNEL_WORK_GROUP_SIZE);
    }
}

class CommandQueueInfo {
    CONTEXT: WEBCL.WebCLContext;
    DEVICE: WEBCL.WebCLDevice;
    PROPERTIES: WEBCL.CommandQueueProperties;

    constructor(
        public queue: WEBCL.WebCLCommandQueue
        ) {
        this.CONTEXT = queue.getInfo(WEBCL.ContextProperties.QUEUE_CONTEXT);
        this.DEVICE = queue.getInfo(WEBCL.ContextProperties.QUEUE_DEVICE);
        this.PROPERTIES = queue.getInfo(WEBCL.ContextProperties.QUEUE_PROPERTIES);
    }
}

class MemoryObjectInfo {
    TYPE: WEBCL.MemObjectType;
    FLAGS: WEBCL.MemFlagsBits;
    SIZE: number;
    CONTEXT: WEBCL.WebCLContext;
    ASSOCIATED_MEMOBJECT: WEBCL.WebCLBuffer;
    OFFSET: number;

    constructor(
        public memoryObj: WEBCL.WebCLMemoryObject
        ) {
        this.TYPE = memoryObj.getInfo(WEBCL.MemInfo.MEM_TYPE);
        this.FLAGS = memoryObj.getInfo(WEBCL.MemInfo.MEM_FLAGS);
        this.SIZE = memoryObj.getInfo(WEBCL.MemInfo.MEM_SIZE);
        this.CONTEXT = memoryObj.getInfo(WEBCL.MemInfo.MEM_CONTEXT);
        this.ASSOCIATED_MEMOBJECT = memoryObj.getInfo(WEBCL.MemInfo.MEM_ASSOCIATED_MEMOBJECT);
        this.OFFSET = memoryObj.getInfo(WEBCL.MemInfo.MEM_OFFSET);
    }
}

class DeviceContext {
    deviceInfo: DeviceInfo;
    context: WEBCL.WebCLContext;

    constructor(public device?: WEBCL.WebCLDevice) {
        if (!device) {
            this.context = window.webcl.createContext();
            this.device = this.context.getInfo(WEBCL.ContextInfo.CONTEXT_DEVICES)[0];       // just use the first default device
        }
        else {
            this.context = window.webcl.createContext(device);      // use the specified device
        }
        this.deviceInfo = new DeviceInfo(this.device, undefined);       // save all the info about the device
    }
}

/**
* just enough for kernel args that are one of the
* UInt8Array, UInt16Array, etc. interfaces because they already the extra
* members.
* They will be used as
* either WEBCLBuffers or ArrayBufferViews
* TODO: How to handle WEBCLImages and WEBCLSamples
*/
interface KernelArgArrayBufferView extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
}

/**
* This holds the information for an argument
* passed as a WEBCLBuffer.
* This holds the original host buffer as a convenience if the
* same buffer is used for multiple calls.
* Multiple kernels can use the same arguments
*/
class ArgCLBuffer {
    public buffer: WEBCL.WebCLBuffer;

    constructor(
        public helper: WebCLHelper,
        public hostArray: KernelArgArrayBufferView,     // NOTE: this can just be a UInt8Array, UInt16Array, etc.
        public cpu2gpu: boolean,
        public gpu2cpu: boolean
        ) {
        this.makeCLBuffer(this.helper.devContext);     // make it as a buffer with the host array as the template
    }

    makeCLBuffer(context: DeviceContext): void {
        var rwflag: WEBCL.MemFlagsBits;
        if (this.cpu2gpu) {
            if (this.gpu2cpu) {
                rwflag = WEBCL.MemFlagsBits.MEM_READ_WRITE;
            }
            else {
                rwflag = WEBCL.MemFlagsBits.MEM_READ_ONLY;
            }
        }
        else {
            rwflag = WEBCL.MemFlagsBits.MEM_WRITE_ONLY;
        }

        this.buffer = context.context.createBuffer(rwflag, this.hostArray.length * this.hostArray.BYTES_PER_ELEMENT,
            this.hostArray);        // make the CLBuffer for the host array
    }

    queueGPU2CPU() {
        if (this.gpu2cpu) {
            this.helper.queue.enqueueReadBuffer(this.buffer, false, 0, this.hostArray.length * this.hostArray.BYTES_PER_ELEMENT,
                this.hostArray);       // queue up a write from the host mem to the GPU mem
        }
    }

    queueCPU2GPU() {
        if (this.cpu2gpu) {
            this.helper.queue.enqueueWriteBuffer(this.buffer, false, 0, this.hostArray.length * this.hostArray.BYTES_PER_ELEMENT,
                this.hostArray);       // queue up a write from the host mem to the GPU mem
        }
    }
}

/**
* Holder for a single kernel
*/
class Kernel {
    argCount: number = 0;
    CLBuffers: ArgCLBuffer[] = [];       // the read and write buffers for the kernel
    localWS: number[] = [];
    globalWS: number[] = [];
    bufferOffsets: number[] = [];
    clEvent: WEBCL.WebCLEvent;
    public executionTime: number;

    constructor(
        public helper: WebCLHelper,
        public name: string,
        public kernel: WEBCL.WebCLKernel,
        public workGroupInfo?: KernelWorkGroupInfo
        ) { }

    addArg(arg: ArgCLBuffer): number;
    addArg(arg: ArrayBufferView): number;
    addArg(arg: number): number;
    addArg(value: any): number {
        if (typeof (value) === "number") {          // integer values
            this.kernel.setArg(this.argCount, new Int32Array([<number>value]));
        } else if (value instanceof ArgCLBuffer) {      // clBuffer
            this.kernel.setArg(this.argCount,(<ArgCLBuffer> value).buffer);   // use the CLBuffer
            this.CLBuffers.push(<ArgCLBuffer> value);           // add to buffer array
        } else {                // all ArrayBufferView types
           this.kernel.setArg(this.argCount, value);
        }
        this.argCount += 1;
        return this.argCount - 1;
    }

    replaceArg(argIdx: number, arg: ArgCLBuffer): void;
    replaceArg(argIdx: number, arg: number): void;
    replaceArg(argIdx: number, arg: ArrayBufferView): void;
    replaceArg(argIdx: number, value: any): void {
        if (typeof (value) === "number") {
            this.kernel.setArg(argIdx, new Uint32Array([<number>value]));
        } else if (value instanceof ArgCLBuffer) {
            this.kernel.setArg(argIdx, (<ArgCLBuffer> value).buffer);   // use the CLBuffer
            this.CLBuffers[argIdx] = <ArgCLBuffer> value;           // replace entry is buffer array
        }
        else {
           this.kernel.setArg(this.argCount, value);
        }
    }

    setWorkSections(globalThreads: number[], localThreads?: number[], offsets?: number[]) {
        this.globalWS = globalThreads;

        if (localThreads) {
            this.localWS = [];
            localThreads.forEach((count, index) => {
                this.localWS.push(count);
                this.globalWS[index] = Math.ceil(globalThreads[index] / count) * count;
            });

        }
        else {
            this.localWS = undefined;
        }

        if (offsets) {
            this.bufferOffsets = offsets;
        }
        else {
            this.bufferOffsets = [];
            globalThreads.forEach(() => {
                this.bufferOffsets.push(0);
            });
        }
    }

    /**
    * Queue the transfers from CPU to GPU memory
    */
    queueCPU2GPUBuffers(whichBuffers?: ArgCLBuffer[]) {
        var buffers: ArgCLBuffer[];         // which to use
        if (whichBuffers) {
            buffers = whichBuffers;         // just the passed in ones
        } else {                        // use all of them
            buffers = this.CLBuffers;
        }

        buffers.forEach((value, idx) => {
            if (value.cpu2gpu) {
                value.queueCPU2GPU();
            }
        });     // load up all the GPU memory from the host for all the read arrays

    }

    /**
    * Queue the transfers from GPU to CPU memory
    */
    queueGPU2CPUBuffers(whichBuffers?: ArgCLBuffer[]) {
        var buffers: ArgCLBuffer[];         // which to use
        if (whichBuffers) {
            buffers = whichBuffers;         // just the passed in ones
        } else {                        // use all of them
            buffers = this.CLBuffers;
        }

        buffers.forEach((value, idx) => {
            if (value.gpu2cpu) {
                value.queueGPU2CPU();
            }
        });     // load up all the host arrays from the gpu memory for all the write arrays

    }

    /*
    * add this kernel to the queue for execution
    */
    queueExecution() {
        this.clEvent = new WebCLEvent();
        this.helper.queue.enqueueNDRangeKernel(this.kernel, this.globalWS.length, this.bufferOffsets, this.globalWS, this.localWS, undefined, this.clEvent);  // the kernel
    }

    /**
    * Load up all the GPU memory, queue the kernel,
    * read the GPU memory back into the CPU memory
    */
    queueBuffersAndExecute() {
        this.queueCPU2GPUBuffers();     // load up all the GPU memory from the host for all the read arrays

        this.queueExecution();

        this.queueGPU2CPUBuffers();

        this.helper.finishQueue();

        this.calcExecutionTime();

    }

    calcExecutionTime() {
        if (this.helper.profileFlag && this.clEvent) {
            var startTime: number;
            var endTime: number;

            startTime = this.clEvent.getProfilingInfo(WEBCL.ProfilingInfo.PROFILING_COMMAND_START);
            endTime = this.clEvent.getProfilingInfo(WEBCL.ProfilingInfo.PROFILING_COMMAND_END);
            this.executionTime = endTime - startTime;
        }
        else {
            this.executionTime = undefined;
        }
    }
}

/**
* This holds all the information and setup for a platform and device
* for a program. Multiple kernels and arguments can be created which are
* passed back to the user to manage.
*/

class WebCLHelper {
    platforms: PlatformInfo[] = new Array<PlatformInfo>();
    devContext: DeviceContext;         // context or undefined if released
    queue: WEBCL.WebCLCommandQueue;     // the command queue for the device
    programCode: string;                // the code for this progam
    program: WEBCL.WebCLProgram;

    // Create the helper and load up all the platforms and devices
    constructor(public profileFlag: boolean = false) {
        if (window.webcl == undefined) {
            throw (new CLHException("Webcl not found"));
        }
        else {
//            try {
                var platforms = window.webcl.getPlatforms();
                if (platforms.length < 1) {
                    throw (new CLHException("WEBCL there but no platforms"));
                }
                else {
                    var devicesCount = 0;       // keep track of total devices
                    platforms.forEach(
                        (platform) => {             // setup info for platform and get all of its devices
                            var platformInfo = new PlatformInfo(platform);
                            var devices = platform.getDevices();
                            devicesCount += devices.length;
                            devices.forEach(
                                (device) => {
                                    var deviceInfo = new DeviceInfo(device, platformInfo);     // get the info
                                    platformInfo.deviceInfos.push(deviceInfo);      // add to this platform's devices
                                });
                            this.platforms.push(platformInfo);
                        });

                }
                if (devicesCount < 1) {
                    throw (new CLHException("Webcl there with " + this.platforms.length + " platforms, but no devices"));
                }
                this.setDeviceContext();        // set the device context using the default, can explicitly set if desired.
/*            }
            catch (ex) {
                throw (ex)
            }
*/
        }
    }


    /**
    * Set a context for a particular device type using a list of types
    * in preferred order. Normally this wouldn't be used since the helper constructor
    * sets the default device as the context.
    */
    setDeviceContext(deviceTypes: WEBCL.DeviceTypeBits[]= [WEBCL.DeviceTypeBits.DEVICE_TYPE_DEFAULT] // optional, if empty default
        ): DeviceContext {
        var device: DeviceInfo;

        deviceTypes.some((type) => {            // go through the input types in preference order
            if ((type & WEBCL.DeviceTypeBits.DEVICE_TYPE_DEFAULT) != 0) {
                device = null;
                return true;
            }
            else {
                device = this.platforms.reduce<DeviceInfo>((targetdevice, platform, index, array) => {
                    if (!targetdevice) {
                        platform.deviceInfos.some((deviceInfo: DeviceInfo) => {
                            if ((deviceInfo.TYPE & type) != 0) {
                                targetdevice = deviceInfo;
                                return true;
                            }
                            else {
                                return false;
                            }
                        });
                    }
                    return targetdevice;
                }, undefined);
                return (device != undefined);
            }              // find the first device of the specified type
        });

        if (device === undefined) {
            throw ("No device found");
        }
        else {
            if (this.devContext) {
                this.devContext.context.release();
                this.devContext = undefined;
            }
            if (device === null) {
                this.devContext = new DeviceContext();     // get the default context
            }
            else {              // use a specific one
                this.devContext = new DeviceContext(device.device);        // get the context for the device
            }
            if (this.queue) {
                this.queue.release();
                this.queue = undefined;
            }

            this.queue = this.devContext.context.createCommandQueue(this.devContext.device, this.profileFlag ? WEBCL.CommandQueueProperties.QUEUE_PROFILING_ENABLE : undefined);

            return this.devContext;
        }
    }

    /*
    * finish the queue
    */
    finishQueue() {
        if (this.queue) {
            this.queue.finish();
        }
    }

    /*
    * Set context, GPU preferred
    * Only used if the default device as set in the constructor isn't correct
    */
    setGPUcontext(): DeviceContext {
        return this.setDeviceContext([WEBCL.DeviceTypeBits.DEVICE_TYPE_GPU, WEBCL.DeviceTypeBits.DEVICE_TYPE_CPU]);
    }

    /*
    * Set context, CPU preferred
    * Only used if the default device as set in the constructor isn't correct
    */
    setCPUcontext(): DeviceContext {
        return this.setDeviceContext([WEBCL.DeviceTypeBits.DEVICE_TYPE_CPU, WEBCL.DeviceTypeBits.DEVICE_TYPE_GPU]);
    }

    /**
    * release the current context
    */
    releaseContext() {
        if (this.devContext != undefined) {
            this.devContext.context.releaseAll;
            this.devContext = undefined;
            this.queue = undefined;
        }
    }

    createProgramFromElement(htmlID: string, options: string = undefined) {
        var element: JQuery = jQuery("#" + htmlID);                  //x_Utilities.JQueryUtils.tryJQuery(() => jQuery("#" + htmlID));      // get the kernel code item
        this.createProgram(element.text(), options);
    }

    createProgram(code: string, options: string = undefined) {
        this.programCode = code;
        this.program = this.devContext.context.createProgram(this.programCode);
        this.program.build([this.devContext.device], options);
    }

    createKernelFromString(programSource: string, kernelName: string, options: string = undefined): Kernel {
        this.createProgram(programSource, options);
        return this.createKernel(kernelName);
    }

    createKernelFromElement(htmlID: string, kernelName: string, options: string = undefined) : Kernel {
        this.createProgramFromElement(htmlID, options);
        return this.createKernel(kernelName);
    }

    createKernel(kernelName: string): Kernel {
        var kernel: WEBCL.WebCLKernel = this.program.createKernel(kernelName);      // create the kernel
        var info: KernelWorkGroupInfo = new KernelWorkGroupInfo(kernel, this.devContext.device);        // get the info about it's workgroup
        return new Kernel(this, kernelName, kernel, info);       // create and return the kernel holder
    }

    executeKernel(kernel: Kernel) {
        kernel.queueBuffersAndExecute ();
    }

    createBufferArg(hostBuffer: KernelArgArrayBufferView, cpu2gpu: boolean, gpu2cpu: boolean): ArgCLBuffer {
        return new ArgCLBuffer(this, hostBuffer, cpu2gpu, gpu2cpu);
    }


}

