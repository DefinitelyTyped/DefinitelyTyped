import * as React from "react";
import Select, * as ReactSelect from "react-select";
import VirtualizedSelect from "react-virtualized-select";

/*Example TValue.*/
interface Example {
    name: string;
}

/*Example generic class.*/
class ExampleSelectAsync extends VirtualizedSelect<Example> {
}

class ExampleSelectCreatable extends VirtualizedSelect<Example> {
}

<div>
    <VirtualizedSelect
      maxHeight={0}
      optionHeight={0}
      optionRenderer={() => <div/>}
      selectComponent={Select}
      options={[]}
    />
    <ExampleSelectAsync async={true}
      maxHeight={0}
      optionHeight={0}
      optionRenderer={() => <div/>}
      selectComponent={Select}
      loadOptions={(input: string) => Promise.resolve([{name: 'Hi'}])}
    />
    <ExampleSelectCreatable
      selectComponent={ReactSelect.Creatable}
      isValidNewOption={(arg: {label: string}) => arg.label.length > 1}
    />
</div>;
