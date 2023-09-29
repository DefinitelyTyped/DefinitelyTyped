import { ComponentType } from "react";
import { RelayPaginationProp, RelayProp, RelayRefetchProp } from "react-relay";

/**
 * Returns original component class wrapped by e.g. createFragmentContainer
 */
declare function unwrapContainer<Props>(
    ComponentClass: ComponentType<Props | RelayProp | RelayPaginationProp | RelayRefetchProp>,
): ComponentType<Props>;

export = unwrapContainer;
