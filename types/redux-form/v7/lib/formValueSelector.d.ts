import { FormStateMap } from "../index";

export function formValueSelector<State = {}>(
    form: string,
    getFormState?: (state: State) => FormStateMap
): (state: State, ...field: string[]) => any;

export default formValueSelector;
