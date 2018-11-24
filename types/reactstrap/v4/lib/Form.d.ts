import { CommonProps } from '../index';

interface Props extends CommonProps, React.ComponentPropsWithoutRef<'form'> {
  inline?: boolean;
  getRef?: string | ((instance: HTMLButtonElement) => any);
}

declare var Form: React.StatelessComponent<Props>;
export default Form;
