import * as React from "react";

declare function merge_refs<T>(...refs: Array<React.Ref<T>>): (instance: T) => void;
export default merge_refs;
