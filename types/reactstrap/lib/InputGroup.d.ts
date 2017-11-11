import { CSSModule } from '../index';

export interface InputGroupProps {
  tag?: React.ReactType;
  size?: string;
  className?: string;
  cssModule?: CSSModule;
}

export const InputGroup: React.StatelessComponent<InputGroupProps>;
export default InputGroup;
