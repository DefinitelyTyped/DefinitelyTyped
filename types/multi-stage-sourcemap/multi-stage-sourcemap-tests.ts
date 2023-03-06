import { transfer } from 'multi-stage-sourcemap';
import { SourceMapGenerator } from 'source-map';

const old = new SourceMapGenerator();
/**
 * new source map, based off the previous
 */
const updatedOld = new SourceMapGenerator();

{
    const transfered = transfer({
        fromSourceMap: updatedOld.toJSON(),
        toSourceMap: old.toJSON(),
    });

    JSON.parse(transfered);
}

// all varations of options

{
    const transfered = transfer({
        fromSourceMap: updatedOld.toJSON(),
        toSourceMap: old.toString(),
    });

    JSON.parse(transfered);
}

{
    const transfered = transfer({
        fromSourceMap: updatedOld.toString(),
        toSourceMap: old.toJSON(),
    });

    JSON.parse(transfered);
}

{
    const transfered = transfer({
        fromSourceMap: updatedOld.toString(),
        toSourceMap: old.toString(),
    });

    JSON.parse(transfered);
}
