// Type definitions for react-css-collapse 3.6.0
// Project: https://github.com/SparebankenVest/react-css-collapse;
// Definitions by: Daniel Ford <https://github.com/dford07>1
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0.3

declare module 'react-css-collapse' {
  interface Props {
    isOpen: boolean;
    className?: string | null;
    onRest?: () => void;
    transition?: string | null;
  }
  class Collapse extends React.Component<Props> {
    public render(): React.ReactElement<Props>;
  }
  export default Collapse;
}
