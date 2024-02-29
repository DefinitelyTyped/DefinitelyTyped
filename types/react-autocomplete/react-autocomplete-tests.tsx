import * as Autocomplete from "react-autocomplete";

import * as React from "react";

const items = ["hello", "world"];

<Autocomplete
    items={items}
    getItemValue={(item) => item}
    renderItem={(item) => <div key={item}>{item}</div>}
    value={items[0]}
/>;

// @ts-expect-error
const renderMenu: React.ComponentProps<typeof Autocomplete>["renderMenu"] = (item: string[]) => <div></div>;
