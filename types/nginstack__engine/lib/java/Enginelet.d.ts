export = Enginelet;
declare function Enginelet(engineletClassName: string): void;
declare class Enginelet {
    constructor(engineletClassName: string);
    handleCommand(commandName: string, param1: string, param2: string, paramN: string): string;
}
