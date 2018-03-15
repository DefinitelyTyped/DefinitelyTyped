import { CSSModule } from '../index';

export interface InputGroupTextProps extends React.HTMLAttributes<HTMLElement>  {
  tag?: React.ReactType;
  cssModule?: CSSModule;
}

declare const InputGroupText: React.StatelessComponent<InputGroupTextProps>;
export default InputGroupText;
