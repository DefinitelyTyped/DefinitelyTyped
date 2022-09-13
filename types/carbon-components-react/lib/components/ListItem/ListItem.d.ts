import * as React from "react";
import { ReactLIAttr } from "../../../typings/shared";

export interface ListItemProps extends ReactLIAttr { }

declare const ListItem: React.FC<ListItemProps>;

export default ListItem;
