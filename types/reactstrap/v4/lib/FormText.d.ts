import { CommonProps } from '../index';

interface Props extends CommonProps {
  inline?: boolean;
  color?: string;
}

declare var FormText: React.StatelessComponent<Props>;
export default FormText;
