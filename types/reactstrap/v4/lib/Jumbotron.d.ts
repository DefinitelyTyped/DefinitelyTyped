import { CommonProps } from '../index';

interface Props extends CommonProps {
  fluid?: boolean;
}

declare var Jumbotron: React.StatelessComponent<Props>;
export default Jumbotron;
