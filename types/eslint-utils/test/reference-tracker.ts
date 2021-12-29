import { Scope } from 'eslint';
import * as utils from 'eslint-utils';

declare const scope: Scope.Scope;
declare const traceMap: utils.TraceMap;

utils.ReferenceTracker.CALL;
utils.ReferenceTracker.CONSTRUCT;
utils.ReferenceTracker.ESM;
utils.ReferenceTracker.READ;

new utils.ReferenceTracker(scope, {});
new utils.ReferenceTracker(scope, { globalObjectNames: ['Boolean'] });
new utils.ReferenceTracker(scope, { mode: Math.random() ? 'legacy' : 'strict' });

const referenceTracker = new utils.ReferenceTracker(scope);

// $ExpectType IterableIterator<TrackedReferences<unknown>>
referenceTracker.iterateCjsReferences(traceMap);

// $ExpectType IterableIterator<TrackedReferences<unknown>>
referenceTracker.iterateEsmReferences(traceMap);

// $ExpectType IterableIterator<TrackedReferences<unknown>>
referenceTracker.iterateGlobalReferences(traceMap);

// $ExpectType IterableIterator<TrackedReferences<{ type: string; }>>
referenceTracker.iterateCjsReferences({ test: { [utils.ReferenceTracker.READ]: { type: 'string' } } });

// $ExpectType IterableIterator<TrackedReferences<{ type: string; } | { type: number; }>>
referenceTracker.iterateGlobalReferences({ test: { [utils.ReferenceTracker.READ]: { type: 'string' }, [utils.ReferenceTracker.CALL]: { type: 6 } } });

function *getTrackedReferences() {
    const { info, node, path, type } = yield referenceTracker.iterateCjsReferences(traceMap);
}
