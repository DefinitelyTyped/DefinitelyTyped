import * as React from 'react';
import Select, { OptionTypeBase, Props } from 'react-select';

// tslint:disable-next-line:no-unnecessary-generics
export function CustomSelect<IsMultiType extends boolean>(props: Props<OptionTypeBase, IsMultiType>) {
    return <Select {...props} />;
}
