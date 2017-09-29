import { FormStateMap } from "redux-form";

declare function formValueSelector<State = {}>(
    form: string,
    getFormState?: (state: State) => FormStateMap
): (state: State, ...field: string[]) => any;
