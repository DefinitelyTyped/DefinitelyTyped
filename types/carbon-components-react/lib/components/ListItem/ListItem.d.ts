import * as React from "react";
import { ReactLIAttr } from "../../../typings/shared";

interface InheritedProps extends ReactLIAttr { }

export interface ListItemProps extends InheritedProps { }

declare const ListItem: React.FC<ListItemProps>;

export default ListItem;
