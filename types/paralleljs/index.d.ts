// Type definitions for parallel.js
// Project: https://github.com/parallel-js/parallel.js#readme
// Definitions by: Josh Baldwin <https://github.com/jbaldwin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
Copyright(c) 2013 Josh Baldwin https://github.com/jbaldwin/parallel.d.ts

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files(the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and / or sell 
copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.
*/

interface ParallelOptions {

    /**
    * This is the path to the file eval.js.  This is required when running in node, and required for some browsers (IE 10) in order to work around cross-domain restrictions for web workers.  Defaults to the same location as parallel.js in node environments, and null in the browser.
    **/
    evalPath?: string;

    /**
    * The maximum number of permitted worker threads.  This will default to 4, or the number of cpus on your computer if you're running node.
    **/
    maxWorkers?: number;

    /**
    * If webworkers are not available, whether or not to fall back to synchronous processing using setTimeout.  Defaults to true.
    **/
    synchronous?: boolean;
}

declare class Parallel<T> {

    /**
    * This is the constructor.  Use it to new up any parallel jobs.  The constructor takes an array of data you want to operate on.  This data will be held in memory until you finish your job, and can be accessed via the .data attribute of your job.
    * The object returned by the Parallel constructor is meant to be chained, so you can produce a chain of operations on the provided data.
    * @param data This is the data you wish to operate on.  Will often be an array, but the only restrictions are that your values are serializable as JSON.
    * @param opts Some options for your job.
    **/
    constructor(data: T, opts?: ParallelOptions);

    /**
    * Data
    **/
    public data: T;

    /**
    * This function will spawn a new process on a worker thread.  Pass it the function you want to call.  Your function will receive one argument, which is the current data.  The value returned from your spawned function will update the current data.
    * @param fn A function to execute on a worker thread.  Receives the wrapped data as an argument.  The value returned will be assigned to the wrapped data.
    * @return Parallel instance.
    **/
    public spawn(fn: (data: T) => T): Parallel<T>;

    /**
    * Map will apply the supplied function to every element in the wrapped data.  Parallel will spawn one worker for each array element in the data, or the supplied maxWorkers argument.  The values returned will be stored for further processing.
    * @param fn A function to apply.  Receives the wrapped data as an argument.  The value returned will be assigned to the wrapped data.
    * @return Parallel instance.
    **/
    public map<N>(fn: (data: N) => N): Parallel<T>;

    /**
    * Reduce applies an operation to every member of the wrapped data, and returns a scalar value produced by the operation.  Use it for combining the results of a map operation, by summing numbers for example.  This takes a reducing function, which gets an argument, data, an array of the stored value, and the current element.
    * @param fn A function to apply.  Receives the stored value and current element as argument.  The value returned will be stored as the current value for the next iteration.  Finally, the current value will be assigned to current data.
    * @return Parallel instance.
    **/
    public reduce<N>(fn: (data: N[]) => N): Parallel<T>;

    /**
    * The functions given to then are called after the last requested operation has finished.  success receives the resulting data object, while fail will receive an error object.
    * @param success A function that gets called upon successful completion.  Receives the wrapped data as an argument.
    * @param fail A function that gets called if the job fails.  The function is passed an error object.
    * @return Parallel instance.
    **/
    public then(success: (data: T) => void, fail?: (e: Error) => void): Parallel<T>;

    /**
    * If you have state that you want to share between your main thread and worker threads, this is how.  Require takes either a string or a function.  A string should point to a file name.  NOte that in order to use require with a file name as an argument, you have to provide the evalPath property in the options object.
    * @param state Shared state function or js file.
    * @return Parallel instance.
    **/
    public require(file: string): Parallel<T>;

    /**
    * @see require
    **/
    public require(fn: Function): Parallel<T>;
}

/* commonjs binding for npm use */
declare module "paralleljs" {
    export = Parallel;
}
