export = Enginelet;
declare function Enginelet(engineletClassName: string): void;
declare class Enginelet {
    constructor(engineletClassName: string);
    handleCommand(commandName: string, param1: any, param2: any, paramN: any): string;
}
