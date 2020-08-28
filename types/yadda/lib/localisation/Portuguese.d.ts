import English = require("./English");
import Language = require("./Language");

declare namespace Portuguese {
    interface Vocabulary extends English.Vocabulary {
        seja: string;
        sejam: string;
        dado: string;
        dada: string;
        dados: string;
        dadas: string;
        quando: string;
        se: string;
        entao: string;
    }

    interface Library extends English.Library {
        seja(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        seja(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        seja(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        seja(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        seja(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        seja(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        seja(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        seja(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        sejam(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        sejam(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        sejam(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        sejam(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        sejam(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        sejam(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        sejam(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        sejam(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        dado(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        dado(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        dado(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        dado(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        dado(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        dado(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        dado(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        dado(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        dada(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        dada(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        dada(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        dada(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        dada(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        dada(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        dada(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        dada(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        dados(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        dados(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        dados(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        dados(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        dados(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        dados(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        dados(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        dados(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        dadas(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        dadas(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        dadas(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        dadas(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        dadas(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        dadas(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        dadas(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        dadas(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        quando(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        quando(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        quando(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        quando(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        quando(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        quando(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        quando(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        quando(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        se(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        se(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        se(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        se(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        se(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        se(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        se(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        se(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
        entao(step: string | string[] | RegExp | RegExp[], fn: (...args: string[]) => Promise<void>): this;
        entao(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, next: (err?: Error) => void) => void): this;
        entao(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, next: (err?: Error) => void) => void): this;
        entao(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, arg4: string, next: (err?: Error) => void) => void): this;
        entao(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, arg3: string, next: (err?: Error) => void) => void): this;
        entao(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, arg2: string, next: (err?: Error) => void) => void): this;
        entao(step: string | string[] | RegExp | RegExp[], fn: (arg1: string, next: (err?: Error) => void) => void): this;
        entao(step: string | string[] | RegExp | RegExp[], fn: (next: (err?: Error) => void) => void): this;
    }
}

declare const Portuguese: Language<Portuguese.Library>;

export = Portuguese;
