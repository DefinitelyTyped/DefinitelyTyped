import clownface from './index.js';

interface ClownfaceFactory {
    clownface: typeof clownface;
}

declare class ClownfaceFactory {
    static readonly exports: ['clownface'];
}

export default ClownfaceFactory;
