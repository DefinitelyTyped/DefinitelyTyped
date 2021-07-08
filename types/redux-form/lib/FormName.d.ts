import { ReactNode, StatelessComponent } from "react";

export interface FormNameProps {
    children: (props: { form: string, sectionPrefix?: string | undefined }) => ReactNode;
}

export const FormName: StatelessComponent<FormNameProps>;

export default FormName;
