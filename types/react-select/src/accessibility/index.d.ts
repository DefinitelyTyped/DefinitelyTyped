export interface InstructionsContext {
    isSearchable?: boolean | undefined;
    isMulti?: boolean | undefined;
    label?: string | undefined;
}
export interface ValueEventContext {
    value: string;
}

export function instructionsAriaMessage(event: any, context?: InstructionsContext): string;

export function valueEventAriaMessage(event: any, context: ValueEventContext): string;

export function valueFocusAriaMessage({ focusedValue, getOptionLabel, selectValue }: any): string;
export function optionFocusAriaMessage({ focusedOption, getOptionLabel, options }: any): string;
export function resultsAriaMessage({ inputValue, screenReaderMessage }: any): string;
