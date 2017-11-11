import { CSSModule } from '../index';

export interface FormProps extends React.HTMLProps<HTMLFormElement> {
  inline?: boolean;
  tag?: React.ReactType;
  innerRef?: string | ((instance: HTMLButtonElement) => any);
  className?: string;
  cssModule?: CSSModule;
}

export const Form: React.StatelessComponent<FormProps>;
