import { ClassNamesFn } from './types';

interface ClassNamesBind extends ClassNamesFn {
    bind(styles: Record<string, string>): ClassNamesFn;
}
declare const classNamesBind: ClassNamesBind;

export = classNamesBind;
