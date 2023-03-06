import { Scope } from 'eslint';
import * as utils from 'eslint-utils';

declare const scope: Scope.Scope;

const traceMap = {
    find: { [utils.ReferenceTracker.CALL]: true }, // Simulate searching for call to find().
};

utils.ReferenceTracker.CALL;
utils.ReferenceTracker.CONSTRUCT;
utils.ReferenceTracker.ESM;
utils.ReferenceTracker.READ;

new utils.ReferenceTracker(scope, {});
new utils.ReferenceTracker(scope, { globalObjectNames: ['Boolean'] });
new utils.ReferenceTracker(scope, { mode: Math.random() ? 'legacy' : 'strict' });

const referenceTracker = new utils.ReferenceTracker(scope);

// $ExpectType IterableIterator<TrackedReferences<boolean>>
referenceTracker.iterateCjsReferences(traceMap);

// $ExpectType IterableIterator<TrackedReferences<boolean>>
referenceTracker.iterateEsmReferences(traceMap);

// $ExpectType IterableIterator<TrackedReferences<boolean>>
referenceTracker.iterateGlobalReferences(traceMap);

// $ExpectType IterableIterator<TrackedReferences<{ type: string; }>>
referenceTracker.iterateCjsReferences({ test: { [utils.ReferenceTracker.READ]: { type: 'string' } } });

// $ExpectType IterableIterator<TrackedReferences<{ type: string; } | { type: number; }>>
referenceTracker.iterateGlobalReferences({ test: { [utils.ReferenceTracker.READ]: { type: 'string' }, [utils.ReferenceTracker.CALL]: { type: 6 } } });

for (const { info, node, path, type } of referenceTracker.iterateCjsReferences(traceMap)) {
    info; // $ExpectType boolean
    node; // $ExpectType Node
    path; // $ExpectType string[]
    type; // $ExpectType symbol

    // Ensure node has its parent node (which is added to it by ESLint).
    node.parent; // $ExpectType Node
}
