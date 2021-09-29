import * as stream from 'stream';

type FirstOrDuplex<First, T extends stream[]> = T[1] extends never ? stream.Duplex : First;

export default function combine<T extends stream>(
    streams: [T] | stream[],
    options?: stream.DuplexOptions,
): FirstOrDuplex<T, typeof streams>;

export {};
