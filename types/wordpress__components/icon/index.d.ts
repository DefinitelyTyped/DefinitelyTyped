import { ComponentType, SVGProps, ReactComponentElement, ReactDOM } from 'react';

import Dashicon from '../dashicon';

declare namespace Icon {
    type IconType<P> = Dashicon.Icon | ComponentType<P> | JSX.Element;
    interface BaseProps<P> {
        /**
         * The icon to render. Supported values are: Dashicons (specified as
         * strings), functions, WPComponent instances and `null`.
         * @defaultValue null
         */
        icon?: IconType<P>;
        /**
         * The size (width and height) of the icon.
         * @defaultValue `20` (when using Dashicon), `24` otherwise
         */
        size?: number;
    }
    // prettier-ignore
    type AdditionalProps<T> =
        T extends ComponentType<infer U> ? U :
        T extends Dashicon.Icon ? SVGProps<SVGSVGElement> :
        {};
    type Props<P> = BaseProps<P> & AdditionalProps<IconType<P>>;
}
// tslint:disable-next-line:no-unnecessary-generics
declare function Icon<P>(props: Icon.Props<P>): JSX.Element;

export default Icon;
