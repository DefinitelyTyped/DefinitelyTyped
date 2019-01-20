import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

interface Props extends ReactDOM.HTMLProps<HTMLFormElement> {
  inline?: boolean;
  tag?: React.ReactType;
  getRef?: string | ((instance: HTMLButtonElement) => any);
  className?: string;
  cssModule?: CSSModule;
}

declare var Form: React.StatelessComponent<Props>;
export default Form;
