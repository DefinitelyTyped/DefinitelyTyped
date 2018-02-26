import { CSSModule } from '../index';

export interface RowProps extends React.HTMLProps<HTMLElement> {
  className?: string;
  cssModule?: CSSModule;
  tag?: React.ReactType;
  noGutters?: boolean;
}

declare const Row: React.StatelessComponent<RowProps>;
export default Row;
