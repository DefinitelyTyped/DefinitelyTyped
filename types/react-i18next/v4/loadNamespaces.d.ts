import * as React from "react";
import { i18n } from "i18next";

export interface LoadNamespacesArguments {
    components: Array<React.ComponentClass<any> | React.StatelessComponent<any>>;
    i18n: i18n;
}

export default function loadNamespaces(args: LoadNamespacesArguments): Promise<void>;
