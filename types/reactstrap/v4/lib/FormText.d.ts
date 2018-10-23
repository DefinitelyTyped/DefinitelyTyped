import { CSSModule } from '../index';

interface Props {
  inline?: boolean;
  tag?: React.ReactType;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
}

declare var FormText: React.StatelessComponent<Props>;
export default FormText;
