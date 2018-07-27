export type InstructionsContext = { isSearchable?: boolean, isMulti?: boolean, label?: string };
export type ValueEventContext = { value: string };

export const instructionsAriaMessage: (event: any, context?: InstructionsContext) => string;

export const valueEventAriaMessage: (event: any, context: ValueEventContext) => string;

export const valueFocusAriaMessage: ({ focusedValue, getOptionLabel, selectValue }: any) => string;
export const optionFocusAriaMessage: ({ focusedOption, getOptionLabel, options }: any) => string;
export const resultsAriaMessage: ({ inputValue, screenReaderMessage }: any) => string;
