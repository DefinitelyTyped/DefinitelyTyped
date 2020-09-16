import { Styles } from "../../index";

declare function useStyles<TStyles extends Styles>({ stylesFn }: { stylesFn: (...args: any[]) => TStyles }): {
  css: Function;
  styles: TStyles;
}

export default useStyles;
