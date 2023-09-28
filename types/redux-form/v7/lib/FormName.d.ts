import { FunctionComponent, ReactNode } from "react";

export interface FormNameProps {
    children: (props: { form: string }) => ReactNode;
}

export const FormName: FunctionComponent<FormNameProps>;

export default FormName;
