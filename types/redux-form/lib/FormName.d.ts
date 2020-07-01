import { ReactNode, StatelessComponent } from "react";

export interface FormNameProps {
    children: (props: { form: string, sectionPrefix?: string }) => ReactNode;
}

export const FormName: StatelessComponent<FormNameProps>;

export default FormName;
