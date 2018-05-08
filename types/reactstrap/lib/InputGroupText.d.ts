import { CSSModule } from '../index';

export interface InputGroupTextProps extends React.HTMLAttributes<HTMLElement>  {
  tag?: React.ReactType;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const InputGroupText: React.StatelessComponent<InputGroupTextProps>;
export default InputGroupText;
