import { ComponentType, JSX, SVGProps } from "react";

import Dashicon from "../dashicon";

declare namespace Icon {
    type IconType<P> = Dashicon.Icon | ComponentType<P> | JSX.Element;
    interface BaseProps<P> {
        /**
         * The icon to render. Supported values are: Dashicons (specified as
         * strings), functions, WPComponent instances and `null`.
         * @defaultValue null
         */
        icon?: IconType<P> | undefined;
        /**
         * The size (width and height) of the icon.
         * @defaultValue `20` (when using Dashicon), `24` otherwise
         */
        size?: number | undefined;
    }
    // prettier-ignore
    type AdditionalProps<T> = T extends ComponentType<infer U> ? U
        : T extends Dashicon.Icon ? SVGProps<SVGSVGElement>
        : {};
    type Props<P> = BaseProps<P> & AdditionalProps<IconType<P>>;
}
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function Icon<P>(props: Icon.Props<P>): JSX.Element;

export default Icon;
