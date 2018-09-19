import { Source } from './ReactElementType';
import { ExpirationTime } from './ReactFiberExpirationTime';
import { ContextDependency } from './ReactFiberNewContext';
import { SideEffectTag } from './ReactSideEffectTags';
import { TypeOfMode } from './ReactTypeOfMode';
import { RefObject } from './ReactTypes';
import { UpdateQueue } from './ReactUpdateQueue';
import { WorkTag } from './ReactWorkTags';

// A Fiber is work on a Component that needs to be done or was done. There can
// be more than one per component.
export interface Fiber {
    // These first fields are conceptually members of an Instance. This used to
    // be split into a separate type and intersected with the other Fiber fields,
    // but until Flow fixes its intersection bugs, we've merged them into a
    // single type.

    // An Instance is shared between all versions of a component. We can easily
    // break this out into a separate object to avoid copying so much to the
    // alternate versions of the tree. We put this on a single object for now to
    // minimize the number of objects created during the initial render.

    // Tag identifying the type of fiber.
    tag: WorkTag;

    // Unique identifier of this child.
    key: null | string;

    // The function/class/module associated with this fiber.
    type: any;

    // The local state associated with this fiber.
    stateNode: any;

    // Conceptual aliases
    // parent : Instance -> return The parent happens to be the same as the
    // return fiber since we've merged the fiber and instance.

    // Remaining fields belong to Fiber

    // The Fiber to return to after finishing processing this one.
    // This is effectively the parent, but there can be multiple parents (two)
    // so this is only the parent of the thing we're currently processing.
    // It is conceptually the same as the return address of a stack frame.
    return: Fiber | null;

    // Singly Linked List Tree Structure.
    child: Fiber | null;
    sibling: Fiber | null;
    index: number;

    // The ref last used to attach this node.
    // I'll avoid adding an owner field for prod and model that as functions.
    ref: null | (((handle: unknown) => void) & { _stringRef: string | null | undefined }) | RefObject;

    // Input is the data coming into process this fiber. Arguments. Props.
    pendingProps: any; // This type will be more specific once we overload the tag.
    memoizedProps: any; // The props used to create the output.

    // A queue of state updates and callbacks.
    updateQueue: UpdateQueue<any> | null;

    // The state used to create the output
    memoizedState: any;

    // A linked-list of contexts that this fiber depends on
    firstContextDependency: ContextDependency<unknown> | null;

    // Bitfield that describes properties about the fiber and its subtree. E.g.
    // the AsyncMode flag indicates whether the subtree should be async-by-
    // default. When a fiber is created, it inherits the mode of its
    // parent. Additional flags can be set at creation time, but after that the
    // value should remain unchanged throughout the fiber's lifetime, particularly
    // before its child fibers are created.
    mode: TypeOfMode;

    // Effect
    effectTag: SideEffectTag;

    // Singly linked list fast path to the next fiber with side-effects.
    nextEffect: Fiber | null;

    // The first and last fiber with side-effect within this subtree. This allows
    // us to reuse a slice of the linked list when we reuse the work done within
    // this fiber.
    firstEffect: Fiber | null;
    lastEffect: Fiber | null;

    // Represents a time in the future by which this work should be completed.
    // Does not include work found in its subtree.
    expirationTime: ExpirationTime;

    // This is used to quickly determine if a subtree has no pending changes.
    childExpirationTime: ExpirationTime;

    // This is a pooled version of a Fiber. Every fiber that gets updated will
    // eventually have a pair. There are cases when we can clean up pairs to save
    // memory if we need to.
    alternate: Fiber | null;

    // Time spent rendering this Fiber and its descendants for the current update.
    // This tells us how well the tree makes use of sCU for memoization.
    // It is reset to 0 each time we render and only updated when we don't bailout.
    // This field is only set when the enableProfilerTimer flag is enabled.
    actualDuration?: number;

    // If the Fiber is currently active in the "render" phase,
    // This marks the time at which the work began.
    // This field is only set when the enableProfilerTimer flag is enabled.
    actualStartTime?: number;

    // Duration of the most recent render time for this Fiber.
    // This value is not updated when we bailout for memoization purposes.
    // This field is only set when the enableProfilerTimer flag is enabled.
    selfBaseDuration?: number;

    // Sum of base times for all descedents of this Fiber.
    // This value bubbles up during the "complete" phase.
    // This field is only set when the enableProfilerTimer flag is enabled.
    treeBaseDuration?: number;

    // Conceptual aliases
    // workInProgress : Fiber ->  alternate The alternate used for reuse happens
    // to be the same as work in progress.
    // __DEV__ only
    _debugID?: number;
    _debugSource?: Source | null;
    _debugOwner?: Fiber | null;
    _debugIsCurrentlyTiming?: boolean;
}
