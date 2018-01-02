import { FormStateMap } from "redux-form";

export declare function formValueSelector<State = {}>(
    form: string,
    getFormState?: (state: State) => FormStateMap
): (state: State, ...field: string[]) => any;

export default formValueSelector;
