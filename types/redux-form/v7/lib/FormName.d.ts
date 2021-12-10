import { ReactNode, FunctionComponent } from "react";

export interface FormNameProps {
    children: (props: { form: string }) => ReactNode;
}

export const FormName: FunctionComponent<FormNameProps>;

export default FormName;
