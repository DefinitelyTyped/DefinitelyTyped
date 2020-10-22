import * as React from 'react';

import Select from 'react-select';

interface GroupOption {
  label: string;
  value: {
    email: string
    name: string
  };
}

function filterOption(option: GroupOption, rawInput: string): boolean {
  return (option.value.email + option.value.name).includes(rawInput);
}

const values: GroupOption[] = [
    { label: "", value: { email: "", name: "" }}
];

export default () => (
  <Select<GroupOption>
    defaultValue={values[0]}
    options={values}
    filterOption={filterOption}
  />
);
