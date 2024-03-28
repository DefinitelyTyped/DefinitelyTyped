import type * as PropTypes from "prop-types";

export interface ClassDecorator {
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    <TFunction extends Function>(target: TFunction): TFunction | void;
}

declare var propTypes: (map: PropTypes.ValidationMap<any>) => ClassDecorator;
declare var defaultProps: (defaultProps: any) => ClassDecorator;

export { defaultProps, propTypes };
