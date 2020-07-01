import { ReactNode, StatelessComponent } from "react";

export interface FormNameProps {
    children: (props: { form: string }) => ReactNode;
}

export const FormName: StatelessComponent<FormNameProps>;

export default FormName;
