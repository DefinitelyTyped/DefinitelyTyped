import * as File from "vinyl";

export = gulp_flatmap;

/**
 * @param func
 *
 * The flatmap method takes one argument, a function. This function is called once for each file
 * piped to flatmap and is passed a stream as its first argument and the vinyl file as its second
 * argument. The stream contains only one file.
 *
 * You can now pipe this stream through as many steps as you want, before returning it from the
 * function. All the streams returned from flatmap will be combined and their contents will be
 * emited by flatmap.
 *
 * @todo Generify if <https://github.com/DefinitelyTyped/DefinitelyTyped/issues/2134> is ever solved
 */
declare function gulp_flatmap(
    func: (stream: NodeJS.ReadableStream, file: File) => NodeJS.ReadableStream,
): NodeJS.ReadWriteStream;
