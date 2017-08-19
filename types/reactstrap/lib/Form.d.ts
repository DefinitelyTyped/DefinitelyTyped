import { CSSModule } from '../index';

interface Props extends React.HTMLProps<HTMLFormElement> {
  inline?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare var Form: React.StatelessComponent<Props>;
export default Form;
