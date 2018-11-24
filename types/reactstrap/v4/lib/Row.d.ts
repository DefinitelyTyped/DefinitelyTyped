import { CommonProps } from '../index';

interface Props extends CommonProps, React.ComponentPropsWithoutRef<'div'> {
  noGutters?: boolean;
}

declare var Row: React.StatelessComponent<Props>;
export default Row;
