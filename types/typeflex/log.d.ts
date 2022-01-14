import { YGLogLevel } from './enums';
import { YGConfig } from './ygconfig';
import { YGNode } from './ygnode';
export declare class Log {
    static log(using: YGNode | YGConfig, level: YGLogLevel, context: any, format: string, ...args: any[]): void;
}
