import * as React from "react";

export = createFragment;

declare function createFragment(object: { [key: string]: React.ReactNode }): Iterable<React.ReactNode>;
