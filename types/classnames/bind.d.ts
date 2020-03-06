import { ClassNamesFn } from './types';

type CssModule = Record<
        string,
        | string
        // To accept be the "default" export while using the
        // `import * as styles from '[...].postcss';` way to import the CSS module.
        | Record<string, string>
    >;

interface ClassNamesBind extends ClassNamesFn {
    bind(styles: CssModule): ClassNamesFn;
}
type ClassNamesBindExport = ClassNamesBind & {
    default: ClassNamesBind;
};
declare const classNamesBind: ClassNamesBindExport;

export = classNamesBind;
